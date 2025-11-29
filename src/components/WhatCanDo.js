import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './AnimatedSection';
import './WhatCanDo.css';

const WhatCanDo = () => {
  const useCases = [
    {
      title: 'Fix flat scenes',
      description: 'Drop your protagonist into a conversation about the climactic moment. Ask, \'What were you actually afraid of here?\' Rewrite from their truth.'
    },
    {
      title: 'Test alternate storylines',
      description: 'Ask, \'What if you never got that call?\' Watch how the character logically imagines a different path based on their worldview.'
    },
    {
      title: 'Table reads without a table',
      description: 'Simulate multi-character scenes (coming soon) and see how dynamics shift when lines or decisions change.'
    },
    {
      title: 'Character interviews',
      description: 'Run in-universe interviews to build richer character bibles and casting notes.'
    }
  ];

  return (
    <section className="what-can-do">
      <div className="container">
        <FadeIn>
          <h2 className="section-title">What can you do Inside AI?</h2>
        </FadeIn>
        
        <div className="use-cases-grid">
          {useCases.map((useCase, index) => (
            <FadeIn key={index} delay={index * 0.15} direction="up">
              <motion.div 
                className="use-case-card interactive-element"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: 'var(--primary)',
                  boxShadow: '0 10px 30px rgba(99, 102, 241, 0.2)'
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="use-case-title">{useCase.title}</h3>
                <p className="use-case-description">{useCase.description}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatCanDo;

