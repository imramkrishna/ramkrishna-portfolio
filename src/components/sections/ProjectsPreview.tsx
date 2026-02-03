import { Link } from "react-router-dom";
import SectionHeader from "../shared/SectionHeader";
import ProjectCard from "../shared/ProjectCard";
import { DecorativeDots, DecorativeSquare } from "../shared/DecorativeElements";

const featuredProjects = [
  {
    title: "thready-js",
    description: "Open-source NPM library with 10k+ downloads. Type-safe thread-pool abstraction for Web Workers and Node.js with zero dependencies.",
    image: "/thready.png",
    technologies: ["TypeScript", "NPM Package", "Web Workers"],
    liveUrl: "https://www.npmjs.com/package/thready-js",
    githubUrl: "https://github.com/imramkrishna/thready-js",
  },
  {
    title: "ChessOnline",
    description: "Real-time multiplayer chess game with private rooms, drag-and-drop gameplay, move validation, and live score tracking.",
    image: "/chess.png",
    technologies: ["React", "Node.js", "WebSocket", "MongoDB"],
    liveUrl: "https://chess-online-five.vercel.app/",
    githubUrl: "https://github.com/imramkrishna/ChessOnline",
  },
  {
    title: "CRM System",
    description: "Medical equipment distribution platform with multi-role authentication, role-based access control, and real-time inventory tracking.",
    image: "/medcrm.png",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    liveUrl: "https://crm-system-drab.vercel.app/",
    githubUrl: "https://github.com/imramkrishna/MedCRM",
  },
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
