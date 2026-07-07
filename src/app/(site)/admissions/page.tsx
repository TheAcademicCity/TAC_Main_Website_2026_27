import {
  createPageMetadata,
  PagePlaceholder,
} from "@/components/layout/PagePlaceholder";

export const metadata = createPageMetadata(
  "Admissions",
  "Admissions at The Academic City School — enquire, visit campus, and join for Grades 5–12 boarding.",
);

export default function AdmissionsPage() {
  return (
    <PagePlaceholder
      title="Admissions"
      description="Learn how to apply, book a campus visit, and secure a place for the upcoming academic year."
    />
  );
}
