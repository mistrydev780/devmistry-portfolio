import React from 'react';
import './TechSkills.css';
import {
  expertise,
  levels,
  logoClass,
  techIdForSkill,
  techLogoSrc,
  techStack,
  technologies,
} from '../data/portfolio';
import { LineIcon } from './Icons';

function TechLogo({ id, className }) {
  const src = techLogoSrc(id);
  const { name } = technologies[id];

  // No official logo available: clean text label instead
  if (!src) {
    return (
      <span className={`tech-text-logo ${className || ''}`} aria-hidden="true">
        {name}
      </span>
    );
  }

  return (
    <img
      src={src}
      alt=""
      className={`${className} ${logoClass(id)}`}
      loading="lazy"
      width="60"
      height="60"
    />
  );
}

function SectionDecoration() {
  return (
    <div className="section-decoration" aria-hidden="true">
      <span className="decoration-dot"></span>
      <span className="decoration-line"></span>
      <span className="decoration-dot"></span>
    </div>
  );
}

function TechSkills() {
  const logoCount = techStack.reduce((total, group) => total + group.items.length, 0);
  const coreLanguages = techStack
    .find((group) => group.id === 'languages')
    .items.filter((tech) => !tech.familiar).length;

  return (
    <section id="tech-skills" className="tech-skills">
      <div className="section-header">
        <h2 className="section-title">Skills &amp; Expertise</h2>
        <SectionDecoration />
        <p className="section-lead">
          Full stack web and mobile engineering, combined with practical AI, LLM and automation work.
        </p>
      </div>

      <ul className="level-legend" aria-label="Experience level legend">
        {Object.entries(levels).map(([key, label]) => (
          <li key={key}>
            <span className={`level-dot level-${key}`} aria-hidden="true"></span>
            {label}
          </li>
        ))}
      </ul>

      <div className="expertise-grid">
        {expertise.map((area, idx) => (
          <article
            key={area.id}
            className={`expertise-card ${area.featured ? 'featured' : ''}`}
            style={{ animationDelay: `${idx * 0.08}s` }}
          >
            <h3 className="category-title">
              <span className="category-icon">
                <LineIcon name={area.icon} size={26} />
              </span>
              {area.title}
            </h3>
            <p className="expertise-highlight">{area.highlight}</p>
            <ul className="expertise-tags">
              {area.items.map((skill) => {
                const techId = techIdForSkill(skill.name);
                const logo = techId && techLogoSrc(techId);
                return (
                  <li key={skill.name} className="expertise-tag" title={levels[skill.level]}>
                    <span className={`level-dot level-${skill.level}`} aria-hidden="true"></span>
                    {logo && (
                      <img
                        src={logo}
                        alt=""
                        className={`expertise-logo ${logoClass(techId)}`}
                        width="16"
                        height="16"
                        loading="lazy"
                      />
                    )}
                    {skill.name}
                    {skill.level !== 'hands-on' && (
                      <span className="sr-only"> ({levels[skill.level]})</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </article>
        ))}
      </div>

      <div className="section-header stack-header">
        <h3 className="section-title">Technology Stack</h3>
        <SectionDecoration />
      </div>

      <div className="skills-categories">
        {techStack.map((group, idx) => (
          <div key={group.id} className="skill-category" style={{ animationDelay: `${idx * 0.1}s` }}>
            <h4 className="category-title">
              <span className="category-icon">
                <LineIcon name={group.icon} size={26} />
              </span>
              {group.title}
            </h4>
            <ul className="skills-grid">
              {group.items.map((tech, index) => {
                const { name } = technologies[tech.id];
                return (
                  <li
                    key={tech.id}
                    className={`skill-card ${tech.familiar ? 'familiar' : ''}`}
                    style={{ animationDelay: `${idx * 0.1 + index * 0.05}s` }}
                    title={tech.familiar ? `${name} · Familiar` : name}
                  >
                    <div className="skill-image-wrapper">
                      <TechLogo id={tech.id} className="skill-image" />
                    </div>
                    <div className="skill-name">
                      <span>{name}</span>
                    </div>
                    {tech.familiar && <span className="familiar-badge">Familiar</span>}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <div className="tech-stack-summary">
        <h3>Engineering Across the Stack</h3>
        <p className="stack-description">
          From interfaces and APIs to databases, cloud deployment and AI-powered automation
        </p>
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">{logoCount}+</div>
            <div className="stat-label">Technologies</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{expertise.length}</div>
            <div className="stat-label">Expertise Areas</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{coreLanguages}</div>
            <div className="stat-label">Core Languages</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechSkills;
