import { aboutPageContent } from "@/data/about";
import {
  AboutCampusBandSection,
  AboutCtaSection,
  AboutHeroSection,
  AboutValuesSection,
  PrincipalDeskSection,
  DifferentSection,
  LeadershipSection,
  VisionMissionSection,
  WhoWeAreSection,
} from "@/components/sections/about";
import { PageSubnav } from "@/components/sections/shared/PageSubnav";
import { createPageMetadata } from "@/components/layout/PagePlaceholder";

export const metadata = createPageMetadata(
  "About Us",
  "About The Academic City School - India's first career-oriented boarding school in Bengaluru. Our vision, mission, leadership and what makes TACS different.",
);

export default function AboutPage() {
  return (
    <main id="top" tabIndex={-1} className="about-page outline-none has-page-subnav">
      <AboutHeroSection />
      <PageSubnav items={aboutPageContent.subnav} />
      <WhoWeAreSection />
      <VisionMissionSection />
      <AboutValuesSection />
      <PrincipalDeskSection />
      <AboutCampusBandSection />
      <LeadershipSection />
      <DifferentSection />
      <AboutCtaSection />
    </main>
  );
}
