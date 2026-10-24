import { FileText } from "lucide-react";
import Window from "@/components/shared/Window";

const stats = [
  {
    label: "Salesient (RAG + MCP)",
    value: "120+ tools",
    note: "768-D pgvector search & multi-model routing",
    color: "text-[var(--rd-purple)]",
  },
  {
    label: "Zyotra (Self-Hosted PaaS)",
    value: "Up to 80%",
    note: "Lower infra cost on bare-metal servers",
    color: "text-[var(--rd-teal)]",
  },
  {
    label: "Core Stack",
    value: "TS · Python",
    note: "Next.js, PostgreSQL, pgvector, Redis, Docker",
    color: "text-[var(--rd-magenta)]",
  },
];

const Hero = () => (
  <section className="grid gap-8 lg:gap-10 lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_380px] items-start">
    <Window title="RAM.EXE" labelledBy="hero-title">
      <div className="rd-pane bg-[var(--rd-yellow)] p-5 sm:p-8 flex flex-col min-h-[460px]">
        <p className="rd-num">01 / PORTFOLIO</p>
        <h1
          id="hero-title"
          className="rd-hero-title mt-6 text-[clamp(2.8rem,8vw,7.4rem)]"
        >
          Full Stack &amp; AI Systems Engineer
        </h1>
        <div className="mt-auto pt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <p className="text-lg sm:text-xl leading-snug max-w-[38ch]">
            I'm Ram Krishna Yadav — building retrieval-augmented generation systems,
            self-hosted cloud platforms, and real-time distributed infrastructure.
          </p>
          <div className="flex flex-row md:flex-col gap-3 flex-wrap">
            <a href="/contacts" className="rd-btn rd-btn-primary">
              Contact me
            </a>
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="rd-btn">
              <FileText size={18} aria-hidden="true" />
              Resume
            </a>
          </div>
        </div>
      </div>
    </Window>

    <Window title="PROFILE / MONITOR" as="aside" className="lg:mt-10">
      <div className="rd-well p-3">
        <div className="border-2 border-black bg-[var(--rd-yellow)] aspect-square overflow-hidden">
          <img
            src="/pp.png"
            alt="Ram Krishna Yadav"
            width={380}
            height={380}
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
      <dl className="mt-[5px] space-y-[5px]">
        {stats.map((s, i) => (
          <div key={s.label} className="rd-well px-4 py-3">
            <div className="flex items-baseline justify-between">
              <dt className="font-semibold text-[15px]">{s.label}</dt>
              <span className="rd-num text-[#808080]">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <dd className="font-mono text-[2rem] leading-tight mt-1">{s.value}</dd>
            <p className="text-sm">{s.note}</p>
            <div className={`rd-meter mt-2 ${s.color}`} aria-hidden="true">
              {Array.from({ length: 11 }).map((_, k) => (
                <i key={k} style={{ "--seg-idx": k } as React.CSSProperties} />
              ))}
            </div>
          </div>
        ))}
      </dl>
    </Window>
  </section>
);

export default Hero;
