import React from 'react';
import { motion } from 'framer-motion';

export const FloatingCard = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ 
        y: [0, -10, 0],
      }}
      transition={{
        duration: 3,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
};

