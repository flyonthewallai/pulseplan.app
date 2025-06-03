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
  Smartphone
} from "lucide-react";

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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Canvas Extension</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect your Canvas LMS with PulsePlan for seamless assignment syncing. 
            No more manual entry—just install and go.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {extensionFeatures.map((feature, index) => (
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

        {/* Full-width Demo Card */}
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
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Content */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">See your Canvas sync in real-time</h3>
              <p className="text-lg text-muted-foreground mb-8">
                Install the extension, and watch as your Canvas assignments automatically appear in PulsePlan. 
                Your schedule updates instantly across all devices.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  asChild
                  className="bg-rhythm-blue hover:bg-rhythm-blue/90 text-white px-8 py-3 text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Chrome className="mr-2 w-5 h-5" />
                    Install Extension
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-border hover:bg-muted px-8 py-3 text-lg rounded-xl transition-all duration-300"
                >
                  <Link to="/extension">
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right side - Visual Demo */}
            <div className="relative">
              <div className="glass-card rounded-2xl p-6 relative overflow-hidden">
                {/* Browser mockup */}
                <div className="bg-gray-900 rounded-lg p-4 mb-6 border border-gray-700">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="flex-1 bg-gray-800 rounded px-3 py-1 text-xs text-gray-300">
                      canvas.colorado.edu/courses
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-gray-800 rounded p-3 shadow-sm border border-gray-600">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium text-gray-100">CSCI 1300 - Final Project</div>
                        <div className="text-xs text-rhythm-blue font-medium">Due: Dec 14</div>
                      </div>
                    </div>
                    <div className="bg-gray-800 rounded p-3 shadow-sm border border-gray-600">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium text-gray-100">MATH 2300 - WebAssign</div>
                        <div className="text-xs text-rhythm-blue font-medium">Due: Dec 8</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Sync indicator */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center space-x-2 text-rhythm-blue">
                    <RefreshCw className="w-6 h-6 animate-spin" />
                    <span className="text-sm font-medium">Syncing...</span>
                  </div>
                </div>

                {/* Mobile app mockup */}
                <div className="bg-gray-800 border border-gray-600 rounded-lg p-4 max-w-xs mx-auto shadow-lg">
                  <div className="flex items-center space-x-2 mb-3">
                    <Smartphone className="w-5 h-5 text-rhythm-blue" />
                    <span className="font-semibold text-gray-100">PulsePlan</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="bg-gray-700 border border-gray-600 rounded p-2 text-gray-100 font-medium">CSCI 1300 - Final Project</div>
                    <div className="bg-gray-700 border border-gray-600 rounded p-2 text-gray-100 font-medium">MATH 2300 - WebAssign</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-rhythm-blue/10 rounded-full filter blur-3xl"></div>
      </div>
    </Section>
  );
};

export default ExtensionSection; 