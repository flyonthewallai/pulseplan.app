import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp } from "@/lib/animation-configs";
import { Menu, X, User } from "lucide-react";
import { supabase } from "@/lib/supabase";
import pulseLogo from "/assets/pulselogo.png";

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

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  
  // Check authentication status
  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };

    getUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track viewport height for mobile keyboard detection
  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
  ];
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 pt-6">
      <nav
        className={`mx-auto max-w-6xl transition-all duration-300 rounded-2xl will-change-transform ${
          scrolled 
            ? 'bg-background/85 backdrop-blur-xl shadow-xl border border-white/20' 
            : 'bg-background/60 backdrop-blur-lg'
        }`}
      >
        <Container className="px-8">
          <div className="h-16 flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center space-x-2 group"
              onClick={() => window.scrollTo(0, 0)}
            >
              <img src={pulseLogo} alt="PulsePlan" className="w-8 h-8" />
              <span className="text-2xl font-bold transition-colors">
                PulsePlan
              </span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-2">
              <button 
                onClick={() => handleSectionNavigation('features')}
                className="px-5 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-white/8 rounded-lg transition-all duration-200"
              >
                Features
              </button>
              <button 
                onClick={() => handleSectionNavigation('pricing')}
                className="px-5 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-white/8 rounded-lg transition-all duration-200"
              >
                Pricing
              </button>
              <Link 
                to="/extension#" 
                className="px-5 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-white/8 rounded-lg transition-all duration-200"
                onClick={() => window.scrollTo(0, 0)}
              >
                Extension
              </Link>
              <Link 
                to="/ambassadors" 
                className="px-5 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-white/8 rounded-lg transition-all duration-200"
                onClick={() => window.scrollTo(0, 0)}
              >
                Ambassadors
              </Link>
            </nav>
            
            <div className="flex items-center gap-3">
              {/* Desktop buttons */}
              <div className="hidden md:flex items-center gap-3">
                {!loading && (
                  user ? (
                    <Button 
                      variant="outline" 
                      size="default" 
                      className="text-base font-medium hover:bg-white/8 border border-white/20 hover:border-white/40 px-5 transition-all duration-200"
                      onClick={handleSignOut}
                    >
                      <User className="w-4 h-4 mr-2" />
                      Account
                    </Button>
                  ) : (
                    <Button 
                      asChild
                      variant="outline" 
                      size="default" 
                      className="text-base font-medium hover:bg-white/8 border border-white/20 hover:border-white/40 px-5 transition-all duration-200"
                    >
                      <Link to="/auth">Log In</Link>
                    </Button>
                  )
                )}
                <Button 
                  size="default" 
                  className="bg-rhythm-blue hover:bg-rhythm-blue/90 text-white text-base font-medium shadow-lg hover:shadow-xl transition-all duration-200 px-6"
                >
                  <AppleLogo className="w-5 h-5" />
                  Get the App
                </Button>
              </div>
              
              {/* Optimized Mobile hamburger button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-foreground hover:bg-white/8 rounded-lg transition-colors duration-150 active:scale-95"
                aria-label="Toggle mobile menu"
                style={{ willChange: 'transform' }}
              >
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                >
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </motion.div>
              </button>
            </div>
          </div>
        </Container>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg md:hidden flex flex-col mobile-menu-height"
            style={{ height: `${viewportHeight}px` }}
          >
            <Container>
              <div className="flex items-center justify-between h-16 mt-6">
                <Link 
                  to="/" 
                  className="flex items-center space-x-2 group"
                  onClick={handleLinkClick}
                >
                  <img src={pulseLogo} alt="PulsePlan" className="w-8 h-8" />
                  <span className="text-2xl font-bold">
                    PulsePlan
                  </span>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-foreground rounded-lg"
                  aria-label="Close mobile menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </Container>

            <div className="flex-1 flex flex-col justify-between overflow-hidden pb-4">
              <Container>
                <nav className="mt-8 flex-shrink-0">
                  <ul className="space-y-3">
                    {navLinks.map((link) => (
                      <li key={link.label}>
                        {link.to ? (
                           <Link 
                            to={link.to} 
                            className="block text-3xl font-semibold text-foreground/80 hover:text-foreground transition-colors"
                            onClick={handleLinkClick}
                          >
                            {link.label}
                          </Link>
                        ) : (
                          <button 
                            onClick={() => link.action && link.action()}
                            className="block text-3xl font-semibold text-foreground/80 hover:text-foreground transition-colors"
                          >
                            {link.label}
                          </button>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </Container>

              <Container className="flex-shrink-0">
                <div className="space-y-3 pb-4">
                  {!loading && (
                    user ? (
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="w-full text-base font-medium hover:bg-white/8 border border-white/20 hover:border-white/40 py-3"
                        onClick={handleSignOut}
                      >
                        <User className="w-4 h-4 mr-2" />
                        Account
                      </Button>
                    ) : (
                      <Button 
                        asChild
                        variant="outline" 
                        size="lg" 
                        className="w-full text-base font-medium hover:bg-white/8 border border-white/20 hover:border-white/40 py-3"
                      >
                        <Link to="/auth">Log In</Link>
                      </Button>
                    )
                  )}
                  <Button 
                    size="lg" 
                    className="w-full bg-rhythm-blue hover:bg-rhythm-blue/90 text-white text-base font-medium shadow-lg py-3"
                  >
                    <AppleLogo className="w-5 h-5 mr-2" />
                    Get the App
                  </Button>
                </div>
              </Container>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar; 