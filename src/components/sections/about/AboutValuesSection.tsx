import { aboutPageContent } from "@/data/about";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

const accentStyles = {
  gold: "bg-gold",
  emerald: "bg-emerald",
  violet: "bg-violet",
  cyan: "bg-cyan",
} as const;

const badgeStyles = {
  gold: "bg-[#fdece0]",
  emerald: "bg-[#e7f5ee]",
  violet: "bg-[#f1e6f8]",
  cyan: "bg-[#e7f0f2]",
} as const;

export function AboutValuesSection() {
  const { values } = aboutPageContent;

  return (
    <Section
      id="values"
      background="paper"
      className="max-md:!bg-white max-md:!py-[34px]"
      containerClassName="max-md:!px-5"
    >
      {/* Mobile */}
      <div className="md:hidden">
        <RevealOnScroll>
          <SectionLabel className="!mb-2 before:hidden !text-[0.62rem] !tracking-[0.14em] !text-emerald">
            {values.label}
          </SectionLabel>
          <h2 className="font-montserrat text-[1.3rem] font-extrabold leading-[1.28] tracking-[-0.01em] text-navy">
            {values.title}
          </h2>
          <p className="mt-1.5 mb-[18px] text-[0.78125rem] leading-normal text-[#999]">
            {values.description}
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-2 gap-3">
          {values.tiles.map((tile, index) => (
            <RevealOnScroll key={tile.title} delay={Math.min(index, 3) as 0 | 1 | 2 | 3}>
              <article className="rounded-2xl border border-off-white bg-white p-4 shadow-[0_8px_20px_-14px_rgba(0,0,0,0.15)]">
                <div
                  className={cn(
                    "mb-2.5 flex h-9 w-9 items-center justify-center rounded-[10px] text-base",
                    badgeStyles[tile.accent],
                  )}
                  aria-hidden
                >
                  {tile.icon}
                </div>
                <h5 className="mb-1.5 font-montserrat text-[0.8125rem] font-bold text-navy">
                  {tile.title}
                </h5>
                <p className="line-clamp-4 text-[0.6875rem] leading-[1.5] text-[#999]">
                  {tile.description}
                </p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <RevealOnScroll className="mx-auto max-w-none text-center">
          <SectionLabel centered>{values.label}</SectionLabel>
          <h2 className="font-montserrat text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold leading-tight text-forest-deep">
            {values.title}
          </h2>
          <p className="mx-auto mt-2 max-w-[40ch] px-1 text-[0.92rem] text-slate whitespace-normal sm:max-w-none sm:text-[0.96rem] lg:whitespace-nowrap">
            {values.description}
          </p>
        </RevealOnScroll>

        <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {values.tiles.map((tile, index) => (
            <RevealOnScroll key={tile.title} delay={Math.min(index, 3) as 0 | 1 | 2 | 3}>
              <article className="relative h-full overflow-hidden rounded-lg border border-line bg-white px-5 py-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_-18px_rgba(15,61,56,0.18)] sm:px-6 sm:py-7">
                <span className={cn("absolute inset-x-0 top-0 h-1", accentStyles[tile.accent])} />
                <span className="mb-3 block text-[1.75rem] leading-none sm:mb-4 sm:text-[2rem]" aria-hidden>
                  {tile.icon}
                </span>
                <h3 className="font-montserrat text-[0.98rem] font-extrabold text-forest-deep sm:text-base">
                  {tile.title}
                </h3>
                <p className="mt-2 text-[0.86rem] leading-relaxed text-slate">{tile.description}</p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </Section>
  );
}
