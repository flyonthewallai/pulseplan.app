
import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export const Container = ({ className, children }: ContainerProps) => {
  return (
    <div className={cn('container px-4 md:px-6', className)}>
      {children}
    </div>
  );
};
