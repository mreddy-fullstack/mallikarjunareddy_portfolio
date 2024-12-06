import React, { useState } from 'react';
import './Projects.css';

const projectsData = [
  {
    title: 'Online Shopping Platform',
    details: [
      'Developed a responsive shopping platform with React for the front-end.',
      'Implemented secure payment gateways and user authentication features.',
      'Utilized Spring Boot for back-end services and MySQL for database management.',
    ],
  },
  {
    title: 'College Directory Application',
    details: [
      'Created a directory for colleges with advanced search functionality.',
      'Displayed detailed information about courses, faculty, and infrastructure.',
      'Ensured responsiveness and accessibility across all devices.',
    ],
  },
  {
    title: 'Employee Management System',
    details: [
      'Designed a system to manage employee records and payroll processing.',
      'Generated automated performance reports using React and MySQL.',
      'Focused on scalability and user-friendly design.',
    ],
  },
  {
    title: 'Online Tutoring',
    details: [
      'Designed user-friendly interfaces using React.js, HTML, and CSS.',
      'Implemented back-end services with Spring Boot for user and session management.',
      'Integrated third-party APIs for payments and live video sessions.',
      'Ensured responsive design and cross-browser compatibility.',
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
