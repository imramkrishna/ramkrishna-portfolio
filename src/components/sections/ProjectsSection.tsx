import { Github } from "lucide-react";
import ActionButton from "@/components/shared/ActionButton";
import Reveal from "@/components/shared/Reveal";
import { projects } from "@/data/profile";
import { cn } from "@/lib/utils";

const ProjectsSection = ({ number = "04", className = "" }: { number?: string; className?: string }) => (
  <section
    id="projects"
    aria-labelledby="projects-title"
    className={cn("ds-section scroll-mt-28 px-4 py-20 sm:px-8 md:py-28 lg:px-14", className)}
  >
    <div className="mx-auto max-w-site">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <Reveal>
          <p className="ds-label text-zinc-400">
            {number} <span className="mx-2 text-zinc-300">/</span> Selected Work
          </p>
          <h2
            id="projects-title"
            className="mt-6 max-w-2xl text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-zinc-900 md:text-5xl"
          >
            Systems I've designed, built and shipped.
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="max-w-sm text-[17px] font-light leading-relaxed text-zinc-500">
            RAG platforms, self-hosted PaaS infrastructure and real-time multiplayer — end to end.
          </p>
        </Reveal>
      </div>

      <ul className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((p, i) => {
          const primaryIsGithub = p.href.includes("github.com");
          return (
            <Reveal
              as="li"
              key={p.title}
              delay={i * 100}
              className="group flex flex-col overflow-hidden rounded-[2rem] border border-zinc-100 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)]"
            >
              {/* Top: image with gradient-to-black overlay */}
              <div className="relative h-64 overflow-hidden bg-black">
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
                <div className="absolute inset-x-6 bottom-5 text-white">
                  <h3 className="text-3xl font-semibold tracking-[-0.05em]">{p.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{p.subtitle}</p>
                </div>
              </div>

              {/* Bottom: details */}
              <div className="flex flex-1 flex-col p-6">
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

                <ul className="mt-6 flex-1 space-y-3">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-sm font-light leading-relaxed text-zinc-500">
                      <span className="mt-2 h-1 w-1 flex-none rounded-full bg-emerald-400" aria-hidden="true" />
                      {pt}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col gap-3">
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
                      <Github size={15} aria-hidden="true" />
                      {p.githubLabel}
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
