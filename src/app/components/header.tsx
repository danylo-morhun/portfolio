'use client';

import React from 'react';
import { RiWindowLine, RiMoonClearLine, RiSunLine } from 'react-icons/ri';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from '@/app/context/ThemeContext';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.header
      className="flex items-center justify-between rounded-2xl bg-[var(--cards)] w-full h-16 px-6 shadow-sm"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-2">
        <Link href="/">
          <motion.div
            className="rounded-full bg-[var(--primary)] p-2 font-bold w-9 h-9 flex items-center justify-center text-[var(--on-primary)]"
            whileHover={{
              scale: 1.1,
              rotate: 360,
              backgroundColor: 'var(--primary-50)',
              transition: { duration: 0.3 },
            }}
          >
            DM
          </motion.div>
        </Link>
        <Link href="/experience">
          <motion.div
            whileHover={{
              scale: 1.1,
              rotate: -10,
              color: 'var(--primary)',
              transition: { duration: 0.2 },
            }}
          >
            <RiWindowLine size={36} color="var(--foreground)" />
          </motion.div>
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <motion.button
          onClick={toggleTheme}
          whileHover={{
            scale: 1.1,
            rotate: 180,
            color: 'var(--primary)',
            transition: { duration: 0.3 },
          }}
          className="p-2"
        >
          {theme === 'dark' ? (
            <RiSunLine size={36} color="var(--foreground)" />
          ) : (
            <RiMoonClearLine size={36} color="var(--foreground)" />
          )}
        </motion.button>
        <Link href="/#contact">
          <motion.button
            className="bg-[var(--primary)] text-[var(--on-primary)] font-bold py-1.5 px-3 rounded-xl relative overflow-hidden border-2 border-[var(--foreground)] transition-colors cursor-pointer"
            whileHover={{
              scale: 1.05,
              backgroundColor: 'var(--primary-50)',
              borderColor: 'var(--primary)',
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span className="relative z-10" whileHover={{ color: 'var(--on-primary)' }}>
              Hire me!
            </motion.span>
            <motion.div
              className="absolute inset-0 bg-[var(--primary)] opacity-0"
              whileHover={{ opacity: 0.2 }}
              transition={{ duration: 0.2 }}
            />
          </motion.button>
        </Link>
      </div>
    </motion.header>
  );
};

export default Header;