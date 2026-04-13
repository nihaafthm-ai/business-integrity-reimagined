import { Globe, Users, TrendingDown, Shield, Award } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import BlobShapes from "@/components/BlobShapes";

const reasons = [
  {
    icon: Globe,
    title: "U.S. Based Leadership",
    description: "A US based team managing the oversight of all solutions optimizes operational efficiency.",
  },
  {
    icon: Shield,
    title: "Claims & Reimbursement",
    description: "End-to-end medical billing, insurance verification, and claims processing to maximize reimbursements and reduce denials.",
  },
  {
    icon: Users,
    title: "Bilingual & Educated Workforce",
    description: "Our bilingual team improves patient care across diverse communities, with 80% holding four-year college degrees ensuring top-tier expertise.",
  },
  {
    icon: TrendingDown,
    title: "Reduced Costs",
    description: "With a 50% reduction in overall costs, the BIS Patient Experience Team drives business growth.",
  },
  {
    icon: Award,
    title: "Superior Performance",
    description: "In every head-to-head trial, BIS has outperformed other RCM providers to improve KPIs.",
  },
];

const WhyPartnerSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16 bg-background relative overflow-hidden">
      <BlobShapes variant="wave-navy" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.2em] text-xs font-semibold mb-4">Why Partner With BIS</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            What Makes Us <span className="text-primary">Different</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className={`group p-8 rounded-2xl border border-border bg-card hover:border-primary/20 premium-shadow hover:premium-shadow-lg transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/8 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                <reason.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{reason.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPartnerSection;
