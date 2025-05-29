import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const screenshots = [
  { src: "/assets/dashboard.png", alt: "Dashboard View" },
  { src: "/assets/week.png", alt: "Weekly Schedule" },
  { src: "/assets/insights.png", alt: "Insights and Analytics" }
];

const INITIAL_DELAY = 2000; // 2 seconds initial delay
const SLIDE_INTERVAL = 4000; // 4 seconds between slides

interface IPhoneMockupProps {
  className?: string;
}

export const IPhoneMockup = ({ className }: IPhoneMockupProps) => {
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
    <div className={cn("relative mx-auto w-[300px] h-[600px]", className)}>
      {/* iPhone Frame */}
      <div className="absolute inset-0 bg-black rounded-[3rem] shadow-2xl">
        {/* Screen Area */}
        <div className="absolute inset-[3px] bg-background rounded-[2.8rem] overflow-hidden">
          {/* Dynamic Island / Notch */}
          <div className="absolute top-[10px] left-1/2 transform -translate-x-1/2 w-[120px] h-[25px] bg-black rounded-full z-20" />
          
          {/* Screen Content - Full Screen */}
          <div className="w-full h-full relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                src={screenshots[currentSlide].src}
                alt={screenshots[currentSlide].alt}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-white w-6 shadow-lg' 
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Home Indicator */}
        <div className="absolute bottom-[8px] left-1/2 transform -translate-x-1/2 w-[134px] h-[5px] bg-white/30 rounded-full" />
      </div>
    </div>
  );
}; 