"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { BlogCategory } from "@/types/blog";

type BlogFilterContextValue = {
  category: BlogCategory;
  setCategory: (category: BlogCategory) => void;
};

const BlogFilterContext = createContext<BlogFilterContextValue | null>(null);

export function BlogFilterProvider({ children }: { children: ReactNode }) {
  const [category, setCategory] = useState<BlogCategory>("all");

  return (
    <BlogFilterContext.Provider value={{ category, setCategory }}>
      {children}
    </BlogFilterContext.Provider>
  );
}

export function useBlogFilter() {
  const context = useContext(BlogFilterContext);
  if (!context) {
    throw new Error("useBlogFilter must be used within BlogFilterProvider");
  }
  return context;
}
