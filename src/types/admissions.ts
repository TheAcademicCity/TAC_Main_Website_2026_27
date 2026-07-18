import type { SiteImage } from "@/types/images";
import type { PageSubnavItem } from "@/types/page";
import type { Icon } from "@/components/ui/Icon";

type IconName = Parameters<typeof Icon>[0]["name"];

export type AdmissionsPageContent = {
  hero: {
    title: string;
    titleHighlight: string;
    description: string;
    image: SiteImage;
    primaryCta: { label: string; href: string };
    phone: { label: string; href: string };
    whatsapp: { label: string; href: string };
  };
  subnav: readonly PageSubnavItem[];
  overview: {
    label: string;
    title: string;
    paragraphs: readonly string[];
    image: SiteImage;
    cta: { label: string; href: string };
  };
  process: {
    label: string;
    title: string;
    description: string;
    steps: readonly { number: string; title: string; description: string; alt?: boolean }[];
    actions: readonly { label: string; href: string; variant: "gold" | "outline-white"; external?: boolean }[];
  };
  criteria: {
    label: string;
    title: string;
    description: string;
    cards: readonly {
      number: string;
      icon: IconName;
      title: string;
      description: string;
    }[];
  };
  onlineBand: {
    title: string;
    description: string;
    cta: { label: string; href: string };
  };
  eligibility: {
    label: string;
    title: string;
    description: string;
    checklist: readonly string[];
    gradeNote: string;
    grades: readonly { grade: string; status: string; examMode: string }[];
    keyDates: readonly { label: string; value: string; highlight?: boolean }[];
  };
  scholarships: {
    label: string;
    title: string;
    description: string;
    slabs: readonly { percent: string; range: string }[];
    slabNote: string;
    sibling: { title: string; description: string };
    earlyBird: { title: string; description: string; deadline: string };
    contactNote: string;
    phoneHref: string;
    phoneDisplay: string;
  };
  clarity: {
    label: string;
    title: string;
    heading: string;
    description: string;
    items: readonly string[];
    visitCta: { label: string; href: string };
    whatsapp: { label: string; href: string };
  };
  faq: {
    label: string;
    title: string;
    items: readonly { question: string; answer: string }[];
  };
  ctaBand: {
    label: string;
    title: string;
    description: string;
    phone: { label: string; href: string };
    whatsapp: { label: string; href: string };
    email: { label: string; href: string };
  };
};
