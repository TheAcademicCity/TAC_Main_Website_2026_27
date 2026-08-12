"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { campusContent } from "@/data/home";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { StatItem } from "@/components/sections/shared/StatItem";
import { TabGroup } from "@/components/sections/shared/TabGroup";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const AUTO_ROTATE_MS = 8000;

export function CampusSliderSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = campusContent.slides;

  const goToSlide = useCallback((index: number) => {
    setActiveIndex((index + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, AUTO_ROTATE_MS);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="campus" className="section-py-feature bg-white !pt-[clamp(28px,3.5vw,44px)]">
      <Container>
        <SectionHeader
          label={campusContent.label}
          title="Two Campuses. One Philosophy."
          centered
          className="mb-6 max-md:mb-4 max-md:text-left max-md:[&_h2]:text-[1.3rem] max-md:[&_span]:before:hidden max-md:[&_span]:text-[0.62rem] max-md:[&_span]:tracking-[0.14em] max-md:[&_span]:text-emerald md:mb-10"
        />
      </Container>

      {/* Mobile toggle + card */}
      <Container className="md:hidden">
        <div className="mb-4 flex rounded-[30px] bg-off-white p-1">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => goToSlide(index)}
              className={cn(
                "flex-1 rounded-[26px] py-2.5 font-outfit text-[0.78rem] font-bold transition-colors",
                index === activeIndex ? "bg-forest text-white" : "bg-transparent text-charcoal",
              )}
            >
              {slide.name}
            </button>
          ))}
        </div>

        {slides[activeIndex] ? (
          <article className="overflow-hidden rounded-[22px] border border-forest/15 bg-gradient-to-br from-forest-deep via-forest to-[#0a2e29] text-white shadow-[0_18px_44px_-22px_rgba(14,57,52,0.6)]">
            <div className="relative h-[148px] overflow-hidden">
              <ImageWithFallback
                image={slides[activeIndex].image}
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/40 to-transparent"
                aria-hidden
              />
            </div>

            <div className="px-5 pb-5 pt-4">
              <h4 className="mb-1.5 font-montserrat text-[1.125rem] font-bold leading-snug tracking-tight">
                {slides[activeIndex].title}
              </h4>
              <p className="mb-4 text-[0.78rem] leading-relaxed text-white/72">
                {slides[activeIndex].description}
              </p>

              <div className="mb-4 grid grid-cols-2 gap-2">
                {slides[activeIndex].facts
                  .filter((f) => !f.featured)
                  .slice(0, 4)
                  .map((fact) => (
                    <div
                      key={fact.label}
                      className="rounded-[12px] border border-white/10 bg-white/[0.07] px-2.5 py-2.5"
                    >
                      <b className="block font-montserrat text-[0.78rem] leading-snug text-white">
                        {fact.value}
                      </b>
                      <span className="mt-0.5 block text-[0.62rem] leading-snug text-white/60">
                        {fact.label}
                      </span>
                    </div>
                  ))}
              </div>

              <div className="mb-4 rounded-[14px] border border-white/12 bg-white/[0.06] px-3.5 py-3.5">
                <p className="mb-3 font-outfit text-[0.6rem] font-bold uppercase tracking-[0.1em] text-white">
                  {slides[activeIndex].academicPartners.label}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
                  {slides[activeIndex].academicPartners.logos.map((logo) => (
                    <Image
                      key={logo.src}
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.width ?? 140}
                      height={logo.height ?? 40}
                      className={cn(
                        "h-7 w-auto max-w-[140px] object-contain",
                        "className" in logo ? logo.className : undefined,
                      )}
                    />
                  ))}
                </div>
              </div>

              <Button
                href={slides[activeIndex].cta.href}
                external={slides[activeIndex].cta.href.startsWith("http")}
                className="w-full justify-center rounded-[30px] py-3.5 font-outfit text-[0.8125rem] font-bold normal-case tracking-normal"
              >
                {slides[activeIndex].cta.label}
              </Button>
            </div>
          </article>
        ) : null}
      </Container>

      <RevealOnScroll className="hidden md:block">
        <div className="relative w-full overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={cn(
                "relative min-h-[min(520px,100svh)] md:min-h-[580px]",
                index === activeIndex ? "flex items-end" : "hidden",
              )}
              aria-hidden={index !== activeIndex}
            >
              <div className="absolute inset-0 bg-forest-deep">
                <ImageWithFallback image={slide.image} fill sizes="100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,22,18,0.97)] via-[rgba(5,22,18,0.75)] to-[rgba(5,22,18,0.2)]" />
              </div>

              <span className="absolute right-4 top-5 z-[5] max-w-[calc(100%-2rem)] truncate bg-gold px-3 py-1 font-montserrat text-[0.68rem] font-extrabold uppercase tracking-widest text-forest-deep sm:right-[4vw]">
                {campusContent.badge}
              </span>

              <Container className="relative z-[2] grid w-full items-end gap-5 pt-10 pb-24 md:pb-[4.75rem] lg:grid-cols-[1fr_1fr] lg:gap-10 lg:pt-14">
                <div className="self-end">
                  <p className="mb-2 inline-flex items-center gap-2 font-montserrat text-[0.72rem] font-extrabold uppercase tracking-[0.22em] text-gold before:h-0.5 before:w-7 before:bg-gold before:content-['']">
                    {slide.label}
                  </p>
                  <h2 className="mb-3 font-montserrat text-[clamp(1.55rem,6.5vw,2.6rem)] font-black leading-tight text-white">
                    {slide.title}
                  </h2>
                  <p className="max-w-[44ch] text-[0.92rem] leading-relaxed text-white/70 sm:text-[0.96rem]">
                    {slide.description}
                  </p>
                </div>

                <div className="-mt-3 flex w-full flex-col gap-5 lg:-mt-5">
                  <div
                    className={cn(
                      "gap-2",
                      slide.facts.some((fact) => fact.featured)
                        ? "flex flex-col items-start"
                        : "flex flex-wrap items-start",
                    )}
                  >
                    {slide.facts.some((fact) => fact.featured) ? (
                      (() => {
                        const featuredFacts = slide.facts.filter((fact) => fact.featured);
                        const otherFacts = slide.facts.filter((fact) => !fact.featured);
                        const topCompanion = otherFacts[0];
                        const [mealsFact, hostelsFact, curriculumFact] = otherFacts.slice(1);

                        return (
                          <div className="grid w-full max-w-full grid-cols-2 items-stretch gap-2 sm:w-max sm:grid-cols-[auto_auto_auto] sm:grid-rows-[1fr_1fr]">
                            <div className="col-span-2 col-start-1 row-start-1 h-full min-w-0 sm:col-span-2">
                              {featuredFacts.map((fact) => (
                                <StatItem key={fact.label} item={fact} variant="card" fill />
                              ))}
                            </div>
                            {topCompanion ? (
                              <StatItem
                                key={topCompanion.label}
                                item={{ ...topCompanion, featured: true }}
                                variant="card"
                                className="col-span-2 row-start-2 h-full w-full sm:col-span-1 sm:col-start-3 sm:row-start-1"
                              />
                            ) : null}
                            {mealsFact ? (
                              <StatItem
                                key={mealsFact.label}
                                item={mealsFact}
                                variant="card"
                                className="col-start-1 row-start-3 h-full sm:row-start-2"
                              />
                            ) : null}
                            {hostelsFact ? (
                              <StatItem
                                key={hostelsFact.label}
                                item={hostelsFact}
                                variant="card"
                                className="col-start-2 row-start-3 h-full sm:row-start-2"
                              />
                            ) : null}
                            {curriculumFact ? (
                              <StatItem
                                key={curriculumFact.label}
                                item={{ ...curriculumFact, featured: true }}
                                variant="card"
                                className="col-span-2 row-start-4 h-full w-full sm:col-span-1 sm:col-start-3 sm:row-start-2"
                              />
                            ) : null}
                          </div>
                        );
                      })()
                    ) : (
                      slide.facts.map((fact) => (
                        <StatItem key={fact.label} item={fact} variant="card" />
                      ))
                    )}
                  </div>

                  <div>
                    <p className="mb-3 font-montserrat text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white/65">
                      {slide.academicPartners.label}
                    </p>
                    <div className="flex flex-wrap items-center gap-5">
                      {slide.academicPartners.logos.map((logo) => (
                        <Image
                          key={logo.src}
                          src={logo.src}
                          alt={logo.alt}
                          width={logo.width ?? 140}
                          height={logo.height ?? 40}
                          className={cn(
                            "h-7 w-auto object-contain object-left",
                            "className" in logo ? logo.className : undefined,
                          )}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex w-full flex-col gap-3 self-stretch sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:self-start">
                    <Button
                      href={slide.cta.href}
                      external={slide.cta.href.startsWith("mailto:")}
                      className="w-full justify-center text-[0.82rem] sm:w-auto"
                    >
                      {slide.cta.label}
                      <Icon name="arrow" className="h-3.5 w-3.5" />
                    </Button>
                    {slide.campusVideo ? (
                      <Button
                        href={slide.campusVideo.href}
                        variant="outline-white"
                        className="w-full justify-center text-[0.82rem] sm:w-auto"
                      >
                        {slide.campusVideo.label}
                      </Button>
                    ) : null}
                  </div>
                </div>
              </Container>
            </div>
          ))}

          <div className="absolute inset-x-0 bottom-0 z-10">
            <Container>
              <TabGroup
                tabs={slides.map((slide, index) => ({ id: String(index), label: slide.name }))}
                activeId={String(activeIndex)}
                onChange={(id) => goToSlide(Number(id))}
                variant="panel"
              />
            </Container>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
