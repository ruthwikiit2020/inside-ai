import React from 'react';
import './Header.css';

const Header = () => {
  const scrollToSignup = () => {
    const sections = document.querySelectorAll('section');
    const signupSection = sections[8]; // Last section
    if (signupSection) {
      signupSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <div className="logo-icon-container">
              <svg className="logo-icon-svg" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Hollow outer sphere */}
                <circle cx="18" cy="18" r="16" stroke="url(#gradient1)" strokeWidth="2.5" opacity="0.8"/>
                
                {/* Solid inner sphere */}
                <circle cx="18" cy="18" r="8" fill="url(#gradient1)" opacity="1"/>
                
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="50%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="logo-text">Inside AI</span>
          </div>
          
          <button className="btn-primary btn-cta" onClick={scrollToSignup}>
            Join Early Access
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

