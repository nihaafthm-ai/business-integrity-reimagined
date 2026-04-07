import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WeGetItSection from "@/components/WeGetItSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import WhyPartnerSection from "@/components/WhyPartnerSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WeGetItSection />
      <StatsSection />
      <ServicesSection />
      <WhyPartnerSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
