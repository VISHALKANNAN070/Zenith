import React from 'react';
import './styles/project.css';

function Project() {
  return (
    <div className="projects">
      <div className="projects-container">
        <h1>Projects</h1>
        <div className="projects-grid">
          <div className="project-card">
            <h2>Project One</h2>
            <p>A brief description of Project One. Innovative and impactful.</p>
          </div>
          <div className="project-card">
            <h2>Project Two</h2>
            <p>A brief description of Project Two. High-quality and efficient.</p>
          </div>
          <div className="project-card">
            <h2>Project Three</h2>
            <p>A brief description of Project Three. A step towards the future.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
