"use client";

import React from 'react';
import { RiInformationLine } from 'react-icons/ri';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <motion.div 
      className="m-2 bg-[var(--background)] rounded-xl px-4 pt-4 pb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <div className="flex items-center mb-4">
          <motion.div 
            className="w-4 h-4 bg-[var(--primary)] rounded-full mr-2"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="font-bold text-lg">Commercial Experience</span>
        </div>
        <motion.div
          className="w-full bg-[var(--cards)] mt-2 rounded-lg p-4 flex items-center justify-between"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div 
            className="font-bold"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.p 
              className="m-0 text-xl"
              whileHover={{ color: "var(--primary)" }}
            >
              Frontend Developer at EZCLOUD LLC
            </motion.p>
            <motion.span 
              className="text-[var(--foreground-50)] font-medium"
              whileHover={{ color: "var(--foreground)" }}
            >
              Dec 2021 - Mar 2025 (3 years 4 months)
            </motion.span>
          </motion.div>
          <motion.div
            whileHover={{ rotate: 360, scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <RiInformationLine className="text-2xl" />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Experience; 