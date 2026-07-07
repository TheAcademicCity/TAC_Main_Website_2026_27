import { createImage } from "@/lib/images";
import type { SiteVideo } from "@/types/images";
import type {
  AdmissionStep,
  AwardItem,
  CampusSlide,
  ContactLocation,
  FeatureRow,
  FounderProfile,
  GalleryTab,
  NewsArticle,
  PillarItem,
  StatItem,
} from "@/types";

const remote = {
  heroPoster: "https://theacademiccity.com/images/homepage/overview.png",
  heroVideo:
    "https://the-academic-city-boarding-school.s3.ap-south-1.amazonaws.com/Videos/Reel+4.mp4",
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
    fallbackSrc: remote.heroVideo,
    poster: createImage("/images/home/hero/poster.png", remote.heroPoster, "TACS Bengaluru campus"),
    isPlaceholder: true,
  } satisfies SiteVideo,
  eyebrow: "⭐ Best Boarding School 2024 · Oxford, UK",
  title: "India's First",
  titleHighlight: "Career-Oriented",
  titleSuffix: "Boarding School",
  subtitle: "Instilling 21st Century Skills · Bengaluru, Nelamangala",
} as const;

export const statsContent: StatItem[] = [
  { value: "Grades 5 - 12", label: "Residential boarding" },
  { value: "CBSE", label: "New Delhi curriculum" },
  { value: "600+", label: "Career paths explored" },
  { value: "Indore", label: "Mohankheda campus" },
  { value: "Bengaluru", label: "Nelamangala campus" },
];

export const pillarsContent = {
  label: "Our Core Delivery Framework",
  title: "Four Pillars That Shape Every Child",
  description:
    "Every day at TACS follows one deliberate path - from academic clarity, to creative growth, to a values-led boarding life, to a clear career direction.",
  watermark: ["CORE", "DELIVERY", "FRAMEWORK"],
  items: [
    {
      number: "01",
      title: "Academics",
      tagline: "Concept clarity across all grades",
      description:
        "Focused, subject-wise academic planning ensures consistent growth from Grade 5 through 12. CBSE curriculum delivered with a 1:10 student–teacher ratio and personalised Student Progression Plans.",
      image: createImage(
        "/images/home/pillars/academics.png",
        remote.pillars.academics,
        "Academics",
      ),
      href: "/academics",
      accent: "emerald",
    },
    {
      number: "02",
      title: "Co-curricular & Extra-curricular",
      tagline: "All-round personality development",
      description:
        "Art, dance, theatre, music and pottery foster creativity and collaboration. Our Life Readiness programme adds martial arts, financial literacy, first aid, cooking and public speaking.",
      image: createImage(
        "/images/home/pillars/curriculum.png",
        remote.pillars.curriculum,
        "Co-curricular",
      ),
      href: "/co-curricular",
      accent: "gold",
    },
    {
      number: "03",
      title: "Indic Value-Based Boarding Life",
      tagline: "Discipline, values and self-leadership",
      description:
        "Separate AC hostels, pastoral care, 24-hour doctor on-call and home-like celebrations create a safe, joyful home away from home, shaped by Indic values and structured living.",
      image: createImage("/images/home/pillars/boarding.png", remote.pillars.boarding, "Boarding life"),
      href: "/boarding",
      accent: "forest",
    },
    {
      number: "04",
      title: "Career Orientation",
      tagline: "Early, continuous career discovery",
      description:
        'From Grade 5 to 12, students explore 600+ career options through industry interactions, psychometric assessments and expert mentoring — turning the daunting "what next?" into a confident, clear answer.',
      image: createImage("/images/home/pillars/career.png", remote.pillars.career, "Career orientation"),
      href: "/career-guidance",
      accent: "violet",
    },
  ] satisfies PillarItem[],
} as const;

export const brochureContent = {
  title: "Discover Everything TACS Has to Offer",
  description:
    "Download our school brochure for a complete guide to academics, campus life, admissions and fees.",
  cta: { label: "Download Brochure", href: "https://theacademiccity.com/admission" },
  background: createImage("/images/home/brochure/overview.png", remote.heroPoster, ""),
} as const;

export const academicsContent = {
  label: "Academics & Campus Life",
  title: "Academic eminence. Career focus. Holistic growth.",
  rows: [
    {
      label: "Academic Excellence",
      title: "A rigorous CBSE foundation, built for every child",
      description:
        "Our Bengaluru campus follows the CBSE curriculum with a 1:10 student–teacher ratio and individualised Student Progression Plans — so every child moves at the right pace, builds genuine concept clarity and walks into Grades 11 and 12 fully prepared.",
      image: createImage("/images/home/academics/cbse.png", remote.pillars.academics, "CBSE academics at TACS"),
      imageTag: "CBSE · Grades 5–12 · 1:10 Mentoring",
      chips: ["CBSE — New Delhi", "Grades 5–12", "1:10 Mentoring", "Personalised Plans"],
      cta: { label: "Explore Academics", href: "/academics" },
    },
    {
      label: "Career-First Learning",
      title: "Helping every child discover the right path, early",
      description:
        "Students explore over 600 career options through industry workshops and psychometric assessments from Grade 5 onwards. Structured preparation is available for Grades 11 & 12 — covering engineering, medicine, law, design, CA, management and study abroad.",
      image: createImage(
        "/images/home/academics/career.png",
        remote.pillars.career,
        "Career guidance",
      ),
      imageTag: "Grades 5–12 · 600+ Career Paths",
      chips: ["600+ Career Options", "Psychometric Tests", "Industry Mentors", "LEAP & IDC Programmes"],
      cta: { label: "Explore Career Programme", href: "/career-guidance" },
      flipped: true,
    },
    {
      label: "Sport & Life Readiness",
      title: "90 minutes of sport, every single day",
      description:
        "Every student plays daily — with dedicated coaches for football, basketball, swimming, cricket, badminton and more. Talented athletes are nurtured from district to national level. Our Life Readiness programme adds first aid, cooking, financial literacy and public speaking.",
      image: createImage("/images/home/academics/sports.png", remote.pillars.sports, "Sports at TACS"),
      imageTag: "90 Min/Day · District to National",
      chips: ["Football", "Basketball", "Swimming", "Cricket", "Badminton", "Kho-Kho"],
      cta: { label: "Explore Campus Life", href: "/boarding" },
    },
  ] satisfies FeatureRow[],
  band: {
    title: "Focused preparation for Grades 11 & 12",
    description:
      "Whether a student is aiming for engineering, medicine, law, design, architecture, CA, management or study abroad — we provide structured academic support so every aspiration has a clear plan behind it.",
    chips: [
      "Engineering",
      "Medicine",
      "Law",
      "Design",
      "Architecture",
      "CA",
      "Management",
      "Study Abroad",
    ],
    cta: { label: "Enquire Now", href: "/#contact" },
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
        { label: "Aerial Campus View", height: 280 },
        { label: "Sports Arena", height: 200 },
        { label: "Main Building", height: 340 },
        { label: "Running Track", height: 220 },
        { label: "Swimming Pool", height: 260 },
        { label: "Hostel Block", height: 200 },
        { label: "Farm & Goshala", height: 300 },
        { label: "Dining Hall", height: 180 },
      ],
    },
    {
      id: "academics",
      label: "Academics",
      items: [
        { label: "Smart Classroom", height: 260 },
        { label: "Career Guidance Session", height: 320 },
        { label: "Science Lab", height: 200 },
        { label: "Library", height: 280 },
        { label: "Investiture Ceremony", height: 220 },
        { label: "Industry Interaction", height: 300 },
        { label: "Psychometric Assessment", height: 180 },
        { label: "Student Progression Plan", height: 240 },
      ],
    },
    {
      id: "extra",
      label: "Extra-curriculars",
      items: [
        { label: "Basketball", height: 300 },
        { label: "Dance Performance", height: 220 },
        { label: "Theatre Production", height: 260 },
        { label: "Art & Craft", height: 200 },
        { label: "Football Match", height: 280 },
        { label: "Music Class", height: 240 },
        { label: "Cooking Class", height: 200 },
        { label: "Sports Day", height: 320 },
      ],
    },
    {
      id: "boarding",
      label: "Boarding Life",
      items: [
        { label: "Hostel Room", height: 260 },
        { label: "Dining Experience", height: 200 },
        { label: "Independence Day Celebration", height: 320 },
        { label: "Ganesh Chaturthi", height: 220 },
        { label: "Pastoral Care", height: 280 },
        { label: "Teachers' Day", height: 200 },
        { label: "Evening Study Hall", height: 240 },
        { label: "Morning Assembly", height: 300 },
      ],
    },
  ] satisfies GalleryTab[],
} as const;

export const awardsContent = {
  label: "Awards & Recognitions",
  title: "Recognised for excellence, nationally & globally",
  watermark: "RECOGNITION",
  items: [
    { name: "Education Leaders Awards", year: "2024" },
    { name: "Brainfeed Top 500 Schools of India", year: "2022–23" },
    { name: "India School Merit Awards", year: "National Recognition" },
    { name: "21CL ISLE Awards Bengaluru", year: "2022" },
    { name: "Best Boarding School · Oxford University UK", year: "2024" },
  ] satisfies AwardItem[],
} as const;

export const campusContent = {
  label: "Our Campuses",
  title: "Two campuses. One philosophy.",
  badge: "Admissions Open 2026–27",
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
      ),
      facts: [
        { value: "Grades 5–12", label: "Residential boarding" },
        { value: "CBSE", label: "New Delhi curriculum" },
        { value: "1 : 10", label: "Student–teacher ratio" },
        { value: "24h Doctor", label: "On-call medical care" },
        { value: "6 Meals/Day", label: "Veg & Jain options" },
        { value: "AC Hostels", label: "Separate boys & girls" },
      ],
      cta: { label: "Book a Campus Visit", href: "/#contact" },
    },
    {
      id: "indore",
      name: "Indore",
      label: "Indore Campus",
      title: "A scenic campus in Madhya Pradesh",
      description:
        "Located in Mohankheda Jain Tirth, Rajgarh (Dhar), the Indore campus offers the same TACS philosophy — structured boarding, strong academics and career-first learning — in the peaceful landscape of Madhya Pradesh.",
      image: createImage("/images/home/campus/indore.png", remote.campus.indore, "TACS Indore"),
      facts: [
        { value: "Grades 5–12", label: "Residential boarding" },
        { value: "CBSE", label: "New Delhi curriculum" },
        { value: "1 : 12", label: "Student–teacher ratio" },
        { value: "24h Doctor", label: "On-call medical care" },
        { value: "6 Meals/Day", label: "Veg & Jain options" },
        { value: "AC Hostels", label: "Separate boys & girls" },
      ],
      cta: { label: "Enquire about Indore", href: "mailto:Admission.mk@theacademiccity.com" },
    },
  ] satisfies CampusSlide[],
} as const;

export const foundersContent = {
  label: "The Visionaries",
  title: "The founders who built a different kind of school",
  description:
    "A boarding school built on a bold belief — that schooling should prepare children for life, not just for exams.",
  profiles: [
    {
      name: "Sripal Jain",
      role: "Founder",
      quote:
        "We built this school because we believed every child deserves to know not just what to learn, but why — and where it leads. Career discovery isn't a post-school thought; it should be woven into every single year of a child's education.",
      image: createImage("/images/home/founders/sripal.png", remote.founders.sripal, "Sripal Jain"),
      initials: "SJ",
      variant: "featured",
    },
    {
      name: "Abhay Ranka",
      role: "Co-Founder",
      quote:
        "India has thousands of good schools. We wanted to build a great one — where children grow up rooted in values, confident in who they are and clear about the future they are walking towards.",
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
  label: "Admissions 2026–27",
  title: "Joining TACS is simple",
  subtitle: "Five clear steps from your first enquiry to welcoming your child to campus.",
  steps: [
    {
      number: "01",
      title: "Enquire",
      description:
        "Share a few details and the grade you're applying for. Our admissions team responds within a day.",
    },
    {
      number: "02",
      title: "Campus Visit",
      description:
        "Tour Nelamangala, meet our team and see boarding life first-hand — in person or virtually.",
    },
    {
      number: "03",
      title: "Entrance Exam",
      description:
        "A simple age-appropriate assessment to help us understand your child's academic starting point.",
    },
    {
      number: "04",
      title: "Interaction",
      description:
        "A warm conversation with your child to understand their interests, strengths and goals.",
    },
    {
      number: "05",
      title: "Enrolment",
      description: "Complete the formalities and secure your child's place for the upcoming academic year.",
    },
  ] satisfies AdmissionStep[],
  ctas: [
    { label: "Start Your Enquiry", href: "/#contact", variant: "gold" as const },
    { label: "+91 96064 88347", href: "tel:+919606488347", variant: "outline" as const },
    {
      label: "WhatsApp",
      href: "https://wa.me/919364898405",
      variant: "outline" as const,
      external: true,
    },
  ],
} as const;

export const contactContent = {
  label: "Get in Touch",
  title: "Come, let's craft a happy future for your child",
  subtitle: "Talk to our Bengaluru admissions team about grades, campus visits, fees and boarding.",
  ctas: [
    { label: "Call Admissions", href: "tel:+919606488347", variant: "gold" as const },
    {
      label: "WhatsApp",
      href: "https://wa.me/919364898405",
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
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.1!2d77.3886!3d13.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb18b8a5a0b5a89%3A0x1234567890abcdef!2sNelamangala%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890",
      mapLabel: "Nelamangala, KA 562123",
    },
    {
      title: "Corporate Office",
      address: "#2, Krishna Rajendra Rd, Basavanagudi, Bengaluru, Karnataka 560004",
      phone: "+91 96064 88347 (General)",
      phoneHref: "tel:+919606488347",
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5!2d77.5738!3d12.9454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae158d1d9e3d6b%3A0x1234!2s%232%2C%20Krishna%20Rajendra%20Rd%2C%20Basavanagudi%2C%20Bengaluru%2C%20Karnataka%20560004!5e0!3m2!1sen!2sin!4v1234567890",
      mapLabel: "Basavanagudi, KA 560004",
    },
  ] satisfies ContactLocation[],
} as const;
