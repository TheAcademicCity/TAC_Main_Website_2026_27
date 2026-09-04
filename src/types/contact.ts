import type { ContactLocation } from "@/types";

export type ContactLink = {
  type: "phone" | "whatsapp" | "email" | "location";
  label: string;
  value: string;
  sub?: string;
  href?: string;
  external?: boolean;
};

export type ContactPageContent = {
  label: string;
  title: string;
  titleHighlight: string;
  links: readonly ContactLink[];
  locations: readonly ContactLocation[];
  form: {
    title: string;
    description: string;
    note: string;
    submitLabel: string;
    successTitle: string;
    successDescription: string;
  };
};
