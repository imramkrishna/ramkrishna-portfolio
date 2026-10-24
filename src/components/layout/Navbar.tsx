import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/contacts", label: "Contacts" },
];

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-3 md:px-6 pt-3 pb-1">
      <div className="max-w-[1280px] mx-auto">
        <nav
          aria-label="Primary"
          className="rd-win !p-0 flex items-center justify-between gap-4 px-3 py-2 md:px-5"
        >
          <Link to="/" className="flex items-center gap-3 no-underline text-black">
            <span className="w-11 h-11 overflow-hidden border-2 border-black bg-[var(--rd-yellow)] flex-none shadow-[2px_2px_0_#000]">
              <img src="/pp.png" alt="Ram Krishna Yadav" className="w-full h-full object-cover object-top" />
            </span>
            <span className="rd-disp text-2xl md:text-3xl">Ram Krishna</span>
          </Link>

          <ul className="hidden md:flex items-center gap-8 mr-auto ml-10">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    aria-current={active ? "page" : undefined}
                    className={`rd-link text-lg ${active ? "bg-[var(--rd-yellow)] text-black px-1" : ""}`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <span
            aria-hidden="true"
            className="hidden md:flex gap-3 border-2 border-[#808080] bg-[var(--rd-gray)] px-4 py-2 shadow-[inset_1px_1px_0_#fff]"
          >
            <i className="w-3 h-3 bg-[var(--rd-purple)]" />
            <i className="w-3 h-3 bg-[var(--rd-purple)]" />
            <i className="w-3 h-3 bg-[var(--rd-purple)]" />
          </span>

          <button
            className="md:hidden rd-btn !min-h-[44px] !min-w-[44px] !p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {open && (
          <ul className="md:hidden rd-win mt-3 flex flex-col gap-3 p-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="rd-link text-lg" onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
};

export default Navbar;
