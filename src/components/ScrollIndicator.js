import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './ScrollIndicator.css';

const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const appContent = document.querySelector('.app-content');
      if (appContent) {
        const totalScroll = appContent.scrollHeight - appContent.clientHeight;
        const currentScroll = appContent.scrollTop;
        const progress = (currentScroll / totalScroll) * 100;
        setScrollProgress(progress);
      }
    };

    const appContent = document.querySelector('.app-content');
    if (appContent) {
      appContent.addEventListener('scroll', handleScroll);
      return () => appContent.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <motion.div 
      className="scroll-indicator"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: scrollProgress / 100 }}
      transition={{ duration: 0.1 }}
    />
  );
};

export default ScrollIndicator;

