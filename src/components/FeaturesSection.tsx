import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { FeatureCard } from "@/components/ui/feature-card";
import { GlowingOrb } from "@/components/ui/glowing-orb";
import { AnimatedBorder } from "@/components/ui/animated-border";
import { 
  fadeInUp, 
  staggerContainer, 
  hoverScale,
  tapScale,
  viewportConfig 
} from "@/lib/animation-configs";

const features = [
  {
    graphic: (
      <div className="relative w-full h-32">
        {/* Isometric stack of cards */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Back card - Roadmap */}
            <div className="absolute -bottom-2 -right-2 w-20 h-16 bg-gray-600/30 rounded-lg transform rotate-12 border border-gray-500/20">
              <div className="p-2 text-xs text-gray-300">
                <div className="h-2 bg-gray-500/40 rounded mb-1"></div>
                <div className="h-2 bg-gray-500/40 rounded mb-1 w-3/4"></div>
                <div className="h-2 bg-gray-500/40 rounded w-1/2"></div>
              </div>
            </div>
            {/* Third card - Projects */}
            <div className="absolute -bottom-1 -right-1 w-20 h-16 bg-gray-500/40 rounded-lg transform rotate-6 border border-gray-400/30">
              <div className="p-2 text-xs text-gray-200">
                <div className="h-2 bg-gray-400/50 rounded mb-1"></div>
                <div className="h-2 bg-gray-400/50 rounded mb-1 w-4/5"></div>
                <div className="h-2 bg-gray-400/50 rounded w-2/3"></div>
              </div>
            </div>
            {/* Second card - Issues */}
            <div className="absolute w-20 h-16 bg-gray-400/50 rounded-lg transform rotate-3 border border-gray-300/40">
              <div className="p-2 text-xs text-gray-100">
                <div className="h-2 bg-gray-300/60 rounded mb-1"></div>
                <div className="h-2 bg-gray-300/60 rounded mb-1 w-5/6"></div>
                <div className="h-2 bg-gray-300/60 rounded w-3/4"></div>
              </div>
            </div>
            {/* Front card - Code */}
            <div className="w-20 h-16 bg-gray-300/60 rounded-lg border border-gray-200/50">
              <div className="p-2 text-xs text-white">
                <div className="text-blue-300">function</div>
                <div className="text-green-300">return</div>
                <div className="text-yellow-300">let</div>
                <div className="text-purple-300">image</div>
              </div>
            </div>
            {/* Circular processing indicator */}
            <div className="absolute -right-6 top-2 w-12 h-12 bg-gray-600/40 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
            </div>
          </div>
        </div>
      </div>
    ),
    title: "Purpose-built for product development",
    description: "Seamlessly integrate with your existing tools to gather all your academic commitments in one place.",
  },
  {
    graphic: (
      <div className="relative w-full h-32">
        {/* Speed lines with motion blur effect */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Speed indicator */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-white text-lg font-bold">50ms</div>
            {/* Dynamic speed lines */}
            <div className="relative w-32 h-20">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute h-px bg-white/80 rounded-full"
                  style={{
                    left: `${i * 8}px`,
                    top: `${10 + (i % 3) * 8}px`,
                    width: `${20 + i * 4}px`,
                    opacity: 0.3 + (i * 0.06),
                  }}
                  animate={{
                    x: [0, 20, 40],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    title: "Designed to move fast",
    description: "Advanced AI creates personalized study plans that adapt to your learning style and workload.",
  },
  {
    graphic: (
      <div className="relative w-full h-32">
        {/* Design canvas with interactive elements */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Grid pattern background */}
            <div className="w-32 h-24 bg-gray-600/20 rounded-lg border border-gray-500/30 relative overflow-hidden">
              {/* Grid lines */}
              <div className="absolute inset-0">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="absolute h-full w-px bg-gray-500/30" style={{ left: `${(i + 1) * 25}%` }} />
                ))}
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="absolute w-full h-px bg-gray-500/30" style={{ top: `${(i + 1) * 33}%` }} />
                ))}
              </div>
              
              {/* Create element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="bg-gray-500/60 text-white text-xs px-3 py-1 rounded transform -rotate-12 border border-gray-400/50"
                  animate={{ rotate: [-12, -8, -12] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  Create
                </motion.div>
              </div>
              
              {/* Interactive handles and icons */}
              <div className="absolute top-2 right-2 w-3 h-3 bg-white/80 rounded-full" />
              <div className="absolute bottom-2 left-2 w-3 h-3 bg-white/80 rounded-full" />
              <div className="absolute top-1/2 left-2 w-3 h-3 bg-white/80 rounded-full" />
              <div className="absolute top-1/2 right-2 w-3 h-3 bg-white/80 rounded-full" />
              
              {/* Plus and X icons */}
              <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white/80 rounded flex items-center justify-center">
                <div className="w-2 h-0.5 bg-gray-700"></div>
                <div className="w-2 h-0.5 bg-gray-700 absolute transform rotate-90"></div>
              </div>
              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white/80 rounded flex items-center justify-center">
                <div className="w-2 h-0.5 bg-gray-700 transform rotate-45"></div>
                <div className="w-2 h-0.5 bg-gray-700 transform -rotate-45"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    title: "Crafted to perfection",
    description: "Missed a study session? PulsePlan automatically reschedules and adjusts your plan.",
  },
];

const FeaturesSection = () => {
  return (
    <Section className="relative backdrop-blur-sm">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Powerful Features</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to excel academically, powered by cutting-edge AI technology.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="will-change-transform"
            >
              <FeatureCard
                graphic={feature.graphic}
                title={feature.title}
                description={feature.description}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Full-width Real-time Adaptation Feature */}
        <motion.div
          whileHover={hoverScale}
          whileTap={tapScale}
          className="will-change-transform"
        >
          <div className="glass-card p-8 md:p-12 rounded-2xl overflow-hidden relative">
            {/* Blue accent line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-rhythm-blue"></div>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-gray-700 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  {/* Calendar grid background */}
                  <div className="absolute inset-0 p-4">
                    <div className="grid grid-cols-7 gap-1 h-full">
                      {[...Array(7)].map((_, i) => (
                        <div key={i} className="bg-gray-600/50 rounded-sm"></div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Static timeblocks */}
                  <div className="relative z-10">
                    {/* First timeblock */}
                    <div className="w-16 h-8 bg-blue-500/80 rounded-lg mb-2"></div>
                    
                    {/* Second timeblock */}
                    <div className="w-12 h-6 bg-green-500/80 rounded-lg mb-2"></div>
                    
                    {/* Third timeblock */}
                    <div className="w-14 h-4 bg-purple-500/80 rounded-lg"></div>
                  </div>
                  
                  {/* Processing indicator */}
                  <div className="absolute top-2 right-2 w-6 h-6 border-2 border-blue-400 border-t-transparent rounded-full"></div>
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Watch your calendar adapt in real-time</h3>
                <p className="text-lg text-muted-foreground">
                  PulsePlan's dynamic scheduling engine rearranges your study blocks as your workload changes, ensuring you're always making the best use of your time.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>

      {/* Optimized background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-rhythm-blue/5 rounded-full will-change-transform"
          style={{
            filter: "blur(40px)",
            transform: "translateZ(0)",
          }}
          animate={{
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </Section>
  );
};

export default FeaturesSection;
