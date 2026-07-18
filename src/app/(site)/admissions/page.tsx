import { admissionsPageContent } from "@/data/admissions";
import {
  AdmissionsCtaSection,
  AdmissionsHeroSection,
  ClaritySection,
  CriteriaSection,
  FaqSection,
  OnlineBandSection,
  OverviewSection,
  ProcessSection,
  ScholarshipsSection,
} from "@/components/sections/admissions";
import { PageSubnav } from "@/components/sections/shared/PageSubnav";
import { createPageMetadata } from "@/components/layout/PagePlaceholder";

export const metadata = createPageMetadata(
  "Admissions",
  "Admissions at The Academic City School — enquire, visit campus, and join for Grades 5–12 boarding.",
);

export default function AdmissionsPage() {
  return (
    <main id="top" tabIndex={-1} className="admissions-page outline-none has-page-subnav">
      <AdmissionsHeroSection />
      <PageSubnav items={admissionsPageContent.subnav} />
      <OverviewSection />
      <ProcessSection />
      <CriteriaSection />
      <OnlineBandSection />
      <ScholarshipsSection />
      <ClaritySection />
      <FaqSection />
      <AdmissionsCtaSection />
    </main>
  );
}
