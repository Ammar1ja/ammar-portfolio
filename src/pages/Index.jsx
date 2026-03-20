

import AwardsSection from "../components/portfolio/AwardsSection";
import EducationSection from "../components/portfolio/EducationSection";
import ExperienceSection from "../components/portfolio/ExperienceSection";
import FooterSection from "../components/portfolio/FooterSection";
import HeroSection from "../components/portfolio/HeroSection";
import InterestsSection from "../components/portfolio/InterestsSection";
import LanguagesSection from "../components/portfolio/LanguagesSection";
import ProjectsSection from "../components/portfolio/ProjectsSection";
import SkillsSection from "../components/portfolio/SkillsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <LanguagesSection />
      <AwardsSection />
      <InterestsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
