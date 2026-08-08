"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps, ReactNode } from "react";
import { HomeLink } from "@/components/layout/HomeLink";
import { SiteLink } from "@/components/layout/SiteLink";
import { cn } from "@/lib/utils";
import { isHomeHref, isNavLinkActive } from "@/lib/scroll";

type NavLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "default" | "cta";
} & Pick<ComponentProps<typeof Link>, "onClick">;

const underlineClasses = [
  "after:absolute after:bottom-0 after:left-3.5 after:right-3.5 after:h-0.5 after:origin-center after:scale-x-0 after:bg-gold",
  "after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.22,0.61,0.36,1)]",
  "hover:after:scale-x-100",
].join(" ");

export function NavLink({ href, children, className, variant = "default", onClick }: NavLinkProps) {
  const pathname = usePathname();
  const active = variant === "default" && isNavLinkActive(href, pathname);

  const classes = cn(
    "relative inline-flex items-center font-semibold uppercase tracking-wide transition-all duration-200",
    variant === "default" && [
      "px-3.5 py-2.5 text-[0.78rem]",
      underlineClasses,
      active ? "text-gold after:scale-x-100" : "text-white/82 hover:text-white",
    ],
    variant === "cta" && [
      "ml-2 rounded-lg bg-gold px-6 py-2.5 text-[0.8rem] font-extrabold tracking-wider text-forest-deep",
      "hover:-translate-y-0.5 hover:bg-[#e09d10] hover:text-forest-deep",
    ],
    className,
  );

  const LinkComponent = isHomeHref(href) ? HomeLink : SiteLink;

  return (
    <LinkComponent href={href} className={classes} onClick={onClick} aria-current={active ? "page" : undefined}>
      {children}
    </LinkComponent>
  );
}

export function navTriggerClasses(className?: string, active = false) {
  return cn(
    "relative flex items-center gap-1 px-3.5 py-2.5 text-[0.78rem] font-semibold uppercase tracking-wide transition-all duration-200",
    underlineClasses,
    active ? "text-gold after:scale-x-100" : "text-white/82 hover:text-white",
    className,
  );
}

export function navDropdownItemClasses(className?: string, active = false) {
  return cn(
    "block border-b border-white/7 px-5 py-3 text-[0.76rem] font-semibold uppercase tracking-wider transition-colors last:border-b-0",
    active ? "bg-white/8 text-gold" : "text-white/78 hover:bg-white/8 hover:text-gold",
    className,
  );
}

export function mobileNavLinkClasses(
  variant: "default" | "cta" = "default",
  className?: string,
  active = false,
) {
  return cn(
    "block border-b border-white/10 py-2.5 font-montserrat text-sm font-semibold uppercase tracking-wide transition-all duration-200",
    variant === "default" &&
      (active
        ? "border-gold/40 pl-2 text-gold"
        : "text-white hover:border-gold/40 hover:pl-2 hover:text-gold"),
    variant === "cta" &&
      "mt-6 inline-block rounded-lg border-0 bg-gold px-8 py-3 text-sm font-extrabold text-forest-deep hover:-translate-y-0.5 hover:bg-[#e09d10]",
    className,
  );
}
