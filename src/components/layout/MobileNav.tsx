"use client";

import Link from "next/link";
import { mobileNavigation } from "@/config/navigation";
import { HomeLink } from "@/components/layout/HomeLink";
import { SiteLink } from "@/components/layout/SiteLink";
import { mobileNavLinkClasses } from "@/components/layout/NavLink";
import { cn } from "@/lib/utils";
import { getSectionIdFromHref, isHomeHref } from "@/lib/scroll";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileNav({ open, onClose }: MobileNavProps) {
  return (
    <nav
      className={cn(
        "fixed inset-0 z-[99] overflow-y-auto bg-forest-dark px-8 pb-12 pt-32 transition-transform duration-300 lg:hidden",
        open ? "translate-x-0" : "translate-x-full",
      )}
      aria-hidden={!open}
    >
      {mobileNavigation.map((item) => {
        const variant = item.variant === "cta" ? "cta" : "default";
        const className = mobileNavLinkClasses(variant);

        if (isHomeHref(item.href)) {
          return (
            <HomeLink key={item.label} href={item.href} onClick={onClose} className={className}>
              {item.label}
            </HomeLink>
          );
        }

        if (getSectionIdFromHref(item.href)) {
          return (
            <SiteLink key={item.label} href={item.href} onClick={onClose} className={className}>
              {item.label}
              {item.variant === "cta" ? " →" : ""}
            </SiteLink>
          );
        }

        return (
          <Link key={item.label} href={item.href} onClick={onClose} className={className}>
            {item.label}
            {item.variant === "cta" ? " →" : ""}
          </Link>
        );
      })}
    </nav>
  );
}
