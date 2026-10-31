import React, { useState } from 'react';
import './Projects.css';
import { asset, projects, socialLinks, technologies } from '../data/portfolio';
import { GitHubIcon, LineIcon } from './Icons';

const INITIAL_COUNT = 6;

const CATEGORY_ICONS = {
  'AI Applications': 'cpu',
  'Full Stack Web': 'code',
  'Automation & Integrations': 'zap',
};

const STATUS = {
  live: { label: 'Live' },
  source: { label: 'Source Code' },
  private: { label: 'Private' },
  development: { label: 'In Development' },
};

function ProjectCover({ project }) {
  if (project.image) {
    return <img src={asset(project.image)} alt={`${project.title} preview`} loading="lazy" />;
  }

  // Generated cover for projects without a public screenshot
  return (
    <div className="project-cover" aria-hidden="true">
      <span className="project-cover-icon">
        <LineIcon name={project.icon} size={34} />
      </span>
      <span className="project-cover-title">{project.title}</span>
      <span className="project-cover-tagline">{project.tagline}</span>
    </div>
  );
}

function Projects() {
  const [filter, setFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const categories = [...new Set(projects.map((p) => p.category))];
  const filters = [
    { value: 'all', label: 'All Projects', icon: 'grid' },
    ...categories.map((c) => ({ value: c, label: c, icon: CATEGORY_ICONS[c] || 'code' })),
  ];

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((project) => project.category === filter);
  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, INITIAL_COUNT);
  const hiddenCount = filteredProjects.length - visibleProjects.length;

  const selectFilter = (value) => {
    setFilter(value);
    setShowAll(false);
  };

  return (
    <section id="projects" className="projects">
      <h2>Featured Projects</h2>

      <p className="section-subtitle">
        AI applications, SaaS platforms, business tools and automation systems
      </p>

      <div className="filter-buttons">
        {filters.map((item) => (
          <button
            key={item.value}
            type="button"
            className={`filter-btn ${filter === item.value ? 'active' : ''}`}
            onClick={() => selectFilter(item.value)}
            aria-pressed={filter === item.value}
          >
            <span className="filter-icon">
              <LineIcon name={item.icon} size={18} />
            </span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      <div className="projects-count" aria-live="polite">
        Showing {visibleProjects.length} of {filteredProjects.length}{' '}
        {filteredProjects.length === 1 ? 'project' : 'projects'}
      </div>

      <div className="projects-grid">
        {visibleProjects.map((project) => {
          const status = STATUS[project.status] || STATUS.live;
          const hasLinks = Boolean(project.github || project.demo);
          return (
            <article key={project.id} className="project-card">
              <div className="project-image">
                <ProjectCover project={project} />

                <span className={`project-status status-${project.status}`}>
                  <span className="status-dot" aria-hidden="true"></span>
                  {status.label}
                </span>

                <div className="project-overlay">
                  {hasLinks ? (
                    <div className="project-links">
                      {project.github && (
                        <a
                          href={project.github}
                          className="project-link github-link"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} source code on GitHub`}
                          title="View Source Code"
                        >
                          <GitHubIcon size={22} />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          className="project-link demo-link"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} live demo`}
                          title="View Live Demo"
                        >
                          <LineIcon name="external" size={22} />
                        </a>
                      )}
                      {project.admin && (
                        <a
                          href={project.admin}
                          className="project-link admin-link"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} admin panel`}
                          title="View Admin Panel"
                        >
                          <LineIcon name="grid" size={22} />
                        </a>
                      )}
                    </div>
                  ) : (
                    <span className="project-links project-overlay-label">{status.label} Project</span>
                  )}
                </div>
              </div>

              <div className="project-info">
                <h3>{project.title}</h3>
                <p className="project-description" title={project.description}>{project.description}</p>

                <ul className="technologies" aria-label="Technologies">
                  {project.tech.map((id) => (
                    <li key={id} className="tech-tag">
                      {technologies[id].name}
                    </li>
                  ))}
                </ul>

                {/* Touch screens have no hover overlay, so links appear here instead */}
                {hasLinks && (
                  <div className="project-touch-links">
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <LineIcon name="external" size={15} />
                        Live Demo
                      </a>
                    )}
                    {project.admin && (
                      <a href={project.admin} target="_blank" rel="noopener noreferrer">
                        <LineIcon name="grid" size={15} />
                        Admin
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <GitHubIcon size={15} />
                        GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>

      <div className="projects-more">
        {hiddenCount > 0 && (
          <button type="button" className="btn btn-outline" onClick={() => setShowAll(true)}>
            Show all {filteredProjects.length} projects
          </button>
        )}
        {socialLinks.github && (
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="btn btn-icon">
            <GitHubIcon size={18} />
            More on GitHub
          </a>
        )}
      </div>
    </section>
  );
}

export default Projects;
