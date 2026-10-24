import { Send } from "lucide-react";
import Window from "@/components/shared/Window";
import { EMAIL } from "@/data/profile";

const Cta = ({ className = "" }: { className?: string }) => (
  <Window title="RAM / WHAT NEXT?" className={className} labelledBy="cta-title">
    <div className="rd-pane bg-[var(--rd-yellow)] p-6 sm:p-10 flex flex-col sm:flex-row gap-6 sm:gap-10 items-start">
      <span
        aria-hidden="true"
        className="flex-none w-24 h-24 sm:w-28 sm:h-28 bg-[var(--rd-purple)] text-white rd-disp !text-[5.5rem] leading-none flex items-center justify-center shadow-[5px_5px_0_#000]"
      >
        !
      </span>
      <div>
        <h2 id="cta-title" className="rd-disp text-[clamp(2.2rem,4.6vw,3.8rem)]">
          Have a project in mind?
        </h2>
        <p className="mt-4 text-xl leading-snug max-w-[48ch]">
          I'm interested in freelance opportunities, especially ambitious or large projects. Whether
          it's a job, a project, or just a hello, I'll respond as quickly as I can.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href={`mailto:${EMAIL}`} className="rd-btn rd-btn-primary">
            <Send size={18} aria-hidden="true" />
            Send me an email
          </a>
          <a href="/contacts" className="rd-btn">All contacts</a>
        </div>
      </div>
    </div>
  </Window>
);

export default Cta;
