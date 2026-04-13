import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "1,000+", label: "Dedicated Team Members" },
  { value: "200+", label: "Clinics & Surgery Centers" },
  { value: "20+", label: "Specialties Served" },
  { value: "50%", label: "Cost Reduction" },
];

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 bg-hero relative overflow-hidden">
      {/* Blob decorations */}
      <svg className="absolute -left-24 top-0 w-[400px] h-[350px] opacity-10" viewBox="0 0 400 350" fill="none">
        <path d="M300 50C360 110 380 200 330 270C280 340 170 350 90 300C10 250 -10 150 40 80C90 10 200 -10 300 50Z" fill="hsl(174, 80%, 42%)" />
      </svg>
      <svg className="absolute -right-20 bottom-0 w-[300px] h-[300px] opacity-10" viewBox="0 0 300 300" fill="none">
        <path d="M200 30C260 70 290 150 250 220C210 290 120 310 60 260C0 210 -10 120 40 60C90 0 140 -10 200 30Z" fill="hsl(215, 60%, 18%)" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.2em] text-xs font-semibold mb-4 text-primary-foreground/60">Who We Are</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground">
            Trusted by industry-leading healthcare organizations across the U.S.
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center p-8 rounded-2xl glass-card transition-all duration-700 hover:bg-primary-foreground/10 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="text-4xl lg:text-5xl font-extrabold mb-2 text-primary-foreground">
                {stat.value}
              </div>
              <div className="text-sm text-primary-foreground/65 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
