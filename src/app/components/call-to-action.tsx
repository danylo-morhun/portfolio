"use client";

import React, { useState } from 'react';
import { RiMailLine } from 'react-icons/ri';
import { motion, AnimatePresence } from 'framer-motion';

const CallToAction: React.FC = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('danylo.morhun@gmail.com');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <motion.div 
      className="m-2 bg-[var(--cards)] rounded-xl px-4 pt-4 pb-4 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2 
        className="text-2xl font-bold mb-2"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        Let's work together!
      </motion.h2>
      <motion.p 
        className="text-[var(--foreground-50)] mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Creating user-friendly and scalable web applications!
      </motion.p>
      <div className="flex gap-4 justify-center">
        <motion.button 
          className="bg-[var(--primary)] text-[var(--foreground)] font-bold py-1.5 px-4 rounded-xl relative overflow-hidden border-2 border-[var(--foreground)] transition-colors"
          whileHover={{ 
            scale: 1.05,
            backgroundColor: "var(--primary-50)",
            borderColor: "var(--primary)",
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            className="relative z-10"
            whileHover={{ color: "var(--foreground)" }}
          >
            Hire me!
          </motion.span>
          <motion.div
            className="absolute inset-0 bg-[var(--primary)] opacity-0"
            whileHover={{ opacity: 0.2 }}
            transition={{ duration: 0.2 }}
          />
        </motion.button>
        <motion.button 
          onClick={handleCopyEmail}
          className="border-2 border-solid border-[var(--border)] text-[var(--foreground)] font-bold py-2 px-6 rounded-xl flex items-center gap-2 relative overflow-hidden"
          whileHover={{ 
            scale: 1.05,
            backgroundColor: "var(--cards)",
            borderColor: "var(--primary)",
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: isCopied ? 360 : 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-10"
          >
            <RiMailLine size={20} />
          </motion.div>
          <AnimatePresence mode="wait">
            {isCopied ? (
              <motion.span
                key="copied"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="relative z-10"
              >
                Copied!
              </motion.span>
            ) : (
              <motion.span
                key="copy"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="relative z-10"
              >
                Copy Email
              </motion.span>
            )}
          </AnimatePresence>
          <motion.div
            className="absolute inset-0 bg-[var(--primary)] opacity-0"
            whileHover={{ opacity: 0.1 }}
            transition={{ duration: 0.2 }}
          />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CallToAction; 