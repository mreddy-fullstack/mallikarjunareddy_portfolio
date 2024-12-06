import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        <div className="skills-column">
          <ul>
            <li>Java</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>SQL</li>
            <li>Spring Framework</li>
            <li>Spring</li>
          </ul>
        </div>
        <div className="skills-column">
          <ul>
            <li>Hibernate</li>
            <li>Spring Boot</li>
            <li>React.js</li>
            <li>Postman</li>
            <li>Git/GitHub</li>
            <li>RESTful APIs</li>
            <li>CI/CD</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
