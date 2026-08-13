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
    image: createImage("/images/admissions/overview-1.png", remote.career, "Students at TACS"),
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
    ),
    heading: "Visit campus. Ask everything.",
    description: [
      "See where your child will learn, live and grow. Explore the campus, experience everyday student life,",
      "and get all your questions answered in person when you visit us any day between 9 AM and 6 PM.",
    ],
    visitCta: {
      label: "Schedule a visit",
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
          "Yes - application, entrance exam, career counselling and the interaction with the principal can all be completed online. You never need to visit campus to complete admissions, though we encourage you to.",
      },
      {
        question: "Is TACS a fully residential school? Are there day boarders?",
        answer:
          "TACS is exclusively residential. We do not offer day boarding or week boarding. All students live on campus throughout the term.",
      },
      {
        question: "When can we visit the campus?",
        answer:
          "You can visit on any working day between 9 AM and 3:30 PM. No appointment is needed, but calling ahead helps us arrange a more personalised tour. The campus is about 25 km from Bengaluru city centre and the international airport.",
      },
      {
        question: "What is the procedure for meeting the Principal?",
        answer:
          "Parents must request a prior appointment through the class teacher before meeting the Principal.",
      },
      {
        question: "Can my child switch boards - say from ICSE to CBSE?",
        answer:
          "Yes, students can switch boards at any grade except Grade 10 and Grade 12. Contact our admissions team for specific guidance based on your child's current grade.",
      },
      {
        question: "My child has special needs. Can TACS support them?",
        answer:
          "TACS is equipped to provide support for students with certain special needs. Please contact us directly to discuss your child's specific requirements so we can assess how best to support them.",
      },
      {
        question: "Does the school provide pickup from the airport or railway station?",
        answer:
          "Yes, with prior notice the school arranges pickup and drop from Bengaluru airport and railway stations at the start and end of each term.",
      },
      {
        question: "What is the school's policy on gadgets and internet?",
        answer:
          "Personal gadgets are not allowed on campus. Students may use the school's supervised internet at specified times. Packages and couriers may be sent to school and are checked before handover.",
      },
      {
        question: "How does the school handle medical emergencies?",
        answer:
          "TACS has a full-time nursing staff on campus and tie-ups with specialist hospitals nearby. Medicines are administered only with a valid prescription and parental consent. Parents are contacted immediately in any medical situation.",
      },
      {
        question: "Is the food vegetarian? How many meals per day?",
        answer:
          "TACS is a vegetarian campus - no non-vegetarian food including eggs is served. Jain options are available at every meal. Students receive 6 meals per day: early morning, breakfast, mid-morning snack, lunch, evening snack and dinner - all cooked fresh in the school's own kitchen.",
      },
      {
        question: "When does the admissions process begin for the next academic year?",
        answer:
          "Admissions for the next academic year typically open in October. Applications for the Bengaluru campus close on 15th February, with an early bird deadline of 15th December.",
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
