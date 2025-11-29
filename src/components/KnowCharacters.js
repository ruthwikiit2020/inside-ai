import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './AnimatedSection';
import './KnowCharacters.css';

const KnowCharacters = () => {
  return (
    <section className="know-characters">
      <div className="container">
        <FadeIn>
          <h2 className="section-title">
            You know your characters. But do you <em>really</em> know them?
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="section-description">
            You're stuck on a scene. The beats are fine. The structure is solid. But something feels hollow. The<br />
            character is saying the words, not <em>living</em> them.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <p className="section-description">
            What if you could upload that script and step into the character's mind? Ask them directly:
          </p>
        </FadeIn>
        
        <FadeIn delay={0.4}>
          <motion.div 
            className="questions-box"
            whileHover={{ borderColor: 'var(--primary)', scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.p 
              className="question"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              "What were you actually afraid of here?"
            </motion.p>
            <motion.p 
              className="question"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              "What did you want to say but didn't?"
            </motion.p>
          </motion.div>
        </FadeIn>

        <FadeIn delay={0.6}>
          <p className="section-description">
            Inside AI doesn't replace you as the writer. It reveals the depth that's already in your pages.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default KnowCharacters;

