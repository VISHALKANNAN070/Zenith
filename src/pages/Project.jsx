import React from 'react';
import '../styles/project.css';

const projects = [{
  title: "Poshan Tracker", description: "A diet and nutrition tracker website designed for children in Anganwadis. It helps monitor nutritional intake, track progress, and provide insights for better health planning.", img: null
}, {
  title: "SPARK'25", description: "An international technical conference organized in collaboration with IEEE, bringing together researchers, engineers, and students to discuss groundbreaking innovations and advancements in technology.", img: null
}, {
  title: "NIL", description: "UNDER CONSTRUCTION", img: null
}]
function Project() {
  return (
    <div className="projects">
      <div className="projects-container">
        <h1>PROJECTS</h1>
        <div className="projects-grid">
            {projects.map((project,index)=>(
          <div className="project-card"  key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
      ))}
      </div>
      </div>
    </div>
  );
}

export default Project;
