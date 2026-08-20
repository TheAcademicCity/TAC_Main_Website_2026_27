"use client";

import { useCallback, useEffect, useRef, useState } from "react";
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
  const mobileScrollerRef = useRef<HTMLDivElement>(null);
  const mobileLinkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const lastMobileScrolledActiveIdRef = useRef(items[0]?.id ?? "");
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  const scrollMobileLinkIntoView = useCallback((index: number, behavior: ScrollBehavior = "smooth") => {
    const scroller = mobileScrollerRef.current;
    const link = mobileLinkRefs.current[index];
    if (!scroller || !link || window.matchMedia("(min-width: 768px)").matches) return;

    const targetLeft = link.offsetLeft - scroller.clientWidth / 2 + link.offsetWidth / 2;
    scroller.scrollTo({ left: Math.max(0, targetLeft), behavior });
  }, []);

  useEffect(() => {
    lastMobileScrolledActiveIdRef.current = items[0]?.id ?? "";
    mobileLinkRefs.current = [];
  }, [items]);

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

  useEffect(() => {
    if (activeId === lastMobileScrolledActiveIdRef.current) return;

    const index = items.findIndex((item) => item.id === activeId);
    if (index < 0) return;

    lastMobileScrolledActiveIdRef.current = activeId;
    scrollMobileLinkIntoView(index);
  }, [activeId, items, scrollMobileLinkIntoView]);

  const handleMobileLinkClick = (index: number, itemId: string) => {
    lastMobileScrolledActiveIdRef.current = itemId;
    scrollMobileLinkIntoView(index);
  };

  return (
    <nav
      ref={navRef}
      className="sticky top-[var(--site-nav-stack)] z-[80] border-b border-off-white bg-white md:border-b-2 md:border-line md:shadow-[0_3px_16px_-8px_rgba(15,61,56,0.12)]"
      aria-label="Page sections"
    >
      {/* Mobile jump chips */}
      <div
        ref={mobileScrollerRef}
        className="flex gap-2 overflow-x-auto px-5 py-3.5 scrollbar-none md:hidden"
      >
        {items.map((item, index) => {
          const isActive = item.id === activeId;
          return (
            <a
              key={item.id}
              ref={(node) => {
                mobileLinkRefs.current[index] = node;
              }}
              href={`#${item.id}`}
              onClick={() => handleMobileLinkClick(index, item.id)}
              className={cn(
                "shrink-0 rounded-[20px] px-3.5 py-1.5 font-outfit text-[0.68rem] font-semibold",
                isActive ? "bg-forest text-white" : "bg-off-white text-charcoal",
              )}
            >
              {item.label}
            </a>
          );
        })}
      </div>

      {/* Desktop underline tabs */}
      <div className="mx-auto hidden w-full max-w-[1200px] overflow-x-auto px-4 scrollbar-none md:flex sm:w-[min(1200px,92vw)] sm:px-0">
        {items.map((item) => {
          const isActive = item.id === activeId;

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "mb-[-2px] shrink-0 whitespace-nowrap px-5 py-3.5 font-montserrat text-[0.72rem] font-bold uppercase tracking-[0.1em] transition-colors",
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
