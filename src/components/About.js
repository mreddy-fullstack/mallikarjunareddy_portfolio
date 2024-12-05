import React from 'react';
import './About.css';
import myPhoto from '../assets/profile.jpg'; // Import your image here

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        {/* Image Section */}
        <div className="image-section">
          <img src={myPhoto} alt="About Me" />
        </div>

        {/* Text Content Section */}
        <div className="content-section">
          <h2>About Me</h2>
          <p>
            I am a passionate full-stack developer with a knack for building interactive and efficient web applications.
            My expertise lies in creating user-friendly front-end interfaces and robust back-end systems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
