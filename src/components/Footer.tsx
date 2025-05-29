import { motion } from "framer-motion";
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
    <footer className="py-16 border-t border-border">
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

          {footerLinks.map((section, index) => (
            <div key={section.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-border text-center"
        >
          <p className="text-muted-foreground text-sm">
            © {currentYear} PulsePlan. Built with ❤️ by Fly on the Wall.
          </p>
        </motion.div>
      </Container>
    </footer>
  );
};

export default Footer;
