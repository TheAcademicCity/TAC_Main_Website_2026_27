import { achievementsPageContent } from "@/data/achievements";
import {
  AchievementsCtaSection,
  AchievementsHeroSection,
  ArtsSection,
  CommerceSection,
  GratitudeSection,
  JeeSection,
  NeetSection,
  SportsSection,
  StarAchieverSection,
  StatsBandSection,
} from "@/components/sections/achievements";
import { PageSubnav } from "@/components/sections/shared/PageSubnav";
import { createPageMetadata } from "@/components/layout/PagePlaceholder";

export const metadata = createPageMetadata(
  "Achievements",
  "TACS student achievements — JEE 99.96 percentile, NEET 635, NUS Singapore, CLAT AIR 338, national sports medals, published authors and award-winning artists.",
);

export default function AchievementsPage() {
  return (
    <main id="top" tabIndex={-1} className="achievements-page outline-none has-page-subnav">
      <AchievementsHeroSection />
      <PageSubnav items={achievementsPageContent.subnav} />
      <StarAchieverSection />
      <JeeSection />
      <StatsBandSection />
      <NeetSection />
      <CommerceSection />
      <SportsSection />
      <ArtsSection />
      <GratitudeSection />
      <AchievementsCtaSection />
    </main>
  );
}
