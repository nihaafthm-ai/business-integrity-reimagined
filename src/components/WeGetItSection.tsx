import { Clock, DollarSign, MessageSquareOff, ShieldOff, CheckCircle2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import BlobShapes from "@/components/BlobShapes";

const painPoints = [
  { icon: Clock, label: "Extended Delays" },
  { icon: MessageSquareOff, label: "Lack of Communication" },
  { icon: DollarSign, label: "Hidden Fees" },
  { icon: ShieldOff, label: "Loss of Control" },
];

const highlights = [
  "Created by providers for providers",
  "Cutting-edge technology to optimize operations",
  "Highest level of production and collaboration",
  "Emphasis on consistent improvement",
];

const WeGetItSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16 bg-background relative overflow-hidden">
      <BlobShapes variant="light" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xs">BIS</span>
              </div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
              We Get It.
            </h2>
            <p className="text-base text-muted-foreground mb-8 leading-relaxed">
              Promises of time and cost savings sound good at first, but extended delays, lack of communication, hidden fees, and loss of control create confusion in an ever-changing healthcare environment.
            </p>
            <p className="text-base text-muted-foreground mb-8 leading-relaxed">
              When these things happen, external service partners seem more <strong className="text-foreground font-semibold">problematic</strong> than <strong className="text-foreground font-semibold">productive</strong>.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {painPoints.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 p-4 rounded-xl bg-section-alt border border-border hover:border-primary/20 hover:premium-shadow transition-all group">
                  <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-section-alt rounded-3xl p-10 lg:p-12 border border-border premium-shadow relative overflow-hidden">
              {/* Decorative blob inside card */}
              <svg className="absolute -right-16 -bottom-16 w-48 h-48 opacity-[0.04]" viewBox="0 0 200 200" fill="none">
                <path d="M100 20C140 20 180 50 190 100C200 150 170 190 120 195C70 200 30 170 15 120C0 70 30 20 100 20Z" fill="hsl(174, 100%, 29%)" />
              </svg>
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-primary mb-4">Who We Are</p>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6 leading-tight">
                Business Integrity Services was created by{" "}
                <span className="text-primary">providers for providers.</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                At Business Integrity Services, we offer expert healthcare solutions in revenue cycle management, medical coding, compliance, and patient clinic and surgery center scheduling. Our seasoned team leverages cutting-edge technology to optimize operations, ensuring the highest level of production and collaboration.
              </p>
              <div className="space-y-3">
                {highlights.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeGetItSection;
