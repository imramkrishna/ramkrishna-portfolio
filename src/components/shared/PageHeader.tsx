import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  label: string;
  title: ReactNode;
  titleId: string;
  word: string;
  children?: ReactNode;
  aside?: ReactNode;
  className?: string;
}

/** Compact dark hero used on inner pages. */
const PageHeader = ({ label, title, titleId, word, children, aside, className }: PageHeaderProps) => (
  <section
    aria-labelledby={titleId}
    className={cn("ds-section ds-dark flex min-h-[60vh] flex-col sm:min-h-[70vh]", className)}
  >
    <img
      src="/hero-abstract.jpg"
      alt=""
      aria-hidden="true"
      fetchPriority="high"
      className="absolute inset-0 -z-10 h-full w-full object-cover object-right opacity-60"
    />
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-zinc-950/40 to-zinc-950/90" />
    <div className="grain" aria-hidden="true" />
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-[-4vw] select-none text-center text-[22vw] font-bold leading-none tracking-[-0.06em] text-white opacity-[0.03] blur-[2px]"
    >
      {word}
    </span>

    <div className="relative z-[2] mx-auto flex w-full max-w-site flex-1 flex-col justify-end gap-8 px-5 pb-9 pt-24 sm:gap-12 sm:px-10 sm:pb-12 sm:pt-32 lg:flex-row lg:items-end lg:justify-between lg:px-14 lg:pb-14">
      <div className="min-w-0 max-w-3xl">
        <p className="ds-label text-white/50 animate-fade-in-up">{label}</p>
        <h1
          id={titleId}
          className="mt-4 text-[clamp(2.25rem,8vw,7.5rem)] font-semibold leading-[1.05] tracking-[-0.05em] animate-fade-in-up sm:mt-6"
          style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
        >
          {title}
        </h1>
        {children && (
          <div
            className="mt-5 animate-fade-in-up sm:mt-7"
            style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
          >
            {children}
          </div>
        )}
      </div>
      {aside && (
        <div
          className="min-w-0 w-full lg:w-auto animate-fade-in-up"
          style={{ "--reveal-delay": "240ms" } as React.CSSProperties}
        >
          {aside}
        </div>
      )}
    </div>
  </section>
);

export default PageHeader;
