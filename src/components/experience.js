import React, { useState } from 'react';
import './experience.css';

const Experience = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <section className="internship">
      <h2>Experience & Courses</h2>
      <div className="accordion-item">
        <button
          className={`accordion-header ${activeSection === 'internship' ? 'active' : ''}`}
          onClick={() => toggleSection('internship')}
        >
          Internship Experience
        </button>
        {activeSection === 'internship' && (
          <div className="accordion-content">
            <h3>Software Developer Traineeship</h3>
            <p>Feb 2024 – Jul 2024 | Numetry Technologies</p>
            <ul>
              <li>Developed dynamic and responsive web applications using React.js and Spring Boot.</li>
              <li>Integrated RESTful APIs for seamless communication between front-end and back-end systems.</li>
              <li>Optimized SQL queries and managed relational databases to improve application performance.</li>
              <li>Collaborated with cross-functional teams to implement agile methodologies and deliver projects on time.</li>
              <li>Tested and debugged applications to ensure smooth functionality and reliability.</li>
            </ul>
          </div>
        )}
      </div>

      <div className="accordion-item">
        <button
          className={`accordion-header ${activeSection === 'course' ? 'active' : ''}`}
          onClick={() => toggleSection('course')}
        >
          Java Full Stack Course
        </button>
        {activeSection === 'course' && (
          <div className="accordion-content">
            <h3>JSpiders-Marathahalli</h3>
            <p>Completed Sep - 2023</p>
            <ul>
              <li>Comprehensive training in Java, Spring, Hibernate, and React.js.</li>
              <li>Hands-on projects, including an online shopping platform and an employee management system.</li>
              <li>Built robust back-end systems using Spring Boot and integrated front-end components with React.js.</li>
              <li>Learned effective version control using Git and GitHub for collaborative development.</li>
              <li>Enhanced debugging, testing, and optimization skills through real-world problem-solving.</li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
