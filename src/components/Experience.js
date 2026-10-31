import React from 'react';
import './Experience.css';
import { education, experience, logoClass, techIdForSkill, techLogoSrc } from '../data/portfolio';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const parseMonth = (value) => {
  const [year, month] = value.split('-').map(Number);
  return { year, month };
};

const formatMonth = ({ year, month }) => `${MONTHS[month - 1]} ${year}`;

// "Aug 2026 – Present · 3 mos" (months counted inclusively, like LinkedIn)
function formatPeriod(start, end, { showDuration = true } = {}) {
  const from = parseMonth(start);
  const now = new Date();
  const to = end ? parseMonth(end) : { year: now.getFullYear(), month: now.getMonth() + 1 };
  const range = `${formatMonth(from)} – ${end ? formatMonth(to) : 'Present'}`;
  if (!showDuration) return range;

  const months = (to.year - from.year) * 12 + (to.month - from.month) + 1;
  const years = Math.floor(months / 12);
  const rest = months % 12;
  const parts = [];
  if (years) parts.push(`${years} yr${years > 1 ? 's' : ''}`);
  if (rest) parts.push(`${rest} mo${rest > 1 ? 's' : ''}`);
  return `${range} · ${parts.join(' ')}`;
}

// Prefer an official acronym like "(GTU)", otherwise the first two initials
const initials = (name) => {
  const acronym = name.match(/\(([A-Z]{2,5})\)/);
  if (acronym) return acronym[1];
  return name
    .split(/\s+/)
    .filter((word) => /^[A-Za-z]/.test(word))
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join('');
};

function TechTags({ items }) {
  return (
    <div className="tech-tags">
      {items.map((tech) => {
        const techId = techIdForSkill(tech);
        const logo = techId && techLogoSrc(techId);
        return (
          <span key={tech} className="tech-tag">
            {logo && <img src={logo} alt="" className={logoClass(techId)} width="16" height="16" loading="lazy" />}
            {tech}
          </span>
        );
      })}
    </div>
  );
}

function TimelineCard({ title, subtitle, location, period, type, current, children }) {
  return (
    <div className={`timeline-content ${current ? 'current' : ''}`}>
      <div className="experience-header">
        {subtitle && (
          <span className={`org-badge ${initials(subtitle).length > 3 ? 'org-badge-long' : ''}`} aria-hidden="true">
            {initials(subtitle)}
          </span>
        )}
        <div className="experience-title-section">
          <h3>{title}</h3>
          {(subtitle || location) && (
            <div className="company-info">
              {subtitle && <span className="company">{subtitle}</span>}
              {location && <span className="location">{location}</span>}
            </div>
          )}
        </div>
      </div>
      <div className="experience-meta">
        <span className="period">{period}</span>
        <span className={`type ${current ? 'type-current' : ''}`}>
          {current && <span className="live-dot" aria-hidden="true"></span>}
          {type}
        </span>
      </div>
      {children}
    </div>
  );
}

function Experience() {
  return (
    <section id="experience" className="experience">
      <h2>Work Experience</h2>

      <div className="timeline">
        {experience.map((exp, index) => (
          <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-dot"></div>
            <TimelineCard
              title={exp.title}
              subtitle={exp.company}
              location={exp.location}
              period={formatPeriod(exp.start, exp.end)}
              type={exp.type}
              current={exp.end === null}
            >
              <p className="description">{exp.description}</p>

              {exp.achievements.length > 0 && (
                <div className="achievements">
                  <h4>Key Achievements:</h4>
                  <ul>
                    {exp.achievements.map((achievement) => (
                      <li key={achievement}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}

              {exp.technologies.length > 0 && (
                <div className="technologies">
                  <strong>Technologies:</strong>
                  <TechTags items={exp.technologies} />
                </div>
              )}
            </TimelineCard>
          </div>
        ))}
      </div>

      <h2 id="education" className="education-heading">Education</h2>

      <div className="timeline">
        {education.map((edu, index) => (
          <div key={edu.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-dot"></div>
            <TimelineCard
              title={edu.title}
              subtitle={edu.institution}
              period={formatPeriod(edu.start, edu.end, { showDuration: false })}
              type={edu.type}
              current={edu.type === 'Pursuing'}
            >
              {edu.grade && (
                <p className="grade-badge">
                  <span aria-hidden="true">★</span> {edu.grade}
                </p>
              )}
              <p className="description">{edu.description}</p>
              {edu.tags.length > 0 && (
                <div className="technologies">
                  <strong>{edu.type === 'Pursuing' ? 'Focus Areas:' : 'Activities:'}</strong>
                  <TechTags items={edu.tags} />
                </div>
              )}
            </TimelineCard>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
