import { achievementsPageContent } from "@/data/achievements";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Container } from "@/components/ui/Container";

export function GratitudeSection() {
  const { gratitude } = achievementsPageContent;

  return (
    <section className="section-py bg-forest-deep text-center">
      <Container>
        <RevealOnScroll>
          <SectionLabel centered tone="gold" className="mb-4 justify-center">
            {gratitude.label}
          </SectionLabel>
          <blockquote className="mx-auto max-w-3xl font-montserrat text-[clamp(1.2rem,2.5vw,1.6rem)] font-medium italic leading-relaxed text-white/90">
            &ldquo;{gratitude.quote}{" "}
            <em className="not-italic text-gold">{gratitude.quoteHighlight}</em>&rdquo;
          </blockquote>
          <p className="mt-4 text-[0.84rem] font-semibold uppercase tracking-wider text-white/45">
            {gratitude.attribution}
          </p>
          <p className="mx-auto mt-5 max-w-[56ch] text-[0.9rem] leading-relaxed text-white/45">
            {gratitude.description}
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {gratitude.roles.map((role) => (
              <div key={role.title} className="px-2">
                <span className="text-2xl">{role.icon}</span>
                <p className="mt-2 font-montserrat text-[0.78rem] font-bold uppercase tracking-wide text-white/70">
                  {role.title}
                </p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
