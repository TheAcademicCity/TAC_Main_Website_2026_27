import { aboutPageContent } from "@/data/about";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

function PrincipalArticle() {
  const { principalDesk } = aboutPageContent;
  const { signature, closing, paragraphs, image } = principalDesk;

  return (
    <article
      className="overflow-hidden rounded-[20px] border border-line/70 bg-white shadow-[0_18px_56px_-28px_rgba(15,61,56,0.28)]"
    >
      <div className="h-1 bg-gradient-to-r from-gold via-[#e8b84a] to-forest" aria-hidden />

      <div className="grid md:grid-cols-[minmax(0,240px)_1fr] lg:grid-cols-[minmax(0,260px)_1fr]">
        <aside
          className="flex flex-col items-center border-b border-line/60 bg-[linear-gradient(180deg,#f4faf7_0%,#ffffff_100%)] px-6 py-7 md:border-b-0 md:border-r md:px-7 md:py-9"
        >
          <figure className="w-full max-w-[200px] md:max-w-none">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[14px] bg-forest-deep shadow-[0_16px_40px_-18px_rgba(0,0,0,0.45)] ring-2 ring-gold/80 ring-offset-2 ring-offset-[#f4faf7]">
              <ImageWithFallback
                image={image}
                fill
                sizes="(max-width: 767px) 200px, 260px"
                objectFit="contain"
                className="object-contain object-center"
              />
            </div>
          </figure>

          <figcaption className="mt-5 hidden text-center md:block">
            <p className="font-montserrat text-[0.95rem] font-extrabold leading-snug text-forest-deep">
              {signature.name}
            </p>
            <p className="mt-1 text-[0.72rem] font-medium leading-snug text-slate">
              {signature.qualifications}
            </p>
            <p className="mt-2 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-emerald">
              {signature.role}
            </p>
          </figcaption>
        </aside>

        <div className="relative px-5 py-6 sm:px-7 sm:py-8 md:px-8 md:py-9 lg:px-10">
          <div
            aria-hidden
            className="pointer-events-none absolute right-4 top-3 font-montserrat text-[4.5rem] font-black leading-none text-forest/[0.05] sm:right-6 sm:text-[6rem] md:top-4"
          >
            &ldquo;
          </div>

          <div className="relative space-y-4 md:space-y-5">
            {paragraphs.map((paragraph, index) => (
              <p
                key={paragraph.slice(0, 40)}
                className={cn(
                  "text-[0.84rem] leading-[1.72] text-charcoal sm:text-[0.9rem] md:text-[0.94rem] md:leading-[1.8]",
                  index === 0 &&
                    "text-[0.9rem] font-medium leading-[1.68] text-forest-deep sm:text-[0.96rem] md:text-[1.02rem] md:leading-[1.74]",
                )}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <footer className="relative mt-6 border-t border-line/70 pt-5 md:mt-8 md:pt-6">
            <p className="text-[0.84rem] italic leading-snug text-slate md:text-[0.92rem]">
              {closing}
            </p>
            <div className="mt-3 md:hidden">
              <p className="font-montserrat text-[0.92rem] font-extrabold leading-snug text-forest-deep">
                {signature.name}
              </p>
              <p className="mt-1 text-[0.74rem] leading-snug text-slate">
                {signature.qualifications}
              </p>
              <p className="mt-1.5 text-[0.72rem] font-bold uppercase tracking-[0.1em] text-emerald">
                {signature.role}
              </p>
            </div>
            <p className="mt-2 text-[0.78rem] leading-snug text-slate md:mt-1 md:text-[0.84rem]">
              {signature.school}
            </p>
          </footer>
        </div>
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
