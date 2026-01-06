import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/shared/SectionHeader";
import { MessageCircle, Mail, Github, Linkedin } from "lucide-react";
import { DecorativeDots } from "@/components/shared/DecorativeElements";

const socialLinks = [
  { icon: Github, label: "GitHub", value: "imramkrishna", href: "https://github.com/imramkrishna" },
  { icon: Linkedin, label: "LinkedIn", value: "ramkrishnaprofile", href: "https://linkedin.com/in/ramkrishnaprofile" },
  { icon: MessageCircle, label: "Discord", value: "@ramkrishna", href: "#" },
  { icon: Mail, label: "Email", value: "itsramky234@gmail.com", href: "mailto:itsramky234@gmail.com" },
];

const Contacts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Sidebar />
      
      <main className="pt-24 md:pl-16 lg:pl-24 pb-16">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 relative">
          {/* Decorative elements */}
          <DecorativeDots 
            rows={5} 
            cols={5} 
            className="absolute top-40 right-8 opacity-30 hidden lg:grid" 
          />
          
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold mb-4">
              <span className="text-primary">/</span>contacts
            </h1>
            <p className="text-muted-foreground">Get in touch with me</p>
          </div>

          {/* Contact Info */}
          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Message */}
              <div className="text-muted-foreground space-y-4">
                <p>
                  I'm interested in freelance opportunities – especially ambitious or 
                  large projects. However, if you have other request or question, 
                  don't hesitate to contact me.
                </p>
                <p>
                  Whether you have a project in mind, a job opportunity, or just want 
                  to say hi, feel free to reach out. I'll do my best to respond as 
                  quickly as possible!
                </p>
              </div>

              {/* Contact Cards */}
              <div>
                <SectionHeader title="message-me-here" showLine={false} />
                <div className="space-y-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 p-4 border border-border hover:border-primary transition-colors group"
                    >
                      <link.icon size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
                      <div>
                        <p className="text-muted-foreground text-sm">{link.label}</p>
                        <p className="text-foreground">{link.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* All Socials */}
          <section>
            <SectionHeader title="all-media" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 p-4 border border-border hover:border-primary transition-colors"
                >
                  <link.icon size={20} className="text-muted-foreground" />
                  <span className="text-foreground">{link.label}</span>
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contacts;
