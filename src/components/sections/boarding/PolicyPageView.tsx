import { SiteLink } from "@/components/layout/SiteLink";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
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
    <article className="border-t border-line pt-8 first:border-t-0 first:pt-0">
      <h2 className="font-montserrat text-[1.05rem] font-extrabold tracking-tight text-forest-deep">
        {section.heading}
      </h2>

      {section.type === "text" &&
        section.paragraphs.map((paragraph) => (
          <p
            key={paragraph}
            className="mt-3 max-w-[68ch] text-[0.94rem] leading-[1.7] text-slate"
          >
            {paragraph}
          </p>
        ))}

      {section.type === "bullets" && (
        <ul className="mt-4 space-y-3 text-[0.94rem] leading-[1.65] text-slate">
          {section.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span
                aria-hidden
                className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald"
              />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}

      {section.type === "formBoxes" && (
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {section.boxes.map((box) => (
            <div
              key={box.title}
              className="rounded-lg border border-line bg-white px-4 py-4"
            >
              <strong className="block font-montserrat text-[0.82rem] font-bold uppercase tracking-[0.08em] text-forest-deep">
                {box.title}
              </strong>
              <p className="mt-2 text-[0.88rem] leading-relaxed text-slate">
                {box.description}
              </p>
            </div>
          ))}
        </div>
      )}

      {section.type === "levels" && (
        <>
          {section.intro ? (
            <p className="mt-3 max-w-[68ch] text-[0.94rem] leading-[1.7] text-slate">
              {section.intro}
            </p>
          ) : null}
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {section.levels.map((level) => (
              <div
                key={level.title}
                className={cn(
                  "flex h-full flex-col rounded-lg border border-line border-t-[3px] bg-white px-4 py-4",
                  levelBorderClasses[level.severity],
                )}
              >
                <h3 className="font-montserrat text-[0.9rem] font-bold leading-snug text-ink">
                  {level.title}
                </h3>
                <p className="mt-2 flex-1 text-[0.88rem] leading-relaxed text-slate">
                  {level.description}
                </p>
              </div>
            ))}
          </div>
        </>
      )}

      {section.type === "table" && (
        <div className="mt-5 overflow-x-auto rounded-lg border border-line">
          <table className="w-full min-w-[520px] border-collapse text-left text-[0.88rem]">
            <thead>
              <tr>
                <th className="w-[34%] bg-forest-deep px-4 py-3 font-montserrat text-[0.72rem] font-bold uppercase tracking-[0.1em] text-white">
                  Role
                </th>
                <th className="bg-forest-deep px-4 py-3 font-montserrat text-[0.72rem] font-bold uppercase tracking-[0.1em] text-white">
                  Key Responsibility
                </th>
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row, index) => (
                <tr
                  key={row.role}
                  className={index % 2 === 1 ? "bg-paper/80" : "bg-white"}
                >
                  <td className="border-t border-line px-4 py-3 align-top font-montserrat text-[0.84rem] font-semibold text-forest-deep">
                    {row.role}
                  </td>
                  <td className="border-t border-line px-4 py-3 align-top leading-relaxed text-slate">
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
            className="mb-4 flex flex-wrap items-center gap-2 font-montserrat text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-white/50"
          >
            <SiteLink href="/" className="text-white/50 transition-colors hover:text-gold">
              Home
            </SiteLink>
            <span aria-hidden>›</span>
            <SiteLink
              href="/boarding#discipline"
              className="text-white/50 transition-colors hover:text-gold"
            >
              Boarding
            </SiteLink>
            <span aria-hidden>›</span>
            <span className="text-white/70">{policy.title}</span>
          </nav>

          <h1 className="max-w-[22ch] font-montserrat text-[clamp(1.8rem,3.5vw,2.6rem)] font-black leading-[1.15] text-white">
            {policy.title}
          </h1>
          <p className="mt-4 max-w-[58ch] text-[0.95rem] leading-relaxed text-white/70">
            {policy.subtitle}
          </p>
        </Container>
      </section>

      <Section background="white" className="!pt-6 sm:!pt-8">
        <div className="max-w-[760px] text-left">
          <div className="rounded-lg border-l-4 border-gold bg-paper px-5 py-4">
            <p className="text-[0.95rem] leading-[1.7] text-[#2b3438]">
              <strong className="font-montserrat font-bold text-forest-deep">
                Our Commitment:
              </strong>{" "}
              {policy.commitment}
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-10">
            {policy.sections.map((section) => (
              <PolicySectionBlock key={section.heading} section={section} />
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 rounded-lg bg-forest-deep px-5 py-5 text-left text-white sm:px-6">
            <div>
              <p className="font-montserrat text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-white/55">
                {policy.helpline.label}
              </p>
              <p className="mt-1.5 font-montserrat text-[1.15rem] font-bold leading-snug text-gold">
                {policy.helpline.value}
              </p>
            </div>
            <p className="text-[0.88rem] leading-relaxed text-white/75">
              {policy.helpline.note}
            </p>
          </div>

          <footer className="mt-8 border-t border-line pt-5 text-[0.78rem] leading-relaxed text-slate">
            {policy.footer}
          </footer>

          <div className="mt-8">
            <Button
              href="/boarding#discipline"
              variant="gold"
              className="px-6 py-3 text-[0.78rem]"
            >
              Back to boarding
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
