import {
  AchievementsCtaSection,
  AchievementsGallerySection,
  AchievementsHeroSection,
} from "@/components/sections/achievements";
import { createPageMetadata } from "@/components/layout/PagePlaceholder";

export const metadata = createPageMetadata(
  "Achievements",
  "TACS achievements and life on campus — student success stories alongside everyday campus, academics, co-curriculars and boarding.",
);

export default function AchievementsPage() {
  return (
    <main id="top" tabIndex={-1} className="achievements-page outline-none">
      <AchievementsHeroSection />
      <AchievementsGallerySection />
      <AchievementsCtaSection />
    </main>
  );
}
