import { boardingPageContent } from "@/data/boarding";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";
import type { BoardingPageContent } from "@/types/boarding";

type ValueAccent = BoardingPageContent["values"]["tiles"][number]["accent"];

const accentStyles: Record<ValueAccent, { border: string; iconBg: string }> = {
  t1: { border: "before:bg-emerald", iconBg: "bg-emerald/10" },
  t2: { border: "before:bg-gold", iconBg: "bg-gold/10" },
  t3: { border: "before:bg-violet", iconBg: "bg-violet/8" },
  t4: { border: "before:bg-forest", iconBg: "bg-forest/8" },
  t5: { border: "before:bg-gold-dark", iconBg: "bg-gold-dark/8" },
  t6: { border: "before:bg-cyan", iconBg: "bg-cyan/15" },
};

export function ValuesSection() {
  const { values } = boardingPageContent;

  return (
    <Section id="values" background="paper">
      <RevealOnScroll className="mx-auto max-w-none text-center">
        <SectionLabel centered>{values.label}</SectionLabel>
        <h2 className="font-montserrat text-[clamp(1.4rem,6vw,2.4rem)] font-extrabold leading-tight text-forest-deep md:text-[clamp(1.7rem,3vw,2.4rem)]">
          {values.title}
        </h2>
        <p className="mx-auto mt-2 max-w-[40ch] whitespace-normal text-[0.92rem] text-slate sm:max-w-none sm:text-[0.96rem] lg:whitespace-nowrap">
          {values.description}
        </p>
      </RevealOnScroll>

      <div className="mt-6 grid gap-4 sm:mt-9 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {values.tiles.map((tile, index) => {
          const styles = accentStyles[tile.accent];

          return (
            <RevealOnScroll key={tile.title} delay={Math.min(index, 3) as 0 | 1 | 2 | 3}>
              <article
                className={cn(
                  "relative h-full overflow-hidden rounded-lg border border-line bg-white px-5 py-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-18px_rgba(15,61,56,0.2)] sm:px-7 sm:py-8",
                  "before:absolute before:inset-x-0 before:top-0 before:h-1 before:content-['']",
                  styles.border,
                )}
              >
                <div
                  className={cn(
                    "mb-3 grid h-[50px] w-[50px] place-items-center rounded-lg text-[1.5rem] leading-none sm:mb-4 sm:h-[60px] sm:w-[60px] sm:text-[1.75rem]",
                    styles.iconBg,
                  )}
                >
                  <span aria-hidden>{tile.icon}</span>
                </div>
                <h3 className="font-montserrat text-[0.98rem] font-extrabold text-forest-deep sm:text-[1rem]">
                  {tile.title}
                </h3>
                <p className="mt-2 text-[0.86rem] leading-relaxed text-slate sm:text-[0.88rem]">
                  {tile.description}
                </p>
                <span
                  aria-hidden
                  className="pointer-events-none absolute bottom-3 right-4 font-montserrat text-[2.75rem] font-black leading-none text-forest/6 sm:right-5 sm:text-[3.5rem]"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </article>
            </RevealOnScroll>
          );
        })}
      </div>
    </Section>
  );
}
