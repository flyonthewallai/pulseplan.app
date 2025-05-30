import React from 'react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  className?: string;
  quote: string;
  author: string;
  role?: string;
  university?: string;
  withAnimatedLines?: boolean;
}

export const TestimonialCard = ({ className, quote, author, role, university, withAnimatedLines }: TestimonialCardProps) => {
  return (
    <div className={cn('glass-card p-6 rounded-2xl relative overflow-hidden', className)}>
      {withAnimatedLines && (
        <div className="absolute inset-0 pointer-events-none z-20">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rhythm-blue/30 to-transparent animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rhythm-coral/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-rhythm-blue/30 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-rhythm-blue/30 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
      )}
      <p className="text-xl mb-4">"{quote}"</p>
      <div>
        <p className="font-semibold">{author}</p>
        {role && <p className="text-sm text-muted-foreground">{role}</p>}
        {university && <p className="text-sm text-muted-foreground">{university}</p>}
      </div>
    </div>
  );
}; 