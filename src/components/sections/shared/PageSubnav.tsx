"use client";

import { useEffect, useRef, useState } from "react";
import type { PageSubnavItem } from "@/types/page";
import { cn } from "@/lib/utils";

type PageSubnavProps = {
  items: readonly PageSubnavItem[];
};

function getSectionDocumentTop(element: HTMLElement) {
  return element.getBoundingClientRect().top + window.scrollY;
}

function getActiveSectionId(items: readonly PageSubnavItem[], marker: number) {
  let activeId = items[0]?.id ?? "";

  for (const item of items) {
    const section = document.getElementById(item.id);
    if (!section) continue;

    if (getSectionDocumentTop(section) <= marker) {
      activeId = item.id;
    }
  }

  return activeId;
}

export function PageSubnav({ items }: PageSubnavProps) {
  const navRef = useRef<HTMLElement>(null);
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const syncSubnavHeight = () => {
      document.documentElement.style.setProperty("--page-subnav-height", `${nav.offsetHeight}px`);
    };

    const updateActiveSection = () => {
      const header = document.getElementById("hdr");
      if (!header) return;

      syncSubnavHeight();

      const marker =
        window.scrollY + header.getBoundingClientRect().bottom + nav.offsetHeight + 1;

      setActiveId(getActiveSectionId(items, marker));
    };

    syncSubnavHeight();
    updateActiveSection();

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateActiveSection);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [items]);

  return (
    <nav
      ref={navRef}
      className="sticky top-[var(--site-nav-stack)] z-[80] border-b-2 border-line bg-white shadow-[0_3px_16px_-8px_rgba(15,61,56,0.12)]"
      aria-label="Page sections"
    >
      <div className="mx-auto flex w-full max-w-[1200px] overflow-x-auto px-4 scrollbar-none sm:w-[min(1200px,92vw)] sm:px-0">
        {items.map((item) => {
          const isActive = item.id === activeId;

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "mb-[-2px] shrink-0 whitespace-nowrap px-3 py-3 font-montserrat text-[0.68rem] font-bold uppercase tracking-[0.1em] transition-colors sm:px-5 sm:py-3.5 sm:text-[0.72rem]",
                isActive
                  ? "border-b-[5px] border-gold text-forest-deep"
                  : "border-b-[3px] border-transparent text-slate hover:text-forest",
              )}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
