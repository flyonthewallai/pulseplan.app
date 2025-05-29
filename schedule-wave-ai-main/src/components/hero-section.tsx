
import React from 'react';
import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { CalendarMockup } from '@/components/calendar-mockup';
import { GlowingOrb } from '@/components/ui/glowing-orb';

export const HeroSection = () => {
  return (
    <Section className="pt-32 relative overflow-hidden">
      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <div className="flex-1 text-center lg:text-left">
            <div className="absolute lg:static -top-10 left-1/2 lg:left-auto transform -translate-x-1/2 lg:translate-x-0">
              <GlowingOrb 
                size="lg" 
                color="lavender" 
                className="opacity-60 mix-blend-screen" 
              />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Let your schedule find its <span className="text-gradient-lavender">rhythm</span>.
            </h1>
            
            <p className="mt-4 text-xl text-muted-foreground max-w-xl">
              AI-generated study plans that adapt when you don't.
              Built for students, powered by AI.
            </p>
            
            <ButtonGroup>
              <Button size="lg" className="bg-rhythm-lavender hover:bg-rhythm-lavender/90">
                Try Rhythm
              </Button>
              <Button size="lg" variant="outline">
                Upgrade to Premium
              </Button>
            </ButtonGroup>
          </div>
          
          <div className="flex-1 w-full max-w-md mx-auto lg:mx-0">
            <CalendarMockup />
          </div>
        </div>
      </Container>
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-rhythm-lavender/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-rhythm-blue/10 rounded-full filter blur-3xl"></div>
      </div>
    </Section>
  );
};
