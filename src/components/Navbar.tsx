import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle scrolling to hash on route change
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const handleSectionNavigation = (sectionId: string) => {
    if (isHomePage) {
      // If on home page, scroll directly to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on different page, navigate to home with hash
      navigate(`/#${sectionId}`);
    }
  };
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-lg shadow-md' : ''}`}>
      <Container>
        <div className="h-16 flex items-center justify-between py-4">
          <Link 
            to="/" 
            className="flex items-center space-x-2"
            onClick={() => window.scrollTo(0, 0)}
          >
            <span className="text-2xl font-bold">PulsePlan</span>
          </Link>
          
          <nav className="hidden md:flex gap-8">
            <button 
              onClick={() => handleSectionNavigation('features')}
              className="hover:text-rhythm-blue transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => handleSectionNavigation('pricing')}
              className="hover:text-rhythm-blue transition-colors"
            >
              Pricing
            </button>
            <Link 
              to="/ambassadors" 
              className="hover:text-rhythm-blue transition-colors"
              onClick={() => window.scrollTo(0, 0)}
            >
              Ambassadors
            </Link>
            <button 
              onClick={() => handleSectionNavigation('about')}
              className="hover:text-rhythm-blue transition-colors"
            >
              About
            </button>
          </nav>
          
          <div className="flex gap-2">
            {/* Mobile Ambassadors link */}
            <Link 
              to="/ambassadors" 
              className="md:hidden hover:text-rhythm-blue transition-colors px-3 py-2 text-sm font-medium"
              onClick={() => window.scrollTo(0, 0)}
            >
              Ambassadors
            </Link>
            {/* Desktop Upgrade button */}
            <Button variant="ghost" size="sm" className="hidden md:inline-flex">Upgrade</Button>
            <Button variant="default" size="sm" className="bg-rhythm-blue hover:bg-rhythm-blue/90">Get the App</Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar; 