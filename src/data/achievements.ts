import { siteConfig } from "@/config/site";
import { createImage } from "@/lib/images";
import type { AchievementsPageContent } from "@/types/achievements";

const remote = {
  sports: "https://theacademiccity.com/images/Home/nav/sports.png",
  campus: "https://theacademiccity.com/images/homepage/campus/1.png",
  studentFeatured: "/images/home/parents/4.jpg",
  student1: "/images/home/parents/6.jpg",
  student2: "/images/home/parents/5.jpg",
  student3: "/images/home/parents/3.jpg",
  student4: "/images/home/parents/2.jpg",
} as const;

export const achievementsPageContent = {
  hero: {
    title: "Every Story.",
    titleHighlight: "Every Proud Moment.",
    description:
      "Achievements across Science, Commerce, Design, Sports & the Arts —\na record of the accomplishments and milestones that define the spirit of The Academic City School.",
    image: createImage(
      "/images/achievements/hero.png",
      remote.sports,
      "TACS student achievements",
    ),
    stats: [
      { value: "99.96", label: "Highest JEE percentile" },
      { value: "90+", label: "Medical college admissions" },
      { value: "50+", label: "National & inter-school medals" },
    ],
  },
  subnav: [
    { id: "jee", label: "JEE" },
    { id: "neet", label: "NEET" },
    { id: "commerce", label: "Commerce" },
    { id: "sports", label: "Sports" },
    { id: "arts", label: "Arts & Creativity" },
  ],
  starAchiever: {
    featured: {
      eyebrow: "⭐ Star Achiever · 2023–24",
      name: "Shravan P",
      nameHighlight: "Nikhil",
      stat: "99.96",
      statLabel: "JEE Percentile · IIT Madras",
      description:
        "Among TACS's highest JEE scorers — earning a seat at IIT Madras. A true benchmark of what the ALLEN-integrated programme can achieve.",
      tags: ["Science Stream", "IIT Madras"],
      image: createImage(
        "/images/achievements/students/granth.jpg",
        remote.studentFeatured,
        "Shravan P Nikhil",
      ),
    },
    subHeading: "More remarkable science achievers",
    subAchievers: [
      {
        name: "Granth Agarwal",
        value: "96.12%",
        label: "JEE · 2024–25",
        image: createImage("/images/achievements/students/granth.jpg", remote.student1, "Granth Agarwal"),
      },
      {
        name: "Aami Rajiv",
        value: "NID",
        label: "93 NID CR 2024",
        image: createImage("/images/achievements/students/aami.jpg", remote.student2, "Aami Rajiv"),
      },
      {
        name: "Aditya Singh Bisht",
        value: "1560",
        label: "SAT Score / 1600",
        image: createImage("/images/achievements/students/aditya.jpg", remote.student3, "Aditya Singh Bisht"),
      },
      {
        name: "Olivia Majumder",
        value: "NIFT",
        label: "Qualified · 2023–24",
        image: createImage("/images/achievements/students/olivia.jpg", remote.student4, "Olivia Majumder"),
      },
    ],
    admissionsNote: {
      value: "30+",
      label: "Engineering college admissions including IIT Madras",
    },
  },
  jee: {
    chapter: "01",
    label: "JEE Achievers",
    title: "Engineering the future",
    description:
      "From IIT Madras to leading engineering institutes — TACS students are cracking India's most competitive engineering entrances with percentiles that place them in the top fraction of the country.",
    highlight: {
      percentile: "99.96%",
      name: "Shravan P Nikhil",
      university: "IIT Madras",
      description:
        "TACS's highest JEE scorer — admitted to IIT Madras. Proof of what the ALLEN-integrated programme delivers when a student finds their path early.",
    },
    topRows: [
      { name: "Ritwik Viswanathan", batch: "Science · 2023–24", percentile: "99.89%" },
      { name: "Dhruva Reddy N", batch: "Science · 2023–24", percentile: "99.73%" },
      { name: "Yash Thakur", batch: "Science · 2023–24", percentile: "99.71%" },
      { name: "Aryan Pohkriyal", batch: "Science · 2023–24", percentile: "99.71%" },
      { name: "Armman Roy", batch: "Science · 2023–24", percentile: "99.63%" },
      { name: "Rishi Manjunath", batch: "Science · 2023–24", percentile: "99.56%" },
      { name: "Pranav R", batch: "Science · 2023–24", percentile: "99.39%" },
      { name: "Udisha Barnwal", batch: "Science · 2023–24", percentile: "99.37%" },
    ],
    moreLabel: "More JEE qualifiers",
    moreChips: [
      { name: "Tarun P", percentile: "99.36%", batch: "Science · 2023–24" },
      { name: "Abhhay S Sharma", percentile: "99.31%", batch: "Science · 2023–24" },
      { name: "Draksharapu Akshaya", percentile: "99.22%", batch: "Science · 2023–24" },
      { name: "Saikirthan K", percentile: "99.16%", batch: "Science · 2023–24" },
      { name: "Amitesh Das", percentile: "99.14%", batch: "Science · 2023–24" },
      { name: "Namitha Jain", percentile: "93.02%", batch: "Science · 2024–25" },
      { name: "Dhanishta Bhattachajee", percentile: "92.81%", batch: "Science · 2024–25" },
      { name: "Granth Agarwal", percentile: "96.12%", batch: "Science · 2024–25" },
    ],
  },
  statsBand: [
    { value: "120+", label: "Total university admissions across India & abroad" },
    { value: "30+", label: "Engineering admissions including IIT Madras" },
    { value: "90+", label: "Medical college admissions across India" },
  ],
  neet: {
    chapter: "02",
    label: "NEET Achievers",
    title: "Healing the future",
    description:
      "TACS students are walking into CMC Vellore, Bangalore Medical College, RIMS and institutions across India. Over 90 medical admissions and counting.",
    topCards: [
      { score: "635", name: "Sujan", college: "Science · 2024–25" },
      { score: "635", name: "Mallikarjun J", college: "Bangalore Medical College · 2023–24" },
    ],
    grid: [] as AchievementsPageContent["neet"]["grid"],
  },
  commerce: {
    chapter: "03",
    label: "Commerce Champions",
    title: "Law, Finance & Management",
    description:
      "CLAT, CA Foundation, IIM and international qualifications — TACS commerce students are entering India's most competitive professional institutions.",
    cards: [
      { badge: "CLAT", badgeTone: "violet", achievement: "AIR 338", name: "Akshara", detail: "Commerce · 2025–26 · National Law School pathway" },
      { badge: "CA Foundation", badgeTone: "gold", achievement: "1st Attempt", name: "Poorv Mittal", detail: "Commerce · 2024–25 · Christ University" },
      { badge: "IIM Bangalore", badgeTone: "green", achievement: "BBA–DBE", name: "Ayush Jishnu", detail: "Commerce · 2024–25 · MESA Exam qualifier" },
      { badge: "LNAT UK", badgeTone: "violet", achievement: "Qualified", name: "Lalithya", detail: "Commerce · 2025–26 · International law pathway" },
      { badge: "BBA", badgeTone: "gold", achievement: "Decision Science", name: "Ayush", detail: "Commerce · 2025–26" },
      { badge: "BBA", badgeTone: "green", achievement: "Admitted", name: "Harshit Agarwal", detail: "Commerce · 2024–25" },
    ],
  },
  sports: {
    chapter: "04",
    label: "Sports & Athletic Achievers",
    title: "On the court, in the pool, on the track",
    description:
      "TACS athletes represent at district, state and national level. They don't just play — they win. Sport at TACS is a core part of building character, resilience and teamwork.",
    hero: {
      medal: "🥈",
      event: "CBSE Cluster Nationals · Javelin Throw",
      title: "Silver Medal",
      athlete: "Vijaya Raja Simha · Science · 2025–26",
      description:
        "Vijaya qualified for the CBSE Cluster Nationals and returned with a Silver Medal in Javelin Throw — one of the most competitive track & field events at the national school level.",
    },
    cards: [
      {
        icon: "🥇",
        title: "3× Gold — Inter-school Swimming",
        detail:
          "Manas · Grade 9 · Three gold medals in a single inter-school swimming tournament. Dominant performance across strokes.",
      },
      {
        icon: "🏊",
        title: "National Level Swimming",
        detail: "Ekalavya Nishad · Grade 10 · Represented TACS at national level swimming competitions.",
      },
      {
        icon: "🏐",
        title: "CBSE Clusters — Volleyball",
        detail:
          "Both boys and girls volleyball teams represented TACS at CBSE Cluster level competitions. Inter School Volleyball Tournament · 2nd August 2025.",
      },
    ],
  },
  arts: {
    chapter: "05",
    label: "Arts, Culture & Creativity",
    title: "Expression without limits",
    description:
      "From science exhibitions to music bands, from wall paintings to published books — TACS students express, create and leave their mark everywhere they go.",
    cards: [
      {
        icon: "🎸",
        tag: "Music",
        tagTone: "violet",
        title: "Music Band — Runners-Up",
        description:
          "TACS's music band finished as Runners-Up at the Inter-school Fest — competing against schools across Bengaluru in live performance categories.",
      },
      {
        icon: "🔬",
        tag: "Science",
        tagTone: "emerald",
        title: "Inter-school Science Exhibition",
        description:
          "TACS students showcased original research and innovation projects at inter-school science exhibitions, demonstrating that curiosity extends well beyond the textbook.",
      },
      {
        icon: "🖌️",
        tag: "Visual Art",
        tagTone: "gold",
        title: "Drawing & Painting Awards",
        description:
          "Multiple award-winning artworks at drawing and painting competitions. TACS students also transformed campus walls into large-scale murals — turning everyday spaces into creative expressions.",
      },
    ],
    author: {
      icon: "📖",
      title: "A Published Author\nAmong Us",
      name: "Dhanistha Bhattacharjee",
      detail: "Grade 11 · Science · TACS Bengaluru",
      quote: "Writing this book has been an incredible journey. I'm excited to share my stories with the world.",
      description:
        "Writing a book at 16 — it happened at TACS. Dhanistha's published work is proof that academic excellence and creative voice can walk hand in hand.",
      byline: "A TACS student · Published author",
    },
    designLabel: "Grade 11 Design Stream — NID & NIFT Aspirants",
    designStudents: [
      { icon: "🚲", name: "Raunak", project: "Uni Bike Project", target: "NID Aspirant" },
      { icon: "⛵", name: "Shristi", project: "Leviathan Ship", target: "NIFT Aspirant" },
      { icon: "🏛️", name: "John", project: "Japanese Architecture", target: "NID Aspirant" },
      { icon: "🎨", name: "Poshika", project: "Inspired by Medusa", target: "NIFT Aspirant" },
    ],
  },
  gratitude: {
    label: "With Gratitude",
    quote: "Every mark scored, every trophy lifted, every canvas painted — is a chapter in the story of",
    quoteHighlight: "who our students are becoming.",
    attribution: "The Academic City School",
    description:
      "Behind every rank, every medal and every acceptance letter there are teachers who believed, parents who trusted, and a community that never stopped pushing. This record of achievement is as much theirs as it is our students'.",
    roles: [
      { icon: "👩‍🏫", title: "Faculty Team" },
      { icon: "🤝", title: "Academic Partners" },
      { icon: "🏠", title: "Support Staff" },
      { icon: "🎓", title: "Alumni" },
      { icon: "👨‍👩‍👧", title: "Parents & Guardians" },
      { icon: "🏛️", title: "Management" },
    ],
  },
  ctaBand: {
    label: "Admissions 2027–28",
    title: "Your child's story starts here",
    description:
      "Join a school where academic excellence, creative expression and sporting achievement go hand in hand.",
    enquiry: { label: "Apply now", href: "/admissions" },
    phone: {
      label: siteConfig.utilityBar.phoneDisplay,
      href: `tel:${siteConfig.utilityBar.phone}`,
    },
    whatsapp: { label: "WhatsApp", href: siteConfig.contact.whatsapp },
  },
} as const satisfies AchievementsPageContent;
