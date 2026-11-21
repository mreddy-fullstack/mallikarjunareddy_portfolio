import React from 'react';
import './About.css';
import myImage from '../assets/profile.jpg'; // Update with the correct path to your image

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        {/* Left Side: Content */}
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I am an <strong>Embedded Hardware Engineer</strong> working in analog circuit design and RF signal circuit design. Since September 2025, I have been building my experience at <strong>Quantica Technologies Pvt Ltd</strong>, with a focus on reliable hardware design and signal performance.
          </p>
          <p>
            My engineering approach combines practical circuit design, component selection, simulation, and hands-on testing. My experience includes:
          </p>
          <ul>
            <li>Analog circuit design and hardware implementation.</li>
            <li>RF signal circuit design and analysis.</li>
            <li>Power supply and battery management circuit development.</li>
            <li>Circuit testing, troubleshooting, and validation.</li>
            <li>BOM preparation and component selection for prototypes.</li>
            <li>PCB prototyping, soldering, and in-circuit testing.</li>
          </ul>
          <p>
            I am passionate about designing dependable embedded hardware and continuously improving my expertise in analog and RF electronics.
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="about-image">
          <img src={myImage} alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default About;
