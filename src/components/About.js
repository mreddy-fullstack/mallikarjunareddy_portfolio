import React from 'react';
import './About.css';
import myImage from '../assets/profile.jpg'; // Update with the correct path to your image

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        {/* Left Side: Content */}
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I am a <strong>Java Full Stack Developer</strong> with a strong foundation in both front-end and back-end technologies. I have successfully completed a comprehensive full-stack development course, where I mastered <strong>Java</strong>, <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>SQL</strong>, and the <strong>Spring Framework</strong>.
          </p>
          <p>
            My skills were further enhanced during my internship, where I worked on real-world projects and gained expertise in:
          </p>
          <ul>
            <li>Building <strong>RESTful API applications</strong> with robust back-end logic.</li>
            <li>Using <strong>Postman</strong> for API testing and reliability checks.</li>
            <li>Version control and collaboration with <strong>GitHub</strong>.</li>
            <li>Creating dynamic interfaces with <strong>React.js</strong>.</li>
            <li>Implementing <strong>CI/CD pipelines</strong> for seamless application deployment.</li>
          </ul>
          <p>
            I am passionate about developing innovative, user-centric solutions and thrive in collaborative environments where I can contribute to building scalable and efficient applications.
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="about-image">
          <img src={myImage} alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default About;
