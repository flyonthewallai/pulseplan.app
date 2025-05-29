import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Container } from "@/components/ui/container";
import { IPhoneMockup } from "@/components/ui/iphone-mockup";
import { GlowingOrb } from "@/components/ui/glowing-orb";
import { ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const AppleLogo = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.41-1.09-.47-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.41C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.19 2.31-.89 3.51-.84 1.54.07 2.7.61 3.44 1.57-3.14 1.88-2.29 5.13.22 6.41-.65 1.29-1.52 2.58-2.25 4.03zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
  </svg>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8">
      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <div className="flex-1 text-center lg:text-left">
            {/* Floating Orb */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex justify-center lg:justify-start mb-8"
            >
              <GlowingOrb size="lg" color="blue" />
            </motion.div>
            
            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Let your schedule find its{" "}
              <span className="text-gradient-blue">rhythm</span>.
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-muted-foreground max-w-xl mb-4"
            >
              Built to make you extraordinarily productive, PulsePlan is the best way to manage your academic life with AI.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <ButtonGroup className="justify-center lg:justify-start">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button size="lg" className="bg-rhythm-blue hover:bg-rhythm-blue/90 text-white text-lg px-8 py-4 rounded-xl">
                    <AppleLogo />Download the App
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button variant="outline" size="lg" className="text-lg px-8 py-4 rounded-xl border-border hover:bg-accent">
                    Upgrade to Premium
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
              </ButtonGroup>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center lg:text-left mt-12"
            >
              <p className="text-sm text-muted-foreground mb-4">Trusted by students at</p>
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8 opacity-60">
                <span className="text-lg font-medium">CU Boulder</span>
                <span className="text-lg font-medium">LSU</span>
                <span className="text-lg font-medium">Nebraska</span>
                <span className="text-lg font-medium">GCU</span>
                <span className="text-lg font-medium">CSU</span>
              </div>
            </motion.div>
          </div>
          
          <div className="flex-1 w-full max-w-md mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <IPhoneMockup />
            </motion.div>
          </div>
        </div>
      </Container>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-rhythm-blue/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-rhythm-blue/10 rounded-full filter blur-3xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;
