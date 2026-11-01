import React, { useEffect, useRef, useState } from 'react';
import './About.css';
import { about, expertise, projects, totalExperienceMonths } from '../data/portfolio';

function About() {
  const skillsRef = useRef(null);
  const [skillsVisible, setSkillsVisible] = useState(false);

  // Fill the skill bars the first time the card scrolls into view
  useEffect(() => {
    const node = skillsRef.current;
    if (!node || !('IntersectionObserver' in window)) {
      setSkillsVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const months = totalExperienceMonths();
  const stats = [
    {
      value: months >= 12 ? `${Math.floor(months / 12)}+` : `${months}+`,
      label: months >= 12 ? 'Years of Experience' : 'Months of Experience',
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

        <div ref={skillsRef} className={`skills-container ${skillsVisible ? 'is-visible' : ''}`}>
          <h3>My Skills</h3>
          <ul className="skills">
            {about.skills.map((skill, index) => (
              <li key={skill.name} className="skill">
                <div className="skill-header">
                  <span className="skill-title">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}</span>
                </div>
                <div
                  className="skill-bar"
                  role="progressbar"
                  aria-label={`${skill.name}: ${skill.level}`}
                  aria-valuenow={skill.value}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="skill-progress"
                    style={{
                      width: skillsVisible ? `${skill.value}%` : 0,
                      transitionDelay: `${index * 0.08}s`,
                    }}
                  ></div>
                </div>
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
