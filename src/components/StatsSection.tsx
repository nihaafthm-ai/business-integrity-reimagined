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
    <section ref={ref} className="py-20 bg-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="uppercase tracking-widest text-sm font-semibold mb-4" style={{ color: "hsl(0 0% 100% / 0.8)" }}>Who We Are</p>
          <h2 className="text-3xl lg:text-4xl font-bold" style={{ color: "white" }}>
            Trusted by industry-leading healthcare organizations across the U.S.
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center p-8 rounded-2xl border transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ backgroundColor: "hsl(180 100% 22% / 0.5)", borderColor: "hsl(0 0% 100% / 0.15)", transitionDelay: `${i * 150}ms` }}
            >
              <div className="text-4xl lg:text-5xl font-bold mb-2" style={{ color: "white" }}>
                {stat.value}
              </div>
              <div className="text-sm" style={{ color: "hsl(0 0% 100% / 0.7)" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
