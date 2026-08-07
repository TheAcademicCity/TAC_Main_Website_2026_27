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
        <div className="relative w-full min-h-[min(360px,70svh)] overflow-hidden sm:min-h-[420px]">
          <div className="absolute inset-0 bg-forest-deep">
            <ImageWithFallback image={clarity.image} fill sizes="100vw" />
            <div className="absolute inset-0 bg-[rgba(5,22,18,0.18)]" />
            <div className="absolute inset-x-0 bottom-0 h-[min(78%,28rem)] bg-gradient-to-t from-[rgba(5,22,18,0.98)] via-[rgba(5,22,18,0.82)] to-transparent" />
          </div>

          <div className="relative z-[1] flex min-h-[min(360px,70svh)] flex-col items-center justify-end px-4 py-[clamp(1.5rem,4vw,3.5rem)] text-center sm:min-h-[420px] sm:px-[4vw]">
            <h3 className="max-w-[22ch] font-montserrat text-[clamp(1.3rem,5.5vw,1.9rem)] font-extrabold leading-tight text-white md:text-[clamp(1.4rem,2.4vw,1.9rem)]">
              {clarity.heading}
            </h3>
            <div className="mt-2 max-w-[40ch] text-[0.9rem] leading-relaxed text-white/65 sm:max-w-none sm:text-[0.94rem]">
              {clarity.description.map((line) => (
                <p key={line} className="whitespace-normal px-1 lg:whitespace-nowrap">
                  {line}
                </p>
              ))}
            </div>

            <div className="mt-5 flex w-full max-w-sm flex-col gap-3 sm:mt-6 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center">
              <Button
                href={clarity.visitCta.href}
                className="w-full justify-center px-7 py-3 text-[0.78rem] sm:w-auto"
              >
                {clarity.visitCta.label}
                <Icon name="arrow" className="h-3.5 w-3.5" />
              </Button>
              <Button
                href={clarity.whatsapp.href}
                external
                variant="outline-white"
                className="w-full justify-center px-7 py-3 text-[0.78rem] sm:w-auto"
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
