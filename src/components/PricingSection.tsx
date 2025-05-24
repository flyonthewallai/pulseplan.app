import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { 
  Check, 
  Sparkles, 
  Calendar, 
  Zap, 
  Crown,
  Clock,
  Brain,
  Settings,
  BarChart,
  MessageSquare,
  Download,
  Star,
  Gift,
  Shield,
  Bell
} from "lucide-react";
import { motion } from "framer-motion";

const AppleLogo = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.41-1.09-.47-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.41C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.19 2.31-.89 3.51-.84 1.54.07 2.7.61 3.44 1.57-3.14 1.88-2.29 5.13.22 6.41-.65 1.29-1.52 2.58-2.25 4.03zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
  </svg>
);

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for trying out PulsePlan",
      features: [
        { text: "Make one free schedule per week", icon: Calendar },
        { text: "Basic AI scheduling", icon: Brain },
        { text: "Canvas sync", icon: Download },
        { text: "Calendar integration", icon: Clock },
        { text: "Basic progress tracking", icon: BarChart }
      ],
      cta: "Get the App",
      popular: false,
      bgColor: "bg-blue-500",
      icon: Calendar
    },
    {
      name: "Premium",
      price: isYearly ? "$30" : "$3",
      period: isYearly ? "year" : "month",
      description: "Unlock the full power of AI planning",
      features: [
        { text: "Full-month planning", icon: Calendar },
        { text: "Recurring task automation", icon: Zap },
        { text: "Advanced insights & analytics", icon: BarChart },
        { text: "Priority AI chat support", icon: MessageSquare },
        { text: "Custom scheduling preferences", icon: Settings },
        { text: "Export & backup features", icon: Download }
      ],
      cta: "Upgrade to Premium",
      popular: true,
      bgColor: "bg-blue-600",
      icon: Crown
    },
    {
      name: "Lifetime",
      price: "$75",
      period: "one-time",
      description: "Early adopter special pricing",
      features: [
        { text: "Everything in Premium", icon: Crown },
        { text: "Lifetime access", icon: Shield },
        { text: "Priority feature requests", icon: Star },
        { text: "Early access to new features", icon: Gift },
        { text: "Premium support", icon: Bell },
        { text: "No recurring payments", icon: Zap }
      ],
      cta: "Get Lifetime Access",
      popular: false,
      bgColor: "bg-purple-500",
      icon: Star
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Simple, transparent pricing
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Start free and upgrade when you're ready for more powerful features
        </p>
        
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm transition-colors duration-200 ${!isYearly ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
              Monthly
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-blue-600"
            />
            <span className={`text-sm transition-colors duration-200 ${isYearly ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
              Yearly
            </span>
          </div>
          {isYearly && (
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
              Save 17%
            </Badge>
          )}
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, delay: index * 0.25, ease: "easeOut" }}
          >
            <Card 
              className={`relative border-0 transition-shadow duration-300 hover:shadow-xl flex flex-col ${
                plan.popular 
                  ? 'shadow-xl' 
                  : 'shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-blue-600 text-white px-4 py-1 rounded-full flex items-center gap-1 shadow-lg">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4 relative">
                <div className={`w-20 h-20 mx-auto mb-4 ${plan.bgColor} rounded-2xl shadow-lg flex items-center justify-center`}>
                  <plan.icon className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {plan.name}
                </CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500 ml-1">/{plan.period}</span>
                </div>
                <CardDescription className="text-gray-600 mt-2">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex flex-col flex-grow">
                <ul className="space-y-4 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <feature.icon className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm leading-relaxed">{feature.text}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8">
                  <Button 
                    className={`w-full py-3 rounded-xl transition-all duration-300 transform flex items-center justify-center gap-2 ${
                      plan.name === "Free"
                        ? 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl hover:scale-[1.02] hover:brightness-105 active:scale-[0.98]'
                        : plan.name === "Premium"
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl hover:scale-[1.02] hover:brightness-105 active:scale-[0.98]'
                        : 'bg-purple-500 hover:bg-purple-600 text-white shadow-lg hover:shadow-xl hover:scale-[1.02] hover:brightness-105 active:scale-[0.98]'
                    }`}
                  >
                    {plan.name === "Free" && <AppleLogo className="w-5 h-5" />}
                    {plan.cta}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
