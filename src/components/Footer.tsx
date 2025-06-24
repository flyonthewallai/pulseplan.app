import { Link, useNavigate, useLocation } from "react-router-dom";
import { Container } from "@/components/ui/container";
import { Github, Globe, Linkedin } from "lucide-react";
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
    <footer className="py-12 border-t border-white/10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  PulsePlan
                </h3>
              </Link>
              <a 
                href="mailto:hello@pulseplan.app" 
                className="relative inline-block text-lg text-muted-foreground after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-px after:bg-muted-foreground after:w-0 after:transition-[width] after:duration-300 after:ease-in-out hover:after:w-full"
              >
                hello@pulseplan.app
              </a>
              <div className="flex gap-4 mt-4">
                <a href="https://github.com/flyonthewalldev" target="_blank" rel="noopener noreferrer" aria-label="PulsePlan GitHub">
                  <Github className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                </a>
                <a href="https://linkedin.com/company/flyonthewalldev" target="_blank" rel="noopener noreferrer" aria-label="Fly on the Wall LinkedIn">
                  <Linkedin className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                </a>
                <a href="https://flyonthewalldev.com" target="_blank" rel="noopener noreferrer" aria-label="Fly on the Wall Website">
                  <Globe className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                </a>
              </div>
          </div>

          <div className="md:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h4 className="font-semibold mb-4 text-foreground">{group.title}</h4>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.name}>
                      {link.sectionId ? (
                        <button
                          onClick={() => handleSectionNavigation(link.sectionId)}
                          className="text-muted-foreground hover:text-foreground transition-colors text-sm text-left"
                        >
                          {link.name}
                        </button>
                      ) : link.isRouterLink ? (
                        <Link 
                          to={link.href || '#'} 
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
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-muted-foreground">
          <p>© {currentYear} PulsePlan. Built by <a href="https://flyonthewalldev.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Fly on the Wall</a>.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
