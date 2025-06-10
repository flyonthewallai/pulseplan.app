import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Container } from "@/components/ui/container";
import { IPhoneMockup } from "@/components/ui/iphone-mockup";
import { GlowingOrb } from "@/components/ui/glowing-orb";
import { ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
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



const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8">
      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <div className="flex-1 text-center lg:text-left">
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
                className="flex justify-center lg:justify-start mb-8 mt-16 lg:mt-0"
              >
                <GlowingOrb size="lg" color="blue" />
              </motion.div>
              
              {/* Main heading */}
              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 will-change-transform"
              >
                Let your schedule find its{" "}
                <span className="text-gradient-blue">rhythm</span>.
              </motion.h1>
              
              {/* Subtitle */}
              <motion.p
                variants={fadeInUp}
                className="text-xl text-muted-foreground max-w-xl mb-4"
              >
                Built to make you extraordinarily productive, PulsePlan is the best way to manage your academic life with AI.
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div
                variants={fadeInUp}
                className="will-change-transform"
              >
                <ButtonGroup className="justify-center lg:justify-start">
                  <motion.div
                    whileHover={hoverScale}
                    whileTap={tapScale}
                    className="will-change-transform"
                  >
                    <Button 
                      size="lg" 
                      className="bg-rhythm-blue hover:bg-rhythm-blue/90 text-white text-lg px-8 py-4 rounded-xl transition-colors duration-200"
                    >
                      <AppleLogo />Download the App
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </motion.div>
                  <motion.div
                    whileTap={tapScale}
                    className="will-change-transform"
                  >
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="text-lg px-8 py-4 rounded-xl bg-black hover:bg-black/90 text-white border border-white/20 hover:border-white/60 transition-all duration-200"
                    >
                      Upgrade to Premium
                      <ChevronRight className="ml-2 w-5 h-5" />
                    </Button>
                  </motion.div>
                </ButtonGroup>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                variants={fadeInUp}
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
            </motion.div>
          </div>
          
          <div className="flex-1 w-full max-w-md mx-auto lg:mx-0">
            <motion.div
              variants={fadeInScale}
              initial="hidden"
              animate="visible"
              className="will-change-transform"
            >
              <IPhoneMockup />
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
