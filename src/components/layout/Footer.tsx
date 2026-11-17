import { Link } from "react-router-dom";
import { EMAIL, socialLinks } from "@/data/profile";

const columns = [
  {
    title: "Pages",
    links: [
      { label: "Home", to: "/" },
      { label: "About", to: "/about" },
      { label: "Contacts", to: "/contacts" },
    ],
  },
  {
    title: "Connect",
    links: socialLinks
      .filter((l) => l.label !== "Discord")
      .map((l) => ({ label: l.label, href: l.href })),
  },
  {
    title: "Projects & CV",
    links: [
      { label: "Salesient (RAG)", href: "https://salesient.venyxtech.com/" },
      { label: "Zyotra (PaaS)", href: "https://github.com/Zyotra" },
      { label: "ChessOnline", href: "https://github.com/imramkrishna/ChessOnline" },
      { label: "Resume (PDF)", href: "/Resume.pdf" },
    ],
  },
];

const linkClass = "text-sm text-white/60 transition-colors duration-300 hover:text-white";

const Footer = () => (
  <footer className="px-2 pb-2 pt-3 sm:px-3 sm:pb-3">
    <div className="ds-section ds-dark mx-auto max-w-site px-6 pb-8 pt-16 sm:px-10 lg:px-14">
      <div className="grain" aria-hidden="true" />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -bottom-[3vw] select-none text-center text-[18vw] font-bold leading-none tracking-[-0.06em] text-white opacity-[0.03] blur-[2px]"
      >
        RAM
      </span>

      <div className="relative z-[2] grid gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-11 w-11 overflow-hidden rounded-full ring-1 ring-white/20">
              <img src="/pp.png" alt="" className="h-full w-full object-cover object-top" />
            </span>
            <span className="text-xl font-semibold tracking-[-0.04em]">Ram Krishna Yadav</span>
          </div>
          <p className="mt-5 max-w-xs text-sm font-light leading-relaxed text-white/50">
            Full Stack &amp; AI Systems Engineer based in Nepal.
          </p>
          <div className="mt-5 flex flex-col gap-1.5">
            <a href={`mailto:${EMAIL}`} className={linkClass}>
              {EMAIL}
            </a>
          </div>
        </div>

        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h2 className="ds-label text-white/40">{col.title}</h2>
            <ul className="mt-5 space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  {"to" in l ? (
                    <Link to={l.to!} className={linkClass}>
                      {l.label}
                    </Link>
                  ) : (
                    <a
                      href={l.href}
                      target={l.href!.startsWith("http") || l.href!.endsWith(".pdf") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className={linkClass}
                    >
                      {l.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="relative z-[2] mt-20 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Ram Krishna Yadav. All rights reserved.</span>
        <span className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
          Open to freelance and full-time opportunities
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
