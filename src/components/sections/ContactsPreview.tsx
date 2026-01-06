import SectionHeader from "../shared/SectionHeader";
import { MessageCircle, Mail } from "lucide-react";
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
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Text */}
          <div className="text-muted-foreground max-w-lg">
            <p>
              I'm interested in freelance opportunities - especially ambitious or 
              large projects. However, if you have other request or question, 
              don't hesitate to contact me.
            </p>
          </div>

          {/* Contact cards */}
          <div className="space-y-4">
            <h3 className="text-foreground font-medium mb-4">Message me here</h3>
            <div className="flex flex-col gap-3">
              <div className="border border-border p-3 flex items-center gap-3 w-fit">
                <MessageCircle size={20} className="text-muted-foreground" />
                <span className="text-foreground">@ramkrishna</span>
              </div>
              <div className="border border-border p-3 flex items-center gap-3 w-fit">
                <Mail size={20} className="text-muted-foreground" />
                <a 
                  href="mailto:itsramky234@gmail.com" 
                  className="text-foreground hover:text-primary transition-colors"
                >
                  itsramky234@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsPreview;
