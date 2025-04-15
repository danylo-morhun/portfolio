"use client";

import React from "react";
import { motion } from "framer-motion";

export interface Skill {
  title: string;
  description: string;
  color: string;
}

interface HardSkillsProps {
  hardSkills: Skill[];
}

const getAbbreviation = (title: string): string => {
  const words = title.split(' ');
  if (words.length > 1 && words.length < 3) {
    return words.map(word => word[0]).join('').toUpperCase();
  }
  if (words.length > 2) {
    return title.slice(0, 2).toUpperCase();
  }
  return title.slice(0, 2).toUpperCase();
};

const HardSkills: React.FC<HardSkillsProps> = ({ hardSkills }) => {
  return (
    <div className="m-2 bg-[var(--background)] rounded-xl px-4 pt-4 pb-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <motion.div 
            className="w-4 h-4 bg-[var(--primary)] rounded-full mr-2"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="font-bold text-lg">Hard Skills</span>
        </div>
        <motion.button 
          className="bg-none border-2 border-solid border-[var(--border)] text-[var(--foreground)] font-bold px-4 rounded-lg relative overflow-hidden"
          whileHover={{ 
            scale: 1.05,
            backgroundColor: "var(--cards)",
            borderColor: "var(--primary)",
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            className="relative z-10"
            whileHover={{ color: "var(--primary)" }}
          >
            View all
          </motion.span>
          <motion.div
            className="absolute inset-0 bg-[var(--primary)] opacity-0"
            whileHover={{ opacity: 0.1 }}
            transition={{ duration: 0.2 }}
          />
        </motion.button>
      </div>

      {hardSkills.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{ scale: 1.02 }}
          className="w-full bg-[var(--cards)] mt-2 rounded-lg p-4 flex items-center"
        >
          <motion.div 
            className="relative flex-shrink-0 w-16 h-16 mr-4"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <div 
              className="absolute inset-0 rounded-full"
              style={{ backgroundColor: skill.color, opacity: 0.5 }}
            />
            <div 
              className="relative w-full h-full rounded-full flex items-center justify-center"
            >
              <motion.div 
                className="text-xl w-12 h-12 rounded-full font-bold flex items-center justify-center text-white relative overflow-hidden"
                style={{ backgroundColor: skill.color }}
                whileHover={{ scale: 1.1 }}
              >
                <motion.span className="relative z-10">
                  {getAbbreviation(skill.title)}
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-white opacity-0"
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            </div>
          </motion.div>
          <div className="font-bold min-w-0">
            <motion.p 
              className="m-0 text-xl break-words"
              whileHover={{ color: skill.color }}
            >
              {skill.title}
            </motion.p>
            <motion.span 
              className="text-[var(--foreground-50)] font-medium break-words"
              whileHover={{ color: "var(--foreground)" }}
            >
              {skill.description}
            </motion.span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default HardSkills;
