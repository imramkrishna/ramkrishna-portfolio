interface DecorativeDotsProps {
  rows?: number;
  cols?: number;
  className?: string;
}

export const DecorativeDots = ({ rows = 5, cols = 5, className = "" }: DecorativeDotsProps) => {
  return (
    <div className={`grid gap-1 ${className}`} style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
      {Array.from({ length: rows * cols }).map((_, i) => (
        <div
          key={i}
          className="w-1 h-1 bg-muted-foreground rounded-full"
        />
      ))}
    </div>
  );
};

interface DecorativeShapeProps {
  className?: string;
}

export const DecorativeSquare = ({ className = "" }: DecorativeShapeProps) => {
  return (
    <div className={`w-16 h-16 border border-muted-foreground ${className}`} />
  );
};

export const DecorativeCross = ({ className = "" }: DecorativeShapeProps) => {
  return (
    <div className={`relative w-8 h-8 ${className}`}>
      <div className="absolute top-1/2 left-0 w-full h-px bg-muted-foreground -translate-y-1/2" />
      <div className="absolute top-0 left-1/2 w-px h-full bg-muted-foreground -translate-x-1/2" />
    </div>
  );
};

export const DecorativeCorner = ({ className = "" }: DecorativeShapeProps) => {
  return (
    <div className={`w-8 h-8 border-l border-t border-primary ${className}`} />
  );
};

export const DecorativeLine = ({ className = "" }: DecorativeShapeProps) => {
  return (
    <div className={`h-px bg-primary ${className}`} />
  );
};
