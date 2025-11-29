import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const phoneNumber = '9182127853';
  const message = encodeURIComponent('Hi! I\'m interested in Inside AI.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button interactive-element"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        delay: 1, 
        type: "spring", 
        stiffness: 260, 
        damping: 20 
      }}
      whileHover={{ 
        scale: 1.1,
        boxShadow: "0 10px 30px rgba(37, 211, 102, 0.4)"
      }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        className="whatsapp-icon"
        animate={{
          rotate: [0, 15, -15, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeInOut"
        }}
      >
        <MessageCircle size={28} />
      </motion.div>
      <motion.div
        className="whatsapp-pulse"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut"
        }}
      />
    </motion.a>
  );
};

export default WhatsAppButton;

