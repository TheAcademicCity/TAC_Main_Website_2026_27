import {
  createPageMetadata,
  PagePlaceholder,
} from "@/components/layout/PagePlaceholder";

export const metadata = createPageMetadata(
  "Co-curricular",
  "Co-curricular and extra-curricular programmes at The Academic City School — art, sport, theatre, and life readiness.",
);

export default function CoCurricularPage() {
  return (
    <PagePlaceholder
      title="Co-curricular"
      description="Discover our co-curricular and extra-curricular offerings for all-round student development."
    />
  );
}
