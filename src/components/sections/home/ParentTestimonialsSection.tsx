"use client";

import { parentTestimonialsContent } from "@/data/home";
import { CtaLink } from "@/components/sections/shared/CtaLink";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";
import { InstagramLogo } from "@/components/ui/InstagramLogo";
import { Section } from "@/components/ui/Section";
import type { ParentTestimonial } from "@/types";
import { cn } from "@/lib/utils";

function ParentTestimonialCard({ testimonial }: { testimonial: ParentTestimonial }) {
  return (
    <a
      href={testimonial.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-[min(76vw,248px)] shrink-0 overflow-hidden rounded-lg bg-white shadow-[0_12px_40px_-20px_rgba(15,61,56,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-18px_rgba(15,61,56,0.22)]"
      aria-label={`Watch ${testimonial.name}'s story on Instagram`}
    >
      <div className="relative aspect-[9/16] overflow-hidden bg-black">
        <div className={cn("absolute inset-0", testimonial.cropBorder && "scale-[1.08]")}>
          <ImageWithFallback
            image={testimonial.image}
            fill
            sizes="248px"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>
        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-black/45 px-2.5 py-1 font-montserrat text-[0.6rem] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
          <InstagramLogo className="h-3.5 w-3.5" />
          Reel
        </span>
        <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-forest-deep shadow-lg transition-transform duration-300 group-hover:scale-110">
          <svg viewBox="0 0 24 24" className="ml-0.5 h-4 w-4 fill-current" aria-hidden="true">
            <path d="M8 5.14v13.72c0 .79.87 1.27 1.54.84l11.04-6.86a1 1 0 0 0 0-1.7L9.54 4.3A1 1 0 0 0 8 5.14Z" />
          </svg>
        </span>
        <blockquote className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent px-3 pb-3 pt-14">
          <p className="text-[0.84rem] font-medium leading-snug text-white drop-shadow-sm">&ldquo;{testimonial.quote}&rdquo;</p>
        </blockquote>
      </div>
      <div className="border-t border-line px-3 py-3">
        <p className="text-[0.9rem] font-bold text-forest-deep">{testimonial.name}</p>
        <p className="mt-0.5 font-montserrat text-[0.64rem] font-bold uppercase tracking-[0.12em] text-slate">
          {testimonial.role}
        </p>
      </div>
    </a>
  );
}

export function ParentTestimonialsSection() {
  const { testimonials } = parentTestimonialsContent;
  const trackItems = [...testimonials, ...testimonials];

  return (
    <Section id="parents" background="white" className="overflow-hidden">
      <SectionHeader
        label={parentTestimonialsContent.label}
        title={parentTestimonialsContent.title}
        description={parentTestimonialsContent.description}
        className="mb-7 sm:mb-9"
        action={
          <CtaLink href={parentTestimonialsContent.instagram.href} external className="shrink-0">
            <InstagramLogo className="h-4 w-4 shrink-0" />
            {parentTestimonialsContent.instagram.label}
          </CtaLink>
        }
      />

      <div className="relative left-1/2 w-screen max-w-none -translate-x-1/2">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-16 bg-gradient-to-r from-forest-deep via-forest-deep/70 to-transparent sm:w-24"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-[2] w-16 bg-gradient-to-l from-forest-deep via-forest-deep/70 to-transparent sm:w-24"
          aria-hidden="true"
        />

        <div className="overflow-hidden py-4 sm:py-5">
          <div className={cn("parent-marquee-track flex w-max gap-4 px-5 sm:gap-5 sm:px-7")}>
            {trackItems.map((testimonial, index) => (
              <ParentTestimonialCard key={`${testimonial.href}-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
