import { Link } from "react-router-dom";
import { Send } from "lucide-react";
import ActionButton from "@/components/shared/ActionButton";
import Reveal from "@/components/shared/Reveal";
import { EMAIL } from "@/data/profile";
import { cn } from "@/lib/utils";

const Cta = ({ className = "" }: { className?: string }) => (
  <section
    aria-labelledby="cta-title"
    className={cn("ds-section ds-dark px-5 py-14 sm:px-10 sm:py-20 md:py-28 lg:px-14", className)}
  >
    <img
      src="/hero-abstract.jpg"
      alt=""
      aria-hidden="true"
      loading="lazy"
      className="absolute inset-0 -z-10 h-full w-full scale-x-[-1] object-cover opacity-40"
    />
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-zinc-950/50 to-zinc-950/95" />
    <div className="grain" aria-hidden="true" />

    <div className="relative z-[2] mx-auto flex max-w-site flex-col items-start gap-8 sm:gap-10 lg:flex-row lg:items-end lg:justify-between">
      <Reveal className="min-w-0 max-w-3xl">
        <p className="ds-label text-white/40">What's next?</p>
        <h2
          id="cta-title"
          className="mt-4 text-[clamp(2rem,6vw,5.5rem)] font-semibold leading-[1.05] tracking-[-0.05em] sm:mt-6"
        >
          Have a project <span className="text-white/40">in mind?</span>
        </h2>
        <p className="mt-4 max-w-xl text-base font-light leading-relaxed text-white/60 sm:mt-6 sm:text-lg">
          I'm interested in freelance opportunities, especially ambitious or large projects. Whether
          it's a job, a project, or just a hello, I'll respond as quickly as I can.
        </p>
      </Reveal>

      <Reveal delay={120} className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:items-start sm:gap-4 lg:items-end">
        <ActionButton href={`mailto:${EMAIL}`} icon={Send} className="w-full sm:w-auto">
          Send me an email
        </ActionButton>
        <Link
          to="/contacts"
          className="glass rounded-full px-5 py-2.5 text-center text-sm text-white/80 transition-colors duration-300 hover:bg-white/10 hover:text-white"
        >
          All contacts
        </Link>
      </Reveal>
    </div>
  </section>
);

export default Cta;
