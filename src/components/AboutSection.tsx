import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  ArrowRight,
  Mail,
  Globe
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const AboutSection = () => {
  return (
    <Section>
      <div className="relative">
        <Container className="max-w-4xl pb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Building the future of student tools
            </h2>
            <div className="text-xl text-muted-foreground space-y-4 max-w-3xl mx-auto">
              <p className="leading-relaxed">
                Created by <span className="text-gradient-lavender font-semibold">Fly on the Wall</span>, a student-led team passionate about making academic life more manageable and productive.
              </p>
              <p className="leading-relaxed">
                We understand the challenges of balancing coursework, deadlines, and personal life because we've been there. That's why we built PulsePlan - to give students the tools they need to succeed without the stress.
              </p>
              <p className="leading-relaxed">
                Our AI-powered platform learns from your habits and preferences to create schedules that actually work for your lifestyle, helping you achieve your academic goals while maintaining balance.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 mb-4 relative overflow-hidden"
          >
            {/* Animated lines for light outline */}
            <div className="absolute inset-0 pointer-events-none z-20">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rhythm-blue/30 to-transparent animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rhythm-coral/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-rhythm-blue/30 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-rhythm-blue/30 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            </div>
            <h3 className="text-2xl font-semibold mb-6 text-center">Our Mission</h3>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Born from the shared experiences of three roommates, Fly on the Wall combines technical expertise with a deep understanding in the integration of AI and Machine Learning into daily needs. We're building tools that solve real problems—starting with PulsePlan, our AI-powered academic planning assistant.
              </p>
              <p>
                Our approach is simple: create intuitive, powerful tools that automate the mundane and amplify what matters. Every feature we build is crafted with care, tested by real users, and refined through continuous feedback.
              </p>
            </div>
            
            <div className="flex justify-center mt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button 
                  className="bg-rhythm-blue hover:bg-rhythm-blue/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 px-8 py-4 rounded-xl text-lg"
                  onClick={() => window.open('https://flyonthewalldev.com', '_blank')}
                >
                  <Globe className="w-7 h-7" />
                  Visit our studio
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </Container>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-rhythm-blue/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-rhythm-blue/10 rounded-full filter blur-3xl"></div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection; 