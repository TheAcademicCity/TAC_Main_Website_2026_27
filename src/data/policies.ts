import type { BoardingPolicyContent, BoardingPolicySlug } from "@/types/policies";

export const boardingPolicies: Record<BoardingPolicySlug, BoardingPolicyContent> = {
  "anti-bullying": {
    slug: "anti-bullying",
    title: "Anti-Bullying Policy",
    metaDescription:
      "The Academic City School anti-bullying policy - zero tolerance, reporting procedures, support and disciplinary action on campus.",
    intro:
      "The Academic City School is committed to providing a safe, respectful and inclusive boarding environment. Bullying in any form is unacceptable and will be addressed promptly and firmly.",
    sections: [
      {
        heading: "Scope",
        paragraphs: [
          "This policy applies to all students, staff and visitors on campus and during any school-organised activity, including online conduct that affects members of the school community.",
          "Bullying includes physical, verbal, social, emotional or cyber behaviour intended to hurt, intimidate or exclude another person.",
        ],
      },
      {
        heading: "Our Commitment",
        bullets: [
          "Zero tolerance for bullying, harassment or intimidation.",
          "Safe, confidential channels for students to report concerns.",
          "Counselling and pastoral support for affected students.",
          "Fair investigation and appropriate disciplinary action.",
          "Regular awareness sessions on respect, empathy and digital citizenship.",
        ],
      },
      {
        heading: "Reporting Procedure",
        paragraphs: [
          "Students may report bullying to their class teacher, house parent, counsellor or any trusted staff member. Parents may report concerns directly to the pastoral care team or school management.",
          "All reports are documented, investigated without delay and handled with sensitivity. Retaliation against anyone who reports in good faith is strictly prohibited.",
        ],
      },
      {
        heading: "Disciplinary Action",
        paragraphs: [
          "Confirmed incidents may result in counselling, written warnings, suspension or termination depending on severity and recurrence. The school reserves the right to involve parents and, where required, external authorities.",
        ],
      },
    ],
  },
  "anti-ragging": {
    slug: "anti-ragging",
    title: "Anti-Ragging Policy",
    metaDescription:
      "The Academic City School anti-ragging policy - UGC-compliant zero tolerance, undertakings, reporting and disciplinary measures.",
    intro:
      "Ragging is strictly prohibited at The Academic City School in accordance with UGC regulations and applicable law. We maintain a ragging-free campus through clear rules, signed undertakings and active monitoring.",
    sections: [
      {
        heading: "Definition",
        paragraphs: [
          "Ragging includes any conduct by a student, whether by words spoken or written, or by an act, that has the effect of teasing, treating or handling with rudeness a fresher or any other student.",
          "It also covers indiscipline activities that cause annoyance, hardship or psychological harm, or ask a student to do something they would not ordinarily do.",
        ],
      },
      {
        heading: "Zero Tolerance",
        bullets: [
          "Ragging in any form is prohibited on campus and in hostel premises.",
          "All students and parents must sign the anti-ragging undertaking at admission.",
          "Senior students are expected to mentor juniors - not intimidate them.",
          "House parents and wardens monitor common areas, dorms and transitions closely.",
          "Violations may be reported to the Anti-Ragging Committee immediately.",
        ],
      },
      {
        heading: "Reporting & Response",
        paragraphs: [
          "Students may report ragging anonymously through the class teacher, house parent, counsellor or the school helpline. Parents and staff must report any suspected incident without delay.",
          "Every complaint is investigated by the designated committee. Interim safety measures, including separation of involved students, may be taken during the inquiry.",
        ],
      },
      {
        heading: "Consequences",
        paragraphs: [
          "Confirmed ragging may lead to suspension, rustication or expulsion. The school may also inform parents and relevant authorities as required under law. No leniency is shown for ragging under any circumstances.",
        ],
      },
    ],
  },
  "anti-narcotics": {
    slug: "anti-narcotics",
    title: "Anti-Narcotics Policy",
    metaDescription:
      "The Academic City School anti-narcotics and substance policy - zero tolerance, campus checks, awareness and disciplinary action.",
    intro:
      "The Academic City School maintains a strict zero-tolerance policy on narcotics, alcohol, tobacco and any banned substances. A drug-free campus is essential to student safety, health and academic focus.",
    sections: [
      {
        heading: "Prohibited Substances",
        paragraphs: [
          "Students may not possess, use, distribute or be under the influence of narcotics, alcohol, tobacco, vaping products or any banned substance on campus or during school activities.",
          "Prescription medicines may be administered only through the school clinic with valid documentation and parental consent.",
        ],
      },
      {
        heading: "Prevention Measures",
        bullets: [
          "Periodic checks of rooms, bags and common areas by authorised staff.",
          "Awareness programmes on substance abuse and healthy choices.",
          "Counselling support for students at risk or in need of guidance.",
          "Clear rules communicated to students and parents at enrolment.",
          "Restricted entry procedures and luggage vetting at campus gates.",
        ],
      },
      {
        heading: "If a Violation Occurs",
        paragraphs: [
          "Any suspected violation must be reported immediately to house parents, the medical team or school management. The school will conduct a fair inquiry and take appropriate action without delay.",
          "Students found in violation may face suspension or termination. Parents will be informed immediately. Where required, external authorities may be notified in accordance with applicable law.",
        ],
      },
      {
        heading: "Support & Rehabilitation",
        paragraphs: [
          "Where appropriate and with parental consent, the school may recommend professional counselling or external support. Our priority remains the safety of the entire campus community.",
        ],
      },
    ],
  },
};

export const boardingPolicySlugs = Object.keys(boardingPolicies) as BoardingPolicySlug[];

export function getBoardingPolicy(slug: string): BoardingPolicyContent | undefined {
  return boardingPolicies[slug as BoardingPolicySlug];
}
