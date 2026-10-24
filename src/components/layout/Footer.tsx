import { Link } from "react-router-dom";
import Window from "@/components/shared/Window";
import { EMAIL, socialLinks } from "@/data/profile";

const Folder = () => (
  <svg width="30" height="24" viewBox="0 0 30 24" aria-hidden="true" className="flex-none">
    <path d="M1 3h10l3 3h15v17H1z" fill="#ffff55" stroke="#000" strokeWidth="2" />
    <path d="M1 8h28" stroke="#000" strokeWidth="2" />
  </svg>
);

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

const Footer = () => (
  <footer className="px-3 md:px-6 mt-16 pb-10">
    <div className="max-w-[1280px] mx-auto bg-[var(--rd-teal)] border-2 border-black p-3 md:p-5 shadow-[var(--rd-shadow)]">
      <Window title="RAM / DIRECTORY" className="shadow-none">
        <div className="rd-pane bg-[var(--rd-gray)] p-5 md:p-8 grid gap-8 md:grid-cols-[1.3fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-3">
              <span className="w-12 h-12 overflow-hidden border-2 border-black bg-[var(--rd-yellow)]">
                <img src="/pp.png" alt="" className="w-full h-full object-cover object-top" />
              </span>
              <span className="rd-disp text-3xl">Ram Krishna</span>
            </div>
            <p className="mt-4 text-lg leading-snug max-w-[26ch]">
              Full Stack &amp; AI Systems Engineer based in Nepal.
            </p>
            <a href={`mailto:${EMAIL}`} className="rd-link mt-3 inline-block break-all text-[15px]">
              {EMAIL}
            </a>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="flex items-center gap-3 !normal-case !tracking-normal !leading-tight text-xl !font-sans !font-semibold">
                <Folder />
                {col.title}
              </h2>
              <ul className="rd-tree mt-4 space-y-2.5 text-[17px]">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {"to" in l ? (
                      <Link to={l.to!} className="hover:text-[var(--rd-purple)] hover:underline">
                        {l.label}
                      </Link>
                    ) : (
                      <a
                        href={l.href}
                        target={l.href!.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="hover:text-[var(--rd-purple)] hover:underline"
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
      </Window>
      <div className="rd-well mt-4 px-4 py-3 flex flex-col sm:flex-row  justify-center gap-2 font-mono text-[13px]">
        <span>© {new Date().getFullYear()} Ram Krishna Yadav. All rights reserved.</span>
      </div>
    </div>
  </footer>
);

export default Footer;
