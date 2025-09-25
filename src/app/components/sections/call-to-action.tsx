'use client';

import React, { useState } from 'react';
import { RiUserHeartLine } from 'react-icons/ri';
import { motion } from 'framer-motion';
import HireMeModal from '@/app/components/ui/HireMeModal';

const CallToAction: React.FC = () => {
  const [isHireMeModalOpen, setIsHireMeModalOpen] = useState(false);

  const openHireMeModal = () => {
    setIsHireMeModalOpen(true);
  };

  const closeHireMeModal = () => {
    setIsHireMeModalOpen(false);
  };

  return (
    <motion.div
      id="contact"
      className="m-2 rounded-xl px-4 pt-4 pb-4 text-center"
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
        Let&apos;s work together!
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
          onClick={openHireMeModal}
          className="glass-inside border-2 border-solid border-[var(--glass-border)] text-[var(--foreground)] font-bold py-2 px-6 rounded-2xl flex items-center gap-2 relative overflow-hidden cursor-pointer"
          whileHover={{
            scale: 1.05,
            backgroundColor: 'var(--cards-hover)',
            borderColor: 'var(--primary)',
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.3 }}
            className="relative z-10"
          >
            <RiUserHeartLine size={20} />
          </motion.div>
          <motion.span
            className="relative z-10"
            whileHover={{ color: 'var(--primary)' }}
          >
            Hire Me!
          </motion.span>
          <motion.div
            className="absolute inset-0 bg-[var(--primary)] opacity-0"
            whileHover={{ opacity: 0.1 }}
            transition={{ duration: 0.2 }}
          />
        </motion.button>
      </div>
      
      {/* Hire Me Modal */}
      <HireMeModal
        isOpen={isHireMeModalOpen}
        onClose={closeHireMeModal}
      />
    </motion.div>
  );
};

export default CallToAction;