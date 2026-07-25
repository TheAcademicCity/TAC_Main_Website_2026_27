import { CampusVideoSection } from "@/components/sections/campus";
import { createPageMetadata } from "@/components/layout/PagePlaceholder";

export const metadata = createPageMetadata(
  "Campus",
  "Take a virtual tour of The Academic City School campus in Nelamangala, Bengaluru — boarding, academics and student life.",
);

export default function CampusPage() {
  return (
    <main id="top" tabIndex={-1} className="campus-page outline-none">
      <CampusVideoSection />
    </main>
  );
}
