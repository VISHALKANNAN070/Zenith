import React from 'react';
import '../styles/project.css';

function Project() {
  return (
    <div className="projects">
      <div className="projects-container">
        <h1>Projects</h1>
        <div className="projects-grid">
          <div className="project-card">
            <h2>Poshan Tracker</h2>
            <p>A diet and nutrition tracker website designed for children in Anganwadis. It helps monitor nutritional intake, track progress, and provide insights for better health planning.</p>
          </div>
          <div className="project-card">
            <h2>SPARK'25</h2>
            <p>An international technical conference organized in collaboration with IEEE, bringing together researchers, engineers, and students to discuss groundbreaking innovations and advancements in technology.</p>
          </div>
          <div className="project-card">
            <h2>Skill Bridge</h2>
            <p>A platform that connects students with mentors for skill-based learning and project collaboration, enabling practical knowledge sharing and real-world experience.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
