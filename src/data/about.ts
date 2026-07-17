import { siteConfig } from "@/config/site";
import { createImage } from "@/lib/images";
import type { AboutPageContent } from "@/types/about";

const remote = {
  campus: "https://theacademiccity.com/images/homepage/campus/1.png",
  career: "https://theacademiccity.com/images/Home/nav/career1.png",
  boarding: "https://theacademiccity.com/images/Home/nav/boarding.png",
  sripal: "https://theacademiccity.com/images/homepage/visionary/1.png",
  mahipal: "https://theacademiccity.com/images/homepage/visionary/2.png",
} as const;

export const aboutPageContent = {
  hero: {
    title: "About",
    titleHighlight: "The Academic City",
    description:
      "India's first career-oriented boarding school — where academic rigour, Indic values and real-world career preparation come together on one residential campus in Bengaluru.",
    image: createImage("/images/about/hero.png", remote.campus, "TACS Campus"),
    stats: [
      { value: "2019", label: "Founded" },
      { value: "Gr. 5–12", label: "CBSE Boarding" },
      { value: "Bengaluru", label: "Nelamangala" },
      { value: "First", label: "Career-oriented boarding school in India" },
    ],
  },
  subnav: [
    { id: "about", label: "Who We Are" },
    { id: "vision", label: "Vision & Mission" },
    { id: "values", label: "Our Values" },
    { id: "leadership", label: "Leadership" },
    { id: "different", label: "What Makes Us Different" },
    { id: "awards", label: "Recognition" },
  ],
  whoWeAre: {
    label: "Who We Are",
    title: "A hub of transformative learning",
    paragraphs: [
      "The Academic City School (TACS) is India's first career-oriented boarding school — a CBSE residential institution in Nelamangala, Bengaluru for students from Grades 5 to 12.",
      "We were founded on a simple but radical belief: that 15 years of traditional education is not enough to prepare a child for the world they are entering. At TACS, we blend academic rigour with career exploration, Indic values with global perspective, and boarding-school structure with genuine warmth.",
      "The result is a student who doesn't just pass exams — but leaves school knowing who they are, what they want, and how to get there.",
    ],
    badge: "India's First Career-Oriented Boarding School",
    photos: [
      {
        image: createImage("/images/about/who-1.png", remote.career, "TACS students"),
        variant: "tall",
      },
      {
        image: createImage("/images/about/who-2.png", remote.campus, "TACS campus"),
        variant: "square",
      },
      {
        image: createImage("/images/about/who-3.png", remote.boarding, "Boarding life"),
        variant: "square",
      },
    ],
  },
  visionMission: {
    vision: {
      label: "Vision",
      title: "Vision",
      description:
        "To be a centre of educational excellence that nurtures holistic growth, fostering an environment where every student can discover and develop their unique potential.",
      highlights: ["holistic growth", "discover and develop their unique potential"],
      icon: "compass",
    },
    mission: {
      label: "Mission",
      title: "Mission",
      description:
        "To empower students with future-ready skills and character, preparing them to thrive in a rapidly evolving world while maintaining strong ethical values.",
      highlights: ["future-ready skills and character", "strong ethical values"],
      icon: "target",
    },
  },
  values: {
    label: "Core Values",
    title: "What we stand for",
    description:
      "Every decision at TACS — academic, pastoral, residential — traces back to these four foundations.",
    tiles: [
      {
        number: "01",
        icon: "compass",
        accent: "gold",
        title: "Career First",
        description:
          "Every child should leave school knowing their direction. Career clarity isn't an afterthought — it's the entire architecture of our programme, from Grade 6.",
      },
      {
        number: "02",
        icon: "leaf",
        accent: "emerald",
        title: "Indic Roots",
        description:
          "Grounded in Indian ethos — respect, humility, mindfulness, community. Values lived every day in the boarding routine, not just talked about in assemblies.",
      },
      {
        number: "03",
        icon: "users",
        accent: "violet",
        title: "Holistic Growth",
        description:
          "Sport, arts, SUPW, co-curriculars and LEAP — because the person a child becomes outside the classroom shapes everything that happens inside it.",
      },
      {
        number: "04",
        icon: "shieldCheck",
        accent: "cyan",
        title: "Safe & Structured",
        description:
          "A residential campus where every hour is purposeful, every child is supervised, and safety — physical and emotional — is never secondary to academics.",
      },
    ],
  },
  campusBand: {
    title: "Bengaluru's only career-oriented residential school for Grades 5–12",
    description:
      "25 km from the city · 15 km from the international airport. Close enough for parents, structured enough to transform.",
    cta: { label: "Explore Admissions", href: "/admissions" },
  },
  leadership: {
    label: "Leadership",
    title: "A message from our Chairman & President",
    leaders: [
      {
        name: "Sripal Jain",
        role: "Founder & Chairman",
        messageLabel: "Founder's Message",
        quote:
          "In today's fast-paced world, traditional pedagogy falls short. Addressing the 'need of the hour,' we blend career orientation with enriching schooling — helping students explore beyond conventional boundaries. Each child holds a unique potential; our mission is to identify and nurture this intrinsic essence, providing a foundation for lifelong growth.",
        quoteHighlights: ["career orientation with enriching schooling"],
        body: "At TACS, we delve beyond the superficial, ensuring a smooth transition from school to the global stage. Join us in this exciting journey towards a well-rounded, future-ready education.",
        image: createImage("/images/about/sripal.png", remote.sripal, "Sripal Jain"),
        altLayout: false,
      },
      {
        name: "Mahipal Kawad",
        role: "Director & President",
        messageLabel: "President's Message",
        quote:
          "We blend academic excellence with enriching experiences that ignite student passion and guide them toward career success. Our boarding environment nurtures diversity, exploration and growth beyond textbooks — encouraging self-discovery, camaraderie and creativity.",
        quoteHighlights: ["ignite student passion"],
        body: "We preserve the essence of schooling while aligning it with career-oriented goals. Join us on this inspiring educational journey.",
        image: createImage("/images/about/mahipal.png", remote.mahipal, "Mahipal Kawad"),
        altLayout: true,
      },
    ],
  },
  different: {
    label: "What Makes Us Different",
    title: "Six things no other school in Bengaluru offers together",
    cards: [
      {
        number: "01",
        title: "Career Guidance from Grade 6",
        description:
          "LEAP begins in Grade 6 — not Grade 11. Students spend 6 years building career clarity through workshops, psychometric tests and industry exposure before making any stream decision.",
      },
      {
        number: "02",
        title: "Exam Preparation On Campus",
        description:
          "NEET, JEE, NIFT, CLAT, NID and more — all prepared for on campus with specialist mentors. No commute, no compromise on boarding structure.",
      },
      {
        number: "03",
        title: "Indic Value-Based Boarding",
        description:
          "Yoga, meditation, circle time, community living — not optional extras but daily structure. Boarding life at TACS is built on Indian ethos from day one.",
      },
      {
        number: "04",
        title: "90 Minutes of Sport, Every Day",
        description:
          "Not PE twice a week — 90 minutes of structured sport every single day. Expert coaches, inter-house competitions, real participation for every student.",
      },
      {
        number: "05",
        title: "24 × 7 Pastoral Care",
        description:
          "Dorm parents, resident wardens, on-call doctor, trained counsellors — a layered care system so parents can trust their child is genuinely looked after.",
      },
      {
        number: "06",
        title: "Six Nutritious Meals Daily",
        description:
          "A vegetarian campus with Jain options — 6 freshly cooked meals every day. Nutritionist-designed, farm-fresh. Because a well-fed student is a better learner.",
      },
    ],
  },
  whyTacs: {
    label: "What TACS delivers",
    cards: [
      {
        icon: "book",
        stat: "Grades 5–12",
        title: "Full residential CBSE programme",
        description:
          "From early secondary to board exams — one structured, supervised residential campus from start to finish. No disruption, no transition.",
      },
      {
        icon: "compass",
        stat: "600+ Careers",
        title: "Explored before stream selection",
        description:
          "Through LEAP — our career guidance programme that begins in Grade 6. Workshops, psychometric tests and industry panels, years before any stream decision.",
      },
      {
        icon: "shieldCheck",
        stat: "5 National",
        title: "Awards & recognitions",
        description:
          "Education Leaders 2024, Brainfeed Top 500, India School Merit Award, 21CL ISLE Bengaluru and Best Boarding School Oxford 2024.",
      },
    ],
    footerStats: [
      { value: "2019", label: "Founded" },
      { value: "24 × 7", label: "On-campus care" },
      { value: "3+", label: "Expert mentoring partners" },
      { value: "Bengaluru", label: "Nelamangala campus" },
    ],
  },
  awards: {
    label: "Recognition",
    title: "Recognised nationally for excellence",
    items: [
      { name: "Education Leaders Award", year: "2024" },
      { name: "Brainfeed Top 500 Schools", year: "2022–23" },
      { name: "India School Merit Award", year: "National Recognition" },
      { name: "21CL ISLE Bengaluru", year: "2022" },
      { name: "Best Boarding School", year: "Oxford 2024" },
    ],
  },
  ctaBand: {
    label: "Come see for yourself",
    title: "Visit the TACS campus",
    description:
      "Walk the dormitories, meet the team, watch a day in action. Campus open Mon–Sat, 9 AM to 3:30 PM.",
    enquiry: { label: "Start your application", href: "/#enquiry" },
    phone: {
      label: siteConfig.utilityBar.phoneDisplay,
      href: `tel:${siteConfig.utilityBar.phone}`,
    },
    whatsapp: { label: "WhatsApp", href: siteConfig.contact.whatsapp },
  },
} as const satisfies AboutPageContent;
