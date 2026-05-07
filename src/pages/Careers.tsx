import { useEffect, useRef, useState } from "react";
import { Eye, Heart, Award, BookOpen, Users, MapPin, ExternalLink, Globe, Briefcase, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlobShapes from "@/components/BlobShapes";
import careersHero from "@/assets/careers-hero.jpg";
import careersVision from "@/assets/careers-vision.jpg";
import careersEeo from "@/assets/careers-eeo.jpg";
import careersDiversity from "@/assets/careers-diversity.jpg";

const values = [
  {
    icon: Heart,
    title: "People",
    description: "We recognize the value of the individuals that we get to work with inside BIS and those we interact with as clients. Building strong relationships and understanding the unique perspectives of every person we do business with are the cornerstones to our operational excellence. Valuing people also involves prioritizing employee well-being and fostering a positive work culture that promotes collaboration and mutual respect. We believe this ultimately trickles over to our BIS partners as excellent customer support, expertly tailored solutions, and enhanced satisfaction.",
  },
  {
    icon: Award,
    title: "Integrity",
    description: "We know that integrity is vital in the healthcare industry, but ethical practices should be observed and expected with any business activity. We are dedicated to upholding the highest standards of honesty, transparency, and ethical conduct. This involves maintaining confidentiality, ensuring data security, and complying with all relevant laws and regulations. By operating with integrity, it is our goal to foster long-term relationships with our clients and position ourselves as a reputable and trustworthy partner.",
  },
  {
    icon: Briefcase,
    title: "Excellence",
    description: "We play to win, and this pursuit of excellence represents our commitment to delivering services of the highest quality and exceeding client expectations. This also means that we consistently strive for improvement, embrace innovation, and get ahead of industry trends and best practices. By focusing on excellence, we become a better partner for our clients, their businesses, and overall success.",
  },
  {
    icon: BookOpen,
    title: "Learning",
    description: "Our experience in the healthcare industry has taught us that new technologies, regulations, and advancements emerge regularly. As we expand our portfolio across many diverse industries, we value opportunities for education and professional development. This involves fostering a culture of learning within BIS, supporting existing employees as they acquire new skills, and hiring skilled talent to adapt to changing needs.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Focusing on social corporate responsibility means that we first establish that all BIS employees know how important their individual contributions are to our operations. As an internal community, we aim to create a culture that is supportive and collaborative. Beyond our doors, we support our local communities by engaging in charitable initiatives, volunteering our time, and aligning with causes that serve the well-being of the people around us.",
  },
];

const locations = [
  {
    name: "United States",
    link: "https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=d8f698f0-12a4-46d5-b191-1e5220d8ba12&ccId=19000101_000001&type=JS&lang=en_US",
    flag: "🇺🇸",
    description: "Our headquarters and primary operations hub",
  },
  {
    name: "Colombia",
    link: "https://businessintegrityservices.com/job-listing/",
    flag: "🇨🇴",
    description: "Bilingual workforce excellence center",
  },
  {
    name: "India",
    link: "https://businessintegrityservices.com/careers/job-listing/",
    flag: "🇮🇳",
    description: "Technology and operations delivery center",
  },
];

/* Dot positions for a world map (percentage-based) */
const worldDots: Array<{ x: number; y: number; size?: number }> = [];
// Generate a dotted world map pattern
const continentRegions = [
  // North America
  ...Array.from({ length: 60 }, () => ({ x: 12 + Math.random() * 18, y: 15 + Math.random() * 25, size: 1.5 + Math.random() })),
  // Central America
  ...Array.from({ length: 15 }, () => ({ x: 18 + Math.random() * 8, y: 38 + Math.random() * 10, size: 1.2 + Math.random() * 0.5 })),
  // South America
  ...Array.from({ length: 50 }, () => ({ x: 22 + Math.random() * 14, y: 48 + Math.random() * 35, size: 1.5 + Math.random() })),
  // Europe
  ...Array.from({ length: 45 }, () => ({ x: 44 + Math.random() * 12, y: 12 + Math.random() * 22, size: 1.3 + Math.random() * 0.7 })),
  // Africa
  ...Array.from({ length: 55 }, () => ({ x: 44 + Math.random() * 16, y: 35 + Math.random() * 35, size: 1.5 + Math.random() })),
  // Middle East
  ...Array.from({ length: 20 }, () => ({ x: 56 + Math.random() * 8, y: 25 + Math.random() * 15, size: 1.2 + Math.random() * 0.5 })),
  // Asia
  ...Array.from({ length: 70 }, () => ({ x: 58 + Math.random() * 25, y: 10 + Math.random() * 30, size: 1.5 + Math.random() })),
  // India subcontinent
  ...Array.from({ length: 30 }, () => ({ x: 62 + Math.random() * 10, y: 30 + Math.random() * 18, size: 1.5 + Math.random() })),
  // Southeast Asia
  ...Array.from({ length: 25 }, () => ({ x: 75 + Math.random() * 12, y: 38 + Math.random() * 18, size: 1.3 + Math.random() * 0.5 })),
  // Australia
  ...Array.from({ length: 35 }, () => ({ x: 78 + Math.random() * 14, y: 62 + Math.random() * 18, size: 1.5 + Math.random() })),
];
worldDots.push(...continentRegions);

// Location pins on the map
const mapPins = [
  { x: 22, y: 30, label: "US" },
  { x: 27, y: 52, label: "CO" },
  { x: 67, y: 38, label: "IN" },
];

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, isVisible };
}

const Careers = () => {
  const heroObs = useInView(0.05);
  const visionObs = useInView();
  const valuesObs = useInView();
  const eeoObs = useInView();
  const deiObs = useInView();
  const mapObs = useInView();
  const [expandedValue, setExpandedValue] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ───── Hero-like Intro Section ───── */}
      <section
        ref={heroObs.ref}
        className="relative pt-28 pb-20 overflow-hidden bg-hero"
      >
        <div className="absolute inset-0">
          <img src={careersHero} alt="" className="w-full h-full object-cover opacity-20" width={1920} height={800} />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(174,95%,24%)] via-[hsl(174,95%,24%,0.85)] to-[hsl(180,100%,18%)]" />
        </div>
        <BlobShapes variant="hero" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className={`inline-block px-5 py-2 rounded-full text-xs font-semibold tracking-[0.2em] uppercase mb-6 glass-card text-hero transition-all duration-700 ${heroObs.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Join Our Team
          </span>
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-hero mb-6 leading-tight transition-all duration-700 delay-100 ${heroObs.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Work With <span className="text-gold">BIS</span>
          </h1>
          <p className={`text-base md:text-lg text-hero/90 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${heroObs.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Founded in 2019, Business Integrity Services has grown to over 1,000 employees in three different countries. From the United States to Colombia and India, we are fostering a unified workforce culture that embraces an abundance of diverse backgrounds. We are a leading provider of business outsourcing services for the healthcare industry and beyond because of our drive for excellence, commitment to integrity, and focus on prioritizing people.
          </p>
        </div>

        <div className="absolute inset-x-0 bottom-0 overflow-hidden leading-[0]">
          <svg className="relative block w-full h-[80px]" viewBox="0 0 1440 80" preserveAspectRatio="none" fill="none">
            <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0Z" fill="hsl(0,0%,100%)" fillOpacity="1" />
          </svg>
        </div>
      </section>

      {/* ───── Our Vision (white section) ───── */}
      <section ref={visionObs.ref} className="py-20 bg-background relative overflow-hidden">
        <BlobShapes variant="light" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-700 ${visionObs.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <img src={careersVision} alt="Our Vision" className="rounded-2xl premium-shadow-lg w-full object-cover h-[400px]" loading="lazy" width={800} height={600} />
            </div>
            <div className={`transition-all duration-700 delay-200 ${visionObs.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-hero flex items-center justify-center">
                  <Eye className="w-6 h-6 text-hero" />
                </div>
                <p className="text-primary uppercase tracking-[0.2em] text-xs font-semibold">Our Vision</p>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                We aim to be a global leader in <span className="text-gold">value added business services</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                We are dedicated to partnering with our clients, understanding their unique needs, and customizing comprehensive solutions that optimize their operational efficiency and enhance business performance. By leveraging our extensive experience and industry-leading practices, we strive to deliver services and skilled professionals that fully integrate as key team members and enable our clients to focus on their core competencies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Our Values (teal background) ───── */}
      <section ref={valuesObs.ref} className="py-20 bg-hero relative overflow-hidden">
        <BlobShapes variant="cta" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <p className={`text-hero/70 uppercase tracking-[0.2em] text-xs font-semibold mb-4 transition-all duration-700 ${valuesObs.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>What Drives Us</p>
            <h2 className={`text-3xl lg:text-4xl font-bold text-hero mb-4 transition-all duration-700 delay-100 ${valuesObs.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Our <span className="text-gold">Values</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              const isExpanded = expandedValue === i;
              return (
                <div
                  key={value.title}
                  className={`group glass-card rounded-2xl p-6 transition-all duration-500 cursor-pointer hover:bg-[hsl(0,0%,100%,0.15)] ${
                    valuesObs.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                  onClick={() => setExpandedValue(isExpanded ? null : i)}
                >
                  <div className="w-14 h-14 rounded-xl bg-[hsl(0,0%,100%,0.15)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-hero" />
                  </div>
                  <h3 className="text-xl font-bold text-hero mb-3">{value.title}</h3>
                  <p className={`text-hero/80 text-sm leading-relaxed transition-all duration-300 ${isExpanded ? '' : 'line-clamp-3'}`}>
                    {value.description}
                  </p>
                  <a
                    className="mt-3 text-gold text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all cursor-pointer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {isExpanded ? 'Show Less' : 'Read More'}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───── Equal Employment Opportunity (teal bg) ───── */}
      <section ref={eeoObs.ref} className="py-20 bg-hero relative overflow-hidden">
        <BlobShapes variant="hero" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`order-2 md:order-1 transition-all duration-700 ${eeoObs.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <p className="text-hero/70 uppercase tracking-[0.2em] text-xs font-semibold mb-4">Our Commitment</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-hero mb-4">
                Putting People First: <span className="text-gold">Equal Employment Opportunity</span>
              </h2>
              <p className="text-hero/90 leading-relaxed text-sm mb-4">
                We are committed to Equal Employment Opportunity (EEO) and comply with all federal, state, and local laws that prohibit workplace discrimination and unlawful retaliation. BIS strictly prohibits all discrimination on the basis of race, ancestry, color, age, national origin, ethnicity, religious creed or belief, physical or mental disability, marital or familial status, legally protected medical condition, genetic information, military or veteran status, sex, gender, sexual orientation, citizenship status, protected activity, or any other status or classification protected by applicable federal, state, and/or local laws.
              </p>
              <p className="text-hero/90 leading-relaxed text-sm">
                This commitment also extends to all areas of personnel actions, including but not limited to advertising, recruiting, hiring, training, evaluation, promotion, transfer, work assignments, accommodation requests, requests for leave, compensation, benefits, disciplinary actions, layoffs, discharges, terminations, participation in company activities, programs, or events, or any other terms, conditions, or privileges of employment.
              </p>
            </div>
            <div className={`order-1 md:order-2 transition-all duration-700 delay-200 ${eeoObs.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              <img src={careersEeo} alt="Equal Employment Opportunity" className="rounded-2xl w-full object-cover h-[400px]" style={{ boxShadow: '0 12px 48px -8px rgba(0,0,0,0.3)' }} loading="lazy" width={800} height={600} />
            </div>
          </div>
        </div>
      </section>

      {/* ───── Diversity, Equity, and Inclusion (white section) ───── */}
      <section ref={deiObs.ref} className="py-20 bg-background relative overflow-hidden">
        <BlobShapes variant="light" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-700 ${deiObs.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <img src={careersDiversity} alt="Diversity, Equity, and Inclusion" className="rounded-2xl premium-shadow-lg w-full object-cover h-[400px]" loading="lazy" width={800} height={600} />
            </div>
            <div className={`transition-all duration-700 delay-200 ${deiObs.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              <p className="text-primary uppercase tracking-[0.2em] text-xs font-semibold mb-4">Our Pledge</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Breaking Barriers, Building Bridges: <span className="text-gold">Diversity, Equity, and Inclusion</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                At BIS, we are dedicated to fostering a culture of Diversity, Equity, and Inclusion. We firmly believe that doing what is right means embracing the richness of perspectives, backgrounds, and experiences. We are committed to treating everyone with respect, ensuring equal opportunities, and creating an inclusive environment where all voices are heard and valued. We understand that representation matters, and we strive to reflect the diversity of the people we serve and collaborate with. With unwavering resolve, we pledge to uphold these principles and champion integrity in all aspects of our business. Together, we can build a better, more inclusive world for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── World Map / Locations (teal bg) ───── */}
      <section ref={mapObs.ref} className="py-20 bg-hero relative overflow-hidden">
        <BlobShapes variant="cta" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <p className={`text-hero/70 uppercase tracking-[0.2em] text-xs font-semibold mb-4 transition-all duration-700 ${mapObs.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Global Presence
            </p>
            <h2 className={`text-3xl lg:text-4xl font-bold text-hero mb-4 transition-all duration-700 delay-100 ${mapObs.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Select a Location to <span className="text-gold">Search Opportunities</span>
            </h2>
            <p className={`text-hero/80 max-w-2xl mx-auto text-base transition-all duration-700 delay-200 ${mapObs.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Explore career opportunities across our offices in the United States, Colombia, and India.
            </p>
          </div>

          {/* Location Cards ABOVE the map */}
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {locations.map((loc, i) => (
              <a
                key={loc.name}
                href={loc.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group bg-background rounded-2xl p-6 text-center premium-shadow-lg hover:scale-105 transition-all duration-500 ${
                  mapObs.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${200 + i * 150}ms` }}
              >
                <div className="text-4xl mb-3">{loc.flag}</div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-[hsl(var(--teal))]" />
                  <h3 className="text-lg font-bold text-foreground">{loc.name}</h3>
                </div>
                <p className="text-muted-foreground text-xs mb-3">{loc.description}</p>
                <span className="inline-flex items-center gap-1 text-[hsl(var(--teal))] text-sm font-semibold group-hover:gap-2 transition-all">
                  View Opportunities <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </a>
            ))}
          </div>

          {/* Dotted World Map */}
          <div className={`relative max-w-5xl mx-auto transition-all duration-700 delay-500 ${mapObs.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <svg viewBox="0 0 100 55" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
              {/* Dots for continents */}
              {worldDots.map((dot, i) => (
                <circle
                  key={i}
                  cx={dot.x}
                  cy={dot.y}
                  r={(dot.size || 1.5) * 0.18}
                  fill="hsl(0,0%,100%)"
                  fillOpacity={0.2 + Math.random() * 0.15}
                />
              ))}

              {/* Connecting curved lines between pins */}
              <path
                d={`M ${mapPins[0].x} ${mapPins[0].y} Q 24.5 42 ${mapPins[1].x} ${mapPins[1].y}`}
                stroke="hsl(322,43%,24%)"
                strokeWidth="0.15"
                strokeDasharray="0.5 0.3"
                fill="none"
                opacity="0.6"
              />
              <path
                d={`M ${mapPins[1].x} ${mapPins[1].y} Q 47 30 ${mapPins[2].x} ${mapPins[2].y}`}
                stroke="hsl(322,43%,24%)"
                strokeWidth="0.15"
                strokeDasharray="0.5 0.3"
                fill="none"
                opacity="0.6"
              />
              <path
                d={`M ${mapPins[0].x} ${mapPins[0].y} Q 44 15 ${mapPins[2].x} ${mapPins[2].y}`}
                stroke="hsl(322,43%,24%)"
                strokeWidth="0.15"
                strokeDasharray="0.5 0.3"
                fill="none"
                opacity="0.6"
              />

              {/* Location pins */}
              {mapPins.map((pin, i) => (
                <g key={i}>
                  {/* Outer pulse ring */}
                  <circle cx={pin.x} cy={pin.y} r="2.5" fill="hsl(322,43%,24%)" fillOpacity="0.25" className="animate-pulse-soft" style={{ animationDelay: `${i * 0.5}s` }} />
                  {/* Pin circle */}
                  <circle cx={pin.x} cy={pin.y} r="1.2" fill="hsl(322,43%,24%)" stroke="hsl(0,0%,100%)" strokeWidth="0.3" />
                  <circle cx={pin.x} cy={pin.y} r="0.45" fill="hsl(0,0%,100%)" />
                  {/* Label */}
                  <text x={pin.x} y={pin.y - 2.5} textAnchor="middle" fill="hsl(0,0%,100%)" fontSize="1.8" fontWeight="700" fontFamily="'Plus Jakarta Sans', sans-serif" opacity="0.9">
                    {pin.label}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute inset-x-0 bottom-0 overflow-hidden leading-[0]">
          <svg className="relative block w-full h-[80px]" viewBox="0 0 1440 80" preserveAspectRatio="none" fill="none">
            <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0Z" fill="hsl(0,0%,100%)" fillOpacity="1" />
          </svg>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
