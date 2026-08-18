import { siteConfig } from "@/config/site";
import { createImage } from "@/lib/images";
import type { AboutPageContent } from "@/types/about";

const remote = {
  campus: "https://theacademiccity.com/images/homepage/campus/1.png",
  career: "https://theacademiccity.com/images/Home/nav/career1.png",
  boarding: "https://theacademiccity.com/images/Home/nav/boarding.png",
  academics: "https://theacademiccity.com/images/Home/nav/academics.png",
  agri: "https://theacademiccity.com/images/Home/nav/agri1.png",
  sripal: "https://theacademiccity.com/images/homepage/visionary/1.png",
  mahipal: "https://theacademiccity.com/images/homepage/visionary/2.png",
} as const;

export const aboutPageContent = {
  hero: {
    title: "About",
    titleHighlight: "The Academic City",
    description:
      "India's first career-oriented boarding school - where academic rigour, Indic values, and real-world career preparation come together across our premier residential campuses.",
    descriptionHighlights: ["India's first career-oriented boarding school"],
    image: createImage("/images/about/hero.png", remote.campus, "TACS Campus"),
    stats: [
      { value: "Bengaluru", label: "Nelamangala" },
      { value: "Indore", label: "Mohankheda" },
    ],
  },
  subnav: [
    { id: "about", label: "Who We Are" },
    { id: "vision", label: "Vision & Mission" },
    { id: "values", label: "Our Values" },
    { id: "leadership", label: "Leadership" },
    { id: "different", label: "What Makes Us Different" },
  ],
  whoWeAre: {
    label: "Who We Are",
    title: "A hub of transformative learning",
    paragraphs: [
      "The Academic City School (TACS) is India's first career-oriented boarding school - a CBSE residential institution in Nelamangala, Bengaluru for students from Grades 5 to 12.",
      "We were founded on a simple but radical belief: that 15 years of traditional education is not enough to prepare a child for the world they are entering. At TACS, we blend academic rigour with career exploration, Indic values with global perspective, and boarding-school structure with genuine warmth.",
      "The result is a student who doesn't just pass exams - but leaves school knowing who they are, what they want, and how to get there.",
    ],
    badge: "India's First Career-Oriented Boarding School",
    photos: [
      {
        // Microscope — strong focal subject for the tall left tile
        image: createImage(
          "/images/about/who-1.png",
          remote.career,
          "Students examining a specimen under a microscope",
          false,
        ),
        variant: "tall",
        objectClassName: "object-[center_40%]",
      },
      {
        // Computer lab — bright colour punch in the compact tile
        image: createImage(
          "/images/about/who-2.png",
          remote.campus,
          "Student working in the computer lab",
          false,
        ),
        variant: "compact",
        objectClassName: "object-[70%_center]",
      },
      {
        // Outdoor class — needs width for the group scene
        image: createImage(
          "/images/about/who-3.png",
          remote.boarding,
          "Outdoor classroom session on campus",
          false,
        ),
        variant: "wide",
        objectClassName: "object-[center_45%]",
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
      icon: "👁️",
    },
    mission: {
      label: "Mission",
      title: "Mission",
      description:
        "To empower students with future-ready skills and character, preparing them to thrive in a rapidly evolving world while maintaining strong ethical values.",
      highlights: ["future-ready skills and character", "strong ethical values"],
      icon: "🎯",
    },
  },
  values: {
    label: "Core Values",
    title: "What we stand for",
    description:
      "Every decision at TACS - academic, pastoral, residential - traces back to these four foundations.",
    tiles: [
      {
        icon: "💼",
        accent: "gold",
        title: "Career First",
        description:
          "Every child should leave school knowing their direction. Career clarity isn't an afterthought - it's the entire architecture of our programme, from Grade 6.",
      },
      {
        icon: "👨‍👩‍👧‍👦",
        accent: "emerald",
        title: "Indic Roots",
        description:
          "Grounded in Indian ethos - respect, humility, mindfulness, community. Values lived every day in the boarding routine, not just talked about in assemblies.",
      },
      {
        icon: "🌱",
        accent: "violet",
        title: "Holistic Growth",
        description:
          "Sport, arts, SUPW, co-curriculars and LEAP - because the person a child becomes outside the classroom shapes everything that happens inside it.",
      },
      {
        icon: "🛡️",
        accent: "cyan",
        title: "Safe & Structured",
        description:
          "A residential campus where every hour is purposeful, every child is supervised, and safety - physical and emotional - is never secondary to academics.",
      },
    ],
  },
  principalDesk: {
    label: "From the Principal's Desk",
    title: "A welcome from our Principal",
    paragraphs: [
      "Welcome to The Academic City School, Bangalore, a premier residential school committed to providing an enriching and transformative educational experience.",
      "At TACS, we believe that education is not confined to the classroom. Our residential environment provides students with opportunities to learn, grow, develop independence, build strong values, and cultivate lifelong friendships. We strive to create a nurturing and disciplined atmosphere where every child feels secure, valued, and motivated to excel.",
      "Our focus is on academic excellence, character formation, leadership, life skills, sports, creativity, and holistic development. With dedicated educators and a strong pastoral care system, we aim to prepare our students not only for successful careers but also for responsible and compassionate citizenship.",
      "At The Academic City School, Bangalore, every day is an opportunity to learn, explore, discover, and become a better version of oneself.",
    ],
    closing: "Warm regards,",
    signature: {
      name: "A. N. Manikandan",
      qualifications: "M.A. | B.Ed. | PGDCA (C.S.) | B.Sc.(Hons)",
      role: "Principal",
      school: "The Academic City School, Bangalore",
    },
    image: createImage(
      "/images/about/principal.png",
      remote.academics,
      "A. N. Manikandan, Principal of The Academic City School, Bangalore",
      false,
    ),
  },
  campusBand: {
    title: "Bengaluru's only career-oriented residential school for Grades 5–12",
    description:
      "More than a boarding school - a structured environment built around every student's future.",
    cta: { label: "Explore Admissions", href: "/admissions" },
  },
  leadership: {
    label: "Leadership",
    title: "A message from our Visionaries",
    leaders: [
      {
        name: "Sripal Jain",
        role: "Founder & Chairman",
        messageLabel: "Founder's Message",
        quote:
          "In today's fast-paced world, traditional pedagogy falls short. Addressing the 'need of the hour,' we blend career orientation with enriching schooling - helping students explore beyond conventional boundaries. Each child holds a unique potential; our mission is to identify and nurture this intrinsic essence, providing a foundation for lifelong growth.",
        quoteHighlights: ["career orientation with enriching schooling"],
        body: "At TACS, we delve beyond the superficial, ensuring a smooth transition from school to the global stage. Join us in this exciting journey towards a well-rounded, future-ready education.",
        image: createImage("/images/about/sripal.png", remote.sripal, "Sripal Jain"),
        altLayout: false,
      },
      {
        name: "Mahipal Kawad",
        role: "Director",
        messageLabel: "Director's Message",
        quote:
          "We blend academic excellence with enriching experiences that ignite student passion and guide them towards career success. Our boarding environment nurtures diversity, exploration and growth beyond textbooks - encouraging self-discovery, camaraderie and creativity.",
        quoteHighlights: ["ignite student passion"],
        body: "We preserve the essence of schooling while aligning it with career-oriented goals. Join us on this inspiring educational journey.",
        image: createImage("/images/about/mahipal.png", remote.mahipal, "Mahipal Kawad"),
        altLayout: true,
      },
    ],
  },
  different: {
    label: "What Makes Us Different",
    title: "Things no other school in Bengaluru offers together",
    cards: [
      {
        title: "Career Guidance from Grade 6",
        description:
          "Develop career clarity early through expert guidance,\nassessments, workshops and industry exposure.",
        image: createImage(
          "/images/about/different-1.png",
          remote.career,
          "Career guidance at TACS",
          false,
        ),
      },
      {
        title: "Exam Preparation On Campus",
        description:
          "Prepare for NEET, JEE, NIFT, CLAT\nand NID with expert guidance on campus.",
        image: createImage(
          "/images/about/different-2.png",
          remote.academics,
          "Exam preparation at TACS",
          false,
        ),
      },
      {
        title: "Indic Value-Based Boarding",
        description:
          "Yoga, meditation and community living nurture discipline,\nstrong values and a sense of belonging.",
        image: createImage(
          "/images/about/different-3.png",
          remote.boarding,
          "Boarding life at TACS",
          false,
        ),
      },
      {
        title: "Six Nutritious Meals Daily",
        description:
          "Six fresh, nutritionist-planned vegetarian meals are\nserved daily, with Jain options available.",
        image: createImage(
          "/images/about/different-6.png",
          remote.agri,
          "Nutritious meals at TACS",
          false,
        ),
      },
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
