import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface WindowProps {
  title: string;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
  /** Hide the minimise / maximise / close buttons */
  noControls?: boolean;
  as?: "section" | "div" | "aside" | "article";
  labelledBy?: string;
}

/** Retro desktop window: raised frame, navy title bar, decorative controls. */
const Window = ({
  title,
  children,
  className,
  bodyClassName,
  noControls,
  as: Tag = "section",
  labelledBy,
}: WindowProps) => (
  <Tag className={cn("rd-win", className)} aria-labelledby={labelledBy}>
    <div className="rd-title">
      <span className="rd-title-name">
        <span className="rd-title-icon" aria-hidden="true" />
        <span className="truncate">{title}</span>
      </span>
      {!noControls && (
        <span className="rd-ctrls" aria-hidden="true">
          <span className="rd-ctrl">_</span>
          <span className="rd-ctrl">□</span>
          <span className="rd-ctrl">×</span>
        </span>
      )}
    </div>
    <div className={bodyClassName}>{children}</div>
  </Tag>
);

export default Window;
