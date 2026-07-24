import { siteConfig } from "@/config/site";
import { createImage } from "@/lib/images";
import type { BoardingPageContent } from "@/types/boarding";

const remote = {
  boarding: "https://theacademiccity.com/images/Home/nav/boarding.png",
  sports: "https://theacademiccity.com/images/Home/nav/sports.png",
  agri: "https://theacademiccity.com/images/Home/nav/agri1.png",
  career: "https://theacademiccity.com/images/Home/nav/career1.png",
  campus1: "https://theacademiccity.com/images/homepage/campus/1.png",
  campus2: "https://theacademiccity.com/images/homepage/campus/2.png",
} as const;

const weekdaySchedule = [
  { time: "5:30 AM", activity: "Wake Up" },
  { time: "6:00 – 6:30 AM", activity: "Yoga / Meditation / Warm-up" },
  { time: "6:30 – 7:30 AM", activity: "Getting Ready" },
  { time: "7:30 – 8:00 AM", activity: "Breakfast" },
  { time: "8:10 – 8:25 AM", activity: "Morning Assembly" },
  { time: "8:30 – 4:20 PM", activity: "School Hours" },
  { time: "4:40 – 5:00 PM", activity: "Evening Snacks" },
  { time: "5:00 – 6:15 PM", activity: "Sports" },
  { time: "6:30 – 8:00 PM", activity: "Evening Prep (Study)" },
  { time: "8:00 – 8:45 PM", activity: "Dinner + Family Calling" },
  { time: "8:45 – 9:30 PM", activity: "Night Prep (Study)" },
  { time: "9:30 – 10:00 PM", activity: "Circle Time + Daily Chores" },
  { time: "10:15 PM", activity: "Lights Off" },
] as const;

const sundaySchedule = [
  { time: "6:30 AM", activity: "Wake Up" },
  { time: "6:30 – 7:00 AM", activity: "Freshen Up" },
  { time: "7:00 – 8:30 AM", activity: "Morning Playtime" },
  { time: "8:30 – 9:30 AM", activity: "Breakfast" },
  { time: "9:30 – 10:30 AM", activity: "Dorm Cleaning / Shower / Swimming" },
  { time: "10:30 AM – 12:30 PM", activity: "Inter-House Activities" },
  { time: "12:30 – 1:30 PM", activity: "Lunch" },
  { time: "1:30 – 2:30 PM", activity: "Nap Time" },
  { time: "2:30 – 4:00 PM", activity: "Self Study Time" },
  { time: "4:00 – 4:15 PM", activity: "Evening Snacks" },
  { time: "4:15 – 6:00 PM", activity: "Activities / Evening Games / ICT" },
  { time: "6:00 – 8:00 PM", activity: "Movie Time" },
  { time: "8:00 – 8:30 PM", activity: "Dinner" },
  { time: "8:30 – 10:00 PM", activity: "Me Time / Music / Board Games" },
  { time: "10:00 PM", activity: "Lights Off" },
] as const;

export const boardingPageContent = {
  hero: {
    title: "Boarding Life at",
    titleHighlight: "TACS",
    description:
      "Indic value-based residential living - structured, safe and genuinely nurturing. A second home where discipline, character and independence grow every day.",
    image: createImage("/images/boarding/hero.png", remote.boarding, "Boarding at TACS"),
    stats: [
      { value: "24/7", label: "On-campus care" },
      { value: "6 Meals", label: "Daily, Veg & Jain" },
      { value: "Indic", label: "Values at the core" },
    ],
  },
  subnav: [
    { id: "values", label: "Values" },
    { id: "dorm", label: "Dorm Life" },
    { id: "schedule", label: "Schedule" },
    { id: "communication", label: "Communication" },
    { id: "outpass", label: "Outpass" },
    { id: "discipline", label: "Discipline" },
    { id: "care", label: "Safety & Food" },
    { id: "gallery", label: "Gallery" },
  ],
  values: {
    label: "Indic Value-Based Boarding Life",
    title: "Instilling discipline, values & self-leadership",
    description:
      "Through structured routines and community living, students develop character that lasts long after school.",
    tiles: [
      {
        accent: "t1",
        icon: "leaf",
        title: "Indian Ethos",
        description:
          "Rooted in respect, humility and gratitude. Students live the values of seva, discipline and mindfulness - every single day.",
      },
      {
        accent: "t2",
        icon: "sun",
        title: "Mindfulness Daily",
        description:
          "Yoga, meditation and morning reflection - a structured start to every day that builds focus, calm and inner awareness.",
      },
      {
        accent: "t3",
        icon: "star",
        title: "Resilience",
        description:
          "Structured living builds grit. Students balance academics and character, developing self-leadership from Grade 5.",
      },
      {
        accent: "t4",
        icon: "users",
        title: "Community Living",
        description:
          "Simple shared spaces, peer learning and the house system foster collaboration, empathy and genuine friendship.",
      },
      {
        accent: "t5",
        icon: "home",
        title: "Cultural Awareness",
        description:
          "Festivals, performing arts and Indic heritage - students stay connected to tradition while building a global perspective.",
      },
      {
        accent: "t6",
        icon: "heart",
        title: "Inner Growth",
        description:
          "Character, confidence and clarity - the three outcomes every TACS boarding student carries forward into adult life.",
      },
    ],
  },
  scheduleBand: {
    title: "A boarding school where every hour has a purpose",
    description: "From 5:30 AM wake-up to 10:15 PM lights out - the structure is what makes the difference.",
    cta: { label: "Book a campus visit", href: "/#enquiry" },
  },
  dorm: {
    label: "Dorm Parents",
    title: "One dedicated adult for every 10–15 students",
    paragraphs: [
      "Each student is assigned a dorm parent who acts as their primary caregiver, confidant and guide on campus. They supervise daily routines, address concerns immediately and are the single point of contact between students and school management.",
      "This isn't just supervision - it's a relationship. Dorm parents know every student by name, temperament and circumstance. They show up when it matters.",
    ],
    quote:
      "Dorm parents are the one point of contact for anything that happens on campus. They are there for students through thick and thin.",
    image: createImage(
      "/images/boarding/dorm-parent.png",
      remote.boarding,
      "Dorm parent with students at TACS",
    ),
    keyItemsLabel: "Key things to remember",
    keyItems: [
      { icon: "home", text: "Fresh, clean laundry maintained for every student" },
      { icon: "phone", text: " Scheduled family calls to stay connected" },
      { icon: "droplet", text: "Personal hygiene routines supervised" },
      { icon: "users", text: "Daily circle time with dorm parents" },
      { icon: "wallet", text: "Staff oversee all student purchases" },
      { icon: "document", text: "Outpasses issued only upon approval" },
    ],
  },
  schedule: {
    label: "Daily Schedule",
    title: "Every hour has a purpose",
    description: "Two different schedules - structured weekdays and a relaxed, enriching Sunday.",
    tabs: [
      { id: "weekday", label: "Weekday", rows: weekdaySchedule },
      { id: "sunday", label: "Sunday", rows: sundaySchedule },
    ],
  },
  communication: {
    label: "Parent Communication",
    title: "You are always in the loop",
    description:
      "Multiple structured channels - so parents are never out of touch with their child's life on campus.",
    cards: [
      {
        icon: "phone",
        title: "Calling Schedule",
        description: "Twice a week for 15 mins + special occasions or sick time (5 mins)",
      },
      {
        icon: "calendar",
        title: "Event Updates",
        description: "Daily / weekly reports, calls, circulars and WhatsApp group announcements",
      },
      {
        icon: "alert",
        title: "Emergency Line",
        description: "Incident and sickness reporting - parents contacted immediately, no delays",
      },
      {
        icon: "coffee",
        title: "Coffee Evenings",
        description: "Class-wise Zoom / Google Meet sessions as per the academic calendar",
      },
      {
        icon: "users",
        title: "ERP Parent Connect",
        description: "One portal for academics, wellbeing and reports - always up to date",
      },
    ],
  },
  outpass: {
    label: "Outpass Protocol",
    title: "Outings follow a clear, safety-first process",
    description:
      "Every campus exit, passes through multiple checkpoints, so students are always accounted for and safe.",
    steps: [
      {
        number: "1",
        title: "Email Class Teacher",
        description: "Parent submits outpass request via email to class teacher with reason and dates.",
      },
      {
        number: "2",
        title: "Class Teacher Approval",
        description: "Teacher reviews and approves or flags academic concerns before escalating.",
      },
      {
        number: "3",
        title: "Dorm Parent Approval",
        description: "Dorm parent confirms student wellbeing status and hostel clearance.",
      },
      {
        number: "4",
        title: "Principal Approval",
        description: "Final sign-off from the principal completes the process.",
      },
      {
        number: "✓",
        title: "Outpass Granted",
        description:
          "Physical outpass issued by the warden; student exits only with an authorised guardian.",
      },
    ],
    rules: [
      "Only parents or authorised guardians may pick up students.",
      "Self-outings are not permitted under any circumstances.",
      "In/out timing restricted to 6:00 AM – 6:00 PM only.",
      "Emergency exits handled only with management approval.",
      "72 hours prior intimation mandatory for all outpass requests.",
    ],
    outingNote:
      "Student outing schedules are defined in advance and included in the annual calendar. Any outing beyond the scheduled dates will be permitted only in case of an emergency and with prior approval from the school.",
  },
  discipline: {
    label: "Discipline & Conduct",
    title: "Clear policies. Zero tolerance.",
    description:
      "Bullying, ragging and substance use are not tolerated. Read our policies below.",
    policies: [
      {
        slug: "anti-bullying-ragging",
        title: "Anti-Bullying & Anti-Ragging Policy",
        preview:
          "Zero tolerance for bullying, cyberbullying and ragging - with a dedicated committee, confidential reporting and graded disciplinary action aligned with CBSE guidelines.",
        icon: "shieldCheck",
        accent: "emerald",
      },
      {
        slug: "anti-narcotics",
        title: "Anti-Narcotics & Substance Abuse Policy",
        preview:
          "Zero tolerance for tobacco, alcohol and narcotics on campus - with prevention programmes, confidential reporting and graded support and disciplinary action.",
        icon: "alert",
        accent: "violet",
      },
    ],
  },
  care: {
    label: "Safety & Nutrition",
    title: "Safe. Healthy. Always.",
    safety: {
      title: "Safety & Pastoral Care",
      description:
        "Round-the-clock care, safety and support to ensure every student feels secure and looked after.",
      items: [
        {
          icon: "shieldCheck",
          title: "24hr Medical Care",
          description: "On-call doctor and nurse on campus at all times. Clinic open round the clock.",
        },
        {
          icon: "heart",
          title: "Emotional Wellbeing",
          description: "Professional counsellors available for every student - confidential and regular.",
        },
        {
          icon: "users",
          title: "Overnight Supervision by House Parents",
          description: "Resident wardens in every hostel - first point of contact after lights out.",
        },
        {
          icon: "star",
          title: "CCTV & Gated Campus",
          description: "Full campus surveillance, 24h security. No unauthorised entry or exit.",
        },
      ],
      medicalPartners: {
        label: "Medical partners",
        logos: [
          {
            src: "/images/boarding/partners/nanohealth.png",
            alt: "Assurance by NanoHealth",
            width: 140,
            height: 48,
          },
          {
            src: "/images/boarding/partners/harsha-hospital.png",
            alt: "Harsha Hospital",
            width: 140,
            height: 40,
          },
        ],
      },
    },
    nutrition: {
      title: "Nutrition & Meals",
      description:
        "Six nutritious meals planned by a nutritionist, cooked fresh on campus daily. Vegetarian and Jain options at every meal.",
      meals: [
        "Morning Milk + Soaked Almonds",
        "Breakfast",
        "Mid-Morning Fruit Break",
        "Lunch",
        "Evening Snack",
        "Dinner",
      ],
      items: [
        {
          icon: "leaf",
          title: "Farm-fresh produce",
          description:
            "Our campus farm contributes to the kitchen - students understand where food comes from.",
        },
        {
          icon: "heart",
          title: "Community dining",
          description:
            "All meals eaten together - a daily ritual that builds connection and discipline.",
        },
      ],
      foodPartner: {
        label: "Nutrition partner",
        logo: {
          src: "/images/boarding/partners/swaad.png",
          alt: "Swaad",
          width: 120,
          height: 48,
        },
      },
    },
  },
  gallery: {
    label: "Boarding Life in Pictures",
    title: "See what a day at TACS looks like",
    items: [
      {
        label: "Campus Life",
        image: createImage("/images/boarding/gallery-campus.png", remote.campus1, "Campus"),
        wide: true,
      },
      {
        label: "Morning Sport",
        image: createImage("/images/boarding/gallery-sport.png", remote.sports, "Morning sport"),
      },
      {
        label: "Hostel Life",
        image: createImage("/images/boarding/gallery-hostel.png", remote.boarding, "Hostel"),
      },
      {
        label: "Farm & Nature",
        image: createImage("/images/boarding/gallery-farm.png", remote.agri, "Farm"),
      },
      {
        label: "Evening Study",
        image: createImage("/images/boarding/gallery-study.png", remote.career, "Study"),
      },
      {
        label: "Campus at Evening",
        image: createImage("/images/boarding/gallery-evening.png", remote.campus2, "Evening campus"),
        wide: true,
      },
    ],
  },
  ctaBand: {
    label: siteConfig.admissionsBadge,
    title: "See boarding life for yourself",
    description:
      "Walk the dormitories, meet the dorm parents, see the dining hall. Nothing builds trust like being there.",
    enquiry: { label: "Book a campus visit", href: "/#enquiry" },
    phone: {
      label: siteConfig.contact.phoneDisplay,
      href: `tel:${siteConfig.contact.phone}`,
    },
    whatsapp: { label: "WhatsApp", href: siteConfig.contact.whatsapp },
  },
} satisfies BoardingPageContent;
