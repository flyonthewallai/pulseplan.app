import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-lg shadow-md' : ''}`}>
      <Container>
        <div className="h-16 flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">PulsePlan</span>
          </Link>
          
          <nav className="hidden md:flex gap-8">
            <a href="#features" className="hover:text-rhythm-blue transition-colors">Features</a>
            <a href="#pricing" className="hover:text-rhythm-blue transition-colors">Pricing</a>
            <Link to="/ambassador" className="hover:text-rhythm-blue transition-colors">Ambassador</Link>
            <a href="#about" className="hover:text-rhythm-blue transition-colors">About</a>
          </nav>
          
          <div className="flex gap-2">
            <Button variant="ghost" size="sm">Upgrade</Button>
            <Button variant="default" size="sm" className="bg-rhythm-blue hover:bg-rhythm-blue/90">Get the App</Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar; 