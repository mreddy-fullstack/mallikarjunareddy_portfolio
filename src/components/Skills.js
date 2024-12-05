import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills">
      <h2>Technical Skills</h2>
      <div className="skills-container">
        {/* Left Column: Skills 1 */}
        <div className="skills-column">
          <ul>
            <li><strong>HTML5</strong></li>
            <li><strong>CSS3</strong></li>
            <li><strong>JavaScript</strong></li>
            <li><strong>React.js</strong></li>
            <li><strong>Java</strong></li>
            <li><strong>Spring Boot</strong></li>
          </ul>
        </div>

        {/* Right Column: Skills 2 */}
        <div className="skills-column">
          <ul>
            <li><strong>SQL</strong></li>
            <li><strong>Hibernate</strong></li>
            <li><strong>Postman</strong></li>
            <li><strong>Git/GitHub</strong></li>
            <li><strong>RESTful APIs</strong></li>
            <li><strong>Version Control</strong></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
