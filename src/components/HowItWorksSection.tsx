import { motion } from "framer-motion";
import { Calendar, ArrowUpCircle, Clock, Check } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    title: "Sync your accounts",
    description: "Connect Canvas, Google Calendar, or Outlook to import all your classes and deadlines."
  },
  {
    icon: ArrowUpCircle,
    title: "Auto-generate your schedule",
    description: "PulsePlan's AI creates a personalized time-blocking schedule optimized for your productivity."
  },
  {
    icon: Clock,
    title: "Adjust with AI",
    description: "Fine-tune your schedule with AI suggestions based on your study habits and preferences."
  },
  {
    icon: Check,
    title: "Get reminders + check-ins",
    description: "Stay on track with smart notifications and productivity insights."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.1 + i * 0.1,
      ease: "easeOut"
    }
  })
};

const HowItWorksSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">How It Works</h2>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          PulsePlan makes academic planning effortless with smart AI technology
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            whileHover={{ boxShadow: "0 8px 32px 0 rgba(0, 32, 128, 0.10)", y: -4 }}
            className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-start text-left transition-all duration-300 border-0 cursor-pointer min-h-[300px]"
          >
            <div className="mb-6 flex items-center justify-center w-12 h-12 rounded-full border border-blue-100 bg-blue-50">
              <step.icon className="w-7 h-7 text-blue-500" strokeWidth={2.2} />
            </div>
            <div className="text-lg font-semibold text-gray-900 mb-2">
              {step.title}
            </div>
            <div className="text-gray-500 leading-relaxed text-base">
              {step.description}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection; 