import { brochureContent } from "@/data/home";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function BrochureBanner() {
  return (
    <div className="relative flex min-h-[240px] w-full items-center justify-center overflow-hidden bg-forest-deep sm:min-h-[300px]">
      <div className="absolute inset-0 opacity-25">
        <ImageWithFallback image={brochureContent.background} fill sizes="100vw" />
      </div>

      <RevealOnScroll className="w-full">
        <div className="relative z-[2] mx-auto w-full max-w-[900px] px-4 py-10 text-center sm:py-16">
          <h2 className="mb-3 font-montserrat text-[clamp(1.45rem,6.5vw,2.8rem)] font-black leading-tight text-white whitespace-normal md:whitespace-nowrap">
            {brochureContent.titleLine1}{" "}
            <span className="text-gold">{brochureContent.titleHighlight}</span> {brochureContent.titleLine2}
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
  );
}
