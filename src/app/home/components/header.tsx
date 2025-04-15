"use client";

import React from "react";
import { RiUserSmileLine, RiWindowLine, RiMoonClearLine } from "react-icons/ri";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  return (
    <motion.header 
      className="flex items-center justify-between rounded-2xl bg-[var(--cards)] w-full h-16 px-6 shadow-sm"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-2">
        <motion.div 
          className="rounded-full bg-[var(--primary)] p-2 font-bold w-9 h-9 flex items-center justify-center"
          whileHover={{ 
            scale: 1.1, 
            rotate: 360,
            backgroundColor: "var(--primary-50)",
            transition: { duration: 0.3 }
          }}
        >
          DM
        </motion.div>
        <motion.div
          whileHover={{ 
            scale: 1.1, 
            rotate: 10,
            color: "var(--primary)",
            transition: { duration: 0.2 }
          }}
        >
          <RiUserSmileLine size={36} color="var(--foreground)" />
        </motion.div>
        <motion.div
          whileHover={{ 
            scale: 1.1, 
            rotate: -10,
            color: "var(--primary)",
            transition: { duration: 0.2 }
          }}
        >
          <RiWindowLine size={36} color="var(--foreground)" />
        </motion.div>
      </div>
      <div className="flex items-center gap-2">
        <motion.div
          whileHover={{ 
            scale: 1.1, 
            rotate: 180,
            color: "var(--primary)",
            transition: { duration: 0.3 }
          }}
        >
          <RiMoonClearLine size={36} color="var(--foreground)" />
        </motion.div>
        <motion.button 
          className="bg-[var(--primary)] text-[var(--foreground)] font-bold py-1.5 px-3 rounded-xl relative overflow-hidden border-2 border-[var(--foreground)] transition-colors"
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
      </div>
    </motion.header>
  );
};

export default Header;
