import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Container } from "@/components/ui/container";
import { GlowingOrb } from "@/components/ui/glowing-orb";
import { ArrowRight, ChevronRight, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  fadeInUp, 
  fadeInScale, 
  staggerContainer, 
  hoverScale, 
  tapScale, 
  viewportConfig,
  backgroundFloat
} from "@/lib/animation-configs";

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

// Cache-busting timestamp for demo images
const CACHE_BUST = new Date().toISOString().slice(0, 16).replace(/[-:T]/g, '');

const demoImages = [
  `/assets/demo1.png?v=${CACHE_BUST}`,
  `/assets/demo2.png?v=${CACHE_BUST}`,
  `/assets/demo3.png?v=${CACHE_BUST}`
];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % demoImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-10 md:pt-8">
      <Container className="relative z-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <div className="w-full">
            {/* Main content container with optimized staggered animation */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="will-change-transform"
            >
              {/* Floating Orb */}
              <motion.div
                variants={fadeInUp}
                className="flex justify-center mb-8 mt-16 lg:mt-0"
              >
                <GlowingOrb size="lg" color="blue" />
              </motion.div>
              
              {/* Main heading */}
              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 will-change-transform"
              >
                Your personal AI {" "}
                <span className="text-gradient-blue">academic agent</span>.
              </motion.h1>
              
              {/* Subtitle */}
              <motion.p
                variants={fadeInUp}
                className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
              >
                PulsePlan turns assignments and calendars into an effortless schedule, making you more productive every day.
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div
                variants={fadeInUp}
                className="will-change-transform mb-12"
              >
                <ButtonGroup className="justify-center gap-4">
                  <motion.div
                    whileHover={hoverScale}
                    whileTap={tapScale}
                    className="will-change-transform"
                  >
                    <Button 
                      size="lg" 
                      className="bg-white hover:bg-gray-100 text-black text-lg px-8 py-4 rounded-xl transition-colors duration-200"
                    >
                      <AppleLogo />Download the App
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={hoverScale}
                    whileTap={tapScale}
                    className="will-change-transform"
                  >
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="bg-transparent hover:bg-white/10 text-white border-white/30 hover:border-white/60 text-lg px-8 py-4 rounded-xl transition-all duration-200"
                    >
                      Try It Free
                    </Button>
                  </motion.div>
                </ButtonGroup>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                variants={fadeInUp}
                className="text-center"
              >
                <p className="text-sm text-muted-foreground mb-4">Trusted by students at</p>
                <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                  <span className="text-lg font-medium">Harvard</span>
                  <span className="text-lg font-medium">MIT</span>
                  <span className="text-lg font-medium">Princeton</span>
                  <span className="text-lg font-medium">Oxford</span>
                  <span className="text-lg font-medium">Yale</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
      
      {/* Optimized background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          variants={backgroundFloat}
          animate="float"
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-rhythm-blue/3 rounded-full will-change-transform"
          style={{
            filter: "blur(40px)",
            transform: "translateZ(0)",
          }}
        />
        <motion.div 
          variants={backgroundFloat}
          animate="float"
          className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-rhythm-blue/3 rounded-full will-change-transform"
          style={{
            filter: "blur(40px)", 
            transform: "translateZ(0)",
            animationDelay: "2s",
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
