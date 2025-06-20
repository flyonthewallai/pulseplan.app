import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Check, Sparkles, Apple } from "lucide-react";
import { motion } from "framer-motion";

const PricingSection = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "",
      description: "Perfect for getting started",
      features: [
        "One free schedule/week",
        "Basic AI scheduling",
        "Canvas & calendar sync"
      ],
      cta: "Get the App",
      popular: false,
    },
    {
      name: "Premium",
      price: "$6.99",
      period: "/month",
      description: "For serious students",
      features: [
        "Full-month planning",
        "Recurring task automation",
        "Priority AI chat support"
      ],
      cta: "Upgrade to Premium",
      popular: true,
    },
    {
      name: "Lifetime",
      price: "$79.99",
      period: "",
      description: "One-time payment",
      features: [
        "All premium features",
        "Lifetime access",
        "Exclusive support"
      ],
      cta: "Get Lifetime Access",
      popular: false,
    }
  ];

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
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Simple pricing</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Start free and upgrade when you're ready for more powerful features.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={`glass-card rounded-2xl p-8 relative group border border-white/5 hover:border-blue-100 transition-all duration-300 ${
                plan.popular ? 'border-2 border-rhythm-blue/30' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                    <Badge className="bg-rhythm-blue text-white px-4 py-1 rounded-full flex items-center gap-1 shadow-lg">
                      <Sparkles className="w-3 h-3" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && (
                      <span className="text-muted-foreground ml-1">{plan.period}</span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-rhythm-blue/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-rhythm-blue" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.div
                  whileTap={{ scale: 0.99 }}
                  className="w-full"
                >
                  <Button
                    className={`w-full ${
                      plan.cta === 'Upgrade to Premium'
                        ? 'bg-black hover:bg-black/90 text-white border border-white/20 hover:border-white/60 transition-all duration-200'
                        : plan.popular
                        ? 'bg-rhythm-blue hover:bg-rhythm-blue/90 text-white'
                        : 'bg-secondary hover:bg-secondary/90 text-secondary-foreground'
                    }`}
                  >
                    {plan.cta === 'Get Started Free' ? (
                      <><Apple className="w-5 h-5 mr-2" />Download the App</>
                    ) : (
                      plan.cta
                    )}
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-rhythm-blue/10 rounded-full filter blur-3xl"></div>
      </div>
    </Section>
  );
};

export default PricingSection;
