import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Brain, Zap } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { StepCard } from "@/components/ui/step-card";
import { useState, useEffect } from "react";

const steps = [
  {
    number: 1,
    title: "Sync your accounts",
    description: "Import classes, deadlines, and more from Canvas, Apple Calendar, or Outlook in one click.",
    icon: <Calendar className="w-8 h-8 text-rhythm-blue" />
  },
  {
    number: 2,
    title: "Auto-generate your schedule",
    description: "AI creates a personalized, time-blocked plan to boost your productivity.",
    icon: <Brain className="w-8 h-8 text-rhythm-blue" />
  },
  {
    number: 3,
    title: "Adjust with AI",
    description: "Quickly update your schedule with intelligent suggestions and reminders.",
    icon: <Zap className="w-8 h-8 text-rhythm-blue" />
  }
];

const aiPrompts = [
  // First round - one from each app
  {
    icon: <img src="/assets/applecalendar.png" alt="Apple Calendar" className="w-6 h-6" />,
    prompt: "Show me my schedule for tomorrow"
  },
  {
    icon: <img src="/assets/gmail.png" alt="Gmail" className="w-6 h-6" />,
    prompt: "Email Ronan my chemistry notes"
  },
  {
    icon: <img src="/assets/outlook.webp" alt="Outlook" className="w-8 h-8" />,
    prompt: "When is my next research meeting?"
  },
  {
    icon: <img src="/assets/googlecalendar.png" alt="Google Calendar" className="w-6 h-6" />,
    prompt: "Block time for my chemistry lab report"
  },
  {
    icon: <img src="/assets/notion.png" alt="Notion" className="w-6 h-6" />,
    prompt: "Create a study plan for finals week"
  },
  {
    icon: <img src="/assets/pulseplan.png" alt="PulsePlan" className="w-9 h-9" />,
    prompt: "Make me a schedule for the next 2 weeks"
  },
];

const AIPromptBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % aiPrompts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentPrompt = aiPrompts[currentIndex];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
      className="relative mt-12 flex justify-center"
    >
      <div 
        className="relative overflow-hidden rounded-2xl bg-gray-900/95 backdrop-blur-sm border border-gray-700/50 shadow-xl"
        style={{
          width: '480px',
          height: '60px',
          background: 'rgba(31, 31, 31, 0.95)',
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex items-center h-full px-4 gap-3"
          >
            <div className="flex-shrink-0">
              {currentPrompt.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-base font-medium">"{currentPrompt.prompt}"</p>
            </div>
            <div className="flex-shrink-0">
              <motion.div
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-green-400 rounded-full"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Indicator dots */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {aiPrompts.map((_, index) => (
          <motion.div
            key={index}
            className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
              index === currentIndex ? 'bg-rhythm-blue' : 'bg-white/30'
            }`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>
    </motion.div>
  );
};

const HowItWorksSection = ({
  id,
  className,
}: {
  id?: string;
  className?: string;
}) => {
  return (
    <Section className={`relative ${className || ''}`}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">How it works</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started in minutes and experience the power of AI-driven academic planning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <StepCard
                number={step.number}
                title={step.title}
                description={step.description}
                icon={step.icon}
              />
            </motion.div>
          ))}
        </div>

        {/* AI Prompt Bar */}
        <AIPromptBar />
      </Container>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-rhythm-blue/10 rounded-full filter blur-3xl"></div>
      </div>
    </Section>
  );
};

export default HowItWorksSection; 