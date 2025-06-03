import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleSectionNavigation = (sectionId: string) => {
    setIsMobileMenuOpen(false);
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

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const navLinks = [
    { label: "Features", action: () => handleSectionNavigation('features') },
    { label: "Pricing", action: () => handleSectionNavigation('pricing') },
    { label: "Extension", to: "/extension" },
    { label: "Ambassadors", to: "/ambassadors" },
    { label: "About", action: () => handleSectionNavigation('about') },
  ];
  
  return (
    <>
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
            
            {/* Desktop Navigation */}
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
                to="/extension" 
                className="hover:text-rhythm-blue transition-colors"
                onClick={() => window.scrollTo(0, 0)}
              >
                Extension
              </Link>
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
            
            <div className="flex items-center gap-2">
              {/* Desktop buttons */}
              <Button variant="ghost" size="sm" className="hidden md:inline-flex">Upgrade</Button>
              <Button variant="default" size="sm" className="bg-rhythm-blue hover:bg-rhythm-blue/90 hidden md:inline-flex">Get the App</Button>
              
              {/* Mobile Get App button */}
              <Button variant="default" size="sm" className="bg-rhythm-blue hover:bg-rhythm-blue/90 md:hidden text-xs px-3">Get App</Button>
              
              {/* Mobile hamburger menu */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile menu slide-down drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-16 left-0 right-0 z-40 bg-background border-b border-gray-200 dark:border-gray-800 shadow-lg md:hidden overflow-hidden"
          >
            <div className="max-h-[calc(100vh-4rem)] overflow-y-auto">
              {/* Navigation links */}
              <motion.nav 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                className="px-6 py-6"
              >
                <div className="space-y-4">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                    >
                      {link.to ? (
                        <Link
                          to={link.to}
                          onClick={handleLinkClick}
                          className="block text-lg font-medium py-3 px-4 hover:text-rhythm-blue hover:bg-gray-800 rounded-lg transition-colors"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <button
                          onClick={link.action}
                          className="block text-lg font-medium py-3 px-4 hover:text-rhythm-blue hover:bg-gray-800 rounded-lg transition-colors w-full text-left"
                        >
                          {link.label}
                        </button>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.nav>

              {/* Bottom buttons */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.2 }}
                className="px-6 pb-6 space-y-3 border-t border-gray-200 dark:border-gray-800 pt-4"
              >
                <Button 
                  variant="ghost" 
                  size="default" 
                  className="w-full justify-start text-left"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Upgrade
                </Button>
                <Button 
                  variant="default" 
                  size="default" 
                  className="w-full bg-rhythm-blue hover:bg-rhythm-blue/90 justify-start"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get the App
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar; 