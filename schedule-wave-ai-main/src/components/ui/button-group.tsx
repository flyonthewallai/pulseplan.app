
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonGroupProps {
  className?: string;
  children: React.ReactNode;
}

export const ButtonGroup = ({ className, children }: ButtonGroupProps) => {
  return (
    <div className={cn('flex flex-col sm:flex-row gap-3 mt-6', className)}>
      {children}
    </div>
  );
};
