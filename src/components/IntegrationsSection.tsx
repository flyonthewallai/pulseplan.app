import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animation-configs";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const integrations = [
  { name: "Google Calendar", logo: "/assets/googlecalendar.png" },
  { name: "Canvas", logo: "/assets/canvas.png" },
  { name: "Gmail", logo: "/assets/gmail.png" },
  { name: "Apple Calendar", logo: "/assets/applecalendar.png" },
  { name: "Notion", logo: "/assets/notion.png" },
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
    icon: <img src="/assets/canvas.png" alt="Outlook" className="w-6 h-6 object-contain" />,
    prompt: "Fetch this week's assignments"
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
    icon: <img src="/assets/logo.png" alt="PulsePlan" className="w-9 h-9" />,
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
      className="relative mt-16 flex justify-center"
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
              <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <ArrowUp className="w-4 h-4 text-black" />
              </button>
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

const IntegrationsSection = () => {
  return (
    <Section id="integrations" className="py-16 sm:py-24">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold tracking-tight"
          >
            Integrations for your workflow
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg text-muted-foreground"
          >
            PulsePlan connects with the tools you already use to streamline
            your academic life. No more context switching.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 flex flex-row flex-wrap items-center justify-center gap-4"
        >
          {integrations.map((integration, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="flex items-center justify-center h-24 w-24 bg-background-alt border border-white/10 rounded-xl"
            >
              <img 
                src={integration.logo} 
                alt={integration.name} 
                className="max-h-12 w-auto"
              />
            </motion.div>
          ))}
        </motion.div>

        <AIPromptBar />
      </Container>
    </Section>
  );
};

export default IntegrationsSection; 