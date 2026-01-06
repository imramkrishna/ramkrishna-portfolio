import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/shared/SectionHeader";
import ProjectCard from "@/components/shared/ProjectCard";
import { DecorativeDots } from "@/components/shared/DecorativeElements";

const completeApps = [
  {
    title: "ChertNodes",
    description: "Productivity app for developers with real-time collaboration and task management features.",
    image: "/placeholder.svg",
    technologies: ["React", "Express", "MongoDB", "Node.js"],
    liveUrl: "#",
    githubUrl: "https://github.com/imramkrishna",
  },
  {
    title: "ProtectX",
    description: "Discord bot with multiple moderation and utility features for community management.",
    image: "/placeholder.svg",
    technologies: ["Python", "Discord.py", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "https://github.com/imramkrishna",
  },
  {
    title: "Kahoot Tracker",
    description: "Web application to track and analyze Kahoot game statistics and leaderboards.",
    image: "/placeholder.svg",
    technologies: ["React", "TypeScript", "Firebase"],
    liveUrl: "#",
    githubUrl: "https://github.com/imramkrishna",
  },
  {
    title: "SpaceX Explorer",
    description: "Browse SpaceX missions, rockets, and crew with detailed information and media galleries.",
    image: "/placeholder.svg",
    technologies: ["Next.js", "GraphQL", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "https://github.com/imramkrishna",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-featured online store with cart, checkout, and payment integration.",
    image: "/placeholder.svg",
    technologies: ["MERN Stack", "Stripe", "Redux"],
    liveUrl: "#",
    githubUrl: "https://github.com/imramkrishna",
  },
];

const smallProjects = [
  { title: "Bot boance", tech: "CSS Express Node.js", github: "https://github.com/imramkrishna" },
  { title: "UI/UX Portfolio", tech: "Figma React", github: "https://github.com/imramkrishna" },
  { title: "Crypto Dashboard", tech: "Vue.js Chart.js", github: "https://github.com/imramkrishna" },
  { title: "Weather App", tech: "React API", github: "https://github.com/imramkrishna" },
  { title: "Chat Application", tech: "Socket.io Node.js", github: "https://github.com/imramkrishna" },
  { title: "Blog Platform", tech: "Next.js MDX", github: "https://github.com/imramkrishna" },
];

const Projects = () => {
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
            className="absolute top-20 right-8 opacity-30 hidden lg:grid" 
          />
          
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold mb-4">
              <span className="text-primary">/</span>projects
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              List of my projects. Some are personal, some are for clients. 
              Feel free to explore and reach out if you have questions.
            </p>
          </div>

          {/* Complete Apps */}
          <section className="mb-16">
            <SectionHeader title="complete-apps" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {completeApps.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </section>

          {/* Small Projects */}
          <section>
            <SectionHeader title="small-projects" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {smallProjects.map((project) => (
                <div key={project.title} className="border border-border p-4 hover:border-primary transition-colors">
                  <p className="text-muted-foreground text-sm mb-2">{project.tech}</p>
                  <div className="flex items-center justify-between">
                    <h4 className="text-foreground font-medium">{project.title}</h4>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      GitHub →
                    </a>
                  </div>
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

export default Projects;
