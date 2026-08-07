import { admissionsPageContent } from "@/data/admissions";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function ClaritySection() {
  const { clarity } = admissionsPageContent;

  return (
    <section id="clarity" className="bg-white pb-[clamp(28px,3.5vw,44px)]">
      <RevealOnScroll>
        <div className="relative w-full min-h-[420px] overflow-hidden">
          <div className="absolute inset-0 bg-forest-deep">
            <ImageWithFallback image={clarity.image} fill sizes="100vw" />
            <div className="absolute inset-0 bg-[rgba(5,22,18,0.18)]" />
            <div className="absolute inset-x-0 bottom-0 h-[min(72%,28rem)] bg-gradient-to-t from-[rgba(5,22,18,0.98)] via-[rgba(5,22,18,0.82)] to-transparent" />
          </div>

          <div className="relative z-[1] flex min-h-[420px] flex-col items-center justify-end px-[4vw] py-[clamp(2rem,4vw,3.5rem)] text-center">
            <h3 className="font-montserrat text-[clamp(1.4rem,2.4vw,1.9rem)] font-extrabold text-white">
              {clarity.heading}
            </h3>
            <div className="mt-2 text-[0.94rem] leading-relaxed text-white/65">
              {clarity.description.map((line) => (
                <p key={line} className="whitespace-nowrap">
                  {line}
                </p>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button href={clarity.visitCta.href} className="px-7 py-3 text-[0.78rem]">
                {clarity.visitCta.label}
                <Icon name="arrow" className="h-3.5 w-3.5" />
              </Button>
              <Button
                href={clarity.whatsapp.href}
                external
                variant="outline-white"
                className="px-7 py-3 text-[0.78rem]"
              >
                <Icon name="whatsapp" className="h-3.5 w-3.5" />
                {clarity.whatsapp.label}
              </Button>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
