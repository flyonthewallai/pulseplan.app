import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="bg-grid noise">
        <Navbar />
        <HeroSection />
        <div id="how-it-works"><HowItWorksSection /></div>
        <div id="features"><FeaturesSection /></div>
        <TestimonialsSection />
        <div id="pricing"><PricingSection /></div>
        <CTASection />
        <FAQSection />
        <div id="about"><AboutSection /></div>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
