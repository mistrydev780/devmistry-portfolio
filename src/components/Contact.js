import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';
import { profile } from '../data/portfolio';
import { LineIcon, getSocialLinks } from './Icons';

// Messages are saved to MongoDB by the serverless function in api/contact.js.
const CONTACT_ENDPOINT = `${process.env.PUBLIC_URL}/api/contact`;

// Optional email copy via Web3Forms (its access keys are public by design).
const WEB3FORMS_ACCESS_KEY = process.env.REACT_APP_WEB3FORMS_ACCESS_KEY;

function sendEmailCopy({ name, email, subject, message }) {
  if (!WEB3FORMS_ACCESS_KEY) return;
  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      name,
      email,
      subject: `${subject} | Portfolio message from ${name}`,
      message,
      from_name: `${profile.name} Portfolio`,
    }),
  }).catch((error) => console.error('Email copy failed:', error));
}

const EMPTY_FORM = { name: '', email: '', subject: '', message: '' };

const Contact = () => {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');
  const resetTimer = useRef(null);
  const socials = getSocialLinks().filter((link) => link.id !== 'email');

  useEffect(() => () => clearTimeout(resetTimer.current), []);

  const showStatus = (status, message) => {
    setSubmitStatus(status);
    setSubmitMessage(message);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (submitStatus) showStatus('', '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const name = formData.name.trim();
    const email = formData.email.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    if (!name || !email || !subject || !message) {
      showStatus('error', 'Please fill in all fields.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showStatus('error', 'Please enter a valid email address.');
      return;
    }

    if (message.length < 10) {
      showStatus('error', 'Message must be at least 10 characters long.');
      return;
    }

    // Bots fill the hidden field; pretend success without sending anything.
    if (honeypot) {
      showStatus('success', 'Thank you! Your message has been sent successfully.');
      setFormData(EMPTY_FORM);
      return;
    }

    setIsSubmitting(true);
    showStatus('', '');

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ name, email, subject, message, website: honeypot }),
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok && result.success) {
        sendEmailCopy({ name, email, subject, message });
        showStatus('success', 'Thank you! Your message has been sent successfully.');
        setFormData(EMPTY_FORM);
        clearTimeout(resetTimer.current);
        resetTimer.current = setTimeout(() => showStatus('', ''), 6000);
      } else {
        showStatus('error', result.message || 'Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      showStatus(
        'error',
        'Unable to send your message. Please check your internet connection and try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <div className="contact-content">
        <div className="contact-info">
          <h3>Let's Build Something Together</h3>
          <p>
            Have a project, opportunity or collaboration in mind? Send me a message and I'll get
            back to you as soon as possible.
          </p>

          <div className="contact-details">
            {profile.email && (
              <div className="contact-item">
                <div className="icon">
                  <LineIcon name="mail" size={22} />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>
                    <a href={`mailto:${profile.email}`}>{profile.email}</a>
                  </p>
                </div>
              </div>
            )}

            <div className="contact-item">
              <div className="icon">
                <LineIcon name="mapPin" size={22} />
              </div>
              <div>
                <h4>Location</h4>
                <p>{profile.location}</p>
              </div>
            </div>
          </div>

          {socials.length > 0 && (
            <div className="social-links">
              {socials.map(({ id, label, href, Icon }) => (
                <a key={id} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                  <Icon size={20} />
                </a>
              ))}
            </div>
          )}
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                minLength="2"
                maxLength="100"
                autoComplete="name"
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                maxLength="150"
                autoComplete="email"
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="contact-subject">Subject</label>
            <input
              id="contact-subject"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What would you like to discuss?"
              required
              maxLength="150"
              disabled={isSubmitting}
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project or idea..."
              rows="6"
              required
              minLength="10"
              maxLength="2000"
              disabled={isSubmitting}
            />
          </div>

          {/* Honeypot: hidden from people, filled in by bots */}
          <input
            type="text"
            name="website"
            className="form-honeypot"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            tabIndex="-1"
            autoComplete="off"
            aria-hidden="true"
          />

          <div aria-live="polite">
            {submitMessage && (
              <div
                className={`submit-message ${submitStatus}`}
                role={submitStatus === 'error' ? 'alert' : 'status'}
              >
                {submitMessage}
              </div>
            )}
          </div>

          <button type="submit" className="btn" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
