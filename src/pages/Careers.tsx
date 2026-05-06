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
    coords: { cx: "22%", cy: "35%" },
    flag: "🇺🇸",
  },
  {
    name: "Colombia",
    link: "https://businessintegrityservices.com/job-listing/",
    coords: { cx: "28%", cy: "55%" },
    flag: "🇨🇴",
  },
  {
    name: "India",
    link: "https://businessintegrityservices.com/careers/job-listing/",
    coords: { cx: "68%", cy: "42%" },
    flag: "🇮🇳",
  },
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

      {/* ───── Hero-like Intro Section (similar to solutions page) ───── */}
      <section
        ref={heroObs.ref}
        className="relative pt-28 pb-20 overflow-hidden bg-hero"
      >
        {/* Background image overlay */}
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

        {/* Bottom wave */}
        <div className="absolute inset-x-0 bottom-0 overflow-hidden leading-[0]">
          <svg className="relative block w-full h-[80px]" viewBox="0 0 1440 80" preserveAspectRatio="none" fill="none">
            <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0Z" fill="hsl(0,0%,100%)" fillOpacity="1" />
          </svg>
        </div>
      </section>

      {/* ───── Our Vision ───── */}
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

      {/* ───── Our Values ───── */}
      <section ref={valuesObs.ref} className="py-20 bg-section-alt relative overflow-hidden">
        <BlobShapes variant="wave-teal" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <p className={`text-primary uppercase tracking-[0.2em] text-xs font-semibold mb-4 transition-all duration-700 ${valuesObs.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>What Drives Us</p>
            <h2 className={`text-3xl lg:text-4xl font-bold text-foreground mb-4 transition-all duration-700 delay-100 ${valuesObs.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
                  className={`group bg-card rounded-2xl p-6 border border-border hover:border-primary/20 premium-shadow hover:premium-shadow-lg transition-all duration-500 cursor-pointer ${
                    valuesObs.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  } ${i >= 3 ? 'lg:col-span-1 sm:col-span-1' : ''}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                  onClick={() => setExpandedValue(isExpanded ? null : i)}
                >
                  <div className="w-14 h-14 rounded-xl bg-hero flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-hero" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className={`text-muted-foreground text-sm leading-relaxed transition-all duration-300 ${isExpanded ? '' : 'line-clamp-3'}`}>
                    {value.description}
                  </p>
                  <button className="mt-3 text-primary text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                    {isExpanded ? 'Show Less' : 'Read More'} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───── Equal Employment Opportunity ───── */}
      <section ref={eeoObs.ref} className="py-20 bg-background relative overflow-hidden">
        <BlobShapes variant="light" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`order-2 md:order-1 transition-all duration-700 ${eeoObs.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <p className="text-primary uppercase tracking-[0.2em] text-xs font-semibold mb-4">Our Commitment</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Putting People First: <span className="text-gold">Equal Employment Opportunity</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                We are committed to Equal Employment Opportunity (EEO) and comply with all federal, state, and local laws that prohibit workplace discrimination and unlawful retaliation. BIS strictly prohibits all discrimination on the basis of race, ancestry, color, age, national origin, ethnicity, religious creed or belief, physical or mental disability, marital or familial status, legally protected medical condition, genetic information, military or veteran status, sex, gender, sexual orientation, citizenship status, protected activity, or any other status or classification protected by applicable federal, state, and/or local laws.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                This commitment also extends to all areas of personnel actions, including but not limited to advertising, recruiting, hiring, training, evaluation, promotion, transfer, work assignments, accommodation requests, requests for leave, compensation, benefits, disciplinary actions, layoffs, discharges, terminations, participation in company activities, programs, or events, or any other terms, conditions, or privileges of employment.
              </p>
            </div>
            <div className={`order-1 md:order-2 transition-all duration-700 delay-200 ${eeoObs.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              <img src={careersEeo} alt="Equal Employment Opportunity" className="rounded-2xl premium-shadow-lg w-full object-cover h-[400px]" loading="lazy" width={800} height={600} />
            </div>
          </div>
        </div>
      </section>

      {/* ───── Diversity, Equity, and Inclusion ───── */}
      <section ref={deiObs.ref} className="py-20 bg-section-alt relative overflow-hidden">
        <BlobShapes variant="wave-navy" />
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

      {/* ───── World Map / Locations ───── */}
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

          {/* World Map SVG */}
          <div className={`relative max-w-4xl mx-auto mb-12 transition-all duration-700 delay-300 ${mapObs.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <svg viewBox="0 0 1000 500" className="w-full h-auto" fill="none">
              {/* Simplified world map outline */}
              {/* North America */}
              <path d="M150 120 L180 100 L220 90 L260 95 L280 110 L300 105 L310 120 L290 140 L300 160 L280 180 L260 200 L250 230 L230 250 L210 240 L200 220 L180 230 L170 210 L160 190 L150 170 L140 150Z" fill="hsl(0,0%,100%)" fillOpacity="0.12" stroke="hsl(0,0%,100%)" strokeOpacity="0.25" strokeWidth="1" />
              {/* South America */}
              <path d="M250 270 L280 260 L310 280 L320 310 L310 340 L300 370 L280 400 L260 410 L240 390 L230 360 L240 330 L250 300Z" fill="hsl(0,0%,100%)" fillOpacity="0.12" stroke="hsl(0,0%,100%)" strokeOpacity="0.25" strokeWidth="1" />
              {/* Europe */}
              <path d="M440 100 L460 90 L490 95 L520 100 L530 120 L510 130 L500 150 L480 145 L460 150 L450 135 L440 120Z" fill="hsl(0,0%,100%)" fillOpacity="0.12" stroke="hsl(0,0%,100%)" strokeOpacity="0.25" strokeWidth="1" />
              {/* Africa */}
              <path d="M460 170 L500 160 L530 170 L550 200 L560 240 L550 280 L530 310 L510 330 L490 320 L470 290 L460 260 L450 230 L455 200Z" fill="hsl(0,0%,100%)" fillOpacity="0.12" stroke="hsl(0,0%,100%)" strokeOpacity="0.25" strokeWidth="1" />
              {/* Asia */}
              <path d="M540 80 L580 70 L640 75 L700 80 L740 100 L760 120 L750 150 L730 170 L700 180 L670 190 L640 200 L610 190 L580 170 L560 150 L540 130 L535 110Z" fill="hsl(0,0%,100%)" fillOpacity="0.12" stroke="hsl(0,0%,100%)" strokeOpacity="0.25" strokeWidth="1" />
              {/* India subcontinent */}
              <path d="M640 200 L670 195 L690 210 L700 240 L690 270 L670 290 L650 280 L640 260 L635 230Z" fill="hsl(0,0%,100%)" fillOpacity="0.12" stroke="hsl(0,0%,100%)" strokeOpacity="0.25" strokeWidth="1" />
              {/* Australia */}
              <path d="M750 320 L790 310 L830 320 L850 340 L840 370 L810 380 L780 375 L760 360 L750 340Z" fill="hsl(0,0%,100%)" fillOpacity="0.12" stroke="hsl(0,0%,100%)" strokeOpacity="0.25" strokeWidth="1" />

              {/* Location markers with pulse animation */}
              {/* US */}
              <circle cx="220" cy="170" r="20" fill="hsl(322,43%,24%)" fillOpacity="0.3" className="animate-pulse-soft" />
              <circle cx="220" cy="170" r="10" fill="hsl(322,43%,24%)" stroke="hsl(0,0%,100%)" strokeWidth="2" />
              <circle cx="220" cy="170" r="4" fill="hsl(0,0%,100%)" />

              {/* Colombia */}
              <circle cx="260" cy="280" r="20" fill="hsl(322,43%,24%)" fillOpacity="0.3" className="animate-pulse-soft" style={{ animationDelay: '0.5s' }} />
              <circle cx="260" cy="280" r="10" fill="hsl(322,43%,24%)" stroke="hsl(0,0%,100%)" strokeWidth="2" />
              <circle cx="260" cy="280" r="4" fill="hsl(0,0%,100%)" />

              {/* India */}
              <circle cx="665" cy="240" r="20" fill="hsl(322,43%,24%)" fillOpacity="0.3" className="animate-pulse-soft" style={{ animationDelay: '1s' }} />
              <circle cx="665" cy="240" r="10" fill="hsl(322,43%,24%)" stroke="hsl(0,0%,100%)" strokeWidth="2" />
              <circle cx="665" cy="240" r="4" fill="hsl(0,0%,100%)" />

              {/* Connecting lines */}
              <line x1="220" y1="170" x2="260" y2="280" stroke="hsl(0,0%,100%)" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="260" y1="280" x2="665" y2="240" stroke="hsl(0,0%,100%)" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="220" y1="170" x2="665" y2="240" stroke="hsl(0,0%,100%)" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="4 4" />
            </svg>
          </div>

          {/* Location Cards */}
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {locations.map((loc, i) => (
              <a
                key={loc.name}
                href={loc.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group glass-card rounded-2xl p-6 text-center hover:bg-[hsl(0,0%,100%,0.15)] transition-all duration-500 ${
                  mapObs.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${400 + i * 150}ms` }}
              >
                <div className="text-4xl mb-3">{loc.flag}</div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-gold" />
                  <h3 className="text-lg font-bold text-hero">{loc.name}</h3>
                </div>
                <div className="inline-flex items-center gap-1 text-gold text-sm font-semibold group-hover:gap-2 transition-all">
                  View Opportunities <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>
            ))}
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
