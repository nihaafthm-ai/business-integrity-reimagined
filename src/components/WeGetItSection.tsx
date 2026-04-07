import { AlertTriangle, Clock, DollarSign, MessageSquareOff, ShieldOff } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const painPoints = [
  { icon: Clock, label: "Extended Delays" },
  { icon: MessageSquareOff, label: "Lack of Communication" },
  { icon: DollarSign, label: "Hidden Fees" },
  { icon: ShieldOff, label: "Loss of Control" },
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
    <section ref={ref} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              We Get It.
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full mb-8" />
            <p className="text-lg text-muted-foreground mb-8">
              Promises of time and cost savings sound good at first, but when these things happen, external service partners seem more <strong className="text-foreground">problematic</strong> than <strong className="text-foreground">productive</strong>.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {painPoints.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 p-4 rounded-xl bg-secondary border border-border hover:border-primary/30 transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{label}</span>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground italic">
              Discover how we overcome loss of control, hidden fees, communication gaps, and delays to drive efficiency in healthcare.
            </p>
          </div>

          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-12 border border-primary/10">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Business Integrity Services was created by providers for providers.
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At Business Integrity Services, we offer expert healthcare solutions in revenue cycle management, medical coding, compliance, and patient clinic and surgery center scheduling. Our seasoned team leverages cutting edge technology to optimize operations, ensuring the highest level of production and collaboration with an emphasis on consistent improvement.
              </p>
              <p className="text-primary font-semibold text-lg">
                Because we've been there… and we know what drives a successful partnership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeGetItSection;
