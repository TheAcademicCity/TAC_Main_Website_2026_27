export type SubjectGroup = {
  title: string;
  items: readonly string[];
};

export type GradeCurriculum = {
  id: string;
  label: string;
  intro: string;
  description: string;
  groups: readonly SubjectGroup[];
  footnote?: string;
};

export type CurriculumBoard = {
  id: string;
  label: string;
  grades: readonly GradeCurriculum[];
};

export type IntroHighlight = {
  title: string;
  description: string;
};

export type ParentTestimonial = {
  label: string;
  quote: string;
};
