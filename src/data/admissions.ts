import { siteConfig } from "@/config/site";
import { getGmailComposeUrl } from "@/lib/email";
import { createImage } from "@/lib/images";
import type { AdmissionsPageContent } from "@/types/admissions";

const remote = {
  career: "https://theacademiccity.com/images/Home/nav/career1.png",
  academics: "https://theacademiccity.com/images/Home/nav/academics.png",
  campus: "https://theacademiccity.com/images/homepage/campus/1.png",
  bengaluru: "https://theacademiccity.com/images/homepage/campus/1.png",
} as const;

export const admissionsPageContent = {
  hero: {
    title: "Admissions",
    titleHighlight: "",
    image: createImage("/images/admissions/hero.png", remote.career, "Admissions at TACS"),
    primaryCta: { label: "See the process", href: "#process" },
    phone: {
      label: siteConfig.contact.phoneDisplay,
      href: `tel:${siteConfig.contact.phone}`,
    },
    whatsapp: { label: "WhatsApp", href: siteConfig.contact.whatsapp },
  },
  subnav: [
    { id: "overview", label: "Overview" },
    { id: "process", label: "Process" },
    { id: "criteria", label: "Criteria" },
    { id: "clarity", label: "Campus Visit" },
    { id: "faq", label: "FAQs" },
  ],
  overview: {
    label: "Admissions",
    title: "Enrol with us - Manifest the best version of your child",
    visitTimings: "9 AM to 6 PM",
    paragraphs: [
      "TACS offers a career-oriented residential education from Grades 5 to 12 - blending academic rigour, Indic values and real-world skills in a safe, structured boarding environment.",
      "Admissions are open now. The entire process can be completed online - application, entrance exam, interaction - or you are most welcome to visit us in Nelamangala any day from 9 AM to 6 PM.",
    ],
    image: createImage(
      "/images/admissions/overview-1.png",
      remote.career,
      "Students in school uniform gathered on outdoor bleachers during a school assembly at TACS",
      false,
    ),
    cta: { label: "Book your visit today!", href: "/#enquiry" },
  },
  process: {
    label: "Admissions Process",
    title: "Joining TACS is simple",
    description: "Five clear steps from first enquiry to welcoming your child on campus.",
    steps: [
      {
        number: "01",
        title: "Enquire",
        description:
          "Share a few details and the grade you're applying for. Our admissions team responds within a day - call, WhatsApp or fill the form online.",
      },
      {
        number: "02",
        title: "Campus Visit",
        description:
          "Tour Nelamangala, meet our team and see boarding life first-hand - in person or virtually. Taste the food, walk the dorms, ask every question.",
      },
      {
        number: "03",
        title: "Entrance Exam",
        description:
          "A simple age-appropriate assessment - online or offline - to understand your child's academic starting point.",
      },
      {
        number: "04",
        title: "Interaction",
        description:
          "A warm conversation with your child to understand their interests, strengths and goals. Can be done online or on campus - flexible to suit your schedule.",
      },
      {
        number: "05",
        title: "Enrolment",
        description:
          "Complete the formalities and secure your child's place for the upcoming academic year. Seats are limited - earlier is better.",
        alt: true,
      },
    ],
    actions: [
      { label: "Start your journey", href: "/#enquiry", variant: "gold" },
      { label: "WhatsApp", href: siteConfig.contact.whatsapp, variant: "outline-white", external: true },
      {
        label: "Email admissions",
        href: `mailto:${siteConfig.contact.email}`,
        variant: "outline-white",
        external: true,
      },
    ],
    onlineNote: {
      title: "Can't visit? Complete the entire process online.",
    },
  },
  criteria: {
    label: "Admission Criteria",
    title: "What we look for",
    description: "Three things matter most when we consider a student for TACS.",
    cards: [
      {
        number: "01 · Academic Foundation",
        icon: "📝",
        title: "Entrance Exam",
        description:
          "A consistent academic record and a good performance in our entrance assessment. The exam is age-appropriate and can be taken online or on campus - it measures starting point, not perfection.",
      },
      {
        number: "02 · Residential Fit",
        icon: "🤝",
        title: "Interview & Fit",
        description:
          "Students and parents who appreciate the value of residential education - its structure, community and independence. We assess suitability through a warm, conversational interaction.",
      },
      {
        number: "03 · Career Mindset",
        icon: "🧭",
        title: "Career Inclination",
        description:
          "We prefer families who recognise the importance of early career exploration. Students who are open to discovering their aptitude and building a clear career path from an early age.",
      },
    ],
  },
  scholarship: {
    title: "Merit-Based Scholarship",
    description:
      "Scholarships may be awarded to meritorious students based on their performance in the entrance examination. Eligibility and scholarship benefits will be decided by the school management and are subject to applicable terms and conditions.",
    cta: { label: "Enquire now", href: "/#enquiry" },
  },
  clarity: {
    image: createImage(
      "/images/home/campus/bengaluru.png",
      remote.bengaluru,
      "TACS Bengaluru",
      false,
    ),
    heading: "Visit campus. Ask everything.",
    description: [
      "See where your child will learn, live and grow. Explore the campus, experience everyday student life,",
      "and get all your questions answered in person when you visit us any day between 9 AM and 6 PM.",
    ],
    visitCta: {
      label: "Book a campus visit",
      href: "/#enquiry",
    },
    whatsapp: { label: "WhatsApp", href: siteConfig.contact.whatsapp },
  },
  faq: {
    label: "Frequently Asked Questions",
    title: "Questions parents ask most",
    items: [
      {
        question: "Can I complete the entire admission process online?",
        answer:
          "Absolutely! The entire admission process at The Academic City School, Bengaluru, can be completed online, including the application, entrance exam, career counselling and Principal interaction. A campus visit is not required, but we would love to welcome you to experience our residential school in Bengaluru in person.",
        knowMore: { href: "#process" },
      },
      {
        question: "Is TACS a fully residential school? Are there day boarders?",
        answer:
          "Great question! TACS is a fully residential CBSE boarding school in Nelamangala, Bengaluru, where every student lives on campus for the entire term. We don't offer day boarding or week boarding, only full-time residential learning. We'd love to have you visit our campus!",
        knowMore: { href: "/boarding" },
      },
      {
        question: "When can we visit the campus?",
        answer:
          "You're welcome to visit us any working day between 9 AM and 6 PM, no appointment needed. That said, calling ahead helps us plan a more personalised tour just for you. Our campus is conveniently located about 25 km from Bengaluru city centre and the international airport.",
        knowMore: { href: "#clarity" },
      },
      {
        question: "What is the procedure for meeting the Principal?",
        answer:
          "We're always happy to facilitate a meeting with our Principal. To help us schedule this properly, we'd request parents to arrange a prior appointment through your child's class teacher, who will coordinate a convenient time for you both.",
      },
      {
        question: "Can my child switch boards - say from ICSE to CBSE?",
        answer:
          "Absolutely, switching from ICSE to CBSE is quite common, and we're happy to support your child through it. Students can make the switch at any grade level except Grade 10 and Grade 12, since these are board exam years. Do reach out to our admissions team, and we'll guide you based on your child's current grade.",
        knowMore: { href: "/academics" },
      },
      {
        question: "What is the fee structure at The Academic City School?",
        answer:
          "Happy to help with that! Annual fees at TACS, our CBSE residential boarding school in Nelamangala, Bengaluru, typically range between ₹5 lakh and ₹6.5 lakh, depending on the grade. This covers tuition, boarding, meals and campus facilities. For an exact quote based on your child's grade, do reach out to our admissions team.",
        knowMore: { href: "/#enquiry" },
      },
      {
        question: "Does the school provide pickup from the airport or railway station?",
        answer:
          "Absolutely! With a little advance notice, we're happy to arrange pickup and drop for your child from both Bengaluru airport and railway stations at the start and end of each term.",
        knowMore: { href: "/#contact" },
      },
      {
        question: "What is the school's policy on gadgets and internet?",
        answer:
          "To keep our students focused and safe, personal gadgets aren't permitted on campus. They do get access to supervised internet at specified times for schoolwork and staying in touch. Do note that any packages or couriers sent to school are checked before being handed over to your child.",
      },
      {
        question: "How does the school handle medical emergencies?",
        answer:
          "Your child's health and safety are always a top priority for us. TACS has full-time nursing staff on campus, along with tie-ups with specialist hospitals nearby for any advanced care needed. Medicines are given only with a valid prescription and your consent, and we make it a point to contact parents immediately in any medical situation.",
        knowMore: { href: "/boarding#care" },
      },
      {
        question: "Is the food vegetarian? How many meals per day?",
        answer:
          "Yes, TACS is a fully vegetarian campus, and no non-vegetarian food, including eggs, is served. We also offer Jain options at every meal for those who prefer them. Your child will enjoy 6 wholesome meals a day, early morning, breakfast, mid-morning snack, lunch, evening snack and dinner, all cooked fresh in our own kitchen.",
        knowMore: { href: "/boarding#care" },
      },
      {
        question: "When does the admissions process begin for the next academic year?",
        answer:
          "Great question! Admissions for the next academic year typically open in October, and seats at our Bengaluru campus fill up fast. We'd strongly encourage you to apply early by 15th December to make the most of our early bird deadline before spots run out.",
        knowMore: { href: "#process" },
      },
    ],
  },
  ctaBand: {
    label: "Ready to apply?",
    title: "Take the first step today",
    description: "Our admissions team responds within a day. Call, WhatsApp or email - we're here to help.",
    phone: {
      label: siteConfig.contact.phoneDisplay,
      href: `tel:${siteConfig.contact.phone}`,
    },
    whatsapp: { label: "WhatsApp", href: siteConfig.contact.whatsapp },
    email: {
      label: "email",
      href: getGmailComposeUrl(siteConfig.contact.email),
    },
  },
} satisfies AdmissionsPageContent;
