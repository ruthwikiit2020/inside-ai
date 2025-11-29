import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './AnimatedSection';
import './CharacterReality.css';

const CharacterReality = () => {
  const realityFeatures = [
    {
      title: 'Story-locked memory',
      description: 'Characters only know what your script tells them. No out-of-world knowledge.'
    },
    {
      title: 'True-to-character logic',
      description: 'They answer with emotions and thoughts consistent with what they\'ve lived, not generic AI patterns.'
    },
    {
      title: 'World-aware responses',
      description: 'They remember events, timelines, and relationships as if they were there.'
    },
    {
      title: 'Built for creators',
      description: 'Every conversation can become new lines, scenes, or notes in your actual script.'
    }
  ];

  return (
    <section className="character-reality">
      <div className="container">
        <FadeIn>
          <h2 className="section-title">Not just 'AI chat'. A reality your characters believe in.</h2>
        </FadeIn>
        
        <FadeIn delay={0.3}>
          <div className="reality-box">
            {realityFeatures.map((feature, index) => (
              <motion.div 
                className="reality-item" 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                whileHover={{ x: 8, backgroundColor: 'rgba(99, 102, 241, 0.05)' }}
              >
                <motion.span 
                  className="reality-icon"
                  whileHover={{ scale: 1.3, rotate: 90 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  ✦
                </motion.span>
                <div className="reality-content">
                  <strong>{feature.title}</strong> – {feature.description}
                </div>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.6}>
          <p className="reality-quote">
            Inside AI isn't pretending to be your character. It's what happens when your writing becomes their world.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default CharacterReality;

