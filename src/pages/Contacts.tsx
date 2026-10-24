import { Github, Linkedin, Mail, MessageCircle, Send } from "lucide-react";
import PageShell from "@/components/layout/PageShell";
import Window from "@/components/shared/Window";
import Ticker from "@/components/shared/Ticker";
import { EMAIL, socialLinks } from "@/data/profile";

const icons = { GitHub: Github, LinkedIn: Linkedin, Discord: MessageCircle, Email: Mail } as const;

const Contacts = () => (
  <PageShell>
    <Window title="CONTACTS.EXE" labelledBy="contacts-title">
      <div className="rd-pane bg-[var(--rd-yellow)] p-6 sm:p-10 grid lg:grid-cols-[1.2fr_1fr] gap-8 items-end">
        <div>
          <p className="rd-num">01 / GET IN TOUCH</p>
          <h1 id="contacts-title" className="rd-hero-title mt-6 text-[clamp(3rem,8vw,6.5rem)]">
            Let's talk
          </h1>
          <p className="mt-6 text-xl leading-snug max-w-[40ch]">
            I'm interested in freelance opportunities, especially ambitious or large projects.
            If you have any other request or question, don't hesitate to contact me.
          </p>
        </div>
        <div className="flex flex-col items-start lg:items-end gap-4">
          <a href={`mailto:${EMAIL}`} className="rd-btn rd-btn-primary">
            <Send size={18} aria-hidden="true" />
            Send me an email
          </a>
          <p className="font-mono text-sm lg:text-right">I'll respond as quickly as possible.</p>
        </div>
      </div>
    </Window>

    <Ticker text="Whether it's a project, a job, or just a hello" />

    <Window title="CONTACTS / DIRECTORY" className="lg:w-[92%] lg:ml-auto" labelledBy="reach-title">
      <div className="grid lg:grid-cols-[minmax(0,320px)_1fr] gap-[5px]">
        <div className="bg-[var(--rd-purple)] text-white p-6 sm:p-8 flex flex-col gap-6 min-h-[240px]">
          <p className="rd-num">02</p>
          <h2 id="reach-title" className="rd-disp rd-shadow-text text-[clamp(2rem,3.2vw,2.8rem)] uppercase !leading-[.92]">
            Where to find me
          </h2>
          <span className="mt-auto w-24 h-24 border-2 border-black bg-[var(--rd-yellow)] overflow-hidden shadow-[3px_3px_0_#000]">
            <img src="/pp.png" alt="" className="w-full h-full object-cover object-top" />
          </span>
        </div>
        <ul className="bg-white border-2 border-[#808080] grid sm:grid-cols-2">
          {socialLinks.map((link) => {
            const Icon = icons[link.label as keyof typeof icons];
            const external = link.href.startsWith("http");
            return (
              <li key={link.label} className="rd-grid-cell">
                <a
                  href={link.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group flex items-start gap-4 p-6 h-full hover:bg-[var(--rd-yellow)]"
                >
                  <span className="flex-none w-11 h-11 border-2 border-black bg-[var(--rd-yellow)] group-hover:bg-white flex items-center justify-center shadow-[2px_2px_0_#000]">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xl font-semibold leading-tight">{link.label}</span>
                    <span className="block mt-1 text-[17px] break-all underline underline-offset-4">{link.value}</span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </Window>
  </PageShell>
);

export default Contacts;
