import type { SiteImage } from "@/types/images";
import type { HeroStat, PageSubnavItem } from "@/types/page";
import type { Icon } from "@/components/ui/Icon";

type IconName = Parameters<typeof Icon>[0]["name"];

export type AboutPageContent = {
  hero: {
    title: string;
    titleHighlight: string;
    description: string;
    descriptionHighlights: readonly string[];
    image: SiteImage;
    stats: readonly HeroStat[];
  };
  subnav: readonly PageSubnavItem[];
  whoWeAre: {
    label: string;
    title: string;
    paragraphs: readonly string[];
    badge: string;
    photos: readonly {
      image: SiteImage;
      variant: "tall" | "compact" | "wide";
    }[];
  };
  visionMission: {
    vision: {
      label: string;
      title: string;
      description: string;
      highlights: readonly string[];
      icon: IconName;
    };
    mission: {
      label: string;
      title: string;
      description: string;
      highlights: readonly string[];
      icon: IconName;
    };
  };
  values: {
    label: string;
    title: string;
    description: string;
    tiles: readonly ({
      accent: "gold" | "emerald" | "violet" | "cyan";
      title: string;
      description: string;
    } & (
      | { icon: IconName; iconImage?: never }
      | { iconImage: SiteImage; icon?: never }
    ))[];
  };
  campusBand: {
    title: string;
    description: string;
    cta: { label: string; href: string };
  };
  leadership: {
    label: string;
    title: string;
    leaders: readonly {
      name: string;
      role: string;
      messageLabel: string;
      quote: string;
      quoteHighlights: readonly string[];
      body: string;
      image: SiteImage;
      altLayout?: boolean;
    }[];
  };
  different: {
    label: string;
    title: string;
    cards: readonly {
      title: string;
      description: string;
      image: SiteImage;
    }[];
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
