import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/contacts", label: "Contacts" },
];

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 md:top-6">
      <nav
        aria-label="Primary"
        className="glass-nav mx-auto flex w-full max-w-3xl items-center justify-between gap-2 rounded-full p-1.5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] animate-fade-in-up"
      >
        <Link
          to="/"
          className="flex items-center gap-2.5 rounded-full py-1 pl-1 pr-3 text-white transition-colors duration-300 hover:bg-white/10"
        >
          <span className="relative h-8 w-8 flex-none overflow-hidden rounded-full ring-1 ring-white/20">
            <img src="/pp.png" alt="" className="h-full w-full object-cover object-top" />
          </span>
          <span className="text-sm font-semibold tracking-tight">Ram Krishna</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = location.pathname === link.path;
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm text-white/80 transition-colors duration-300 hover:bg-white/10 hover:text-white",
                    active && "bg-white/10 text-white",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <a
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-900 transition-transform duration-300 ease-expo hover:scale-105 md:inline-flex"
        >
          Resume
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors duration-300 hover:bg-white/10 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <ul className="glass-nav mx-auto mt-3 flex max-w-3xl flex-col gap-1 rounded-3xl p-2 animate-fade-in-up md:hidden">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className="block rounded-full px-4 py-3 text-white/80 transition-colors duration-300 hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-full px-4 py-3 text-white/80 transition-colors duration-300 hover:bg-white/10 hover:text-white"
            >
              Resume (PDF)
            </a>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
