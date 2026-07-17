import { admissionsPageContent } from "@/data/admissions";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

export function EligibilitySection() {
  const { eligibility } = admissionsPageContent;

  return (
    <Section id="eligibility" background="white">
      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <RevealOnScroll>
          <SectionLabel>{eligibility.label}</SectionLabel>
          <h2 className="font-montserrat text-[clamp(1.4rem,2.4vw,1.9rem)] font-extrabold text-forest-deep">
            {eligibility.title}
          </h2>
          <p className="mt-3 text-[0.96rem] leading-relaxed text-slate">{eligibility.description}</p>

          <ul className="mt-4 flex flex-col gap-2.5">
            {eligibility.checklist.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[0.88rem] leading-snug text-slate">
                <Icon name="checkCircle" className="mt-0.5 h-4 w-4 shrink-0 text-emerald" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-5 rounded-sm bg-forest-deep p-7">
            <p className="text-[0.88rem] leading-relaxed text-white/70">
              <strong className="text-gold">Grade 11 applicants</strong>
              {eligibility.gradeNote.replace(/^Grade 11 applicants/, "")}
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={1}>
          <div className="overflow-hidden border border-line">
            <table className="w-full border-collapse text-[0.88rem]">
              <thead>
                <tr>
                  <th className="bg-forest-deep px-4 py-3 text-left font-montserrat text-[0.72rem] font-bold uppercase tracking-[0.1em] text-gold">
                    Grade
                  </th>
                  <th className="bg-forest-deep px-4 py-3 text-left font-montserrat text-[0.72rem] font-bold uppercase tracking-[0.1em] text-gold">
                    Status
                  </th>
                  <th className="bg-forest-deep px-4 py-3 text-left font-montserrat text-[0.72rem] font-bold uppercase tracking-[0.1em] text-gold">
                    Exam Mode
                  </th>
                </tr>
              </thead>
              <tbody>
                {eligibility.grades.map((row, index) => (
                  <tr key={row.grade} className={cn(index % 2 === 0 && "bg-paper")}>
                    <td className="border-b border-line px-4 py-2.5 text-ink">{row.grade}</td>
                    <td className="border-b border-line px-4 py-2.5 text-ink">{row.status}</td>
                    <td className="border-b border-line px-4 py-2.5 text-ink">{row.examMode}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-5 border border-line bg-paper px-6 py-5">
            <p className="mb-3 font-montserrat text-[0.72rem] font-extrabold uppercase tracking-[0.14em] text-forest-deep">
              Key Dates — Bengaluru Campus
            </p>
            <dl className="flex flex-col gap-2">
              {eligibility.keyDates.map((date, index) => (
                <div
                  key={date.label}
                  className={cn(
                    "flex items-center justify-between text-[0.86rem]",
                    index < eligibility.keyDates.length - 1 && "border-b border-line pb-2",
                  )}
                >
                  <dt className="text-slate">{date.label}</dt>
                  <dd
                    className={cn(
                      "font-bold",
                      date.highlight ? "text-gold-dark" : "text-ink",
                    )}
                  >
                    {date.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
