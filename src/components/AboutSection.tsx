import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  ArrowRight,
  Mail
} from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-6"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 py-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 leading-tight tracking-tight"
          >
            Building the future of student tools
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Fly on the Wall is a student-founded development studio crafting AI-powered tools that make a real difference in students' lives.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto space-y-8 mb-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Our Mission
            </h3>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Born from the shared experiences of three roommates, Fly on the Wall combines technical expertise with a deep understanding of student needs. We're building tools that solve real problems—starting with PulsePlan, our AI-powered academic planning assistant.
              </p>
              <p>
                Our approach is simple: create intuitive, powerful tools that automate the mundane and amplify what matters. Every feature we build is crafted with care, tested by real students, and refined through continuous feedback.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 px-8 py-4 rounded-xl text-lg"
                onClick={() => window.open('https://flyonthewalldev.com', '_blank')}
              >
                <Sparkles className="w-5 h-5" />
                Visit our studio
                <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Join Our Journey
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            We're always looking for passionate students to collaborate with. Whether you're interested in development, design, or just want to share your ideas, we'd love to hear from you.
          </p>
          <Button 
            variant="outline"
            className="border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300 transition-colors"
            onClick={() => window.location.href = 'mailto:hello@flyonthewall.studio'}
          >
            <Mail className="w-4 h-4 mr-2" />
            Say hello
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection; 