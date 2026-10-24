import Window from "@/components/shared/Window";
import SkillCategory from "@/components/shared/SkillCategory";
import { skillsData } from "@/data/profile";

const SkillsSection = ({ number = "03", className = "" }: { number?: string; className?: string }) => (
  <Window title="SKILLS / CONTROL PANEL" className={className} labelledBy="skills-title">
    <div className="grid lg:grid-cols-[minmax(0,320px)_1fr] gap-[5px]">
      <div className="bg-[var(--rd-purple)] text-white p-6 sm:p-8 flex flex-col min-h-[240px]">
        <p className="rd-num">{number}</p>
        <h2
          id="skills-title"
          className="rd-disp rd-shadow-text mt-6 text-[clamp(2rem,3.2vw,2.8rem)] uppercase !leading-[.92]"
        >
          Everything I build with
        </h2>
        <svg aria-hidden="true" viewBox="0 0 120 64" className="mt-auto pt-6 w-28 self-end max-lg:hidden">
          <path d="M2 4 L118 30 L62 36 L84 62 L52 44 L2 52 Z" fill="#fff" />
        </svg>
      </div>
      <div className="bg-white border-2 border-[#808080] grid sm:grid-cols-2">
        {skillsData.map((c, i) => (
          <SkillCategory
            key={c.title}
            title={c.title}
            skills={c.skills}
            className={i === skillsData.length - 1 && skillsData.length % 2 ? "sm:col-span-2" : ""}
          />
        ))}
      </div>
    </div>
  </Window>
);

export default SkillsSection;
