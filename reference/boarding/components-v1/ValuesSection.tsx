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
  { border: string; icon: string }
> = {
  t1: { border: "border-t-emerald", icon: "text-emerald" },
  t2: { border: "border-t-gold", icon: "text-gold-dark" },
  t3: { border: "border-t-violet", icon: "text-violet" },
  t4: { border: "border-t-forest", icon: "text-forest" },
  t5: { border: "border-t-gold-dark", icon: "text-gold-dark" },
  t6: { border: "border-t-[#3aacbb]", icon: "text-[#3aacbb]" },
};

export function ValuesSection() {
  const { values } = boardingPageContent;

  return (
    <Section id="values" background="paper">
      <RevealOnScroll className="mx-auto max-w-3xl text-center">
        <SectionLabel centered>{values.label}</SectionLabel>
        <h2 className="font-montserrat text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold text-forest-deep">
          {values.title}
        </h2>
        <p className="mx-auto mt-2 whitespace-nowrap text-[0.96rem] text-slate">{values.description}</p>
      </RevealOnScroll>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {values.tiles.map((tile, index) => {
          const styles = accentStyles[tile.accent];

          return (
            <RevealOnScroll key={tile.title} delay={Math.min(index, 3) as 0 | 1 | 2 | 3}>
              <article
                className={cn(
                  "h-full border border-line border-t-[3px] bg-white px-6 py-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgba(15,61,56,0.14)]",
                  styles.border,
                )}
              >
                <div className="mb-3 grid h-[46px] w-[46px] place-items-center rounded-full bg-paper">
                  <Icon name={tile.icon} className={cn("h-5 w-5", styles.icon)} />
                </div>
                <h3 className="font-montserrat text-[0.95rem] font-extrabold text-forest-deep">
                  {tile.title}
                </h3>
                <p className="mt-2 text-[0.84rem] leading-relaxed text-slate">{tile.description}</p>
              </article>
            </RevealOnScroll>
          );
        })}
      </div>
    </Section>
  );
}
