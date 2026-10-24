import PageShell from "@/components/layout/PageShell";
import Hero from "@/components/sections/Hero";
import Ticker from "@/components/shared/Ticker";
import AboutReadme from "@/components/sections/AboutPreview";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import Experience from "@/components/sections/Experience";
import Highlights from "@/components/sections/Highlights";
import Cta from "@/components/sections/ContactsPreview";

const Index = () => (
  <PageShell>
    <Hero />
    <Ticker text="Open to freelance and full-time opportunities" />
    <AboutReadme className="lg:w-[92%] lg:ml-auto" />
    <SkillsSection number="03" className="lg:w-[92%]" />
    <ProjectsSection number="04" className="lg:w-[96%] lg:ml-auto" />
    <Experience number="05" className="lg:w-[94%]" />
    <Highlights number="06" className="lg:w-[94%] lg:ml-auto" />
    <Cta className="lg:w-[80%] lg:mx-auto" />
  </PageShell>
);

export default Index;
