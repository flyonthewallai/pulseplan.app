import React from 'react';
import { Users, Gift, Megaphone, Unlock, ArrowRight, Check } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { hoverScale, tapScale } from '@/lib/animation-configs';

const Ambassador = () => {
  const valueCards = [
    {
      icon: Gift,
      title: "Lifetime Premium Access",
      description: "No limits, ever."
    },
    {
      icon: Megaphone,
      title: "Shoutouts on our socials & site",
      description: "Get featured across our platforms."
    },
    {
      icon: Unlock,
      title: "Early access to new features",
      description: "Beta test features & give feedback."
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Apply using the Notion form",
      description: "Fill out our quick application form"
    },
    {
      number: "2",
      title: "Make a story post or campus share",
      description: "Share PulsePlan with your student networks"
    },
    {
      number: "3",
      title: "Get verified & unlock Premium for life",
      description: "Submit proof and enjoy lifetime access"
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
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <Section className="pt-24 pb-16">
        <Container>
          <div className="max-w-6xl mx-auto px-8 pt-16">
            {/* Top Section - Ambassador Banner */}
            <div className="text-center mb-12">
              <div className="glass-card p-8 rounded-2xl mb-8 inline-block relative overflow-hidden">
                {/* Blue accent line */}
                <div className="absolute top-0 left-0 w-full h-2 bg-rhythm-blue"></div>
                <p className="text-rhythm-blue text-sm font-semibold mb-4 uppercase tracking-wider">Ambassador Program</p>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Become a PulsePlan Ambassador</h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Share the tool you love, earn lifetime access, and help students take back their time.
                </p>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold mb-6">What You Get</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {valueCards.map((card, index) => (
                  <motion.div
                    key={index}
                    whileHover={hoverScale}
                    whileTap={tapScale}
                    className="will-change-transform"
                  >
                                         <div className="glass-card p-6 rounded-2xl text-center relative overflow-hidden">
                      <div className="w-12 h-12 mx-auto mb-4 bg-rhythm-blue rounded-xl flex items-center justify-center">
                        <card.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                      <p className="text-muted-foreground text-sm">{card.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <motion.div
                whileHover={hoverScale}
                whileTap={tapScale}
                className="will-change-transform"
              >
                                 <Button
                   asChild
                   className="bg-rhythm-blue text-white px-10 py-5 text-xl rounded-xl font-semibold hover:bg-rhythm-blue/90 transition-colors duration-200"
                 >
                  <a href="https://www.notion.so/connergroth/2036b20844a880f7a065cc060a0014e3?pvs=106" target="_blank" rel="noopener noreferrer">
                    Apply Now
                    <ArrowRight className="ml-2 w-6 h-6" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </Container>
      </Section>

      {/* What You'll Do Section */}
      <Section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">What You'll Do</h2>
            </div>

            <div className="space-y-3">
              {[
                "Share PulsePlan in your school's private Snapchat story or other student networks",
                "Help us test features & give feedback",
                "Spread the word to friends and orgs"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={hoverScale}
                  whileTap={tapScale}
                  className="will-change-transform"
                >
                  <div className="flex items-center gap-4 p-4 glass-card rounded-xl relative overflow-hidden">
                    <Check className="w-5 h-5 text-rhythm-blue flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* How It Works Section */}
      <Section className="py-16">
        <Container>
          <div className="max-w-6xl mx-auto px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  whileHover={hoverScale}
                  whileTap={tapScale}
                  className="will-change-transform text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 glass-card rounded-full flex items-center justify-center relative overflow-hidden">
                    <span className="text-2xl font-bold text-rhythm-blue">{step.number}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQs Section */}
      <Section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  whileHover={hoverScale}
                  whileTap={tapScale}
                  className="will-change-transform"
                >
                  <div className="glass-card p-6 rounded-2xl relative overflow-hidden">
                    <h3 className="text-lg font-semibold mb-3 text-rhythm-blue">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Final CTA Section */}
      <Section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to join the team?</h2>
            <motion.div
              whileHover={hoverScale}
              whileTap={tapScale}
              className="will-change-transform"
            >
              <Button
                asChild
                className="bg-rhythm-blue text-white px-8 py-4 text-lg rounded-xl font-semibold hover:bg-rhythm-blue/90 transition-colors duration-200"
              >
                <a href="https://www.notion.so/connergroth/2036b20844a880f7a065cc060a00144e3?pvs=106" target="_blank" rel="noopener noreferrer">
                  Apply to be an Ambassador
                  <Users className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </motion.div>
          </div>
        </Container>
      </Section>
      
      <Footer />
    </div>
  );
};

export default Ambassador; 