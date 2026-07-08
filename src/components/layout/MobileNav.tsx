"use client";

import { mobileNavigation } from "@/config/navigation";
import { HomeLink } from "@/components/layout/HomeLink";
import { SiteLink } from "@/components/layout/SiteLink";
import { mobileNavLinkClasses } from "@/components/layout/NavLink";
import { cn } from "@/lib/utils";
import { isHomeHref } from "@/lib/scroll";

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
        const LinkComponent = isHomeHref(item.href) ? HomeLink : SiteLink;

        return (
          <LinkComponent key={item.label} href={item.href} onClick={onClose} className={className}>
            {item.label}
            {item.variant === "cta" ? " →" : ""}
          </LinkComponent>
        );
      })}
    </nav>
  );
}
