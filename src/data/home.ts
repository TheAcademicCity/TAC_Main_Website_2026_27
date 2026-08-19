import { siteConfig } from "@/config/site";
import { createImage } from "@/lib/images";
import type { SiteVideo } from "@/types/images";
import type {
  AdmissionStep,
  AwardItem,
  CampusSlide,
  ContactLocation,
  FeatureRow,
  FounderProfile,
  GalleryItem,
  GalleryTab,
  NewsArticle,
  ParentTestimonial,
  PillarItem,
  StatItem,
} from "@/types";

const remote = {
  heroPoster: "https://theacademiccity.com/images/homepage/overview.png",
  pillars: {
    academics: "https://theacademiccity.com/images/Home/nav/academics.png",
    curriculum: "https://theacademiccity.com/images/Home/nav/curriculam.png",
    boarding: "https://theacademiccity.com/images/Home/nav/boarding.png",
    career: "https://theacademiccity.com/images/Home/nav/career1.png",
    sports: "https://theacademiccity.com/images/Home/nav/sports.png",
  },
  campus: {
    bengaluru: "https://theacademiccity.com/images/homepage/campus/1.png",
    indore: "https://theacademiccity.com/images/homepage/campus/2.png",
  },
  founders: {
    sripal: "https://theacademiccity.com/images/homepage/visionary/1.png",
    mahipal: "https://theacademiccity.com/images/homepage/visionary/2.png",
    abhay: "https://theacademiccity.com/images/homepage/visionary/3.png",
  },
  news: {
    n1: "https://theacademiccity.com/images/homepage/updates/1.png",
    n2: "https://theacademiccity.com/images/homepage/updates/2.png",
    n3: "https://theacademiccity.com/images/homepage/updates/3.png",
    n4: "https://theacademiccity.com/images/homepage/updates/4.png",
    n5: "https://theacademiccity.com/images/homepage/updates/5.png",
    n6: "https://theacademiccity.com/images/homepage/updates/6.png",
  },
} as const;

export const heroContent = {
  video: {
    src: "/videos/hero-reel.mp4",
    fallbackSrc: "/videos/hero-reel.mp4",
    poster: createImage("/images/home/hero/poster.png", remote.heroPoster, "TACS Bengaluru campus"),
    isPlaceholder: false,
  } satisfies SiteVideo,
  eyebrow: "Bengaluru · Nelamangala",
  title: "India's First",
  titleHighlight: "Career-Oriented",
  titleSuffix: "Boarding School",
  subtitle: "Instilling 21st Century Skills · Bengaluru, Nelamangala",
  mobileSubtitle:
    "Instilling 21st-century skills through a CBSE foundation, Indic values and 600+ career paths — from Grade 5 to 12.",
  mobileChips: [
    { value: "5–12", label: "Grades" },
    { value: "600+", label: "Career Paths" },
    { value: "2", label: "Campuses" },
  ],
} as const;

export const statsContent: StatItem[] = [
  { value: "Grades 5–12", label: "Residential boarding" },
  { value: "CBSE", label: "NCERT curriculum" },
  { value: "600+", label: "Career paths explored" },
  { value: "Indore", label: "Mohankheda campus" },
  { value: "Bengaluru", label: "Nelamangala campus" },
];

export const pillarsContent = {
  label: "Our Core Delivery Framework",
  title: "Four Pillars that Shape Every Child",
  description:
    "Every day at TACS follows one deliberate path - from academic clarity, to creative growth, to a values-led boarding life, to a clear career direction.",
  watermark: ["CORE", "DELIVERY", "FRAMEWORK"],
  items: [
    {
      number: "01",
      title: "Academics",
      tagline: "Concept clarity across all grades",
      description:
        "Focused, subject-wise academic planning ensures consistent growth from Grade 5 through 12. CBSE curriculum delivered with a 1:10 student-teacher ratio and personalised Student Progression Plans.",
      image: createImage(
        "/images/home/pillars/academics.png",
        remote.pillars.academics,
        "Academics",
        false,
      ),
      accent: "emerald",
    },
    {
      number: "02",
      title: "Co-curricular & Extra-curricular",
      tagline: "All-round personality development",
      description:
        "Art, dance, theatre and music foster creativity and collaboration. Our Life Readiness programme adds financial literacy, first aid, cooking and public speaking.",
      image: createImage(
        "/images/home/pillars/curriculum.png",
        remote.pillars.curriculum,
        "Co-curricular",
        false,
      ),
      accent: "gold",
    },
    {
      number: "03",
      title: "Indic Value-Based Boarding Life",
      tagline: "Discipline, values and self-leadership",
      description:
        "Separate AC hostels, pastoral care, 24-hour doctor on-call and home-like celebrations create a safe, joyful home away from home, shaped by Indic values and structured living.",
      image: createImage("/images/home/pillars/boarding.png", remote.pillars.boarding, "Boarding life", false),
      accent: "forest",
      imageObjectClassName: "object-[32%_center]",
    },
    {
      number: "04",
      title: "Career Orientation",
      tagline: "Early, continuous career discovery",
      description:
        'From Grade 5 to 12, students explore 600+ career options through industry interactions, psychometric assessments and expert mentoring - turning the daunting "what next?" into a confident, clear answer.',
      image: createImage("/images/home/pillars/career.png", remote.pillars.career, "Career orientation", false),
      accent: "violet",
    },
  ] satisfies PillarItem[],
} as const;

export const brochureContent = {
  titleLine1: "Discover Everything",
  titleHighlight: "TACS",
  titleLine2: "has to Offer",
  description:
    "Download our school brochure for a complete guide to academics, campus life and co-curriculars.",
  cta: { label: "Download Brochure", href: "/?intent=brochure#enquiry" },
} as const;

export const academicsContent = {
  label: "A QUICK INSIGHT INTO OUR STUDENTS' LEARNING PATH",
  title: "Academic eminence. Career focus.\nHolistic growth.",
  rows: [
    {
      label: "Academic Excellence",
      title: "A rigorous CBSE foundation, built for every child",
      description:
        "Our Bengaluru campus follows the CBSE curriculum with a 1:10 student–teacher ratio and individualised Student Progression Plans - so every child moves at the right pace, builds genuine concept clarity and walks into Grades 11 and 12 fully prepared.",
      image: createImage("/images/home/academics/cbse.png", remote.pillars.academics, "CBSE academics at TACS", false),
      imageTag: "CBSE · Grades 5–12 · 1:10 Mentoring",
      chips: [],
      cta: { label: "Explore Academics", href: "/academics", size: "lg" },
    },
    {
      label: "Career-First Learning",
      title: "Helping every child discover the right path, early",
      description:
        "Students explore over 600 career options through industry workshops and psychometric assessments from Grade 6 onwards. Structured preparation is available for Grades 11 & 12 - covering engineering, medicine, law, design, CA, management and study abroad.",
      image: createImage(
        "/images/home/pillars/career.png",
        remote.pillars.career,
        "Career guidance",
        false,
      ),
      imageTag: "Grades 6 - 12 · 600+ Career Paths",
      chips: ["600+ Career Options", "Psychometric Tests", "Industry Mentors", "LEAP Programmes"],
      flipped: true,
    },
    {
      label: "Sport & Life Readiness",
      title: "90 minutes of sport, every single day",
      description:
        "Every student plays daily - with dedicated coaches for football, basketball, swimming, cricket, badminton and more. Talented athletes are nurtured from district to national level. Our Life Readiness programme adds first aid, cooking, financial literacy and public speaking.",
      image: createImage("/images/home/academics/sports.png", remote.pillars.sports, "Sports at TACS", false),
      imageTag: "90 Min/Day · District to National",
      chips: ["Football", "Basketball", "Swimming", "Cricket", "Badminton", "Kho-Kho"],
      cta: { label: "Explore Campus Life", href: "/boarding" },
    },
  ] satisfies FeatureRow[],
  band: {
    title: "Focused preparation for Grades 11 & 12",
    description:
      "Whether a student is aiming for engineering, medicine, law, CA or management  - \nwe provide structured academic support so every aspiration has a clear plan behind it.",
    chips: [
      "Engineering",
      "Medicine",
      "Law",
      "CA",
      "Management",
    ],
    cta: { label: "Enquire Now", href: "/#enquiry" },
  },
} as const;

export const galleryContent = {
  label: "Life on Campus",
  title: "A glimpse into everyday TACS",
  instagram: {
    label: "Follow on Instagram",
    href: "https://www.instagram.com/the_academic_city/",
  },
  tabs: [
    {
      id: "campus",
      label: "Campus",
      items: [
        {
          label: "Reading Room",
          height: 260,
          image: createImage(
            "/images/home/gallery/campus-1.png",
            remote.pillars.curriculum,
            "Students reading in the campus library at TACS",
            false,
          ),
        },
        {
          label: "Outdoor Learning",
          height: 320,
          image: createImage(
            "/images/home/gallery/campus-2.png",
            remote.pillars.academics,
            "Teacher leading an outdoor learning session on campus at TACS",
            false,
          ),
        },
        {
          label: "School Garden",
          height: 200,
          image: createImage(
            "/images/home/gallery/campus-3.png",
            remote.pillars.boarding,
            "Students working in the school garden at TACS",
            false,
          ),
        },
        {
          label: "Campus Dining",
          height: 220,
          image: createImage(
            "/images/home/gallery/campus-4.png",
            remote.pillars.boarding,
            "A meal served in the campus dining hall at TACS",
            false,
          ),
        },
        {
          label: "Badminton",
          height: 300,
          image: createImage(
            "/images/home/gallery/campus-5.png",
            remote.pillars.sports,
            "Students playing badminton on campus at TACS",
            false,
          ),
        },
        {
          label: "Volleyball",
          height: 280,
          image: createImage(
            "/images/home/gallery/campus-6.png",
            remote.pillars.sports,
            "Students playing volleyball on the campus courts at TACS",
            false,
          ),
        },
        {
          label: "Science Lab",
          height: 200,
          image: createImage(
            "/images/home/gallery/campus-7.png",
            remote.pillars.academics,
            "Students using a microscope in the campus science lab at TACS",
            false,
          ),
        },
        {
          label: "Adventure Sports",
          height: 240,
          image: createImage(
            "/images/home/gallery/campus-8.png",
            remote.pillars.sports,
            "Students enjoying adventure sports on campus at TACS",
            false,
          ),
        },
      ],
    },
    {
      id: "infrastructure",
      label: "Infrastructure",
      layout: "featured-grid",
      items: [
        {
          label: "Campus Aerial View",
          wide: true,
          height: 576,
          image: createImage(
            "/images/home/gallery/infrastructure-aerial.png",
            remote.campus.bengaluru,
            "Aerial view of The Academic City School campus in Bengaluru",
            false,
          ),
        },
        {
          label: "Outdoor Amphitheater",
          height: 200,
          image: createImage(
            "/images/home/gallery/infrastructure-1.png",
            remote.campus.bengaluru,
            "Outdoor amphitheater at The Academic City School campus",
            false,
          ),
        },
        {
          label: "Chemistry Lab",
          height: 260,
          image: createImage(
            "/images/home/gallery/infrastructure-2.png",
            remote.pillars.academics,
            "Chemistry laboratory at TACS",
            false,
          ),
        },
        {
          label: "Hostel Rooms",
          height: 220,
          image: createImage(
            "/images/home/gallery/infrastructure-3.png",
            remote.pillars.boarding,
            "Modern hostel rooms at TACS",
            false,
          ),
        },
        {
          label: "Physics Lab",
          height: 240,
          image: createImage(
            "/images/home/gallery/infrastructure-4.png",
            remote.pillars.academics,
            "Physics laboratory at TACS",
            false,
          ),
        },
        {
          label: "Swimming Pool",
          height: 320,
          image: createImage(
            "/images/home/gallery/infrastructure-5.png",
            remote.pillars.sports,
            "Swimming pool at TACS",
            false,
          ),
        },
        {
          label: "Montessori Lab",
          height: 180,
          image: createImage(
            "/images/home/gallery/infrastructure-6.png",
            remote.pillars.academics,
            "Montessori learning lab at TACS",
            false,
          ),
        },
        {
          label: "Biology Lab",
          height: 260,
          image: createImage(
            "/images/home/gallery/infrastructure-7.png",
            remote.pillars.academics,
            "Biology laboratory at TACS",
            false,
          ),
        },
        {
          label: "Academic Blocks",
          height: 200,
          image: createImage(
            "/images/home/gallery/infrastructure-8.png",
            remote.campus.bengaluru,
            "Academic blocks at TACS campus",
            false,
          ),
        },
        {
          label: "Goshala",
          height: 300,
          image: createImage(
            "/images/home/gallery/infrastructure-9.png",
            remote.pillars.boarding,
            "Goshala and campus farm at TACS",
            false,
          ),
        },
        {
          label: "Dining Hall",
          height: 220,
          image: createImage(
            "/images/home/gallery/infrastructure-10.png",
            remote.pillars.boarding,
            "Dining hall at TACS",
            false,
          ),
        },
        {
          label: "Art Studio",
          height: 180,
          image: createImage(
            "/images/home/gallery/infrastructure-11.png",
            remote.pillars.curriculum,
            "Art studio at TACS",
            false,
          ),
        },
        {
          label: "Smart Classroom",
          height: 280,
          image: createImage(
            "/images/home/gallery/infrastructure-12.png",
            remote.pillars.academics,
            "Smart classroom at TACS",
            false,
          ),
        },
      ],
    },
    {
      id: "academics",
      label: "Academics",
      items: [
        {
          label: "Interactive Teaching",
          height: 180,
          image: createImage(
            "/images/home/gallery/academics-5.png",
            remote.pillars.academics,
            "Teacher leading an interactive classroom session at TACS",
            false,
          ),
        },
        {
          label: "Smart Classroom",
          height: 260,
          image: createImage(
            "/images/home/gallery/academics-1.png",
            remote.pillars.academics,
            "Students learning together in a smart classroom at TACS",
            false,
          ),
        },
        {
          label: "Classroom Learning",
          height: 320,
          image: createImage(
            "/images/home/gallery/academics-2.png",
            remote.pillars.academics,
            "Student taking notes during classroom learning at TACS",
            false,
          ),
        },
        {
          label: "Science Lab",
          height: 200,
          image: createImage(
            "/images/home/gallery/academics-3.png",
            remote.pillars.academics,
            "Students using a microscope in the science lab at TACS",
            false,
          ),
        },
        {
          label: "Library",
          height: 280,
          image: createImage(
            "/images/home/gallery/academics-7.png",
            remote.pillars.curriculum,
            "Students browsing books in the TACS library",
            false,
          ),
        },
        {
          label: "Academic Focus",
          height: 220,
          image: createImage(
            "/images/home/gallery/academics-4.png",
            remote.pillars.academics,
            "Student focused on learning in the classroom at TACS",
            false,
          ),
        },
        {
          label: "Chemistry Lab",
          height: 300,
          image: createImage(
            "/images/home/gallery/academics-6.png",
            remote.pillars.academics,
            "Students conducting a chemistry experiment at TACS",
            false,
          ),
        },
        {
          label: "Classroom Session",
          height: 240,
          image: createImage(
            "/images/home/gallery/academics-8.png",
            remote.pillars.academics,
            "Teacher addressing students during a classroom session at TACS",
            false,
          ),
        },
      ],
    },
    {
      id: "extra",
      label: "Extra-curriculars",
      items: [
        {
          label: "Art & Craft",
          height: 300,
          image: createImage(
            "/images/home/gallery/extra-1.png",
            remote.pillars.curriculum,
            "Students sketching during an art and craft session at TACS",
            false,
          ),
        },
        {
          label: "Music Class",
          height: 220,
          image: createImage(
            "/images/home/gallery/extra-3.png",
            remote.pillars.curriculum,
            "Students learning keyboard and guitar in music class at TACS",
            false,
          ),
        },
        {
          label: "Fine Arts",
          height: 260,
          image: createImage(
            "/images/home/gallery/extra-2.png",
            remote.pillars.curriculum,
            "Students practising portrait drawing in the fine arts studio at TACS",
            false,
          ),
        },
        {
          label: "Painting",
          height: 200,
          image: createImage(
            "/images/home/gallery/extra-5.png",
            remote.pillars.curriculum,
            "Student painting during an art session at TACS",
            false,
          ),
        },
        {
          label: "Dahi Handi",
          height: 280,
          image: createImage(
            "/images/home/gallery/extra-6.png",
            remote.pillars.sports,
            "Students celebrating Dahi Handi on campus at TACS",
            false,
          ),
        },
        {
          label: "Reading Corner",
          height: 240,
          image: createImage(
            "/images/home/gallery/extra-8.png",
            remote.pillars.curriculum,
            "Student reading in the campus library at TACS",
            false,
          ),
        },
        {
          label: "Kannada Rajyotsava",
          height: 320,
          image: createImage(
            "/images/home/gallery/extra-7.png",
            remote.pillars.curriculum,
            "Traditional dance performance during Kannada Rajyotsava at TACS",
            false,
          ),
        },
        {
          label: "Music Practice",
          height: 200,
          image: createImage(
            "/images/home/gallery/extra-4.png",
            remote.pillars.curriculum,
            "Students practising music in the campus studio at TACS",
            false,
          ),
        },
      ],
    },
    {
      id: "boarding",
      label: "Boarding Life",
      items: [
        {
          label: "Pastoral Care",
          height: 260,
          image: createImage(
            "/images/home/gallery/boarding-1.png",
            remote.pillars.boarding,
            "Pastoral care staff supporting students at TACS",
            false,
          ),
        },
        {
          label: "Campus Corridors",
          height: 200,
          image: createImage(
            "/images/home/gallery/boarding-2.png",
            remote.pillars.boarding,
            "Students in the hostel corridors at TACS",
            false,
          ),
        },
        {
          label: "Hostel Study",
          height: 320,
          image: createImage(
            "/images/home/gallery/boarding-3.png",
            remote.pillars.boarding,
            "Students studying together in a hostel room at TACS",
            false,
          ),
        },
        {
          label: "Student Community",
          height: 220,
          image: createImage(
            "/images/home/gallery/boarding-4.png",
            remote.pillars.boarding,
            "Students socialising together on campus at TACS",
            false,
          ),
        },
        {
          label: "Evening Campus Life",
          height: 280,
          image: createImage(
            "/images/home/gallery/boarding-5.png",
            remote.pillars.boarding,
            "Students spending time together on campus in the evening at TACS",
            false,
          ),
        },
        {
          label: "Outdoor Activities",
          height: 300,
          image: createImage(
            "/images/home/gallery/boarding-6.png",
            remote.pillars.boarding,
            "Students enjoying outdoor activities on campus at TACS",
            false,
          ),
        },
        {
          label: "Dining Experience",
          height: 240,
          image: createImage(
            "/images/home/gallery/boarding-7.png",
            remote.pillars.boarding,
            "Students in the dining hall at TACS",
            false,
          ),
        },
        {
          label: "Hostel Life",
          height: 180,
          image: createImage(
            "/images/home/gallery/boarding-8.png",
            remote.pillars.boarding,
            "Dorm parent interacting with students in the hostel at TACS",
            false,
          ),
        },
      ],
    },
  ] satisfies GalleryTab[],
} as const;

export const achievementsGalleryContent = {
  label: "Student Achievers",
  title: "Recognizing Talent.\nCelebrating Success.",
  /** Achievement stream chips on image tiles */
  items: [
    {
      label: "Radhna Mozika",
      category: "JEE",
      caption: "Radhna Mozika (2024–25)",
      detail: "INT Science: JEE - 98.2",
      image: createImage(
        "/images/achievements/students/radhna-mozika.png",
        "/images/achievements/students/radhna-mozika.png",
        "Radhna Mozika",
        false,
      ),
    },
    {
      label: "Aryan Pohkriyal",
      category: "JEE",
      caption: "Aryan Pohkriyal (2024–25)",
      detail: "Science: 99.71",
      image: createImage(
        "/images/achievements/students/aryan-pohkriyal.png",
        "/images/achievements/students/aryan-pohkriyal.png",
        "Aryan Pohkriyal",
        false,
      ),
    },
    {
      label: "Granth Agarwal",
      category: "JEE",
      caption: "Granth Agarwal",
      detail: "Science · 2025–26 · JEE 96.12 Percentile",
      image: createImage(
        "/images/achievements/students/granth-agarwal.png",
        "/images/achievements/students/granth-agarwal.png",
        "Granth Agarwal",
        false,
      ),
    },
    {
      label: "Aami Rajiv",
      category: "DESIGN",
      caption: "Aami Rajiv",
      detail: "Science · 2023–24 · Qualified · NID",
      image: createImage(
        "/images/achievements/students/aami-rajiv.png",
        "/images/achievements/students/aami-rajiv.png",
        "Aami Rajiv",
        false,
      ),
    },
    { kind: "words", lines: ["Success", "Stories."] },
    {
      label: "Olivia Majumder",
      category: "DESIGN",
      caption: "Olivia Majumder",
      detail: "Science · 2023–24 · Qualified NIFT",
      image: createImage(
        "/images/achievements/students/olivia-majumder.png",
        "/images/achievements/students/olivia-majumder.png",
        "Olivia Majumder",
        false,
      ),
    },
    {
      label: "Aditya Singh Bisht",
      category: "COMMERCE",
      caption: "Aditya Singh Bisht",
      detail: "Science · 2025–26 · SAT Score 1560/1600",
      image: createImage(
        "/images/achievements/students/aditya-singh-bisht.png",
        "/images/achievements/students/aditya-singh-bisht.png",
        "Aditya Singh Bisht",
        false,
      ),
    },
    {
      label: "Shravan P Nikhil",
      category: "JEE",
      caption: "Shravan P Nikhil",
      detail: "Science · 2023–24 · Qualified JEE · IIT Madras",
      image: createImage(
        "/images/achievements/students/shravan-p-nikhil.png",
        "/images/achievements/students/shravan-p-nikhil.png",
        "Shravan P Nikhil",
        false,
      ),
    },
    {
      label: "Ritwik Viswanathan",
      category: "JEE",
      caption: "Ritwik Viswanathan",
      detail: "Science · 2023–24 · Qualified JEE · 99.89 Percentile",
      image: createImage(
        "/images/achievements/students/ritwik-viswanathan.png",
        "/images/achievements/students/ritwik-viswanathan.png",
        "Ritwik Viswanathan",
        false,
      ),
    },
    { kind: "words", lines: ["Proud", "Moments."] },
    {
      label: "Dhruva Reddy N",
      category: "JEE",
      caption: "Dhruva Reddy N",
      detail: "Science · 2023–24 · Qualified JEE · 99.73 Percentile",
      image: createImage(
        "/images/achievements/students/dhruva-reddy-n.png",
        "/images/achievements/students/dhruva-reddy-n.png",
        "Dhruva Reddy N",
        false,
      ),
    },
    {
      label: "Namitha Jain",
      category: "JEE",
      caption: "Namitha Jain",
      detail: "Science · 2024–25 · Qualified JEE · 93.02 Percentile",
      image: createImage(
        "/images/achievements/students/namitha-jain.png",
        "/images/achievements/students/namitha-jain.png",
        "Namitha Jain",
        false,
      ),
    },
    {
      label: "Yash Thakur",
      category: "JEE",
      caption: "Yash Thakur",
      detail: "Science · 2023–24 · Qualified JEE · 99.71 Percentile",
      image: createImage(
        "/images/achievements/students/yash-thakur.png",
        "/images/achievements/students/yash-thakur.png",
        "Yash Thakur",
        false,
      ),
    },
    {
      label: "Armman Roy",
      category: "JEE",
      caption: "Armman Roy",
      detail: "Science · 2023–24 · Qualified JEE · 99.63 Percentile",
      image: createImage(
        "/images/achievements/students/armman-roy.png",
        "/images/achievements/students/armman-roy.png",
        "Armman Roy",
        false,
      ),
    },
    { kind: "words", lines: ["Milestone."] },
    {
      label: "Rishi Manjunath",
      category: "JEE",
      caption: "Rishi Manjunath",
      detail: "Science · 2023–24 · Qualified JEE · 99.56 Percentile",
      image: createImage(
        "/images/achievements/students/rishi-manjunath.png",
        "/images/achievements/students/rishi-manjunath.png",
        "Rishi Manjunath",
        false,
      ),
    },
    {
      label: "Pranav R",
      category: "JEE",
      caption: "Pranav R",
      detail: "Science · 2023–24 · Qualified JEE · 99.39 Percentile",
      image: createImage(
        "/images/achievements/students/pranav-r.png",
        "/images/achievements/students/pranav-r.png",
        "Pranav R",
        false,
      ),
    },
    {
      label: "Udisha Barnwal",
      category: "JEE",
      caption: "Udisha Barnwal",
      detail: "Science · 2023–24 · Qualified JEE · 99.37 Percentile",
      image: createImage(
        "/images/achievements/students/udisha-barnwal.png",
        "/images/achievements/students/udisha-barnwal.png",
        "Udisha Barnwal",
        false,
      ),
    },
    {
      label: "Tarun P",
      category: "JEE",
      caption: "Tarun P",
      detail: "Science · 2023–24 · Qualified JEE · 99.18 Percentile",
      image: createImage(
        "/images/achievements/students/tarun-p.png",
        "/images/achievements/students/tarun-p.png",
        "Tarun P",
        false,
      ),
    },
    { kind: "words", lines: ["Exceptional."] },
    {
      label: "Amitesh Das",
      category: "JEE",
      caption: "Amitesh Das",
      detail: "Science · 2023–24 · Qualified JEE · 99.13 Percentile",
      image: createImage(
        "/images/achievements/students/amitesh-das.png",
        "/images/achievements/students/amitesh-das.png",
        "Amitesh Das",
        false,
      ),
    },
    {
      label: "Abhhay S Sharma",
      category: "JEE",
      caption: "Abhhay S Sharma",
      detail: "Science · 2023–24 · Qualified JEE · 99.1 Percentile",
      image: createImage(
        "/images/achievements/students/abhhay-s-sharma.png",
        "/images/achievements/students/abhhay-s-sharma.png",
        "Abhhay S Sharma",
        false,
      ),
    },
    {
      label: "Draksharapu Akshaya",
      category: "JEE",
      caption: "Draksharapu Akshaya",
      detail: "Science · 2023–24 · Qualified JEE · 98.9 Percentile",
      image: createImage(
        "/images/achievements/students/draksharapu-akshaya.png",
        "/images/achievements/students/draksharapu-akshaya.png",
        "Draksharapu Akshaya",
        false,
      ),
    },
    {
      label: "Saikirthan K",
      category: "JEE",
      caption: "Saikirthan K",
      detail: "Science · 2023–24 · Qualified JEE · 98.6 Percentile",
      image: createImage(
        "/images/achievements/students/saikirthan-k.png",
        "/images/achievements/students/saikirthan-k.png",
        "Saikirthan K",
        false,
      ),
    },
    { kind: "words", lines: ["Excellence."] },
    {
      label: "Sujan",
      category: "NEET",
      caption: "Sujan",
      detail: "Science · 2023–24 · Bangalore Medical College · NEET Score 690",
      image: createImage(
        "/images/achievements/students/sujan.png",
        "/images/achievements/students/sujan.png",
        "Sujan",
        false,
      ),
    },
    {
      label: "Abigail Raman",
      category: "NEET",
      caption: "Abigail Raman",
      detail: "Science · 2024–25 · Christian Medical College · NEET Score 633",
      image: createImage(
        "/images/achievements/students/abigail-raman.png",
        "/images/achievements/students/abigail-raman.png",
        "Abigail Raman",
        false,
      ),
    },
    {
      label: "Sakshi Kolagi",
      category: "NEET",
      caption: "Sakshi Kolagi",
      detail: "Science · 2023–24 · Raichur Institute of Medical Science · NEET Score 620",
      image: createImage(
        "/images/achievements/students/sakshi-kolagi.png",
        "/images/achievements/students/sakshi-kolagi.png",
        "Sakshi Kolagi",
        false,
      ),
    },
    {
      label: "Mallikarjun J",
      category: "NEET",
      caption: "Mallikarjun J",
      detail: "Science · 2023–24 · Belgaum Institute of Medical Science · NEET Score 605",
      image: createImage(
        "/images/achievements/students/mallikarjun-j.png",
        "/images/achievements/students/mallikarjun-j.png",
        "Mallikarjun J",
        false,
      ),
    },
    { kind: "words", lines: ["Remarkable."] },
    {
      label: "R Varun Venkatesh",
      category: "NEET",
      caption: "R Varun Venkatesh",
      detail: "Science · 2023–24 · Kempegowda Institute of Medical Science · NEET Score 600",
      image: createImage(
        "/images/achievements/students/r-varun-venkatesh.png",
        "/images/achievements/students/r-varun-venkatesh.png",
        "R Varun Venkatesh",
        false,
      ),
    },
    {
      label: "Aashima Ismail",
      category: "NEET",
      caption: "Aashima Ismail",
      detail: "Science · 2023–24 · NEET Score 561",
      image: createImage(
        "/images/achievements/students/aashima-ismail.png",
        "/images/achievements/students/aashima-ismail.png",
        "Aashima Ismail",
        false,
      ),
    },
    {
      label: "Aditya Raju M M",
      category: "NEET",
      caption: "Aditya Raju M M",
      detail: "Science · 2023–24 · NEET Score 520",
      image: createImage(
        "/images/achievements/students/aditya-raju-m-m.png",
        "/images/achievements/students/aditya-raju-m-m.png",
        "Aditya Raju M M",
        false,
      ),
    },
    {
      label: "Aneesha Seth",
      category: "NEET",
      caption: "Aneesha Seth",
      detail: "Science · 2023–24 · NEET Score 556",
      image: createImage(
        "/images/achievements/students/aneesha-seth.png",
        "/images/achievements/students/aneesha-seth.png",
        "Aneesha Seth",
        false,
      ),
    },
    { kind: "words", lines: ["Leadership."] },
    {
      label: "Bhavana M",
      category: "NEET",
      caption: "Bhavana M",
      detail: "Science · 2023–24 · NEET Score 520",
      image: createImage(
        "/images/achievements/students/bhavana-m.png",
        "/images/achievements/students/bhavana-m.png",
        "Bhavana M",
        false,
      ),
    },
    {
      label: "Hitha V Kote",
      category: "NEET",
      caption: "Hitha V Kote",
      detail: "Science · 2023–24 · NEET Score 635",
      image: createImage(
        "/images/achievements/students/hitha-v-kote.png",
        "/images/achievements/students/hitha-v-kote.png",
        "Hitha V Kote",
        false,
      ),
    },
    {
      label: "Harish",
      category: "NEET",
      caption: "Harish",
      detail: "Science · 2023–24 · NEET Score 521",
      image: createImage(
        "/images/achievements/students/harish.png",
        "/images/achievements/students/harish.png",
        "Harish",
        false,
      ),
    },
    {
      label: "Mizba Jabeen Patel",
      category: "NEET",
      caption: "Mizba Jabeen Patel",
      detail: "Science · 2023–24 · NEET Score 568",
      image: createImage(
        "/images/achievements/students/mizba-jabeen-patel.png",
        "/images/achievements/students/mizba-jabeen-patel.png",
        "Mizba Jabeen Patel",
        false,
      ),
    },
    { kind: "words", lines: ["Outstanding."] },
    {
      label: "Suraj Bagadi",
      category: "NEET",
      caption: "Suraj Bagadi",
      detail: "Science · 2023–24 · NEET Score 559",
      image: createImage(
        "/images/achievements/students/suraj-bagadi.png",
        "/images/achievements/students/suraj-bagadi.png",
        "Suraj Bagadi",
        false,
      ),
    },
    {
      label: "Shankar J D",
      category: "NEET",
      caption: "Shankar J D",
      detail: "Science · 2023–24 · NEET Score 547",
      image: createImage(
        "/images/achievements/students/shankar-j-d.png",
        "/images/achievements/students/shankar-j-d.png",
        "Shankar J D",
        false,
      ),
    },
    {
      label: "Uday L H",
      category: "NEET",
      caption: "Uday L H",
      detail: "Science · 2023–24 · NEET Score 523",
      image: createImage(
        "/images/achievements/students/uday-l-h.png",
        "/images/achievements/students/uday-l-h.png",
        "Uday L H",
        false,
      ),
    },
    {
      label: "Tejas R Hegde",
      category: "NEET",
      caption: "Tejas R Hegde",
      detail: "Science · 2023–24 · NEET Score 510",
      image: createImage(
        "/images/achievements/students/tejas-r-hegde.png",
        "/images/achievements/students/tejas-r-hegde.png",
        "Tejas R Hegde",
        false,
      ),
    },
    { kind: "words", lines: ["Aspiration."] },
    {
      label: "Akshara",
      category: "COMMERCE",
      caption: "Akshara",
      detail: "Commerce · 2025–26 · CLAT AIR 338",
      image: createImage(
        "/images/achievements/students/akshara.png",
        "/images/achievements/students/akshara.png",
        "Akshara",
        false,
      ),
    },
    {
      label: "Poorv Mittal",
      category: "COMMERCE",
      caption: "Poorv Mittal",
      detail: "Commerce · 2024–25 · CA Foundation in 1st Attempt",
      image: createImage(
        "/images/achievements/students/poorv-mittal.png",
        "/images/achievements/students/poorv-mittal.png",
        "Poorv Mittal",
        false,
      ),
    },
    {
      label: "Ayush Jishnu",
      category: "COMMERCE",
      caption: "Ayush Jishnu",
      detail: "Commerce · 2024–25 · MESA Exam · IIM Bangalore",
      image: createImage(
        "/images/achievements/students/ayush-jishnu.png",
        "/images/achievements/students/ayush-jishnu.png",
        "Ayush Jishnu",
        false,
      ),
    },
    {
      label: "Ayush",
      category: "COMMERCE",
      caption: "Ayush",
      detail: "Commerce · 2025–26 · BBA Decision Science",
      image: createImage(
        "/images/achievements/students/ayush.png",
        "/images/achievements/students/ayush.png",
        "Ayush",
        false,
      ),
    },
    {
      label: "Harshit Agarwal",
      category: "COMMERCE",
      caption: "Harshit Agarwal",
      detail: "Commerce · 2024–25 · BBA",
      image: createImage(
        "/images/achievements/students/harshit-agarwal.png",
        "/images/achievements/students/harshit-agarwal.png",
        "Harshit Agarwal",
        false,
      ),
    },
    {
      label: "Lalithya",
      category: "COMMERCE",
      caption: "Lalithya",
      detail: "Commerce · 2025–26 · Qualified LNAT UK",
      image: createImage(
        "/images/achievements/students/lalithya.png",
        "/images/achievements/students/lalithya.png",
        "Lalithya",
        false,
      ),
    },
    { kind: "words", lines: ["Champions."] },
    {
      label: "Vijaya Raja Simha",
      category: "SPORTS",
      caption: "Vijaya Raja Simha",
      detail: "Science · 2025–26 · Javelin Throw · National Level",
      image: createImage(
        "/images/achievements/students/vijaya-raja-simha.png",
        "/images/achievements/students/vijaya-raja-simha.png",
        "Vijaya Raja Simha",
        false,
      ),
    },
    {
      label: "Manas",
      category: "SPORTS",
      caption: "Manas",
      detail: "Grade 9 · Inter-school Swimming · 3 Gold · 3 Silver",
      image: createImage(
        "/images/achievements/students/manas.png",
        "/images/achievements/students/manas.png",
        "Manas",
        false,
      ),
    },
    {
      label: "Ekalavya Nishad",
      category: "SPORTS",
      caption: "Ekalavya Nishad",
      detail: "Grade 10 · National Level Swimming · Rank 13",
      image: createImage(
        "/images/achievements/students/ekalavya-nishad.png",
        "/images/achievements/students/ekalavya-nishad.png",
        "Ekalavya Nishad",
        false,
      ),
    },
  ] satisfies GalleryItem[],
} as const;

export const awardsContent = {
  label: "Awards & Recognitions",
  title: "Recognised for excellence, nationally & globally",
  items: [
    {
      name: "21CL ISLE Awards Bengaluru",
      year: "2022",
      width: 286,
      height: 282,
      image: createImage(
        "/images/home/awards/isle-2022.png",
        "/images/home/awards/isle-2022.png",
        "21CL ISLE Awards Bengaluru 2022",
        false,
      ),
    },
    {
      name: "India School Merit Awards",
      year: "2022–23",
      width: 262,
      height: 281,
      image: createImage(
        "/images/home/awards/india-school-merit-2022-23.png",
        "/images/home/awards/india-school-merit-2022-23.png",
        "India School Merit Awards 2022–23",
        false,
      ),
    },
    {
      name: "Brainfeed Top 500 Schools of India",
      year: "2022–23",
      width: 277,
      height: 265,
      image: createImage(
        "/images/home/awards/brainfeed-top-500-2022-23.png",
        "/images/home/awards/brainfeed-top-500-2022-23.png",
        "Brainfeed Top 500 Schools of India 2022–23",
        false,
      ),
    },
    {
      name: "University of Oxford - Best Emerging Residential School",
      year: "2024",
      width: 866,
      height: 361,
      image: createImage(
        "/images/home/awards/oxford-2024.png",
        "/images/home/awards/oxford-2024.png",
        "University of Oxford Best Emerging Residential School for holistic learning 2024",
        false,
      ),
    },
    {
      name: "Indo Arab Leaders Summit & Award",
      year: "2024",
      width: 823,
      height: 574,
      image: createImage(
        "/images/home/awards/indo-arab-leaders-2024.png",
        "/images/home/awards/indo-arab-leaders-2024.png",
        "Indo Arab Leaders Summit and Award 2024 - Best Promising Career Oriented Boarding School",
        false,
      ),
    },
    {
      name: "Education Today - Dynamic School",
      year: "2024",
      width: 861,
      height: 369,
      image: createImage(
        "/images/home/awards/education-today-2024.png",
        "/images/home/awards/education-today-2024.png",
        "Education Today Dynamic School 2024",
        false,
      ),
    },
    {
      name: "Education Leaders Awards",
      year: "2024",
      width: 277,
      height: 265,
      image: createImage(
        "/images/home/awards/education-leaders-2024.png",
        "/images/home/awards/education-leaders-2024.png",
        "Education Leaders Awards 2024",
        false,
      ),
    },
    {
      name: "QS I-GAUGE Institution of Happiness",
      year: "2025–26",
      width: 811,
      height: 827,
      image: createImage(
        "/images/home/awards/qs-i-gauge-2025-26.png",
        "/images/home/awards/qs-i-gauge-2025-26.png",
        "QS I-GAUGE Institution of Happiness Certified 2025–26",
        false,
      ),
    },
  ],
} as const satisfies { label: string; title: string; items: readonly AwardItem[] };

export const campusContent = {
  label: "Our Campuses",
  title: "Two campuses. One philosophy.",
  badge: "Admissions Open 2027–28",
  slides: [
    {
      id: "bengaluru",
      name: "Bengaluru",
      label: "Bengaluru Campus",
      title: "A serene campus in Bengaluru's countryside",
      description:
        "Set in the green calm of Nelamangala, TACS Bengaluru is a fully residential boarding campus where every day moves between focused learning, sport, creativity and a home life shaped by Indic values.",
      image: createImage(
        "/images/home/campus/bengaluru.png",
        remote.campus.bengaluru,
        "TACS Bengaluru",
        false,
      ),
      facts: [
        {
          value: "Student Progression Plan",
          label: "Personalised academic tracking",
          featured: true,
        },
        { value: "Grades\u00A05–12", label: "Residential boarding" },
        { value: "6\u00A0Meals/Day", label: "Veg & Jain options" },
        { value: "AC\u00A0Hostels", label: "Separate boys & girls" },
        { value: "CBSE", label: "NCERT curriculum" },
      ],
      academicPartners: {
        label: "Academic Assistance partners",
        logos: [
          {
            src: "/images/home/campus/partners/allen-white.png",
            alt: "Allen Career Institute",
            width: 305,
            height: 83,
          },
          {
            src: "/images/home/campus/partners/trisha-classes-white.png",
            alt: "Trisha Classes",
            width: 904,
            height: 231,
          },
        ],
      },
      cta: { label: "Book a Campus Visit", href: "/#contact" },
      campusVideo: {
        label: "View our campus",
        href: "/campus",
      },
    },
    {
      id: "indore",
      name: "Indore",
      label: "Indore Campus",
      title: "A scenic campus in Madhya Pradesh",
      description:
        "Located in Mohankheda Jain Tirth, Rajgarh (Dhar), the Indore campus offers the same TACS philosophy - structured boarding, strong academics and career-first learning - in the peaceful landscape of Madhya Pradesh.",
      image: createImage("/images/home/campus/indore.png", remote.campus.indore, "TACS Indore", false),
      facts: [
        {
          value: "Student Progression Plan",
          label: "Personalised academic tracking",
          featured: true,
        },
        { value: "Grades\u00A05–12", label: "Residential boarding" },
        { value: "6\u00A0Meals/Day", label: "Only Jain food" },
        { value: "AC\u00A0Hostels", label: "Separate boys & girls" },
        { value: "CBSE", label: "NCERT curriculum" },
      ],
      academicPartners: {
        label: "Academic Assistance partners",
        logos: [
          {
            src: "/images/home/campus/partners/nahata.png",
            alt: "Nahata Professional Academy",
            width: 1009,
            height: 365,
            className: "h-12",
          },
        ],
      },
      cta: { label: "Enquire Now", href: "https://grjis.com/" },
    },
  ] satisfies CampusSlide[],
} as const;

export const foundersContent = {
  label: "The Visionaries",
  title: "The founders who built a different kind of school",
  description:
    "A boarding school built on a bold belief - that schooling should prepare children for life, not just for exams.",
  profiles: [
    {
      name: "Sripal Jain",
      role: "Founder",
      quote:
        "We built this school because we believed every child deserves to know not just what to learn, but why - and where it leads. Career discovery isn't a post-school thought; it should be woven into every single year of a child's education.",
      image: createImage("/images/home/founders/sripal.png", remote.founders.sripal, "Sripal Jain"),
      initials: "SJ",
      variant: "featured",
    },
    {
      name: "Abhay Ranka",
      role: "Co-Founder",
      quote:
        "India has thousands of good schools. We wanted to build a great one - where children grow up rooted in values, confident in who they are and clear about the future they are walking towards.",
      image: createImage("/images/home/founders/abhay.png", remote.founders.abhay, "Abhay Ranka"),
      initials: "AR",
      variant: "compact",
    },
    {
      name: "Mahipal Kawad",
      role: "Director",
      quote:
        "Every child who comes to us carries a unique potential. Our job is to see it, nurture it and send them into the world not as students who passed exams, but as young people genuinely ready for what comes next.",
      image: createImage(
        "/images/home/founders/mahipal.png",
        remote.founders.mahipal,
        "Mahipal Kawad",
      ),
      initials: "MK",
      variant: "compact",
    },
  ] satisfies FounderProfile[],
} as const;

export const parentTestimonialsContent = {
  label: "Parent & Student Stories",
  title: "Voices of",
  titleHighlight: "The Academic City School",
  testimonials: [
    {
      quote:
        "From solving problems in class to finding my place in IIM-B's ecosystem - it's been a journey of small lessons and big realisations.",
      name: "Ayush Jishnu",
      role: "Batch of  '25",
      detail: "TACS Alumnus",
      image: createImage(
        "/images/home/parents/ayush-jishnu.png",
        "https://scontent.cdninstagram.com/v/t51.82787-15/624702316_18039957746722226_5002594383607632548_n.jpg",
        "Ayush Jishnu sharing his TACS journey",
        false,
      ),
      href: "https://www.instagram.com/reel/DUFV7xfjBYo/",
    },
    {
      quote:
        "A choice we're proud of. The supportive community has made a real difference in our journey.",
      name: "Khushi Jain",
      role: "Mother of Bhavya Jain",
      detail: "Grade 8",
      image: createImage(
        "/images/home/parents/khushi-jain.png",
        "https://scontent.cdninstagram.com/v/t51.71878-15/500455704_3692649974369900_162010336354179059_n.jpg",
        "Khushi Jain, parent testimonial at The Academic City School",
        false,
      ),
      href: "https://www.instagram.com/reel/DEodXoWJAPJ/",
    },
    {
      quote:
        "I was nervous, but I trusted my effort and kept going. Seeing the result made everything feel worth it.",
      name: "Poorv",
      role: "Batch of  '25",
      detail: "CA Foundation cleared",
      image: createImage(
        "/images/home/parents/poorv.png",
        "https://scontent.cdninstagram.com/v/t51.82787-15/623514789_18040064561722226_7284056305849129532_n.jpg",
        "Poorv celebrating CA Foundation success at TACS",
        false,
      ),
      href: "https://www.instagram.com/reel/DUHzRuCj_Cu/",
    },
    {
      quote:
        "Students don't just study - they thrive. Support, guidance, and a strong peer community make learning an exciting journey.",
      name: "TACS Parent",
      role: "Parent",
      detail: "Boarding school",
      image: createImage(
        "/images/home/parents/tacs-parent.png",
        "https://scontent.cdninstagram.com/v/t51.71878-15/503743634_737038415374807_5405998053289679768_n.jpg",
        "Parent sharing their TACS boarding school experience",
        false,
      ),
      href: "https://www.instagram.com/reel/DGcUfaBK7LW/",
    },
    {
      quote:
        "Her dedication, consistency, and commitment to excellence have led to this remarkable achievement.",
      name: "Akshara Pradita",
      role: "Commerce student",
      detail: "CLAT success",
      image: createImage(
        "/images/home/parents/akshara-pradita.png",
        "https://scontent.cdninstagram.com/v/t51.82787-15/649543784_18044538077722226_3460234397081180136_n.jpg",
        "Akshara Pradita celebrating CLAT success at TACS",
        false,
      ),
      href: "https://www.instagram.com/reel/DVu61RZjBq7/",
    },
  ] satisfies ParentTestimonial[],
} as const;

export const newsContent = {
  label: "School Updates",
  title: "Life on campus, week by week",
  articles: [
    {
      title: "National Sports Day",
      excerpt:
        "Fitness challenges and sportsmanship celebrated in honour of hockey legend Major Dhyan Chand's inspiring legacy.",
      image: createImage("/images/home/news/1.png", remote.news.n1, "National Sports Day"),
      day: "29",
      month: "Aug",
    },
    {
      title: "Independence Day",
      excerpt:
        "Flag-hoisting, house-wise march past and vibrant cultural performances celebrating unity and national pride.",
      image: createImage("/images/home/news/3.png", remote.news.n3, "Independence Day"),
      day: "15",
      month: "Aug",
    },
    {
      title: "Ganesh Chaturthi",
      excerpt:
        "Decorations, traditional music and a student-led prayer ceremony filled with joy and cultural spirit.",
      image: createImage("/images/home/news/5.png", remote.news.n5, "Ganesh Chaturthi"),
      day: "07",
      month: "Sep",
    },
    {
      title: "Cooking Classes",
      excerpt:
        "Teamwork, time management and nutrition explored as students cooked diverse cuisines together.",
      image: createImage("/images/home/news/2.png", remote.news.n2, "Cooking Classes"),
      day: "21",
      month: "Aug",
    },
    {
      title: "Teachers' Day",
      excerpt:
        "Students expressed their gratitude through performances, surprise tributes and thoughtful gifts for mentors.",
      image: createImage("/images/home/news/4.png", remote.news.n4, "Teachers' Day"),
      day: "05",
      month: "Sep",
    },
    {
      title: "Investiture Ceremony",
      excerpt:
        "Student council took its oath to lead with integrity and responsibility for a thriving school community.",
      image: createImage("/images/home/news/6.png", remote.news.n6, "Investiture Ceremony"),
      day: "05",
      month: "Aug",
    },
  ] satisfies NewsArticle[],
} as const;

export const admissionsContent = {
  label: "Admissions 2027–28",
  title: "We're With You in Every Step",
  subtitle: "Five clear steps from your first enquiry to welcoming your child to campus.",
  steps: [
    {
      number: "01",
      title: "Discover",
      description:
        "Share your child's details and the grade you're applying for. Our team will reach out to you at the earliest.",
    },
    {
      number: "02",
      title: "Experience",
      description:
        "Visit our campus, meet our team and see boarding life first-hand - in person or virtually.",
    },
    {
      number: "03",
      title: "Assessment",
      description:
        "A simple age-appropriate exam to help us understand your child's academic starting point.",
    },
    {
      number: "04",
      title: "Interaction",
      description:
        "A warm conversation with you and your child to understand your child's interests, strengths, and aspirations.",
    },
    {
      number: "05",
      title: "Admission",
      description: "Confirm your child's admission and get ready for an exciting academic journey ahead.",
    },
  ] satisfies AdmissionStep[],
  ctas: [
    { label: "Start Your Journey", href: "/#enquiry", variant: "gold" as const },
    {
      label: siteConfig.utilityBar.phoneDisplay,
      href: `tel:${siteConfig.utilityBar.phone}`,
      variant: "outline" as const,
    },
    {
      label: "WhatsApp",
      href: siteConfig.contact.whatsapp,
      variant: "outline" as const,
      external: true,
    },
  ],
} as const;

export const enquiryContent = {
  label: "Enquire Now",
  title: "Come, let's craft a happy\nfuture for your child",
  subtitle:
    "Share your details and our admissions team will reach out with guidance on grades, campus visits and boarding.",
  brochureSubtitle:
    "Complete the form below and your brochure download will begin automatically.",
  image: createImage(
    "/images/home/enquiry/campus-visit.png",
    remote.campus.bengaluru,
    "Visit The Academic City campus",
    false,
  ),
  fields: {
    grades: [
      "Class 4",
      "Class 5",
      "Class 6",
      "Class 7",
      "Class 8",
      "Class 9",
      "Class 10",
      "Class 11",
      "Class 12",
    ],
    campuses: ["Bengaluru", "Indore"],
  },
} as const;

export const contactContent = {
  label: "Get in Touch",
  title: "Talk to our\nadmissions team today!",
  subtitle: "Talk to our admissions team about grades, campus visits, fees and boarding.",
  ctas: [
    { label: "Connect with us", href: "tel:+919606488347", variant: "gold" as const },
    {
      label: "WhatsApp",
      href: siteConfig.contact.whatsapp,
      variant: "outline" as const,
      external: true,
    },
  ],
  locations: [
    {
      title: "Bengaluru Campus",
      address:
        "Bairegowdanahalli Bus Stop, Venkatapura, Sondekoppa Main Rd, Nelamangala Town, Karnataka 562123",
      phone: "080-47092273 (Admissions)",
      phoneHref: "tel:08047092273",
      email: "admissions@theacademiccity.com",
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.25!2d77.3986306!3d13.0571618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae254ef3b18d5b%3A0xda079052c6df77cc!2sThe%20Academic%20City%20School%20(CBSE%20Residential%20School)!5e1!3m2!1sen!2sin!4v1741459200",
      mapLabel: "Nelamangala, KA 562123",
    },
    {
      title: "Indore Campus",
      address: "Mohankheda Jain Tirth, Rajgarh, Dalpura, Madhya Pradesh 454116",
      phone: "080-47092273 (Admissions Only)",
      phoneHref: "tel:08047092273",
      email: "admissions@grjis.com",
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690!2d74.9300625!3d22.6746875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39617f9afc53c6c3%3A0x7796310595e4cd00!2sGuru%20Rajendra%20Jain%20International%20School!5e1!3m2!1sen!2sin!4v1741459200",
      mapLabel: "Rajgarh, MP 454116",
    },
  ] satisfies ContactLocation[],
} as const;
