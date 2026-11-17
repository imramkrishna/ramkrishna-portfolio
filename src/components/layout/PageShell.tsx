import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const PageShell = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#F4F4F5]">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-zinc-900"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="px-2 pt-2 sm:px-3 sm:pt-3">
        <div className="mx-auto flex max-w-site flex-col gap-3">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default PageShell;
