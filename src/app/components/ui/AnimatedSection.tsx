'use client';

import { motion, Variants } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  initial?: string;
  animate?: string;
}

export const AnimatedSection = ({
  children,
  className = '',
  variants,
  initial = 'hidden',
  animate = 'visible',
}: AnimatedSectionProps) => {
  return (
    <motion.section
      className={`rounded-2xl bg-[var(--cards)] w-full shadow-sm mt-2 pb-2 ${className}`}
      variants={variants}
      initial={initial}
      animate={animate}
    >
      {children}
    </motion.section>
  );
};