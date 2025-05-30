import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { TestimonialCard } from "@/components/ui/testimonial-card";

const testimonials = [
  {
    quote: "PulsePlan has transformed my coursework. The AI understands my patterns and actually helps me stick to a schedule.",
    author: "Ronan Healy",
    role: "Biology Student",
    university: "CU Boulder"
  },
  {
    quote: "Canvas integration saves me hours each week. It's like having a personal assistant for school.",
    author: "Tyler Riley",
    role: "Pre-Law Student",
    university: "LSU"
  },
  {
    quote: "The insights feature is incredible. I can see where my time goes, and my GPA has improved a lot.",
    author: "Walker Adams",
    role: "Finance Student",
    university: "CSU"
  },
  {
    quote: "PulsePlan's reminders and analytics keep me on track. Study sessions are now way more productive.",
    author: "Alex Collard",
    role: "Political Science Student",
    university: "Nebraska"
  }
];

const TestimonialsSection = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold">Loved by students everywhere</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            See real user stories.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group rounded-2xl transition-all duration-300"
            >
              <div className="relative z-10">
                <TestimonialCard
                  quote={testimonial.quote}
                  author={testimonial.author}
                  university={testimonial.university}
                  withAnimatedLines
                />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-rhythm-blue/10 rounded-full filter blur-3xl"></div>
      </div>
    </Section>
  );
};

export default TestimonialsSection;
