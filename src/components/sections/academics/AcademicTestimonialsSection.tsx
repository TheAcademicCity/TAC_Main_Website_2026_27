import { academicsPageContent } from "@/data/academics";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";

export function AcademicTestimonialsSection() {
  const { testimonials } = academicsPageContent;

  return (
    <Section background="forest" id="testimonials">
      <RevealOnScroll>
        <SectionHeader
          label={testimonials.label}
          title={testimonials.title}
          labelTone="gold"
          titleLight
          reveal={false}
          className="[&_p]:text-white/65"
        />
      </RevealOnScroll>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {testimonials.items.map((item, index) => (
          <RevealOnScroll key={item.label} delay={Math.min(index, 3) as 0 | 1 | 2 | 3}>
            <blockquote className="flex h-full flex-col border border-white/10 bg-white/6 p-6 backdrop-blur-sm">
              <p className="text-[0.92rem] leading-relaxed text-white/78">&ldquo;{item.quote}&rdquo;</p>
              <footer className="mt-5 font-montserrat text-[0.72rem] font-extrabold uppercase tracking-[0.14em] text-gold">
                {item.label}
              </footer>
            </blockquote>
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  );
}
