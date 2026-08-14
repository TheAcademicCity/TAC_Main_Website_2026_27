import { siteConfig } from "@/config/site";
import { createImage } from "@/lib/images";
import type { BlogPageContent, NewsletterIssue } from "@/types/blog";

const remote = {
  academics: "https://theacademiccity.com/images/Home/nav/academics.png",
  career: "https://theacademiccity.com/images/Home/nav/career1.png",
  curriculum: "https://theacademiccity.com/images/Home/nav/curriculam.png",
  boarding: "https://theacademiccity.com/images/Home/nav/boarding.png",
  sports: "https://theacademiccity.com/images/Home/nav/sports.png",
  campus: "https://theacademiccity.com/images/homepage/campus/1.png",
} as const;

const newsletterPages: { page: number; issues: NewsletterIssue[] }[] = [
  {
    page: 1,
    issues: [
      {
        month: "June 2025 · Issue #06",
        issue: "June 2025",
        title: "How do boarding school students manage stress before exams?",
        description:
          "A behind-the-scenes look at how the TACS evening prep schedule, study habits and pastoral care combine to keep students calm and focused.",
        tags: ["Boarding Life", "Academics"],
        gradient: "linear-gradient(150deg,#0a3028 0%,#185850 60%,#2d945c 100%)",
        coverHeadline: "Managing Exam Stress",
        coverTag: "Boarding Life · Academics",
        coverTagBg: "#2d945c",
        coverImage: createImage("/images/blog/nl-june.png", remote.academics, ""),
        mailSubject: "June 2025",
      },
      {
        month: "May 2025 · Issue #05",
        issue: "May 2025",
        title: "Career Utsav 2025 - what students discovered about themselves",
        description:
          "Highlights from this year's TACS career fair - the conversations, the surprises, and why Grade 7 students already have a sense of direction.",
        tags: ["Career & LEAP", "Campus Life"],
        gradient: "linear-gradient(150deg,#7a4b00 0%,#c4880e 70%,#f6ab16 100%)",
        coverHeadline: "Career Utsav 2025",
        coverTag: "Career & LEAP",
        coverTagBg: "#0f3d38",
        coverImage: createImage("/images/blog/nl-may.png", remote.career, ""),
        mailSubject: "May 2025",
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
    posts: [
      {
        category: "life",
        categoryLabel: "Student Life",
        title: "Digital Detox for Students – The Paradox of Unplugging to Connect Better",
        description:
          "Screens are everywhere - classrooms, homes, leisure. How do residential schools build healthy balance between digital learning and real-life connection?",
        baseReads: 14281,
        weeklyIncrease: 55,
        href: "https://theacademiccity.com/blog/digital-detox-for-students-the-paradox-of-unplugging-to-connect-better",
        image: createImage("/images/blog/post-digital.png", remote.boarding, ""),
        gradient: "linear-gradient(135deg,#0f3d38,#185850)",
        badgeClass: "bg-forest text-white",
      },
      {
        category: "life",
        categoryLabel: "Boarding Life",
        title: "Strong Bodies & Steady Minds: The Power of Sports in Student Life",
        description:
          "Exercise improves health - but for children it goes deeper. How daily sport in residential schools builds resilience, emotional stability and academic focus.",
        baseReads: 18754,
        weeklyIncrease: 60,
        href: "https://theacademiccity.com/blog/strong-bodies-steady-minds-the-power-of-sports-in-student-life",
        image: createImage("/images/blog/post-sports.png", remote.sports, ""),
        gradient: "linear-gradient(135deg,#0a3028,#2d945c)",
        badgeClass: "bg-emerald text-white",
      },
      {
        category: "academics",
        categoryLabel: "Academics",
        title: "How Boarding Schools Teach Students to Learn From Exams",
        description:
          "Exams as checkpoints, not finish lines. How structured residential environments turn assessments into tools for growth instead of sources of fear.",
        baseReads: 21347,
        weeklyIncrease: 65,
        href: "https://theacademiccity.com/blog/how-boarding-schools-teach-students-to-learn-from-exams",
        image: createImage("/images/blog/post-exams.png", remote.academics, ""),
        gradient: "linear-gradient(135deg,#3d0d63,#6816a4)",
        badgeClass: "bg-violet text-white",
      },
      {
        category: "academics",
        categoryLabel: "Academics",
        title: "From Chalkboards to Smartboards: Technology's Role in Academic Success",
        description:
          "How CBSE boarding schools are integrating technology not as a trend, but as a genuine driver of academic understanding and career readiness.",
        baseReads: 11896,
        weeklyIncrease: 60,
        href: "https://theacademiccity.com/blog/from-chalkboards-to-smartboards-technology-role-in-academic-success",
        image: createImage("/images/blog/post-tech.png", remote.curriculum, ""),
        gradient: "linear-gradient(135deg,#3d0d63,#6816a4)",
        badgeClass: "bg-violet text-white",
      },
      {
        category: "academics",
        categoryLabel: "Academics",
        title: "STEM to Stories: Why a Balanced Curriculum Shapes Smarter Thinkers",
        description:
          "Knowledge without creativity falls short, and creativity without discipline loses direction. How TACS blends STEM, arts and sport into one cohesive whole.",
        baseReads: 16523,
        weeklyIncrease: 55,
        href: "https://theacademiccity.com/blog/stem-to-stories-why-a-balanced-curriculum-shapes-smarter-thinkers",
        image: createImage("/images/blog/post-stem.png", remote.career, ""),
        gradient: "linear-gradient(135deg,#7a4b00,#c4880e)",
        badgeClass: "bg-violet text-white",
      },
      {
        category: "career",
        categoryLabel: "Career & LEAP",
        title: "Why Early Career Guidance Matters More Than Ever",
        description:
          "Students who engage in career exploration during school are significantly more likely to land work aligned with their interests. Starting at Grade 6 is the TACS way.",
        baseReads: 23908,
        weeklyIncrease: 70,
        href: "https://theacademiccity.com/blog/why-early-career-guidance-matters-more-than-ever",
        image: createImage("/images/blog/post-career.png", remote.career, ""),
        gradient: "linear-gradient(135deg,#7a4b00,#c4880e)",
        badgeClass: "bg-gold text-forest-deep",
      },
    ],
    externalBlogUrl: "https://theacademiccity.com/blog",
    popularPosts: [
      {
        number: "01",
        title: "Why Early Career Guidance Matters More Than Ever",
        meta: "Career & LEAP · 6 min",
        href: "https://theacademiccity.com/blog/why-early-career-guidance-matters-more-than-ever",
      },
      {
        number: "02",
        title: "Strong Bodies & Steady Minds: The Power of Sports",
        meta: "Boarding Life · 5 min",
        href: "https://theacademiccity.com/blog/strong-bodies-steady-minds-the-power-of-sports-in-student-life",
      },
      {
        number: "03",
        title: "The Secret to Academic Success",
        meta: "Career & LEAP · 7 min",
        href: "https://theacademiccity.com/blog/the-secret-to-academic-success-strategies-students-actually-use",
      },
      {
        number: "04",
        title: "How Boarding Schools Teach Students to Learn From Exams",
        meta: "Academics · 6 min",
        href: "https://theacademiccity.com/blog/how-boarding-schools-teach-students-to-learn-from-exams",
      },
      {
        number: "05",
        title: "Holistic Growth: The Boarding School Advantage",
        meta: "Boarding Life · 5 min",
        href: "https://theacademiccity.com/blog/holistic-growth-in-focus-the-boarding-school-advantage-in-bangalore-and-karnataka",
      },
    ],
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
