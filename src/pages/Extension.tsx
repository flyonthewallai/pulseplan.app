import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Puzzle,
  CheckCircle,
  RefreshCw,
  Brain,
  RotateCcw,
  TestTube,
  Shield,
  Chrome,
  Download,
  Lock,
  Smartphone,
  QrCode,
  HelpCircle,
  GraduationCap,
  Eye,
  Key,
  MessageSquare,
  Zap,
  Check
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  fadeInUp, 
  fadeInScale, 
  staggerContainer, 
  slideInLeft, 
  slideInRight,
  hoverScale,
  hoverGlow,
  transitions,
  viewportConfig,
  optimizedPulse
} from "@/lib/animation-configs";

const Extension = () => {
  const benefits = [
    {
      icon: RefreshCw,
      title: "Sync your Canvas assignments and exams",
      description: "Never miss a deadline again",
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      icon: Brain,
      title: "Automatically schedule them with AI",
      description: "Smart scheduling that works for you",
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      icon: RotateCcw,
      title: "Keep everything updated effortlessly",
      description: "Changes sync automatically",
      gradient: "from-teal-400 to-cyan-500"
    },
    {
      icon: TestTube,
      title: "Works securely in your browser only",
      description: "Never stores passwords or private messages",
      gradient: "from-blue-500 to-indigo-500"
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Install the extension from the Chrome Web Store",
      description: "One-click installation from Google Chrome",
      icon: Download
    },
    {
      number: "2",
      title: "Log in to your school's Canvas site",
      description: "e.g., canvas.colorado.edu",
      icon: GraduationCap
    },
    {
      number: "3",
      title: "The extension will automatically sync your assignments",
      description: "Works in the background seamlessly",
      icon: RefreshCw
    },
    {
      number: "4",
      title: "Open the PulsePlan mobile app to see your schedule update instantly",
      description: "View your optimized schedule anywhere",
      icon: Smartphone
    }
  ];

  const privacyFeatures = [
    "We only access your assignment and grade pages — nothing else",
    "No keystrokes, messages, or other sites are ever tracked",
    "Your data is encrypted and securely tied to your PulsePlan account",
    "Built by students, for students"
  ];

  const troubleshootingSteps = [
    "Make sure you're logged into Canvas in the same browser",
    "Try visiting your Canvas dashboard directly: cuboulder.instructure.com",
    "Refresh PulsePlan in your mobile app"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-950 to-slate-950 text-white">
      <Navbar />
      
      {/* Enhanced Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/5 to-blue-600/5"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
        {/* Enhanced floating orbs */}
        <motion.div 
          className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
            x: [0, 20, 0],
            y: [0, -10, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15],
            x: [0, -30, 0],
            y: [0, 20, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            viewport={viewportConfig}
          >
            <motion.div 
              variants={fadeInScale}
              className="flex justify-center mb-6"
            >
              <div className="relative">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Puzzle className="w-16 h-16 text-blue-400" />
                </motion.div>
                <motion.div
                  className="absolute -inset-2 bg-blue-400/20 rounded-full blur-lg"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent"
              style={{ willChange: 'transform' }}
            >
              PulsePlan Canvas<br />Companion
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
            >
              Automatically sync your assignments — no more manual input.
            </motion.p>
            
            <motion.div variants={fadeInUp}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                style={{ willChange: 'transform' }}
              >
                <Button
                  asChild
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-0"
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Download Extension
                    <Chrome className="ml-2 w-5 h-5 transform-none" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Why You Need This Section */}
      <section className="py-20 px-4 bg-gray-900/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Why You Need This</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              PulsePlan needs a quick peek at your Canvas dashboard to pull in all your classes, assignments, 
              and due dates — so you never have to enter them manually.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid md:grid-cols-2 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={hoverScale}
                style={{ willChange: 'transform' }}
              >
                <Card className="border border-gray-800/50 bg-gray-900/50 shadow-lg hover:shadow-xl transition-all duration-300 h-full relative overflow-hidden backdrop-blur-sm">
                  {/* Enhanced border animations */}
                  <div className="absolute inset-0 pointer-events-none z-20">
                    <motion.div 
                      className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rhythm-blue/40 to-transparent"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                    <motion.div 
                      className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rhythm-coral/30 to-transparent"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.2 }}
                    />
                  </div>
                  
                  <CardContent className="p-8 relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={transitions.fast}
                      className="mb-6"
                    >
                      <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${benefit.gradient} p-4 shadow-lg`}>
                        <benefit.icon className="w-8 h-8 text-white" />
                      </div>
                    </motion.div>
                    <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced How It Works Section */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">How It Works</h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 mx-auto flex items-center justify-center bg-gray-900/80 border border-gray-700/60 rounded-full shadow-lg">
                    <step.icon className="w-10 h-10 text-cyan-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Install Now Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-600/10 to-blue-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl font-bold mb-8 text-white"
            >
              Install Now
            </motion.h2>
            
            <motion.div 
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              style={{ willChange: 'transform' }}
            >
              <Button
                asChild
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 md:px-12 md:py-6 text-base md:text-xl rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 mb-6 focus:outline-none focus:ring-0"
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Chrome className="mr-3 w-5 h-5 md:w-6 md:h-6" />
                  Chrome Web Store
                </a>
              </Button>
            </motion.div>
            
            <motion.p 
              variants={fadeInUp}
              className="text-gray-300 text-lg"
            >
              You'll only need to do this once.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Privacy First Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Privacy First</h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-6"
          >
            {privacyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={slideInLeft}
                whileHover={hoverScale}
                className="relative overflow-hidden"
                style={{ willChange: 'transform' }}
              >
                <div className="flex items-center space-x-4 p-6 bg-gray-900/50 border border-gray-800/50 rounded-xl shadow-md relative backdrop-blur-sm">
                  {/* Enhanced border animations */}
                  <motion.div 
                    className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/80 to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  />
                  
                  <motion.div
                    className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 relative z-10"
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    transition={transitions.bouncy}
                  >
                    <Shield className="w-5 h-5 text-white" />
                  </motion.div>
                  <p className="text-lg text-gray-200 relative z-10">{feature}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center mt-12"
          >
            <motion.div
              whileHover={hoverScale}
              style={{ willChange: 'transform' }}
            >
              <Button
                asChild
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-6 py-3 text-lg"
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Read our full privacy policy →
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Link with App Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center mb-12"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl font-bold mb-6 text-white"
            >
              Need to Link with Your App?
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-300 mb-8"
            >
              After installing, scan this code in the PulsePlan app to link your Canvas data.
            </motion.p>
          </motion.div>

          <motion.div
            variants={fadeInScale}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="max-w-md mx-auto"
          >
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={transitions.smooth}
            >
              <QrCode className="w-full h-48 text-gray-800" />
              <p className="text-center text-gray-600 mt-4 font-medium">
                Scan with PulsePlan App
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Troubleshooting Section */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Troubleshooting</h2>
            <p className="text-xl text-gray-300 mb-8">
              Extension not working? Try these steps:
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-6"
          >
            {troubleshootingSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={slideInRight}
                whileHover={hoverScale}
                style={{ willChange: 'transform' }}
              >
                <div className="flex items-center space-x-4 p-6 bg-gray-900/50 border border-gray-800/50 rounded-xl shadow-md relative backdrop-blur-sm">
                  {/* Enhanced animated lines */}
                  <motion.div 
                    className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/80 to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  />
                  
                  <motion.div
                    className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 relative z-10"
                    whileHover={{ scale: 1.2, rotate: -90 }}
                    transition={transitions.bouncy}
                  >
                    <HelpCircle className="w-5 h-5 text-white" />
                  </motion.div>
                  <p className="text-lg text-gray-200 relative z-10">{step}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Compatible Schools Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Compatible Schools</h2>
            <p className="text-xl text-gray-300 mb-8">
              This extension works with all schools using Instructure Canvas LMS.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInScale}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <Card className="border border-gray-800/50 bg-gray-900/50 shadow-lg relative overflow-hidden backdrop-blur-sm">
              {/* Enhanced animated borders */}
              <div className="absolute inset-0 pointer-events-none z-20">
                <motion.div 
                  className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rhythm-blue/80 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1.5 }}
                />
                <motion.div 
                  className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rhythm-coral/70 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                />
              </div>
              
              <CardContent className="p-8 relative z-10">
                <h3 className="text-xl font-bold mb-6 text-white">Verified with:</h3>
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportConfig}
                  className="space-y-4"
                >
                  {[
                    { logo: "/assets/culogo.png", name: "University of Colorado Boulder" },
                    { logo: "/assets/csulogo.avif", name: "Colorado State University" },
                    { logo: "/assets/gculogo.webp", name: "Grand Canyon University" },
                    { logo: "/assets/lsulogo.png", name: "Louisiana State University" },
                    { logo: "/assets/nebraskalogo.png", name: "University of Nebraska" }
                  ].map((school, index) => (
                    <motion.div 
                      key={index}
                      variants={fadeInUp}
                      whileHover={hoverScale}
                      className="flex items-center space-x-4"
                      style={{ willChange: 'transform' }}
                    >
                      <motion.div 
                        className="w-8 h-8 bg-white rounded-full flex items-center justify-center p-1"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <img 
                          src={school.logo} 
                          alt={`${school.name} Logo`} 
                          className="w-full h-full object-contain"
                        />
                      </motion.div>
                      <span className="text-lg text-gray-200">{school.name}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Extension; 