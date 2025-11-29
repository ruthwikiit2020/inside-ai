import React from 'react';
import { motion } from 'framer-motion';
import './DepthLayers.css';

export const DepthLayers = () => {
  return (
    <div className="depth-layers">
      {/* Layer 1 - Deep background orbs */}
      <motion.div
        className="depth-orb depth-orb-1"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Layer 2 - Mid orbs */}
      <motion.div
        className="depth-orb depth-orb-2"
        animate={{
          x: [0, -80, 0],
          y: [0, 80, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
      />
      
      {/* Layer 3 - Front orbs */}
      <motion.div
        className="depth-orb depth-orb-3"
        animate={{
          x: [0, 60, 0],
          y: [0, -60, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 10
        }}
      />

      {/* Vignette effect */}
      <div className="depth-vignette" />
    </div>
  );
};

