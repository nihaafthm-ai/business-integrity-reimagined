import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import BlobShapes from "@/components/BlobShapes";
import servicesRcm from "@/assets/services-rcm.jpg";
import servicesScheduling from "@/assets/services-scheduling.jpg";
import servicesCoding from "@/assets/services-coding.jpg";

const services = [
  {
    title: "Revenue Cycle Management",
    description: "Maximize financial performance with a one-of-a-kind approach to efficient revenue operations. Compliance, transparency, and industry-leading experience.",
    image: servicesRcm,
    features: ["Compliance & Regulation", "Transparent Reporting", "Denial Management"],
  },
  {
    title: "Scheduling & Call Center",
    description: "Streamline operations with advanced scheduling and call center solutions, designed to accelerate business growth and boost patient satisfaction.",
    image: servicesScheduling,
    features: ["Bilingual Support", "High Conversion Rates", "Patient Experience"],
  },
  {
    title: "Medical Coding & Compliance",
    description: "Expert medical coding that transforms clinical notes into accurate CPT codes, ensuring compliance and faster claim processing.",
    image: servicesCoding,
    features: ["Proven Strategy", "Insurance Verification", "Charge Entry"],
  },
];

const ServicesSection = () => {
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
    <section ref={ref} id="solutions" className="py-16 bg-section-alt relative overflow-hidden">
      <BlobShapes variant="light" />
      <BlobShapes variant="wave-teal" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.2em] text-xs font-semibold mb-4">Our Solutions</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Explore Our Wide Range of <span className="text-primary">Business Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            Maximize your financial performance with our results-driven revenue cycle management, ensuring efficient and compliant operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/20 premium-shadow hover:premium-shadow-lg transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width={800}
                  height={600}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/30 to-transparent" />
                <h3 className="absolute bottom-4 left-4 right-4 text-lg font-bold text-primary-foreground">
                  {service.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((f) => (
                    <span key={f} className="text-xs bg-primary/8 text-primary px-3 py-1.5 rounded-full font-medium">
                      {f}
                    </span>
                  ))}
                </div>
                <a href="#" className="inline-flex items-center text-primary font-semibold text-sm group-hover:gap-3 gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
