import { AchievementsHeroSection } from "@/components/sections/achievements";
import { GallerySection } from "@/components/sections/home";
import { createPageMetadata } from "@/components/layout/PagePlaceholder";

export const metadata = createPageMetadata(
  "Achievements",
  "TACS achievements and life on campus — student success stories alongside everyday campus, academics, co-curriculars and boarding.",
);

export default function AchievementsPage() {
  return (
    <main id="top" tabIndex={-1} className="achievements-page outline-none">
      <AchievementsHeroSection />
      <GallerySection dense />
    </main>
  );
}
