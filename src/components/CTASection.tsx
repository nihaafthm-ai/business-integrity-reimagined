import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 bg-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl lg:text-5xl font-bold text-hero mb-6">
          Ready for a Better Practice Partnership?
        </h2>
        <p className="text-lg text-hero/70 mb-10 max-w-2xl mx-auto">
          Find out how we do things differently for our partner practices and their patients at BIS. Recognized by Becker's Hospital Review as a top healthcare RCM company.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-primary text-primary-foreground hover:bg-accent rounded-full px-10 py-6 text-lg font-semibold group">
            Get Started
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" className="rounded-full px-10 py-6 text-lg font-semibold border-hero/30 text-hero hover:bg-hero/10 hover:text-hero">
            View Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
