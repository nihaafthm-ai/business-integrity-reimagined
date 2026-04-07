import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 bg-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl lg:text-5xl font-bold mb-6" style={{ color: "white" }}>
          Ready for a Better Practice Partnership?
        </h2>
        <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: "hsl(0 0% 100% / 0.85)" }}>
          Find out how we do things differently for our partner practices and their patients at BIS. Recognized by Becker's Hospital Review as a top healthcare RCM company.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="rounded-full px-10 py-6 text-lg font-semibold group" style={{ backgroundColor: "white", color: "hsl(180 100% 27%)" }}>
            Get Started
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" className="rounded-full px-10 py-6 text-lg font-semibold" style={{ borderColor: "hsl(0 0% 100% / 0.4)", color: "white", backgroundColor: "transparent" }}>
            View Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
