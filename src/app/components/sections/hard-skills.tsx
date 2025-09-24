'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface HardSkill {
  id: number;
  title: string;
  abbr: string;
  description: string;
  color: string;
}

export default function HardSkills() {
  const [hardSkills, setHardSkills] = useState<HardSkill[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/hard-skills`, {
          cache: 'no-store',
        });
        const data = await res.json();
        setHardSkills(data);
      } catch (error) {
        console.error('Error fetching hard skills:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSkills();
  }, []);

  const SkeletonSkill = () => (
    <div className="glass-inside w-full mt-2 rounded-2xl p-4 flex items-center animate-pulse">
      <div className="flex-shrink-0 w-16 h-16 mr-4">
        <div className="w-16 h-16 rounded-full bg-[var(--foreground-20)]" />
      </div>
      <div className="flex-1">
        <div className="h-6 w-3/4 bg-[var(--foreground-20)] rounded mb-2" />
        <div className="h-4 w-1/2 bg-[var(--foreground-20)] rounded" />
      </div>
    </div>
  );

  const displayedSkills = showAll ? hardSkills : hardSkills.slice(0, 3);
  const hasMoreSkills = hardSkills.length > 3;
  const peekSkill = !showAll && hasMoreSkills ? hardSkills[3] : null;

  return (
    <div className="m-2 rounded-xl px-4 pt-4 pb-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <motion.div
            className="w-4 h-4 bg-[var(--primary)] rounded-full mr-2"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="font-bold text-lg">Hard Skills</span>
        </div>
        {hasMoreSkills && (
          <motion.button
            className="glass-inside border-2 border-solid border-[var(--glass-border)] text-[var(--foreground)] font-bold px-4 rounded-2xl relative overflow-hidden cursor-pointer"
            whileHover={{
              scale: 1.05,
              backgroundColor: 'var(--cards-hover)',
              borderColor: 'var(--primary)',
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAll(!showAll)}
          >
            <motion.span className="relative z-10" whileHover={{ color: 'var(--primary)' }}>
              {showAll ? 'Show less' : 'View all'}
            </motion.span>
            <motion.div
              className="absolute inset-0 bg-[var(--primary)] opacity-0"
              whileHover={{ opacity: 0.1 }}
              transition={{ duration: 0.2 }}
            />
          </motion.button>
        )}
      </div>

      {isLoading ? (
        <>
          <SkeletonSkill />
          <SkeletonSkill />
          <SkeletonSkill />
        </>
      ) : (
        <div className="relative">
          <motion.div initial={false} animate={{ height: 'auto' }} transition={{ duration: 0.3 }}>
            {displayedSkills.map((skill, _index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.2,
                  type: 'spring',
                  stiffness: 200,
                  damping: 20,
                }}
                whileHover={{ scale: 1.02 }}
                className="glass-inside glass-hover w-full mt-2 rounded-2xl p-4 flex items-center"
              >
                <motion.div
                  className="relative flex-shrink-0 w-16 h-16 mr-4"
                  whileHover={{ rotate: -15 }}
                  transition={{ duration: 0.5 }}
                >
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: skill.color, opacity: 0.5 }}
                  />
                  <div className="relative w-full h-full rounded-full flex items-center justify-center">
                    <motion.div
                      className="glass-inside text-xl w-12 h-12 rounded-full font-bold flex items-center justify-center text-white relative overflow-hidden"
                      style={{ backgroundColor: skill.color }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <motion.span className="relative z-10">{skill.abbr}</motion.span>
                      <motion.div
                        className="absolute inset-0 bg-white opacity-0"
                        whileHover={{ opacity: 0.2 }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
                <div className="font-bold min-w-0">
                  <motion.p className="m-0 text-xl break-words" whileHover={{ color: skill.color }}>
                    {skill.title}
                  </motion.p>
                  <motion.span
                    className="text-[var(--foreground-50)] font-medium break-words"
                    whileHover={{ color: 'var(--foreground)' }}
                  >
                    {skill.description}
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {peekSkill && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.4, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{
                duration: 0.4,
                ease: 'easeInOut',
              }}
              className="glass-inside w-full mt-2 rounded-2xl p-4 flex items-center blur-[1px] cursor-pointer"
              onClick={() => setShowAll(true)}
              whileHover={{ opacity: 0.6, scale: 1.02 }}
            >
              <motion.div
                className="relative flex-shrink-0 w-16 h-16 mr-4"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                <div
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: peekSkill.color, opacity: 0.5 }}
                />
                <div className="relative w-full h-full rounded-full flex items-center justify-center">
                  <div
                    className="text-xl w-12 h-12 rounded-full font-bold flex items-center justify-center text-white relative overflow-hidden"
                    style={{ backgroundColor: peekSkill.color }}
                  >
                    <span className="relative z-10">{peekSkill.abbr}</span>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="font-bold min-w-0"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                <p className="m-0 text-xl break-words">{peekSkill.title}</p>
                <span className="text-[var(--foreground-50)] font-medium break-words">
                  {peekSkill.description}
                </span>
              </motion.div>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
}