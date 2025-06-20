import { motion } from "framer-motion";
import { Calendar, Brain, RefreshCw, Bell, Zap, Clock, CalendarCheck, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { FeatureCard } from "@/components/ui/feature-card";
import { GlowingOrb } from "@/components/ui/glowing-orb";
import { AnimatedBorder } from "@/components/ui/animated-border";
import { 
  fadeInUp, 
  staggerContainer, 
  viewportConfig 
} from "@/lib/animation-configs";

const features = [
  {
    icon: <CalendarCheck className="w-8 h-8" />,
    title: "Auto-sync with Canvas & Calendars",
    description: "Seamlessly integrate with your existing tools to gather all your academic commitments in one place.",
  },
  {
    icon: <div className="relative">
      <Brain className="w-8 h-8" />
      <GlowingOrb className="absolute -right-2 -top-2 w-4 h-4" color="blue" />
    </div>,
    title: "Dynamic schedule with a Personalized AI Agent",
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
    <Section className="relative backdrop-blur-sm">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Powerful Features</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to excel academically, powered by cutting-edge AI technology.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="will-change-transform"
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Full-width Real-time Adaptation Feature */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={viewportConfig}
          className="relative glass-card rounded-2xl p-8 md:p-12 overflow-hidden will-change-transform"
        >
          {/* Rainbow Outline Effect */}
          <div className="absolute inset-0 pointer-events-none z-20">
            <motion.div 
              className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rhythm-blue/80 to-transparent"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rhythm-coral/70 to-transparent"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <motion.div 
              className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-green-400/60 to-transparent"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
            <motion.div 
              className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-purple-400/60 to-transparent"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            />
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <motion.div 
                className="w-16 h-16 glass-card rounded-full flex items-center justify-center relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Calendar className="w-8 h-8 text-rhythm-blue" />
                </motion.div>
                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(96, 165, 250, 0.3)",
                      "0 0 0 8px rgba(96, 165, 250, 0.1)",
                      "0 0 0 0 rgba(96, 165, 250, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
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

      {/* Optimized background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-rhythm-blue/5 rounded-full will-change-transform"
          style={{
            filter: "blur(40px)",
            transform: "translateZ(0)",
          }}
          animate={{
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </Section>
  );
};

export default FeaturesSection;
