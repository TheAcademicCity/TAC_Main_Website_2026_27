import { SiteLink } from "@/components/layout/SiteLink";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";
import type {
  BoardingPolicyContent,
  PolicyLevel,
  PolicySection,
} from "@/types/policies";

type PolicyPageViewProps = {
  policy: BoardingPolicyContent;
};

const levelBorderClasses: Record<PolicyLevel["severity"], string> = {
  default: "border-t-emerald",
  moderate: "border-t-gold",
  severe: "border-t-red-600",
};

function PolicySectionBlock({ section }: { section: PolicySection }) {
  return (
    <article>
      <h2 className="mt-[1.625rem] border-b-2 border-paper pb-1.5 font-montserrat text-[1.05rem] font-extrabold text-forest-deep first:mt-0">
        {section.heading}
      </h2>

      {section.type === "text" &&
        section.paragraphs.map((paragraph) => (
          <p key={paragraph} className="mt-2 text-[0.9rem] leading-relaxed text-[#2b3438]">
            {paragraph}
          </p>
        ))}

      {section.type === "bullets" && (
        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[0.9rem] leading-relaxed text-[#2b3438]">
          {section.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      )}

      {section.type === "formBoxes" && (
        <div className="mt-2 flex flex-wrap gap-2.5">
          {section.boxes.map((box) => (
            <div
              key={box.title}
              className="min-w-[150px] flex-1 rounded-md border-l-[3px] border-forest-deep bg-paper px-3 py-2.5 text-[0.82rem] leading-relaxed text-slate"
            >
              <strong className="block text-[0.84rem] text-ink">{box.title}</strong>
              {box.description}
            </div>
          ))}
        </div>
      )}

      {section.type === "levels" && (
        <>
          {section.intro ? (
            <p className="mt-2 text-[0.9rem] leading-relaxed text-[#2b3438]">{section.intro}</p>
          ) : null}
          <div className="mt-2 flex flex-wrap gap-2.5">
            {section.levels.map((level) => (
              <div
                key={level.title}
                className={cn(
                  "min-w-[220px] flex-1 rounded-md border-t-[3px] bg-paper px-3.5 py-3",
                  levelBorderClasses[level.severity],
                )}
              >
                <h3 className="font-montserrat text-[0.88rem] font-bold text-ink">{level.title}</h3>
                <p className="mt-1 text-[0.82rem] leading-relaxed text-slate">{level.description}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {section.type === "table" && (
        <div className="mt-2 overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-[0.84rem]">
            <thead>
              <tr>
                <th className="bg-forest-deep px-2.5 py-2 text-left font-semibold text-white">Role</th>
                <th className="bg-forest-deep px-2.5 py-2 text-left font-semibold text-white">
                  Key Responsibility
                </th>
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row, index) => (
                <tr key={row.role} className={index % 2 === 1 ? "bg-paper" : undefined}>
                  <td className="border-b border-line px-2.5 py-2 align-top font-semibold whitespace-nowrap text-forest-deep">
                    {row.role}
                  </td>
                  <td className="border-b border-line px-2.5 py-2 align-top text-[#2b3438]">
                    {row.responsibility}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </article>
  );
}

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

          <h1 className="max-w-[24ch] font-montserrat text-[clamp(1.8rem,3.5vw,2.6rem)] font-black leading-tight text-white">
            {policy.title}
          </h1>
          <p className="mt-3 max-w-[62ch] text-[0.94rem] leading-relaxed text-white/70">{policy.subtitle}</p>
        </Container>
      </section>

      <Section background="paper">
        <div className="mx-auto max-w-[820px] text-left">
          <p className="font-montserrat text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-emerald">
            The Academic City School · K2 Learning Group
          </p>

          <div className="mt-6 rounded border-l-4 border-gold bg-paper px-[18px] py-3.5 text-[0.94rem] leading-relaxed text-[#2b3438]">
            <strong>Our Commitment:</strong> {policy.commitment}
          </div>

          {policy.sections.map((section) => (
            <PolicySectionBlock key={section.heading} section={section} />
          ))}

          <div className="mt-[1.625rem] flex flex-wrap items-center justify-between gap-2.5 rounded-lg bg-forest-deep px-5 py-4 text-white">
            <div>
              <div className="text-[0.82rem] text-white/90">{policy.helpline.label}</div>
              <div className="font-montserrat text-[1.25rem] font-bold text-gold">{policy.helpline.value}</div>
            </div>
            <div className="text-[0.82rem] text-white/90">{policy.helpline.note}</div>
          </div>

          <footer className="mt-[1.875rem] border-t border-line pt-3.5 text-[0.75rem] leading-relaxed text-slate">
            {policy.footer}
          </footer>
        </div>

        <div className="mx-auto mt-10 flex max-w-[820px] flex-wrap gap-3">
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
