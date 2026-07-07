import {
  createPageMetadata,
  PagePlaceholder,
} from "@/components/layout/PagePlaceholder";

export const metadata = createPageMetadata(
  "Academics",
  "CBSE academics at The Academic City School — rigorous foundation with personalised mentoring for Grades 5–12.",
);

export default function AcademicsPage() {
  return (
    <PagePlaceholder
      title="Academics"
      description="Explore our CBSE curriculum, student–teacher ratio, and academic programmes."
    />
  );
}
