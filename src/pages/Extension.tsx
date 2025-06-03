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
  MessageSquare
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      description: "e.g., cuboulder.instructure.com",
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
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/5 to-blue-600/5"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <Puzzle className="w-16 h-16 text-blue-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              PulsePlan Canvas<br />Companion
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Automatically sync your assignments — no more manual input.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button
                asChild
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Download Extension
                  <Chrome className="ml-2 w-5 h-5 transform-none" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why You Need This Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Why You Need This</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              PulsePlan needs a quick peek at your Canvas dashboard to pull in all your classes, assignments, 
              and due dates — so you never have to enter them manually.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="border border-gray-800 bg-gray-900/50 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full relative overflow-hidden">
                  {/* Animated lines */}
                  <div className="absolute inset-0 pointer-events-none z-20">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rhythm-blue/30 to-transparent animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rhythm-coral/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-rhythm-blue/30 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-rhythm-blue/30 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                  </div>
                  <CardContent className="p-8 relative z-10">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${benefit.gradient} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <benefit.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{benefit.title}</h3>
                        <p className="text-gray-300 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">How It Works</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="relative mb-8">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Install Now Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-8 text-white">Install Now</h2>
            <Button
              asChild
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-12 py-6 text-xl rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 mb-6"
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Chrome className="mr-3 w-6 h-6" />
                Chrome Web Store Button (Install Extension)
              </a>
            </Button>
            <p className="text-gray-300 text-lg">You'll only need to do this once.</p>
          </motion.div>
        </div>
      </section>

      {/* Privacy First Section */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Privacy First</h2>
          </motion.div>

          <div className="space-y-6">
            {privacyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative overflow-hidden"
              >
                <div className="flex items-center space-x-4 p-6 bg-gray-900/50 border border-gray-800 rounded-xl shadow-md relative">
                  {/* Animated lines */}
                  <div className="absolute inset-0 pointer-events-none z-20">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rhythm-blue/30 to-transparent animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rhythm-coral/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-rhythm-blue/30 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-rhythm-blue/30 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                  </div>
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-lg text-gray-200 relative z-10">{feature}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
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
        </div>
      </section>

      {/* Link with App Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Need to Link with Your App?</h2>
            <p className="text-xl text-gray-300 mb-8">
              After installing, scan this code in the PulsePlan app to link your Canvas data.
            </p>
          </motion.div>

          <Card className="border border-gray-800 bg-gray-900/50 shadow-lg max-w-md mx-auto relative overflow-hidden">
            {/* Animated lines */}
            <div className="absolute inset-0 pointer-events-none z-20">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rhythm-blue/30 to-transparent animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rhythm-coral/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-rhythm-blue/30 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-rhythm-blue/30 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            </div>
            <CardContent className="p-8 text-center relative z-10">
              <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-xl flex items-center justify-center">
                <QrCode className="w-16 h-16 text-gray-900" />
              </div>
              <div className="text-2xl font-mono font-bold text-white bg-gray-800 px-4 py-2 rounded-lg inline-block">
                AB2-349
              </div>
              <p className="text-gray-400 mt-4 text-sm">QR code or 6-digit code display</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Troubleshooting Section */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Troubleshooting</h2>
            <h3 className="text-2xl font-semibold mb-8 text-gray-300">Not seeing your classes?</h3>
          </motion.div>

          <div className="space-y-6">
            {troubleshootingSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative overflow-hidden"
              >
                <div className="flex items-center space-x-4 p-6 bg-gray-900/50 border border-gray-800 rounded-xl shadow-md relative">
                  {/* Animated lines */}
                  <div className="absolute inset-0 pointer-events-none z-20">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rhythm-blue/30 to-transparent animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rhythm-coral/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-rhythm-blue/30 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-rhythm-blue/30 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                  </div>
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
                    <HelpCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-lg text-gray-200 relative z-10">{step}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compatible Schools Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Compatible Schools</h2>
            <p className="text-xl text-gray-300 mb-8">
              This extension works with all schools using Instructure Canvas LMS.
            </p>
          </motion.div>

          <Card className="border border-gray-800 bg-gray-900/50 shadow-lg relative overflow-hidden">
            {/* Animated lines */}
            <div className="absolute inset-0 pointer-events-none z-20">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rhythm-blue/30 to-transparent animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rhythm-coral/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-rhythm-blue/30 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-rhythm-blue/30 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            </div>
            <CardContent className="p-8 relative z-10">
              <h3 className="text-xl font-bold mb-6 text-white">Verified with:</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center p-1">
                    <img 
                      src="/assets/culogo.png" 
                      alt="CU Boulder Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-lg text-gray-200">University of Colorado Boulder</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center p-1">
                    <img 
                      src="/assets/csulogo.avif" 
                      alt="CSU Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-lg text-gray-200">Colorado State University</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center p-1">
                    <img 
                      src="/assets/gculogo.webp" 
                      alt="GCU Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-lg text-gray-200">Grand Canyon University</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center p-1">
                    <img 
                      src="/assets/lsulogo.png" 
                      alt="LSU Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-lg text-gray-200">Louisiana State University</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center p-1">
                    <img 
                      src="/assets/nebraskalogo.png" 
                      alt="Nebraska Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-lg text-gray-200">University of Nebraska</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-400">
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Extension; 