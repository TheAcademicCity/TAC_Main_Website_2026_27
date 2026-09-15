import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostView } from "@/components/sections/blog";
import { stripHtmlToExcerpt } from "@/lib/blog";
import { getBlogPostBySlug } from "@/lib/strapi-blog";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Blog", description: "The Academic City School blog." };
  }

  const title = post.metaTitle || post.title;
  const description = post.metaDescription || stripHtmlToExcerpt(post.descriptionHtml);

  return {
    title,
    description,
    alternates: post.canonicalUrl ? { canonical: post.canonicalUrl } : undefined,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <BlogPostView post={post} />;
}
