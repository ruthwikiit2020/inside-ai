import React from 'react';
import './Header.css';

const Header = () => {
  const scrollToSignup = () => {
    const signupSection = document.querySelector('.signup');
    if (signupSection) {
      signupSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <div className="logo-icon"></div>
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

