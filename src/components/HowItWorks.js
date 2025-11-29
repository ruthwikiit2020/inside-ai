import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './AnimatedSection';
import './HowItWorks.css';

const HowItWorks = () => {
  const acts = [
    {
      icon: '🎬',
      label: 'Act I',
      title: 'Upload the Story',
      description: 'Drop in your screenplay, pilot episode, novel chapter, or series bible. Inside AI reads your world the way a dedicated story analyst would — but faster.'
    },
    {
      icon: '🧠',
      label: 'Act II',
      title: 'Characters Wake Up',
      description: 'Inside AI identifies characters, relationships, histories, traumas, quirks, and goals. It builds a character graph: who they love, who they fear, what they want.'
    },
    {
      icon: '💬',
      label: 'Act III',
      title: 'Step Inside & Talk',
      description: 'Open a chat with any character. Ask questions. Test scenes. Hear how they\'d really say that one crucial line, from inside their reality.'
    }
  ];

  return (
    <section className="how-it-works">
      <div className="container">
        <FadeIn>
          <h2 className="section-title">How Inside AI Works (In Three Acts)</h2>
        </FadeIn>
        <div className="acts-grid">
          {acts.map((act, index) => (
            <FadeIn key={index} delay={index * 0.2} direction="up">
              <motion.div 
                className="act-card interactive-element"
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)" 
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="act-icon"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {act.icon}
                </motion.div>
                <div className="act-label">{act.label}</div>
                <h3 className="act-title">{act.title}</h3>
                <p className="act-description">{act.description}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

