"use client";

import { cn } from "@/lib/utils";

export type TabOption = {
  id: string;
  label: string;
};

type TabGroupProps = {
  tabs: TabOption[];
  activeId: string;
  onChange: (id: string) => void;
  variant?: "underline" | "panel";
  className?: string;
  tabClassName?: string;
};

export function TabGroup({
  tabs,
  activeId,
  onChange,
  variant = "underline",
  className,
  tabClassName,
}: TabGroupProps) {
  return (
    <div
      className={cn(
        "overflow-x-auto scrollbar-none",
        variant === "underline" && "flex border-b-2 border-line",
        variant === "panel" &&
          "flex border-t border-white/10 bg-[rgba(10,44,40,0.6)] backdrop-blur-md",
        className,
      )}
      role="tablist"
    >
      {tabs.map((tab) => {
        const isActive = tab.id === activeId;

        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.id)}
            className={cn(
              "shrink-0 whitespace-nowrap font-montserrat text-[0.75rem] font-bold uppercase tracking-wider transition-colors",
              variant === "underline" &&
                cn(
                  "-mb-0.5 border-b-[3px] px-4 py-3.5 sm:px-6",
                  isActive
                    ? "border-gold text-forest-deep"
                    : "border-transparent text-slate hover:text-forest",
                ),
              variant === "panel" &&
                cn(
                  "min-w-[7rem] flex-none border-r border-white/10 px-4 py-3.5 last:border-r-0 md:min-w-0 md:flex-1",
                  isActive
                    ? "bg-gold/8 text-gold"
                    : "text-white/55 hover:text-white/80",
                ),
              tabClassName,
            )}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
