import React from 'react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  className?: string;
  quote: string;
  author: string;
  role?: string;
}

export const TestimonialCard = ({ className, quote, author, role }: TestimonialCardProps) => {
  return (
    <div className={cn('glass-card p-6 rounded-2xl', className)}>
      <p className="text-xl mb-4">"{quote}"</p>
      <div>
        <p className="font-semibold">{author}</p>
        {role && <p className="text-sm text-muted-foreground">{role}</p>}
      </div>
    </div>
  );
}; 