"use client";

import { useState } from "react";
import { blogPageContent, newsletterMailto } from "@/data/blog";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { cn } from "@/lib/utils";

export function NewsletterSection() {
  const { newsletter } = blogPageContent;
  const [page, setPage] = useState(1);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const currentIssues = newsletter.pages.find((p) => p.page === page)?.issues ?? newsletter.pages[0].issues;

  function handleSubscribe() {
    if (!email.includes("@")) return;
    setSubscribed(true);
  }

  return (
    <section id="newsletter" className="relative overflow-hidden bg-gradient-to-br from-forest-dark to-forest-deep">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 h-[200px] w-[200px] rounded-full border-[32px] border-white/5"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-30px] left-[30%] h-[160px] w-[160px] rounded-full border-[24px] border-gold/8"
      />

      <Container className="relative z-[1] py-[clamp(28px,3.5vw,44px)]">
        <div className="grid items-end gap-7 lg:grid-cols-2 lg:gap-12">
          <RevealOnScroll>
            <div className="inline-flex flex-col border-l-[3px] border-gold pl-3.5">
              <span className="font-montserrat text-[clamp(1.2rem,5.5vw,1.75rem)] font-black leading-none text-white md:text-[clamp(1.3rem,2.2vw,1.75rem)]">
                {newsletter.brand}
              </span>
              <span className="mt-1 font-montserrat text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-gold">
                {newsletter.tag}
              </span>
            </div>
            <h2 className="mt-4 font-montserrat text-[clamp(1.35rem,6vw,2rem)] font-extrabold leading-tight text-white md:text-[clamp(1.5rem,2.6vw,2rem)]">
              {newsletter.title}
              <em className="block not-italic text-gold">{newsletter.titleHighlight}</em>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={1}>
            <div className="font-montserrat text-[0.72rem] font-bold uppercase tracking-[0.1em] text-white/55">
              {newsletter.subscribeLabel}
            </div>
            <div className="mt-2 flex flex-col overflow-hidden rounded-lg sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={subscribed}
                placeholder="your@email.com"
                className="min-w-0 w-full flex-1 border-[1.5px] border-white/20 bg-white/8 px-4 py-3 font-outfit text-[0.88rem] text-white outline-none transition-colors focus:border-gold focus:bg-white/13 disabled:opacity-60 sm:border-r-0"
              />
              <button
                type="button"
                onClick={handleSubscribe}
                disabled={subscribed}
                className={cn(
                  "w-full whitespace-nowrap rounded-none px-5 py-3 font-montserrat text-[0.75rem] font-extrabold uppercase tracking-[0.08em] transition-colors sm:w-auto",
                  subscribed ? "bg-emerald text-white" : "bg-gold text-forest-deep hover:bg-[#e09d10]",
                )}
              >
                {subscribed ? "✓ Done" : "Subscribe"}
              </button>
            </div>
            {subscribed ? (
              <p className="mt-2 text-[0.82rem] text-gold">✓ You&apos;re subscribed - thank you!</p>
            ) : null}
            <p className="mt-2 text-[0.74rem] text-white/30">{newsletter.privacyNote}</p>
          </RevealOnScroll>
        </div>

        <div className="mt-8 sm:mt-12">
          <div className="mb-4 flex items-center gap-3 font-montserrat text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white/30 sm:mb-5">
            <span className="shrink-0">{newsletter.pastIssuesLabel}</span>
            <span className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {currentIssues.map((issue, index) => (
              <RevealOnScroll key={issue.month} delay={Math.min(index, 2) as 0 | 1 | 2}>
                <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-gold/35 hover:shadow-[0_22px_50px_-16px_rgba(0,0,0,0.4)]">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-forest-deep sm:aspect-square">
                    <ImageWithFallback
                      image={issue.coverImage}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(5,22,18,0.68)] via-[rgba(5,22,18,0.22)] to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 z-[1] px-3.5 pb-3 pt-10 sm:px-4 sm:pb-3.5 sm:pt-12">
                      <div className="font-montserrat text-[0.72rem] font-bold uppercase tracking-[0.12em] text-white/90 sm:text-[0.76rem]">
                        {issue.month}
                      </div>
                    </div>
                  </div>
                  <a
                    href={newsletterMailto(issue.mailSubject)}
                    className="flex items-center justify-center gap-2 border-t border-white/10 bg-white/8 px-4 py-3 font-montserrat text-[0.72rem] font-bold uppercase tracking-[0.1em] text-white/75 transition-colors hover:bg-gold hover:text-forest-deep sm:py-3.5"
                  >
                    Read this issue
                    <Icon name="arrow" className="h-3 w-3" />
                  </a>
                </article>
              </RevealOnScroll>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-1.5 sm:mt-6">
            {newsletter.pages.map((p) => (
              <button
                key={p.page}
                type="button"
                onClick={() => setPage(p.page)}
                className={cn(
                  "grid h-10 w-10 place-items-center rounded-lg border-[1.5px] font-montserrat text-[0.82rem] font-bold transition-colors",
                  page === p.page
                    ? "border-gold bg-gold text-forest-deep"
                    : "border-white/20 bg-white/6 text-white/55 hover:border-white/40 hover:bg-white/12 hover:text-white",
                )}
              >
                {p.page}
              </button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
