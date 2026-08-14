import type { SiteImage } from "@/types/images";

export type BlogCategory = "all" | "boarding" | "career" | "academics" | "life" | "parenting";

export type BlogPost = {
  category: Exclude<BlogCategory, "all">;
  categoryLabel: string;
  title: string;
  description: string;
  /** Seeded read count shown at feature launch (10k–25k). */
  baseReads: number;
  /** Fixed weekly bump applied from the reads epoch (50–70). */
  weeklyIncrease: number;
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
    image: SiteImage;
  };
  newsletter: {
    brand: string;
    tag: string;
    title: string;
    titleHighlight: string;
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
    sidebarCta: {
      label: string;
      description: string;
      href: string;
      buttonLabel: string;
    };
  };
};
