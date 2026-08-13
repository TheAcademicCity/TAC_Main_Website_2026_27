import { admissionsPageContent } from "@/data/admissions";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";

function VisitTimingParagraph({
  paragraph,
  visitTimings,
  className,
}: {
  paragraph: string;
  visitTimings: string;
  className?: string;
}) {
  const [before, after] = paragraph.includes(visitTimings)
    ? paragraph.split(visitTimings)
    : [paragraph, ""];

  return (
    <p className={className}>
      {before}
      {after !== "" ? (
        <>
          <strong className="font-bold text-forest-deep md:text-forest-deep">{visitTimings}</strong>
          {after}
        </>
      ) : null}
    </p>
  );
}

export function OverviewSection() {
  const { overview } = admissionsPageContent;

  return (
    <Section
      id="overview"
      background="white"
      className="max-md:!pt-4 max-md:!pb-7"
      containerClassName="max-md:!px-5"
    >
      {/* Mobile */}
      <div className="md:hidden">
        <RevealOnScroll>
          <SectionLabel className="!mb-2 before:hidden !text-[0.62rem] !tracking-[0.14em] !text-emerald">
            {overview.label}
          </SectionLabel>
          <h2 className="font-montserrat text-[1.25rem] font-extrabold leading-[1.28] tracking-[-0.01em] text-navy">
            {overview.title}
          </h2>
          <div className="relative my-4 h-[170px] overflow-hidden rounded-2xl bg-forest-deep">
            <ImageWithFallback
              image={overview.image}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          {overview.paragraphs.map((paragraph) => (
            <VisitTimingParagraph
              key={paragraph.slice(0, 40)}
              paragraph={paragraph}
              visitTimings={overview.visitTimings}
              className="mb-3.5 text-[0.8125rem] leading-[1.65] text-charcoal [&_strong]:text-navy"
            />
          ))}
          <Button
            href={overview.cta.href}
            variant="gold"
            className="w-full justify-center rounded-[30px] px-5 py-3 font-outfit text-[0.8125rem] font-bold normal-case tracking-normal text-navy"
          >
            {overview.cta.label}
          </Button>
        </RevealOnScroll>
      </div>

      {/* Desktop */}
      <div className="hidden items-stretch gap-7 md:grid lg:grid-cols-2 lg:gap-16">
        <RevealOnScroll className="h-full min-h-0">
          <div className="relative h-full min-h-[320px] overflow-hidden rounded-lg bg-forest-deep">
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
          <h2 className="font-montserrat text-[clamp(1.4rem,2.5vw,2rem)] font-extrabold leading-tight text-forest-deep">
            {overview.title}
          </h2>
          {overview.paragraphs.map((paragraph) => (
            <VisitTimingParagraph
              key={paragraph.slice(0, 40)}
              paragraph={paragraph}
              visitTimings={overview.visitTimings}
              className="mt-3 text-[0.92rem] leading-relaxed text-slate sm:text-[0.96rem]"
            />
          ))}

          <Button
            href={overview.cta.href}
            className="mt-6 w-auto self-start justify-center px-7 py-3 text-[0.78rem]"
          >
            {overview.cta.label}
            <Icon name="arrow" className="h-3.5 w-3.5" />
          </Button>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
