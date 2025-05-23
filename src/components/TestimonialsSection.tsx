import { Card, CardContent } from "@/components/ui/card";
import { 
  Star, 
  Quote, 
  GraduationCap, 
  School, 
  Sparkles,
  MessageSquare
} from "lucide-react";

const testimonials = [
  {
    name: "Ronan Healy",
    role: "Biology Student",
    university: "University of Colorado Boulder",
    content: "PulsePlan has completely transformed how I manage my coursework. The AI actually understands my study patterns and creates realistic schedules that I can stick to.",
    rating: 5,
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    name: "Taylor Karst",
    role: "Nursing Student",
    university: "Grand Canyon University",
    content: "As a nursing student with a packed schedule, PulsePlan's Canvas integration saves me hours every week. It's like having a personal assistant for my academic life.",
    rating: 5,
    gradient: "from-blue-600 to-indigo-700"
  },
  {
    name: "Walker Adams",
    role: "Finance Student",
    university: "Colorado State University",
    content: "The progress insights feature is incredible. I can see exactly where my time goes and how to optimize my study sessions. My GPA has improved significantly since I started using PulsePlan.",
    rating: 5,
    gradient: "from-indigo-500 to-blue-600"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
          Loved by students everywhere
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          See what students are saying about their experience with PulsePlan
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card 
            key={index}
            className="relative border-0 shadow-lg bg-white/80 backdrop-blur-sm animate-fade-in overflow-hidden group hover:shadow-xl transition-all duration-300"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <CardContent className="p-6 relative">
              {/* Quote icon */}
              <div className={`absolute top-6 right-6 w-8 h-8 bg-gradient-to-br ${testimonial.gradient} rounded-lg opacity-10 group-hover:opacity-20 transition-opacity flex items-center justify-center`}>
                <Quote className="w-4 h-4 text-white" />
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 text-blue-400 fill-current" 
                  />
                ))}
              </div>
              
              <blockquote className="text-gray-700 mb-6 leading-relaxed relative">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex items-center gap-3">
                <div>
                  <div className="font-semibold text-gray-900 flex items-center gap-2">
                    {testimonial.name}
                    <GraduationCap className="w-4 h-4 text-blue-500" />
                  </div>
                  <div className="text-sm text-blue-600 flex items-center gap-2">
                    {testimonial.role}
                    <School className="w-3 h-3 text-blue-300" />
                  </div>
                  <div className="text-sm text-blue-600 font-medium">
                    {testimonial.university}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
