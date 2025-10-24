import { useState, useEffect } from 'react';
import { Brain, Sparkles, Zap } from 'lucide-react';

interface AINodeProps {
  isProcessing: boolean;
  processedCount: number;
}

export const AINode = ({ isProcessing, processedCount }: AINodeProps) => {
  const [pulseState, setPulseState] = useState(0);

  useEffect(() => {
    if (isProcessing) {
      const interval = setInterval(() => {
        setPulseState(prev => (prev + 1) % 3);
      }, 800);
      return () => clearInterval(interval);
    }
  }, [isProcessing]);

  return (
    <div className="flex flex-col items-center justify-center relative">
      {/* Main AI Node */}
      <div className={`
        relative w-24 h-24 rounded-full border-2 border-primary
        bg-gradient-to-br from-card to-accent
        flex items-center justify-center
        transition-all duration-500
        ${isProcessing ? 'animate-glow-pulse scale-110' : 'scale-100'}
      `}>
        {/* Inner glow effect */}
        <div className={`
          absolute inset-2 rounded-full 
          bg-gradient-to-br from-ai-glow/20 to-ai-secondary/20
          transition-opacity duration-500
          ${isProcessing ? 'opacity-100' : 'opacity-60'}
        `} />
        
        {/* Icon */}
        <div className="relative z-10">
          {pulseState === 0 && <Brain className="w-8 h-8 text-primary" />}
          {pulseState === 1 && <Sparkles className="w-8 h-8 text-ai-glow" />}
          {pulseState === 2 && <Zap className="w-8 h-8 text-ai-secondary" />}
        </div>

        {/* Rotating ring */}
        {isProcessing && (
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-ai-glow border-r-ai-secondary animate-spin" />
        )}
      </div>

      {/* Label */}
      <div className="mt-4 text-center">
        <div className="gradient-text font-semibold text-sm mb-1">
          AI Scheduler
        </div>
        <div className="text-xs text-muted-foreground">
          {isProcessing ? 'Processing...' : 'Ready'}
        </div>
        {processedCount > 0 && (
          <div className="text-xs text-ai-glow mt-1">
            {processedCount}/5 scheduled
          </div>
        )}
      </div>

      {/* Floating particles when processing */}
      {isProcessing && (
        <>
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`
                absolute w-1 h-1 bg-ai-glow rounded-full
                animate-ping opacity-75
              `}
              style={{
                top: `${20 + Math.sin(i) * 30}%`,
                left: `${20 + Math.cos(i) * 30}%`,
                animationDelay: `${i * 200}ms`,
                animationDuration: '2s'
              }}
            />
          ))}
        </>
      )}
    </div>
  );
};