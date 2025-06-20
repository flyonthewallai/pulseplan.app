import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { FeatureCard } from "@/components/ui/feature-card";
import { Link } from "react-router-dom";
import { 
  Puzzle, 
  RefreshCw, 
  Brain, 
  Chrome,
  ArrowRight,
  Shield,
  Smartphone,
  Check,
  Zap,
  WifiIcon
} from "lucide-react";
import { 
  fadeInUp, 
  fadeInScale, 
  staggerContainer, 
  slideInLeft, 
  slideInRight,
  hoverScale,
  transitions,
  viewportConfig,
  optimizedPulse
} from "@/lib/animation-configs";

const ExtensionSection = () => {
  const extensionFeatures = [
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Auto-Sync Canvas",
      description: "Automatically pulls assignments and due dates from your Canvas dashboard"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Scheduling",
      description: "Smart schedule optimization that adapts to your workload and deadlines"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Privacy First",
      description: "Only accesses assignments and grades — never your messages or passwords"
    }
  ];

  return (
    <Section className="relative">
      <Container>
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Canvas Extension</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect your Canvas LMS with PulsePlan for seamless assignment syncing. 
            No more manual entry—just install and go.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {extensionFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="h-full"
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                className="h-full"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Sync Visual Card */}
        <motion.div
          variants={fadeInScale}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="relative rounded-xl overflow-hidden mb-8"
          style={{ 
            willChange: 'transform',
            background: 'rgba(23, 23, 23, 0.95)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
          }}
        >
          {/* Enhanced Rainbow Outline Effect */}
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

          {/* Sync Visual */}
          <div className="relative z-10 p-8 md:p-12 flex flex-col items-center justify-center">
            <div className="text-center mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 mx-auto mb-4 text-rhythm-blue"
              >
                <RefreshCw className="w-16 h-16" />
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Canvas Integration
              </h3>
              <p className="text-white/60 text-sm">
                Syncing assignments in real-time
              </p>
            </div>
            
            {/* Buttons - Inside Card */}
            <div className="flex gap-4 flex-wrap justify-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="will-change-transform"
              >
                <Button
                  className="bg-rhythm-blue hover:bg-rhythm-blue/90 text-white text-lg px-8 py-4 rounded-xl transition-colors duration-200 focus:outline-none focus:ring-0"
                >
                  <Chrome className="w-5 h-5 text-white" />
                  Download Extension
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="will-change-transform"
              >
                <Button
                  asChild
                  variant="outline"
                  className="text-lg px-8 py-4 rounded-xl bg-black hover:bg-black/90 text-white border border-white/20 hover:border-white/60 transition-all duration-200"
                >
                  <Link to="/extension#">
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-rhythm-blue/20 to-rhythm-coral/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </Section>
  );
};

export default ExtensionSection; 