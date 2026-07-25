import { achievementsPageContent } from "@/data/achievements";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Container } from "@/components/ui/Container";
import type { SiteImage } from "@/types/images";
import { cn } from "@/lib/utils";

type StudentPhotoProps = {
  image: SiteImage;
  size?: "featured" | "card";
  className?: string;
};

function StudentPhoto({ image, size = "card", className }: StudentPhotoProps) {
  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden rounded-full border-2 border-line bg-paper shadow-[0_8px_24px_-12px_rgba(15,61,56,0.2)]",
        size === "featured" ? "h-44 w-44 md:h-52 md:w-52" : "h-24 w-24 md:h-28 md:w-28",
        className,
      )}
    >
      <ImageWithFallback
        image={image}
        fill
        sizes={size === "featured" ? "208px" : "112px"}
        className="object-cover object-[center_20%]"
      />
    </div>
  );
}

export function StarAchieverSection() {
  const { starAchiever } = achievementsPageContent;
  const { featured } = starAchiever;

  return (
    <section className="section-py bg-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <RevealOnScroll className="flex flex-col justify-center">
            <StudentPhoto image={featured.image} size="featured" className="mb-6" />
            <p className="mb-2 font-montserrat text-[0.68rem] font-bold uppercase tracking-[0.2em] text-emerald">
              {featured.eyebrow}
            </p>
            <h2 className="font-montserrat text-[clamp(1.8rem,3.5vw,3rem)] font-extrabold leading-tight text-forest-deep">
              {featured.name}{" "}
              {featured.nameHighlight ? (
                <em className="not-italic text-gold">{featured.nameHighlight}</em>
              ) : null}
            </h2>
            <p className="mt-3 font-montserrat text-[clamp(2.5rem,5vw,3.5rem)] font-black leading-none text-gold">
              {featured.stat}
            </p>
            <p className="mt-1 text-[0.84rem] text-slate">{featured.statLabel}</p>
            <p className="mt-4 max-w-[40ch] text-[0.92rem] leading-relaxed text-slate">
              {featured.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {featured.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gold/12 px-3 py-1 font-montserrat text-[0.68rem] font-bold uppercase tracking-[0.12em] text-gold-dark"
                >
                  {tag}
                </span>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={1} className="flex flex-col justify-center">
            <p className="mb-5 font-montserrat text-[0.72rem] font-bold uppercase tracking-[0.14em] text-slate">
              {starAchiever.subHeading}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {starAchiever.subAchievers.map((achiever) => (
                <div
                  key={achiever.name}
                  className="border border-line bg-paper p-5 transition-colors hover:border-emerald/40"
                >
                  <StudentPhoto image={achiever.image} className="mb-4" />
                  <p className="font-montserrat text-[0.88rem] font-bold text-forest-deep">{achiever.name}</p>
                  <p className="mt-1 font-montserrat text-[1.4rem] font-black leading-none text-emerald">
                    {achiever.value}
                  </p>
                  <p className="mt-1 text-[0.78rem] leading-snug text-slate">{achiever.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 border border-line bg-paper px-5 py-4">
              <p className="font-montserrat text-[1.4rem] font-black text-gold">{starAchiever.admissionsNote.value}</p>
              <p className="mt-1 text-[0.78rem] text-slate">{starAchiever.admissionsNote.label}</p>
            </div>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
