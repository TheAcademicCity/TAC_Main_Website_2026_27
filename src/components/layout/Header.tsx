"use client";

import { useState } from "react";
import { mainNavigation } from "@/config/navigation";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { MobileNav } from "@/components/layout/MobileNav";
import { NavDropdown } from "@/components/layout/NavDropdown";
import { NavLink } from "@/components/layout/NavLink";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header
        id="hdr"
        className={cn(
          "fixed inset-x-0 z-[100] border-b transition-colors",
          "top-0 border-off-white bg-white shadow-none",
          "md:top-[30px] md:border-white/8 md:bg-[rgba(10,44,40,0.97)] md:shadow-[0_4px_30px_rgba(0,0,0,0.4)]",
        )}
      >
        <div className="mx-auto flex h-[var(--site-header-height)] w-full max-w-[1200px] items-center justify-between gap-4 px-4 md:h-auto md:px-[4vw] md:py-3">
          <BrandLogo priority variant="responsive" />

          <nav className="hidden lg:block" aria-label="Main navigation">
            <ul className="flex items-center">
              {mainNavigation.map((item) =>
                item.children ? (
                  <NavDropdown key={item.label} item={item} />
                ) : (
                  <li key={item.label}>
                    <NavLink href={item.href} variant={item.variant === "cta" ? "cta" : "default"}>
                      {item.label}
                    </NavLink>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <button
            type="button"
            className={cn(
              "relative flex items-center justify-center transition-colors lg:hidden",
              "h-[34px] w-[34px] flex-col gap-[3px] rounded-full bg-forest",
              "md:h-11 md:w-11 md:gap-0 md:rounded-none md:bg-transparent md:hover:bg-white/5",
            )}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span
              className={cn(
                "absolute left-1/2 top-1/2 h-[1.8px] w-3.5 -translate-x-1/2 bg-white transition-[transform,opacity] duration-200 md:w-5",
                mobileOpen
                  ? "-translate-y-1/2 rotate-45"
                  : "-translate-y-[calc(50%+5px)] md:-translate-y-[calc(50%+6px)]",
              )}
            />
            <span
              className={cn(
                "absolute left-1/2 top-1/2 h-[1.8px] w-3.5 -translate-x-1/2 -translate-y-1/2 bg-white transition-opacity duration-200 md:w-5",
                mobileOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute left-1/2 top-1/2 h-[1.8px] w-3.5 -translate-x-1/2 bg-white transition-[transform,opacity] duration-200 md:w-5",
                mobileOpen
                  ? "-translate-y-1/2 -rotate-45"
                  : "-translate-y-[calc(50%-5px)] md:-translate-y-[calc(50%-6px)]",
              )}
            />
          </button>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
