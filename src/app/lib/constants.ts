import { Variants } from 'framer-motion';

export const FADE_IN_ANIMATION: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1]
    },
  },
};

export const SLIDE_UP_ANIMATION: Variants = {
  hidden: { y: 30, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1]
    },
  },
};

export const LIQUID_FLOW_ANIMATION: Variants = {
  hidden: { x: -20, opacity: 0, scale: 0.9 },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    },
  },
};

export const LIQUID_GLOW_ANIMATION: Variants = {
  visible: {
    scale: [1, 1.05, 1],
    boxShadow: [
      '0 0 0 var(--primary-20)',
      '0 0 30px var(--primary-50)',
      '0 0 0 var(--primary-20)',
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const LIQUID_FLOAT_ANIMATION: Variants = {
  visible: {
    y: [0, -8, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const GLASS_HOVER_ANIMATION: Variants = {
  hover: {
    scale: 1.02,
    y: -2,
    transition: { 
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1]
    },
  },
};

export const LIQUID_ROTATE_ANIMATION: Variants = {
  hover: {
    rotate: [0, 5, -5, 0],
    scale: 1.05,
    transition: { 
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    },
  },
};

export const PULSE_ANIMATION: Variants = {
  visible: {
    scale: [1, 1.2, 1],
    boxShadow: [
      '0 0 0 var(--primary-20)',
      '0 0 20px var(--primary-50)',
      '0 0 0 var(--primary-20)',
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
      '0 0 0 var(--positive-50)',
      '0 0 20px var(--positive)',
      '0 0 0 var(--positive-50)',
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};