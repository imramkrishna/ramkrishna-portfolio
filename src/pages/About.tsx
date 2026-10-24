import PageShell from "@/components/layout/PageShell";
import Window from "@/components/shared/Window";
import Ticker from "@/components/shared/Ticker";
import AboutReadme from "@/components/sections/AboutPreview";
import ProjectsSection from "@/components/sections/ProjectsSection";
import Experience from "@/components/sections/Experience";
import SkillsSection from "@/components/sections/SkillsSection";

const About = () => (
  <PageShell>
    <section className="grid gap-8 lg:grid-cols-[1fr_340px] items-start">
      <Window title="ABOUT.EXE" labelledBy="about-page-title">
        <div className="rd-pane bg-[var(--rd-yellow)] p-6 sm:p-10 min-h-[260px] flex flex-col">
          <p className="rd-num">01 / WHO AM I?</p>
          <h1 id="about-page-title" className="rd-hero-title mt-6 text-[clamp(3rem,8vw,6.5rem)]">
            About me
          </h1>
        </div>
      </Window>
      <Window title="PROFILE.JPG" as="aside">
        <div className="rd-well p-3">
          <div className="border-2 border-black bg-[var(--rd-yellow)] aspect-[4/5] overflow-hidden">
            <img src="/pp.png" alt="Ram Krishna Yadav" className="w-full h-full object-cover object-top" />
          </div>
        </div>
      </Window>
    </section>

    <Ticker text="Full Stack & AI Systems Engineer · Based in Nepal" />
    <AboutReadme />
    <ProjectsSection number="03" className="lg:w-[96%] lg:ml-auto" />
    <Experience number="04" className="lg:w-[94%]" />
    <SkillsSection number="05" className="lg:w-[94%] lg:ml-auto" />
  </PageShell>
);

export default About;
