"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { ComponentProps, MouseEvent } from "react";
import { useEnquiryModal } from "@/components/layout/EnquiryModalProvider";
import { getEnquiryIntentFromHref, isEnquiryHref } from "@/lib/enquiry";
import {
  getSearchFromHref,
  getSectionIdFromHref,
  isHomeHref,
  isSamePageHref,
  smoothScrollToSection,
  smoothScrollToTop,
} from "@/lib/scroll";

type SiteLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
};

export function SiteLink({ href, onClick, ...props }: SiteLinkProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { openEnquiryModal } = useEnquiryModal();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (isEnquiryHref(href)) {
      event.preventDefault();
      openEnquiryModal(getEnquiryIntentFromHref(href));
      return;
    }

    if (isHomeHref(href)) {
      if (pathname === "/") {
        event.preventDefault();
        smoothScrollToTop();
      }
      return;
    }

    const sectionId = getSectionIdFromHref(href);
    if (sectionId) {
      if (pathname === "/") {
        event.preventDefault();
        smoothScrollToSection(sectionId, getSearchFromHref(href));
        return;
      }

      event.preventDefault();
      router.push(href);
      return;
    }

    if (isSamePageHref(href, pathname)) {
      event.preventDefault();
      smoothScrollToTop();
    }
  };

  return <Link href={href} onClick={handleClick} {...props} />;
}
