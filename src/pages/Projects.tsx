import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/shared/SectionHeader";
import ProjectCard from "@/components/shared/ProjectCard";
import { DecorativeDots } from "@/components/shared/DecorativeElements";

const completeApps = [
  {
    title: "CRM System - Medical Equipment Distribution",
    description: "Medical equipment distribution platform with multi-role authentication, role-based access control, real-time inventory tracking, and automated reorder alerts.",
    image: "/medcrm.png",
    technologies: ["Next.js", "TypeScript", "Express.js", "PostgreSQL", "Prisma", "Redux"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "WMS - Warehouse Management System",
    description: "Comprehensive system with real-time inventory tracking, order management, multi-warehouse support, and live analytics dashboard.",
    image: "/wms.png",
    technologies: ["React", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "XCodeGen - AI Assistant",
    description: "AI-powered developer tool featuring chat mode, project structure generation, and custom file system modification using multiple LLMs.",
    image: "/xcodegen.png",
    technologies: ["React", "Node.js", "MongoDB", "TypeScript", "Llama", "Gemini", "Mistral"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "ChessOnline - Multiplayer Chess",
    description: "Real-time multiplayer chess game with private rooms, drag-and-drop gameplay, move validation, and live score tracking.",
    image: "/chess.png",
    technologies: ["React", "Node.js", "WebSocket", "MongoDB", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "ChatConnect - Realtime Chat App",
    description: "Scalable real-time messaging application with bi-directional communication, low latency, and cross-device compatibility.",
    image: "/placeholder.svg",
    technologies: ["React", "Node.js", "WebSocket", "Express"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const smallProjects = [];

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
