"use client";

import { brochureContent } from "@/data/home";
import { useEnquiryModal } from "@/components/layout/EnquiryModalProvider";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function BrochureBanner() {
  const { openEnquiryModal } = useEnquiryModal();

  return (
    <>
      {/* Mobile mock card */}
      <div className="bg-off-white px-5 py-6 md:hidden">
        <div className="grid grid-cols-[52px_minmax(0,1fr)] items-start gap-x-3.5 rounded-[18px] border border-off-white bg-white p-4 shadow-[0_10px_24px_-16px_rgba(0,0,0,0.2)]">
          <div
            className="grid h-[52px] w-[52px] place-items-center rounded-[14px] bg-[#fdece0] text-[1.75rem] leading-none"
            aria-hidden
          >
            🏫
          </div>
          <div className="min-w-0 pt-0.5">
            <h4 className="font-montserrat text-[0.875rem] font-bold leading-[1.3] text-navy">
              Discover Everything TACS Has to Offer
            </h4>
            <p className="mt-1 text-[0.72rem] leading-[1.4] text-[#999]">
              Download our school brochure — academics, campus life and co-curriculars.
            </p>
            <button
              type="button"
              onClick={() => openEnquiryModal("brochure")}
              className="mt-2.5 font-outfit text-[0.72rem] font-bold leading-none text-forest"
            >
              Download Brochure →
            </button>
          </div>
        </div>
      </div>

      {/* Desktop banner */}
      <div className="relative hidden min-h-[240px] w-full items-center justify-center overflow-hidden bg-forest-deep sm:min-h-[300px] md:flex">
        <div className="absolute inset-0 opacity-25">
          <ImageWithFallback image={brochureContent.background} fill sizes="100vw" />
        </div>

        <RevealOnScroll className="w-full">
          <div className="relative z-[2] mx-auto w-full max-w-[900px] px-4 py-10 text-center sm:py-16">
            <h2 className="mb-3 font-montserrat text-[clamp(1.45rem,6.5vw,2.8rem)] font-black leading-tight text-white whitespace-normal md:whitespace-nowrap">
              {brochureContent.titleLine1}{" "}
              <span className="text-gold">{brochureContent.titleHighlight}</span>{" "}
              {brochureContent.titleLine2}
            </h2>
            <p className="mx-auto mb-6 max-w-[40ch] text-[0.95rem] text-white/72 sm:mb-8 sm:max-w-none sm:text-[1.02rem]">
              {brochureContent.description}
            </p>
            <Button
              href={brochureContent.cta.href}
              className="w-full max-w-xs justify-center shadow-[0_10px_30px_rgba(246,171,22,0.35)] sm:w-auto"
            >
              <Icon name="download" className="h-4 w-4" />
              {brochureContent.cta.label}
            </Button>
          </div>
        </RevealOnScroll>
      </div>
    </>
  );
}
