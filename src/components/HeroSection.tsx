import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-professional.jpg";
import { useEffect, useRef, useState } from "react";

const badges = [
  { label: "HIPAA Compliant", color: "bg-primary" },
  { label: "ISO 27001", color: "bg-accent" },
  { label: "ISO 9001", color: "bg-teal-dark" },
];

const partnerLogos = [
  "Becker's Hospital Review",
  "HIPAA Compliant",
  "ISO 27001 Certified",
  "ISO 9001 Certified",
  "Great Place to Work",
  "Becker's Hospital Review",
  "HIPAA Compliant",
  "ISO 27001 Certified",
  "ISO 9001 Certified",
  "Great Place to Work",
];

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-hero overflow-hidden pt-28 lg:pt-32">
      {/* Animated dot pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] animate-dot-pattern">
          {Array.from({ length: 20 }).map((_, row) =>
            Array.from({ length: 20 }).map((_, col) => (
              <div
                key={`${row}-${col}`}
                className="absolute w-1.5 h-1.5 rounded-full bg-primary"
                style={{
                  top: `${row * 5}%`,
                  left: `${col * 5}%`,
                  opacity: Math.random() * 0.5 + 0.2,
                }}
              />
            ))
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-hero leading-tight">
              At Last.
              <br />
              <span className="text-primary">A Solutions Partner</span>
              <br />
              That Prioritizes Your Business
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-hero/80">
                AND your Patients
              </span>
            </h1>

            <p className="text-lg text-hero/70 max-w-lg">
              Business Integrity Services delivers expert healthcare solutions in revenue cycle management, medical coding, compliance, and patient scheduling.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-primary text-primary-foreground hover:bg-accent rounded-full px-8 py-6 text-base font-semibold group">
                Free Denial Trend Analysis
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="rounded-full px-8 py-6 text-base font-semibold border-hero/30 text-hero hover:bg-hero/10 hover:text-hero group">
                <Play className="w-4 h-4 mr-2" />
                Watch Video
              </Button>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 pt-4">
              {badges.map((badge) => (
                <span
                  key={badge.label}
                  className={`${badge.color} text-primary-foreground text-xs font-bold px-4 py-2 rounded-md uppercase tracking-wider`}
                >
                  {badge.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative">
              {/* Teal circle frame */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/30 to-accent/10 blur-2xl" />
              <div className="relative w-full max-w-[500px] mx-auto aspect-square rounded-full overflow-hidden border-4 border-primary/20">
                <img
                  src={heroImage}
                  alt="Healthcare professional"
                  className="w-full h-full object-cover"
                  width={960}
                  height={1080}
                />
              </div>
              {/* Floating dot pattern overlay */}
              <div className="absolute -right-8 -bottom-8 w-48 h-48 opacity-30">
                {Array.from({ length: 8 }).map((_, row) =>
                  Array.from({ length: 8 }).map((_, col) => (
                    <div
                      key={`dot-${row}-${col}`}
                      className="absolute w-2 h-2 rounded-full bg-primary"
                      style={{
                        top: `${row * 12.5}%`,
                        left: `${col * 12.5}%`,
                      }}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partner logos scrolling */}
      <div className="mt-16 pb-8">
        <p className="text-center text-sm text-hero/50 mb-6 uppercase tracking-widest font-medium">
          Trusted by leading healthcare organizations
        </p>
        <div className="overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-hero to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-hero to-transparent z-10" />
          <div className="flex animate-scroll-left">
            {[...partnerLogos, ...partnerLogos].map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-8 px-6 py-3 bg-hero/50 rounded-lg border border-primary/10"
              >
                <span className="text-hero/60 text-sm font-medium whitespace-nowrap">{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
