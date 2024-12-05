import React from 'react';
import './About.css';
import myImage from '../assets/profile.jpg'; // Update the path to your image location

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        {/* Left side: Image */}
        <div className="about-image">
          <img src={myImage} alt="About Me" />
        </div>

        {/* Right side: Content */}
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I am a passionate and skilled <strong>Full Stack Developer</strong> with experience in both front-end and back-end development. I specialize in creating dynamic, responsive, and user-friendly web applications. I thrive in building intuitive user interfaces and robust back-end systems.
          </p>
          
          {/* Skills Section */}
          <h3>Skills</h3>
          <ul>
            <li><strong>HTML5</strong> - Crafting the structure of web pages</li>
            <li><strong>CSS3</strong> - Styling responsive layouts</li>
            <li><strong>JavaScript</strong> - Adding interactive elements</li>
            <li><strong>React.js</strong> - Building modern, dynamic UIs</li>
            <li><strong>Java</strong> - Server-side development</li>
            <li><strong>Spring Boot</strong> - Java framework for building applications</li>
            <li><strong>SQL</strong> - Database management and queries</li>
            <li><strong>Postman</strong> - API testing tool</li>
            <li><strong>Git/GitHub</strong> - Version control for code collaboration</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
