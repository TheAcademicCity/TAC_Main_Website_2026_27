import { createImage } from "@/lib/images";
import type {
  CurriculumBoard,
  IntroHighlight,
  ParentTestimonial,
} from "@/types/academics";

const remote = {
  hero: "https://theacademiccity.com/images/Home/nav/academics.png",
  leaders: "https://theacademiccity.com/images/homepage/overview.png",
  progression: "https://api.theacademiccity.com/uploads/medium_Page_22_d8e12804c9.png",
  careerBridge: "https://theacademiccity.com/images/Home/nav/career1.png",
  cbseBadge: "https://theacademiccity.com/images/homepage/overview.png",
  caieBadge: "https://theacademiccity.com/images/homepage/overview.png",
} as const;

const cbseIntro = {
  intro: "Subject Selections and Options",
  description:
    "Aligning subjects with future aspirations, our curriculum from grades 4–12 is designed to pave the way for academic and career excellence. Focused on delivering a robust foundation in core subjects such as Science, Mathematics, Language, and Arts to foster a well-rounded education.",
} as const;

const mandatoryCore = {
  title: "Mandatory subjects",
  items: ["English as first language", "Mathematics", "Science", "Social studies"],
} as const;

const secondLanguageBasic = {
  title: "2nd language options",
  items: ["Kannada", "Hindi"],
} as const;

const thirdLanguage = {
  title: "3rd language options",
  items: ["French", "Sanskrit"],
} as const;

const batchFootnote =
  "* Subjects will be offered only if there is a minimum batch size of 15 students for the academic year.";

export const academicsPageContent = {
  hero: {
    label: "Academics",
    title: "Nurturing Academic Brilliance at The Academic City School",
    image: createImage("/images/academics/hero.png", remote.hero, "Students learning at TACS"),
  },
  highlights: [
    {
      title: "Fostering Academic Growth",
      description:
        "We are committed to fostering an environment where students excel in their academics, setting the stage for future success.",
    },
    {
      title: "Career-Oriented Learning",
      description:
        "Our rigorous academic programmes prepare students for future career opportunities through structured progression and mentoring.",
    },
    {
      title: "Parental Assurance",
      description:
        "Your child's success is our priority, and we build the academic framework needed for their enduring achievements.",
    },
  ] satisfies IntroHighlight[],
  affiliations: ["CBSE — New Delhi", "CAIE — UK"],
  leaders: {
    label: "Academic Leadership",
    title: "Message from the Academic Leaders",
    description:
      "Our academic team brings together experienced educators committed to concept clarity, personalised mentoring and a boarding-school rhythm that supports deep learning.",
    image: createImage(
      "/images/academics/leaders.png",
      remote.leaders,
      "Academic leaders at The Academic City School",
    ),
  },
  offerings: {
    label: "Curriculum",
    title: "Academic Offering and Scholarships",
    description: "Explore the curriculum, subject options and scholarship details.",
    scholarshipCta: { label: "Apply for Scholarship", href: "/#enquiry" },
    boards: [
      {
        id: "cbse",
        label: "CBSE",
        grades: [
          {
            id: "grade-4",
            label: "Grade 4",
            ...cbseIntro,
            groups: [mandatoryCore, secondLanguageBasic],
          },
          {
            id: "grade-5",
            label: "Grade 5",
            ...cbseIntro,
            groups: [mandatoryCore, secondLanguageBasic],
          },
          {
            id: "grade-6",
            label: "Grade 6",
            ...cbseIntro,
            groups: [mandatoryCore, secondLanguageBasic],
          },
          {
            id: "grade-7",
            label: "Grade 7",
            ...cbseIntro,
            groups: [mandatoryCore, secondLanguageBasic],
          },
          {
            id: "grade-8",
            label: "Grade 8",
            ...cbseIntro,
            groups: [mandatoryCore, secondLanguageBasic, thirdLanguage],
          },
          {
            id: "grade-9",
            label: "Grade 9",
            ...cbseIntro,
            groups: [
              {
                title: "Mandatory subjects",
                items: [
                  "English language & Literature",
                  "Mathematics",
                  "Science",
                  "Social studies",
                ],
              },
              {
                title: "Optional subjects",
                items: ["Information & Communication Technology (ICT)", "Physical Education"],
              },
              {
                title: "2nd language options",
                items: ["Kannada", "Hindi", "French"],
              },
            ],
          },
          {
            id: "grade-10",
            label: "Grade 10",
            ...cbseIntro,
            groups: [
              {
                title: "Mandatory subjects",
                items: [
                  "English language & Literature",
                  "Mathematics",
                  "Science",
                  "Social studies",
                ],
              },
              {
                title: "Optional subjects",
                items: ["Information & Communication Technology (ICT)", "Physical Education"],
              },
              {
                title: "2nd language options",
                items: ["Kannada", "Hindi", "French"],
              },
            ],
          },
          {
            id: "grade-11-science",
            label: "Grade 11 Science",
            ...cbseIntro,
            groups: [
              {
                title: "Mandatory subjects",
                items: ["English", "Physics", "Chemistry", "Mathematics / Biology"],
              },
              {
                title: "Optional subjects",
                items: [
                  "Mathematics / Biology",
                  "Physical Education",
                  "Psychology",
                  "Computer Science",
                ],
              },
            ],
          },
          {
            id: "grade-11-commerce",
            label: "Grade 11 Commerce",
            ...cbseIntro,
            groups: [
              {
                title: "Mandatory subjects",
                items: ["English", "Accountancy", "Business Studies", "Economics"],
              },
              {
                title: "Optional subjects",
                items: [
                  "Physical Education",
                  "Psychology",
                  "Computer Science",
                  "Mathematics",
                ],
              },
            ],
          },
          {
            id: "grade-11-humanities",
            label: "Grade 11 Humanities",
            ...cbseIntro,
            groups: [
              {
                title: "Mandatory subjects",
                items: ["English", "Political Science", "History"],
              },
              {
                title: "Optional subjects",
                items: [
                  "Physical Education",
                  "Psychology",
                  "Computer Science",
                  "Mathematics",
                ],
              },
            ],
          },
          {
            id: "grade-12-science",
            label: "Grade 12 Science",
            ...cbseIntro,
            groups: [
              {
                title: "Mandatory subjects",
                items: [
                  "Physics",
                  "Chemistry",
                  "Mathematics (IIT, JEE, NATA) / Biology (NEET)",
                  "English language",
                ],
              },
              {
                title: "Optional subjects",
                items: [
                  "Applied mathematics",
                  "Physical Education",
                  "Psychology",
                  "Computer science",
                  "Art & Design*",
                  "Entrepreneurship*",
                ],
              },
            ],
            footnote: batchFootnote,
          },
          {
            id: "grade-12-commerce",
            label: "Grade 12 Commerce",
            ...cbseIntro,
            groups: [
              {
                title: "Mandatory subjects",
                items: ["Accountancy", "Economics", "Business studies", "English language"],
              },
              {
                title: "Optional subjects",
                items: [
                  "Applied mathematics",
                  "Physical Education",
                  "Psychology",
                  "Computer science",
                  "Legal Studies",
                  "Art & Design*",
                  "Entrepreneurship*",
                ],
              },
            ],
            footnote: batchFootnote,
          },
        ],
      },
      {
        id: "cambridge",
        label: "Cambridge",
        grades: [
          {
            id: "lower-secondary",
            label: "Lower Secondary (Grades 6–8)",
            intro: "Subject Selections",
            description:
              "Aligning subjects with future aspirations, our Cambridge lower secondary pathway builds global competencies alongside a robust foundation in core disciplines.",
            groups: [
              {
                title: "Mandatory subjects",
                items: [
                  "English",
                  "Mathematics",
                  "Global Perspective",
                  "ICT",
                  "Science",
                  "Art and Design",
                ],
              },
              {
                title: "Optional subjects",
                items: [
                  "Digital Literacy",
                  "Computing",
                  "Well-being",
                  "Physical Education",
                  "French",
                ],
              },
            ],
          },
          {
            id: "igcse",
            label: "IGCSE (Grades 9 & 10)",
            intro: "Subject Selections",
            description:
              "With offerings from Cambridge, we have carefully selected mandatory and optional subjects that prepare students for IGCSE and align with future career goals.",
            groups: [
              {
                title: "Mandatory subjects",
                items: ["English II", "Mathematics", "ICT"],
              },
              {
                title: "Career oriented subject selection",
                items: [
                  "Architecture — Art & Design, Physics, Chemistry",
                  "Designing — Art & Design, Global Perspectives",
                  "Commerce & Management — Accounting, Business Studies, Economics",
                  "Barrister — Global Perspectives, Business Studies",
                  "Doctor / Medical Science — Physics, Chemistry, Biology",
                  "Engineering — Physics, Chemistry",
                  "Humanities — Physics, Chemistry",
                ],
              },
              {
                title: "One optional subject to choose",
                items: [
                  "Hindi",
                  "French",
                  "Physics",
                  "Chemistry",
                  "Biology",
                  "Accounting",
                  "Business Studies",
                  "Economics",
                  "History",
                  "Geography",
                  "Global Perspective",
                  "Art & Design",
                  "Travel & Tourism",
                ],
              },
            ],
          },
        ],
      },
    ] satisfies CurriculumBoard[],
  },
  careerCallout: {
    eyebrow: "Why TACS",
    title: "India's first career-oriented boarding school",
    subtitle: "The Academic City School",
    description:
      "Read why every parent should consider a boarding school where academic rigour and early career discovery grow together.",
    cta: { label: "Explore Career Guidance", href: "/career-guidance" },
  },
  growth: {
    label: "Academic Environment",
    title: "Why Academic Growth at The Academic City School is Promising",
    description: "At The Academic City Boarding School, your child's academic potential can flourish because:",
    points: [
      "They benefit from scheduled special classes during weekends",
      "They engage in morning and evening study sessions",
      "They receive individual attention from dedicated teachers",
      "They thrive in a holistic academic environment",
    ],
  },
  progression: {
    label: "Student Progression Plan",
    title: "Guiding Your Child to Academic Excellence",
    description:
      "It all starts with diagnostic tests to identify their current academic standing. Based on this, students are categorised into performance levels, and tailored support is provided to help them progress.",
    detail:
      "The progression is visually represented, showing how your child can advance from basic to excellent performance through our focused learning strategies.",
    image: createImage(
      "/images/academics/progression.png",
      remote.progression,
      "Student Progression Plan at TACS",
    ),
    cta: { label: "Explore Real Time Case Studies", href: "/#enquiry" },
  },
  testimonials: {
    label: "Parent Voices",
    title: "How Academic Growth Materialises through the Student Progression Plan",
    items: [
      {
        label: "Parent of a Grade 5 student",
        quote:
          "Enrolling my child at The Academic City School has been transformative. The school's focus on intellectual growth, academic excellence, individualised support, and innovative teaching has boosted my child's confidence. The thoughtfully designed, well-equipped campus and diverse extracurricular offer a balanced, enriching education.",
      },
      {
        label: "Parent of a Grade 9 student",
        quote:
          "We are extremely pleased with The Academic City School's nurturing environment for our son, Aaryan. The school fosters creativity, curiosity, and a love for learning, while nurturing each child's potential. Aaryan has developed leadership, teamwork, and receives exceptional care and attention.",
      },
      {
        label: "Parent of a Grade 10 student",
        quote:
          "My child found math and economics challenging, but with the Student Progression Plan, he improved from average to above average in just six months.",
      },
      {
        label: "Parent of a Grade 11 student",
        quote:
          "With two daughters in Class 11 & 12 PCB at TACS, I'm thrilled with their preparation for NEET. As doctors' children, their ambition to follow in our footsteps is nurtured here. TACS offers top-notch education and security, making it an ideal choice for their success.",
      },
    ] satisfies ParentTestimonial[],
  },
  careerBridge: {
    label: "Beyond the Classroom",
    title: "Connecting Academic Excellence to Career Opportunities",
    description:
      "At The Academic City School, your child's academic potential can flourish because of our rigorous preparation, helping them discover their favourite subjects and link them to diverse career paths.",
    image: createImage(
      "/images/academics/career-bridge.png",
      remote.careerBridge,
      "Connecting academics to career paths at TACS",
    ),
    cta: { label: "Enquire Now", href: "/#enquiry" },
  },
} as const;
