interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory = ({ title, skills }: SkillCategoryProps) => {
  return (
    <div className="skill-box">
      <h3 className="skill-box-title">{title}</h3>
      <p className="text-muted-foreground text-sm">
        {skills.join(" ")}
      </p>
    </div>
  );
};

export default SkillCategory;
