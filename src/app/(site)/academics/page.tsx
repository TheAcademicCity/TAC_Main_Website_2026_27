import { academicsPageContent } from "@/data/academics";
import {
  AcademicsCtaSection,
  AcademicsHeroSection,
  AssessmentSection,
  CdfOverviewSection,
  CurriculumSection,
  GradeJourneySection,
  ProgressionBandSection,
  StreamsSection,
} from "@/components/sections/academics";
import { PageSubnav } from "@/components/sections/shared/PageSubnav";
import { createPageMetadata } from "@/components/layout/PagePlaceholder";

export const metadata = createPageMetadata(
  "Academics",
  "CBSE academics at The Academic City School — concept-driven learning, 1:10 mentoring, structured assessment and career-aligned preparation for Grades 5–12.",
);

export default function AcademicsPage() {
  return (
    <main id="top" tabIndex={-1} className="academics-page outline-none has-page-subnav">
      <AcademicsHeroSection />
      <PageSubnav items={academicsPageContent.subnav} />
      <CdfOverviewSection />
      <CurriculumSection />
      <ProgressionBandSection />
      <GradeJourneySection />
      <AssessmentSection />
      <StreamsSection />
      <AcademicsCtaSection />
    </main>
  );
}
