import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './AnimatedSection';
import './EarlyAccess.css';

const EarlyAccess = () => {
  return (
    <section className="early-access">
      <div className="container">
        <FadeIn>
          <h2 className="section-title">Where we are right now</h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="early-access-status">
            Inside AI is in <strong>early concept & prototyping stage</strong>. We're talking to writers, directors, and showrunners.<br />
            We're testing character extraction and memory graphs on real scripts. We're designing workflows for<br />
            writers' rooms and film rooms.
          </p>
        </FadeIn>
        <FadeIn delay={0.4}>
          <motion.p 
            className="early-access-cta"
            whileHover={{ scale: 1.05 }}
          >
            If you join now, you're not just a user — you're a founding collaborator.
          </motion.p>
        </FadeIn>
      </div>
    </section>
  );
};

export default EarlyAccess;

