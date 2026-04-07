import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-professional.jpg";
import { useEffect, useState } from "react";

const badges = [
  { label: "HIPAA Compliant", color: "bg-destructive" },
  { label: "ISO 27001", color: "bg-destructive" },
  { label: "ISO 9001", color: "bg-destructive" },
];

const partnerNames = [
  "Becker's Hospital Review",
  "HIPAA Compliant",
  "ISO 27001 Certified",
  "ISO 9001 Certified",
  "Great Place to Work",
  "Healthcare Financial Mgmt",
];

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-hero overflow-hidden pt-28 lg:pt-32">
      {/* Dot pattern decoration */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] opacity-20 animate-dot-pattern">
        {Array.from({ length: 15 }).map((_, row) =>
          Array.from({ length: 15 }).map((_, col) => (
            <div
              key={`${row}-${col}`}
              className="absolute w-1.5 h-1.5 rounded-full"
              style={{
                top: `${row * 6.6}%`,
                left: `${col * 6.6}%`,
                backgroundColor: "hsl(0 0% 100% / 0.5)",
              }}
            />
          ))
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight" style={{ color: "white" }}>
              At Last.
              <br />
              A Solutions Partner That Prioritizes Your Business
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold" style={{ color: "hsl(0 0% 100% / 0.85)" }}>
                AND your Patients
              </span>
            </h1>

            <p className="text-lg max-w-lg" style={{ color: "hsl(0 0% 100% / 0.8)" }}>
              Business Integrity Services delivers expert healthcare solutions in revenue cycle management, medical coding, compliance, and patient scheduling.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="rounded-full px-8 py-6 text-base font-semibold group" style={{ backgroundColor: "white", color: "hsl(180 100% 27%)" }}>
                Free Denial Trend Analysis
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="rounded-full px-8 py-6 text-base font-semibold group" style={{ borderColor: "hsl(0 0% 100% / 0.4)", color: "white", backgroundColor: "transparent" }}>
                <Play className="w-4 h-4 mr-2" />
                Watch Video
              </Button>
            </div>

            {/* Red badges like AGS */}
            <div className="flex flex-wrap gap-3 pt-2">
              {badges.map((badge) => (
                <span
                  key={badge.label}
                  className={`${badge.color} text-xs font-bold px-4 py-2 rounded-md uppercase tracking-wider`}
                  style={{ color: "white" }}
                >
                  {badge.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative w-full max-w-[480px] mx-auto aspect-square">
              {/* Glow behind */}
              <div className="absolute -inset-6 rounded-full blur-3xl" style={{ backgroundColor: "hsl(180 100% 35% / 0.2)" }} />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4" style={{ borderColor: "hsl(0 0% 100% / 0.15)" }}>
                <img
                  src={heroImage}
                  alt="Healthcare professional"
                  className="w-full h-full object-cover"
                  width={960}
                  height={1080}
                />
              </div>
              {/* Dot overlay */}
              <div className="absolute -right-6 -bottom-6 w-40 h-40 opacity-40">
                {Array.from({ length: 8 }).map((_, row) =>
                  Array.from({ length: 8 }).map((_, col) => (
                    <div
                      key={`o-${row}-${col}`}
                      className="absolute w-2 h-2 rounded-full"
                      style={{ top: `${row * 12.5}%`, left: `${col * 12.5}%`, backgroundColor: "hsl(0 0% 100% / 0.5)" }}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partner logos bar — AGS style: white background strip */}
      <div className="mt-16 pb-0">
        <p className="text-center text-sm mb-6 uppercase tracking-widest font-medium" style={{ color: "hsl(0 0% 100% / 0.6)" }}>
          We work with premier organizations across the country
        </p>
        <div className="bg-background rounded-t-2xl mx-4 lg:mx-8 overflow-hidden">
          <div className="relative overflow-hidden py-6">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />
            <div className="flex animate-scroll-left">
              {[...partnerNames, ...partnerNames, ...partnerNames, ...partnerNames].map((name, i) => (
                <div key={i} className="flex-shrink-0 mx-10 flex items-center justify-center h-12">
                  <span className="text-muted-foreground font-semibold text-base whitespace-nowrap tracking-wide">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
