import type { SiteImage } from "@/types/images";
import type { HeroStat, PageSubnavItem } from "@/types/page";

export type BoardingPageContent = {
  hero: {
    title: string;
    titleHighlight: string;
    description: string;
    image: SiteImage;
    stats: readonly HeroStat[];
  };
  subnav: readonly PageSubnavItem[];
  values: {
    label: string;
    title: string;
    description: string;
    tiles: readonly {
      accent: "t1" | "t2" | "t3" | "t4" | "t5" | "t6";
      icon: string;
      title: string;
      description: string;
    }[];
  };
  scheduleBand: {
    title: string;
    description: string;
    cta: { label: string; href: string };
  };
  dorm: {
    label: string;
    title: string;
    paragraphs: readonly string[];
    image: SiteImage;
    quote: string;
    keyItemsLabel: string;
    keyItems: readonly { icon: string; text: string }[];
  };
  schedule: {
    label: string;
    title: string;
    description: string;
    tabs: readonly {
      id: string;
      label: string;
      rows: readonly { time: string; activity: string }[];
    }[];
  };
  communication: {
    label: string;
    title: string;
    description: string;
    cards: readonly { icon: string; title: string; description: string }[];
  };
  outpass: {
    label: string;
    title: string;
    description: string;
    steps: readonly { number: string; title: string; description: string }[];
    rules: readonly string[];
    outingNote: string;
  };
  discipline: {
    label: string;
    title: string;
    description: string;
    policies: readonly {
      slug: import("@/types/policies").BoardingPolicySlug;
      title: string;
      preview: string;
      icon: string;
      accent: "emerald" | "gold" | "violet";
    }[];
  };
  care: {
    label: string;
    title: string;
    safety: {
      title: string;
      description: string;
      items: readonly { icon: string; title: string; description: string }[];
      medicalPartners: {
        label: string;
        logos: readonly { src: string; alt: string; width?: number; height?: number }[];
      };
    };
    nutrition: {
      title: string;
      description: string;
      meals: readonly string[];
      items: readonly { icon: string; title: string; description: string }[];
      foodPartner: {
        label: string;
        logo: { src: string; alt: string; width?: number; height?: number };
      };
    };
  };
  gallery: {
    label: string;
    title: string;
    items: readonly { label: string; image: SiteImage; wide?: boolean }[];
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
