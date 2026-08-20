import { aboutPageContent } from "@/data/about";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";

function PrincipalArticle() {
  const { principalDesk } = aboutPageContent;
  const { signature, closing, paragraphs, image } = principalDesk;

  return (
    <article className="relative overflow-hidden rounded-xl border border-line bg-white shadow-[0_16px_48px_-24px_rgba(15,61,56,0.22)]">
      <div
        aria-hidden
        className="h-1 bg-forest-deep"
      />

      <div className="relative px-5 pb-4 pt-3 md:px-8 md:py-8">
        <div
          aria-hidden
          className="pointer-events-none absolute right-4 top-2 font-montserrat text-[5rem] font-black leading-none text-forest/[0.04] md:right-8 md:text-[7rem]"
        >
          &ldquo;
        </div>

        <figure className="float-left mr-3.5 mb-3 mt-1.5 w-[96px] sm:mr-5 sm:mb-4 sm:w-[140px] md:mr-7 md:mb-5 md:mt-6 md:w-[200px] lg:w-[220px]">
          <div className="relative aspect-[3/4] overflow-hidden rounded-md bg-black shadow-[0_12px_32px_-14px_rgba(0,0,0,0.5)] ring-1 ring-black/10">
            <ImageWithFallback
              image={image}
              fill
              sizes="(max-width: 639px) 96px, (max-width: 768px) 140px, 220px"
              objectFit="contain"
              className="object-contain object-center"
            />
          </div>
        </figure>

        <div className="relative">
          {paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="text-[0.8125rem] leading-[1.72] text-charcoal sm:text-[0.875rem] md:text-[0.94rem] md:leading-[1.78] [&+&]:mt-3.5"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <footer className="clear-both mt-4 border-t border-line pt-3 md:mt-8 md:pt-6">
          <p className="text-[0.8125rem] italic leading-snug text-slate md:text-[0.92rem]">{closing}</p>
          <p className="mt-1.5 font-montserrat text-[0.875rem] font-extrabold leading-snug text-forest-deep md:mt-3 md:text-[1.02rem]">
            {signature.name}{" "}
            <span className="font-semibold text-slate">{signature.qualifications}</span>
          </p>
          <p className="mt-px text-[0.7rem] leading-snug text-slate md:mt-0.5 md:text-[0.82rem]">
            {signature.role}
          </p>
          <p className="text-[0.7rem] leading-snug text-slate md:text-[0.82rem]">{signature.school}</p>
        </footer>
      </div>
    </article>
  );
}

export function PrincipalDeskSection() {
  const { principalDesk } = aboutPageContent;

  return (
    <Section
      id="principal"
      background="white"
      className="!pt-4 max-md:!pb-7 md:!pb-[clamp(28px,3.5vw,44px)]"
      containerClassName="max-md:!px-5"
    >
      <RevealOnScroll>
        <SectionLabel className="max-md:!mb-2 max-md:before:hidden max-md:!text-[0.62rem] max-md:!tracking-[0.14em] max-md:!text-emerald">
          {principalDesk.label}
        </SectionLabel>
        <h2 className="font-montserrat text-[1.3rem] font-extrabold leading-[1.28] tracking-[-0.01em] text-navy md:text-[clamp(1.35rem,2.2vw,1.75rem)] md:leading-tight md:text-forest-deep">
          {principalDesk.title}
        </h2>
      </RevealOnScroll>

      <RevealOnScroll delay={1}>
        <div className="mt-4 md:mt-6">
          <PrincipalArticle />
        </div>
      </RevealOnScroll>
    </Section>
  );
}
