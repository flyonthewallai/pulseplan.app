import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Brain,
  Download,
  Calendar,
  BarChart,
  Bell,
  MessageSquare
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Planning",
    description:
      "Our AI analyzes your schedule and creates the perfect study plan, adapting to your habits and preferences."
  },
  {
    icon: Download,
    title: "Canvas Integration",
    description:
      "Seamlessly sync with Canvas to import assignments, due dates, and course information automatically."
  },
  {
    icon: Calendar,
    title: "Smart Task Management",
    description:
      "Automatically organize assignments, track deadlines, and prioritize tasks based on importance and due dates."
  },
  {
    icon: BarChart,
    title: "Progress Tracking",
    description:
      "Monitor your academic progress with detailed analytics and insights to help you stay on track."
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description:
      "Receive personalized reminders and alerts that adapt to your study schedule and preferences."
  },
  {
    icon: MessageSquare,
    title: "Study Analytics",
    description:
      "Gain insights into your study habits and productivity patterns to optimize your learning."
  }
];

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

const FeaturesSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Features</h2>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          Powerful features designed specifically for students who want to maximize their productivity
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <Card
              className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-start text-left transition-all duration-300 border-0 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="mb-6 flex items-center justify-center w-12 h-12 rounded-full border border-blue-100 bg-blue-50">
                <feature.icon className="w-7 h-7 text-blue-500" strokeWidth={2.2} />
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </div>
              <div className="text-gray-500 leading-relaxed text-base">
                {feature.description}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
