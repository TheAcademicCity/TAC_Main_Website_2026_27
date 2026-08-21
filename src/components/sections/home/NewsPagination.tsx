"use client";

import { useState } from "react";

import type { NewsArticle } from "@/types";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { NewsCard } from "@/components/sections/shared/NewsCard";
import { cn } from "@/lib/utils";

type NewsPaginationProps = {
  articles: NewsArticle[];
};

const PAGE_SIZE = 6;

export function NewsPagination({ articles }: NewsPaginationProps) {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(articles.length / PAGE_SIZE);

  const startIndex = (page - 1) * PAGE_SIZE;

  const visibleArticles = articles.slice(
    startIndex,
    startIndex + PAGE_SIZE,
  );

  const delays: Array<0 | 1 | 2 | 3 | 4> = [0, 1, 2, 0, 1, 2];

  function changePage(pageNumber: number) {
    setPage(pageNumber);
  }

  return (
    <>
      {/* Mobile 2×3 grid */}
      <div className="grid grid-cols-2 gap-3 px-5 md:hidden">
        {visibleArticles.map((article) => (
          <article
            key={`${article.title}-${article.day}-${article.month}`}
            className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_8px_20px_-12px_rgba(0,0,0,0.18)]"
          >
            <div className="relative aspect-[16/10] bg-forest-deep">
              <ImageWithFallback
                image={article.image}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover"
              />

              <div className="absolute left-1.5 top-1.5 bg-gold px-1 py-px text-center font-montserrat text-[0.36rem] font-extrabold leading-tight text-forest-deep">
                <b className="block text-[0.6rem]">
                  {article.day}
                </b>
                {article.month}
              </div>
            </div>

            <div className="p-2.5">
              <h5 className="font-montserrat text-[0.72rem] font-bold leading-snug text-navy">
                {article.title}
              </h5>
            </div>
          </article>
        ))}
      </div>

      {/* Desktop grid */}
      <div className="hidden gap-6 md:grid md:grid-cols-2 xl:grid-cols-3">
        {visibleArticles.map((article, index) => (
          <NewsCard
            key={`${article.title}-${article.day}-${article.month}`}
            article={article}
            delay={delays[index]}
          />
        ))}
      </div>

      {/* Pagination — matches BlogArticlesSection */}
      {totalPages > 1 ? (
        <div className="mt-5 flex flex-wrap items-center justify-center gap-1.5 px-5 md:mt-7 md:px-0">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
            <button
              key={pageNumber}
              type="button"
              onClick={() => changePage(pageNumber)}
              aria-label={`Go to School Updates page ${pageNumber}`}
              aria-current={page === pageNumber ? "page" : undefined}
              className={cn(
                "grid h-9 w-9 place-items-center rounded-[10px] border-[1.5px] font-montserrat text-[0.75rem] font-bold transition-colors md:h-10 md:w-10 md:rounded-lg md:text-[0.82rem]",
                page === pageNumber
                  ? "border-gold bg-gold text-forest-deep"
                  : "border-line bg-white text-slate hover:border-forest/30 hover:text-forest",
              )}
            >
              {pageNumber}
            </button>
          ))}
        </div>
      ) : null}
    </>
  );
}