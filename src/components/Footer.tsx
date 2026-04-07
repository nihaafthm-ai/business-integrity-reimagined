import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-bold text-hero">BIS</span>
            </div>
            <p className="text-hero/50 text-sm leading-relaxed">
              Business Integrity Services — Driving Operational Excellence in Healthcare.
            </p>
          </div>

          <div>
            <h4 className="text-hero font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              {["Revenue Cycle Management", "Patient Scheduling", "Medical Coding", "Compliance", "Call Center"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-hero/50 hover:text-primary text-sm transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-hero font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {["Who We Are", "Careers", "Case Studies", "Resources", "Contact Us"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-hero/50 hover:text-primary text-sm transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-hero font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-hero/50 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                +1 800-592-6079
              </li>
              <li className="flex items-center gap-2 text-hero/50 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                contactus@thebisteam.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-hero/10 mt-12 pt-8 text-center">
          <p className="text-hero/40 text-sm">
            © {new Date().getFullYear()} Business Integrity Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
