import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-professional.jpg";
import BlobShapes from "@/components/BlobShapes";
import { useEffect, useState } from "react";

const badges = [
  { label: "HIPAA Compliant", color: "bg-navy-deep" },
  { label: "ISO 27001:2022", color: "bg-navy-deep" },
  { label: "ISO 9001:2015", color: "bg-navy-deep" },
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
      {/* Organic blob decorations */}
      <BlobShapes variant="hero" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] font-medium text-primary-foreground/60 mb-4">
                Driving Operational Excellence
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-primary-foreground">
                At Last.
                <br />
                A Solutions Partner
                <br />
                That Prioritizes
                <br />
                Your Business
                              
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gold mt-3">
                AND Your Patients
              </p>
            </div>

            <p className="text-base lg:text-lg max-w-lg text-primary-foreground/75 leading-relaxed">
              Business Integrity Services delivers expert healthcare solutions in revenue cycle management, medical coding, compliance, and patient scheduling.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="rounded-full px-8 py-6 text-base font-semibold group bg-navy text-primary-foreground hover:bg-navy-light shadow-lg shadow-navy/30">
                Free Denial Trend Analysis
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="rounded-full px-8 py-6 text-base font-semibold group border-primary-foreground/30 text-primary-foreground bg-primary-foreground/5 hover:bg-primary-foreground/10 backdrop-blur-sm">
                <Play className="w-4 h-4 mr-2" />
                Watch Video
              </Button>
            </div>

            {/* Certification badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              {badges.map((badge) => (
                <span
                  key={badge.label}
                  className={`${badge.color} text-primary-foreground text-xs font-bold px-4 py-2 rounded-md uppercase tracking-wider shadow-sm`}
                >
                  {badge.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative w-full max-w-[460px] mx-auto aspect-square">
              {/* Blob glow behind */}
              <svg className="absolute -inset-12 w-[calc(100%+6rem)] h-[calc(100%+6rem)] opacity-30" viewBox="0 0 500 500" fill="none">
                <path d="M250 50C340 50 430 100 450 200C470 300 430 400 350 440C270 480 170 460 100 390C30 320 20 220 60 140C100 60 170 50 250 50Z" fill="hsl(174, 80%, 42%)" />
              </svg>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary-foreground/10 shadow-2xl shadow-primary/10">
                <img
                  src={heroImage}
                  alt="Healthcare professional"
                  className="w-full h-full object-cover"
                  width={960}
                  height={1080}
                />
              </div>
              {/* Floating stat cards */}
              <div className="absolute -right-4 top-1/4 glass-card rounded-xl px-5 py-3 shadow-lg">
                <p className="text-2xl font-bold text-primary-foreground">200+</p>
                <p className="text-xs text-primary-foreground/70">Clinics Served</p>
              </div>
              <div className="absolute -left-4 bottom-1/4 glass-card rounded-xl px-5 py-3 shadow-lg">
                <p className="text-2xl font-bold text-primary-foreground">1,000+</p>
                <p className="text-xs text-primary-foreground/70">Team Members</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partner logos bar */}
      <div className="mt-16 pb-0">
        <p className="text-center text-xs mb-6 uppercase tracking-[0.25em] font-medium text-primary-foreground/50">
          We work with premier organizations across the country
        </p>
        <div className="bg-background rounded-t-3xl mx-4 lg:mx-8 overflow-hidden shadow-2xl shadow-navy/10">
          <div className="relative overflow-hidden py-6">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
            <div className="flex animate-scroll-left">
              {[...partnerNames, ...partnerNames, ...partnerNames, ...partnerNames].map((name, i) => (
                <div key={i} className="flex-shrink-0 mx-10 flex items-center justify-center h-12">
                  <span className="text-muted-foreground font-semibold text-sm whitespace-nowrap tracking-wide">{name}</span>
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
