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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-hero backdrop-blur-sm border-b border-primary-foreground/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="hidden lg:flex items-center justify-end gap-6 py-2 text-xs text-primary-foreground/70 border-b border-primary-foreground/10">
          <a href="tel:+18005926079" className="flex items-center gap-1.5 hover:text-primary-foreground transition-colors">
            <Phone className="w-3 h-3" />
            +1 800-592-6079
          </a>
          <a href="mailto:contactus@thebisteam.com" className="flex items-center gap-1.5 hover:text-primary-foreground transition-colors">
            <Mail className="w-3 h-3" />
            contactus@thebisteam.com
          </a>
        </div>

        {/* Main nav */}
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2.5">
            <div className="bg-white/90 rounded-lg px-3 py-1.5 shadow-md">
              <img src="/bis-logo.png" alt="Business Integrity Services" className="h-auto w-20" />
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-primary-foreground/75 hover:text-primary-foreground transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full px-6 font-semibold shadow-sm">
              Contact Us
            </Button>
          </div>

          <button
            className="lg:hidden text-primary-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-hero border-t border-primary-foreground/10">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/5 transition-colors font-medium py-3 px-3 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3">
              <Button className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full font-semibold">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
