import type { Icon } from "@/components/ui/Icon";

type IconName = Parameters<typeof Icon>[0]["name"];

export type BoardingPolicySlug = "anti-bullying-ragging" | "anti-narcotics";

export type BoardingPolicyCard = {
  slug: BoardingPolicySlug;
  title: string;
  preview: string;
  icon: IconName;
  accent: "emerald" | "gold" | "violet";
};

export type PolicyLevel = {
  title: string;
  description: string;
  severity: "default" | "moderate" | "severe";
};

export type PolicyFormBox = {
  title: string;
  description: string;
};

export type PolicyTableRow = {
  role: string;
  responsibility: string;
};

export type PolicyHelpline = {
  label: string;
  value: string;
  note: string;
};

export type PolicySection =
  | { type: "text"; heading: string; paragraphs: readonly string[] }
  | { type: "bullets"; heading: string; bullets: readonly string[] }
  | { type: "formBoxes"; heading: string; boxes: readonly PolicyFormBox[] }
  | { type: "levels"; heading: string; intro?: string; levels: readonly PolicyLevel[] }
  | { type: "table"; heading: string; rows: readonly PolicyTableRow[] };

export type BoardingPolicyContent = {
  slug: BoardingPolicySlug;
  title: string;
  metaDescription: string;
  subtitle: string;
  commitment: string;
  sections: readonly PolicySection[];
  helpline: PolicyHelpline;
  footer: string;
};
