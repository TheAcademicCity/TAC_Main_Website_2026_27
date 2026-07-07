import {
  createPageMetadata,
  PagePlaceholder,
} from "@/components/layout/PagePlaceholder";

export const metadata = createPageMetadata(
  "About Us",
  "Learn about The Academic City School — India's first career-oriented boarding school in Bengaluru.",
);

export default function AboutPage() {
  return (
    <PagePlaceholder
      title="About Us"
      description="This page is under construction. Content will be added in a future update."
    />
  );
}
