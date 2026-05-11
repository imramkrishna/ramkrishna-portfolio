import { Github, Linkedin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 mt-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left side - Branding with Avatar */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/50 hover:border-primary transition-colors">
                <img
                  src="/pp.jpeg"
                  alt="Ram Krishna Yadav"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex items-center gap-1 text-foreground font-semibold">
                <span className="text-primary">Ram</span>
                <span>Krishna</span>
              </div>
            </div>
            <a
              href="mailto:itsramky234@gmail.com"
              className="text-muted-foreground text-sm hover:text-foreground transition-colors"
            >
              itsramky234@gmail.com
            </a>
          </div>

          {/* Center - Description */}
          <p className="text-muted-foreground text-sm text-center">
            Full Stack Developer & <a href="https://venyxtech.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">CTO at Venyx Technology International</a> • Based in Nepal
          </p>

          {/* Right side - Social */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <span className="text-muted-foreground text-sm">Media</span>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/imramkrishna"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/ramkrishnaprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Discord"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Ram Krishna. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
