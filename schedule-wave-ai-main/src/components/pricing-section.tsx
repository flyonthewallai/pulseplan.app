
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';

export const PricingSection = () => {
  return (
    <Section id="pricing" className="relative">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Simple Pricing</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started for free, upgrade when you're ready
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-2xl p-8 border border-rhythm-lavender/30">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold mb-2">Freemium Plan</h3>
                <p className="text-muted-foreground mb-6">Perfect for students trying out AI scheduling</p>
                
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-rhythm-lavender" />
                    <span>First week free</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-rhythm-lavender" />
                    <span>Canvas & Google Calendar integration</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-rhythm-lavender" />
                    <span>AI-generated weekly plans</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-rhythm-lavender" />
                    <span>Dynamic rescheduling</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-8 md:mt-0 text-center">
                <div className="mb-4">
                  <span className="text-4xl font-bold">$3</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <Button size="lg" className="bg-rhythm-lavender hover:bg-rhythm-lavender/90 w-full md:w-auto">
                  Try For Free
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-rhythm-blue/10 rounded-full filter blur-3xl"></div>
      </div>
    </Section>
  );
};
