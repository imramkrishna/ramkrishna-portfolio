import { Check } from "lucide-react";

const items = [
  { title: "Self-hosted infrastructure", text: "Docker, Nginx, VPS and AWS EC2 deployments on bare-metal servers." },
  { title: "Real-time systems", text: "WebSocket-based, event-driven features built for production." },
  { title: "AI-powered apps", text: "RAG pipelines with vector search, model routing and MCP tooling." },
  { title: "End-to-end delivery", text: "From ingestion and APIs to deployment, backups and observability." },
];

const Highlights = ({ number = "05", className = "" }: { number?: string; className?: string }) => (
  <section
    aria-labelledby="why-title"
    className={`bg-[var(--rd-yellow)] border-2 border-black shadow-[var(--rd-shadow)] p-6 sm:p-10 grid lg:grid-cols-[minmax(0,300px)_1fr] gap-8 ${className}`}
  >
    <div>
      <p className="rd-num">{number}</p>
      <h2 id="why-title" className="rd-disp mt-6 text-[clamp(2rem,3.6vw,3rem)]">
        Why work with me
      </h2>
    </div>
    <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
      {items.map((it) => (
        <li key={it.title} className="flex gap-4">
          <span className="flex-none w-9 h-9 bg-white border-2 border-black flex items-center justify-center">
            <Check size={22} strokeWidth={3} aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-xl !font-semibold leading-tight">{it.title}</h3>
            <p className="mt-1 text-[17px] leading-snug">{it.text}</p>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default Highlights;
