import { ArrowUpRight } from "lucide-react";
import Window from "@/components/shared/Window";
import { projects } from "@/data/profile";

const offsets = ["", "lg:mt-6", "lg:mt-12"];

const ProjectsSection = ({ number = "04", className = "" }: { number?: string; className?: string }) => (
  <section
    aria-labelledby="projects-title"
    className={`bg-[var(--rd-teal)] border-2 border-black shadow-[var(--rd-shadow)] p-5 sm:p-8 ${className}`}
  >
    <div className="flex flex-wrap items-center justify-between gap-4 mb-6 sm:mb-8">
      <div className="flex items-baseline gap-4">
        <span className="rd-num text-white">{number}</span>
        <h2
          id="projects-title"
          className="rd-disp rd-shadow-text text-white text-[clamp(2rem,4vw,3.1rem)]"
        >
          Featured Projects &amp; Systems
        </h2>
      </div>
      <span className="bg-white border-2 border-black px-3.5 py-1 font-mono text-sm font-semibold">
        {projects.length} PROJECTS
      </span>
    </div>

    <div className="grid gap-6 lg:grid-cols-3 items-start">
      {projects.map((project, idx) => (
        <Window
          key={project.title}
          title={project.winTitle}
          as="article"
          className={offsets[idx] || ""}
        >
          <div className="rd-well p-5 flex flex-col gap-4">
            <div className="flex items-start justify-between gap-3 border-b-2 border-dotted border-[#808080] pb-3">
              <div>
                <h3 className="rd-disp text-2xl sm:text-3xl">{project.title}</h3>
                <p className="text-sm font-semibold text-[var(--rd-purple)] mt-1">
                  {project.subtitle}
                </p>
              </div>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rd-btn !min-h-[36px] !px-3 !py-1 !text-sm flex-none"
                aria-label={`Open ${project.title}`}
              >
                <span>Open</span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="bg-[var(--rd-yellow)] border border-black px-2 py-0.5 font-mono text-xs font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>

            <ul className="space-y-2 text-[15px] leading-snug list-disc pl-5 marker:text-[var(--rd-purple)]">
              {project.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <div className="pt-2 border-t border-dotted border-[#808080] font-mono text-xs flex flex-wrap items-center gap-x-4 gap-y-1">
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rd-link break-all"
              >
                {project.linkLabel}
              </a>
              {project.githubHref && (
                <a
                  href={project.githubHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rd-link break-all"
                >
                  {project.githubLabel || "GitHub"}
                </a>
              )}
            </div>
          </div>
        </Window>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
