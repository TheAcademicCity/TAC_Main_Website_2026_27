import {
  createPageMetadata,
  PagePlaceholder,
} from "@/components/layout/PagePlaceholder";

export const metadata = createPageMetadata(
  "Blogs & Newsletters",
  "School updates and campus life at The Academic City School — news, events, and stories from TACS.",
);

export default function BlogPage() {
  return (
    <PagePlaceholder
      title="Blogs & Newsletters"
      description="Read the latest news, events, and updates from life on campus."
    />
  );
}
