import { Link } from "react-router-dom";
import SectionHeader from "../shared/SectionHeader";
import ProjectCard from "../shared/ProjectCard";
import { DecorativeDots, DecorativeSquare } from "../shared/DecorativeElements";

const featuredProjects = [
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
];

const smallProjects = [
  { title: "Bot boance", tech: "CSS Express Node.js" },
  { title: "UI/UX Portfolio", tech: "Figma React" },
  { title: "Crypto Dashboard", tech: "Vue.js Chart.js" },
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
