import React from 'react';
import './ProfileSections.css';

const ProfileSections = () => {
  return (
    <section className="profile-sections">
      <div className="profile-grid">
        <article className="profile-card">
          <h2>Education</h2>
          <p>
            Electronics and embedded hardware education supporting my experience in analog,
            power, microcontroller, and RF circuit design.
          </p>
        </article>

        <article className="profile-card">
          <h2>Technical Tools</h2>
          <ul>
            <li>OrCAD Capture</li>
            <li>PSpice</li>
            <li>Analog Circuit Testing</li>
            <li>Power Electronics Testing</li>
            <li>Prototype Soldering</li>
            <li>BOM Documentation</li>
          </ul>
        </article>

        <article className="profile-card">
          <h2>Achievements</h2>
          <ul>
            <li>Advanced from hardware fundamentals to professional embedded hardware work.</li>
            <li>Gained hands-on experience in analog, RF, power, and microcontroller circuits.</li>
            <li>Supported prototype development from schematic design through board testing.</li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default ProfileSections;
