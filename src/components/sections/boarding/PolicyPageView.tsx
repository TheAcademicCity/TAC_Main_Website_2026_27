import { SiteLink } from "@/components/layout/SiteLink";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import type { BoardingPolicyContent } from "@/types/policies";

type PolicyPageViewProps = {
  policy: BoardingPolicyContent;
};

export function PolicyPageView({ policy }: PolicyPageViewProps) {
  return (
    <main id="top" tabIndex={-1} className="boarding-policy-page outline-none">
      <section className="bg-forest-deep pt-[var(--site-nav-stack)]">
        <Container className="py-[clamp(2rem,4vw,3rem)]">
          <nav
            aria-label="Breadcrumb"
            className="mb-3 flex flex-wrap items-center gap-2 font-montserrat text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-white/50"
          >
            <SiteLink href="/" className="text-white/50 transition-colors hover:text-gold">
              Home
            </SiteLink>
            <span aria-hidden>›</span>
            <SiteLink href="/boarding#discipline" className="text-white/50 transition-colors hover:text-gold">
              Boarding
            </SiteLink>
            <span aria-hidden>›</span>
            <span className="text-white/70">{policy.title}</span>
          </nav>

          <h1 className="max-w-[20ch] font-montserrat text-[clamp(1.8rem,3.5vw,2.6rem)] font-black leading-tight text-white">
            {policy.title}
          </h1>
          <p className="mt-3 max-w-[62ch] text-[0.94rem] leading-relaxed text-white/70">{policy.intro}</p>
        </Container>
      </section>

      <Section background="paper">
        <div className="max-w-3xl text-left">
          {policy.sections.map((section) => (
            <article key={section.heading} className="border-b border-line py-8 first:pt-0 last:border-b-0 last:pb-0">
              <h2 className="font-montserrat text-[1.05rem] font-extrabold text-forest-deep">
                {section.heading}
              </h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="mt-3 text-[0.9rem] leading-relaxed text-slate">
                  {paragraph}
                </p>
              ))}
              {section.bullets ? (
                <ul className="mt-3 flex flex-col gap-2.5">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2.5 text-[0.9rem] leading-relaxed text-slate"
                    >
                      <Icon name="checkCircle" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/boarding#discipline" variant="gold-outline" className="px-6 py-3 text-[0.78rem]">
            Back to boarding
          </Button>
          <Button href="/#enquiry" className="px-6 py-3 text-[0.78rem]">
            Enquire now
            <Icon name="arrow" className="h-3.5 w-3.5" />
          </Button>
        </div>
      </Section>
    </main>
  );
}
