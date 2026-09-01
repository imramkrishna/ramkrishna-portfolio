import { Link } from "react-router-dom";
import SectionHeader from "../shared/SectionHeader";
import { DecorativeDots, DecorativeSquare } from "../shared/DecorativeElements";

const AboutPreview = () => {
  return (
    <section className="py-16 relative">
      {/* Decorative elements */}
      <DecorativeDots
        rows={5}
        cols={5}
        className="absolute top-20 right-8 opacity-30 hidden lg:grid"
      />

      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <SectionHeader title="about-me" />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-4 text-muted-foreground order-2 lg:order-1">
            <p>
              Hello, I'm Ram Krishna!
            </p>
            <p>
              I'm a Full Stack Software Engineer at{" "}
              <a href="https://venyxtech.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Venyx Technology International
              </a>
              . I write scalable code for local and international businesses, review codebases, and manage the software development lifecycle. I specialize in scalable web application development and can develop responsive websites from scratch, turning them into modern user-friendly web experiences.
            </p>
            <p>
              Transforming my creativity and knowledge into a website has been
              my passion for over a year. I have been helping various clients
              to establish their presence online. I always strive to learn about
              the newest technologies and frameworks...
            </p>
            <Link
              to="/about"
              className="inline-block text-foreground hover:text-primary transition-colors mt-4"
            >
              Read more -&gt;
            </Link>
          </div>

          {/* Profile Image */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative group">
              {/* Decorative elements */}
              <DecorativeSquare className="absolute -top-4 -left-4 opacity-40 z-10" />
              <DecorativeDots
                rows={3}
                cols={3}
                className="absolute -bottom-4 -right-4 opacity-50 z-10"
              />

              {/* Image Container */}
              <div className="relative">
                {/* Background frame */}
                <div className="absolute inset-0 border-2 border-primary translate-x-3 translate-y-3 z-0" />

                {/* Main Image */}
                <div className="relative z-10 w-56 h-64 sm:w-64 sm:h-72 md:w-72 md:h-80 lg:w-64 lg:h-80 xl:w-72 xl:h-96 overflow-hidden border-2 border-primary/50 bg-background">
                  <img
                    src="/pp.jpeg"
                    alt="Ram Krishna Yadav"
                    className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-50 group-hover:opacity-20 transition-opacity duration-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
