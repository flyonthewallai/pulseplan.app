import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Brain, Shield, Calendar, Download, Lock, RefreshCw, HelpCircle, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const faqs = [
  {
    question: "How does the AI schedule my tasks?",
    answer: "PulsePlan's AI analyzes your assignment deadlines, class schedule, personal availability, and past productivity patterns to create an optimized daily plan. It learns from your feedback and completion rates to continuously improve your schedule.",
    icon: Brain
  },
  {
    question: "What data is used to train the model?",
    answer: "We use anonymized productivity patterns, task completion rates, and scheduling preferences. Your personal information and assignment content remain private and are never shared. The AI only learns from behavioral patterns to improve scheduling algorithms.",
    icon: Shield
  },
  {
    question: "Can I adjust the schedule manually?",
    answer: "Absolutely! You have full control over your schedule. You can drag and drop tasks, adjust time blocks, add breaks, or completely reschedule items. The AI learns from your manual adjustments to better understand your preferences.",
    icon: Calendar
  },
  {
    question: "How does Canvas integration work?",
    answer: "Our Chrome extension securely connects to your Canvas account and automatically imports your assignments, due dates, and course information. This data is then used by our AI to create realistic study schedules around your coursework.",
    icon: Download
  },
  {
    question: "Is my data secure and private?",
    answer: "Yes, we take privacy seriously. All data is encrypted in transit and at rest. We never sell your personal information, and you can delete your account and all associated data at any time. We're FERPA compliant for educational data.",
    icon: Lock
  },
  {
    question: "What happens if I miss a scheduled task?",
    answer: "No worries! PulsePlan automatically reschedules missed tasks and adjusts your upcoming schedule accordingly. The AI learns from these patterns to create more realistic schedules in the future.",
    icon: RefreshCw
  }
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.1 + i * 0.08, ease: "easeOut" }
  })
};

const FAQSection = () => {
  return (
    <Section className="relative">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Frequently Asked Questions</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about PulsePlan
          </p>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={itemVariants}
            >
              <AccordionItem
                value={`item-${index}`}
                className="glass-card rounded-xl px-6 hover:shadow-md transition-all duration-300 mb-4"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-rhythm-blue py-6 group">
                  <div className="flex items-center gap-3">
                    <faq.icon className="w-5 h-5 text-rhythm-blue group-hover:text-rhythm-blue/80 transition-colors" />
                    {faq.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pl-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </Container>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-rhythm-blue/10 rounded-full filter blur-3xl"></div>
      </div>
    </Section>
  );
};

export default FAQSection;
