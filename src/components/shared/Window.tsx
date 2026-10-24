import { ReactNode, useEffect, useRef, useState } from "react";
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

/**
 * Retro desktop window: raised frame, navy title bar, interactive minimize/maximize
 * controls, and scroll-triggered entrance animation.
 */
const Window = ({
  title,
  children,
  className,
  bodyClassName,
  noControls,
  as: Tag = "section",
  labelledBy,
}: WindowProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [maximized, setMaximized] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as React.RefObject<never>}
      data-visible={visible ? "true" : "false"}
      data-minimized={minimized ? "true" : "false"}
      className={cn(
        "rd-win rd-win-anim",
        maximized && "!w-full !ml-0 !mr-0",
        className
      )}
      aria-labelledby={labelledBy}
    >
      <div
        className={cn("rd-title select-none", minimized && "!mb-0")}
        onDoubleClick={() => !noControls && setMinimized((m) => !m)}
      >
        <span className="rd-title-name">
          <span className="rd-title-icon" aria-hidden="true" />
          <span className="truncate">{title}</span>
        </span>
        {!noControls && (
          <span className="rd-ctrls">
            <button
              type="button"
              className="rd-ctrl"
              onClick={() => setMinimized((m) => !m)}
              aria-label={minimized ? `Restore ${title}` : `Minimize ${title}`}
              aria-expanded={!minimized}
              title={minimized ? "Restore window" : "Shade window"}
            >
              _
            </button>
            <button
              type="button"
              className="rd-ctrl"
              onClick={() => {
                setMinimized(false);
                setMaximized((x) => !x);
              }}
              aria-label={maximized ? `Restore ${title} width` : `Maximize ${title} width`}
              title={maximized ? "Restore width" : "Expand width"}
            >
              □
            </button>
            <span className="rd-ctrl opacity-80" aria-hidden="true">
              ×
            </span>
          </span>
        )}
      </div>
      <div className={cn("rd-win-collapse", minimized && "is-collapsed")}>
        <div className={cn("rd-win-collapse-inner", bodyClassName)}>{children}</div>
      </div>
    </Tag>
  );
};

export default Window;
