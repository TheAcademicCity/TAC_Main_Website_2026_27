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

      <Container className="relative z-[1] py-[clamp(3rem,6vw,5rem)]">
        <div className="grid items-end gap-12 lg:grid-cols-2">
          <RevealOnScroll>
            <div className="inline-flex flex-col border-l-[3px] border-gold pl-3.5">
              <span className="font-montserrat text-[clamp(1.3rem,2.2vw,1.75rem)] font-black leading-none text-white">
                {newsletter.brand}
              </span>
              <span className="mt-1 font-montserrat text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-gold">
                {newsletter.tag}
              </span>
            </div>
            <h2 className="mt-4 font-montserrat text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold text-white">
              {newsletter.title}
              <em className="block not-italic text-gold">{newsletter.titleHighlight}</em>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={1}>
            <div className="font-montserrat text-[0.72rem] font-bold uppercase tracking-[0.1em] text-white/55">
              {newsletter.subscribeLabel}
            </div>
            <div className="mt-2 flex overflow-hidden rounded-lg">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={subscribed}
                placeholder="your@email.com"
                className="min-w-0 flex-1 border-[1.5px] border-white/20 bg-white/8 px-4 py-3 font-outfit text-[0.88rem] text-white outline-none transition-colors focus:border-gold focus:bg-white/13 disabled:opacity-60"
              />
              <button
                type="button"
                onClick={handleSubscribe}
                disabled={subscribed}
                className={cn(
                  "whitespace-nowrap rounded-none px-5 py-3 font-montserrat text-[0.75rem] font-extrabold uppercase tracking-[0.08em] transition-colors",
                  subscribed ? "bg-emerald text-white" : "bg-gold text-forest-deep hover:bg-[#e09d10]",
                )}
              >
                {subscribed ? "✓ Done" : "Subscribe"}
              </button>
            </div>
            {subscribed ? (
              <p className="mt-2 text-[0.82rem] text-gold">✓ You&apos;re subscribed — thank you!</p>
            ) : null}
            <p className="mt-2 text-[0.74rem] text-white/30">{newsletter.privacyNote}</p>
          </RevealOnScroll>
        </div>

        <div className="mt-12">
          <div className="mb-5 flex items-center gap-3 font-montserrat text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white/30">
            <span className="shrink-0">{newsletter.pastIssuesLabel}</span>
            <span className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {currentIssues.map((issue, index) => (
              <RevealOnScroll key={issue.month} delay={Math.min(index, 2) as 0 | 1 | 2}>
                <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-gold/35 hover:shadow-[0_22px_50px_-16px_rgba(0,0,0,0.4)]">
                  <div className="relative aspect-square w-full overflow-hidden bg-forest-deep">
                    <ImageWithFallback
                      image={issue.coverImage}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(5,22,18,0.68)] via-[rgba(5,22,18,0.22)] to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 z-[1] px-4 pb-3.5 pt-12">
                      <div className="font-montserrat text-[0.76rem] font-bold uppercase tracking-[0.12em] text-white/90">
                        {issue.month}
                      </div>
                    </div>
                  </div>
                  <a
                    href={newsletterMailto(issue.mailSubject)}
                    className="flex items-center justify-center gap-2 border-t border-white/10 bg-white/8 px-4 py-3.5 font-montserrat text-[0.72rem] font-bold uppercase tracking-[0.1em] text-white/75 transition-colors hover:bg-gold hover:text-forest-deep"
                  >
                    Read this issue
                    <Icon name="arrow" className="h-3 w-3" />
                  </a>
                </article>
              </RevealOnScroll>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-1.5">
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
