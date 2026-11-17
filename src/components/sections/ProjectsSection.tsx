import { Github } from "lucide-react";
import ActionButton from "@/components/shared/ActionButton";
import Reveal from "@/components/shared/Reveal";
import { projects } from "@/data/profile";
import { cn } from "@/lib/utils";

const ProjectsSection = ({ number = "04", className = "" }: { number?: string; className?: string }) => (
  <section
    id="projects"
    aria-labelledby="projects-title"
    className={cn("ds-section scroll-mt-24 px-4 py-14 sm:scroll-mt-28 sm:px-8 sm:py-20 md:py-28 lg:px-14", className)}
  >
    <div className="mx-auto max-w-site">
      <div className="flex flex-col gap-4 sm:gap-6 md:flex-row md:items-end md:justify-between">
        <Reveal>
          <p className="ds-label text-zinc-400">
            {number} <span className="mx-2 text-zinc-300">/</span> Selected Work
          </p>
          <h2
            id="projects-title"
            className="mt-4 max-w-2xl text-3xl font-semibold leading-[1.05] tracking-[-0.05em] text-zinc-900 sm:mt-6 sm:text-4xl md:text-5xl"
          >
            Systems I've designed, built and shipped.
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="max-w-sm text-base font-light leading-relaxed text-zinc-500 sm:text-[17px]">
            RAG platforms, self-hosted PaaS infrastructure and real-time multiplayer — end to end.
          </p>
        </Reveal>
      </div>

      <ul className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((p, i) => {
          const primaryIsGithub = p.href.includes("github.com");
          return (
            <Reveal
              as="li"
              key={p.title}
              delay={i * 100}
              className="group flex min-w-0 flex-col overflow-hidden rounded-[2rem] border border-zinc-100 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)]"
            >
              {/* Top: image with gradient-to-black overlay */}
              <div className="relative h-52 overflow-hidden bg-black sm:h-64">
                <img
                  src={p.image}
                  alt={`${p.title} preview`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-expo group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90" />
                <span className="glass absolute left-4 top-4 rounded-full px-3 py-1 font-mono text-[11px] text-white/90">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="absolute inset-x-5 bottom-4 text-white sm:inset-x-6 sm:bottom-5">
                  <h3 className="text-2xl font-semibold tracking-[-0.05em] sm:text-3xl">{p.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{p.subtitle}</p>
                </div>
              </div>

              {/* Bottom: details */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <ul className="flex flex-wrap gap-1.5" aria-label={`${p.title} tech stack`}>
                  {p.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-[11px] font-medium text-zinc-600"
                    >
                      {s}
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex-1 space-y-2.5 sm:mt-6 sm:space-y-3">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-sm font-light leading-relaxed text-zinc-500">
                      <span className="mt-2 h-1 w-1 flex-none rounded-full bg-emerald-400" aria-hidden="true" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-col gap-3 sm:mt-8">
                  <ActionButton
                    href={p.href}
                    tone="dark"
                    icon={primaryIsGithub ? Github : undefined}
                    className="w-full"
                  >
                    {primaryIsGithub ? "View on GitHub" : "Visit live site"}
                  </ActionButton>
                  {p.githubHref && (
                    <a
                      href={p.githubHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full py-2 text-sm text-zinc-500 transition-colors duration-300 hover:bg-zinc-100 hover:text-zinc-900"
                    >
                      <Github size={15} className="flex-none" aria-hidden="true" />
                      <span className="truncate">{p.githubLabel}</span>
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          );
        })}
      </ul>
    </div>
  </section>
);

export default ProjectsSection;
