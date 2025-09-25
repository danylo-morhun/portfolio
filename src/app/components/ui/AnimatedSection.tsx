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
      className={`glass glass-hover rounded-3xl w-full mt-4 pb-2 liquid-float ${className}`}
      variants={variants}
      initial={initial}
      animate={animate}
    >
      {children}
    </motion.section>
  );
};