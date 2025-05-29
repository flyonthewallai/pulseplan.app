
import React from 'react';
import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { GlowingOrb } from '@/components/ui/glowing-orb';

export const CTASection = () => {
  return (
    <Section className="relative">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative inline-block mb-6">
            <GlowingOrb size="md" className="mx-auto" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Plan less. <span className="text-gradient-lavender">Do more.</span>
          </h2>
          
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of students who are finding their academic rhythm
            with AI-powered scheduling that adapts to their real habits.
          </p>
          
          <ButtonGroup className="justify-center mt-8">
            <Button size="lg" className="bg-rhythm-lavender hover:bg-rhythm-lavender/90">
              Try Rhythm
            </Button>
            <Button size="lg" variant="outline">
              Upgrade to Premium
            </Button>
          </ButtonGroup>
        </div>
      </Container>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-rhythm-lavender/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-rhythm-coral/10 rounded-full filter blur-3xl"></div>
      </div>
    </Section>
  );
};
