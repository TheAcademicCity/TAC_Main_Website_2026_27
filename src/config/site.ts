export const siteConfig = {
  name: "The Academic City",
  legalName: "The Academic City School",
  tagline: "Boarding School · Bengaluru",
  brand: {
    /** White logo for dark header/footer backgrounds (PNG with transparency, 1024×295) */
    logo: {
      src: "/images/brand/logo-white.png",
      alt: "The Academic City School",
      width: 1024,
      height: 295,
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
    "India's first career-oriented boarding school — where academics, Indic values and future-readiness grow together.",
  admissionsBadge: "Admissions Open 2026–27",
  brandPalette: ["#185850", "#2d945c", "#f6ab16", "#6816a4", "#6fdcef"],
  utilityBar: {
    phone: "08047092273",
    phoneDisplay: "080-47092273",
    email: "admissions@theacademiccity.com",
  },
  contact: {
    phone: "+919606488347",
    phoneDisplay: "+91 96064 88347",
    email: "admissions@theacademiccity.com",
    whatsapp: "https://wa.me/919364898405",
    address: "Nelamangala, Bengaluru, Karnataka 562123",
  },
  social: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/people/The-Academic-City-School/61551006306504/",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/the_academic_city/",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/the-academic-citybangalore/",
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@TheAcademicCitySchool",
    },
  ],
  downloads: {
    brochure: {
      href: "/downloads/tac-brochure-2026.pdf",
      filename: "TAC Brochure 2026.pdf",
    },
  },
  sideTabs: [
    { label: "Latest Updates", href: "/blog" },
    {
      label: "Watch Our Reels",
      href: "https://www.instagram.com/the_academic_city/",
      external: true,
    },
    {
      label: "Calendar",
      href: "/downloads/academic-calendar-ay-26-27.pdf",
      download: "Academic Calendar AY 26-27.pdf",
    },
  ],
} as const;
