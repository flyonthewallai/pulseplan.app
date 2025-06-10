import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedBorderProps {
  className?: string;
  intensity?: "light" | "normal" | "strong";
  color?: "blue" | "coral" | "mixed";
}

const colorConfig = {
  blue: {
    top: "rgba(96, 165, 250, 0.6)",
    bottom: "rgba(96, 165, 250, 0.5)",
    left: "rgba(96, 165, 250, 0.55)",
    right: "rgba(96, 165, 250, 0.55)",
  },
  coral: {
    top: "rgba(249, 115, 22, 0.6)",
    bottom: "rgba(249, 115, 22, 0.5)",
    left: "rgba(249, 115, 22, 0.55)",
    right: "rgba(249, 115, 22, 0.55)",
  },
  mixed: {
    top: "rgba(96, 165, 250, 0.6)",
    bottom: "rgba(249, 115, 22, 0.5)",
    left: "rgba(155, 135, 245, 0.55)",
    right: "rgba(96, 165, 250, 0.55)",
  },
};

const intensityConfig = {
  light: 0.6,
  normal: 0.8,
  strong: 1.0,
};

// Optimized animation variants
const pulseVariants = {
  animate: {
    opacity: [0.3, 0.8, 0.3],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const AnimatedBorder = ({ 
  className, 
  intensity = "normal", 
  color = "mixed" 
}: AnimatedBorderProps) => {
  const colors = colorConfig[color];
  const opacityMultiplier = intensityConfig[intensity];

  return (
    <div className={cn("absolute inset-0 pointer-events-none z-10", className)}>
      {/* Top border */}
      <motion.div
        className="absolute top-0 left-0 w-full h-px"
        style={{
          background: `linear-gradient(to right, transparent, ${colors.top}, transparent)`,
          opacity: opacityMultiplier,
          animationDelay: "0s",
        }}
        variants={pulseVariants}
        animate="animate"
      />
      
      {/* Bottom border */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-px"
        style={{
          background: `linear-gradient(to right, transparent, ${colors.bottom}, transparent)`,
          opacity: opacityMultiplier,
          animationDelay: "1s",
        }}
        variants={pulseVariants}
        animate="animate"
      />
      
      {/* Left border */}
      <motion.div
        className="absolute left-0 top-0 w-px h-full"
        style={{
          background: `linear-gradient(to bottom, transparent, ${colors.left}, transparent)`,
          opacity: opacityMultiplier,
          animationDelay: "0.5s",
        }}
        variants={pulseVariants}
        animate="animate"
      />
      
      {/* Right border */}
      <motion.div
        className="absolute right-0 top-0 w-px h-full"
        style={{
          background: `linear-gradient(to bottom, transparent, ${colors.right}, transparent)`,
          opacity: opacityMultiplier,
          animationDelay: "1.5s",
        }}
        variants={pulseVariants}
        animate="animate"
      />
    </div>
  );
}; 