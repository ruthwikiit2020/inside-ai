import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <div className="logo-icon">
              <svg width="28" height="28" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="18" r="16" stroke="url(#gradient-footer)" strokeWidth="2.5" opacity="0.8"/>
                <circle cx="18" cy="18" r="8" fill="url(#gradient-footer)" opacity="1"/>
                <defs>
                  <linearGradient id="gradient-footer" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="50%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="logo-text">Inside AI</span>
          </div>
          <p className="footer-text">&copy; 2025 Inside AI. Built for storytellers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
