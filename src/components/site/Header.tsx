import { Link } from "react-router-dom";

const links = [
  { href: "#work", label: "Work" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
  { href: "/Resume.pdf", label: "Resume" },
];

const Header = () => (
  <header>
    <div className="wrap flex items-center justify-between gap-4 py-4">
      <Link to="/" className="text-2xl font-medium tracking-tight no-underline text-[var(--text)]">
        Ram Krishna
      </Link>
      <div className="flex items-center gap-3">
        <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn hidden sm:inline-flex">Resume</a>
        <a href="#contact" className="btn btn-primary">Contact me</a>
      </div>
    </div>
    <nav aria-label="Primary" className="border-y border-[var(--hairline)]">
      <ul className="wrap flex items-center justify-center gap-6 sm:gap-10 py-3 m-0 list-none text-[16px]">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="link" {...(l.href.endsWith(".pdf") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{l.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;
