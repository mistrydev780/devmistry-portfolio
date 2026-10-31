// Local development server for the /api functions (Vercel runs them in production).
// Start with: npm run api   (CRA proxies /api requests here, see "proxy" in package.json)
const http = require('http');
const contact = require('../api/contact');

const PORT = Number(process.env.API_PORT) || 3002;
const routes = { '/api/contact': contact };

http
  .createServer((req, res) => {
    const handler = routes[req.url.split('?')[0]];
    if (!handler) {
      res.statusCode = 404;
      return res.end(JSON.stringify({ success: false, message: 'Not found' }));
    }
    return handler(req, res);
  })
  .listen(PORT, () => console.log(`API dev server on http://localhost:${PORT}`));
