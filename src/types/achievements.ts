import type { HeroStat, PageSubnavItem } from "@/types/page";
import type { SiteImage } from "@/types/images";

export type AchievementsStat = {
  value: string;
  label: string;
};

export type StarAchiever = {
  eyebrow: string;
  name: string;
  nameHighlight?: string;
  stat: string;
  statLabel: string;
  description: string;
  tags: readonly string[];
  image: SiteImage;
};

export type SubAchiever = {
  name: string;
  value: string;
  label: string;
  image: SiteImage;
};

export type JeeHighlight = {
  percentile: string;
  name: string;
  university: string;
  description: string;
};

export type JeeRow = {
  name: string;
  batch: string;
  percentile: string;
};

export type JeeChip = {
  name: string;
  percentile: string;
  batch: string;
};

export type NeetTop = {
  score: string;
  name: string;
  college: string;
};

export type NeetCard = {
  name: string;
  score: string;
  college: string;
  batch: string;
};

export type CommerceCard = {
  badge: string;
  badgeTone: "violet" | "gold" | "green";
  achievement: string;
  name: string;
  detail: string;
};

export type SportHero = {
  medal: string;
  event: string;
  title: string;
  athlete: string;
  description: string;
};

export type SportCard = {
  icon: string;
  title: string;
  detail: string;
};

export type ArtCard = {
  icon: string;
  tag: string;
  tagTone: "violet" | "emerald" | "gold";
  title: string;
  description: string;
};

export type DesignStudent = {
  icon: string;
  name: string;
  project: string;
  target: string;
};

export type GratRole = {
  icon: string;
  title: string;
};

export type AchievementsPageContent = {
  hero: {
    title: string;
    titleHighlight: string;
    description: string;
    image: SiteImage;
    stats: readonly HeroStat[];
  };
  subnav: readonly PageSubnavItem[];
  starAchiever: {
    featured: StarAchiever;
    subAchievers: readonly SubAchiever[];
    subHeading: string;
    admissionsNote: { value: string; label: string };
  };
  jee: {
    chapter: string;
    label: string;
    title: string;
    description: string;
    highlight: JeeHighlight;
    topRows: readonly JeeRow[];
    moreLabel: string;
    moreChips: readonly JeeChip[];
  };
  statsBand: readonly AchievementsStat[];
  neet: {
    chapter: string;
    label: string;
    title: string;
    description: string;
    topCards: readonly NeetTop[];
    grid: readonly NeetCard[];
  };
  commerce: {
    chapter: string;
    label: string;
    title: string;
    description: string;
    cards: readonly CommerceCard[];
  };
  sports: {
    chapter: string;
    label: string;
    title: string;
    description: string;
    hero: SportHero;
    cards: readonly SportCard[];
  };
  arts: {
    chapter: string;
    label: string;
    title: string;
    description: string;
    cards: readonly ArtCard[];
    author: {
      icon: string;
      title: string;
      name: string;
      detail: string;
      quote: string;
      description: string;
      byline: string;
    };
    designLabel: string;
    designStudents: readonly DesignStudent[];
  };
  gratitude: {
    label: string;
    quote: string;
    quoteHighlight: string;
    attribution: string;
    description: string;
    roles: readonly GratRole[];
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
