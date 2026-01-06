import { Link } from "react-router-dom";
import SectionHeader from "../shared/SectionHeader";
import { DecorativeDots } from "../shared/DecorativeElements";

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
        {/* Header with read more link */}
        <div className="flex items-center justify-between mb-8">
          <SectionHeader title="about-me" showLine={true} className="mb-0 flex-1" />
          <Link 
            to="/about" 
            className="text-foreground hover:text-primary transition-colors whitespace-nowrap ml-4"
          >
            Read more ~~&gt;
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <div className="space-y-4 text-muted-foreground">
            <p>
              Hello, I'm Ram Krishna!
            </p>
            <p>
              I'm a self-taught full stack developer based in India. I specialize in 
              building web applications using the MERN stack (MongoDB, Express.js, 
              React, and Node.js).
            </p>
            <p>
              I started my journey as a developer exploring various technologies and 
              frameworks. Now I work on creating responsive and user-friendly web 
              applications that solve real problems.
            </p>
            <p>
              I love learning new technologies and sharing my knowledge with others 
              through my projects and open source contributions.
            </p>
          </div>

          {/* Image placeholder */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="w-64 h-80 bg-secondary border border-border flex items-center justify-center">
              <span className="text-muted-foreground text-6xl">🧑‍💻</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
