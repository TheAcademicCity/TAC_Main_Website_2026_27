import { coCurricularPageContent } from "@/data/coCurricular";
import {
  ClubsSection,
  CoCurricularCtaSection,
  CoCurricularHeroSection,
  EventsSection,
  FacilitiesSection,
  LifeReadinessSection,
  PhilosophySection,
  SportBandSection,
  SportsSection,
  SupwSection,
} from "@/components/sections/co-curricular";
import { PageSubnav } from "@/components/sections/shared/PageSubnav";
import { createPageMetadata } from "@/components/layout/PagePlaceholder";

export const metadata = createPageMetadata(
  "Co-curricular",
  "Sports, clubs, events and community service at TACS — built into every day, not squeezed in after school.",
);

export default function CoCurricularPage() {
  return (
    <main id="top" tabIndex={-1} className="co-curricular-page outline-none has-page-subnav">
      <CoCurricularHeroSection />
      <PageSubnav items={coCurricularPageContent.subnav} />
      <PhilosophySection />
      <SportsSection />
      <FacilitiesSection />
      <SportBandSection />
      <ClubsSection />
      <EventsSection />
      <SupwSection />
      <LifeReadinessSection />
      <CoCurricularCtaSection />
    </main>
  );
}
