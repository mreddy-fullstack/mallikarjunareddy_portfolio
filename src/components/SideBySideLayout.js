import React, { useState } from 'react';
import Projects from '../components/Projects';
import Experience from '../components/experience';
import './SideBySideLayout.css';

const SideBySideLayout = () => {
  const [activeContent, setActiveContent] = useState(null);

  const handleProjectClick = (content) => setActiveContent(content);
  const handleExperienceClick = (content) => setActiveContent(content);

  return (
    <section className="side-by-side-layout">
      <div className="left-panel">
        <Projects onClick={handleProjectClick} />
      </div>
      <div className="right-panel">
        <Experience onClick={handleExperienceClick} />
      </div>
      <div className="content-display">
        {activeContent && <div>{activeContent}</div>}
      </div>
    </section>
  );
};

export default SideBySideLayout;
