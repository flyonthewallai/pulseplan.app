import { useState, useEffect } from 'react';
import { AssignmentCard } from '@/components/AssignmentCard';
import { AINode } from '@/components/AINode';
import { TimeBlockCalendar } from '@/components/TimeBlockCalendar';

const assignments = [
  {
    id: '1',
    title: 'Machine Learning Project Report',
    subject: 'CS 401',
    deadline: 'Dec 24',
    priority: 'high' as const,
    timeSlot: '9:00 AM'
  },
  {
    id: '2',
    title: 'Calculus Problem Set 12',
    subject: 'MATH 201',
    deadline: 'Dec 25',
    priority: 'medium' as const,
    timeSlot: '10:00 AM'
  },
  {
    id: '3',
    title: 'Literature Essay Draft',
    subject: 'ENG 305',
    deadline: 'Dec 26',
    priority: 'medium' as const,
    timeSlot: '2:00 PM'
  },
  {
    id: '4',
    title: 'Physics Lab Report',
    subject: 'PHYS 202',
    deadline: 'Dec 27',
    priority: 'low' as const,
    timeSlot: '3:00 PM'
  },
  {
    id: '5',
    title: 'History Research Paper',
    subject: 'HIST 150',
    deadline: 'Dec 28',
    priority: 'high' as const,
    timeSlot: '4:00 PM'
  }
];

const Index = () => {
  const [processedCount, setProcessedCount] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [scheduledAssignments, setScheduledAssignments] = useState<Array<{
    id: string;
    title: string;
    subject: string;
    timeSlot: string;
  }>>([]);

  const handleCardAnimate = () => {
    if (!isProcessing) {
      setIsProcessing(true);
    }
    
    setTimeout(() => {
      setProcessedCount(prev => {
        const newCount = prev + 1;
        const assignment = assignments[prev];
        
        if (assignment) {
          setScheduledAssignments(prevScheduled => [
            ...prevScheduled,
            {
              id: assignment.id,
              title: assignment.title,
              subject: assignment.subject,
              timeSlot: assignment.timeSlot
            }
          ]);
        }

        if (newCount >= assignments.length) {
          setTimeout(() => setIsProcessing(false), 1000);
        }

        return newCount;
      });
    }, 2000);
  };

  useEffect(() => {
    // Start the animation sequence after component mounts
    const startTimer = setTimeout(() => {
      handleCardAnimate();
    }, 1000);

    return () => clearTimeout(startTimer);
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-accent/10" />
      
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start min-h-screen">
          
          {/* Left side - Assignment Cards */}
          <div className="lg:col-span-1 space-y-4">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-foreground mb-2">
                Pending Assignments
              </h1>
              <p className="text-muted-foreground">
                Watch as AI intelligently schedules your work
              </p>
            </div>
            
            {assignments.map((assignment, index) => (
              <AssignmentCard
                key={assignment.id}
                {...assignment}
                onAnimate={handleCardAnimate}
                animationDelay={index * 1000}
              />
            ))}
          </div>

          {/* Center - AI Node */}
          <div className="lg:col-span-1 flex items-center justify-center min-h-[60vh]">
            <AINode 
              isProcessing={isProcessing} 
              processedCount={processedCount}
            />
          </div>

          {/* Right side - Calendar */}
          <div className="lg:col-span-1 flex justify-center lg:justify-end">
            <TimeBlockCalendar scheduledAssignments={scheduledAssignments} />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            AI-powered assignment scheduling for optimal productivity
          </p>
        </div>
      </div>

      {/* Ambient light effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-ai-glow/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-ai-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
  );
};

export default Index;