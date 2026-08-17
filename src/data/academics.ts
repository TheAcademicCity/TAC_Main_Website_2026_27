import { siteConfig } from "@/config/site";
import { createImage } from "@/lib/images";
import type { AcademicsPageContent } from "@/types/academics";

const remote = {
  hero: "https://theacademiccity.com/images/Home/nav/academics.png",
} as const;

export const academicsPageContent = {
  hero: {
    title: "Academics at",
    titleHighlight: "TACS",
    description:
      "NEP 2020 aligned curriculum, concept-driven learning, personalised mentoring and structured preparation for every child's future.",
    image: createImage("/images/academics/hero.png", remote.hero, "TACS Academics"),
    stats: [
      { value: "CBSE", label: "NCERT curriculum" },
      { value: "1 : 10", label: "Student–teacher ratio" },
      { value: "Grades 5–12", label: "Residential boarding" },
      { value: "600+", label: "Career paths aligned" },
    ],
  },
  subnav: [
    { id: "overview", label: "Overview" },
    { id: "curriculum", label: "Curriculum" },
    { id: "progression", label: "Grade Journey" },
    { id: "assessment", label: "Assessment" },
    { id: "streams", label: "School Integrated Programme" },
  ],
  overview: {
    label: "Core Delivery Framework — Academics",
    title: "Three pillars. Every lesson.\nEvery day.",
    description:
      "A structured, concept-driven programme supported by personalised teaching and continuous assessment - so every child grows consistently.",
    pillars: [
      {
        number: "01",
        title: "Academic Framework",
        icon: "📚",
        accent: "emerald",
        items: [
          "CBSE-aligned, concept-based curriculum",
          "Structured yearly academic planning",
          "Focus on application & problem-solving",
          "Foundational to advanced learning integration",
          "Subject-wise progression maps per grade",
        ],
      },
      {
        number: "02",
        title: "Teaching & Support",
        icon: "👩‍🏫",
        accent: "gold",
        items: [
          "Student-centric, interactive classrooms",
          "Regular doubt-solving & supervised study",
          "Remedial support + enrichment programmes",
          "Personalised mentoring & guidance",
          "1:10 ratio across all grades",
        ],
      },
      {
        number: "03",
        title: "Assessment & Tracking",
        icon: "📊",
        accent: "violet",
        items: [
          "Continuous assessments + term exams",
          "Regular testing for concept reinforcement",
          "Individual performance tracking & analysis",
          "Transparent feedback to students & parents",
          "Student Progression Plans reviewed termly",
        ],
      },
    ],
  },
  curriculum: {
    image: createImage("/images/academics/classroom.png", remote.hero, "Classroom at TACS", false),
    imageTag: "",
    label: "Curriculum",
    title: "Built for understanding,\nnot just marks",
    description:
      "Every subject is taught for depth - not rote recall. Students build genuine conceptual foundations and are encouraged to question, apply and think independently.",
    features: [
      {
        title: "Concept-first, always",
        description:
          "Topics taught through understanding before application - every student moves at the right pace.",
      },
      {
        title: "Nightly supervised study",
        description:
          "Evenings at TACS mean structured study with teachers on hand - a distinct advantage of boarding.",
      },
      {
        title: "Enrichment for high achievers",
        description:
          "Advanced challenges, Olympiad preparation and project-based learning for students ready to go further.",
      },
    ],
    cta: { label: "Ask about our curriculum", href: "/#enquiry" },
    approachTitle: "How we teach",
    approach: [
      {
        number: "01",
        icon: "🧠",
        title: "Concept-First",
        description: 'The "why" before the "how" - so knowledge sticks for life, not just the exam.',
      },
      {
        number: "02",
        icon: "🤝",
        title: "Personalised Mentoring",
        description:
          "1:10 ratio means every student has an academic mentor who tracks their progress closely.",
      },
      {
        number: "03",
        icon: "🔬",
        title: "Practical & Experiential",
        description: "Labs, workshops and real-world problem sets - learning that is tactile and memorable.",
      },
      {
        number: "04",
        icon: "💡",
        title: "Inquiry & Critical Thinking",
        description:
          "Students are taught to question, debate and reason - skills that serve them long after school.",
      },
    ],
  },
  progressionBand: {
    title: "Every child gets a Student Progression Plan",
    description: "Tailored to their pace and goals - reviewed every term by their academic mentor.",
    cta: { label: "Connect with us", href: "/#enquiry" },
  },
  gradeJourney: {
    label: "Grade Journey",
    title: "Grade 5 to Grade 12 - a clear path",
    description:
      "Each phase has a deliberate purpose - building foundations, broadening horizons, then sharpening focus.",
    steps: [
      {
        grades: "5–6",
        phase: "Foundation",
        title: "Building the base",
        description:
          "Language, Maths, Science - Strong foundations in a nurturing, exploratory environment.",
        chips: ["Core CBSE", "Curiosity-led"],
        accent: "emerald",
      },
      {
        grades: "7–8",
        phase: "Middle",
        title: "Broadening & deepening",
        description:
          "Subjects deepen. Students begin discovering what they love - strengths are spotted early.",
        chips: ["Project learning", "Career exposure"],
        accent: "gold",
      },
      {
        grades: "9–10",
        phase: "Exploration",
        title: "Board preparation",
        description: "Full CBSE board prep  - \nmock exams, analysis sessions,\nindividual tracking.",
        chips: ["Mock tests", "1:1 mentoring"],
        accent: "gold",
      },
      {
        grades: "11–12",
        phase: "Focused",
        title: "Career-aligned specialisation",
        description:
          "Stream + competitive exam preparation, from JEE to NEET to CLAT, alongside boards.",
        chips: ["Stream choice", "Exam prep"],
        accent: "violet",
      },
    ],
  },
  assessment: {
    label: "Assessment & Tracking",
    title: "No child falls through the cracks",
    description:
      "A continuous system that identifies gaps early - and closes them before they become problems.",
    communicationTitle: "How we communicate progress",
    communication: [
      {
        icon: "📋",
        title: "Student Progression Plan (SPP)",
        description:
          "Each child's personalised academic road map - reviewed termly, shared with parents.",
      },
      {
        icon: "💻",
        title: "ERP-Based Parent Connect",
        description:
          "Consistent communication beyond PTMs, with concerns shared promptly through the ERP.",
      },
      {
        icon: "📈",
        tone: "gold",
        title: "Digital Report Cards",
        description:
          "Subject-wise reports after each assessment, with teacher comments - accessible digitally.",
      },
      {
        icon: "🧭",
        tone: "violet",
        title: "Academic Mentor Reviews",
        description: "One-on-one sessions between each student and their mentor, every term.",
      },
    ],
  },
  streams: {
    label: "School Integrated Programme",
    title: "Focused preparation for the future",
    description:
      "Stream + board prep + competitive exam support - structured from Day 1 of Grade 11.",
    cta: { label: "Discuss your child's path", href: "/#enquiry" },
    cards: [
      {
        icon: "⚙️",
        title: "Science — Engineering",
        items: [
          "Physics, Chemistry, Mathematics",
          "JEE Main & Advanced preparation",
          "BITSAT, VIT, KCET guidance",
        ],
      },
      {
        icon: "🩺",
        title: "Science — Medical",
        items: [
          "Physics, Chemistry, Biology",
          "NEET UG structured preparation",
          "AIIMS & medical college guidance",
        ],
      },
      {
        icon: "💼",
        title: "Commerce",
        items: ["Accountancy, Economics, Business", "CUET preparation", "CA Foundation, CLAT pathways"],
      },
    ],
    partners: {
      label: "Academic Assistance partners",
      logos: [
        {
          src: "/images/home/campus/partners/allen-white.png",
          alt: "Allen Career Institute",
        },
        {
          src: "/images/home/campus/partners/trisha-classes-white.png",
          alt: "Trisha Classes",
        },
      ],
    },
  },
  ctaBand: {
    label: siteConfig.admissionsBadge,
    title: "Ready to know more?",
    description:
      "Talk to our admissions team - ask anything about curriculum, study hours, exam preparation or how we'll support your child specifically.",
    enquiry: { label: "Start your journey", href: "/#enquiry" },
    phone: {
      label: siteConfig.contact.phoneDisplay,
      href: `tel:${siteConfig.contact.phone}`,
    },
    whatsapp: { label: "WhatsApp", href: siteConfig.contact.whatsapp },
  },
} satisfies AcademicsPageContent;
