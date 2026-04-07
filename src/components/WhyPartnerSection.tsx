import { Globe, Users, GraduationCap, TrendingDown, Shield, Award } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const reasons = [
  {
    icon: Globe,
    title: "U.S. Based Leadership",
    description: "A US based team managing the oversight of all solutions optimizes operational efficiency.",
  },
  {
    icon: Users,
    title: "Bilingual Workforce",
    description: "Our bilingual team members help improve patient care in the growing Latino communities.",
  },
  {
    icon: GraduationCap,
    title: "Advanced Education",
    description: "80% of the BIS workforce holds four-year college degrees, enhancing performance.",
  },
  {
    icon: TrendingDown,
    title: "Reduced Costs",
    description: "50% reduction in overall costs while meeting metrics that promote business growth.",
  },
  {
    icon: Shield,
    title: "Denial Management",
    description: "Unparalleled root cause analysis to minimize denial rates and streamline automations.",
  },
  {
    icon: Award,
    title: "Superior Performance",
    description: "In every head-to-head trial, the BIS team has out-performed other RCM providers.",
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
    <section ref={ref} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-widest text-sm font-semibold mb-4">Why BIS</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Why Partner With BIS
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className={`group p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg bg-card transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <reason.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{reason.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPartnerSection;
