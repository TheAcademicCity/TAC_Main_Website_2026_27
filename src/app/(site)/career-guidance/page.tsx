import {
  createPageMetadata,
  PagePlaceholder,
} from "@/components/layout/PagePlaceholder";

export const metadata = createPageMetadata(
  "Career Guidance",
  "Early career discovery at The Academic City School — 600+ career paths explored from Grade 5 onwards.",
);

export default function CareerGuidancePage() {
  return (
    <PagePlaceholder
      title="Career Guidance"
      description="Explore our career orientation programmes, psychometric assessments, and industry mentoring."
    />
  );
}
