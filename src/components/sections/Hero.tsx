import { DecorativeDots, DecorativeSquare } from "../shared/DecorativeElements";
import profileImage from "@/assets/profile-image.jpg";

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center py-16 relative">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
              Ram Krishna is a{" "}
              <span className="text-primary">Full Stack Engineer</span> and{" "}
              <span className="text-primary">MERN specialist</span>
            </h1>
            <p className="text-muted-foreground text-base max-w-lg">
              He crafts scalable web applications with modern technologies, 
              RESTful APIs, and cloud infrastructure. Experienced in end-to-end 
              application lifecycle from development to production deployment.
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
            
            {/* Profile image */}
            <div className="relative">
              <div className="w-64 h-80 md:w-72 md:h-96 bg-gradient-to-b from-primary/20 to-transparent border border-border flex items-end justify-center overflow-hidden">
                <img 
                  src={profileImage} 
                  alt="Ram Krishna" 
                  className="w-full h-full object-cover object-top mix-blend-luminosity hover:mix-blend-normal transition-all duration-300"
                  style={{ 
                    filter: 'contrast(1.1)',
                    backgroundColor: 'transparent'
                  }}
                />
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
