import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const scrollToSignup = () => {
    const signupSection = document.querySelector('.signup');
    if (signupSection) {
      signupSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-left">
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              FOR WRITERS, FILMMAKERS & STORYTELLERS
            </motion.p>
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Step Inside<br /><span className="hero-title-large">Your Story.</span>
            </motion.h1>
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Inside AI lets you upload a script, awaken your characters, and talk
              to them as if they're real. For them, your story is the only reality.
              For you, it's a new kind of creative superpower.
            </motion.p>
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.button 
                className="btn-primary btn-large interactive-element" 
                onClick={scrollToSignup}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Join the Early Access List
              </motion.button>
              <motion.button 
                className="btn-secondary btn-large interactive-element"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Watch How It Works
                <span className="badge">Soon</span>
              </motion.button>
            </motion.div>
            <motion.p 
              className="hero-footnote"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              Built for screenwriters, novelists, directors & worldbuilders.
            </motion.p>
          </div>

          <motion.div 
            className="chat-example"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div 
              className="chat-bubble user-bubble"
              whileHover={{ scale: 1.02, x: 5 }}
            >
              Why did you walk away in that scene?
            </motion.div>
            <motion.div 
              className="chat-bubble character-bubble"
              whileHover={{ scale: 1.02 }}
            >
              <p>Because if I stayed, I'd have to admit I still cared. Leaving was easier than telling him the truth.</p>
              <p className="chat-note">This was already hidden in your script. Inside AI just lets her say it out loud.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

