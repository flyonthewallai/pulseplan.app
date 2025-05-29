
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

export const Navbar = () => {
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
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold">Rhythm</span>
          </a>
          
          <nav className="hidden md:flex gap-8">
            <a href="#features" className="hover:text-rhythm-lavender transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-rhythm-lavender transition-colors">How It Works</a>
            <a href="#pricing" className="hover:text-rhythm-lavender transition-colors">Pricing</a>
          </nav>
          
          <div className="flex gap-2">
            <Button variant="ghost" size="sm">Log In</Button>
            <Button variant="default" size="sm" className="bg-rhythm-lavender hover:bg-rhythm-lavender/90">Try Free</Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
