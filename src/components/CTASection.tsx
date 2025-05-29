import React from 'react';
import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { GlowingOrb } from '@/components/ui/glowing-orb';
import { motion } from 'framer-motion';

const AppleLogo = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.41-1.09-.47-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.41C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.19 2.31-.89 3.51-.84 1.54.07 2.7.61 3.44 1.57-3.14 1.88-2.29 5.13.22 6.41-.65 1.29-1.52 2.58-2.25 4.03zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
  </svg>
);

export const CTASection = () => {
  return (
    <Section className="relative">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative inline-block mb-6">
            <GlowingOrb size="md" className="mx-auto" color="blue" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Plan less. <span className="text-gradient-blue">Do more.</span>
          </h2>
          
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Join students who are finding their academic rhythm
            with AI-powered scheduling that adapts to their real habits.
          </p>
          
          <ButtonGroup className="justify-center mt-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button size="lg" className="bg-rhythm-blue text-white hover:bg-rhythm-blue/90">
                <AppleLogo />Download the App
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button size="lg" variant="outline">
                Upgrade to Premium
              </Button>
            </motion.div>
          </ButtonGroup>
        </div>
      </Container>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-rhythm-blue/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-rhythm-coral/10 rounded-full filter blur-3xl"></div>
      </div>
    </Section>
  );
}; 