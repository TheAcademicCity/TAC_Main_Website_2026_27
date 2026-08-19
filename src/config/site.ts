export const siteConfig = {
  name: "The Academic City",
  legalName: "The Academic City School",
  tagline: "Boarding School · Bengaluru",
  brand: {
    /** White logo for dark header/footer backgrounds (PNG with transparency, 1024×302) */
    logo: {
      src: "/images/brand/logo-white.png",
      alt: "The Academic City School",
      width: 1024,
      height: 302,
    },
    /** Full-colour logo for light backgrounds (PNG, 1024×295) */
    logoDark: {
      src: "/images/brand/logo.png",
      alt: "The Academic City School",
      width: 1024,
      height: 295,
    },
  },
  description:
    "India's first career-oriented boarding school - where academics, Indic values and future-readiness grow together.",
  admissionsBadge: "Admissions Open 2027–28",
  utilityBar: {
    phone: "08047092273",
    phoneDisplay: "080-47092273",
    email: "admissions@theacademiccity.com",
  },
  contact: {
    phone: "08047092273",
    phoneDisplay: "080-47092273",
    email: "admissions@theacademiccity.com",
    whatsapp: "https://wa.me/919364898405",
    address: "Nelamangala, Bengaluru, Karnataka 562123",
  },
  social: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/people/The-Academic-City-School/61551006306504/",
      icon: "facebook",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/the_academic_city/",
      icon: "instagram",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/the-academic-citybangalore/",
      icon: "linkedin",
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@TheAcademicCitySchool",
      icon: "youtube",
    },
  ],
  downloads: {
    brochure: {
      href: "/downloads/tac-brochure-2026.pdf",
      filename: "TAC Brochure 2026.pdf",
    },
  },
  sideTabs: [
    { label: "Latest Updates", href: "/#news" },
    {
      label: "Reels",
      href: "https://www.instagram.com/the_academic_city/",
      external: true,
      icon: "instagram",
    },
    {
      label: "Newsletters",
      href: "/blog",
    },
  ],
} as const;
