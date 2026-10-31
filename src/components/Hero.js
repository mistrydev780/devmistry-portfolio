import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';
import { asset, currentRole, profile, techLogoSrc } from '../data/portfolio';
import { LineIcon, getSocialLinks } from './Icons';

const ROLES = profile.roles;

// Must match the role-write / role-pen animation duration in Hero.css
const ROLE_DURATION = 4000;

function Hero() {
  const imageRef = useRef(null);
  const [imageError, setImageError] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [reduceMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  const socials = getSocialLinks();
  const showPhoto = profile.photo && !imageError;

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, ROLE_DURATION);
    return () => clearInterval(id);
  }, [reduceMotion]);

  // Parallax + 3D tilt on the portrait, written straight to the DOM so mouse moves don't re-render React
  useEffect(() => {
    if (reduceMotion) return;
    let frame = 0;
    const handleMouseMove = (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        if (imageRef.current) {
          imageRef.current.style.transform = `perspective(1000px) translate(${x}px, ${y}px) rotateY(${x * 0.6}deg) rotateX(${-y * 0.6}deg)`;
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [reduceMotion]);

  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        {currentRole && (
          <p className="hero-status">
            <span className="hero-status-dot" aria-hidden="true"></span>
            {currentRole.title} at {currentRole.company}
          </p>
        )}
        <p className="greeting">Hi, I'm</p>
        <h1 className="hero-title">
          <span className="name">{profile.name}</span>
        </h1>
        <h2 className="hero-subtitle" aria-label={ROLES.join(', ')}>
          {reduceMotion ? (
            <span className="role role-static" aria-hidden="true">
              <span className="role-text">{ROLES.join(' · ')}</span>
            </span>
          ) : (
            // key remounts the span so the write animation restarts for each role
            <span key={roleIndex} className="role" aria-hidden="true">
              <span className="role-text">{ROLES[roleIndex]}</span>
              <span className="role-pen"></span>
            </span>
          )}
        </h2>
        <ul className="hero-focus" aria-label="Focus areas">
          {profile.focusAreas.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
        <div className="hero-description">
          <p className="hero-headline">{profile.headline}</p>
          <p>{profile.description}</p>
        </div>
        <div className="hero-buttons">
          <a href="#projects" className="btn" onClick={(e) => smoothScroll(e, '#projects')}>
            Explore My Work
          </a>
          <a href={asset(profile.resume)} className="btn btn-outline btn-icon" download>
            <LineIcon name="download" size={18} />
            Download Resume
          </a>
          <a href="#contact" className="btn btn-outline" onClick={(e) => smoothScroll(e, '#contact')}>
            Contact Me
          </a>
        </div>
      </div>

      <div
        ref={imageRef}
        className="hero-image"
        style={{ transition: 'transform 0.3s ease-out' }}
      >
        <div className={`image-placeholder ${showPhoto ? 'portrait' : ''}`}>
          {/* Orbiting particles */}
          <div className="orbit"></div>
          <div className="orbit"></div>
          <div className="orbit"></div>
          <div className="orbit"></div>

          {showPhoto ? (
            <div className="portrait-frame">
              <img
                src={asset(profile.photo)}
                alt={`${profile.name} - ${profile.title}`}
                width="360"
                height="480"
                onError={() => setImageError(true)}
              />
              <span className="portrait-shine" aria-hidden="true"></span>
              <div className="portrait-caption" aria-hidden="true">
                <span className="portrait-name">{profile.name}</span>
                <span className="portrait-role">{profile.title}</span>
              </div>
            </div>
          ) : (
            <div className="hero-monogram" role="img" aria-label={profile.name}>
              <span aria-hidden="true">{profile.initials}</span>
            </div>
          )}

          {showPhoto &&
            profile.heroBadges.map((badge, i) => (
              <div key={badge.tech} className={`hero-badge hero-badge-${i + 1}`} aria-hidden="true">
                <img src={techLogoSrc(badge.tech)} alt="" width="22" height="22" />
                <span>{badge.label}</span>
              </div>
            ))}
        </div>
      </div>

      {socials.length > 0 && (
        <div className="hero-social">
          {socials.map(({ id, label, href, Icon }) => (
            <a
              key={id}
              href={href}
              {...(id !== 'email' && { target: '_blank', rel: 'noopener noreferrer' })}
              aria-label={label}
            >
              <Icon size={24} />
            </a>
          ))}
        </div>
      )}

      <a href="#about" className="scroll-indicator" onClick={(e) => smoothScroll(e, '#about')}>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Scroll Down</p>
      </a>
    </section>
  );
}

export default Hero;
