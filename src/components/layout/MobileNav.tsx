"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { mobileNavigation } from "@/config/navigation";
import { HomeLink } from "@/components/layout/HomeLink";
import { SiteLink } from "@/components/layout/SiteLink";
import { mobileNavLinkClasses } from "@/components/layout/NavLink";
import { cn } from "@/lib/utils";
import { isHomeHref, isNavDropdownActive, isNavLinkActive } from "@/lib/scroll";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileNav({ open, onClose }: MobileNavProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <nav
      className={cn(
        "fixed inset-0 z-[99] overflow-y-auto bg-forest-dark px-5 pb-12 pt-28 transition-transform duration-300 sm:px-8 sm:pt-32 lg:hidden",
        open ? "translate-x-0" : "translate-x-full",
      )}
      aria-hidden={!open}
    >
      {mobileNavigation.map((item) => {
        const variant = item.variant === "cta" ? "cta" : "default";
        const hasChildren = Boolean(item.children?.length);
        const active =
          variant === "default" &&
          (hasChildren ? isNavDropdownActive(item, pathname) : isNavLinkActive(item.href, pathname));

        if (hasChildren) {
          return (
            <div key={item.label}>
              <span
                className={cn(
                  mobileNavLinkClasses("default", undefined, active),
                  "cursor-default border-b border-white/10",
                )}
              >
                {item.label}
              </span>
              {item.children?.map((child) => {
                const childActive = isNavLinkActive(child.href, pathname);
                const LinkComponent = isHomeHref(child.href) ? HomeLink : SiteLink;

                return (
                  <LinkComponent
                    key={child.label}
                    href={child.href}
                    onClick={onClose}
                    className={cn(
                      "block border-b border-white/6 py-2 pl-4 font-montserrat text-xs font-semibold uppercase tracking-wide transition-all duration-200",
                      childActive
                        ? "border-gold/30 text-gold"
                        : "text-white/65 hover:border-gold/30 hover:pl-5 hover:text-gold",
                    )}
                    aria-current={childActive ? "page" : undefined}
                  >
                    {child.label}
                  </LinkComponent>
                );
              })}
            </div>
          );
        }

        const className = mobileNavLinkClasses(variant, undefined, active);
        const LinkComponent = isHomeHref(item.href) ? HomeLink : SiteLink;

        return (
          <LinkComponent
            key={item.label}
            href={item.href}
            onClick={onClose}
            className={className}
            aria-current={active ? "page" : undefined}
          >
            {item.label}
            {item.variant === "cta" ? " →" : ""}
          </LinkComponent>
        );
      })}
    </nav>
  );
}
