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
    <div className={cn('relative flex flex-col items-center text-center px-4', className)}>
      <div className="glass-card rounded-full w-16 h-16 flex items-center justify-center mb-4">
        {icon}
      </div>
      <div className="absolute top-0 left-0 -ml-2 -mt-2 bg-rhythm-blue rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}; 