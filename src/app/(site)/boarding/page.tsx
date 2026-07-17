import { boardingPageContent } from "@/data/boarding";
import {
  BoardingBandSection,
  BoardingCtaSection,
  BoardingHeroSection,
  CareSection,
  CommunicationSection,
  DisciplineSection,
  DormSection,
  GallerySection,
  OutpassSection,
  ScheduleSection,
  ValuesSection,
} from "@/components/sections/boarding";
import { PageSubnav } from "@/components/sections/shared/PageSubnav";
import { createPageMetadata } from "@/components/layout/PagePlaceholder";

export const metadata = createPageMetadata(
  "Boarding",
  "Indic value-based boarding life at The Academic City School — safe, structured residential campus in Bengaluru.",
);

export default function BoardingPage() {
  return (
    <main id="top" tabIndex={-1} className="boarding-page outline-none has-page-subnav">
      <BoardingHeroSection />
      <PageSubnav items={boardingPageContent.subnav} />
      <ValuesSection />
      <BoardingBandSection />
      <DormSection />
      <ScheduleSection />
      <CommunicationSection />
      <OutpassSection />
      <DisciplineSection />
      <CareSection />
      <GallerySection />
      <BoardingCtaSection />
    </main>
  );
}
