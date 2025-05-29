
import React from 'react';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { TestimonialCard } from '@/components/ui/testimonial-card';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "I've stopped falling behind — this actually works.",
      author: "Alex J.",
      role: "Computer Science Major"
    },
    {
      quote: "Rhythm is the only planner I've stuck with for more than a week.",
      author: "Maya P.",
      role: "Biology Student"
    },
    {
      quote: "It adapts when I inevitably procrastinate, which makes it so much better than rigid planners.",
      author: "Chris M.",
      role: "Engineering Student"
    }
  ];

  return (
    <Section className="relative">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Student Testimonials</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            See how Rhythm is helping students stay on track
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
            />
          ))}
        </div>
      </Container>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-rhythm-lavender/10 rounded-full filter blur-3xl"></div>
      </div>
    </Section>
  );
};
