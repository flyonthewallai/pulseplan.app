import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ScrollytellingSection from "@/components/ScrollytellingSection";
import { CTASection } from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <div className="" style={{overflowX: 'hidden', overflowY: 'visible'}}>
        <Navbar />
        <HeroSection />
        <div id="how-it-works"><HowItWorksSection /></div>
        <IntegrationsSection />
      </div>
      <ScrollytellingSection />
      <div className="" style={{overflowX: 'hidden', overflowY: 'visible'}}>
        <div id="features"><FeaturesSection /></div>
        <TestimonialsSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
