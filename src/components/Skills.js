import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = ['React.js', 'JavaScript', 'Spring Boot', 'MySQL', 'CSS', 'HTML'];

  return (
    <section className="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
