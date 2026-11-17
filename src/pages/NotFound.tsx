import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import ActionButton from "@/components/shared/ActionButton";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#F4F4F5] p-2 sm:p-3">
      <section className="ds-section ds-dark flex min-h-[calc(100vh-1.5rem)] flex-col items-center justify-center px-6 text-center">
        <div className="grain" aria-hidden="true" />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none text-center text-[30vw] font-bold leading-none tracking-[-0.06em] text-white opacity-[0.03] blur-[2px]"
        >
          404
        </span>
        <div className="relative z-[2] animate-fade-in-up">
          <p className="ds-label text-white/50">Error 404</p>
          <h1 className="mt-6 text-[clamp(2.5rem,6vw,5rem)] font-semibold tracking-[-0.05em]">Page not found</h1>
          <p className="mt-4 text-white/60">The page you're looking for doesn't exist.</p>
          <div className="mt-8 flex justify-center">
            <ActionButton href="/">Return home</ActionButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
