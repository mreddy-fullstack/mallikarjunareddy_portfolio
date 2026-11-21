import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        <div className="skills-column">
          <h3>Circuit Design</h3>
          <ul>
            <li>Analog Circuit Design</li>
            <li>RF Signal Circuit Design</li>
            <li>Power Electronics</li>
            <li>Microcontroller Circuit Design</li>
            <li>Circuit Analysis and Simulation</li>
            <li>Electronic Hardware Development</li>
          </ul>
        </div>
        <div className="skills-column">
          <h3>Tools & Testing</h3>
          <ul>
            <li>OrCAD Capture</li>
            <li>PSpice Simulation</li>
            <li>Schematic Capture</li>
            <li>BOM Creation</li>
            <li>Component Selection</li>
            <li>Prototype Soldering and Testing</li>
            <li>Circuit Troubleshooting</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
