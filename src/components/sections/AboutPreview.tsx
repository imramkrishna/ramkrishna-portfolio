import { BrainCircuit, Code2, Database, Layers, Server, Sparkles } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import { skillsData } from "@/data/profile";
import { cn } from "@/lib/utils";

const icons = [Code2, BrainCircuit, Server, Database, Layers];

const capabilities = [
  ...skillsData.map((c, i) => ({ title: c.title, items: c.skills, icon: icons[i] ?? Layers })),
  {
    title: "Current Interests",
    items: ["ML Systems & Efficiency", "Inference Optimization", "Distributed Training", "Low-resource NLP"],
    icon: Sparkles,
  },
];

const analysis = [
  { label: "Infra cost reduction · Zyotra", value: "80%", width: "80%" },
  { label: "MCP services · Salesient", value: "120+", width: "92%" },
  { label: "Embedding dimensions · pgvector", value: "768", width: "68%" },
];

const statuses = [
  { label: "Salesient", state: "Live" },
  { label: "Zyotra", state: "Active" },
  { label: "ChessOnline", state: "Shipped" },
];

const AboutPreview = ({ id = "about", number = "02", className = "" }: { id?: string; number?: string; className?: string }) => (
  <section
    id={id}
    aria-labelledby={`${id}-title`}
    className={cn("ds-section scroll-mt-28 px-4 py-20 sm:px-8 md:py-28 lg:px-14", className)}
  >
    <div className="mx-auto grid max-w-site gap-14 lg:grid-cols-2 lg:gap-20">
      {/* Left: sticky header + capability grid */}
      <div className="lg:sticky lg:top-28 lg:self-start">
        <Reveal>
          <p className="ds-label text-zinc-400">
            {number} <span className="mx-2 text-zinc-300">/</span> About
          </p>
          <h2
            id={`${id}-title`}
            className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-zinc-900 md:text-5xl"
          >
            Building production AI pipelines and self-hosted cloud infrastructure.
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-7 max-w-xl space-y-4 text-[17px] font-light leading-relaxed text-zinc-500">
          <p>
            Hello, I'm Ram Krishna Yadav — a Computer Engineering undergraduate with a background in
            distributed infrastructure, real-time systems, and applied machine learning.
          </p>
          <p>
            I created <strong className="font-medium text-zinc-900">Salesient</strong>, a RAG
            platform over 768-dimensional pgvector embeddings with multi-provider LLM routing and MCP
            tool orchestration across 120+ services, and{" "}
            <strong className="font-medium text-zinc-900">Zyotra</strong>, a self-hosted PaaS for
            bare-metal servers that cuts infrastructure costs by up to 80%.
          </p>
        </Reveal>

        <ul className="mt-12 grid grid-cols-1 gap-x-8 gap-y-9 sm:grid-cols-2">
          {capabilities.map((c, i) => (
            <Reveal as="li" key={c.title} delay={120 + i * 60} className="flex gap-4">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-2xl border border-zinc-200 bg-white text-zinc-900 shadow-sm">
                <c.icon size={19} strokeWidth={1.75} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-[15px] font-semibold tracking-[-0.02em] text-zinc-900">{c.title}</h3>
                <p className="mt-1 text-sm font-light leading-relaxed text-zinc-500">{c.items.join(" · ")}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>

      {/* Right: large display card */}
      <Reveal delay={120} className="flex flex-col gap-3">
        <div className="group ds-section ds-dark aspect-[4/5] min-h-[520px] w-full shadow-[0_40px_80px_-40px_rgba(0,0,0,0.45)]">
          <img
            src="/pp.png"
            alt="Ram Krishna Yadav"
            loading="lazy"
            className="absolute inset-0 -z-10 h-full w-full object-cover object-top grayscale-[35%] transition-transform duration-700 ease-expo group-hover:scale-105"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-black/10 to-black/80" />
          <div className="grain" aria-hidden="true" />

          <div className="absolute left-5 top-5 z-[2] glass rounded-full px-3.5 py-1.5">
            <span className="ds-label text-white/90">Dharan · Nepal</span>
          </div>

          {/* Floating glass "System Analysis" */}
          <div className="absolute inset-x-4 bottom-4 z-[2] glass rounded-3xl p-5 text-white sm:inset-x-6 sm:bottom-6 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="ds-label text-white/50">System Analysis</p>
                <p className="mt-1.5 text-lg font-semibold tracking-[-0.03em]">Ram Krishna Yadav</p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                Available
              </span>
            </div>

            <div className="mt-5 space-y-3.5">
              {analysis.map((a) => (
                <div key={a.label}>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white/60">{a.label}</span>
                    <span className="font-mono text-white">{a.value}</span>
                  </div>
                  <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-300"
                      style={{ width: a.width }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <ul className="mt-5 grid grid-cols-3 gap-2 border-t border-white/10 pt-4">
              {statuses.map((s) => (
                <li key={s.label} className="min-w-0">
                  <p className="truncate text-xs text-white/50">{s.label}</p>
                  <p className="mt-1 flex items-center gap-1.5 text-sm font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                    {s.state}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-3xl border border-zinc-200/80 bg-white p-6">
            <p className="ds-label text-zinc-400">Education</p>
            <p className="mt-3 font-semibold tracking-[-0.03em] text-zinc-900">B.E. Computer Engineering</p>
            <p className="mt-1 text-sm font-light text-zinc-500">IOE Purwanchal Campus · 2024 – 2028</p>
          </div>
          <div className="rounded-3xl border border-zinc-200/80 bg-white p-6">
            <p className="ds-label text-zinc-400">Core Stack</p>
            <p className="mt-3 font-semibold tracking-[-0.03em] text-zinc-900">TypeScript · Python</p>
            <p className="mt-1 text-sm font-light text-zinc-500">Next.js, PostgreSQL, pgvector, Redis, Docker</p>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default AboutPreview;
