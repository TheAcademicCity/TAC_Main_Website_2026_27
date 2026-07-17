"use client";

import { blogPageContent } from "@/data/blog";
import { useBlogFilter } from "@/components/sections/blog/BlogFilterContext";
import { cn } from "@/lib/utils";

export function BlogFilterPills() {
  const { category, setCategory } = useBlogFilter();
  const { filters } = blogPageContent.header;

  return (
    <div className="mt-7 flex flex-wrap gap-2">
      {filters.map((filter) => (
        <button
          key={filter.id}
          type="button"
          onClick={() => setCategory(filter.id)}
          className={cn(
            "border-[1.5px] px-3.5 py-1.5 font-montserrat text-[0.68rem] font-bold uppercase tracking-[0.1em] transition-colors",
            category === filter.id
              ? "border-gold bg-gold text-forest-deep"
              : "border-white/20 bg-transparent text-white/60 hover:border-white/60 hover:text-white",
          )}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
