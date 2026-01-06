import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/shared/SectionHeader";
import SkillCategory from "@/components/shared/SkillCategory";
import { DecorativeDots, DecorativeSquare } from "@/components/shared/DecorativeElements";

const skillsData = [
  { title: "Languages", skills: ["JavaScript", "TypeScript", "Python", "Java", "C++"] },
  { title: "Databases", skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"] },
  { title: "Tools", skills: ["Git", "Docker", "VS Code", "Postman", "Figma"] },
  { title: "Frameworks", skills: ["React", "Express.js", "Next.js", "Tailwind", "Bootstrap"] },
  { title: "Other", skills: ["REST APIs", "GraphQL", "CI/CD", "AWS", "Linux"] },
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
              <div className="space-y-4 text-muted-foreground">
                <p>Hello, I'm Ram Krishna!</p>
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
                  through my projects and open source contributions. When I'm not coding, 
                  you'll find me watching anime or exploring new tech blogs.
                </p>
                <p>
                  I'm always open to discussing product design work or partnership 
                  opportunities. Feel free to reach out!
                </p>
              </div>

              {/* Image placeholder */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="w-72 h-96 bg-secondary border border-border flex items-center justify-center">
                  <span className="text-muted-foreground text-8xl">🧑‍💻</span>
                </div>
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
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
