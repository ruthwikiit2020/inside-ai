import React, { useState, useEffect } from 'react';
import './ScreenNavigation.css';

const ScreenNavigation = () => {
  const [activeScreen, setActiveScreen] = useState(0);

  const screens = [
    { id: 0, name: 'Hero', label: 'Home' },
    { id: 1, name: 'HowItWorks', label: 'How It Works' },
    { id: 2, name: 'WhatIsInsideAI', label: 'What Is It' },
    { id: 3, name: 'CharacterReality', label: 'Reality' },
    { id: 4, name: 'KnowCharacters', label: 'Know Them' },
    { id: 5, name: 'WhatCanDo', label: 'Use Cases' },
    { id: 6, name: 'TargetAudience', label: 'Audience' },
    { id: 7, name: 'EarlyAccess', label: 'Status' },
    { id: 8, name: 'SignUp', label: 'Join' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveScreen(index);
        }
      });
    };

    const appContent = document.querySelector('.app-content');
    if (appContent) {
      appContent.addEventListener('scroll', handleScroll);
      return () => appContent.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollToScreen = (index) => {
    const sections = document.querySelectorAll('section');
    if (sections[index]) {
      sections[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="screen-navigation">
      <div className="nav-dots">
        {screens.map((screen) => (
          <button
            key={screen.id}
            className={`nav-dot ${activeScreen === screen.id ? 'active' : ''}`}
            onClick={() => scrollToScreen(screen.id)}
            title={screen.label}
          >
            <span className="nav-circle"></span>
          </button>
        ))}
      </div>
      <div className="nav-progress">
        <div 
          className="nav-progress-bar" 
          style={{ width: `${((activeScreen + 1) / screens.length) * 100}%` }}
        />
      </div>
    </nav>
  );
};

export default ScreenNavigation;

