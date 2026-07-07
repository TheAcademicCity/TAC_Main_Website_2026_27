"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { ComponentProps, MouseEvent } from "react";
import {
  getSearchFromHref,
  getSectionIdFromHref,
  isHomeHref,
  smoothScrollToSection,
  smoothScrollToTop,
} from "@/lib/scroll";

type SiteLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
};

export function SiteLink({ href, onClick, ...props }: SiteLinkProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (isHomeHref(href)) {
      if (pathname === "/") {
        event.preventDefault();
        smoothScrollToTop();
      }
      return;
    }

    const sectionId = getSectionIdFromHref(href);
    if (!sectionId) return;

    if (pathname === "/") {
      event.preventDefault();
      smoothScrollToSection(sectionId, getSearchFromHref(href));
      return;
    }

    event.preventDefault();
    router.push(href);
  };

  return <Link href={href} onClick={handleClick} {...props} />;
}
