import PageShell from "@/components/layout/PageShell";
import PageHeader from "@/components/shared/PageHeader";
import ActionButton from "@/components/shared/ActionButton";
import AboutPreview from "@/components/sections/AboutPreview";
import ProjectsSection from "@/components/sections/ProjectsSection";
import Experience from "@/components/sections/Experience";
import Cta from "@/components/sections/ContactsPreview";

const About = () => (
  <PageShell>
    <PageHeader
      label="01 / Who am I?"
      title={
        <>
          About <span className="text-white/50">me</span>
        </>
      }
      titleId="about-page-title"
      word="ABOUT"
      aside={
        <div className="glass mx-auto w-full max-w-xs rounded-3xl p-3 sm:max-w-sm lg:mx-0 lg:w-72">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl">
            <img src="/pp.png" alt="Ram Krishna Yadav" className="h-full w-full object-cover object-top" />
          </div>
          <div className="px-2 pb-1 pt-4">
            <p className="font-semibold tracking-[-0.03em]">Ram Krishna Yadav</p>
            <p className="mt-0.5 text-sm text-white/60">Full Stack &amp; AI Systems Engineer · Nepal</p>
          </div>
        </div>
      }
    >
      <p className="max-w-xl text-base font-light leading-relaxed text-white/60 sm:text-lg">
        Computer Engineering undergraduate building production AI pipelines, self-hosted cloud
        infrastructure, and real-time distributed systems.
      </p>
      <div className="mt-6 sm:mt-8">
        <ActionButton href="/Resume.pdf" className="w-full sm:w-auto">
          Download resume
        </ActionButton>
      </div>
    </PageHeader>

    <AboutPreview id="readme" number="02" />
    <ProjectsSection number="03" />
    <Experience number="04" />
    <Cta />
  </PageShell>
);

export default About;
