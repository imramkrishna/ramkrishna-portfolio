import { ArrowUpRight, Github, Linkedin, Mail, MessageCircle, Send } from "lucide-react";
import PageShell from "@/components/layout/PageShell";
import PageHeader from "@/components/shared/PageHeader";
import ActionButton from "@/components/shared/ActionButton";
import Reveal from "@/components/shared/Reveal";
import { EMAIL, socialLinks } from "@/data/profile";

const icons = { GitHub: Github, LinkedIn: Linkedin, Discord: MessageCircle, Email: Mail } as const;

const Contacts = () => (
  <PageShell>
    <PageHeader
      label="01 / Get in touch"
      title={
        <>
          Let's <span className="text-white/50">talk</span>
        </>
      }
      titleId="contacts-title"
      word="HELLO"
      aside={
        <div className="glass w-full rounded-3xl p-6 lg:w-80">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" aria-hidden="true" />
            <span className="ds-label text-white/70">Available</span>
          </div>
          <p className="mt-4 text-3xl font-semibold tracking-[-0.05em]">Fast replies</p>
          <p className="mt-1.5 text-sm text-white/60">I'll respond as quickly as possible.</p>
        </div>
      }
    >
      <p className="max-w-xl text-lg font-light leading-relaxed text-white/60">
        I'm interested in freelance opportunities, especially ambitious or large projects. If you
        have any other request or question, don't hesitate to contact me.
      </p>
      <div className="mt-8">
        <ActionButton href={`mailto:${EMAIL}`} icon={Send}>
          Send me an email
        </ActionButton>
      </div>
    </PageHeader>

    <section aria-labelledby="reach-title" className="ds-section px-4 py-20 sm:px-8 md:py-28 lg:px-14">
      <div className="mx-auto max-w-site">
        <Reveal>
          <p className="ds-label text-zinc-400">
            02 <span className="mx-2 text-zinc-300">/</span> Directory
          </p>
          <h2
            id="reach-title"
            className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-zinc-900 md:text-5xl"
          >
            Where to find me.
          </h2>
          <p className="mt-5 max-w-lg text-[17px] font-light leading-relaxed text-zinc-500">
            Whether it's a project, a job, or just a hello.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {socialLinks.map((link, i) => {
            const Icon = icons[link.label as keyof typeof icons];
            const external = link.href.startsWith("http");
            return (
              <Reveal as="li" key={link.label} delay={i * 80}>
                <a
                  href={link.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group flex h-full flex-col rounded-[2rem] border border-zinc-100 bg-white p-6 transition-all duration-300 ease-expo hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)]"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-900 text-white transition-colors duration-300 group-hover:bg-zinc-700">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="text-zinc-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-900"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="ds-label mt-12 text-zinc-400">{link.label}</p>
                  <p className="mt-2 break-all text-lg font-medium tracking-[-0.03em] text-zinc-900">{link.value}</p>
                </a>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  </PageShell>
);

export default Contacts;
