import { academicsPageContent } from "@/data/academics";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";

export function AcademicsIntroSection() {
  const { highlights, affiliations } = academicsPageContent;

  return (
    <Section background="white">
      <div className="grid gap-8 lg:grid-cols-3">
        {highlights.map((item, index) => (
          <RevealOnScroll key={item.title} delay={Math.min(index, 3) as 0 | 1 | 2 | 3}>
            <article className="h-full border border-line bg-paper p-7">
              <h2 className="font-montserrat text-[1.05rem] font-extrabold text-forest-deep">
                {item.title}
              </h2>
              <p className="mt-3 text-[0.92rem] leading-relaxed text-slate">{item.description}</p>
            </article>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll delay={1}>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 border-t border-line pt-8">
          {affiliations.map((affiliation) => (
            <span
              key={affiliation}
              className="border border-emerald/20 bg-emerald/6 px-5 py-2.5 font-montserrat text-[0.72rem] font-extrabold uppercase tracking-[0.16em] text-forest"
            >
              {affiliation}
            </span>
          ))}
        </div>
      </RevealOnScroll>
    </Section>
  );
}
