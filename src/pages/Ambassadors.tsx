import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  Gift, 
  Megaphone, 
  Unlock,
  Share2,
  TestTube,
  UserCheck,
  ArrowRight,
  CheckCircle,
  MessageCircle,
  Calendar
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
  transitions,
  viewportConfig,
  optimizedPulse
} from "@/lib/animation-configs";

const Ambassador = () => {
  const valueCards = [
    {
      icon: Gift,
      title: "Lifetime Premium Access",
      description: "No limits, ever.",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      icon: Megaphone,
      title: "Shoutouts on our socials & site",
      description: "Get featured across our platforms.",
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      icon: Unlock,
      title: "Early access to new features",
      description: "Beta test features & give feedback.",
      gradient: "from-purple-400 to-pink-500"
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Apply using the Notion form",
      description: "Fill out our quick application form",
      icon: UserCheck
    },
    {
      number: "2",
      title: "Make a story post or campus share",
      description: "Share PulsePlan with your student networks",
      icon: Share2
    },
    {
      number: "3",
      title: "Get verified & unlock Premium for life",
      description: "Submit proof and enjoy lifetime access",
      icon: CheckCircle
    }
  ];

  const faqs = [
    {
      question: "Can I apply even if I'm not super active on social media?",
      answer: "Yes! If you're passionate about helping students stay on top of their schedules, we want you."
    },
    {
      question: "How do I prove I shared it?",
      answer: "Submit a screenshot after your post. We'll follow up via email."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white">
      <Navbar />
      
      {/* Enhanced Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
        {/* Enhanced floating orbs */}
        <motion.div 
          className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"
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
          className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"
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
                  <Calendar className="w-16 h-16 text-blue-400" />
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
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              style={{ willChange: 'transform' }}
            >
              Become a PulsePlan Ambassador
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
            >
              Share the tool you love, earn lifetime access, and help students take back their time.
            </motion.p>
            
            <motion.div variants={fadeInUp}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                style={{ willChange: 'transform' }}
              >
                <Button
                  asChild
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-0"
                >
                  <a href="https://www.notion.so/connergroth/2036b20844a880f7a065cc060a0014e3?pvs=106" target="_blank" rel="noopener noreferrer">
                    Apply Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Why Join Section */}
      <section className="py-20 px-4 bg-gray-900/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Why Join?</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We're building smarter student tools—and we want you to be part of it. As an ambassador, 
              you'll help us grow by sharing PulsePlan with your campus.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid md:grid-cols-3 gap-8"
          >
            {valueCards.map((card, index) => (
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
                  
                  <CardContent className="p-8 text-center relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={transitions.fast}
                      className="mb-6"
                    >
                      <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${card.gradient} p-4 shadow-lg`}>
                        <card.icon className="w-8 h-8 text-white" />
                      </div>
                    </motion.div>
                    <h3 className="text-xl font-bold mb-3 text-white">{card.title}</h3>
                    <p className="text-gray-300">{card.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced What You'll Do Section */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">What You'll Do</h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-6"
          >
            {[
              "Share PulsePlan in your school's private Snapchat story or other student networks",
              "Help us test features & give feedback",
              "Spread the word to friends and orgs"
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={slideInLeft}
                whileHover={hoverScale}
                style={{ willChange: 'transform' }}
                className="relative overflow-hidden"
              >
                <div className="flex items-center space-x-4 p-6 bg-gray-900/50 border border-gray-800/50 rounded-xl shadow-md relative backdrop-blur-sm">
                  {/* Enhanced border animations */}
                  <div className="absolute inset-0 pointer-events-none z-20">
                    <motion.div 
                      className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/80 to-transparent"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                    />
                  </div>
                  
                  <motion.div
                    className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 relative z-10"
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    transition={transitions.bouncy}
                  >
                    <CheckCircle className="w-5 h-5 text-white" />
                  </motion.div>
                  <p className="text-lg text-gray-200 relative z-10">{item}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced How It Works Section */}
      <section className="py-20 px-4">
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
            className="grid md:grid-cols-3 gap-8"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 mx-auto flex items-center justify-center bg-gray-900/80 border border-gray-700/60 rounded-full shadow-lg">
                    <step.icon className="w-10 h-10 text-blue-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced FAQs Section */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Frequently Asked Questions</h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-6"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={hoverScale}
                style={{ willChange: 'transform' }}
              >
                <Card className="border border-gray-800/50 bg-gray-900/50 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden backdrop-blur-sm">
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
                    <div className="flex items-start space-x-4">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        transition={transitions.fast}
                      >
                        <MessageCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-bold mb-3 text-white">{faq.question}</h3>
                        <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Call to Action Footer */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to join the team?</h2>
            <motion.div
              whileHover={hoverScale}
              whileTap={{ scale: 0.95 }}
              style={{ willChange: 'transform' }}
            >
              <Button
                asChild
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <a href="https://www.notion.so/connergroth/2036b20844a880f7a065cc060a0014e3?pvs=106" target="_blank" rel="noopener noreferrer">
                  Apply to be an Ambassador
                  <Users className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ambassador; 