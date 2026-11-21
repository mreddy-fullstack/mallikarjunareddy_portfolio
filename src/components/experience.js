import React, { useState } from 'react';
import './experience.css';

const Experience = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <section className="internship">
      <h2>Experience</h2>
      <div className="accordion-item">
        <button
          className={`accordion-header ${activeSection === 'quantica' ? 'active' : ''}`}
          onClick={() => toggleSection('quantica')}
        >
          Professional Experience
        </button>
        {activeSection === 'quantica' && (
          <div className="accordion-content">
            <h3>Embedded Hardware Engineer</h3>
            <p>September 20, 2025 – Present | Quantica Technologies Pvt Ltd</p>
            <ul>
              <li>Work on analog circuit design and RF signal circuit design.</li>
              <li>Support electronic hardware development, testing, and troubleshooting.</li>
              <li>Analyze circuit performance and assist with design validation.</li>
              <li>Collaborate with engineering teams to develop reliable hardware solutions.</li>
            </ul>
          </div>
        )}
      </div>

      <div className="accordion-item">
        <button
          className={`accordion-header ${activeSection === 'technical' ? 'active' : ''}`}
          onClick={() => toggleSection('technical')}
        >
          Technical Experience
        </button>
        {activeSection === 'technical' && (
          <div className="accordion-content">
            <h3>Embedded Hardware Engineering</h3>
            <p>Analog, Power, Microcontroller, and RF Circuit Development</p>
            <ul>
              <li>Designed and supported analog and power electronic circuits.</li>
              <li>Worked with microcontroller-based hardware and RF radar circuits.</li>
              <li>Used OrCAD Capture for schematic design and PSpice for circuit simulation.</li>
              <li>Prepared BOMs and coordinated component purchasing.</li>
              <li>Built prototype boards and used soldering for initial testing and validation.</li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
