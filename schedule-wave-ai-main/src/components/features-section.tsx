
import React from 'react';
import { CalendarCheck, CirclePlay, Check, Clock } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { FeatureCard } from '@/components/ui/feature-card';
import { Waveform } from '@/components/ui/waveform';
import { GlowingOrb } from '@/components/ui/glowing-orb';

export const FeaturesSection = () => {
  const features = [
    {
      icon: <CalendarCheck className="w-8 h-8" />,
      title: "Auto-sync with Canvas & Google Calendar",
      description: "Seamlessly integrate with your existing tools to gather all your academic commitments in one place."
    },
    {
      icon: <div className="relative">
        <CirclePlay className="w-8 h-8" />
        <GlowingOrb className="absolute -right-2 -top-2 w-4 h-4" />
      </div>,
      title: "Dynamic schedule with GPT-4o",
      description: "Advanced AI creates personalized study plans that adapt to your learning style and workload."
    },
    {
      icon: <Check className="w-8 h-8" />,
      title: "Procrastination forgiveness",
      description: "Missed a study session? Rhythm automatically reschedules and adjusts your plan."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Gentle productivity nudges",
      description: "Helpful reminders, not stressful alerts, keep you on track without adding anxiety."
    }
  ];

  return (
    <Section id="features" className="relative bg-secondary/20 backdrop-blur-sm">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Powerful Features</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Tools designed to make academic planning effortless
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className="mt-16 pt-8 glass-card rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">Watch your calendar adapt in real-time</h3>
          <div className="flex justify-center mb-4">
            <Waveform color="lavender" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Rhythm's dynamic scheduling engine rearranges your study blocks as your workload changes, 
            ensuring you're always making the best use of your time.
          </p>
        </div>
      </Container>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-rhythm-coral/10 rounded-full filter blur-3xl"></div>
      </div>
    </Section>
  );
};
