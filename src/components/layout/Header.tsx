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
        className="fixed inset-x-0 top-[30px] z-[100] border-b border-white/8 bg-[rgba(10,44,40,0.97)] shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
      >
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-4 px-4 py-3 sm:px-[4vw]">
          <BrandLogo priority />

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
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 border-[1.5px] border-white/30 transition-colors hover:border-white/60 hover:bg-white/5 lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span
              className={cn(
                "h-[1.8px] w-5 bg-white transition-transform",
                mobileOpen && "translate-y-[6.8px] rotate-45",
              )}
            />
            <span
              className={cn(
                "h-[1.8px] w-5 bg-white transition-opacity",
                mobileOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "h-[1.8px] w-5 bg-white transition-transform",
                mobileOpen && "-translate-y-[6.8px] -rotate-45",
              )}
            />
          </button>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
