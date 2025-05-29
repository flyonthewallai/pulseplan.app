import { motion } from "framer-motion";
import { Calendar, Brain, Zap } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { StepCard } from "@/components/ui/step-card";

const steps = [
  {
    number: 1,
    title: "Sync your accounts",
    description: "Import classes, deadlines, and more from Canvas, Google Calendar, or Outlook in one click.",
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

const HowItWorksSection = () => {
  return (
    <Section id="how-it-works" className="relative">
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
      </Container>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-rhythm-blue/10 rounded-full filter blur-3xl"></div>
      </div>
    </Section>
  );
};

export default HowItWorksSection; 