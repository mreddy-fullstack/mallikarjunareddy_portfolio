import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      {/* Left side: Name and Title */}
      <div className="header-info">
        <h1>Mallikarjuna Reddy Chitiki</h1>
        <p>Full Stack Developer | React & Spring Boot Enthusiast</p>
      </div>

      {/* Right side: Contact List */}
      <ol className="contact-list">
        <li>
          <a href="https://www.linkedin.com/in/mallikarjuna-reddy-chitiki-69a09a327/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </li>
        <li>
          <a href="https://github.com/mreddy-fullstack" target="_blank" rel="noopener noreferrer">Git Hub</a>
        </li>
        <li>
          <a href="mailto:mallikarjunareddy8890@example.com">Email</a>
        </li>
      </ol>
    </header>
  );
};

export default Header;
