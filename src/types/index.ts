export type { SiteImage, SiteVideo } from "@/types/images";

export type StatItem = {
  value: string;
  label: string;
  /** Wider emphasis chip (e.g. Student Progression Plan on campus slides) */
  featured?: boolean;
};

export type PillarItem = {
  number: string;
  title: string;
  tagline: string;
  description: string;
  image: import("@/types/images").SiteImage;
  href: string;
  accent: "emerald" | "gold" | "forest" | "violet";
};

export type FeatureRow = {
  label: string;
  title: string;
  description: string;
  image: import("@/types/images").SiteImage;
  imageTag: string;
  chips: string[];
  cta: { label: string; href: string; size?: "lg" };
  flipped?: boolean;
};

export type AwardItem = {
  image: import("@/types/images").SiteImage;
};

export type CampusPartnerLogo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
};

export type CampusSlide = {
  id: string;
  name: string;
  label: string;
  title: string;
  description: string;
  image: import("@/types/images").SiteImage;
  facts: StatItem[];
  academicPartners: {
    label: string;
    logos: CampusPartnerLogo[];
  };
  cta: { label: string; href: string };
  campusVideo?: {
    label: string;
    youtubeId: string;
  };
};

export type FounderProfile = {
  name: string;
  role: string;
  quote: string;
  image: import("@/types/images").SiteImage;
  initials: string;
  variant: "featured" | "compact";
};

export type NewsArticle = {
  title: string;
  excerpt: string;
  image: import("@/types/images").SiteImage;
  day: string;
  month: string;
  href?: string;
};

export type AdmissionStep = {
  number: string;
  title: string;
  description: string;
};

export type GalleryTab = {
  id: string;
  label: string;
  items: Array<{ label: string; height: number; image?: import("@/types/images").SiteImage }>;
};

export type ContactLocation = {
  title: string;
  address: string;
  phone?: string;
  phoneHref?: string;
  email?: string;
  mapEmbedUrl: string;
  mapLabel: string;
};
