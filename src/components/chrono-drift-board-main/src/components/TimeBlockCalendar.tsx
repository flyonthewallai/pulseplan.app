import { useState, useEffect } from 'react';
import { Clock, Calendar } from 'lucide-react';

interface TimeBlock {
  id: string;
  time: string;
  title?: string;
  subject?: string;
  isOccupied: boolean;
  isAnimating?: boolean;
}

interface TimeBlockCalendarProps {
  scheduledAssignments: Array<{
    id: string;
    title: string;
    subject: string;
    timeSlot: string;
  }>;
}

export const TimeBlockCalendar = ({ scheduledAssignments }: TimeBlockCalendarProps) => {
  const [timeBlocks, setTimeBlocks] = useState<TimeBlock[]>([
    { id: '1', time: '9:00 AM', isOccupied: false },
    { id: '2', time: '10:00 AM', isOccupied: false },
    { id: '3', time: '11:00 AM', isOccupied: false },
    { id: '4', time: '1:00 PM', isOccupied: false },
    { id: '5', time: '2:00 PM', isOccupied: false },
    { id: '6', time: '3:00 PM', isOccupied: false },
    { id: '7', time: '4:00 PM', isOccupied: false },
    { id: '8', time: '5:00 PM', isOccupied: false },
  ]);

  useEffect(() => {
    // Update time blocks with scheduled assignments
    setTimeBlocks(prev => prev.map(block => {
      const assignment = scheduledAssignments.find(a => a.timeSlot === block.time);
      if (assignment) {
        return {
          ...block,
          title: assignment.title,
          subject: assignment.subject,
          isOccupied: true,
          isAnimating: true
        };
      }
      return block;
    }));

    // Remove animation class after animation completes
    const timer = setTimeout(() => {
      setTimeBlocks(prev => prev.map(block => ({ ...block, isAnimating: false })));
    }, 2500);

    return () => clearTimeout(timer);
  }, [scheduledAssignments]);

  return (
    <div className="glass-card p-6 rounded-2xl w-full max-w-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-primary" />
          <h2 className="font-semibold">Today's Schedule</h2>
        </div>
        <div className="text-sm text-muted-foreground">
          Dec 23
        </div>
      </div>

      {/* Time blocks */}
      <div className="space-y-2">
        {timeBlocks.map((block, index) => (
          <div
            key={block.id}
            className={`
              time-block relative
              ${block.isOccupied ? 'bg-accent border-primary/50' : 'bg-secondary'}
              ${block.isAnimating ? 'card-slot' : ''}
              transition-all duration-300
              ${block.isOccupied ? 'shadow-lg shadow-primary/10' : ''}
            `}
            style={{
              animationDelay: block.isAnimating ? `${index * 100}ms` : '0ms'
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 text-sm text-muted-foreground min-w-[60px]">
                  <Clock className="w-3 h-3" />
                  <span className="font-mono">{block.time}</span>
                </div>
                
                {block.isOccupied && block.title ? (
                  <div className="flex-1">
                    <div className="font-medium text-foreground text-sm">
                      {block.title}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {block.subject}
                    </div>
                  </div>
                ) : (
                  <div className="text-sm text-muted-foreground/50">
                    Available
                  </div>
                )}
              </div>

              {/* Status indicator */}
              <div className={`
                w-2 h-2 rounded-full
                ${block.isOccupied ? 'bg-ai-glow' : 'bg-muted-foreground/30'}
              `} />
            </div>

            {/* Subtle animation indicator */}
            {block.isAnimating && (
              <div className="absolute inset-0 bg-gradient-to-r from-ai-glow/10 via-ai-secondary/10 to-transparent rounded-md animate-pulse" />
            )}
          </div>
        ))}
      </div>

      {/* Footer stats */}
      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Scheduled</span>
          <span className="text-ai-glow font-medium">
            {scheduledAssignments.length}/8
          </span>
        </div>
      </div>
    </div>
  );
};