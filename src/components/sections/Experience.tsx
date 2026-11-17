import { Check, GraduationCap, Briefcase } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import { experience } from "@/data/profile";
import { cn } from "@/lib/utils";

const highlights = [
  { title: "Self-hosted infrastructure", text: "Docker, Nginx, VPS and AWS EC2 deployments on bare-metal servers." },
  { title: "Real-time systems", text: "WebSocket-based, event-driven features built for production." },
  { title: "AI-powered apps", text: "RAG pipelines with vector search, model routing and MCP tooling." },
  { title: "End-to-end delivery", text: "From ingestion and APIs to deployment, backups and observability." },
];

const Tok = ({ c, children }: { c: string; children: React.ReactNode }) => <span className={c}>{children}</span>;

const CodeWindow = () => (
  <div className="relative mx-auto w-full max-w-xl py-4 sm:py-6 lg:py-10" aria-hidden="true">
    <div className="tilt-3d relative rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-800/80 to-zinc-950/90 shadow-[0_60px_120px_-30px_rgba(0,0,0,0.9)]">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3 sm:px-5 sm:py-4">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20 sm:h-3 sm:w-3" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20 sm:h-3 sm:w-3" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80 sm:h-3 sm:w-3" />
        <span className="ml-2 truncate font-mono text-[11px] text-white/40 sm:ml-3 sm:text-xs">
          ~/ramkrishna/profile.ts
        </span>
      </div>

      <div className="space-y-2.5 p-3.5 font-mono text-[11px] leading-relaxed sm:space-y-3 sm:p-6 sm:text-[12.5px]">
        <div className="glass overflow-x-auto rounded-2xl p-3 sm:p-4">
          <p>
            <Tok c="text-white/40">const</Tok> <Tok c="text-emerald-300">engineer</Tok> <Tok c="text-white/40">=</Tok> {"{"}
          </p>
          <p className="pl-3 sm:pl-4">
            name: <Tok c="text-zinc-300">"Ram Krishna Yadav"</Tok>,
          </p>
          <p className="pl-3 sm:pl-4">
            role: <Tok c="text-zinc-300">"Full Stack & AI Systems"</Tok>,
          </p>
          <p className="pl-3 sm:pl-4">
            based: <Tok c="text-zinc-300">"Nepal"</Tok>,
          </p>
          <p>{"};"}</p>
        </div>

        <div className="glass overflow-x-auto rounded-2xl p-3 sm:p-4">
          <p>
            <Tok c="text-white/40">await</Tok> <Tok c="text-emerald-300">salesient</Tok>.retrieve({"{"}
          </p>
          <p className="pl-3 sm:pl-4">
            dims: <Tok c="text-emerald-300">768</Tok>, topK, threshold,
          </p>
          <p className="pl-3 sm:pl-4">
            tools: <Tok c="text-zinc-300">"mcp:120+"</Tok>
          </p>
          <p>{"});"}</p>
        </div>

        <div className="glass flex flex-wrap items-center justify-between gap-2 rounded-2xl p-3 sm:p-4">
          <p>
            <Tok c="text-white/40">$</Tok> zyotra deploy <Tok c="text-zinc-400">--ssh --tls</Tok>
          </p>
          <span className="text-emerald-300">✓ live</span>
        </div>
      </div>
    </div>

    {/* Bouncing status tag */}
    <div className="absolute -bottom-2 right-2 animate-bounce sm:right-6">
      <div className="glass flex items-center gap-2 rounded-full bg-zinc-900/60 px-3.5 py-1.5 text-xs text-white shadow-xl sm:px-4 sm:py-2 sm:text-sm">
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        Open to work
      </div>
    </div>
  </div>
);

const Experience = ({ number = "03", className = "" }: { number?: string; className?: string }) => (
  <section
    aria-labelledby="experience-title"
    className={cn("ds-section ds-dark-zinc px-4 py-14 sm:px-8 sm:py-20 md:py-28 lg:px-14", className)}
  >
    <div className="grid-lines" aria-hidden="true" />
    <div className="grain" aria-hidden="true" />

    <div className="relative z-[2] mx-auto max-w-site">
      <div className="grid grid-cols-1 items-center gap-12 sm:gap-16 lg:grid-cols-2 lg:gap-20">
        <div className="min-w-0">
          <Reveal>
            <p className="ds-label text-white/40">
              {number} <span className="mx-2 text-white/20">/</span> Experience
            </p>
            <h2
              id="experience-title"
              className="mt-4 text-3xl font-semibold leading-[1.05] tracking-[-0.05em] sm:mt-6 sm:text-4xl md:text-5xl"
            >
              Experience &amp; education.
            </h2>
            <p className="mt-4 max-w-lg text-base font-light leading-relaxed text-white/50 sm:mt-5 sm:text-[17px]">
              Shipping production software while studying the systems underneath it.
            </p>
          </Reveal>

          <ol className="mt-8 space-y-3 sm:mt-10">
            {experience.map((item, i) => {
              const Icon = i === 0 ? Briefcase : GraduationCap;
              return (
                <Reveal
                  as="li"
                  key={item.title}
                  delay={100 + i * 100}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors duration-300 hover:bg-white/[0.06] sm:p-6"
                >
                  <div className="flex gap-3.5 sm:gap-5">
                    <span className="font-mono text-sm text-emerald-300">{String(i + 1).padStart(2, "0")}</span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
                        <h3 className="text-base font-semibold tracking-[-0.03em] sm:text-lg">{item.title}</h3>
                        <span className="ds-label pt-1 text-white/40 sm:pt-1.5">{item.period}</span>
                      </div>
                      <p className="mt-1 flex items-start gap-2 text-sm text-white/60">
                        <Icon size={14} className="mt-1 flex-none" aria-hidden="true" />
                        <span>{item.org}</span>
                      </p>
                      <ul className="mt-3.5 space-y-2 sm:mt-4">
                        {item.points.map((p) => (
                          <li key={p} className="flex gap-3 text-sm font-light leading-relaxed text-white/50">
                            <span className="mt-2 h-1 w-1 flex-none rounded-full bg-white/30" aria-hidden="true" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>

        <Reveal delay={150} className="min-w-0">
          <CodeWindow />
        </Reveal>
      </div>

      {/* Why work with me */}
      <div className="mt-14 border-t border-white/10 pt-10 sm:mt-20 sm:pt-14">
        <Reveal>
          <h3 className="text-2xl font-semibold tracking-[-0.04em] md:text-3xl">Why work with me</h3>
        </Reveal>
        <ul className="mt-6 grid grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <Reveal
              as="li"
              key={h.title}
              delay={i * 80}
              className="glass rounded-3xl p-5 transition-colors duration-300 hover:bg-white/10 sm:p-6"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
                <Check size={16} strokeWidth={2.5} aria-hidden="true" />
              </span>
              <h4 className="mt-4 text-base font-semibold tracking-[-0.02em] sm:mt-5">{h.title}</h4>
              <p className="mt-2 text-sm font-light leading-relaxed text-white/50">{h.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Experience;
