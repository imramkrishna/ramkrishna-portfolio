interface SectionHeaderProps {
  title: string;
  showLine?: boolean;
  className?: string;
}

const SectionHeader = ({ title, showLine = true, className = "" }: SectionHeaderProps) => {
  return (
    <div className={`flex items-center gap-4 mb-8 ${className}`}>
      <h2 className="text-3xl md:text-4xl bg-[var(--dp-color-highlight)] border-2 border-black px-3 py-2 shadow-[4px_4px_0_#000]">
        <span className="text-primary">#</span>
        {title}
      </h2>
      {showLine && <div className="section-line" />}
    </div>
  );
};

export default SectionHeader;
