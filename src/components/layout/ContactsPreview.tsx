import SectionHeader from "../shared/SectionHeader";
import { MessageCircle, Mail, Github, Linkedin } from "lucide-react";
import { DecorativeDots } from "../shared/DecorativeElements";

const ContactsPreview = () => {
  return (
    <section className="py-16 relative">
      {/* Decorative elements */}
      <DecorativeDots 
        rows={5} 
        cols={5} 
        className="absolute bottom-20 left-8 opacity-30 hidden lg:grid" 
      />
      
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <SectionHeader title="contacts" />
        
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 items-center">
          {/* Left - Rounded Profile Picture */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative group">
              {/* Outer glow */}
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-2xl scale-125" />
              
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border border-primary/20 scale-[1.15] animate-pulse" />
              <div className="absolute inset-0 rounded-full border border-primary/10 scale-[1.25]" />
              
              {/* Profile Image */}
              <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-primary/40 shadow-xl shadow-primary/20 group-hover:border-primary/60 transition-all duration-500">
                <img
                  src="/pp.jpeg"
                  alt="Ram Krishna Yadav"
                  className="w-full h-full object-cover object-top grayscale-[30%] hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Status indicator */}
              <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-3 border-background animate-pulse" title="Available for work" />
            </div>
          </div>

          {/* Center - Text Content */}
          <div className="space-y-5">
            <p className="text-muted-foreground">
              I'm interested in freelance opportunities - especially ambitious or 
              large projects. However, if you have other request or question, 
              don't hesitate to contact me.
            </p>
            
            {/* Quick Contact Links */}
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/imramkrishna"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-border hover:border-primary hover:text-primary transition-colors"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/ramkrishnaprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-border hover:border-primary hover:text-primary transition-colors"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right - Contact Card */}
          <div className="border border-border p-5 space-y-4">
            <h3 className="text-foreground font-medium flex items-center gap-2">
              <span className="text-primary">#</span>message-me-here
            </h3>
            <div className="space-y-3">
              <a 
                href="#" 
                className="flex items-center gap-3 p-3 bg-secondary/30 hover:bg-secondary/50 transition-colors group"
              >
                <MessageCircle size={20} className="text-primary" />
                <span className="text-foreground group-hover:text-primary transition-colors text-sm">@ramkrishna</span>
              </a>
              <a 
                href="mailto:itsramky234@gmail.com" 
                className="flex items-center gap-3 p-3 bg-secondary/30 hover:bg-secondary/50 transition-colors group"
              >
                <Mail size={20} className="text-primary" />
                <span className="text-foreground group-hover:text-primary transition-colors text-sm">itsramky234@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsPreview;
