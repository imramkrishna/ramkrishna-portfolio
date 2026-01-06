import { Github, Linkedin, MessageCircle } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/imramkrishna", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/ramkrishnaprofile", label: "LinkedIn" },
  { icon: MessageCircle, href: "#", label: "Discord" },
];

const Sidebar = () => {
  return (
    <aside className="fixed left-4 lg:left-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-2">
      {/* Vertical line */}
      <div className="w-px h-8 bg-muted-foreground" />
      
      {/* Social icons */}
      <div className="flex flex-col gap-2">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
            aria-label={link.label}
          >
            <link.icon size={20} />
          </a>
        ))}
      </div>
      
      {/* Vertical line */}
      <div className="w-px h-8 bg-muted-foreground" />
    </aside>
  );
};

export default Sidebar;
