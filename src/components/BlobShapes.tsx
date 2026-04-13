/**
 * Organic blob and wave decorative shapes inspired by the Soller reference design.
 * Uses navy, teal, and gold from the design system.
 */

interface BlobDecorProps {
  variant?: "hero" | "light" | "cta" | "wave-teal" | "wave-navy";
}

const BlobShapes = ({ variant = "hero" }: BlobDecorProps) => {
  if (variant === "hero") {
    return (
      <>
        {/* Large teal blob — top right */}
        <svg className="absolute -right-20 -top-10 w-[500px] h-[500px] opacity-20 animate-float-slow" viewBox="0 0 500 500" fill="none">
          <path d="M400 100C450 180 480 280 420 360C360 440 250 480 160 440C70 400 20 300 50 200C80 100 160 40 260 30C340 22 360 40 400 100Z" fill="hsl(215, 60%, 18%)" />
        </svg>
        {/* Navy blob — left mid */}
        <svg className="absolute -left-16 top-1/3 w-[300px] h-[300px] opacity-15 animate-float delay-300" viewBox="0 0 300 300" fill="none">
          <path d="M200 50C250 100 280 170 240 230C200 290 120 300 60 260C0 220 -10 140 30 80C70 20 150 0 200 50Z" fill="hsl(215, 60%, 18%)" />
        </svg>
        {/* Small navy circle */}
        <div className="absolute top-[15%] right-[20%] w-5 h-5 rounded-full bg-primary-foreground/20 animate-float delay-200" />
        {/* Teal ring */}
        <div className="absolute bottom-[30%] left-[8%] w-20 h-20 rounded-full border-2 border-primary/20 animate-float-slow delay-400" />
        {/* Navy dot */}
        <div className="absolute top-[55%] right-[10%] w-3 h-3 rounded-full bg-navy/40 animate-float delay-500" />
      </>
    );
  }

  if (variant === "light") {
    return (
      <>
        {/* Soft teal blob — right */}
        <svg className="absolute -right-24 top-0 w-[400px] h-[400px] opacity-[0.06] animate-float-slow" viewBox="0 0 400 400" fill="none">
          <path d="M320 80C370 140 390 230 340 300C290 370 190 390 110 350C30 310 0 220 30 140C60 60 150 10 240 20C300 27 280 30 320 80Z" fill="hsl(174, 100%, 29%)" />
        </svg>
        {/* Navy ring */}
        <div className="absolute bottom-[10%] left-[4%] w-24 h-24 rounded-full border-2 border-navy/10 animate-float delay-200" />
        {/* Tiny navy dot */}
        <div className="absolute top-[20%] left-[6%] w-4 h-4 rounded-full bg-navy/8 animate-float delay-400" />
      </>
    );
  }

  if (variant === "cta") {
    return (
      <>
        {/* Large blob right */}
        <svg className="absolute -right-32 -top-20 w-[600px] h-[500px] opacity-10" viewBox="0 0 600 500" fill="none">
          <path d="M480 80C540 160 580 280 510 370C440 460 300 490 180 440C60 390 10 280 50 170C90 60 200 -10 330 10C430 25 430 20 480 80Z" fill="hsl(0, 0%, 100%)" />
        </svg>
        {/* Navy circle — bottom left */}
        <div className="absolute bottom-[12%] left-[6%] w-16 h-16 rounded-full bg-navy/15 animate-float delay-200" />
        {/* Teal ring */}
        <div className="absolute top-[18%] left-[12%] w-12 h-12 rounded-full border-2 border-primary-foreground/10 animate-float-slow delay-300" />
      </>
    );
  }

  if (variant === "wave-teal") {
    return (
      <div className="absolute inset-x-0 bottom-0 overflow-hidden leading-[0]">
        <svg className="relative block w-full h-[80px]" viewBox="0 0 1440 80" preserveAspectRatio="none" fill="none">
          <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0Z" fill="hsl(174, 100%, 29%)" fillOpacity="0.06" />
        </svg>
      </div>
    );
  }

  if (variant === "wave-navy") {
    return (
      <div className="absolute inset-x-0 top-0 overflow-hidden leading-[0] rotate-180">
        <svg className="relative block w-full h-[60px]" viewBox="0 0 1440 60" preserveAspectRatio="none" fill="none">
          <path d="M0 30C360 60 720 0 1080 30C1260 45 1380 15 1440 30V60H0Z" fill="hsl(215, 60%, 18%)" fillOpacity="0.04" />
        </svg>
      </div>
    );
  }

  return null;
};

export default BlobShapes;
