import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Who We Are", href: "#about" },
  { label: "Our Solutions", href: "#solutions" },
  { label: "Resources", href: "#resources" },
  { label: "Careers", href: "#careers" },
  { label: "Contact Us", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-hero/95 backdrop-blur-sm border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="hidden lg:flex items-center justify-end gap-6 py-2 text-sm text-hero border-b border-primary/10">
          <a href="tel:+18005926079" className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <Phone className="w-3.5 h-3.5" />
            +1 800-592-6079
          </a>
          <a href="mailto:contactus@thebisteam.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <Mail className="w-3.5 h-3.5" />
            contactus@thebisteam.com
          </a>
        </div>

        {/* Main nav */}
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-bold text-hero">
                BIS
              </span>
            </div>
            <span className="hidden sm:block text-xs text-muted-foreground leading-tight max-w-[160px]">
              Business Integrity Services
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-hero/80 hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button className="bg-primary text-primary-foreground hover:bg-accent rounded-full px-6">
              Contact Us
            </Button>
          </div>

          <button
            className="lg:hidden text-hero"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-hero border-t border-primary/10">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-hero/80 hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button className="w-full bg-primary text-primary-foreground hover:bg-accent rounded-full mt-4">
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
