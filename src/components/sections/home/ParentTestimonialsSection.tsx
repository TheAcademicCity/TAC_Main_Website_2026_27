"use client";

import { useEffect, useRef, useState } from "react";
import { parentTestimonialsContent } from "@/data/home";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import type { ParentTestimonial } from "@/types";
import { cn } from "@/lib/utils";

const CARD_SCROLL_AMOUNT = 236;

const IG_PATH =
  "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d={IG_PATH} fill="currentColor" />
    </svg>
  );
}

function ParentTestimonialCard({ testimonial }: { testimonial: ParentTestimonial }) {
  return (
    <a
      href={testimonial.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex w-[220px] shrink-0 snap-start flex-col overflow-hidden rounded-[4px] border border-line bg-white no-underline shadow-[0_12px_36px_-20px_rgba(15,61,56,0.28)] transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(.22,.61,.36,1)] hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-[0_20px_48px_-16px_rgba(15,61,56,0.22)]"
      aria-label={`Watch ${testimonial.name}'s story on Instagram`}
    >
      <div className="relative h-[140px] shrink-0 overflow-hidden bg-forest-deep">
        <div className={cn("absolute inset-0", testimonial.cropBorder && "scale-[1.08]")}>
          <ImageWithFallback
            image={testimonial.image}
            fill
            sizes="220px"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>

        <span className="absolute right-2.5 top-2.5 z-[3] grid h-[26px] w-[26px] place-items-center rounded-full bg-[linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)]">
          <InstagramIcon className="h-3 w-3 text-white" />
        </span>

        <div className="absolute inset-0 z-[4] grid place-items-center bg-black/15 transition-colors duration-250 group-hover:bg-black/30">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-white/92 shadow-md transition-transform duration-300 group-hover:scale-110">
            <svg viewBox="0 0 24 24" className="ml-0.5 h-[0.95rem] w-[0.95rem] fill-forest-deep" aria-hidden>
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-1.5 px-4 pb-4 pt-3.5">
        <div className="flex flex-col gap-0.5">
          <p className="font-montserrat text-[0.85rem] font-extrabold leading-snug text-forest-deep">
            {testimonial.name}
          </p>
          <p className="text-[0.72rem] leading-snug text-slate">{testimonial.role}</p>
          <p className="text-[0.72rem] leading-snug text-slate">{testimonial.detail}</p>
        </div>
        <p className="mt-0.5 text-[0.78rem] italic leading-normal text-ink/70">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>
    </a>
  );
}

function ScrollArrow({
  direction,
  onClick,
  disabled,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "prev" ? "Previous stories" : "Next stories"}
      className={cn(
        "grid h-10 w-10 place-items-center rounded-full border border-line bg-white text-forest-deep shadow-[0_8px_20px_-12px_rgba(15,61,56,0.35)] transition-[opacity,transform,background-color,border-color] duration-200",
        "hover:border-gold hover:bg-gold/10 disabled:pointer-events-none disabled:opacity-30",
      )}
    >
      <Icon
        name="arrow"
        className={cn("h-4 w-4", direction === "prev" && "rotate-180")}
      />
    </button>
  );
}

export function ParentTestimonialsSection() {
  const { testimonials, label, title, titleHighlight } = parentTestimonialsContent;
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateScrollState = () => {
    const el = scrollerRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanScrollPrev(el.scrollLeft > 4);
    setCanScrollNext(el.scrollLeft < maxScroll - 4);
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scrollByCard = (direction: "prev" | "next") => {
    scrollerRef.current?.scrollBy({
      left: direction === "next" ? CARD_SCROLL_AMOUNT : -CARD_SCROLL_AMOUNT,
      behavior: "smooth",
    });
  };

  return (
    <section id="parents" className="relative overflow-hidden bg-paper pt-[clamp(28px,3.5vw,44px)] pb-[clamp(2rem,3.5vw,3rem)]">
      <Container className="relative z-[1] max-w-[1200px]">
        <div className="mb-6">
          <span className="mb-2 inline-flex items-center gap-2 font-montserrat text-[0.7rem] font-extrabold uppercase tracking-[0.22em] text-emerald before:h-0.5 before:w-6 before:bg-gold before:content-['']">
            {label}
          </span>
          <h2 className="mt-1 font-montserrat text-[clamp(1.5rem,2.8vw,2.2rem)] font-black leading-tight text-forest-deep">
            {title} <em className="not-italic text-emerald">{titleHighlight}</em>
          </h2>
        </div>

        <div className="relative flex items-center gap-4 sm:gap-5 lg:-mx-3 lg:gap-6 xl:-mx-5">
          <ScrollArrow
            direction="prev"
            onClick={() => scrollByCard("prev")}
            disabled={!canScrollPrev}
          />

          <div
            ref={scrollerRef}
            className="flex min-w-0 flex-1 snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((testimonial) => (
              <ParentTestimonialCard key={testimonial.href} testimonial={testimonial} />
            ))}
          </div>

          <ScrollArrow
            direction="next"
            onClick={() => scrollByCard("next")}
            disabled={!canScrollNext}
          />
        </div>
      </Container>
    </section>
  );
}
