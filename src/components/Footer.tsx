import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16" style={{ backgroundColor: "hsl(180 100% 20%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span style={{ color: "white" }} className="font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-bold" style={{ color: "white" }}>BIS</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "hsl(0 0% 100% / 0.75)" }}>
              Business Integrity Services — Driving Operational Excellence in Healthcare.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4" style={{ color: "white" }}>Solutions</h4>
            <ul className="space-y-2">
              {["Revenue Cycle Management", "Patient Scheduling", "Medical Coding", "Compliance", "Call Center"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm transition-colors hover:underline" style={{ color: "hsl(0 0% 100% / 0.75)" }}>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4" style={{ color: "white" }}>Company</h4>
            <ul className="space-y-2">
              {["Who We Are", "Careers", "Case Studies", "Resources", "Contact Us"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm transition-colors hover:underline" style={{ color: "hsl(0 0% 100% / 0.75)" }}>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4" style={{ color: "white" }}>Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm" style={{ color: "hsl(0 0% 100% / 0.75)" }}>
                <Phone className="w-4 h-4" style={{ color: "white" }} />
                +1 800-592-6079
              </li>
              <li className="flex items-center gap-2 text-sm" style={{ color: "hsl(0 0% 100% / 0.75)" }}>
                <Mail className="w-4 h-4" style={{ color: "white" }} />
                contactus@thebisteam.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 text-center" style={{ borderTop: "1px solid hsl(0 0% 100% / 0.15)" }}>
          <p className="text-sm" style={{ color: "hsl(0 0% 100% / 0.6)" }}>
            © {new Date().getFullYear()} Business Integrity Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
