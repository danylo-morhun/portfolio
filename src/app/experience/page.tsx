'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { AnimatedSection } from '@/app/components/ui/AnimatedSection';
import Header from '@/app/components/header';
import CallToAction from '@/app/components/sections/call-to-action';
import SocialLinks from '@/app/components/sections/social-links';
import { FADE_IN_ANIMATION, SLIDE_UP_ANIMATION } from '@/app/lib/constants';

interface Project {
  id: number;
  title: string;
  description: string;
  stack: string[];
}

interface Experience {
  id: number;
  title: string;
  logo: string;
  location: string;
  duration: string;
  projects: Project[];
}

export default function ExperiencePage() {
  const [experience, setExperience] = useState<Experience[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/experience`, {
          cache: 'no-store',
        });
        const data = await res.json();
        setExperience(data);
      } catch (error) {
        console.error('Error fetching experience:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchExperience();
  }, []);

  const SkeletonExperience = () => (
    <div className="w-full bg-[var(--cards)] mt-2 rounded-lg p-4 animate-pulse">
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 rounded-full bg-[var(--foreground-10)] mr-4" />
        <div className="flex-1">
          <div className="h-6 w-3/4 bg-[var(--foreground-10)] rounded mb-2" />
          <div className="h-4 w-1/2 bg-[var(--foreground-10)] rounded" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-4 w-full bg-[var(--foreground-10)] rounded" />
        <div className="h-4 w-3/4 bg-[var(--foreground-10)] rounded" />
      </div>
    </div>
  );

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
            className="text-2xl sm:text-2xl font-bold"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-2"
            >
              <motion.div
                className="w-4 h-4 bg-[var(--primary)] rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Commercial Experience
            </motion.div>
          </motion.div>
        </div>

        <div className="px-4 pb-4">
          {isLoading ? (
            <>
              <SkeletonExperience />
              <SkeletonExperience />
            </>
          ) : (
            experience.map(exp => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: exp.id * 0.1 }}
                className="w-full bg-[var(--background)] mt-2 rounded-lg p-4"
              >
                <div className="flex items-center mb-4">
                  <motion.div
                    className="relative flex-shrink-0 w-16 h-16 mr-4"
                    whileHover={{ rotate: -15 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="absolute inset-0 rounded-full bg-[var(--primary)] opacity-20" />
                    <div className="relative w-full h-full rounded-full flex items-center justify-center">
                      <motion.div
                        className="text-xl w-12 h-12 rounded-full font-bold flex items-center justify-center text-white relative overflow-hidden"
                        style={{ backgroundColor: 'var(--primary)' }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <motion.span className="relative z-10">
                          <div className="relative w-16 h-16">
                            <Image
                              src={exp.logo}
                              alt={`${exp.title} logo`}
                              fill
                              className="object-contain"
                            />
                          </div>
                        </motion.span>
                        <motion.div
                          className="absolute inset-0 bg-white opacity-0"
                          whileHover={{ opacity: 0.2 }}
                          transition={{ duration: 0.2 }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                  <div>
                    <motion.p
                      className="m-0 text-xl font-bold"
                      whileHover={{ color: 'var(--primary)' }}
                    >
                      {exp.title}
                    </motion.p>
                    <motion.span
                      className="text-[var(--foreground-50)] font-medium"
                      whileHover={{ color: 'var(--foreground)' }}
                    >
                      {exp.duration}
                    </motion.span>
                  </div>
                </div>

                <div className="space-y-4">
                  {exp.projects.map(project => (
                    <motion.div
                      key={project.id}
                      className="bg-[var(--cards)] rounded-lg p-4"
                      whileHover={{ scale: 1.02 }}
                    >
                      <motion.h3
                        className="text-lg font-bold mb-2"
                        whileHover={{ color: 'var(--primary)' }}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.p
                        className="text-[var(--foreground-50)] mb-3"
                        whileHover={{ color: 'var(--foreground)' }}
                      >
                        {project.description}
                      </motion.p>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech, index) => (
                          <motion.span
                            key={index}
                            className="px-3 py-1.5 bg-[var(--cards)] border border-[var(--primary)] text-[var(--foreground-70)] rounded-full text-sm font-medium flex items-center gap-1.5"
                            whileHover={{
                              scale: 1.05,
                              backgroundColor: 'var(--primary)',
                              borderColor: 'var(--primary)',
                              color: 'var(--foreground)',
                              transition: { duration: 0.2 },
                            }}
                          >
                            <motion.span
                              className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]"
                              whileHover={{
                                backgroundColor: 'var(--foreground)',
                                scale: 1.2,
                              }}
                            />
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))
          )}
        </div>

        <CallToAction />
        <SocialLinks />
      </AnimatedSection>
    </motion.div>
  );
}