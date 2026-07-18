import { boardingPageContent } from "@/data/boarding";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";
import type { BoardingPageContent } from "@/types/boarding";

type ValueAccent = BoardingPageContent["values"]["tiles"][number]["accent"];

const accentStyles: Record<
  ValueAccent,
  { border: string; iconBg: string; icon: string }
> = {
  t1: { border: "before:bg-emerald", iconBg: "bg-emerald/10", icon: "text-emerald" },
  t2: { border: "before:bg-gold", iconBg: "bg-gold/10", icon: "text-gold-dark" },
  t3: { border: "before:bg-violet", iconBg: "bg-violet/8", icon: "text-violet" },
  t4: { border: "before:bg-forest", iconBg: "bg-forest/8", icon: "text-forest" },
  t5: { border: "before:bg-gold-dark", iconBg: "bg-gold-dark/8", icon: "text-gold-dark" },
  t6: { border: "before:bg-cyan", iconBg: "bg-cyan/15", icon: "text-[#3aacbb]" },
};

export function ValuesSection() {
  const { values } = boardingPageContent;

  return (
    <Section id="values" background="paper">
      <RevealOnScroll className="mx-auto max-w-3xl text-center">
        <SectionLabel centered>{values.label}</SectionLabel>
        <h2 className="font-montserrat text-[clamp(1.7rem,3vw,2.4rem)] font-extrabold text-forest-deep">
          {values.title}
        </h2>
        <p className="mx-auto mt-2 max-w-[54ch] text-[0.96rem] text-slate">{values.description}</p>
      </RevealOnScroll>

      <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {values.tiles.map((tile, index) => {
          const styles = accentStyles[tile.accent];

          return (
            <RevealOnScroll key={tile.title} delay={Math.min(index, 3) as 0 | 1 | 2 | 3}>
              <article
                className={cn(
                  "relative h-full overflow-hidden border border-line bg-white px-7 py-8 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-18px_rgba(15,61,56,0.2)]",
                  "before:absolute before:inset-x-0 before:top-0 before:h-1 before:content-['']",
                  styles.border,
                )}
              >
                <div
                  className={cn(
                    "mb-4 grid h-[60px] w-[60px] place-items-center rounded-2xl",
                    styles.iconBg,
                  )}
                >
                  <Icon name={tile.icon} className={cn("h-7 w-7", styles.icon)} />
                </div>
                <h3 className="font-montserrat text-[1rem] font-extrabold text-forest-deep">
                  {tile.title}
                </h3>
                <p className="mt-2 text-[0.88rem] leading-relaxed text-slate">{tile.description}</p>
                <span
                  aria-hidden
                  className="pointer-events-none absolute bottom-3 right-5 font-montserrat text-[3.5rem] font-black leading-none text-forest/6"
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
