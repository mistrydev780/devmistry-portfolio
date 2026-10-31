import React from 'react';
import './Footer.css';
import { navLinks, profile } from '../data/portfolio';
import { LineIcon, getSocialLinks } from './Icons';

function Footer() {
  const currentYear = new Date().getFullYear();
  const socials = getSocialLinks();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section footer-brand">
          <h3>{profile.name}</h3>
          <p>
            {profile.title} building modern web, mobile and AI-powered products. Let's create
            something impactful together.
          </p>
          <div className="footer-tagline">
            <span className="code-symbol">&lt;/&gt;</span>
            <span>Web · Mobile · AI · Automation</span>
          </div>
        </div>

        <nav className="footer-section" aria-label="Footer">
          <h4>Quick Links</h4>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-section">
          <h4>Connect</h4>
          {socials.length > 0 && (
            <div className="footer-social">
              {socials.map(({ id, label, href, Icon }) => (
                <a
                  key={id}
                  href={href}
                  {...(id !== 'email' && { target: '_blank', rel: 'noopener noreferrer' })}
                  aria-label={label}
                  className="social-link"
                >
                  <Icon size={20} />
                  <span className="social-tooltip" aria-hidden="true">{label}</span>
                </a>
              ))}
            </div>
          )}
          <p className="footer-location">
            <LineIcon name="mapPin" size={16} />
            {profile.location}
          </p>
          <a href="#contact" className="footer-cta">
            Send a message →
          </a>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <p className="copyright">&copy; {currentYear} {profile.name}. All rights reserved.</p>
        <p className="built-with">
          Built with <span className="heart">React &amp; Three.js</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
