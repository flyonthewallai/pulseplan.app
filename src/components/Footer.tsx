import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Container } from "@/components/ui/container";
import { Github, Globe } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "Ambassador", href: "/ambassador", isRouterLink: true },
        { name: "About", href: "#about" },
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
        { name: "About Us", href: "#about" },
        { name: "Contact", href: "https://flyonthewalldev.com/#contact" },
        { name: "Terms", href: "#" },
      ]
    }
  ];

  return (
    <footer className="py-12 border-t border-border">
      <Container>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gradient-lavender mb-4">
                PulsePlan
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                AI-powered academic planning that adapts to your rhythm.
              </p>
              <div className="flex gap-4 mt-4">
                <a href="https://github.com/flyonthewalldev" target="_blank" rel="noopener noreferrer" aria-label="Fly on the Wall GitHub">
                  <Github className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                </a>
                <a href="https://flyonthewalldev.com" target="_blank" rel="noopener noreferrer" aria-label="Fly on the Wall Website">
                  <Globe className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                </a>
              </div>
            </motion.div>
          </div>

          {footerLinks.map((group, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{group.title}</h4>
              <ul className="space-y-2">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.isRouterLink ? (
                      <Link 
                        to={link.href} 
                        className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
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

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {currentYear} PulsePlan. Built with ❤️ by Fly on the Wall.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
