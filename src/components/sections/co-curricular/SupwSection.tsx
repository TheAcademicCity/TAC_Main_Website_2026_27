import { coCurricularPageContent } from "@/data/coCurricular";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function SupwSection() {
  const { supw } = coCurricularPageContent;

  return (
    <Section id="supw" background="forest-deep" spacing="compact" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-[280px] w-[280px] rounded-full border-[40px] border-white/4"
      />

      <div className="relative z-[1] grid gap-7 lg:grid-cols-2 lg:gap-16">
        <RevealOnScroll>
          <SectionLabel tone="gold">{supw.label}</SectionLabel>
          <h2 className="font-montserrat text-[clamp(1.35rem,6vw,2rem)] font-extrabold leading-tight text-white md:text-[clamp(1.4rem,2.6vw,2rem)]">
            {supw.title}
          </h2>
          <p className="mt-3 text-[0.92rem] leading-relaxed text-white/65 sm:text-[0.95rem]">
            {supw.description}
          </p>

          <div className="mt-5 flex flex-col gap-2.5">
            {supw.items.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/6 px-3.5 py-3 sm:px-4 sm:py-3.5"
              >
                <Icon name={item.icon} className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span className="min-w-0 text-[0.86rem] leading-relaxed text-white/75 sm:text-[0.88rem]">
                  <b className="text-white">{item.title}</b> — {item.description}
                </span>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={1} className="flex items-center">
          <div className="relative mt-1 aspect-[4/3] w-full overflow-hidden rounded-sm bg-white/8 sm:mt-5 lg:mt-10">
            <ImageWithFallback
              image={supw.image}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
