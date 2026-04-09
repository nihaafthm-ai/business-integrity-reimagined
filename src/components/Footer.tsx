import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-bold text-primary-foreground">BIS</span>
            </div>
            <p className="text-sm leading-relaxed text-primary-foreground/65">
              Driving Operational Excellence in healthcare through expert revenue cycle management and patient-focused solutions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground text-sm uppercase tracking-wider">Solutions</h4>
            <ul className="space-y-2.5">
              {["Revenue Cycle Management", "Patient Scheduling", "Medical Coding", "Call Center", "Compliance"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm transition-colors hover:text-primary text-primary-foreground/65">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5">
              {["Who We Are", "Careers", "Case Studies", "Resources", "Contact Us"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm transition-colors hover:text-primary text-primary-foreground/65">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5 text-sm text-primary-foreground/65">
                <Phone className="w-4 h-4 text-primary" />
                +1 800-592-6079
              </li>
              <li className="flex items-center gap-2.5 text-sm text-primary-foreground/65">
                <Mail className="w-4 h-4 text-primary" />
                contactus@thebisteam.com
              </li>
              <li className="flex items-center gap-2.5 text-sm text-primary-foreground/65">
                <MapPin className="w-4 h-4 text-primary" />
                United States
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center border-t border-primary-foreground/10">
          <p className="text-sm text-primary-foreground/40">
            © {new Date().getFullYear()} Business Integrity Services. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="text-xs text-primary-foreground/40 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-primary-foreground/40 hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
