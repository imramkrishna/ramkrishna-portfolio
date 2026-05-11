import { DecorativeDots, DecorativeSquare } from "../shared/DecorativeElements";
import { FileText } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[60vh] flex items-center py-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <DecorativeDots
        rows={5}
        cols={5}
        className="absolute top-20 right-[15%] opacity-20 hidden lg:grid"
      />
      <DecorativeSquare className="absolute bottom-20 right-[25%] opacity-15 hidden lg:block" />
      <DecorativeDots
        rows={3}
        cols={3}
        className="absolute bottom-32 right-[10%] opacity-15 hidden lg:grid"
      />

      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-5 animate-fade-in">
            {/* Profile Image - Mobile/Tablet */}
            <div className="lg:hidden flex justify-center mb-4">
              <div className="relative">
                <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-primary/30 shadow-xl shadow-primary/20">
                  <img
                    src="/pp.jpeg"
                    alt="Ram Krishna Yadav"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-110 animate-pulse" />
              </div>
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
              Ram Krishna Yadav is a{" "}
              <span className="text-primary">Full Stack Software Engineer</span>,{" "}
              <a
                href="https://venyxtech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                CTO at Venyx Technology International
              </a>
            </h1>
            <p className="text-muted-foreground text-sm md:text-base max-w-lg">
              He crafts scalable web applications with modern technologies,
              RESTful APIs, and cloud infrastructure. CTO at{" "}
              <a
                href="https://venyxtech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Venyx Technology International{" "}
              </a>
              , where he writes scalable code for local and international businesses, reviews codebases, and manages the software development lifecycle.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/contacts"
                className="inline-block px-5 py-2.5 border border-primary text-foreground hover:bg-primary/10 transition-colors text-sm"
              >
                Contact me!!
              </a>
              <a
                href="/newcv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm"
              >
                <FileText size={16} />
                Resume
              </a>
            </div>
          </div>

          {/* Right Content - Image with decorations */}
          <div className="relative hidden lg:flex justify-center items-center">
            {/* Outer glow effect */}
            <div className="absolute w-72 h-72 xl:w-80 xl:h-80 rounded-full bg-primary/5 blur-3xl" />

            <div className="relative group">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border border-primary/20 scale-[1.15] animate-pulse" />
              <div className="absolute inset-0 rounded-full border border-primary/10 scale-[1.25]" />
              <div className="absolute inset-0 rounded-full border border-primary/5 scale-[1.35]" />

              {/* Decorative dots around the circle */}
              <DecorativeDots
                rows={3}
                cols={3}
                className="absolute -top-8 -right-8 opacity-40 z-10"
              />
              <DecorativeDots
                rows={2}
                cols={2}
                className="absolute -bottom-6 -left-6 opacity-30 z-10"
              />

              {/* Profile Image Container */}
              <div className="relative w-56 h-56 xl:w-64 xl:h-64 rounded-full overflow-hidden border-4 border-primary/40 shadow-2xl shadow-primary/20 group-hover:border-primary/60 transition-all duration-500">
                <img
                  src="/pp.jpeg"
                  alt="Ram Krishna Yadav"
                  className="w-full h-full object-cover object-top grayscale-[30%] hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-500" />
              </div>

              {/* Status indicator */}
              <div className="absolute bottom-4 right-4 w-5 h-5 bg-green-500 rounded-full border-4 border-background animate-pulse" title="Available for work" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
