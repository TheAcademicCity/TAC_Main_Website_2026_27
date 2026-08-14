import { admissionsPageContent } from "@/data/admissions";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function ClaritySection() {
  const { clarity } = admissionsPageContent;

  return (
    <section id="clarity" className="bg-white md:pb-[clamp(28px,3.5vw,44px)]">
      {/* Mobile — navy card */}
      <div className="bg-off-white px-5 pt-2 pb-4 md:hidden">
        <RevealOnScroll>
          <div className="rounded-[18px] bg-[linear-gradient(150deg,var(--color-navy),var(--color-charcoal))] px-[22px] py-[22px] text-center text-white">
            <h4 className="font-montserrat text-base font-bold leading-[1.4]">
              {clarity.heading}
            </h4>
            <div className="mt-2 mb-4 space-y-1 text-[0.75rem] leading-normal text-mist">
              {clarity.description.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <div className="flex gap-2">
              <Button
                href={clarity.visitCta.href}
                variant="gold"
                className="flex-1 justify-center rounded-[30px] px-2.5 py-3 font-outfit text-[0.75rem] font-bold normal-case tracking-normal text-navy"
              >
                Schedule Visit
              </Button>
              <Button
                href={clarity.whatsapp.href}
                external
                variant="outline-white"
                className="flex-1 justify-center rounded-[30px] border-[1.5px] border-white/50 px-2.5 py-3 font-outfit text-[0.75rem] font-semibold normal-case tracking-normal"
              >
                WhatsApp
              </Button>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      {/* Desktop — full-bleed image band */}
      <div className="hidden md:block">
        <RevealOnScroll>
          <div className="relative w-full min-h-[420px] overflow-hidden">
            <div className="absolute inset-0 bg-forest-deep">
              <ImageWithFallback image={clarity.image} fill sizes="100vw" />
              <div className="absolute inset-0 bg-[rgba(5,22,18,0.18)]" />
              <div className="absolute inset-x-0 bottom-0 h-[min(78%,28rem)] bg-gradient-to-t from-[rgba(5,22,18,0.98)] via-[rgba(5,22,18,0.82)] to-transparent" />
            </div>

            <div className="relative z-[1] flex min-h-[420px] flex-col items-center justify-end px-[4vw] py-[clamp(1.5rem,4vw,3.5rem)] text-center">
              <h3 className="max-w-[22ch] font-montserrat text-[clamp(1.4rem,2.4vw,1.9rem)] font-extrabold leading-tight text-white md:max-w-none md:whitespace-nowrap">
                {clarity.heading}
              </h3>
              <div className="mt-2 max-w-none text-[0.94rem] leading-relaxed text-white/65">
                {clarity.description.map((line) => (
                  <p key={line} className="whitespace-normal px-1 lg:whitespace-nowrap">
                    {line}
                  </p>
                ))}
              </div>

              <div className="mt-6 flex max-w-none flex-row flex-wrap justify-center gap-3">
                <Button
                  href={clarity.visitCta.href}
                  className="justify-center px-7 py-3 text-[0.78rem]"
                >
                  {clarity.visitCta.label}
                  <Icon name="arrow" className="h-3.5 w-3.5" />
                </Button>
                <Button
                  href={clarity.whatsapp.href}
                  external
                  variant="outline-white"
                  className="justify-center px-7 py-3 text-[0.78rem]"
                >
                  <Icon name="whatsapp" className="h-3.5 w-3.5" />
                  {clarity.whatsapp.label}
                </Button>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
