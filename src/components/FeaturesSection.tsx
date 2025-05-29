import { motion } from "framer-motion";
import { Calendar, Brain, RefreshCw, Bell, Zap, Clock, CalendarCheck, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { FeatureCard } from "@/components/ui/feature-card";
import { GlowingOrb } from "@/components/ui/glowing-orb";

const features = [
  {
    icon: <CalendarCheck className="w-8 h-8" />,
    title: "Auto-sync with Canvas & Google Calendar",
    description: "Seamlessly integrate with your existing tools to gather all your academic commitments in one place.",
  },
  {
    icon: <div className="relative">
      <Brain className="w-8 h-8" />
      <GlowingOrb className="absolute -right-2 -top-2 w-4 h-4" color="blue" />
    </div>,
    title: "Dynamic schedule with GPT-4o",
    description: "Advanced AI creates personalized study plans that adapt to your learning style and workload.",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Procrastination forgiveness",
    description: "Missed a study session? PulsePlan automatically reschedules and adjusts your plan.",
  },
  {
    icon: <Bell className="w-8 h-8" />,
    title: "Gentle productivity nudges",
    description: "Helpful reminders, not stressful alerts, keep you on track without adding anxiety.",
  },
];

const FeaturesSection = () => {
  return (
    <Section className="relative bg-secondary/20 backdrop-blur-sm">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Powerful Features</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to excel academically, powered by cutting-edge AI technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </motion.div>
          ))}
        </div>

        {/* Full-width Real-time Adaptation Feature */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative glass-card rounded-2xl p-8 md:p-12 overflow-hidden"
        >
          {/* Animated lines */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rhythm-blue/50 to-transparent animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rhythm-coral/50 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-rhythm-blue/50 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-rhythm-blue/50 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 glass-card rounded-full flex items-center justify-center">
                <RefreshCw className="w-8 h-8 text-rhythm-blue animate-spin" style={{ animationDuration: '3s' }} />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Watch your calendar adapt in real-time</h3>
              <p className="text-lg text-muted-foreground">
                PulsePlan's dynamic scheduling engine rearranges your study blocks as your workload changes, ensuring you're always making the best use of your time.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-rhythm-blue/10 rounded-full filter blur-3xl"></div>
      </div>
    </Section>
  );
};

export default FeaturesSection;
