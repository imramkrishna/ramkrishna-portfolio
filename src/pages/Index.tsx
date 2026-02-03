import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Quote from "@/components/sections/Quote";
import ProjectsPreview from "@/components/sections/ProjectsPreview";
import SkillsSection from "@/components/sections/SkillsSection";
import AboutPreview from "@/components/sections/AboutPreview";
import ContactsPreview from "@/components/sections/ContactsPreview";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Sidebar />

      <main className="pt-16 md:pl-16 lg:pl-24">
        <Hero />
        <ProjectsPreview />
        <SkillsSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
