import {
  Code2,
  Database,
  Wrench,
  Server,
  Sparkles,
  Cpu,
  LucideIcon,
} from "lucide-react";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiSocketdotio,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiDocker,
  SiLinux,
  SiNginx,
  SiGit,
  SiJest,
} from "react-icons/si";
import { IconType } from "react-icons";

const skillIcons: Record<string, IconType | LucideIcon> = {
  // Languages
  Python: SiPython,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "C++": SiCplusplus,
  // ML & AI
  RAG: Sparkles,
  "Vector Embeddings": Cpu,
  "Semantic Search": Sparkles,
  pgvector: Database,
  "LLM Integration": Sparkles,
  MCP: Cpu,
  // Systems
  "Event-Driven Architecture": Server,
  WebSockets: SiSocketdotio,
  Docker: SiDocker,
  Linux: SiLinux,
  Nginx: SiNginx,
  "VPS & AWS EC2": Server,
  // Databases
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Redis: SiRedis,
  "Pub/Sub Messaging": Server,
  "AWS S3": Database,
  // Frameworks & Tools
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "Next.js": SiNextdotjs,
  React: SiReact,
  "Elysia.js": Server,
  "Drizzle ORM": Database,
  Git: SiGit,
  Jest: SiJest,
};

const categoryIcons: Record<string, LucideIcon> = {
  Languages: Code2,
  "Machine Learning & AI": Sparkles,
  "Systems & Infra": Server,
  "Databases & Storage": Database,
  "Frameworks & Tools": Wrench,
};

const categoryBadgeBg: Record<string, string> = {
  Languages: "bg-[var(--rd-yellow)] text-black",
  "Machine Learning & AI": "bg-[var(--rd-purple)] text-white",
  "Systems & Infra": "bg-[var(--rd-teal)] text-white",
  "Databases & Storage": "bg-[var(--rd-magenta)] text-black",
  "Frameworks & Tools": "bg-[var(--rd-yellow)] text-black",
};

interface SkillCategoryProps {
  title: string;
  skills: string[];
  className?: string;
}

const SkillCategory = ({ title, skills, className = "" }: SkillCategoryProps) => {
  const CategoryIcon = categoryIcons[title] || Code2;
  const badgeColor = categoryBadgeBg[title] || "bg-[var(--rd-yellow)] text-black";
  const id = `skill-${title.replace(/\W+/g, "-")}`;

  return (
    <section className={`rd-grid-cell bg-white p-5 md:p-6 ${className}`} aria-labelledby={id}>
      <div className="flex items-start gap-4">
        <span
          className={`flex-none w-11 h-11 border-2 border-black flex items-center justify-center shadow-[2px_2px_0_#000] ${badgeColor}`}
        >
          <CategoryIcon size={22} aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <h3 id={id} className="text-xl !font-semibold leading-tight">
            {title}
          </h3>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
            {skills.map((skill) => {
              const SkillIcon = skillIcons[skill];
              return (
                <li key={skill} className="flex items-center gap-1.5 text-[16px]">
                  {SkillIcon && (
                    <SkillIcon size={15} className="text-[var(--rd-purple)]" aria-hidden="true" />
                  )}
                  <span>{skill}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillCategory;
