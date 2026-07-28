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

export function AboutValuesSection() {
  const { values } = aboutPageContent;

  return (
    <Section id="values" background="paper">
      <RevealOnScroll className="mx-auto max-w-none text-center">
        <SectionLabel centered>{values.label}</SectionLabel>
        <h2 className="font-montserrat text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold text-forest-deep">
          {values.title}
        </h2>
        <p className="mx-auto mt-2 max-w-none whitespace-nowrap text-[0.96rem] text-slate">
          {values.description}
        </p>
      </RevealOnScroll>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {values.tiles.map((tile, index) => (
          <RevealOnScroll key={tile.title} delay={Math.min(index, 3) as 0 | 1 | 2 | 3}>
            <article className="relative h-full overflow-hidden border border-line bg-white px-6 py-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_-18px_rgba(15,61,56,0.18)]">
              <span className={cn("absolute inset-x-0 top-0 h-1", accentStyles[tile.accent])} />
              <span className="mb-4 block text-[2rem] leading-none" aria-hidden>
                {tile.icon}
              </span>
              <h3 className="font-montserrat text-base font-extrabold text-forest-deep">
                {tile.title}
              </h3>
              <p className="mt-2 text-[0.86rem] leading-relaxed text-slate">{tile.description}</p>
            </article>
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  );
}
