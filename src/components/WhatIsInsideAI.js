import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './AnimatedSection';
import './WhatIsInsideAI.css';

const WhatIsInsideAI = () => {
  const features = [
    'Upload your script, novel chapter, or story bible.',
    'Automatically extract characters, relationships, and key events.',
    'Build a \'living mind\' for each character based only on your writing.',
    'Talk to them as if they live inside your story\'s reality.'
  ];

  return (
    <section className="what-is">
      <div className="container">
        <FadeIn>
          <h2 className="section-title">What is Inside AI?</h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="section-description">
            Inside AI is a story world engine that takes your script, extracts your characters, builds living<br />
            minds for them, and lets you talk to them as if they're real.
          </p>
        </FadeIn>
        
        <FadeIn delay={0.4}>
          <div className="features-box">
            {features.map((feature, index) => (
              <motion.div 
                className="feature-item" 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ x: 5 }}
              >
                <motion.span 
                  className="feature-icon"
                  whileHover={{ scale: 1.3, rotate: 180 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  ✦
                </motion.span>
                <span className="feature-text">{feature}</span>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default WhatIsInsideAI;

