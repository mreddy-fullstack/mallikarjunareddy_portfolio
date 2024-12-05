import React from 'react';
import './Skills.css'; // Import the CSS file for styling

const Skills = () => {
  return (
    <section className="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        {/* Left Section */}
        <div className="skills-list">
          <h3>Technical Skills</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Java (Full Stack Development)</li>
            <li>Spring Framework</li>
            <li>Hibernate</li>
            <li>SQL</li>
            <li>Postman</li>
            <li>Git/GitHub</li>
            <li>RESTful APIs</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="skills-info">
          <h3>About My Skills</h3>
          <p>
            As a full-stack developer, I have a diverse skill set that includes both front-end and back-end technologies.
            I am proficient in building responsive web applications using **React.js** and **JavaScript**, and have experience in developing back-end services with **Spring Framework** and **Hibernate**.
            Additionally, I have worked with **SQL** for database management and utilize tools like **Postman** for API testing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
