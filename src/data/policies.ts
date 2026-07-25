import type { BoardingPolicyContent, BoardingPolicySlug } from "@/types/policies";

export const boardingPolicies: Record<BoardingPolicySlug, BoardingPolicyContent> = {
  "anti-bullying-ragging": {
    slug: "anti-bullying-ragging",
    title: "Anti-Bullying & Anti-Ragging Policy",
    metaDescription:
      "The Academic City School anti-bullying and anti-ragging policy - zero tolerance, reporting procedures, disciplinary levels and committee responsibilities.",
    subtitle:
      "Applicable to all students, Grades V-XII | CBSE-affiliated residential school, Nelamangala, Bengaluru",
    commitment:
      "Every student at TACS has a right to learn, live and grow with dignity, in an environment free of fear, humiliation or intimidation. The School follows a Zero Tolerance approach to bullying, cyberbullying and ragging, in line with CBSE's 2015 Guidelines for Prevention of Bullying & Ragging in Schools and the NCPCR Manual on Safety & Security of Children in Schools.",
    sections: [
      {
        type: "text",
        heading: "Scope",
        paragraphs: [
          "This policy covers physical, verbal, social and cyberbullying, and any act of ragging, among students - on campus, in the residence, on school transport, at school events, and online where it involves TACS students, regardless of when the act occurs.",
        ],
      },
      {
        type: "formBoxes",
        heading: "What Counts as Bullying or Ragging",
        boxes: [
          {
            title: "Physical",
            description:
              'Hitting, shoving, initiation "tasks," forced errands or humiliation of juniors by seniors',
          },
          {
            title: "Verbal & Social",
            description: "Name-calling, threats, mockery, exclusion, spreading rumours",
          },
          {
            title: "Cyberbullying",
            description: "Abusive messages, morphed images, humiliation on social media/group chats",
          },
        ],
      },
      {
        type: "bullets",
        heading: "Prevention & Awareness",
        bullets: [
          "A designated Anti-Bullying Committee - Principal/Vice-Principal, senior teacher, School Counsellor, Warden, and parent representative - as mandated by CBSE",
          "Age-appropriate sessions on empathy, respect and digital citizenship, integrated into the curriculum and residential life",
          'Clear "no bystander" culture - students are encouraged and supported to report, not ignore, what they witness',
          "Close monitoring of senior-junior interactions in hostels during orientation weeks, when ragging risk is highest",
        ],
      },
      {
        type: "bullets",
        heading: "Reporting Procedure",
        bullets: [
          "Any student, parent or staff member may report to a Class Teacher, Residential Warden, School Counsellor or any Anti-Bullying Committee member",
          "A confidential drop-box/helpline is available for students who prefer not to report in person; anonymity is protected",
          "Every complaint is acknowledged and investigated promptly by the Committee; retaliation against a complainant is itself treated as a serious offence",
        ],
      },
      {
        type: "levels",
        heading: "Disciplinary Approach",
        intro:
          "Responses are graded, recorded, and reviewed by the Anti-Bullying Committee; the Principal holds final authority.",
        levels: [
          {
            title: "Level 1 - First/minor instance",
            description: "Warning, counselling for both parties, parents informed.",
            severity: "default",
          },
          {
            title: "Level 2 - Repeat/serious instance",
            description:
              "Committee review; parent meeting; loss of privileges/leadership roles; close monitoring.",
            severity: "moderate",
          },
          {
            title: "Level 3 - Severe/physical/ragging",
            description:
              "Suspension pending inquiry; may lead to rustication or expulsion; reported under POCSO/Juvenile Justice Act where applicable.",
            severity: "severe",
          },
        ],
      },
      {
        type: "table",
        heading: "Roles & Responsibilities",
        rows: [
          {
            role: "Principal",
            responsibility: "Final disciplinary authority; ensures CBSE and statutory compliance",
          },
          {
            role: "Anti-Bullying Committee",
            responsibility: "Receives, investigates and resolves complaints; recommends action",
          },
          {
            role: "Counselling Team",
            responsibility:
              "Support for both the affected student and the student involved in the incident; awareness sessions",
          },
          {
            role: "Residential Wardens",
            responsibility:
              "Vigilant senior-junior supervision in hostels; first point of report for boarders",
          },
          {
            role: "Class Teachers",
            responsibility: "Day-to-day observation of behavioural changes; prompt, sensitive escalation",
          },
          {
            role: "Parents/Guardians",
            responsibility:
              "Reinforce respect and empathy at home; report concerns promptly; cooperate with the Committee",
          },
          {
            role: "Students",
            responsibility: "Treat peers with respect; do not stay a silent bystander; use reporting channels",
          },
        ],
      },
    ],
    helpline: {
      label: "Confidential Reporting",
      value: "Anti-Bullying Committee",
      note: "Every report is acknowledged, investigated and kept confidential",
    },
    footer:
      "This policy is reviewed annually by School Leadership and aligned with CBSE's Guidelines for Prevention of Bullying & Ragging in Schools (2015), the NCPCR Manual on Safety & Security of Children in Schools, the POCSO Act, 2012, and the Juvenile Justice (Care and Protection of Children) Act, 2015. For the complete policy document, please contact the school administration.",
  },
  "anti-narcotics": {
    slug: "anti-narcotics",
    title: "Anti-Narcotics & Substance Abuse Policy",
    metaDescription:
      "The Academic City School anti-narcotics and substance abuse policy - zero tolerance, prevention, reporting and disciplinary approach.",
    subtitle:
      "Applicable to all students, Grades V-XII | CBSE-affiliated residential school, Nelamangala, Bengaluru",
    commitment:
      "TACS maintains a strict Zero Tolerance policy toward tobacco, alcohol, narcotic drugs, psychotropic substances and related paraphernalia on campus and in residence - while ensuring every student is treated with care, confidentiality and access to counselling, in line with CBSE and Narcotics Control Bureau (NCB) guidelines.",
    sections: [
      {
        type: "text",
        heading: "Scope",
        paragraphs: [
          "This policy applies to all students at all times on the academic and residential campus, on school transport, and at any school-organised event, trip or activity, regardless of location.",
        ],
      },
      {
        type: "bullets",
        heading: "Prevention & Awareness",
        bullets: [
          "Age-appropriate awareness sessions integrated into the school curriculum and residential life programme",
          'Participation in CBSE-NCB initiatives, including the annual "Say Yes to Life, No to Drugs" pledge',
          "Annual parent orientation on warning signs and reporting channels",
        ],
      },
      {
        type: "bullets",
        heading: "Reporting Procedure",
        bullets: [
          "Any student, parent or staff member may report a concern to a Class Teacher, Residential Warden or School Counsellor",
          "A confidential reporting channel is available for students who prefer not to report in person",
          "In a medical emergency, the student's safety is addressed immediately, before any disciplinary process begins",
        ],
      },
      {
        type: "levels",
        heading: "Disciplinary Approach",
        intro:
          "Responses are graded and proportionate, and every case is recorded and reviewed by the Principal / Discipline Committee.",
        levels: [
          {
            title: "Level 1 - First instance",
            description: "Parent notified; mandatory counselling plan; no automatic suspension.",
            severity: "default",
          },
          {
            title: "Level 2 - Repeat instance",
            description:
              "Committee review; parent meeting; structured monitoring plan; loss of privileges.",
            severity: "moderate",
          },
          {
            title: "Level 3 - Possession / supply",
            description:
              "Principal referral; suspension pending investigation; may lead to dismissal, per applicable law.",
            severity: "severe",
          },
        ],
      },
      {
        type: "table",
        heading: "Roles & Responsibilities",
        rows: [
          {
            role: "Principal",
            responsibility: "Final disciplinary authority; ensures compliance with CBSE and applicable law",
          },
          {
            role: "Counselling Team",
            responsibility: "Awareness programmes, confidential counselling, rehabilitation support",
          },
          {
            role: "Residential Wardens",
            responsibility:
              "Campus safeguards (visitor, parcel & room checks); first point of report in hostels",
          },
          {
            role: "Class Teachers",
            responsibility: "Day-to-day observation; prompt, sensitive escalation of concerns",
          },
          {
            role: "Parents/Guardians",
            responsibility: "Reinforce the policy at home; cooperate with school support plans",
          },
          {
            role: "Students",
            responsibility: "Comply with the policy; report concerns through available channels",
          },
        ],
      },
    ],
    helpline: {
      label: "National Narcotics Helpline (24/7)",
      value: "MANAS 1933",
      note: "For trafficking information, rehabilitation and counselling referrals",
    },
    footer:
      "This policy is reviewed annually by School Leadership and aligned with CBSE circulars, NCPCR guidelines and the NDPS Act, 1985. For the complete policy document, please contact the school administration.",
  },
};

export const boardingPolicySlugs = Object.keys(boardingPolicies) as BoardingPolicySlug[];

export function getBoardingPolicy(slug: string): BoardingPolicyContent | undefined {
  return boardingPolicies[slug as BoardingPolicySlug];
}
