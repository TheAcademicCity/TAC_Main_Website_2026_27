import { admissionsPageContent } from "@/data/admissions";
import { siteConfig } from "@/config/site";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

const slabStyles = [
  "bg-emerald/7 border-emerald/20 text-emerald",
  "bg-emerald/5 border-emerald/15 text-forest",
  "bg-gold/7 border-gold/20 text-gold-dark",
  "bg-gold/4 border-gold/15 text-gold-dark",
] as const;

export function ScholarshipsSection() {
  const { scholarships } = admissionsPageContent;

  return (
    <Section id="scholarships" background="paper">
      <RevealOnScroll>
        <SectionLabel>{scholarships.label}</SectionLabel>
        <h2 className="font-montserrat text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold text-forest-deep">
          {scholarships.title}
        </h2>
        <p className="mt-2 max-w-[52ch] text-[0.96rem] text-slate">{scholarships.description}</p>
      </RevealOnScroll>

      <RevealOnScroll delay={1}>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <article className="overflow-hidden border border-line bg-white">
            <div className="flex items-center gap-3 bg-forest-deep px-5 py-4">
              <Icon name="star" className="h-[1.1rem] w-[1.1rem] text-gold" />
              <span className="font-montserrat text-[0.8rem] font-extrabold uppercase tracking-[0.1em] text-white">
                Merit Scholarship on Tuition Fee
              </span>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-2 gap-2.5">
                {scholarships.slabs.map((slab, index) => (
                  <div
                    key={slab.percent}
                    className={cn(
                      "border px-4 py-3.5 text-center",
                      slabStyles[index] ?? slabStyles[0],
                    )}
                  >
                    <div className="font-montserrat text-[1.5rem] font-black leading-none">{slab.percent}</div>
                    <div className="mt-1 text-[0.78rem] text-slate">{slab.range}</div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[0.78rem] leading-relaxed text-slate">{scholarships.slabNote}</p>
            </div>
          </article>

          <div className="flex flex-col gap-4">
            <article className="border border-line bg-white p-6">
              <h3 className="font-montserrat text-[0.9rem] font-extrabold text-forest-deep">
                {scholarships.sibling.title}
              </h3>
              <p className="mt-2 text-[0.86rem] leading-relaxed text-slate">{scholarships.sibling.description}</p>
            </article>

            <article className="bg-forest-deep p-6">
              <h3 className="font-montserrat text-[0.9rem] font-extrabold text-gold">
                {scholarships.earlyBird.title}
              </h3>
              <p className="mt-2 text-[0.86rem] leading-relaxed text-white/70">
                {(() => {
                  const { description, deadline } = scholarships.earlyBird;
                  const parts = description.split(deadline);
                  if (parts.length !== 2) return description;

                  return (
                    <>
                      {parts[0]}
                      <strong className="text-white">{deadline}</strong>
                      {parts[1]}
                    </>
                  );
                })()}
              </p>
            </article>

            <div className="flex items-center gap-3 border border-line bg-paper px-5 py-4">
              <Icon name="phone" className="h-[1.4rem] w-[1.4rem] shrink-0 text-emerald" />
              <div>
                <p className="font-montserrat text-[0.82rem] font-bold text-forest-deep">
                  {scholarships.contactNote}
                </p>
                <p className="text-[0.8rem] text-slate">
                  Call{" "}
                  <a href={scholarships.phoneHref} className="font-bold text-forest">
                    {scholarships.phoneDisplay}
                  </a>{" "}
                  or{" "}
                  <a
                    href={siteConfig.contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-forest"
                  >
                    WhatsApp us
                  </a>{" "}
                  to get full details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </Section>
  );
}
