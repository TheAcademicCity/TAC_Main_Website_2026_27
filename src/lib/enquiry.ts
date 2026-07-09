import { getSearchFromHref, getSectionIdFromHref } from "@/lib/scroll";

export type EnquiryIntent = "brochure" | "general";

export function isEnquiryHref(href: string): boolean {
  return getSectionIdFromHref(href) === "enquiry";
}

export function getEnquiryIntentFromHref(href: string): EnquiryIntent {
  const search = getSearchFromHref(href);

  if (search) {
    const params = new URLSearchParams(search);
    if (params.get("intent") === "brochure") {
      return "brochure";
    }
  }

  return "general";
}
