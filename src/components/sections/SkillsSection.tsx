import SectionHeader from "../shared/SectionHeader";
import SkillCategory from "../shared/SkillCategory";
import { DecorativeDots, DecorativeCross } from "../shared/DecorativeElements";

const skillsData = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "C++"],
  },
  {
    title: "Frontend",
    skills: ["React", "Redux Toolkit", "Tailwind CSS", "HTML5"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Elysia.js", "REST APIs", "JWT", "WebSockets"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "ORMs"],
  },
  {
    title: "Systems & Tools",
    skills: ["Worker Threads", "Event-Driven", "Docker", "Git", "VPS Deployment", "Jest Testing", "npm"],
  },
];

const SkillsSection = () => {
  return (
    <section className="py-16 relative">
      {/* Decorative elements */}
      <DecorativeDots
        rows={5}
        cols={5}
        className="absolute top-1/4 left-8 opacity-30 hidden lg:grid"
      />
      <DecorativeCross className="absolute bottom-20 right-16 opacity-30 hidden lg:block" />

      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <SectionHeader title="skills" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {skillsData.map((category) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
