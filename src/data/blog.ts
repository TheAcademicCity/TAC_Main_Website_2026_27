import { siteConfig } from "@/config/site";
import { createImage } from "@/lib/images";
import type { BlogPageContent, NewsletterIssue } from "@/types/blog";

const remote = {
  career: "https://theacademiccity.com/images/Home/nav/career1.png",
  campus: "https://theacademiccity.com/images/homepage/campus/1.png",
} as const;

const newsletterDownloads = {
  august2026:
    "/downloads/Patashala Patrika Issue 3  Month of Aug 2026_compressed.pdf",
  mayJune2026:
    "/downloads/Patashala Patrika Issue 1  Month of May-June 2026_compressed.pdf",
  july2026:
    "/downloads/Patashala Patrika Issue 2  Month of July 2026_compressed.pdf",
} as const;

const newsletterPages: { page: number; issues: NewsletterIssue[] }[] = [
  {
    page: 1,
    issues: [
      {
        month: "August 2026 · Issue #03",
        issue: "August 2026",
        title: "Patashala Patrika — stories from campus this August",
        description:
          "Highlights from another month at TACS — student achievements, campus events and the moments that brought our community together in August.",
        tags: ["Campus Life", "For Parents"],
        gradient: "linear-gradient(150deg,#6816a4 0%,#3d0d63 60%,#9040c8 100%)",
        coverHeadline: "Patashala Patrika",
        coverTag: "August 2026",
        coverTagBg: "#2d945c",
        coverImage: createImage(
          "/images/blog/nl-august.png",
          remote.campus,
          "Patashala Patrika — August 2026 issue",
          false,
        ),
        mailSubject: "August 2026",
        pdfHref: newsletterDownloads.august2026,
      },
      {
        month: "July 2026 · Issue #02",
        issue: "July 2026",
        title: "Patashala Patrika — stories from campus this July",
        description:
          "The people, events, achievements and memories that shaped our school community in July — from Grandparents Day to everyday life at TACS.",
        tags: ["Campus Life", "For Parents"],
        gradient: "linear-gradient(150deg,#0f3d38 0%,#185850 60%,#2d945c 100%)",
        coverHeadline: "Patashala Patrika",
        coverTag: "July 2026",
        coverTagBg: "#c4880e",
        coverImage: createImage(
          "/images/blog/nl-july.png",
          remote.campus,
          "Patashala Patrika — July 2026 issue",
          false,
        ),
        mailSubject: "July 2026",
        pdfHref: newsletterDownloads.july2026,
      },
      {
        month: "June 2026 · Issue #01",
        issue: "June 2026",
        title: "Patashala Patrika — the first edition from May and June",
        description:
          "Our inaugural issue capturing campus life, student voices and the moments that marked the start of Patashala Patrika at TACS.",
        tags: ["Campus Life", "For Parents"],
        gradient: "linear-gradient(150deg,#7a4b00 0%,#c4880e 70%,#f6ab16 100%)",
        coverHeadline: "Patashala Patrika",
        coverTag: "May–June 2026",
        coverTagBg: "#0f3d38",
        coverImage: createImage(
          "/images/blog/nl-june-2026.png",
          remote.career,
          "Patashala Patrika — June 2026 issue",
          false,
        ),
        mailSubject: "June 2026",
        pdfHref: newsletterDownloads.mayJune2026,
      },
      {
        month: "April 2025 · Issue #04",
        issue: "April 2025",
        title: "What parents worry about most - and what actually happens",
        description:
          "Food, friendships, safety, homesickness. We asked TACS parents what they worried about before enrolling, and whether those worries came true.",
        tags: ["For Parents", "Boarding Life"],
        gradient: "linear-gradient(150deg,#3d0d63 0%,#6816a4 60%,#9040c8 100%)",
        coverHeadline: "Parent Worries — The Reality",
        coverTag: "For Parents",
        coverTagBg: "#2d945c",
        coverImage: createImage("/images/blog/nl-april.png", remote.campus, ""),
        mailSubject: "April 2025",
      },
    ],
  },
];

export const blogPageContent = {
  header: {
    title: "Blogs &",
    titleHighlight: "Newsletters",
    description:
      "From classrooms to campus life, explore the stories, ideas and experiences that define everyday life at TACS.",
    image: createImage(
      "/images/blog/hero.png",
      remote.campus,
      "Blogs and newsletters at TACS",
    ),
  },
  newsletter: {
    brand: "Patashala Patrika",
    tag: "The TACS Parent Newsletter",
    title: "Monthly Insights into",
    titleHighlight: "Your Child's Journey",
    subscribeLabel: "Subscribe to Patashala Patrika",
    privacyNote: "No spam. One email a month. Unsubscribe any time.",
    pastIssuesLabel: "Recent Issues",
    pages: newsletterPages,
  },
  articles: {
    label: "All Blogs",
    title: "From the TACS editorial desk",
    sidebarCta: {
      label: siteConfig.admissionsBadge,
      description:
        "Interested in TACS? Come visit campus or speak with our admissions team - no commitment, just a conversation.",
      href: "/admissions",
      buttonLabel: "Learn more",
    },
  },
} satisfies BlogPageContent;

export const newsletterMailto = (subject: string) =>
  `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(`Patashala Patrika - ${subject} Issue`)}`;

export const newsletterIssueHref = (issue: NewsletterIssue) =>
  issue.pdfHref ?? newsletterMailto(issue.mailSubject);
