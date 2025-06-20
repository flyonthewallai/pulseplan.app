import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import FeaturesSection from "@/components/FeaturesSection";
import ExtensionSection from "@/components/ExtensionSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="">
        <Navbar />
        <HeroSection />
        <div id="how-it-works"><HowItWorksSection /></div>
        <IntegrationsSection />
        <div id="features"><FeaturesSection /></div>
        <ExtensionSection />
        <TestimonialsSection />
        <div id="pricing"><PricingSection /></div>
        <FAQSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
