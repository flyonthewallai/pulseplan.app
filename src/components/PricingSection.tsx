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

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for trying out PulsePlan",
      features: [
        { text: "Plan up to 7 days in advance", icon: Calendar },
        { text: "Basic AI scheduling", icon: Brain },
        { text: "Canvas sync", icon: Download },
        { text: "Calendar integration", icon: Clock },
        { text: "Basic progress tracking", icon: BarChart }
      ],
      cta: "Get the App",
      popular: false,
      gradient: "from-blue-400 to-indigo-500",
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
      gradient: "from-blue-500 to-indigo-600",
      icon: Crown
    },
    {
      name: "Lifetime",
      price: "$99",
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
      gradient: "from-purple-400 to-pink-500",
      icon: Star
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-b from-gray-50 to-white rounded-3xl my-20">
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
          <Card 
            key={plan.name}
            className={`relative border-0 transition-shadow duration-300 hover:shadow-xl ${
              plan.popular 
                ? 'shadow-xl' 
                : 'shadow-lg'
            }`}
          >
            {/* Decorative gradient elements */}
            <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${plan.gradient} rounded-2xl opacity-10 shadow-lg transform rotate-12`}></div>
            <div className={`absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br ${plan.gradient} rounded-xl opacity-10 shadow-lg transform -rotate-12`}></div>
            
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <Badge className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-1 rounded-full flex items-center gap-1 shadow-lg">
                  <Sparkles className="w-3 h-3" />
                  Most Popular
                </Badge>
              </div>
            )}
            
            <CardHeader className="text-center pb-4 relative">
              <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${plan.gradient} rounded-2xl shadow-lg flex items-center justify-center`}>
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
            
            <CardContent className="space-y-6 relative">
              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <feature.icon className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm leading-relaxed">{feature.text}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full py-3 rounded-xl transition-colors duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
              >
                {plan.cta}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
