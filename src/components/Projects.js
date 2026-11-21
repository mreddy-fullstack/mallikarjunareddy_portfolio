import React, { useState } from 'react';
import './Projects.css';

const projectsData = [
  {
    title: 'Frequency Synthesizer',
    details: [
      'Designed an electronic frequency generation circuit for controlled RF signal applications.',
      'Worked on frequency control, analog/RF circuit stages, and signal stability.',
      'Validated the design through schematic development, simulation, and prototype testing.',
    ],
  },
  {
    title: 'Battery Management System / SMPS',
    details: [
      'Developed battery management and switched-mode power supply concepts for reliable power delivery.',
      'Reviewed voltage regulation, protection, efficiency, and thermal considerations.',
      'Created schematics, prepared BOM documentation, and supported prototype assembly and testing.',
    ],
  },
  {
    title: 'Programmable DC Power Supply Module',
    details: [
      'Designed a DC power module with selectable output levels for 13 V and 18 V operation.',
      'Included switchable output selection based on user requirements and application load.',
      'Used circuit simulation and small board prototyping to verify output behavior and reliability.',
    ],
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const toggleDetails = (index) => {
    setActiveProject(activeProject === index ? null : index);
  };

  return (
    <section className="projects">
      <h2>Projects</h2>
      <ul className="project-list">
        {projectsData.map((project, index) => (
          <li key={index} className="project-item">
            <div
              className="project-title"
              onClick={() => toggleDetails(index)}
            >
              {project.title}
            </div>
            {activeProject === index && (
              <ul className="project-details">
                {project.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
