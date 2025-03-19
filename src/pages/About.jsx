import React from 'react';
import '../styles/about.css';
import vishal from '../assets/vishal.png'
import vignesh from '../assets/vignesh.png'
import pradeep from '../assets/pradeep.png'
import giri from '../assets/giri.png'
import sadhur  from '../assets/sadhur.png'

function About() {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-content">
          <h1>About Us</h1>
          <p>
            We are Team Zenith, a group of passionate developers and designers committed to
            creating innovative and impactful projects. Our mission is to deliver excellence
            through collaboration and expertise.
          </p>
        </div>

        <div className="team">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <img src={vishal} alt="Vishal" />
              <h3>Vishal Kannan</h3>
              <p>Developer</p>
            </div>
            <div className="team-member">
              <img src={vignesh} alt="Vignesh" />
              <h3>Vignesh</h3>
              <p>Developer</p>
            </div>
            <div className="team-member">
              <img src={pradeep} alt="Pradeep" />
              <h3>Pradeep</h3>
              <p>Developer</p>
            </div>
            <div className="team-member">
              <img src={giri} alt="Giri" />
              <h3>Giri Prasath</h3>
              <p>Designer</p>
            </div>
            <div className="team-member">
              <img src={sadhur} alt="Sadhur" />
              <h3>Sathurnithy</h3>
              <p>Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
