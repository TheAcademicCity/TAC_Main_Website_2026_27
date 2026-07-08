"use client";

import { useEffect, useState } from "react";
import type { PageSubnavItem } from "@/types/academics";
import { cn } from "@/lib/utils";

type PageSubnavProps = {
  items: readonly PageSubnavItem[];
};

export function PageSubnav({ items }: PageSubnavProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.1, 0.25] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav
      className="sticky top-[calc(30px+5rem)] z-[80] border-b-2 border-line bg-white shadow-[0_3px_16px_-8px_rgba(15,61,56,0.12)]"
      aria-label="Page sections"
    >
      <div className="mx-auto flex w-[min(1200px,92vw)] overflow-x-auto scrollbar-none">
        {items.map((item) => {
          const isActive = item.id === activeId;

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "mb-[-2px] whitespace-nowrap border-b-[3px] px-5 py-3.5 font-montserrat text-[0.72rem] font-bold uppercase tracking-[0.1em] transition-colors",
                isActive
                  ? "border-gold text-forest-deep"
                  : "border-transparent text-slate hover:text-forest",
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
