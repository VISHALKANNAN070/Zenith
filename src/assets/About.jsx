import React from 'react';
import './styles/about.css';

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
              <img src="/images/member1.jpg" alt="Member 1" />
              <h3>John Doe</h3>
              <p>Frontend Developer</p>
            </div>
            <div className="team-member">
              <img src="/images/member2.jpg" alt="Member 2" />
              <h3>Jane Smith</h3>
              <p>Backend Developer</p>
            </div>
            <div className="team-member">
              <img src="/images/member3.jpg" alt="Member 3" />
              <h3>Michael Lee</h3>
              <p>UI/UX Designer</p>
            </div>
            <div className="team-member">
              <img src="/images/member4.jpg" alt="Member 4" />
              <h3>Sarah Brown</h3>
              <p>Project Manager</p>
            </div>
            <div className="team-member">
              <img src="/images/member5.jpg" alt="Member 5" />
              <h3>Chris Evans</h3>
              <p>DevOps Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
