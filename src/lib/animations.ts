/**
 * @copyright 2026 faisal
 * @license Apache-2.0
 */

import type { Variants } from 'framer-motion';

// Container variant for staggering children
export const staggerContainer = (delay = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      delayChildren: delay,
      staggerChildren: 0.15,
    },
  },
});

// Child item fade-up animation
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

// Fade in animation
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

// Slide from left
export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

// Slide from right
export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

// Scale animation
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

// Page transition variants
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] } },
};

// Hover animations for interactive elements
export const hoverScale = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { type: 'spring', stiffness: 300, damping: 30 },
};

export const hoverLift = {
  whileHover: { y: -4, boxShadow: '0 20px 40px -10px rgba(0,0,0,0.2)' },
  transition: { type: 'spring', stiffness: 300, damping: 30 },
};