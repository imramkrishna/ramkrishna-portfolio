import { 
  Code2, 
  Database, 
  Wrench, 
  Layout,
  Server,
  LucideIcon
} from "lucide-react";
import { 
  SiJavascript, 
  SiTypescript, 
  SiPython, 
  SiCplusplus,
  SiReact, 
  SiRedux, 
  SiTailwindcss, 
  SiHtml5,
  SiNodedotjs, 
  SiExpress, 
  SiJsonwebtokens,
  SiSocketdotio,
  SiPostgresql, 
  SiMongodb, 
  SiMysql,
  SiDocker, 
  SiGit, 
  SiJest,
  SiNpm
} from "react-icons/si";
import { IconType } from "react-icons";

// Skill icons mapping
const skillIcons: Record<string, IconType | LucideIcon> = {
  // Languages
  "JavaScript": SiJavascript,
  "TypeScript": SiTypescript,
  "Python": SiPython,
  "C++": SiCplusplus,
  // Frontend
  "React": SiReact,
  "Redux Toolkit": SiRedux,
  "Tailwind CSS": SiTailwindcss,
  "HTML5": SiHtml5,
  // Backend
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "Elysia.js": Server,
  "REST APIs": Server,
  "JWT": SiJsonwebtokens,
  "WebSockets": SiSocketdotio,
  // Databases
  "PostgreSQL": SiPostgresql,
  "MongoDB": SiMongodb,
  "MySQL": SiMysql,
  "ORMs": Database,
  // Tools
  "Worker Threads": Code2,
  "Event-Driven": Wrench,
  "Docker": SiDocker,
  "Git": SiGit,
  "VPS Deployment": Server,
  "Jest Testing": SiJest,
  "npm": SiNpm,
};

// Category icons
const categoryIcons: Record<string, LucideIcon> = {
  "Languages": Code2,
  "Frontend": Layout,
  "Backend": Server,
  "Databases": Database,
  "Systems & Tools": Wrench,
};

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory = ({ title, skills }: SkillCategoryProps) => {
  const CategoryIcon = categoryIcons[title] || Code2;
  
  return (
    <div className="skill-box group hover:border-primary transition-colors">
      <div className="flex items-center gap-2 mb-3">
        <CategoryIcon size={18} className="text-primary" />
        <h3 className="skill-box-title mb-0">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => {
          const SkillIcon = skillIcons[skill];
          return (
            <div 
              key={skill} 
              className="flex items-center gap-1.5 text-muted-foreground text-sm hover:text-foreground transition-colors"
            >
              {SkillIcon && <SkillIcon size={14} className="text-primary/70" />}
              <span>{skill}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillCategory;
