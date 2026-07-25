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
    <section id="campus" className="section-py-feature bg-paper">
      <Container>
        <SectionHeader
          label={campusContent.label}
          title={campusContent.title}
          centered
          className="mb-10"
        />
      </Container>

      <RevealOnScroll>
        <div className="relative w-full overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={cn(
                "relative min-h-[580px]",
                index === activeIndex ? "flex items-end" : "hidden",
              )}
              aria-hidden={index !== activeIndex}
            >
              <div className="absolute inset-0 bg-forest-deep">
                <ImageWithFallback image={slide.image} fill sizes="100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,22,18,0.97)] via-[rgba(5,22,18,0.75)] to-[rgba(5,22,18,0.2)]" />
              </div>

              <span className="absolute right-[4vw] top-5 z-[5] bg-gold px-3 py-1 font-montserrat text-[0.68rem] font-extrabold uppercase tracking-widest text-forest-deep">
                {campusContent.badge}
              </span>

              <Container className="relative z-[2] grid w-full items-end gap-8 pt-10 pb-[4.75rem] lg:grid-cols-[1fr_1fr] lg:gap-10 lg:pt-14">
                <div className="self-end">
                  <p className="mb-2 inline-flex items-center gap-2 font-montserrat text-[0.72rem] font-extrabold uppercase tracking-[0.22em] text-gold before:h-0.5 before:w-7 before:bg-gold before:content-['']">
                    {slide.label}
                  </p>
                  <h2 className="mb-3 font-montserrat text-[clamp(1.7rem,3.5vw,2.6rem)] font-black leading-tight text-white">
                    {slide.title}
                  </h2>
                  <p className="max-w-[44ch] text-[0.96rem] leading-relaxed text-white/70">
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
                          <div className="grid w-max grid-cols-[auto_auto_auto] grid-rows-[1fr_1fr] items-stretch gap-2">
                            {mealsFact ? (
                              <StatItem
                                key={mealsFact.label}
                                item={mealsFact}
                                variant="card"
                                className="col-start-1 row-start-2 h-full"
                              />
                            ) : null}
                            {hostelsFact ? (
                              <StatItem
                                key={hostelsFact.label}
                                item={hostelsFact}
                                variant="card"
                                className="col-start-2 row-start-2 h-full"
                              />
                            ) : null}
                            {curriculumFact ? (
                              <StatItem
                                key={curriculumFact.label}
                                item={{ ...curriculumFact, featured: true }}
                                variant="card"
                                className="col-start-3 row-start-2 h-full w-full"
                              />
                            ) : null}
                            <div className="col-span-2 col-start-1 row-start-1 h-full min-w-0">
                              {featuredFacts.map((fact) => (
                                <StatItem key={fact.label} item={fact} variant="card" fill />
                              ))}
                            </div>
                            {topCompanion ? (
                              <StatItem
                                key={topCompanion.label}
                                item={{ ...topCompanion, featured: true }}
                                variant="card"
                                className="col-start-3 row-start-1 h-full w-full"
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

                  <div className="flex flex-wrap items-center gap-3 self-start">
                    <Button
                      href={slide.cta.href}
                      external={slide.cta.href.startsWith("mailto:")}
                      className="text-[0.82rem]"
                    >
                      {slide.cta.label}
                      <Icon name="arrow" className="h-3.5 w-3.5" />
                    </Button>
                    {slide.campusVideo ? (
                      <Button
                        href={slide.campusVideo.href}
                        variant="outline-white"
                        className="text-[0.82rem]"
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
