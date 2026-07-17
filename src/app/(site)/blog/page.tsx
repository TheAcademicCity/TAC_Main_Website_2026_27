import {
  BlogArticlesSection,
  BlogFilterProvider,
  BlogPageHeader,
  NewsletterSection,
} from "@/components/sections/blog";
import { createPageMetadata } from "@/components/layout/PagePlaceholder";

export const metadata = createPageMetadata(
  "Blogs & Newsletters",
  "Insights on boarding school life, career guidance, holistic education and parenting — from The Academic City School, Bengaluru.",
);

export default function BlogPage() {
  return (
    <BlogFilterProvider>
      <main id="top" tabIndex={-1} className="blog-page outline-none">
        <BlogPageHeader />
        <NewsletterSection />
        <BlogArticlesSection />
      </main>
    </BlogFilterProvider>
  );
}
