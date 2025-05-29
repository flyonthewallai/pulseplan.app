
import React from 'react';
import { cn } from '@/lib/utils';

interface GlowingOrbProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: 'lavender' | 'coral';
}

export const GlowingOrb = ({ className, size = 'md', color = 'lavender' }: GlowingOrbProps) => {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-32 h-32',
  };
  
  const colorClasses = {
    lavender: 'bg-rhythm-lavender/20 after:bg-rhythm-lavender',
    coral: 'bg-rhythm-coral/20 after:bg-rhythm-coral',
  };
  
  return (
    <div 
      className={cn(
        'relative rounded-full animate-pulse-glow',
        sizeClasses[size],
        colorClasses[color],
        'after:content-[""] after:absolute after:inset-0 after:m-auto after:rounded-full after:w-1/2 after:h-1/2 after:blur-sm',
        className
      )}
    />
  );
};
