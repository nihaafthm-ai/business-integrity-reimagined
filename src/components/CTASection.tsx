import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 bg-hero relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary-foreground/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary-foreground/5 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <p className="text-xs uppercase tracking-[0.25em] font-semibold text-primary-foreground/50 mb-4">Get Started</p>
        <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-primary-foreground">
          Ready for a Better Practice <span className="text-teal-glow">Partnership?</span>
        </h2>
        <p className="text-base lg:text-lg mb-10 max-w-2xl mx-auto text-primary-foreground/75 leading-relaxed">
          Find out how we do things differently for our partner practices and their patients at BIS. Recognized by Becker's Hospital Review as a top healthcare Revenue Cycle Management Company.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <Button className="rounded-full px-10 py-6 text-base font-semibold group bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg">
            Contact Us Today
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" className="rounded-full px-10 py-6 text-base font-semibold border-primary-foreground/25 text-primary-foreground bg-primary-foreground/5 hover:bg-primary-foreground/10">
            Free Denial Trend Analysis
          </Button>
        </div>
        <div className="flex justify-center gap-8 text-xs uppercase tracking-widest font-medium text-primary-foreground/40">
          <span>HIPAA Compliant</span>
          <span>ISO 27001</span>
          <span>ISO 9001</span>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
