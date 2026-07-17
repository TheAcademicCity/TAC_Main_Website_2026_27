"use client";

import { useState } from "react";
import { blogPageContent } from "@/data/blog";
import { useBlogFilter } from "@/components/sections/blog/BlogFilterContext";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

export function BlogArticlesSection() {
  const { articles } = blogPageContent;
  const { category, setCategory } = useBlogFilter();
  const [page, setPage] = useState(1);

  const filteredPosts =
    category === "all" ? articles.posts : articles.posts.filter((post) => post.category === category);

  function handleTopicClick(topicId: typeof category) {
    setCategory(topicId);
    setPage(1);
    document.getElementById("articles")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <Section id="articles" background="paper">
      <RevealOnScroll>
        <SectionLabel>{articles.label}</SectionLabel>
        <h2 className="font-montserrat text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold text-forest-deep">
          {articles.title}
        </h2>
      </RevealOnScroll>

      <div className="mt-10 grid items-start gap-10 lg:grid-cols-[1fr_360px]">
        <div>
          <div className="grid gap-6 sm:grid-cols-2">
            {page === 1
              ? filteredPosts.map((post, index) => (
                  <RevealOnScroll key={post.href} delay={Math.min(index, 3) as 0 | 1 | 2 | 3}>
                    <a
                      href={post.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-full flex-col overflow-hidden border border-line bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-18px_rgba(15,61,56,0.18)]"
                    >
                      <div className="relative aspect-video overflow-hidden bg-forest-deep">
                        <div className="absolute inset-0" style={{ background: post.gradient }} />
                        <ImageWithFallback
                          image={post.image}
                          fill
                          sizes="(min-width: 640px) 50vw, 100vw"
                          className="object-cover transition duration-500 group-hover:scale-105"
                        />
                        <span
                          className={cn(
                            "absolute bottom-3 left-3 z-[2] px-2.5 py-0.5 font-montserrat text-[0.6rem] font-bold uppercase tracking-[0.12em]",
                            post.badgeClass,
                          )}
                        >
                          {post.categoryLabel}
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <h3 className="text-[0.97rem] font-extrabold leading-snug text-forest-deep">
                          {post.title}
                        </h3>
                        <p className="mt-2 flex-1 text-[0.82rem] leading-relaxed text-slate">
                          {post.description}
                        </p>
                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-[0.74rem] text-slate">{post.readTime}</span>
                          <span className="inline-flex items-center gap-1 font-montserrat text-[0.68rem] font-bold uppercase tracking-[0.1em] text-forest transition-all group-hover:gap-1.5 group-hover:text-emerald">
                            Read
                            <Icon name="arrow" className="h-2.5 w-2.5" />
                          </span>
                        </div>
                      </div>
                    </a>
                  </RevealOnScroll>
                ))
              : null}

            {page > 1 ? (
              <div className="col-span-full border border-dashed border-line bg-paper px-8 py-12 text-center">
                <p className="font-montserrat text-[0.9rem] font-bold text-forest-deep">
                  More articles on theacademiccity.com/blog
                </p>
                <Button
                  href={articles.externalBlogUrl}
                  external
                  className="mt-4 px-6 py-2.5 text-[0.74rem]"
                >
                  Visit the blog
                  <Icon name="arrow" className="h-3.5 w-3.5" />
                </Button>
              </div>
            ) : null}
          </div>

          <div className="mt-8 flex items-center gap-1.5 border-t border-line pt-6">
            {[1, 2, 3].map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => setPage(num)}
                className={cn(
                  "grid h-10 w-10 place-items-center border-[1.5px] font-montserrat text-[0.82rem] font-bold transition-colors",
                  page === num
                    ? "border-forest-deep bg-forest-deep text-white"
                    : "border-line bg-white text-slate hover:border-forest hover:bg-paper hover:text-forest-deep",
                )}
              >
                {num}
              </button>
            ))}
            <span className="px-1 text-slate">···</span>
            <a
              href={articles.externalBlogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-1.5 border-[1.5px] border-line bg-white px-3 font-montserrat text-[0.72rem] font-bold uppercase tracking-[0.06em] text-slate transition-colors hover:border-forest hover:bg-paper hover:text-forest-deep"
            >
              All
              <Icon name="arrow" className="h-2.5 w-2.5" />
            </a>
          </div>
        </div>

        <aside className="flex flex-col gap-6 lg:sticky lg:top-[calc(var(--site-nav-stack)+1.5rem)]">
          <RevealOnScroll>
            <div className="overflow-hidden border border-line bg-white">
              <div className="bg-forest-deep px-5 py-3.5 font-montserrat text-[0.72rem] font-extrabold uppercase tracking-[0.14em] text-gold">
                Popular Reads
              </div>
              <div className="px-5 py-2">
                {articles.popularPosts.map((post) => (
                  <div
                    key={post.number}
                    className="flex gap-3 border-b border-paper py-3 last:border-b-0"
                  >
                    <div className="w-7 shrink-0 text-center font-montserrat text-[1.3rem] font-black leading-none text-forest/15">
                      {post.number}
                    </div>
                    <div>
                      <a
                        href={post.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[0.84rem] font-bold leading-snug text-forest-deep hover:text-emerald"
                      >
                        {post.title}
                      </a>
                      <span className="mt-0.5 block text-[0.74rem] text-slate">{post.meta}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={1}>
            <div className="overflow-hidden border border-line bg-white">
              <div className="bg-forest-deep px-5 py-3.5 font-montserrat text-[0.72rem] font-extrabold uppercase tracking-[0.14em] text-gold">
                Browse Topics
              </div>
              <div className="flex flex-wrap gap-1.5 p-5">
                {articles.topics.map((topic) => (
                  <button
                    key={topic.id}
                    type="button"
                    onClick={() => handleTopicClick(topic.id)}
                    className="border border-line bg-paper px-3 py-1 font-montserrat text-[0.68rem] font-bold uppercase tracking-[0.08em] text-slate transition-colors hover:border-forest-deep hover:bg-forest-deep hover:text-white"
                  >
                    {topic.label}
                  </button>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={2}>
            <div className="bg-forest-deep p-6">
              <div className="font-montserrat text-[0.72rem] font-extrabold uppercase tracking-[0.14em] text-gold">
                {articles.sidebarCta.label}
              </div>
              <p className="mt-2 text-[0.86rem] leading-relaxed text-white/70">
                {articles.sidebarCta.description}
              </p>
              <Button href={articles.sidebarCta.href} className="mt-4 px-5 py-2.5 text-[0.72rem]">
                {articles.sidebarCta.buttonLabel}
                <Icon name="arrow" className="h-3.5 w-3.5" />
              </Button>
            </div>
          </RevealOnScroll>
        </aside>
      </div>
    </Section>
  );
}
