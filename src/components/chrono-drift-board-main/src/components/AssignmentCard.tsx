import { useState, useEffect } from 'react';
import { Calendar, Clock } from 'lucide-react';

interface AssignmentCardProps {
  id: string;
  title: string;
  subject: string;
  deadline: string;
  priority: 'high' | 'medium' | 'low';
  onAnimate?: () => void;
  animationDelay?: number;
}

export const AssignmentCard = ({ 
  id, 
  title, 
  subject, 
  deadline, 
  priority, 
  onAnimate,
  animationDelay = 0 
}: AssignmentCardProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
      onAnimate?.();
    }, animationDelay);

    return () => clearTimeout(timer);
  }, [animationDelay, onAnimate]);

  const priorityColors = {
    high: 'border-destructive/50 bg-destructive/5',
    medium: 'border-time-accent/50 bg-time-accent/5',
    low: 'border-ai-glow/50 bg-ai-glow/5'
  };

  const priorityDots = {
    high: 'bg-destructive',
    medium: 'bg-time-accent',
    low: 'bg-ai-glow'
  };

  return (
    <div 
      className={`
        glass-card p-4 rounded-2xl relative overflow-hidden
        ${priorityColors[priority]}
        ${isAnimating ? 'card-float' : ''}
        transition-all duration-500 hover:scale-105
      `}
      style={{ 
        opacity: isAnimating ? 0 : 1,
        animationDelay: `${animationDelay}ms`
      }}
    >
      <div className="flex items-start justify-between mb-3">
        <div className={`w-2 h-2 rounded-full ${priorityDots[priority]}`} />
        <div className="text-xs text-muted-foreground uppercase tracking-wider">
          {subject}
        </div>
      </div>
      
      <h3 className="font-semibold text-foreground mb-2 leading-tight">
        {title}
      </h3>
      
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <Calendar className="w-3 h-3" />
          <span>{deadline}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          <span className="text-xs capitalize">{priority}</span>
        </div>
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};