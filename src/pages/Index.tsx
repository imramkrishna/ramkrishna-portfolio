import PageShell from "@/components/layout/PageShell";
import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import Experience from "@/components/sections/Experience";
import ProjectsSection from "@/components/sections/ProjectsSection";
import Cta from "@/components/sections/ContactsPreview";

const Index = () => (
  <PageShell>
    <Hero />
    <AboutPreview number="02" />
    <Experience number="03" />
    <ProjectsSection number="04" />
    <Cta />
  </PageShell>
);

export default Index;
