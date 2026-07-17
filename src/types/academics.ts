import type { SiteImage } from "@/types/images";
import type { HeroStat, PageSubnavItem } from "@/types/page";

export type { HeroStat, PageSubnavItem };

export type CdfPillar = {
  number: string;
  title: string;
  icon: "book" | "users" | "chart";
  accent: "emerald" | "gold" | "violet";
  items: readonly string[];
};

export type CurriculumFeature = {
  title: string;
  description: string;
};

export type ApproachCard = {
  number: string;
  icon: "brain" | "users" | "lab" | "sun";
  title: string;
  description: string;
};

export type GradeJourneyStep = {
  grades: string;
  phase: string;
  title: string;
  description: string;
  chips: readonly string[];
  accent: "emerald" | "gold" | "violet";
};

export type AssessmentCommItem = {
  icon: "document" | "users" | "chart" | "compass";
  tone?: "default" | "gold" | "violet";
  title: string;
  description: string;
};

export type StreamCard = {
  icon: "wrench" | "stethoscope" | "scrollText" | "compass";
  title: string;
  items: readonly string[];
};

export type AcademicsPageContent = {
  hero: {
    title: string;
    titleHighlight: string;
    description: string;
    image: SiteImage;
    stats: readonly HeroStat[];
  };
  subnav: readonly PageSubnavItem[];
  overview: {
    label: string;
    title: string;
    description: string;
    pillars: readonly CdfPillar[];
  };
  curriculum: {
    image: SiteImage;
    imageTag: string;
    label: string;
    title: string;
    description: string;
    features: readonly CurriculumFeature[];
    cta: { label: string; href: string };
    approachTitle: string;
    approach: readonly ApproachCard[];
  };
  progressionBand: {
    title: string;
    description: string;
    cta: { label: string; href: string };
  };
  gradeJourney: {
    label: string;
    title: string;
    description: string;
    steps: readonly GradeJourneyStep[];
  };
  assessment: {
    label: string;
    title: string;
    description: string;
    communicationTitle: string;
    communication: readonly AssessmentCommItem[];
  };
  streams: {
    label: string;
    title: string;
    description: string;
    cta: { label: string; href: string };
    cards: readonly StreamCard[];
    partners: {
      label: string;
      logos: readonly { src: string; alt: string }[];
    };
  };
  ctaBand: {
    label: string;
    title: string;
    description: string;
    enquiry: { label: string; href: string };
    phone: { label: string; href: string };
    whatsapp: { label: string; href: string };
  };
};
