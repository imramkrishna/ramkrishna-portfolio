import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/shared/SectionHeader";
import SkillCategory from "@/components/shared/SkillCategory";
import { DecorativeDots, DecorativeSquare } from "@/components/shared/DecorativeElements";

const skillsData = [
  { title: "Languages", skills: ["JavaScript", "TypeScript", "Python", "C++"] },
  { title: "Frontend", skills: ["React", "Redux Toolkit", "Tailwind CSS", "HTML5"] },
  { title: "Backend", skills: ["Node.js", "Express.js", "Elysia.js", "REST APIs", "JWT", "WebSockets"] },
  { title: "Databases", skills: ["PostgreSQL", "MongoDB", "MySQL", "ORMs"] },
  { title: "Systems & Tools", skills: ["Worker Threads", "Event-Driven", "Docker", "Git", "VPS Deployment", "Jest Testing", "npm"] },
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
                    Hello, I'm Ram Krishna Yadav! Full Stack Software Developer and{" "}
                    <a
                      href="https://venyxtech.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      CTO at Venyx Technology International
                    </a>
                    . I work as a CTO and software engineer, writing scalable code for local and international businesses, reviewing codebases, and managing the full software development lifecycle. I have strong hands-on experience building real-time and production-grade web systems. Creator of an open-source JavaScript thread-pool library with 6,000+ npm downloads, demonstrating solid understanding of concurrency and worker architectures.
                  </p>
                  <p className="mt-2">
                    Experienced in designing scalable REST APIs, WebSocket-based real-time systems, and role-based platforms using TypeScript, Node.js, and PostgreSQL.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Experience</h3>

                  <div className="border-l-2 border-primary pl-4 mb-4">
                    <h4 className="font-medium text-foreground">CTO &amp; Software Engineer</h4>
                    <p className="text-sm text-primary">
                      <a href="https://venyxtech.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Venyx Technology International</a> | Feb 2025 - Present
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                      <li>Write scalable code for local and international businesses across web platforms</li>
                      <li>Review codebases to improve quality, performance, and maintainability</li>
                      <li>Manage end-to-end software development from planning to delivery</li>
                    </ul>
                  </div>

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

              {/* Profile Image */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative group">
                  {/* Decorative elements */}
                  <DecorativeDots
                    rows={4}
                    cols={4}
                    className="absolute -top-4 -right-4 opacity-50 z-10"
                  />
                  <DecorativeSquare className="absolute -bottom-4 -left-4 opacity-30 z-10" />

                  {/* Image Container */}
                  <div className="relative">
                    {/* Background frame */}
                    <div className="absolute inset-0 border-2 border-primary translate-x-4 translate-y-4 z-0" />

                    {/* Main Image */}
                    <div className="relative z-10 w-64 h-72 sm:w-72 sm:h-80 md:w-80 md:h-96 lg:w-72 lg:h-80 xl:w-80 xl:h-96 overflow-hidden border-2 border-primary/50 bg-background">
                      <img
                        src="/pp.jpeg"
                        alt="Ram Krishna Yadav"
                        className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-50 group-hover:opacity-20 transition-opacity duration-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section>
            <SectionHeader title="skills" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {skillsData.map((category) => (
                <SkillCategory
                  key={category.title}
                  title={category.title}
                  skills={category.skills}
                />
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
