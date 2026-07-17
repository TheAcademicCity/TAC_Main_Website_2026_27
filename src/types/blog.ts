import type { SiteImage } from "@/types/images";

export type BlogCategory = "all" | "boarding" | "career" | "academics" | "life" | "parenting";

export type BlogPost = {
  category: Exclude<BlogCategory, "all">;
  categoryLabel: string;
  title: string;
  description: string;
  readTime: string;
  href: string;
  image: SiteImage;
  gradient: string;
  badgeClass: string;
};

export type NewsletterIssue = {
  month: string;
  issue: string;
  title: string;
  description: string;
  tags: readonly string[];
  gradient: string;
  coverHeadline: string;
  coverTag: string;
  coverTagBg: string;
  coverImage: SiteImage;
  mailSubject: string;
};

export type PopularPost = {
  number: string;
  title: string;
  meta: string;
  href: string;
};

export type BlogPageContent = {
  header: {
    title: string;
    titleHighlight: string;
    description: string;
    filters: readonly { id: BlogCategory; label: string }[];
  };
  newsletter: {
    brand: string;
    tag: string;
    title: string;
    titleHighlight: string;
    description: string;
    subscribeLabel: string;
    privacyNote: string;
    pastIssuesLabel: string;
    pages: readonly { page: number; issues: readonly NewsletterIssue[] }[];
  };
  articles: {
    label: string;
    title: string;
    posts: readonly BlogPost[];
    externalBlogUrl: string;
    popularPosts: readonly PopularPost[];
    topics: readonly { id: BlogCategory; label: string }[];
    sidebarCta: {
      label: string;
      description: string;
      href: string;
      buttonLabel: string;
    };
  };
};
