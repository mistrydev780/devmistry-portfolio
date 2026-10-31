// Vercel serverless function: POST /api/contact
// Saves contact form messages to MongoDB. The connection string comes from the
// MONGODB_URI environment variable and never reaches the browser.
const { MongoClient } = require('mongodb');

const DB_NAME = process.env.MONGODB_DB || 'portfolio';
const COLLECTION = 'contact_messages';
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LIMITS = { name: 100, email: 150, subject: 150, message: 2000 };

// Reuse one client across invocations of a warm function
let clientPromise;
function getClient() {
  if (!clientPromise) {
    const client = new MongoClient(process.env.MONGODB_URI, { serverSelectionTimeoutMS: 8000 });
    clientPromise = client.connect().catch((error) => {
      clientPromise = undefined;
      throw error;
    });
  }
  return clientPromise;
}

// Best-effort rate limit per warm instance: 5 messages per IP per 10 minutes
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 5;
const recentByIp = new Map();
function isRateLimited(ip) {
  const now = Date.now();
  const recent = (recentByIp.get(ip) || []).filter((time) => now - time < RATE_WINDOW_MS);
  recent.push(now);
  recentByIp.set(ip, recent);
  return recent.length > RATE_MAX;
}

async function readBody(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  if (typeof req.body === 'string') return JSON.parse(req.body || '{}');
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString('utf8');
  return raw ? JSON.parse(raw) : {};
}

function send(res, status, payload) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(payload));
}

function validate(body) {
  const clean = {};
  for (const field of Object.keys(LIMITS)) {
    const value = typeof body[field] === 'string' ? body[field].trim() : '';
    if (!value) return { error: 'Please fill in all fields.' };
    if (value.length > LIMITS[field]) return { error: `The ${field} is too long.` };
    clean[field] = value;
  }
  if (!EMAIL_PATTERN.test(clean.email)) return { error: 'Please enter a valid email address.' };
  if (clean.name.length < 2) return { error: 'Please enter your name.' };
  if (clean.message.length < 10) return { error: 'Message must be at least 10 characters long.' };
  return { data: clean };
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return send(res, 405, { success: false, message: 'Method not allowed.' });
  }

  let body;
  try {
    body = await readBody(req);
  } catch {
    return send(res, 400, { success: false, message: 'Invalid request.' });
  }

  // Honeypot filled in: answer like a success so bots learn nothing
  if (body.website) return send(res, 200, { success: true });

  const { data, error } = validate(body);
  if (error) return send(res, 400, { success: false, message: error });

  const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim() || req.socket?.remoteAddress || 'unknown';
  if (isRateLimited(ip)) {
    return send(res, 429, { success: false, message: 'Too many messages. Please try again in a few minutes.' });
  }

  if (!process.env.MONGODB_URI) {
    console.error('MONGODB_URI is not set');
    return send(res, 500, { success: false, message: 'The contact form is not configured yet.' });
  }

  try {
    const client = await getClient();
    await client.db(DB_NAME).collection(COLLECTION).insertOne({
      ...data,
      status: 'new',
      userAgent: String(req.headers['user-agent'] || '').slice(0, 300),
      createdAt: new Date(),
    });
    return send(res, 201, { success: true });
  } catch (err) {
    console.error('Failed to save contact message:', err.message);
    return send(res, 500, { success: false, message: 'Unable to send your message right now. Please try again later.' });
  }
};
