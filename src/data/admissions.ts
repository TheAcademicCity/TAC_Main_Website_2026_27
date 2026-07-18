import { siteConfig } from "@/config/site";
import { createImage } from "@/lib/images";
import type { AdmissionsPageContent } from "@/types/admissions";

const remote = {
  career: "https://theacademiccity.com/images/Home/nav/career1.png",
  academics: "https://theacademiccity.com/images/Home/nav/academics.png",
  campus: "https://theacademiccity.com/images/homepage/campus/1.png",
} as const;

export const admissionsPageContent = {
  hero: {
    title: "Admissions",
    titleHighlight: "",
    description:
      "Enroll with us to manifest the best version of yourself.",
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
    { id: "eligibility", label: "Eligibility" },
    { id: "clarity", label: "Campus Visit" },
    { id: "faq", label: "FAQs" },
  ],
  overview: {
    label: "Admissions",
    title: "Enrol with us — Manifest the best version of your child",
    paragraphs: [
      "TACS offers a career-oriented residential education from Grades 5 to 12 — blending academic rigour, Indic values and real-world skills in a safe, structured boarding environment.",
      "Admissions are open now. The entire process can be completed online — application, entrance exam, interaction — or you're welcome to visit us in Nelamangala any day from 9 AM to 3:30 PM.",
    ],
    photos: [
      createImage("/images/admissions/overview-1.png", remote.career, "Students at TACS"),
      createImage("/images/admissions/overview-2.png", remote.academics, "Campus visit"),
      createImage("/images/admissions/overview-3.png", remote.campus, "TACS campus"),
    ],
    stats: [
      { value: "Gr. 5–12", label: "All grades open" },
      { value: "Online", label: "Full process available" },
      { value: "1 day", label: "Admissions team responds within" },
    ],
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
          "Share a few details and the grade you're applying for. Our admissions team responds within a day — call, WhatsApp or fill the form online.",
      },
      {
        number: "02",
        title: "Campus Visit",
        description:
          "Tour Nelamangala, meet our team and see boarding life first-hand — in person or virtually. Taste the food, walk the dorms, ask every question.",
      },
      {
        number: "03",
        title: "Entrance Exam",
        description:
          "A simple age-appropriate assessment — online or offline — to understand your child's academic starting point. Grade 11 applicants also get a complimentary psychometric assessment.",
      },
      {
        number: "04",
        title: "Interaction",
        description:
          "A warm conversation with your child to understand their interests, strengths and goals. Can be done online or on campus — flexible to suit your schedule.",
      },
      {
        number: "05",
        title: "Enrolment",
        description:
          "Complete the formalities and secure your child's place for the upcoming academic year. Seats are limited — earlier is better.",
        alt: true,
      },
    ],
    actions: [
      { label: "Start your enquiry", href: "/#enquiry", variant: "gold" },
      { label: "WhatsApp us", href: siteConfig.contact.whatsapp, variant: "outline-white", external: true },
      {
        label: "Email admissions",
        href: `mailto:${siteConfig.contact.email}`,
        variant: "outline-white",
        external: true,
      },
    ],
  },
  criteria: {
    label: "Admission Criteria",
    title: "What we look for",
    description: "Three things matter most when we consider a student for TACS.",
    cards: [
      {
        number: "01 · Academic Foundation",
        icon: "book",
        title: "Entrance Exam",
        description:
          "A consistent academic record and a good performance in our entrance assessment. The exam is age-appropriate and can be taken online or on campus — it measures starting point, not perfection.",
      },
      {
        number: "02 · Residential Fit",
        icon: "users",
        title: "Interview & Fit",
        description:
          "Students and parents who appreciate the value of residential education — its structure, community and independence. We assess suitability through a warm, conversational interaction.",
      },
      {
        number: "03 · Career Mindset",
        icon: "compass",
        title: "Career Inclination",
        description:
          "We prefer families who recognise the importance of early career exploration. Students who are open to discovering their aptitude and building a clear career path from an early age.",
      },
    ],
  },
  onlineBand: {
    title: "Can't visit? Complete the entire process online.",
    description:
      "Application, entrance exam, career counselling, interaction with principal — everything can be done from home. Call us to get started.",
    cta: {
      label: siteConfig.contact.phoneDisplay,
      href: `tel:${siteConfig.contact.phone}`,
    },
  },
  eligibility: {
    label: "Eligibility",
    title: "Who can apply",
    description:
      "TACS admits students to Grades 5 through 12. Each grade has a minimum age and academic requirement. Students switching boards (e.g. ICSE to CBSE) are welcome at any grade except 10th and 12th.",
    checklist: [
      "All grades admit — online or offline application",
      "Board switch accepted at most grades",
      "Special needs assessed case by case",
      "Exclusively residential — no day boarding",
      "Airport / railway pickup arranged with prior notice",
    ],
    gradeNote:
      "Grade 11 applicants receive a complimentary psychometric assessment worth ₹5,000+ on completing their application — to identify the right stream and career path before making the decision.",
    grades: [
      { grade: "Grade 5", status: "Open", examMode: "Online / Offline" },
      { grade: "Grade 6", status: "Open", examMode: "Online / Offline" },
      { grade: "Grade 7", status: "Open", examMode: "Online / Offline" },
      { grade: "Grade 8", status: "Open", examMode: "Online / Offline" },
      { grade: "Grade 9", status: "Open", examMode: "Online / Offline" },
      { grade: "Grade 10", status: "Open", examMode: "Online / Offline" },
      { grade: "Grade 11", status: "Open", examMode: "Online / Offline" },
      { grade: "Grade 12", status: "Open", examMode: "Online / Offline" },
    ],
    keyDates: [
      { label: "Applications close", value: "15th February" },
      { label: "Early bird deadline", value: "15th December", highlight: true },
      { label: "Commencement", value: "May – June" },
    ],
  },
  scholarships: {
    label: "Scholarships",
    title: "Investing in the future of our students",
    description:
      "Merit-based scholarships on tuition fees are available for students who perform well in the entrance exam on the first attempt.",
    slabs: [
      { percent: "20%", range: "Score 95% and above" },
      { percent: "15%", range: "Score 91–95%" },
      { percent: "10%", range: "Score 85–90%" },
      { percent: "5%", range: "Score 80–85%" },
    ],
    slabNote:
      "Applicable on first-attempt entrance exam only. Valid on tuition fee for the duration of the student's enrolment, subject to conditions.",
    sibling: {
      title: "Sibling Fee Rebate",
      description:
        "A rebate of ₹25,000 on admission fee for families enrolling a second sibling at TACS. Both siblings must be enrolled for the rebate to apply.",
    },
    earlyBird: {
      title: "Early Bird Advantage",
      description:
        "Apply before 15th December to unlock early bird scholarship benefits and secure your child's place ahead of the rush.",
      deadline: "15th December",
    },
    contactNote: "Questions about scholarships?",
    phoneHref: `tel:${siteConfig.contact.phone}`,
    phoneDisplay: siteConfig.contact.phoneDisplay,
  },
  clarity: {
    label: "Seeking Clarity?",
    title: "Come see it for yourself",
    heading: "Visit campus. Ask everything.",
    description:
      "No brochure replaces standing in the dining hall, walking the dormitories and watching the afternoon schedule in motion. Visit any day between 9 AM and 3:30 PM.",
    items: [
      "Book a campus tour and experience the residential programme first-hand",
      "Meet our academic head for a deeper understanding of the curriculum",
      "Meet our career counsellor to map the right career path for your child",
      "Taste the food, see the dorms, watch the afternoon in action",
      "Campus open Mon–Sat, 9 AM to 3:30 PM. No appointment required.",
    ],
    visitCta: {
      label: "Book a visit",
      href: `tel:${siteConfig.contact.phone}`,
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
          "Yes — application, entrance exam, career counselling and the interaction with the principal can all be completed online. You never need to visit campus to complete admissions, though we encourage you to.",
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
        question: "Can my child switch boards — say from ICSE to CBSE?",
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
          "TACS is a vegetarian campus — no non-vegetarian food including eggs is served. Jain options are available at every meal. Students receive 6 meals per day: early morning, breakfast, mid-morning snack, lunch, evening snack and dinner — all cooked fresh in the school's own kitchen.",
      },
      {
        question: "When does the admissions process begin for the next academic year?",
        answer:
          "Admissions for the next academic year typically open in October. Applications for the Bengaluru campus close on 15th February, with an early bird deadline of 15th December for scholarship benefits.",
      },
    ],
  },
  ctaBand: {
    label: "Ready to apply?",
    title: "Take the first step today",
    description: "Our admissions team responds within a day. Call, WhatsApp or email — we're here to help.",
    phone: {
      label: siteConfig.contact.phoneDisplay,
      href: `tel:${siteConfig.contact.phone}`,
    },
    whatsapp: { label: "WhatsApp", href: siteConfig.contact.whatsapp },
    email: {
      label: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}`,
    },
  },
} satisfies AdmissionsPageContent;
