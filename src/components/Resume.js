import React from 'react';
import './Resume.css';
import { asset, currentRole, education, profile, totalExperienceMonths } from '../data/portfolio';
import { LineIcon } from './Icons';

function Resume() {
  const resumeUrl = asset(profile.resume);
  const months = totalExperienceMonths();
  const latestDegree = education[0];

  const facts = [
    currentRole && { icon: 'server', label: 'Current Role', value: `${currentRole.title} · ${currentRole.company}` },
    { icon: 'zap', label: 'Experience', value: `${months}+ months professional experience` },
    latestDegree && { icon: 'layers', label: 'Education', value: `${latestDegree.title.replace(/ \(.*\)/, '')} · ${latestDegree.type}` },
    { icon: 'mapPin', label: 'Location', value: profile.location },
  ].filter(Boolean);

  return (
    <section id="resume" className="resume">
      <h2>My Resume</h2>
      <p className="section-subtitle">Experience, skills, projects and education in one page-ready document</p>

      <div className="resume-content resume-content-single">
        <div className="resume-info">
          <h3>{profile.name}</h3>
          <p className="resume-role">{profile.title}</p>
          <p className="resume-text">
            A concise overview of my work across full stack web and mobile development, AI-powered
            applications, LLM integrations and business automation, including live projects and
            technical skills.
          </p>

          <ul className="resume-facts">
            {facts.map((fact) => (
              <li key={fact.label}>
                <span className="resume-fact-icon">
                  <LineIcon name={fact.icon} size={18} />
                </span>
                <span>
                  <span className="resume-fact-label">{fact.label}</span>
                  <span className="resume-fact-value">{fact.value}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="resume-actions">
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-icon">
              <LineIcon name="external" size={18} />
              View Resume
            </a>
            <a href={resumeUrl} download="Dev-Mistry-Resume.pdf" className="btn btn-outline btn-icon">
              <LineIcon name="download" size={18} />
              Download PDF
            </a>
          </div>
          <p className="resume-updated">Last updated {profile.resumeUpdated}</p>
        </div>
      </div>
    </section>
  );
}

export default Resume;
