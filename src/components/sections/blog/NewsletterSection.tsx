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
              {newsletter.title}{" "}
              <em className="not-italic text-gold">{newsletter.titleHighlight}</em>
            </h2>
            <p className="mt-2 max-w-[40ch] text-[0.93rem] leading-relaxed text-white/60">
              {newsletter.description}
            </p>
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
                <article className="flex h-full flex-col overflow-hidden border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-gold/35 hover:shadow-[0_22px_50px_-16px_rgba(0,0,0,0.4)]">
                  <div className="relative aspect-video overflow-hidden">
                    <div className="absolute inset-0" style={{ background: issue.gradient }}>
                      <div className="absolute inset-0 z-[2] flex flex-col justify-end p-4">
                        <div className="font-montserrat text-[0.6rem] font-black uppercase tracking-[0.2em] text-white/50">
                          {newsletter.brand}
                        </div>
                        <div className="mt-1 font-montserrat text-[0.7rem] font-bold uppercase tracking-[0.12em] text-gold">
                          {issue.issue}
                        </div>
                        <div className="mt-2 font-montserrat text-base font-extrabold leading-tight text-white">
                          {issue.coverHeadline}
                        </div>
                        <span
                          className="mt-2 inline-block w-fit px-2.5 py-1 font-montserrat text-[0.6rem] font-bold uppercase tracking-[0.1em] text-white"
                          style={{ background: issue.coverTagBg }}
                        >
                          {issue.coverTag}
                        </span>
                      </div>
                      <ImageWithFallback
                        image={issue.coverImage}
                        fill
                        sizes="(min-width: 1024px) 33vw, 100vw"
                        className="object-cover opacity-[0.18] transition-opacity duration-400 group-hover:opacity-[0.26]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-4">
                    <div className="font-montserrat text-[0.65rem] font-bold uppercase tracking-[0.14em] text-white/40">
                      {issue.month}
                    </div>
                    <h4 className="text-[0.9rem] font-bold leading-snug text-white">{issue.title}</h4>
                    <p className="flex-1 text-[0.8rem] leading-relaxed text-white/52">{issue.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {issue.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-white/10 bg-white/7 px-2 py-0.5 font-montserrat text-[0.6rem] font-semibold uppercase tracking-[0.1em] text-white/45"
                        >
                          {tag}
                        </span>
                      ))}
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
                  "grid h-10 w-10 place-items-center border-[1.5px] font-montserrat text-[0.82rem] font-bold transition-colors",
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
