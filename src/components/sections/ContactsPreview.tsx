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
              I'm interested in freelance opportunities – especially ambitious or 
              large projects. However, if you have other request or question, 
              don't hesitate to contact me.
            </p>
          </div>

          {/* Contact cards */}
          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <div className="border border-border p-4 flex items-center gap-3">
              <MessageCircle size={24} className="text-muted-foreground" />
              <span className="text-foreground">@ramkrishna</span>
            </div>
            <div className="border border-border p-4 flex items-center gap-3">
              <Mail size={24} className="text-muted-foreground" />
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
    </section>
  );
};

export default ContactsPreview;
