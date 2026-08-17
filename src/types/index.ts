export type { SiteImage, SiteVideo } from "@/types/images";

export type StatItem = {
  value: string;
  label: string;
  /** Wider emphasis chip (e.g. Student Progression Plan on campus slides) */
  featured?: boolean;
};

export type AwardItem = {
  name: string;
  year: string;
  width: number;
  height: number;
  image: import("@/types/images").SiteImage;
};

export type PillarItem = {
  number: string;
  title: string;
  tagline: string;
  description: string;
  image: import("@/types/images").SiteImage;
  accent: "emerald" | "gold" | "forest" | "violet";
  /** Optional object-position override for the pillar photo crop. */
  imageObjectClassName?: string;
};

export type FeatureRow = {
  label: string;
  title: string;
  description: string;
  image: import("@/types/images").SiteImage;
  imageTag: string;
  chips: string[];
  cta?: { label: string; href: string; size?: "lg" };
  flipped?: boolean;
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
    href: string;
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

export type ParentTestimonial = {
  quote: string;
  name: string;
  /** Line 2 under the name */
  role: string;
  /** Line 3 under the role */
  detail: string;
  image: import("@/types/images").SiteImage;
  href: string;
  /** Slightly zoom thumbnail to hide baked-in reel frame borders */
  cropBorder?: boolean;
};

export type AdmissionStep = {
  number: string;
  title: string;
  description: string;
};

export type GalleryAchievementCategory =
  | "JEE"
  | "NEET"
  | "SPORTS"
  | "COMMERCE"
  | "DESIGN";

export type GalleryImageItem = {
  kind?: "image";
  label: string;
  /** Achievement stream chip shown on the image tile */
  category?: GalleryAchievementCategory;
  /** Optional achiever name overlay (e.g. student card) */
  caption?: string;
  /** Optional secondary line under caption */
  detail?: string;
  height?: number;
  image?: import("@/types/images").SiteImage;
};

export type GalleryWordsItem = {
  kind: "words";
  /** Lines of copy shown in the word tile */
  lines: readonly string[];
  /** Optional line index rendered in brand gold */
  accentLine?: number;
};

export type GalleryItem = GalleryImageItem | GalleryWordsItem;

export type GalleryTab = {
  id: string;
  label: string;
  items: readonly GalleryImageItem[];
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
