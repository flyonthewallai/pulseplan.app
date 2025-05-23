import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const screenshots = [
  { src: "/assets/dashboard.png", alt: "Dashboard View" },
  { src: "/assets/week.png", alt: "Weekly Schedule" },
  { src: "/assets/insights.png", alt: "Insights and Analytics" }
];

const INITIAL_DELAY = 2000; // 2 seconds initial delay
const SLIDE_INTERVAL = 4000; // 4 seconds between slides

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSlideshowActive, setIsSlideshowActive] = useState(false);

  useEffect(() => {
    // Initial delay before starting the slideshow
    const initialTimer = setTimeout(() => {
      setIsSlideshowActive(true);
    }, INITIAL_DELAY);

    // Slideshow interval
    const slideshowTimer = setInterval(() => {
      if (isSlideshowActive) {
        setCurrentSlide((prev) => (prev + 1) % screenshots.length);
      }
    }, SLIDE_INTERVAL);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(slideshowTimer);
    };
  }, [isSlideshowActive]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 text-white min-h-screen flex flex-col">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex-grow flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm border border-white/20"
            >
              <Sparkles className="w-4 h-4 text-blue-300" />
              AI-Powered Academic Planning
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-5xl lg:text-6xl font-bold leading-tight"
            >
              Plan smarter.
              <br />
              Study better.
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Powered by AI.
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              className="text-xl text-blue-100 leading-relaxed max-w-lg"
            >
              PulsePlan builds your daily and weekly schedule using machine learning, so you can focus on what matters most.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button 
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get the App
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative mx-auto w-80 h-[600px]">
              {/* iPhone Mockup Frame */}
              <div className="absolute inset-0 bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-gray-800 rounded-[2.5rem] overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10" />
                  
                  {/* Screen Content */}
                  <div className="w-full h-full bg-gradient-to-b from-gray-800 to-gray-900 p-4 pt-8 overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.img 
                        key={currentSlide}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        src={screenshots[currentSlide].src}
                        alt={screenshots[currentSlide].alt}
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </AnimatePresence>

                    {/* Slide Indicators */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                      {screenshots.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            currentSlide === index 
                              ? 'bg-white w-4' 
                              : 'bg-white/50 hover:bg-white/75'
                          }`}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <motion.div 
                initial={{ opacity: 0, rotate: 0, scale: 0.8 }}
                animate={{ opacity: 0.8, rotate: 12, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl shadow-lg"
              />
              <motion.div 
                initial={{ opacity: 0, rotate: 0, scale: 0.8 }}
                animate={{ opacity: 0.6, rotate: -12, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bouncing Arrow */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1,
          y: [0, -10, 0]
        }}
        transition={{ 
          opacity: { duration: 0.6, delay: 1.6, ease: "easeOut" },
          y: {
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 2.2 // Start bouncing after fade-in
          }
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.a 
          href="#features" 
          className="flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors"
          whileHover={{ y: -2 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <span className="text-sm font-medium">See more</span>
          <ChevronDown className="w-6 h-6" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
