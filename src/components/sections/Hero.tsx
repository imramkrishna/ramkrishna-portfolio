import { ArrowDown, FileText, MapPin } from "lucide-react";
import ActionButton from "@/components/shared/ActionButton";

const stats = [
  { value: "120+", label: "MCP tool integrations orchestrated in Salesient" },
  { value: "80%", label: "Lower infra cost with Zyotra on bare-metal servers" },
  { value: "768-D", label: "pgvector embeddings powering semantic search" },
];

const Hero = () => (
  <section
    aria-labelledby="hero-title"
    className="ds-section ds-dark flex min-h-[92vh] flex-col"
  >
    {/* Background image + gradient overlay */}
    <img
      src="/hero-abstract.jpg"
      alt=""
      aria-hidden="true"
      fetchPriority="high"
      className="absolute inset-0 -z-10 h-full w-full object-cover object-right opacity-60"
    />
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-zinc-950/40 to-zinc-950/90" />
    <div className="grain" aria-hidden="true" />

    {/* Massive background word */}
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-[-4vw] select-none text-center text-[22vw] font-bold leading-none tracking-[-0.06em] text-white opacity-[0.03] blur-[2px]"
    >
      BUILD
    </span>

    <div className="relative z-[2] mx-auto flex w-full max-w-site flex-1 flex-col justify-end gap-12 px-6 pb-10 pt-32 sm:px-10 md:pb-14 lg:flex-row lg:items-end lg:justify-between lg:px-14">
      {/* Left typography block */}
      <div className="max-w-3xl">
        <div className="glass inline-flex items-center gap-2.5 rounded-full px-3.5 py-1.5 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="ds-label text-white/80">Open to freelance &amp; full-time roles</span>
        </div>

        <h1
          id="hero-title"
          className="mt-7 text-[clamp(2.75rem,7.2vw,7rem)] font-semibold leading-[1.05] tracking-[-0.05em] animate-fade-in-up"
          style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
        >
          Full Stack &amp;
          <br />
          <span className="text-white/50">AI Systems</span> Engineer
        </h1>

        <p
          className="mt-7 max-w-xl text-lg font-light leading-relaxed text-white/60 animate-fade-in-up"
          style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
        >
          I'm Ram Krishna Yadav — building retrieval-augmented generation systems, self-hosted
          cloud platforms, and real-time distributed infrastructure.
        </p>

        <div
          className="mt-9 flex flex-wrap items-center gap-3 animate-fade-in-up"
          style={{ "--reveal-delay": "240ms" } as React.CSSProperties}
        >
          <ActionButton href="/contacts">Contact me</ActionButton>
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="glass inline-flex items-center gap-2 rounded-full px-6 py-4 text-sm font-medium text-white transition-all duration-300 ease-expo hover:scale-105 hover:bg-white/10"
          >
            <FileText size={16} aria-hidden="true" />
            Download resume
          </a>
        </div>

        <div className="mt-12 flex items-center gap-6 text-sm text-white/50 animate-fade-in-up" style={{ "--reveal-delay": "320ms" } as React.CSSProperties}>
          <span className="inline-flex items-center gap-2">
            <MapPin size={15} aria-hidden="true" /> Based in Nepal
          </span>
          <a href="#about" className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-white">
            <ArrowDown size={15} aria-hidden="true" /> Scroll to explore
          </a>
        </div>
      </div>

      {/* Right stack of glass stat cards */}
      <ul className="flex w-full flex-col gap-3 sm:flex-row lg:w-72 lg:flex-col">
        {stats.map((s, i) => (
          <li
            key={s.value}
            className="glass flex-1 rounded-2xl p-5 transition-colors duration-300 hover:bg-white/10 animate-fade-in-up"
            style={{ "--reveal-delay": `${300 + i * 100}ms` } as React.CSSProperties}
          >
            <div className="flex items-center justify-between">
              <span className="ds-label text-white/40">{String(i + 1).padStart(2, "0")}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
            </div>
            <p className="mt-4 text-3xl font-semibold tracking-[-0.05em]">{s.value}</p>
            <p className="mt-1.5 text-sm leading-snug text-white/60">{s.label}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Hero;
