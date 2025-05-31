import { Link, useNavigate, useLocation } from "react-router-dom";
import { Container } from "@/components/ui/container";
import { Github, Globe } from "lucide-react";
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
        { name: "Pricing", sectionId: "pricing" },
        { name: "Ambassadors", href: "/ambassadors", isRouterLink: true, scrollToTop: true },
        { name: "About", sectionId: "about" },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#" },
        { name: "Help Center", href: "#" },
        { name: "Privacy", href: "#" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", sectionId: "about" },
        { name: "Contact", href: "https://flyonthewalldev.com/#contact", isExternal: true },
        { name: "Terms", href: "/terms", isRouterLink: true, scrollToTop: true },
      ]
    }
  ];

  return (
    <footer className="py-8 border-t border-border">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <div className="col-span-2 md:col-span-1">
            <div>
              <Link 
                to="/" 
                className="inline-block"
                onClick={() => window.scrollTo(0, 0)}
              >
                <h3 className="text-2xl font-bold text-gradient-lavender mb-4">
                  PulsePlan
                </h3>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed">
                AI-powered academic planning that adapts to your rhythm.
              </p>
              <div className="flex gap-2 mt-4">
                <a href="https://github.com/flyonthewalldev" target="_blank" rel="noopener noreferrer" aria-label="Fly on the Wall GitHub">
                  <Github className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                </a>
                <a href="https://flyonthewalldev.com" target="_blank" rel="noopener noreferrer" aria-label="Fly on the Wall Website">
                  <Globe className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {footerLinks.map((group, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{group.title}</h4>
              <ul className="space-y-2">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.sectionId ? (
                      <button
                        onClick={() => handleSectionNavigation(link.sectionId)}
                        className="text-muted-foreground hover:text-foreground transition-colors text-sm text-left"
                      >
                        {link.name}
                      </button>
                    ) : link.isRouterLink ? (
                      <Link 
                        to={link.href} 
                        className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                        onClick={link.scrollToTop ? () => window.scrollTo(0, 0) : undefined}
                      >
                        {link.name}
                      </Link>
                    ) : link.isExternal ? (
                      <a 
                        href={link.href} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <a 
                        href={link.href} 
                        className="text-muted-foreground hover:text-foreground transition-colors text-sm"
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

        <div className="mt-8 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {currentYear} PulsePlan. Built with ❤️ by Fly on the Wall.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
