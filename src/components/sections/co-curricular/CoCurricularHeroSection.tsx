import { coCurricularPageContent } from "@/data/coCurricular";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { SiteLink } from "@/components/layout/SiteLink";
import { Container } from "@/components/ui/Container";

const mobileValueChips = [
  { value: "Learn by Doing", label: "Hands-on, every day" },
  { value: "Lead with Purpose", label: "Take initiative" },
  { value: "Think Creatively", label: "Beyond the classroom" },
  { value: "Grow Together", label: "Teamwork & respect" },
] as const;

export function CoCurricularHeroSection() {
  const { hero } = coCurricularPageContent;

  return (
    <section className="relative flex min-h-[340px] items-end overflow-hidden bg-forest-deep pt-[var(--site-nav-stack)] md:min-h-[clamp(360px,52vh,500px)]">
      <div className="absolute inset-0">
        <ImageWithFallback
          image={hero.image}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_40%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(14,57,52,0.25)] to-[rgba(9,38,35,0.92)] md:bg-gradient-to-t md:from-[rgba(5,22,18,0.96)] md:via-[rgba(5,22,18,0.55)] md:to-[rgba(5,22,18,0.18)]" />
      </div>

      <Container className="relative z-[2] px-5 py-6 md:py-[clamp(1.5rem,4vw,3.5rem)]">
        <nav
          aria-label="Breadcrumb"
          className="mb-2.5 flex flex-wrap items-center gap-1.5 font-outfit text-[0.68rem] font-semibold text-white/55 md:mb-3 md:font-montserrat md:uppercase md:tracking-[0.12em] md:text-white/50"
        >
          <SiteLink href="/" className="transition-colors hover:text-gold">
            Home
          </SiteLink>
          <span aria-hidden>›</span>
          <span className="text-emerald md:text-white/70">Co-curricular</span>
        </nav>

        <h1 className="font-montserrat text-[1.5rem] font-extrabold leading-[1.2] text-white md:whitespace-pre-line md:text-[clamp(1.9rem,4.2vw,3.2rem)] md:font-black md:leading-[1.12]">
          Beyond the Classroom at <em className="not-italic text-gold">{hero.titleHighlight}</em>
        </h1>
        <p className="mt-2 max-w-[40ch] text-[0.8125rem] font-light leading-normal text-mist md:mt-3 md:max-w-none md:text-[clamp(0.93rem,1.4vw,1.04rem)] md:leading-relaxed md:text-white/70 lg:whitespace-nowrap">
          {hero.description}
        </p>

        {/* Mobile value chips */}
        <div className="mt-4 grid grid-cols-2 gap-2 md:hidden">
          {mobileValueChips.map((chip) => (
            <div
              key={chip.value}
              className="rounded-xl border border-white/20 bg-white/10 px-2.5 py-2.5"
            >
              <b className="mb-0.5 block text-[0.71875rem] font-bold text-white">{chip.value}</b>
              <span className="block text-[0.59375rem] leading-snug text-mist">{chip.label}</span>
            </div>
          ))}
        </div>

        {/* Desktop stats */}
        <dl className="mt-5 hidden flex-wrap gap-x-8 gap-y-5 md:flex">
          {hero.stats.map((stat) => (
            <div key={stat.label} className="min-w-0">
              <dt className="font-montserrat text-[clamp(1.05rem,2vw,1.35rem)] font-black leading-tight whitespace-nowrap text-gold">
                {stat.value}
              </dt>
              <dd className="mt-1.5 text-[0.74rem] font-medium leading-snug whitespace-nowrap text-white/55">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
