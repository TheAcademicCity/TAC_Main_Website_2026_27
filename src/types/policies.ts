import type { Icon } from "@/components/ui/Icon";

type IconName = Parameters<typeof Icon>[0]["name"];

export type BoardingPolicySlug = "anti-bullying" | "anti-ragging" | "anti-narcotics";

export type BoardingPolicyCard = {
  slug: BoardingPolicySlug;
  title: string;
  preview: string;
  icon: IconName;
  accent: "emerald" | "gold" | "violet";
};

export type BoardingPolicyContent = {
  slug: BoardingPolicySlug;
  title: string;
  metaDescription: string;
  intro: string;
  sections: readonly {
    heading: string;
    paragraphs?: readonly string[];
    bullets?: readonly string[];
  }[];
};
