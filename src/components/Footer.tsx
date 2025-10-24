import { Link, useNavigate, useLocation } from "react-router-dom";
import { Container } from "@/components/ui/container";
import { Github, Linkedin } from "lucide-react";
import { useEffect } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

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
    const isHomePage = location.pathname === '/';
    
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

  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", sectionId: "features" },
        { name: "Pricing", href: "/pricing", isRouterLink: true, scrollToTop: true },
        { name: "Ambassadors", href: "/ambassadors", isRouterLink: true, scrollToTop: true },
      ]
    },
    {
        title: "Resources",
        links: [
          { name: "Docs", href: "#" },
          { name: "Blog", href: "#" },
          { name: "Changelog", href: "#" },
        ]
    },
    {
      title: "Company",
      links: [
        { name: "Fly on the Wall", href: "https://flyonthewalldev.com", isExternal: true },
        { name: "Contact", href: "https://flyonthewalldev.com/#contact", isExternal: true },

      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Terms", href: "/terms", isRouterLink: true, scrollToTop: true },
        { name: "Privacy", href: "#" },
        { name: "Security", href: "#" },
      ]
    }
  ];

  return (
    <footer className="py-16">
      <Container>
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12">
          {/* Left Section - Logo and Contact */}
          <div className="mb-8 lg:mb-0 lg:w-1/3">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                PulsePlan
              </h3>
            </Link>
            <a 
              href="mailto:hello@pulseplan.app" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              hello@pulseplan.app
            </a>
          </div>

          {/* Center-Right Section - Navigation Links */}
          <div className="grid grid-cols-4 gap-8 lg:gap-12 lg:w-2/3">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                  {group.title}
                </h4>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.name}>
                      {link.sectionId ? (
                        <button
                          onClick={() => handleSectionNavigation(link.sectionId)}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {link.name}
                        </button>
                      ) : link.isRouterLink ? (
                        <Link 
                          to={link.href || '#'} 
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                          onClick={link.scrollToTop ? () => window.scrollTo(0, 0) : undefined}
                        >
                          {link.name}
                        </Link>
                      ) : link.isExternal ? (
                        <a 
                          href={link.href} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <a 
                          href={link.href} 
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {link.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section - Social Icons and Copyright */}
        <div className="flex flex-col lg:flex-row justify-between items-center pt-8 border-t border-white/10">
          {/* Social Icons - Bottom Right */}
          <div className="flex gap-4 mb-4 lg:mb-0">
            <a href="https://github.com/flyonthewalldev" target="_blank" rel="noopener noreferrer" aria-label="PulsePlan GitHub">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
                <Github className="w-5 h-5 text-black" />
              </div>
            </a>
            <a href="https://linkedin.com/company/flyonthewalldev" target="_blank" rel="noopener noreferrer" aria-label="Fly on the Wall LinkedIn">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
                <Linkedin className="w-5 h-5 text-black" />
              </div>
            </a>
          </div>

          {/* Copyright - Bottom Center */}
          <div className="text-center text-sm text-muted-foreground">
            <p>© {currentYear} PulsePlan. Built by <a href="https://flyonthewalldev.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Fly on the Wall</a>.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
