import type { CampusPageContent } from "@/types/campus";

export const campusPageContent = {
  label: "Campus Tour",
  title: "Experience life at",
  titleHighlight: "TACS Bengaluru",
  description:
    "Take a look around our Nelamangala campus — classrooms, hostels, sports and the spaces where students learn, live and grow.",
  video: {
    youtubeId: "nh75X9a2e2g",
    title: "TACS Bengaluru campus tour",
  },
} as const satisfies CampusPageContent;
