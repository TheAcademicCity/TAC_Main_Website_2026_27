import {
  createPageMetadata,
  PagePlaceholder,
} from "@/components/layout/PagePlaceholder";

export const metadata = createPageMetadata(
  "Boarding",
  "Indic value-based boarding life at The Academic City School — safe, structured residential campus in Bengaluru.",
);

export default function BoardingPage() {
  return (
    <PagePlaceholder
      title="Boarding"
      description="Learn about our residential boarding experience, hostels, pastoral care, and campus life."
    />
  );
}
