import Image from "next/image";
import { academicsPageContent } from "@/data/academics";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

const streamGradients = [
  "bg-[linear-gradient(150deg,var(--color-forest),#0c322c)]",
  "bg-[linear-gradient(150deg,var(--color-violet),#3d0d63)]",
  "bg-[linear-gradient(150deg,var(--color-charcoal),#241f22)]",
] as const;

const mobilePartnerLogos = [
  {
    src: "/images/home/campus/partners/allen-color.png",
    alt: "Allen Career Institute",
    className: "h-6 w-auto max-w-[100px] object-contain",
  },
  {
    src: "/images/home/campus/partners/trisha-classes-onlight.png",
    alt: "Trisha Classes",
    className: "h-6 w-auto max-w-[108px] object-contain",
  },
] as const;

export function StreamsSection() {
  const { streams } = academicsPageContent;

  return (
    <Section
      id="streams"
      background="forest-deep"
      className="relative overflow-hidden pb-10 max-md:!bg-white max-md:!pt-4 max-md:!pb-7"
      containerClassName="max-md:!px-5"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 hidden h-[280px] w-[280px] rounded-full border-[40px] border-white/4 md:block"
      />

      {/* Mobile */}
      <div className="relative z-[1] md:hidden">
        <RevealOnScroll>
          <SectionLabel className="!mb-2 before:hidden !text-[0.62rem] !tracking-[0.14em] !text-emerald">
            {streams.label}
          </SectionLabel>
          <h2 className="font-montserrat text-[1.25rem] font-extrabold leading-[1.28] tracking-[-0.01em] text-navy">
            Focused Preparation for the Future
          </h2>
          <p className="mt-1.5 mb-5 text-[0.78125rem] leading-[1.55] text-[#999]">
            {streams.description}
          </p>
        </RevealOnScroll>

        <div className="scrollbar-none flex snap-x snap-mandatory gap-3.5 overflow-x-auto pb-1.5">
          {streams.cards.map((card, index) => (
            <article
              key={card.title}
              className={cn(
                "w-[235px] shrink-0 snap-start rounded-[20px] p-5 text-white",
                streamGradients[index] ?? streamGradients[0],
              )}
            >
              <div className="mb-2.5 text-[1.375rem]" aria-hidden>
                {card.icon}
              </div>
              <h4 className="mb-2.5 font-montserrat text-[0.9375rem] font-bold">{card.title}</h4>
              <ul>
                {card.items.map((item) => (
                  <li key={item} className="text-[0.6875rem] leading-[1.7] text-white/85">
                    → {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-[18px] text-[0.65625rem] font-semibold text-[#999]">
          {streams.partners.label}
        </p>
        <div className="mt-2.5 flex flex-wrap items-center gap-3">
          {mobilePartnerLogos.map((logo) => (
            <Image
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              width={160}
              height={48}
              className={logo.className}
            />
          ))}
        </div>
      </div>

      {/* Desktop */}
      <div className="relative z-[1] hidden md:block">
        <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-6">
          <RevealOnScroll>
            <SectionLabel tone="gold">{streams.label}</SectionLabel>
            <h2 className="mt-2 font-montserrat text-[clamp(1.7rem,3vw,2.3rem)] font-extrabold leading-tight text-white">
              {streams.title}
            </h2>
            <p className="mt-2 max-w-[42ch] whitespace-normal text-[0.9rem] text-white/62 sm:max-w-none sm:text-[0.93rem] lg:whitespace-nowrap">
              {streams.description}
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={1}>
            <Button
              href={streams.cta.href}
              className="w-full justify-center self-start px-7 py-3 text-[0.78rem] sm:w-auto lg:self-end"
            >
              {streams.cta.label}
              <Icon name="arrow" className="h-3.5 w-3.5" />
            </Button>
          </RevealOnScroll>
        </div>

        <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3">
          {streams.cards.map((card, index) => (
            <RevealOnScroll key={card.title} delay={Math.min(index, 3) as 0 | 1 | 2 | 3}>
              <article className="h-full overflow-hidden rounded-lg border border-white/10 bg-white/6 p-4 transition-[background,transform] duration-300 hover:-translate-y-1 hover:bg-white/10 sm:p-5">
                <span className="mb-3 grid h-10 w-10 place-items-center rounded-lg bg-white/8 text-[1.3rem] leading-none sm:mb-4 sm:h-11 sm:w-11 sm:text-[1.45rem]">
                  <span aria-hidden>{card.icon}</span>
                </span>
                <h4 className="font-montserrat text-[0.95rem] font-bold text-white">{card.title}</h4>
                <ul className="mt-3 space-y-1.5">
                  {card.items.map((item) => (
                    <li key={item} className="flex gap-1.5 text-[0.82rem] leading-snug text-white/58">
                      <span className="shrink-0 text-[0.68rem] text-gold">→</span>
                      <span className="min-w-0">{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll className="mt-8 sm:mt-10">
          <div className="border-t border-white/10 pt-6 sm:pt-7">
            <p className="font-montserrat text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white/55">
              {streams.partners.label}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3 sm:gap-x-8 sm:gap-y-4">
              {streams.partners.logos.map((logo) => (
                <Image
                  key={logo.src}
                  src={logo.src}
                  alt={logo.alt}
                  width={140}
                  height={40}
                  className="h-7 w-auto object-contain object-left opacity-90 transition-opacity duration-300 hover:opacity-100 sm:h-8"
                />
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
