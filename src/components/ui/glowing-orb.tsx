import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { optimizedPulse } from "@/lib/animation-configs";

interface GlowingOrbProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: 'lavender' | 'coral' | 'blue';
}

export const GlowingOrb = ({ className, size = 'md', color = 'blue' }: GlowingOrbProps) => {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-32 h-32',
  };
  
  const colorClasses = {
    lavender: 'bg-rhythm-lavender/20',
    coral: 'bg-rhythm-coral/20',
    blue: 'bg-rhythm-blue/20',
  };

  const glowColors = {
    lavender: 'rgba(155, 135, 245, 0.4)',
    coral: 'rgba(249, 115, 22, 0.4)',
    blue: 'rgba(96, 165, 250, 0.4)',
  };

  const innerColors = {
    lavender: '#9b87f5',
    coral: '#F97316',
    blue: '#60a5fa',
  };
  
  return (
    <motion.div 
      className={cn(
        'relative rounded-full will-change-transform',
        sizeClasses[size],
        colorClasses[color],
        className
      )}
      animate={{
        scale: [1, 1.05, 1],
        boxShadow: [
          `0 0 20px ${glowColors[color]}`,
          `0 0 30px ${glowColors[color]}`,
          `0 0 20px ${glowColors[color]}`,
        ],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <motion.div
        className={cn(
          "absolute inset-0 m-auto rounded-full w-1/2 h-1/2 will-change-transform",
        )}
        style={{
          backgroundColor: innerColors[color],
          filter: "blur(2px)",
        }}
        animate={{
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
    </motion.div>
  );
}; 