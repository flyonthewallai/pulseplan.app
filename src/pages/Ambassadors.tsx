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
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <Calendar className="w-16 h-16 text-blue-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Become a PulsePlan Ambassador
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Share the tool you love, earn lifetime access, and help students take back their time.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button
                asChild
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <a href="https://www.notion.so/connergroth/2036b20844a880f7a065cc060a0014e3?pvs=106" target="_blank" rel="noopener noreferrer">
                  Apply Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Why Join?</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We're building smarter student tools—and we want you to be part of it. As an ambassador, 
              you'll help us grow by sharing PulsePlan with your campus.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {valueCards.map((card, index) => (
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
                  <CardContent className="p-8 text-center relative z-10">
                    <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${card.gradient} rounded-xl flex items-center justify-center`}>
                      <card.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{card.title}</h3>
                    <p className="text-gray-300">{card.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Do Section */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">What You'll Do</h2>
          </motion.div>

          <div className="space-y-6">
            {[
              "Share PulsePlan in your school's private Snapchat story or other student networks",
              "Help us test features & give feedback",
              "Spread the word to friends and orgs"
            ].map((item, index) => (
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
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-lg text-gray-200 relative z-10">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
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

          <div className="grid md:grid-cols-3 gap-8">
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
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="border border-gray-800 bg-gray-900/50 shadow-md hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
                  {/* Animated lines */}
                  <div className="absolute inset-0 pointer-events-none z-20">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rhythm-blue/30 to-transparent animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rhythm-coral/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-rhythm-blue/30 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-rhythm-blue/30 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                  </div>
                  <CardContent className="p-8 relative z-10">
                    <div className="flex items-start space-x-4">
                      <MessageCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-bold mb-3 text-white">{faq.question}</h3>
                        <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Footer */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to join the team?</h2>
            <Button
              asChild
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <a href="https://www.notion.so/connergroth/2036b20844a880f7a065cc060a0014e3?pvs=106" target="_blank" rel="noopener noreferrer">
                Apply to be an Ambassador
                <Users className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ambassador; 