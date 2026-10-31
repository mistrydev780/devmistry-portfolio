import React from 'react';
import './About.css';
import { about, expertise, projects, totalExperienceMonths } from '../data/portfolio';

function About() {
  const months = totalExperienceMonths();
  const stats = [
    {
      value: months >= 12 ? `${Math.floor(months / 12)}+ Years` : `${months}+ Months`,
      label: 'Professional Experience',
    },
    { value: 'First Class', label: 'BCA Distinction' },
    { value: projects.length, label: 'Featured Projects' },
    { value: expertise.length, label: 'Expertise Areas' },
  ];

  return (
    <section id="about" className="about">
      <h2>About Me</h2>

      <div className="about-content">
        <div className="about-text">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="skills-container">
          <h3>Core Focus</h3>
          <ul className="skills">
            {about.focus.map((focus) => (
              <li key={focus.name} className="skill focus-item">
                <span className="focus-name">{focus.name}</span>
                <p className="focus-detail">{focus.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="stats">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-item">
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
