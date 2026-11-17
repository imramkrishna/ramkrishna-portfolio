import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ActionButtonProps {
  children: ReactNode;
  href: string;
  icon?: LucideIcon;
  /** "light" = white pill (for dark surfaces), "dark" = zinc pill (for light surfaces) */
  tone?: "light" | "dark";
  className?: string;
  external?: boolean;
}

/** Pill button with a nested circular icon container. */
const ActionButton = ({
  children,
  href,
  icon: Icon = ArrowUpRight,
  tone = "light",
  className,
  external,
}: ActionButtonProps) => {
  const isExternal = external ?? (/^(https?:|mailto:)/.test(href) || href.endsWith(".pdf"));
  const classes = cn(
    "group inline-flex items-center justify-between gap-4 rounded-full pl-6 pr-2 py-2 font-medium",
    "transition-all duration-300 ease-expo hover:scale-105 will-change-transform",
    tone === "light" ? "bg-white text-zinc-900" : "bg-zinc-900 text-white",
    className,
  );
  const inner = (
    <>
      <span>{children}</span>
      <span
        className={cn(
          "flex h-10 w-10 flex-none items-center justify-center rounded-full transition-colors duration-300",
          tone === "light"
            ? "bg-zinc-900 text-white group-hover:bg-zinc-700"
            : "bg-white text-zinc-900 group-hover:bg-emerald-300",
        )}
      >
        <Icon size={18} strokeWidth={2} aria-hidden="true" />
      </span>
    </>
  );

  if (!isExternal && href.startsWith("/")) {
    return (
      <Link to={href} className={classes}>
        {inner}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={classes}
      target={isExternal && !href.startsWith("mailto:") ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {inner}
    </a>
  );
};

export default ActionButton;
