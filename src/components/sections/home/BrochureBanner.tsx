"use client";

import { brochureContent } from "@/data/home";
import { useEnquiryModal } from "@/components/layout/EnquiryModalProvider";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const bannerBg = "bg-[rgb(10,44,40)]";

export function BrochureBanner() {
  const { openEnquiryModal } = useEnquiryModal();

  return (
    <>
      {/* Mobile */}
      <div className={`${bannerBg} px-5 py-8 md:hidden`}>
        <RevealOnScroll>
          <div className="text-center">
            <h2 className="font-montserrat text-[1.15rem] font-black leading-tight text-white">
              {brochureContent.titleLine1}{" "}
              <span className="text-gold">{brochureContent.titleHighlight}</span>{" "}
              {brochureContent.titleLine2}
            </h2>
            <p className="mx-auto mt-2 max-w-[36ch] text-[0.78rem] leading-normal text-white/72">
              {brochureContent.description}
            </p>
            <button
              type="button"
              onClick={() => openEnquiryModal("brochure")}
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-gold px-5 py-2.5 font-montserrat text-[0.72rem] font-extrabold uppercase tracking-[0.08em] text-forest-deep shadow-[0_10px_30px_rgba(246,171,22,0.35)]"
            >
              <Icon name="download" className="h-3.5 w-3.5" />
              {brochureContent.cta.label}
            </button>
          </div>
        </RevealOnScroll>
      </div>

      {/* Desktop banner */}
      <div
        className={`relative hidden min-h-[240px] w-full items-center justify-center overflow-hidden sm:min-h-[300px] md:flex ${bannerBg}`}
      >
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
