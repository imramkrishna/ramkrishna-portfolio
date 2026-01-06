interface SectionHeaderProps {
  title: string;
  showLine?: boolean;
  className?: string;
}

const SectionHeader = ({ title, showLine = true, className = "" }: SectionHeaderProps) => {
  return (
    <div className={`flex items-center gap-4 mb-8 ${className}`}>
      <h2 className="text-2xl md:text-3xl font-semibold whitespace-nowrap">
        <span className="text-primary">#</span>
        {title}
      </h2>
      {showLine && <div className="section-line" />}
    </div>
  );
};

export default SectionHeader;
