
import React from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  className?: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const FeatureCard = ({ className, icon, title, description }: FeatureCardProps) => {
  return (
    <div className={cn('glass-card p-6 rounded-2xl transition-all duration-300 hover:translate-y-[-5px]', className)}>
      <div className="mb-4 text-rhythm-lavender">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};
