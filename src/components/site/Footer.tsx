import { EMAIL, socialLinks } from "@/data/profile";

const columns = [
  { title: "Site", links: [["Work", "#work"], ["Stack", "#stack"], ["Contact", "#contact"]] },
  { title: "Projects", links: [["Salesient", "https://salesient.venyxtech.com/"], ["Zyotra", "https://github.com/Zyotra"], ["ChessOnline", "https://github.com/imramkrishna/ChessOnline"]] },
  { title: "Elsewhere", links: [["Resume", "/Resume.pdf"], ["Email", `mailto:${EMAIL}`], ["GitHub", socialLinks[0].href]] },
];

const ext = (h: string) => (h.startsWith("http") || h.endsWith(".pdf") ? { target: "_blank", rel: "noopener noreferrer" } : {});

const Footer = () => (
  <footer className="bg-[var(--inverse)] text-[var(--inverse-text)] mt-8">
    <div className="wrap pt-16 pb-8">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {columns.map((c) => (
          <nav key={c.title} aria-label={c.title}>
            <h2 className="m-0 text-[14px] font-medium text-[#b5b5b8]">{c.title}</h2>
            <ul className="list-none m-0 mt-4 p-0 grid gap-2">
              {c.links.map(([l, h]) => (
                <li key={l}><a href={h} className="link" {...ext(h)}>{l}</a></li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <p className="m-0 mt-16 font-medium tracking-[-0.04em] leading-[0.9] whitespace-nowrap" style={{ fontSize: "clamp(56px, 13.2vw, 190px)" }} aria-hidden="true">
        Ram Krishna
      </p>
      <div className="mt-10 pt-6 border-t border-[#3a393a] flex flex-wrap items-center justify-between gap-x-8 gap-y-3 text-[14px] text-[#b5b5b8]">
        <ul className="list-none m-0 p-0 flex flex-wrap gap-x-6 gap-y-2">
          {socialLinks.filter((s) => s.href !== "#").map((s) => (
            <li key={s.label}><a href={s.href} className="link text-[var(--inverse-text)]" {...ext(s.href)}>{s.label}</a></li>
          ))}
        </ul>
        <p className="m-0">© 2026 Ram Krishna Yadav · Based in Dharan, Nepal</p>
      </div>
    </div>
  </footer>
);

export default Footer;
