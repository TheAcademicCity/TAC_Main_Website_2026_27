import { academicsPageContent } from "@/data/academics";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";
import type { CdfPillar } from "@/types/academics";

const accentStyles = {
  emerald: {
    bar: "bg-emerald",
    icon: "bg-emerald/10 text-emerald",
    dot: "bg-emerald",
  },
  gold: {
    bar: "bg-gold",
    icon: "bg-gold/10 text-gold-dark",
    dot: "bg-gold-dark",
  },
  violet: {
    bar: "bg-violet",
    icon: "bg-violet/10 text-violet",
    dot: "bg-violet",
  },
} as const;

const pillarIconSizeClass = "h-5 w-5 shrink-0";

const pillarIconMasks = {
  book: "/images/academics/icon-book.png",
  users: "/images/academics/icon-teaching-support.png",
} as const satisfies Partial<Record<CdfPillar["icon"], string>>;

function MaskedPillarIcon({ src, className }: { src: string; className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        pillarIconSizeClass,
        "bg-current [mask-position:center] [mask-repeat:no-repeat] [mask-size:122%]",
        className,
      )}
      style={{
        maskImage: `url("${src}")`,
        WebkitMaskImage: `url("${src}")`,
      }}
    />
  );
}

function PillarIcon({ icon, className }: { icon: CdfPillar["icon"]; className?: string }) {
  const maskSrc = pillarIconMasks[icon as keyof typeof pillarIconMasks];
  if (maskSrc) {
    return <MaskedPillarIcon src={maskSrc} className={className} />;
  }

  return <Icon name={icon} className={cn(pillarIconSizeClass, className)} />;
}

function PillarCard({ pillar }: { pillar: CdfPillar }) {
  const styles = accentStyles[pillar.accent];

  return (
    <article className="group relative overflow-hidden border border-line bg-paper p-7 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-18px_rgba(15,61,56,0.2)]">
      <span className={cn("absolute inset-x-0 top-0 h-[3px]", styles.bar)} />
      <span className="absolute right-5 top-4 font-montserrat text-[2.6rem] font-black leading-none text-forest/7">
        {pillar.number}
      </span>
      <div className="mb-4 flex items-center gap-3">
        <span className={cn("grid h-11 w-11 place-items-center rounded-[10px]", styles.icon)}>
          <PillarIcon icon={pillar.icon} />
        </span>
        <h3 className="font-montserrat text-base font-extrabold text-forest-deep">{pillar.title}</h3>
      </div>
      <ul className="space-y-2">
        {pillar.items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-[0.88rem] leading-snug text-slate">
            <span className={cn("mt-2 h-[5px] w-[5px] shrink-0 rounded-full", styles.dot)} />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function CdfOverviewSection() {
  const { overview } = academicsPageContent;

  return (
    <Section id="overview" background="white">
      <RevealOnScroll>
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel centered>{overview.label}</SectionLabel>
          <SectionTitle className="mt-1 text-center">{overview.title}</SectionTitle>
          <p className="mx-auto mt-3 max-w-[56ch] text-slate">{overview.description}</p>
        </div>
      </RevealOnScroll>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {overview.pillars.map((pillar, index) => (
          <RevealOnScroll key={pillar.title} delay={Math.min(index, 3) as 0 | 1 | 2 | 3}>
            <PillarCard pillar={pillar} />
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  );
}
