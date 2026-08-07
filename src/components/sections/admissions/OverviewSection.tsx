import { admissionsPageContent } from "@/data/admissions";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function OverviewSection() {
  const { overview } = admissionsPageContent;

  return (
    <Section id="overview" background="white">
      <div className="grid items-stretch gap-7 lg:grid-cols-2 lg:gap-16">
        <RevealOnScroll className="h-full min-h-0">
          <div className="relative h-full min-h-[220px] overflow-hidden rounded-lg bg-forest-deep sm:min-h-[320px]">
            <ImageWithFallback
              image={overview.image}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover transition-transform duration-500 ease-out hover:scale-[1.04]"
            />
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={1} className="flex flex-col justify-center">
          <SectionLabel>{overview.label}</SectionLabel>
          <h2 className="font-montserrat text-[clamp(1.35rem,6vw,2rem)] font-extrabold leading-tight text-forest-deep md:text-[clamp(1.4rem,2.5vw,2rem)]">
            {overview.title}
          </h2>
          {overview.paragraphs.map((paragraph) => {
            const [before, after] = paragraph.includes(overview.visitTimings)
              ? paragraph.split(overview.visitTimings)
              : [paragraph, ""];

            return (
              <p
                key={paragraph.slice(0, 40)}
                className="mt-3 text-[0.92rem] leading-relaxed text-slate sm:text-[0.96rem]"
              >
                {before}
                {after !== "" ? (
                  <>
                    <strong className="font-bold text-forest-deep">{overview.visitTimings}</strong>
                    {after}
                  </>
                ) : null}
              </p>
            );
          })}

          <Button
            href={overview.cta.href}
            className="mt-5 w-full justify-center self-stretch px-7 py-3 text-[0.78rem] sm:mt-6 sm:w-auto sm:self-start"
          >
            {overview.cta.label}
            <Icon name="arrow" className="h-3.5 w-3.5" />
          </Button>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
