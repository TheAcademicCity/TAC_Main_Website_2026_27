import type { SiteImage } from "@/types/images";
import type { HeroStat, PageSubnavItem } from "@/types/page";

export type CoCurricularIcon =
  | "activity"
  | "trophy"
  | "waves"
  | "heart"
  | "globe"
  | "leaf"
  | "shieldCheck"
  | "squarePlus"
  | "wallet"
  | "mic"
  | "chefHat";

export type CoCurricularPageContent = {
  hero: {
    title: string;
    titleHighlight: string;
    description: string;
    image: SiteImage;
    stats: readonly HeroStat[];
  };
  subnav: readonly PageSubnavItem[];
  philosophy: {
    label: string;
    title: string;
    paragraphs: readonly string[];
    image: SiteImage;
    imageTag: string;
    cta: { label: string; href: string };
  };
  sports: {
    label: string;
    title: string;
    description: string;
    tags: readonly string[];
    stats: readonly HeroStat[];
    image: SiteImage;
    imageTag: string;
  };
  facilities: {
    label: string;
    title: string;
    items: readonly {
      label: string;
      icon: CoCurricularIcon;
      image: SiteImage;
      wide?: boolean;
      tall?: boolean;
    }[];
  };
  sportBand: {
    title: string;
    description: string;
    cta: { label: string; href: string };
  };
  clubs: {
    label: string;
    title: string;
    description: string;
    cards: readonly {
      number: string;
      tag: string;
      title: string;
      description?: string;
      image: SiteImage;
      gradient: string;
      hero?: boolean;
      imageObjectClassName?: string;
    }[];
    performingArts: {
      label: string;
      description: string;
      mobileLabel?: string;
      mobileSubtitle?: string;
      mobileImage?: import("@/types/images").SiteImage;
    };
  };
  events: {
    label: string;
    title: string;
    items: readonly {
      number: string;
      title: string;
      description: string;
      badge: string;
    }[];
  };
  supw: {
    label: string;
    title: string;
    description: string;
    items: readonly {
      icon: CoCurricularIcon;
      title: string;
      description: string;
    }[];
    image: SiteImage;
  };
  lifeReadiness: {
    label: string;
    title: string;
    cards: readonly {
      icon: string;
      title: string;
      description: string;
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
