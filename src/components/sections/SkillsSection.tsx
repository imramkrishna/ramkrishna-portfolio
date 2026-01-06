import SectionHeader from "../shared/SectionHeader";
import SkillCategory from "../shared/SkillCategory";
import { DecorativeDots, DecorativeCross } from "../shared/DecorativeElements";

const skillsData = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Node.js"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    title: "Tools",
    skills: ["Git", "Vercel", "Azure", "VPS Hosting", "Figma"],
  },
  {
    title: "Other",
    skills: ["REST APIs", "GraphQL", "JWT", "OAuth", "WebSockets", "SEO"],
  },
  {
    title: "Frameworks",
    skills: ["React", "Express.js", "Next.js", "Tailwind", "Redux", "Bootstrap"],
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
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
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
