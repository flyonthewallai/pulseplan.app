
import React from 'react';
import { cn } from '@/lib/utils';

interface CalendarBlockProps {
  className?: string;
  title: string;
  time: string;
  color: string;
}

const CalendarBlock = ({ className, title, time, color }: CalendarBlockProps) => {
  return (
    <div className={cn('glass-card p-3 rounded-lg mb-2 animate-float', className, color)}>
      <p className="font-medium">{title}</p>
      <p className="text-xs text-muted-foreground">{time}</p>
    </div>
  );
};

interface CalendarMockupProps {
  className?: string;
  floating?: boolean;
}

export const CalendarMockup = ({ className, floating = true }: CalendarMockupProps) => {
  return (
    <div className={cn('glass-card p-4 rounded-2xl w-full max-w-xs', className)}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">This Week</h3>
        <span className="text-xs text-muted-foreground">May 15-21</span>
      </div>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium mb-2">Monday</h4>
          <CalendarBlock 
            title="CS 101 Lecture" 
            time="9:00 - 10:30 AM" 
            color="border-rhythm-lavender/50"
            className={cn(floating && "animate-float")}
          />
          <CalendarBlock 
            title="Study Session: DB" 
            time="1:00 - 3:00 PM" 
            color="border-rhythm-blue/50"
            className={cn(floating && "animate-float [animation-delay:2s]")}
          />
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2">Tuesday</h4>
          <CalendarBlock 
            title="Math 202 Assignment" 
            time="10:00 - 12:00 PM" 
            color="border-rhythm-coral/50"
            className={cn(floating && "animate-float [animation-delay:1s]")}
          />
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2">Wednesday</h4>
          <CalendarBlock 
            title="Project Meeting" 
            time="2:00 - 3:30 PM" 
            color="border-rhythm-lavender/50"
            className={cn(floating && "animate-float [animation-delay:3s]")}
          />
          <CalendarBlock 
            title="Exam Prep" 
            time="4:00 - 6:00 PM" 
            color="border-rhythm-blue/50"
            className={cn(floating && "animate-float [animation-delay:1.5s]")}
          />
        </div>
      </div>
    </div>
  );
};
