import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './AnimatedSection';
import './TargetAudience.css';

const TargetAudience = () => {
  const audiences = [
    {
      icon: '🎬',
      title: 'Screenwriters &\nFilmmakers',
      description: 'Stress-test scenes, explore character choices, and keep tone consistent across episodes.'
    },
    {
      icon: '📖',
      title: 'Novelists & Short Story\nWriters',
      description: 'Discover hidden motivations, fix flat dialogue, and explore subplots before committing.'
    },
    {
      icon: '🎭',
      title: 'Directors & Actors',
      description: 'Dive into backstory, emotional logic, and psychology before rehearsals.'
    },
    {
      icon: '🎮',
      title: 'Game Designers & GMs',
      description: 'Turn your NPCs into living minds that stay true to your lore.'
    }
  ];

  return (
    <section className="target-audience">
      <div className="container">
        <FadeIn>
          <h2 className="section-title">Made for people who live in stories.</h2>
        </FadeIn>
        
        <div className="audience-grid">
          {audiences.map((audience, index) => (
            <FadeIn key={index} delay={index * 0.1} direction="up">
              <motion.div 
                className="audience-card interactive-element"
                whileHover={{ 
                  y: -10,
                  scale: 1.03,
                  borderColor: 'var(--primary)'
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="audience-icon"
                  whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {audience.icon}
                </motion.div>
                <h3 className="audience-title">
                  {audience.title.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < audience.title.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h3>
                <p className="audience-description">{audience.description}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;

