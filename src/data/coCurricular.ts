import { siteConfig } from "@/config/site";
import { createImage } from "@/lib/images";
import type { CoCurricularPageContent } from "@/types/coCurricular";

const remote = {
  curriculum: "https://theacademiccity.com/images/Home/nav/curriculam.png",
  sports: "https://theacademiccity.com/images/Home/nav/sports.png",
  boarding: "https://theacademiccity.com/images/Home/nav/boarding.png",
  agri: "https://theacademiccity.com/images/Home/nav/agri1.png",
  career: "https://theacademiccity.com/images/Home/nav/career1.png",
  academics: "https://theacademiccity.com/images/Home/nav/academics.png",
  campus: "https://theacademiccity.com/images/homepage/campus/1.png",
} as const;

export const coCurricularPageContent = {
  hero: {
    title: "Beyond the Classroom\nat",
    titleHighlight: "TACS",
    description:
      "Sport, clubs, events and community service - built into every day, all year round.",
    image: createImage(
      "/images/co-curricular/hero.png",
      remote.curriculum,
      "Co-curricular at TACS",
    ),
    stats: [
      { value: "Learn by Doing", label: "Hands-on experiences every day" },
      { value: "Lead with Purpose", label: "Opportunities to take initiative" },
      { value: "Think Creatively", label: "Ideas beyond the classroom" },
      { value: "Grow Together", label: "Friendships, teamwork & respect" },
    ],
  },
  subnav: [
    { id: "overview", label: "Overview" },
    { id: "sports", label: "Sports" },
    { id: "facilities", label: "Facilities" },
    { id: "clubs", label: "Clubs" },
    { id: "events", label: "Events" },
    { id: "supw", label: "SUPW" },
    { id: "life-ready", label: "Life Readiness" },
  ],
  philosophy: {
    label: "Our Philosophy",
    title: "At TACS, co-curricular is never an afterthought",
    paragraphs: [
      "At most schools, activities get squeezed in after class - and dropped when exams arrive. At TACS, sport, clubs and events are in the timetable, every single day, because we know that who a child becomes outside the classroom shapes everything inside it.",
    ],
    image: createImage(
      "/images/co-curricular/philosophy.png",
      remote.curriculum,
      "Co-curricular at TACS",
      false,
    ),
    imageTag: "Creativity · Collaboration · Expression",
    cta: { label: "Book a campus visit", href: "/#enquiry" },
  },
  sports: {
    label: "Sports",
    title: "90 minutes, every single day",
    description:
      "Every student plays - not just the talented ones. Dedicated coaches, structured training and inter-house competitions make sport a serious, joyful part of every child's day.",
    tags: [
      "Basketball",
      "Football",
      "Cricket",
      "Swimming",
      "Volleyball",
      "Athletics",
      "Badminton",
      "Kho-Kho",
      "Pickleball",
    ],
    stats: [
      { value: "90 min", label: "Daily sport" },
      { value: "District", label: "to National" },
      { value: "Expert", label: "Coach per sport" },
    ],
    image: createImage("/images/co-curricular/sports.png", remote.sports, "Volleyball at TACS", false),
    imageTag: "",
  },
  facilities: {
    label: "Sports Facilities",
    title: "Purpose-built for every sport",
    items: [
      {
        label: "Athletic Track & Ground",
        icon: "activity",
        image: createImage(
          "/images/co-curricular/facilities-track.png",
          remote.campus,
          "Athletic track and sports ground",
          false,
        ),
        wide: true,
        tall: true,
      },
      {
        label: "Basketball Court",
        icon: "trophy",
        image: createImage(
          "/images/co-curricular/facilities-basketball.png",
          remote.sports,
          "Basketball court",
          false,
        ),
      },
      {
        label: "Swimming Pool",
        icon: "waves",
        image: createImage(
          "/images/co-curricular/facilities-pool.png",
          remote.boarding,
          "Swimming pool",
          false,
        ),
      },
      {
        label: "Indoor Sports Hall",
        icon: "trophy",
        image: createImage(
          "/images/co-curricular/facilities-indoor.png",
          remote.curriculum,
          "Indoor sports hall",
          false,
        ),
      },
      {
        label: "Football & Cricket Ground",
        icon: "activity",
        image: createImage(
          "/images/co-curricular/facilities-grounds.png",
          remote.agri,
          "Football and cricket ground",
          false,
        ),
      },
    ],
  },
  sportBand: {
    title: "Sport remains a core part of the timetable.",
    description:
      "Residential life means sport happens every single day, with proper coaches and facilities.",
    cta: { label: "Book a campus visit", href: "/#enquiry" },
  },
  clubs: {
    label: "Clubs & Interest Groups",
    title: "Where curiosity becomes a skill",
    description:
      "Faculty-mentored clubs that run weekly and deliver real outputs - papers, pitches, performances.",
    cards: [
      {
        number: "01",
        tag: "Entrepreneurship",
        title: "Ideate. Prototype. Pitch.",
        description:
          "Students build real business ideas, present to panels and develop commercial thinking alongside creative problem-solving.",
        image: createImage(
          "/images/co-curricular/club-entrepreneurship.png",
          remote.career,
          "Entrepreneurship club",
          false,
        ),
        gradient: "linear-gradient(150deg,#0a3028 0%,#185850 60%,#2d945c 100%)",
        hero: true,
        imageObjectClassName: "object-[42%_center]",
      },
      {
        number: "02",
        tag: "Journalism",
        title: "Report. Write. Publish.",
        image: createImage(
          "/images/co-curricular/club-journalism.png",
          remote.academics,
          "Journalism club",
          false,
        ),
        gradient: "linear-gradient(150deg,#7a4b00 0%,#c4880e 100%)",
      },
      {
        number: "03",
        tag: "Design Thinking",
        title: "Solve real problems, creatively.",
        image: createImage(
          "/images/co-curricular/club-design.png",
          remote.curriculum,
          "Design thinking",
          false,
        ),
        gradient: "linear-gradient(150deg,#3d0d63 0%,#6816a4 100%)",
      },
      {
        number: "04",
        tag: "Culinary",
        title: "Cook. Experiment. Taste.",
        image: createImage(
          "/images/co-curricular/club-culinary.png",
          remote.boarding,
          "Culinary club",
          false,
        ),
        gradient: "linear-gradient(150deg,#1a2830 0%,#2d6060 100%)",
      },
      {
        number: "05",
        tag: "Eco & Sustainability",
        title: "Live it. Measure it. Change it.",
        image: createImage("/images/co-curricular/club-eco.png", remote.agri, "Eco club", false),
        gradient: "linear-gradient(150deg,#052012 0%,#185850 100%)",
      },
    ],
    performingArts: {
      label: "Performing Arts & Language Heritage",
      description:
        "Dance · Theatre · Music · Language & Heritage - celebrating expression and cultural identity on campus.",
    },
  },
  events: {
    label: "Signature Events",
    title: "The moments students remember for life",
    items: [
      {
        number: "01",
        title: "Model United Nations (MUN)",
        description:
          "Represent countries, debate global issues, develop diplomacy and public-speaking skills at regional and national level.",
        badge: "Intellectual",
      },
      {
        number: "02",
        title: "TEDx TACS",
        description:
          "Student-organised - original ideas, bold opinions and inspiring personal stories from inside the campus community.",
        badge: "Ideas",
      },
      {
        number: "03",
        title: "Spic Macay",
        description:
          "India's classical arts brought live to campus - music, dance and theatre performed by practising masters.",
        badge: "Culture",
      },
      {
        number: "04",
        title: "Annual Day",
        description:
          "Performances, awards and showcases - the flagship celebration where the entire school community comes together.",
        badge: "Community",
      },
      {
        number: "05",
        title: "Sports Day",
        description:
          "Inter-house athletic competition, field events and team games - a full day of sport, pride and friendly rivalry.",
        badge: "Athletics",
      },
      {
        number: "06",
        title: "Festival Celebrations",
        description:
          "Diwali, Ganesh Chaturthi, Independence Day, Teachers' Day - all celebrated on campus, together, every year.",
        badge: "Festivals",
      },
      {
        number: "07",
        title: "Inter-House & Inter-School Competitions",
        description:
          "Sport, arts, quiz and academics - building competitive spirit, sportsmanship and house pride throughout the year.",
        badge: "Competition",
      },
      {
        number: "08",
        title: "CBSE Cluster Events",
        description:
          "National-level participation representing TACS against schools across Karnataka and beyond at CBSE cluster rounds.",
        badge: "CBSE",
      },
    ],
  },
  supw: {
    label: "SUPW",
    title: "Growing up as responsible citizens",
    description:
      "SUPW is not a checkbox. It's a structured programme that builds genuine social awareness and a sense of responsibility beyond the school gates.",
    items: [
      {
        icon: "heart",
        title: "Community Engagement",
        description: "local service projects led by students",
      },
      {
        icon: "globe",
        title: "Awareness Campaigns",
        description: "health, environment and social issues",
      },
      {
        icon: "leaf",
        title: "Eco-sustainable Practices",
        description: "farm-to-table, composting, water management",
      },
      {
        icon: "shieldCheck",
        title: "Auditing & Reporting",
        description: "students track the school's environmental impact",
      },
    ],
    image: createImage("/images/co-curricular/supw.png", remote.agri, "SUPW at TACS", false),
  },
  lifeReadiness: {
    label: "Life Readiness",
    title: "Skills for life, not just school",
    cards: [
      {
        icon: "🏥",
        title: "First Aid & Safety",
        description:
          "Certified training so every student can respond confidently in an emergency.",
      },
      {
        icon: "💰",
        title: "Financial Literacy",
        description: "Budgeting, saving and understanding credit - taught practically, not theoretically.",
      },
      {
        icon: "🎤",
        title: "Public Speaking",
        description:
          "Stage presence and structured argument, developed through regular practice in assemblies.",
      },
      {
        icon: "👨‍🍳",
        title: "Cooking & Nutrition",
        description:
          "Students who can feed themselves are genuinely more independent - a real life skill.",
      },
      {
        icon: "🏊",
        title: "Swimming",
        description:
          "A practical life skill that builds fitness, focus and essential water safety.",
      },
      {
        icon: "🏆",
        title: "Leadership Roles",
        description:
          "House captaincies, student council and the perfect system - real responsibility from Grade 8.",
      },
    ],
  },
  ctaBand: {
    label: siteConfig.admissionsBadge,
    title: "See it for yourself",
    description:
      "Visit campus and watch the afternoon in action - sport, clubs, creativity. Nothing beats being there.",
    enquiry: { label: "Book a campus visit", href: "/#enquiry" },
    phone: {
      label: siteConfig.contact.phoneDisplay,
      href: `tel:${siteConfig.contact.phone}`,
    },
    whatsapp: { label: "WhatsApp", href: siteConfig.contact.whatsapp },
  },
} satisfies CoCurricularPageContent;
