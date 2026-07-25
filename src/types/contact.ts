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
  address: {
    mapEmbedUrl: string;
    mapLabel: string;
  };
  form: {
    title: string;
    description: string;
    note: string;
    grades: readonly string[];
    submitLabel: string;
    successTitle: string;
    successDescription: string;
  };
};
