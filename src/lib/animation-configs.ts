// Optimized animation configurations for modern, smooth performance
import { Variants, Transition } from "framer-motion";

// Optimized easing curves for natural motion
export const easings = {
  smooth: [0.25, 0.46, 0.45, 0.94],
  bouncy: [0.68, -0.55, 0.265, 1.55],
  gentle: [0.4, 0, 0.2, 1],
  snappy: [0.4, 0, 0.6, 1],
} as const;

// Optimized transition configurations
export const transitions = {
  fast: {
    type: "tween",
    duration: 0.2,
    ease: easings.smooth,
  },
  smooth: {
    type: "tween",
    duration: 0.4,
    ease: easings.gentle,
  },
  gentle: {
    type: "tween", 
    duration: 0.6,
    ease: easings.gentle,
  },
  bouncy: {
    type: "spring",
    stiffness: 400,
    damping: 30,
    mass: 1,
  },
  snappy: {
    type: "spring",
    stiffness: 500,
    damping: 35,
    mass: 0.8,
  },
} satisfies Record<string, Transition>;

// Optimized variants for common animations
export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    filter: "blur(4px)",
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: transitions.gentle,
  },
};

export const fadeInScale: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.95,
    filter: "blur(2px)",
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    filter: "blur(0px)",
    transition: transitions.smooth,
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
      ease: easings.gentle,
    },
  },
};

export const slideInLeft: Variants = {
  hidden: { 
    opacity: 0, 
    x: -30,
    filter: "blur(2px)",
  },
  visible: { 
    opacity: 1, 
    x: 0,
    filter: "blur(0px)",
    transition: transitions.smooth,
  },
};

export const slideInRight: Variants = {
  hidden: { 
    opacity: 0, 
    x: 30,
    filter: "blur(2px)",
  },
  visible: { 
    opacity: 1, 
    x: 0,
    filter: "blur(0px)",
    transition: transitions.smooth,
  },
};

// Optimized hover animations
export const hoverScale = {
  scale: 1.02,
  transition: transitions.fast,
};

export const hoverGlow = {
  scale: 1.02,
  boxShadow: "0 8px 32px rgba(96, 165, 250, 0.2)",
  transition: transitions.fast,
};

export const tapScale = {
  scale: 0.98,
  transition: { ...transitions.fast, duration: 0.1 },
};

// Viewport configuration for scroll animations
export const viewportConfig = {
  once: true,
  amount: 0.2,
  margin: "-50px 0px",
} as const;

// Performance-optimized pulse animation
export const optimizedPulse: Variants = {
  pulse: {
    scale: [1, 1.05, 1],
    opacity: [0.8, 1, 0.8],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: easings.gentle,
      repeatType: "reverse",
    },
  },
};

// Background element animations (less intensive)
export const backgroundFloat: Variants = {
  float: {
    y: [-10, 10, -10],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: easings.gentle,
      repeatType: "reverse",
    },
  },
}; 