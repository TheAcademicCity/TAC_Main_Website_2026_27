import type { SiteImage } from "@/types/images";
import type { HeroStat, PageSubnavItem } from "@/types/page";
import type { Icon } from "@/components/ui/Icon";

type IconName = Parameters<typeof Icon>[0]["name"];

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
      icon: IconName;
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
    stat: string;
    statLabel: string;
    quote: string;
    keyItems: readonly string[];
  };
  schedule: {
    label: string;
    title: string;
    description: string;
    tabs: readonly {
      id: string;
      label: string;
      rows: readonly { time: string; activity: string; highlight?: boolean }[];
    }[];
  };
  communication: {
    label: string;
    title: string;
    description: string;
    cards: readonly { icon: IconName; title: string; description: string }[];
  };
  outpass: {
    label: string;
    title: string;
    description: string;
    steps: readonly { number: string; title: string; description: string }[];
    rules: readonly string[];
    note: string;
  };
  discipline: {
    label: string;
    title: string;
    description: string;
    banner: string;
    steps: readonly {
      badge: string;
      violation: string;
      title: string;
      description: string;
    }[];
  };
  care: {
    label: string;
    title: string;
    safety: {
      title: string;
      items: readonly { icon: IconName; title: string; description: string }[];
    };
    nutrition: {
      title: string;
      description: string;
      meals: readonly string[];
      note: string;
      items: readonly { icon: IconName; title: string; description: string }[];
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
