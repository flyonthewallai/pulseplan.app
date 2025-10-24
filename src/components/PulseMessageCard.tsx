import React, { useState } from 'react';
import { BrainCircuit, Check } from 'lucide-react';

interface PulseMessageCardProps {
  message?: string;
  showDismissButton?: boolean;
  onDismiss?: () => void;
}

function PulseMessageCard({ 
  message = "Today you have 3 priority tasks focused on Computer Science and Mathematics. Your most important task is the \"Algorithm Analysis\" due at 2:00 PM. I suggest starting with this as it requires focused concentration.",
  showDismissButton = true,
  onDismiss
}: PulseMessageCardProps) {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  if (!isVisible) return null;

  return (
    <div className="mb-5">
      <div className="flex items-start gap-3 mb-6">
        <div className="w-8 h-8 bg-card rounded-lg flex items-center justify-center">
          <BrainCircuit className="w-6 h-6 text-foreground" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-2">
            <div className="font-bold text-base text-foreground">Pulse</div>
            {showDismissButton && (
              <button 
                className="p-1 -mr-1"
                onClick={handleDismiss}
              >
                <Check className="w-4 h-4 text-muted-foreground" />
              </button>
            )}
          </div>
          <div className="text-lg leading-7 text-foreground">
            {message}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PulseMessageCard;




