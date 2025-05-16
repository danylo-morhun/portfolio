'use client';

import React from 'react';
import { RiLinkedinFill, RiGithubFill, RiTelegramFill } from 'react-icons/ri';
import { motion } from 'framer-motion';

const SocialLinks: React.FC = () => {
  return (
    <div className="m-2">
      <div className="bg-[var(--background)] rounded-lg p-4 flex items-center justify-between">
        <motion.div
          className="flex items-center"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-4 h-4 bg-[var(--primary)] rounded-full mr-2"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="font-bold text-lg">My Socials</span>
        </motion.div>
        <div className="flex gap-4">
          <motion.a
            href="https://www.linkedin.com/in/danylo-morhun/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[var(--primary)] w-10 h-10 rounded-full flex items-center justify-center text-[var(--on-primary)] relative overflow-hidden cursor-pointer"
            whileHover={{
              scale: 1.1,
              rotate: -15,
              backgroundColor: 'var(--primary-50)',
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div className="relative z-10" whileHover={{ color: 'var(--on-primary)' }}>
              <RiLinkedinFill size={20} />
            </motion.div>
            <motion.div
              className="absolute inset-0 bg-[var(--primary)] opacity-0"
              whileHover={{ opacity: 0.2 }}
              transition={{ duration: 0.2 }}
            />
          </motion.a>
          <motion.a
            href="https://github.com/danylo-morhun"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[var(--primary)] w-10 h-10 rounded-full flex items-center justify-center text-[var(--on-primary)] relative overflow-hidden cursor-pointer"
            whileHover={{
              scale: 1.1,
              rotate: 15,
              backgroundColor: 'var(--primary-50)',
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div className="relative z-10" whileHover={{ color: 'var(--on-primary)' }}>
              <RiGithubFill size={20} />
            </motion.div>
            <motion.div
              className="absolute inset-0 bg-[var(--primary)] opacity-0"
              whileHover={{ opacity: 0.2 }}
              transition={{ duration: 0.2 }}
            />
          </motion.a>
          <motion.a
            href="https://t.me/danylo_morhun"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[var(--primary)] w-10 h-10 rounded-full flex items-center justify-center text-[var(--on-primary)] relative overflow-hidden cursor-pointer"
            whileHover={{
              scale: 1.1,
              rotate: -15,
              backgroundColor: 'var(--primary-50)',
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div className="relative z-10" whileHover={{ color: 'var(--on-primary)' }}>
              <RiTelegramFill size={20} />
            </motion.div>
            <motion.div
              className="absolute inset-0 bg-[var(--primary)] opacity-0"
              whileHover={{ opacity: 0.2 }}
              transition={{ duration: 0.2 }}
            />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;