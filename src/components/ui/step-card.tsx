import React from 'react';
import { cn } from '@/lib/utils';

interface StepCardProps {
  className?: string;
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const StepCard = ({ className, number, title, description, icon }: StepCardProps) => {
  return (
    <div className={cn('relative flex flex-col items-center text-center', className)}>
      {/* Glass card background matching testimonials */}
      <div className="glass-card p-6 rounded-2xl w-full relative">
        {/* Step number badge */}
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-rhythm-blue text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
            {number}
          </div>
        </div>
        
        {/* Icon container with improved styling */}
        <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mb-6 mx-auto">
          <div className="text-white">
            {React.cloneElement(icon as React.ReactElement, { 
              className: "w-8 h-8" 
            })}
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}; 