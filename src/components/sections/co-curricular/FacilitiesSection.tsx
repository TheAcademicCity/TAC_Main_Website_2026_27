import { coCurricularPageContent } from "@/data/coCurricular";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

const bentoClasses = [
  "col-start-1 row-start-1",
  "col-start-1 row-start-2 row-span-2",
  "col-start-2 row-start-1",
  "col-start-2 row-start-2",
  "col-start-2 row-start-3",
] as const;

export function FacilitiesSection() {
  const { facilities, sportBand } = coCurricularPageContent;

  return (
    <Section
      id="facilities"
      background="paper"
      spacing="compact"
      className="max-md:!bg-white max-md:!pt-4 max-md:!pb-7 md:pt-0"
      containerClassName="max-md:!px-5"
    >
      {/* Mobile */}
      <div className="md:hidden">
        <RevealOnScroll>
          <SectionLabel className="!mb-2 before:hidden !text-[0.62rem] !tracking-[0.14em] !text-emerald">
            {facilities.label}
          </SectionLabel>
          <h2 className="font-montserrat text-[1.25rem] font-extrabold leading-[1.28] tracking-[-0.01em] text-navy">
            Purpose-Built for Every Sport
          </h2>
          <p className="mt-1.5 mb-[18px] text-[0.78125rem] leading-[1.55] text-[#999]">
            {sportBand.description}
          </p>

          <div className="mb-3.5 grid grid-cols-[1.3fr_1fr] grid-rows-[repeat(3,88px)] gap-2">
            {facilities.items.map((item, index) => (
              <div
                key={item.label}
                className={cn(
                  "relative overflow-hidden rounded-[14px] bg-forest-deep",
                  bentoClasses[index] ?? bentoClasses[0],
                )}
              >
                <ImageWithFallback
                  image={item.image}
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent from-45% to-black/60"
                />
                <span className="absolute bottom-2 left-2.5 z-[2] text-[0.625rem] font-bold text-white">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <Button
            href={sportBand.cta.href}
            variant="gold"
            className="w-full justify-center rounded-[30px] px-5 py-3 font-outfit text-[0.8125rem] font-bold normal-case tracking-normal text-navy"
          >
            Book a Campus Visit
          </Button>
        </RevealOnScroll>
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <RevealOnScroll>
          <SectionLabel>{facilities.label}</SectionLabel>
          <h2 className="font-montserrat text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold leading-tight text-forest-deep">
            {facilities.title}
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={1}>
          <div className="mt-5 grid grid-cols-2 gap-1.5 sm:mt-7 md:grid-cols-4 md:grid-rows-[185px_275px]">
            {facilities.items.map((item) => (
              <div
                key={item.label}
                className={cn(
                  "group relative min-h-[150px] overflow-hidden rounded-lg bg-forest-deep sm:min-h-[180px] md:min-h-0",
                  item.wide && "md:col-span-2",
                  item.tall && "md:row-span-2",
                )}
              >
                <div className="absolute inset-0">
                  <ImageWithFallback
                    image={item.image}
                    fill
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.06] group-hover:brightness-[0.85]"
                  />
                </div>
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(10,44,40,0.75)] via-transparent to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 z-[2] flex items-center gap-1.5 px-2.5 py-2.5 font-montserrat text-[0.65rem] font-bold uppercase tracking-[0.06em] text-white sm:bottom-3 sm:inset-x-auto sm:left-3.5 sm:px-0 sm:py-0 sm:text-[0.74rem] sm:tracking-[0.08em]">
                  <Icon name={item.icon} className="h-3.5 w-3.5 shrink-0 text-gold" />
                  <span className="min-w-0 leading-snug">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
