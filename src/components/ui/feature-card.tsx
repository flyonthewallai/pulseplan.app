import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { hoverScale, tapScale } from '@/lib/animation-configs';

interface FeatureCardProps {
  className?: string;
  graphic: React.ReactNode;
  title: string;
  description: string;
}

export const FeatureCard = ({ className, graphic, title, description }: FeatureCardProps) => {
  return (
    <motion.div
      whileHover={hoverScale}
      whileTap={tapScale}
      className="will-change-transform"
    >
      <div className={cn('glass-card p-6 rounded-2xl', className)}>
        <div className="mb-4">{graphic}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}; 