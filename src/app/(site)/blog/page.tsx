import {
  BlogArticlesSection,
  BlogPageHeader,
  NewsletterSection,
} from "@/components/sections/blog";
import { createPageMetadata } from "@/components/layout/PagePlaceholder";
import {
  categoryPresetForId,
  estimateReadMinutes,
  seedReadsFromId,
  stripHtmlToExcerpt,
} from "@/lib/blog";
import { blogFallbackImage, getAllBlogPosts, type BlogPostDetail } from "@/lib/strapi-blog";
import type { BlogPost, PopularPost } from "@/types/blog";

export const metadata = createPageMetadata(
  "Blogs & Newsletters",
  "Insights on boarding school life, career guidance, holistic education and parenting - from The Academic City School, Bengaluru.",
);

function toBlogPost(post: BlogPostDetail): BlogPost {
  const preset = categoryPresetForId(post.id);
  const { baseReads, weeklyIncrease } = seedReadsFromId(post.id);

  return {
    category: preset.category,
    categoryLabel: preset.categoryLabel,
    title: post.title,
    description: stripHtmlToExcerpt(post.descriptionHtml),
    baseReads,
    weeklyIncrease,
    href: `/blog/${post.slug}`,
    image: post.image ?? {
      src: blogFallbackImage,
      fallbackSrc: blogFallbackImage,
      alt: post.title,
      isPlaceholder: true,
    },
    gradient: preset.gradient,
    badgeClass: preset.badgeClass,
  };
}

function toPopularPost(post: BlogPostDetail, index: number): PopularPost {
  const preset = categoryPresetForId(post.id);

  return {
    number: String(index + 1).padStart(2, "0"),
    title: post.title,
    meta: `${preset.categoryLabel} · ${estimateReadMinutes(post.descriptionHtml)} min`,
    href: `/blog/${post.slug}`,
  };
}

export default async function BlogPage() {
  const cmsPosts = await getAllBlogPosts();
  const posts = cmsPosts.map(toBlogPost);
  const popularPosts = cmsPosts.slice(0, 5).map(toPopularPost);

  return (
    <main id="top" tabIndex={-1} className="blog-page outline-none">
      <BlogPageHeader />
      <NewsletterSection />
      <BlogArticlesSection posts={posts} popularPosts={popularPosts} />
    </main>
  );
}
