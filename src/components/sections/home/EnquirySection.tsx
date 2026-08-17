"use client";

import { Suspense } from "react";
import { enquiryContent } from "@/data/home";
import { useEnquiryModal } from "@/components/layout/EnquiryModalProvider";
import { EnquiryForm } from "@/components/sections/shared/EnquiryForm";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";

function EnquiryFormFallback() {
  return (
    <div className="rounded-xl border border-line bg-white p-4 shadow-[0_24px_60px_-32px_rgba(15,61,56,0.28)] sm:p-5">
      <div className="h-5 w-40 animate-pulse rounded bg-line" />
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="h-10 animate-pulse rounded-lg bg-line" />
        <div className="h-10 animate-pulse rounded-lg bg-line" />
      </div>
      <div className="mt-4 h-10 animate-pulse rounded-lg bg-line" />
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="h-10 animate-pulse rounded-lg bg-line" />
        <div className="h-10 animate-pulse rounded-lg bg-line" />
      </div>
      <div className="mt-4 h-10 animate-pulse rounded-lg bg-line" />
    </div>
  );
}

export function EnquirySection() {
  const { openEnquiryModal } = useEnquiryModal();

  return (
    <Section
      id="enquiry"
      background="paper"
      className="section-py-compact relative overflow-hidden !pt-[clamp(28px,3.5vw,44px)] max-md:!bg-white"
    >
      {/* Mobile violet CTA card */}
      <div className="rounded-[22px] bg-gradient-to-br from-violet to-[#3d0d63] px-[22px] py-[26px] text-center text-white md:hidden">
        <h3 className="mb-2 font-montserrat text-[1.2rem] font-bold">
          Craft a Happy Future for Your Child
        </h3>
        <p className="mb-[18px] text-[0.78rem] text-[#e6d3f2]">
          Talk to our admissions team today — we&apos;ll guide you through every step.
        </p>
        <button
          type="button"
          onClick={() => openEnquiryModal("general")}
          className="block w-full rounded-[30px] bg-gold px-5 py-3.5 font-outfit text-[0.8rem] font-bold text-navy"
        >
          Start Your Journey
        </button>
      </div>

      {/* Desktop form + image */}
      <div className="hidden items-stretch gap-6 md:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:gap-8">
        <div className="min-w-0">
          <RevealOnScroll>
            <SectionHeader
              label={enquiryContent.label}
              title={enquiryContent.title}
              className="mb-4 max-w-xl text-left [&_h2]:text-[clamp(1.25rem,2.2vw,1.7rem)]"
            />
          </RevealOnScroll>

          <RevealOnScroll delay={1}>
            <Suspense fallback={<EnquiryFormFallback />}>
              <EnquiryForm compact className="!p-3.5 sm:!p-4" />
            </Suspense>
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={2} className="relative min-h-[180px] sm:min-h-[220px] lg:min-h-0">
          <div className="absolute inset-0 overflow-hidden rounded-lg">
            <ImageWithFallback
              image={enquiryContent.image}
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-[18%_center]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/35 via-transparent to-transparent" />
          </div>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
