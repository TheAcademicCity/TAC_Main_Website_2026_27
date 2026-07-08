import { academicsPageContent } from "@/data/academics";
import {
  AcademicCareerBridgeSection,
  AcademicCareerCalloutSection,
  AcademicGrowthSection,
  AcademicLeadersSection,
  AcademicTestimonialsSection,
  AcademicsIntroSection,
  CurriculumSection,
  ProgressionPlanSection,
} from "@/components/sections/academics";
import { PageHero } from "@/components/sections/shared/PageHero";
import { createPageMetadata } from "@/components/layout/PagePlaceholder";

export const metadata = createPageMetadata(
  "Academics",
  "CBSE and Cambridge academics at The Academic City School — rigorous foundation, personalised mentoring and Student Progression Plans for Grades 4–12.",
);

export default function AcademicsPage() {
  const { hero } = academicsPageContent;

  return (
    <>
      <PageHero label={hero.label} title={hero.title} image={hero.image} />
      <AcademicsIntroSection />
      <AcademicLeadersSection />
      <CurriculumSection />
      <AcademicCareerCalloutSection />
      <AcademicGrowthSection />
      <ProgressionPlanSection />
      <AcademicTestimonialsSection />
      <AcademicCareerBridgeSection />
    </>
  );
}
