import { Variants } from 'framer-motion';

export const FADE_IN_ANIMATION: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export const SLIDE_UP_ANIMATION: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export const PULSE_ANIMATION: Variants = {
  visible: {
    scale: [1, 1.2, 1],
    boxShadow: [
      '0 0 0 rgba(var(--primary-rgb), 0.4)',
      '0 0 10px rgba(var(--primary-rgb), 0.8)',
      '0 0 0 rgba(var(--primary-rgb), 0.4)',
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const STATUS_ANIMATION: Variants = {
  visible: {
    scale: [1, 1.1, 1],
    boxShadow: [
      '0 0 0 rgba(var(--positive-rgb), 0.4)',
      '0 0 10px rgba(var(--positive-rgb), 0.8)',
      '0 0 0 rgba(var(--positive-rgb), 0.4)',
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};