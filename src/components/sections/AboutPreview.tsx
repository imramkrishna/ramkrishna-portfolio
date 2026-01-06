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
        <SectionHeader title="about-me" />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <div className="space-y-4 text-muted-foreground">
            <p>
              Hello, I'm Ram Krishna!
            </p>
            <p>
              I'm a Full Stack Engineer specializing in scalable web application 
              development. I can develop responsive websites from scratch and 
              turn them into modern user-friendly web experiences.
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

          {/* Image placeholder */}
          {/* <div className="relative flex justify-center lg:justify-end">
            <div className="w-64 h-80 bg-secondary border border-border flex items-center justify-center">
              <span className="text-muted-foreground text-6xl">🧑‍💻</span>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
