import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <div className="logo-icon"></div>
            <span className="logo-text">Inside AI</span>
          </div>
          <p className="footer-text">&copy; 2025 Inside AI. Built for storytellers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
