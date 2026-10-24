import { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const PageShell = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen">
    <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:z-[60] focus:top-2 focus:left-2 rd-btn">
      Skip to content
    </a>
    <Navbar />
    <main id="main" className="px-3 md:px-6 pt-6">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10 md:gap-14">{children}</div>
    </main>
    <Footer />
  </div>
);

export default PageShell;
