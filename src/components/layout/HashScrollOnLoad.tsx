"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { smoothScrollToSection } from "@/lib/scroll";

/** Smoothly scrolls to a hash target when landing on the home page from another route. */
export function HashScrollOnLoad() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    requestAnimationFrame(() => {
      smoothScrollToSection(hash);
    });
  }, [pathname]);

  return null;
}
