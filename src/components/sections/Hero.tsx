import { DecorativeDots, DecorativeSquare } from "../shared/DecorativeElements";

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center py-16 relative">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              Ram Krishna is a{" "}
              <span className="text-primary">Full Stack Developer</span> and{" "}
              <span className="text-primary">MERN specialist</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-lg">
              He crafts responsive websites and scalable web applications 
              with modern technologies and clean code.
            </p>
            <a
              href="/contacts"
              className="inline-block px-6 py-3 border border-primary text-foreground hover:bg-primary/10 transition-colors"
            >
              Contact me!!
            </a>
          </div>

          {/* Right Content - Image and decorations */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Decorative elements */}
            <DecorativeDots 
              rows={5} 
              cols={5} 
              className="absolute -top-8 -right-4 opacity-50" 
            />
            <DecorativeSquare className="absolute -bottom-4 -left-8 opacity-30" />
            
            {/* Profile image placeholder */}
            <div className="relative">
              <div className="w-64 h-80 md:w-80 md:h-96 bg-gradient-to-b from-primary/20 to-transparent border border-border flex items-end justify-center overflow-hidden">
                <div className="w-full h-full bg-secondary flex items-center justify-center">
                  <span className="text-muted-foreground text-6xl">👨‍💻</span>
                </div>
              </div>
              
              {/* Status badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-background border border-border">
                <div className="w-3 h-3 bg-primary" />
                <span className="text-muted-foreground text-sm whitespace-nowrap">
                  Currently working on{" "}
                  <span className="text-foreground">Portfolio</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
