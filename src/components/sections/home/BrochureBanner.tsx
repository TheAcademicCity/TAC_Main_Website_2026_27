import { brochureContent } from "@/data/home";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function BrochureBanner() {
  return (
    <div className="relative flex min-h-[300px] w-full items-center justify-center overflow-hidden bg-forest-deep">
      <div className="absolute inset-0 opacity-25">
        <ImageWithFallback image={brochureContent.background} fill sizes="100vw" />
      </div>

      <RevealOnScroll className="w-full">
        <div className="relative z-[2] mx-auto w-full max-w-[900px] px-4 py-16 text-center">
          <h2 className="mb-3 whitespace-nowrap font-montserrat text-[clamp(1.8rem,3.5vw,2.8rem)] font-black text-white">
            {brochureContent.titleLine1}{" "}
            <span className="text-gold">{brochureContent.titleHighlight}</span> {brochureContent.titleLine2}
          </h2>
          <p className="mb-8 text-[1.02rem] text-white/72">{brochureContent.description}</p>
          <Button
            href={brochureContent.cta.href}
            className="shadow-[0_10px_30px_rgba(246,171,22,0.35)]"
          >
            <Icon name="download" className="h-4 w-4" />
            {brochureContent.cta.label}
          </Button>
        </div>
      </RevealOnScroll>
    </div>
  );
}
