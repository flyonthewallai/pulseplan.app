import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface AppShowcaseProps {
  screenshots: {
    src: string;
    alt: string;
    title?: string;
    description?: string;
  }[];
  className?: string;
  height?: string;
  showTitles?: boolean;
  showProgress?: boolean;
}

export const AppShowcase = ({ 
  screenshots, 
  className, 
  height = "h-screen",
  showTitles = true,
  showProgress = true
}: AppShowcaseProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate which screenshot should be shown based on scroll progress
  const screenshotIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, screenshots.length - 1]
  );

  // Update current index when scrolling
  useEffect(() => {
    const unsubscribe = screenshotIndex.on("change", (value) => {
      const index = Math.round(value);
      if (index !== currentIndex && index >= 0 && index < screenshots.length) {
        setCurrentIndex(index);
      }
    });

    return () => unsubscribe();
  }, [screenshotIndex, currentIndex, screenshots.length]);

  // Calculate progress percentage
  const progressPercentage = (currentIndex / (screenshots.length - 1)) * 100;

  return (
    <div 
      ref={containerRef} 
      className={cn("relative w-full", height, className)}
    >
      {/* Fixed showcase container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4">
          {/* Current screenshot */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative"
          >
            <img
              src={screenshots[currentIndex].src}
              alt={screenshots[currentIndex].alt}
              className="w-full h-auto max-h-[70vh] object-contain rounded-2xl shadow-2xl"
            />
            
            {/* Screenshot info overlay */}
            {showTitles && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute -bottom-20 left-0 right-0 text-center"
              >
                <h3 className="text-2xl font-bold text-white mb-2">
                  {screenshots[currentIndex].title}
                </h3>
                {screenshots[currentIndex].description && (
                  <p className="text-gray-300 text-lg">
                    {screenshots[currentIndex].description}
                  </p>
                )}
              </motion.div>
            )}
          </motion.div>

          {/* Progress indicator */}
          {showProgress && (
            <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2">
              <div className="flex items-center space-x-2">
                {screenshots.map((_, index) => (
                  <motion.div
                    key={index}
                    className={cn(
                      "w-3 h-3 rounded-full transition-all duration-300",
                      index === currentIndex 
                        ? "bg-rhythm-blue scale-125" 
                        : "bg-gray-600"
                    )}
                    animate={{
                      scale: index === currentIndex ? 1.25 : 1,
                      backgroundColor: index === currentIndex ? "#2563eb" : "#4b5563"
                    }}
                  />
                ))}
              </div>
              
              {/* Progress bar */}
              <div className="mt-4 w-32 h-1 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-rhythm-blue rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          )}

          {/* Navigation hints */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-400 text-sm">
            <div className="rotate-90 whitespace-nowrap">Scroll to explore</div>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 right-4 text-gray-400 text-sm">
            <div className="-rotate-90 whitespace-nowrap">{currentIndex + 1} of {screenshots.length}</div>
          </div>
        </div>
      </div>

      {/* Scrollable content to enable scrolling */}
      <div className="relative" style={{ height: `${screenshots.length * 100}vh` }}>
        {/* Invisible markers for scroll detection */}
        {screenshots.map((_, index) => (
          <div
            key={index}
            className="h-screen flex items-center justify-center"
            style={{ scrollSnapAlign: "start" }}
          />
        ))}
      </div>
    </div>
  );
};

// Alternative version with horizontal scroll
export const HorizontalAppShowcase = ({ 
  screenshots, 
  className 
}: Omit<AppShowcaseProps, 'height' | 'showProgress'>) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextScreenshot = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevScreenshot = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <div className={cn("relative w-full", className)}>
      <div className="max-w-4xl mx-auto px-4">
        {/* Current screenshot */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative"
        >
          <img
            src={screenshots[currentIndex].src}
            alt={screenshots[currentIndex].alt}
            className="w-full h-auto max-h-[70vh] object-contain rounded-2xl shadow-2xl"
          />
          
          {/* Screenshot info */}
          {showTitles && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-2">
                {screenshots[currentIndex].title}
              </h3>
              {screenshots[currentIndex].description && (
                <p className="text-gray-300 text-lg">
                  {screenshots[currentIndex].description}
                </p>
              )}
            </motion.div>
          )}
        </motion.div>

        {/* Navigation controls */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button
            onClick={prevScreenshot}
            className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            aria-label="Previous screenshot"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="flex space-x-2">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === currentIndex ? "bg-rhythm-blue" : "bg-gray-600"
                )}
              />
            ))}
          </div>
          
          <button
            onClick={nextScreenshot}
            className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            aria-label="Next screenshot"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};







