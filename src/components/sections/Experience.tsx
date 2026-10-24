import Window from "@/components/shared/Window";
import { experience } from "@/data/profile";

const Experience = ({ number = "04", className = "" }: { number?: string; className?: string }) => (
  <Window title="EXPERIENCE / SETUP" className={className} labelledBy="exp-title">
    <div className="bg-[var(--rd-navy)] text-white p-6 sm:p-10">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
        <div className="flex items-start gap-4">
          <span className="rd-num">{number}</span>
          <h2 id="exp-title" className="rd-disp text-[clamp(2.2rem,4.6vw,3.6rem)]">
            Experience &amp; education
          </h2>
        </div>
        <p className="text-lg">Where I've worked and studied.</p>
      </div>

      <ol className="mt-10 grid gap-10 lg:grid-cols-2">
        {experience.map((e, i) => (
          <li key={e.title} className="border-t-[6px] border-[var(--rd-yellow)] pt-3">
            <div className="flex gap-3 items-start">
              <span className="rd-disp text-[4rem] leading-none text-[var(--rd-yellow)]" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <h3 className="text-2xl !font-semibold leading-tight">{e.title}</h3>
                <p className="mt-1 text-[15px] text-[var(--rd-yellow)]">
                  {e.orgHref ? (
                    <a href={e.orgHref} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                      {e.org}
                    </a>
                  ) : (
                    e.org
                  )}
                </p>
                <p className="font-mono text-[13px] mt-0.5 opacity-90">{e.period}</p>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-[16px] leading-snug list-square pl-5 list-disc marker:text-[var(--rd-yellow)]">
              {e.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </li>
        ))}
      </ol>

      <div className="mt-10 bg-[var(--rd-gray)] border-2 border-[#808080] p-[3px]" aria-hidden="true">
        <div className="flex gap-[5px] h-[18px]">
          {Array.from({ length: 36 }).map((_, i) => (
            <i
              key={i}
              style={{ "--seg-idx": i } as React.CSSProperties}
              className={`rd-prog-seg flex-1 ${i < 30 ? "bg-[#0000ff]" : "bg-transparent"}`}
            />
          ))}
        </div>
      </div>
    </div>
  </Window>
);

export default Experience;
