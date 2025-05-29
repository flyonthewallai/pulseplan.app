
import React from 'react';
import { CalendarCheck, PlusCircle, CheckCircle } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { StepCard } from '@/components/ui/step-card';

export const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      title: "Connect Canvas & Calendar",
      description: "Sync your Canvas, Google Calendar, and other tools to gather all your academic commitments.",
      icon: <PlusCircle className="w-8 h-8 text-rhythm-lavender" />
    },
    {
      number: 2,
      title: "Let AI Generate Your Weekly Plan",
      description: "Our AI analyzes your schedule, habits, and workload to create a personalized study plan.",
      icon: <CalendarCheck className="w-8 h-8 text-rhythm-lavender" />
    },
    {
      number: 3,
      title: "Check Off Tasks, Watch It Adapt",
      description: "As you complete tasks or miss deadlines, Rhythm adjusts your schedule automatically.",
      icon: <CheckCircle className="w-8 h-8 text-rhythm-lavender" />
    }
  ];

  return (
    <Section id="how-it-works" className="relative">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">How Rhythm Works</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to transform your academic planning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step) => (
            <StepCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
            />
          ))}
        </div>
      </Container>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-rhythm-blue/10 rounded-full filter blur-3xl"></div>
      </div>
    </Section>
  );
};
