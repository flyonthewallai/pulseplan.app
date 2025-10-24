import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import TasksCard from "../../TasksCardReact";
import PulseMessageCard from "./PulseMessageCard";
import { BrainCircuit } from "lucide-react";

const HowItWorksSection = ({
  id,
  className,
  hasGlow = true,
}: {
  id?: string;
  className?: string;
  hasGlow?: boolean;
}) => {
  // Sample tasks data for the TasksCard
  const sampleTasks = [
    {
      id: '1',
      title: 'Machine Learning Project Report',
      status: 'pending' as const,
      priority: 'high' as const,
      due_date: '2024-12-24T09:00:00'
    },
    {
      id: '2',
      title: 'Calculus Problem Set 12',
      status: 'pending' as const,
      priority: 'medium' as const,
      due_date: '2024-12-25T10:00:00'
    },
    {
      id: '3',
      title: 'Literature Essay Draft',
      status: 'pending' as const,
      priority: 'medium' as const,
      due_date: '2024-12-26T14:00:00'
    },
    {
      id: '4',
      title: 'Physics Lab Report',
      status: 'pending' as const,
      priority: 'low' as const,
      due_date: '2024-12-27T15:00:00'
    }
  ];

  // Dark theme for the TasksCard
  const darkTheme = {
    colors: {
      surface: 'rgba(255, 255, 255, 0.05)',
      background: 'rgba(0, 0, 0, 0.8)',
      textPrimary: '#ffffff',
      textSecondary: '#a0a0a0',
      primary: '#007AFF',
      border: 'rgba(255, 255, 255, 0.1)'
    }
  };

  return (
    <Section className={`relative ${className || ''}`}>
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">AI-Powered Scheduling</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch as our AI automatically creates your perfect schedule from Canvas assignments
          </p>
        </div>

        {/* TasksCard Component */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Card - TasksCard */}
            <div className="glass-card p-8 rounded-2xl shadow-lg relative">
              {/* Canvas logo and text in top left corner */}
              <div className="absolute top-6 left-6">
                <div className="flex items-center gap-2 mb-2">
                  <img src="/assets/canvas.png" alt="Canvas" className="w-5 h-5" />
                  <span className="text-white/70 text-sm font-medium">Canvas Integration</span>
                </div>
                <div className="text-white text-2xl font-bold">
                  Auto-sync assignments
                </div>
              </div>
              
              <div className="pt-16">
                <TasksCard 
                  tasks={sampleTasks}
                  theme={darkTheme}
                />
              </div>
            </div>

            {/* Right Card - PulseMessageCard */}
            <div className="glass-card p-8 rounded-2xl shadow-lg relative">
              {/* AI Assistant text in top left corner */}
              <div className="absolute top-6 left-6">
                <div className="flex items-center gap-2 mb-2">
                  <BrainCircuit className="w-5 h-5 text-white" />
                  <span className="text-white/70 text-sm font-medium">AI Assistant</span>
                </div>
                <div className="text-white text-2xl font-bold">
                  Get daily agendas and reminders
                </div>
              </div>
              
              <div className="pt-16">
                <PulseMessageCard />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default HowItWorksSection; 