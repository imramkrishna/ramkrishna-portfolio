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
  <div className="relative mx-auto w-full max-w-xl py-6 lg:py-10" aria-hidden="true">
    <div className="tilt-3d relative rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-800/80 to-zinc-950/90 shadow-[0_60px_120px_-30px_rgba(0,0,0,0.9)]">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
        <span className="h-3 w-3 rounded-full bg-white/20" />
        <span className="h-3 w-3 rounded-full bg-white/20" />
        <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
        <span className="ml-3 font-mono text-xs text-white/40">~/ramkrishna/profile.ts</span>
      </div>

      <div className="space-y-3 p-5 font-mono text-[12.5px] leading-relaxed sm:p-6">
        <div className="glass rounded-2xl p-4">
          <p>
            <Tok c="text-white/40">const</Tok> <Tok c="text-emerald-300">engineer</Tok> <Tok c="text-white/40">=</Tok> {"{"}
          </p>
          <p className="pl-4">
            name: <Tok c="text-zinc-300">"Ram Krishna Yadav"</Tok>,
          </p>
          <p className="pl-4">
            role: <Tok c="text-zinc-300">"Full Stack & AI Systems"</Tok>,
          </p>
          <p className="pl-4">
            based: <Tok c="text-zinc-300">"Nepal"</Tok>,
          </p>
          <p>{"};"}</p>
        </div>

        <div className="glass rounded-2xl p-4">
          <p>
            <Tok c="text-white/40">await</Tok> <Tok c="text-emerald-300">salesient</Tok>.retrieve({"{"}
          </p>
          <p className="pl-4">
            dims: <Tok c="text-emerald-300">768</Tok>, topK, threshold,
          </p>
          <p className="pl-4">
            tools: <Tok c="text-zinc-300">"mcp:120+"</Tok>
          </p>
          <p>{"});"}</p>
        </div>

        <div className="glass flex items-center justify-between rounded-2xl p-4">
          <p>
            <Tok c="text-white/40">$</Tok> zyotra deploy <Tok c="text-zinc-400">--ssh --tls</Tok>
          </p>
          <span className="text-emerald-300">✓ live</span>
        </div>
      </div>
    </div>

    {/* Bouncing status tag */}
    <div className="absolute -bottom-2 right-2 animate-bounce sm:right-6">
      <div className="glass flex items-center gap-2 rounded-full bg-zinc-900/60 px-4 py-2 text-sm text-white shadow-xl">
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        Open to work
      </div>
    </div>
  </div>
);

const Experience = ({ number = "03", className = "" }: { number?: string; className?: string }) => (
  <section
    aria-labelledby="experience-title"
    className={cn("ds-section ds-dark-zinc px-4 py-20 sm:px-8 md:py-28 lg:px-14", className)}
  >
    <div className="grid-lines" aria-hidden="true" />
    <div className="grain" aria-hidden="true" />

    <div className="relative z-[2] mx-auto max-w-site">
      <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <p className="ds-label text-white/40">
              {number} <span className="mx-2 text-white/20">/</span> Experience
            </p>
            <h2
              id="experience-title"
              className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.05em] md:text-5xl"
            >
              Experience &amp; education.
            </h2>
            <p className="mt-5 max-w-lg text-[17px] font-light leading-relaxed text-white/50">
              Shipping production software while studying the systems underneath it.
            </p>
          </Reveal>

          <ol className="mt-10 space-y-3">
            {experience.map((item, i) => {
              const Icon = i === 0 ? Briefcase : GraduationCap;
              return (
                <Reveal
                  as="li"
                  key={item.title}
                  delay={100 + i * 100}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:bg-white/[0.06]"
                >
                  <div className="flex gap-5">
                    <span className="font-mono text-sm text-emerald-300">{String(i + 1).padStart(2, "0")}</span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
                        <h3 className="text-lg font-semibold tracking-[-0.03em]">{item.title}</h3>
                        <span className="ds-label pt-1.5 text-white/40">{item.period}</span>
                      </div>
                      <p className="mt-1 flex items-center gap-2 text-sm text-white/60">
                        <Icon size={14} aria-hidden="true" />
                        {item.org}
                      </p>
                      <ul className="mt-4 space-y-2">
                        {item.points.map((p) => (
                          <li key={p} className="flex gap-3 text-sm font-light leading-relaxed text-white/50">
                            <span className="mt-2 h-1 w-1 flex-none rounded-full bg-white/30" aria-hidden="true" />
                            {p}
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

        <Reveal delay={150}>
          <CodeWindow />
        </Reveal>
      </div>

      {/* Why work with me */}
      <div className="mt-20 border-t border-white/10 pt-14">
        <Reveal>
          <h3 className="text-2xl font-semibold tracking-[-0.04em] md:text-3xl">Why work with me</h3>
        </Reveal>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <Reveal
              as="li"
              key={h.title}
              delay={i * 80}
              className="glass rounded-3xl p-6 transition-colors duration-300 hover:bg-white/10"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
                <Check size={16} strokeWidth={2.5} aria-hidden="true" />
              </span>
              <h4 className="mt-5 text-base font-semibold tracking-[-0.02em]">{h.title}</h4>
              <p className="mt-2 text-sm font-light leading-relaxed text-white/50">{h.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Experience;
