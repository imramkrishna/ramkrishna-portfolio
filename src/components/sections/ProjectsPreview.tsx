import { Link } from "react-router-dom";
import SectionHeader from "../shared/SectionHeader";
import ProjectCard from "../shared/ProjectCard";
import { DecorativeDots, DecorativeSquare } from "../shared/DecorativeElements";

const featuredProjects = [
  {
    title: "XCodeGen-AI",
    description: "AI assistant for software development with Developer Mode and Chat Mode. Features custom file system for direct LLM modifications.",
    image: "/placeholder.svg",
    technologies: ["React", "Node.js", "MongoDB", "Llama", "Gemini"],
    liveUrl: "#",
    githubUrl: "https://github.com/imramkrishna",
  },
  {
    title: "ChessOnline",
    description: "Real-time multiplayer chess platform with WebSocket technology, drag-and-drop functionality, and complete rule enforcement.",
    image: "/placeholder.svg",
    technologies: ["React", "WebSocket", "Node.js", "TypeScript"],
    liveUrl: "#",
    githubUrl: "https://github.com/imramkrishna",
  },
  {
    title: "WMS System",
    description: "Warehouse management system with real-time inventory tracking, order management, and role-based access control.",
    image: "/placeholder.svg",
    technologies: ["React", "PostgreSQL", "Node.js", "JWT"],
    liveUrl: "#",
    githubUrl: "https://github.com/imramkrishna",
  },
];

const smallProjects = [
  { title: "Games Hub", tech: "Next.js Canvas TypeScript" },
  { title: "ChatConnect", tech: "React WebSocket Express" },
  { title: "Portfolio Site", tech: "React Tailwind TypeScript" },
];

const ProjectsPreview = () => {
  return (
    <section className="py-16 relative">
      {/* Decorative elements */}
      <DecorativeDots 
        rows={5} 
        cols={5} 
        className="absolute top-20 right-8 opacity-30 hidden lg:grid" 
      />
      <DecorativeSquare className="absolute bottom-20 left-8 opacity-20 hidden lg:block" />
      
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Header with view all link */}
        <div className="flex items-center justify-between mb-8">
          <SectionHeader title="projects" showLine={true} className="mb-0 flex-1" />
          <Link 
            to="/projects" 
            className="text-foreground hover:text-primary transition-colors whitespace-nowrap ml-4"
          >
            View all ~~&gt;
          </Link>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        {/* Small Projects */}
        <div className="border border-border p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">
              <span className="text-primary">#</span>small-projects
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {smallProjects.map((project) => (
              <div key={project.title} className="border border-border p-4">
                <p className="text-muted-foreground text-sm mb-2">{project.tech}</p>
                <h4 className="text-foreground font-medium">{project.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
