/**
 * Reusable geometric shape decorations inspired by modern tech design.
 * Uses navy, teal, and gold from the design system.
 */

interface GeometricDecorProps {
  variant?: "hero" | "light" | "cta";
}

const GeometricShapes = ({ variant = "hero" }: GeometricDecorProps) => {
  if (variant === "hero") {
    return (
      <>
        {/* Large teal circle — top right */}
        <div
          className="geo-circle w-72 h-72 bg-primary/15 animate-float-slow"
          style={{ top: "5%", right: "-6%" }}
        />
        {/* Gold ring — mid left */}
        <div
          className="geo-ring w-40 h-40 border-gold/30 animate-float delay-300"
          style={{ top: "35%", left: "-4%" }}
        />
        {/* Small teal filled dot */}
        <div
          className="geo-circle w-6 h-6 bg-primary/40 animate-float delay-200"
          style={{ top: "20%", right: "18%" }}
        />
        {/* Navy rect — bottom left */}
        <div
          className="geo-rect w-32 h-20 bg-navy-light/20 rotate-12 animate-float-slow delay-400"
          style={{ bottom: "18%", left: "3%" }}
        />
        {/* Gold dot — bottom right */}
        <div
          className="geo-circle w-10 h-10 bg-gold/25 animate-float delay-500"
          style={{ bottom: "25%", right: "12%" }}
        />
        {/* Teal ring — top left area */}
        <div
          className="geo-ring w-24 h-24 border-primary/20 animate-float delay-100"
          style={{ top: "12%", left: "10%" }}
        />
        {/* Small navy circle */}
        <div
          className="geo-circle w-4 h-4 bg-primary-foreground/20"
          style={{ top: "60%", right: "25%" }}
        />
      </>
    );
  }

  if (variant === "light") {
    return (
      <>
        {/* Soft teal circle */}
        <div
          className="geo-circle w-48 h-48 bg-primary/5 animate-float-slow"
          style={{ top: "-5%", right: "-3%" }}
        />
        {/* Gold ring */}
        <div
          className="geo-ring w-28 h-28 border-gold/15 animate-float delay-200"
          style={{ bottom: "10%", left: "5%" }}
        />
        {/* Small navy dot */}
        <div
          className="geo-circle w-5 h-5 bg-navy/10 animate-float delay-400"
          style={{ top: "30%", left: "8%" }}
        />
        {/* Teal rect */}
        <div
          className="geo-rect w-20 h-12 bg-primary/5 -rotate-6 animate-float-slow delay-300"
          style={{ bottom: "20%", right: "6%" }}
        />
      </>
    );
  }

  if (variant === "cta") {
    return (
      <>
        {/* Large ring */}
        <div
          className="geo-ring w-64 h-64 border-primary-foreground/10 animate-float-slow"
          style={{ top: "-10%", right: "-8%" }}
        />
        {/* Gold circle */}
        <div
          className="geo-circle w-20 h-20 bg-gold/15 animate-float delay-200"
          style={{ bottom: "15%", left: "5%" }}
        />
        {/* Teal dot */}
        <div
          className="geo-circle w-8 h-8 bg-primary/30 animate-float delay-400"
          style={{ top: "25%", left: "15%" }}
        />
        {/* Small gold dot */}
        <div
          className="geo-circle w-5 h-5 bg-gold/25 animate-float delay-100"
          style={{ top: "20%", right: "20%" }}
        />
      </>
    );
  }

  return null;
};

export default GeometricShapes;
