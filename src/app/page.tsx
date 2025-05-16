'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { AnimatedSection } from '@/app/components/ui/AnimatedSection';
import Header from '@/app/components/header';
import HardSkills from '@/app/components/sections/hard-skills';
import Experience from '@/app/components/sections/experience';
import CallToAction from '@/app/components/sections/call-to-action';
import SocialLinks from '@/app/components/sections/social-links';
import { FADE_IN_ANIMATION, SLIDE_UP_ANIMATION } from '@/app/lib/constants';

export default function HomePage() {
  return (
    <motion.div
      className="bg-[var(--background)] p-2 sm:p-4 w-full max-w-[600px] mx-auto"
      variants={FADE_IN_ANIMATION}
      initial="hidden"
      animate="visible"
    >
      <Header />

      <AnimatedSection variants={SLIDE_UP_ANIMATION}>
        <div className="flex items-center justify-between p-4 sm:p-6 w-full">
          <motion.div
            className="flex items-center"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.div
              className="w-4 h-4 bg-[var(--primary)] rounded-full mr-2"
              animate={{
                scale: [1, 1.2, 1],
                boxShadow: [
                  '0 0 0 rgba(var(--primary-rgb), 0.4)',
                  '0 0 10px rgba(var(--primary-rgb), 0.8)',
                  '0 0 0 rgba(var(--primary-rgb), 0.4)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <span className="font-bold text-sm sm:text-lg">Frontend Developer</span>
          </motion.div>
          <motion.div
            className="flex items-center"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.div
              className="w-4 h-4 bg-[var(--positive-50)] rounded-full mr-2 flex items-center"
              animate={{
                scale: [1, 1.1, 1],
                boxShadow: [
                  '0 0 0 rgba(var(--positive-rgb), 0.4)',
                  '0 0 10px rgba(var(--positive-rgb), 0.8)',
                  '0 0 0 rgba(var(--positive-rgb), 0.4)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <motion.div
                className="w-2 h-2 bg-[var(--positive)] rounded-full m-auto"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
            <span className="font-bold text-sm sm:text-lg">Open to Work</span>
          </motion.div>
        </div>

        <div className="flex items-center justify-between p-4 sm:p-6 w-full">
          <motion.div
            className="text-2xl sm:text-2xl font-bold"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.span className="flex items-center">
              Hello!
              <motion.div whileHover={{ rotate: 30 }} transition={{ duration: 0.3 }}>
                <Image
                  src="/hello.png"
                  alt="Hello"
                  width={20}
                  height={20}
                  className="ml-2 sm:w-6 sm:h-6"
                  priority
                />
              </motion.div>
            </motion.span>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              I am Danylo
              <br />
              — developer
              <br />
              with 3+ years of
              <br />
              experience.
            </motion.div>
          </motion.div>

          <motion.div
            className="w-32 h-32 sm:w-40 sm:h-40 bg-[var(--primary-50)] rounded-full flex items-center justify-center"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
              delay: 0.6,
            }}
            whileHover={{
              scale: 1.05,
              rotate: 5,
              transition: { duration: 0.3 },
            }}
          >
            <motion.div
              className="w-28 h-28 sm:w-36 sm:h-36 bg-[var(--primary)] rounded-full overflow-hidden"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/face.webp"
                alt="Face"
                width={144}
                height={144}
                priority
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>

        <HardSkills />
        <Experience />
        <CallToAction />
        <SocialLinks />
      </AnimatedSection>
    </motion.div>
  );
}