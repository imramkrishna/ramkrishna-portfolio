import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/shared/SectionHeader";
import SkillCategory from "@/components/shared/SkillCategory";
import { DecorativeDots, DecorativeSquare } from "@/components/shared/DecorativeElements";
import TerminalAnimation from "@/components/shared/TerminalAnimation";

const skillsData = [
  { title: "Languages", skills: ["JavaScript", "TypeScript", "Python", "Node.js"] },
  { title: "Databases", skills: ["MongoDB", "PostgreSQL", "MySQL"] },
  { title: "Tools", skills: ["Git", "Vercel", "Azure", "VPS Hosting", "Figma"] },
  { title: "Frameworks", skills: ["React", "Express.js", "Next.js", "Tailwind", "Redux", "Bootstrap"] },
  { title: "Other", skills: ["REST APIs", "GraphQL", "JWT", "OAuth", "WebSockets", "SEO"] },
];

const funFacts = [
  "I like winter more than summer",
  "My favorite movie is The Dark Knight",
  "I think mass of an mass doesn't mass",
  "My favorite anime is One Piece",
  "I prefer backend but also enjoy frontend work",
  "I love exploring new technologies and frameworks",
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Sidebar />

      <main className="pt-24 md:pl-16 lg:pl-24 pb-16">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 relative">
          {/* Decorative elements */}
          <DecorativeDots
            rows={5}
            cols={5}
            className="absolute top-40 right-8 opacity-30 hidden lg:grid"
          />
          <DecorativeSquare className="absolute bottom-40 left-8 opacity-20 hidden lg:block" />

          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold mb-4">
              <span className="text-primary">/</span>about-me
            </h1>
            <p className="text-muted-foreground">Who am I?</p>
          </div>

          {/* About Section */}
          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Text Content */}
              <div className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Who am I?</h3>
                  <p>
                    Hello, I'm Ram Krishna Yadav! I'm a Full Stack Engineer specializing in scalable web application
                    development. I specialize in the MERN stack (MongoDB, Express.js, React, and Node.js).
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Experience</h3>
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="font-medium text-foreground">MERN Stack Intern</h4>
                    <p className="text-sm text-primary">Blue Fox Pvt. Ltd. | Oct 2024 - Dec 2024</p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                      <li>Built responsive, SEO-optimized SaaS applications for hotel, e-commerce, and restaurant systems</li>
                      <li>Developed RESTful APIs, integrated third-party services, and implemented JWT/OAuth</li>
                      <li>Optimized performance through code refactoring, caching, and database tuning</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Education</h3>
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="font-medium text-foreground">Bachelor in Computer Engineering</h4>
                    <p className="text-sm text-primary">Tribhuvan University, IOE Purwanchal Campus | 2024 - 2028</p>
                    <p className="text-sm mt-1">Currently pursuing bachelors while working.</p>
                  </div>
                </div>
              </div>

              {/* Terminal Animation */}
              <div className="relative flex justify-center lg:justify-end">
                <TerminalAnimation />
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-16">
            <SectionHeader title="skills" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {skillsData.map((category) => (
                <SkillCategory
                  key={category.title}
                  title={category.title}
                  skills={category.skills}
                />
              ))}
            </div>
          </section>

          {/* Fun Facts */}
          <section>
            <SectionHeader title="my-fun-facts" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {funFacts.map((fact, index) => (
                <div key={index} className="border border-border p-4">
                  <p className="text-muted-foreground">
                    <span className="text-primary mr-2">{index + 1}.</span>
                    {fact}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main >

      <Footer />
    </div >
  );
};

export default About;
