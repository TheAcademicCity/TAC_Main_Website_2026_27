import { campusPageContent } from "@/data/campus";
import { PageHeroBackdrop } from "@/components/sections/shared/PageHeroBackdrop";
import { Container } from "@/components/ui/Container";

export function CampusVideoSection() {
  const { label, title, titleHighlight, description, video } = campusPageContent;
  const embedUrl = `https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&mute=1&playsinline=1&rel=0&modestbranding=1`;

  return (
    <section className="relative overflow-hidden bg-forest-deep pt-[var(--site-nav-stack)]">
      <PageHeroBackdrop gradient="compact" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full border-[40px] border-white/4"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full border-[36px] border-white/4"
      />

      <Container className="relative z-[1] max-w-[1100px] px-[4vw] py-10 lg:py-14">
        <div className="text-center">
          <span className="mb-2 inline-flex items-center gap-2 font-montserrat text-[0.68rem] font-extrabold uppercase tracking-[0.22em] text-gold before:h-0.5 before:w-5 before:bg-gold before:content-['']">
            {label}
          </span>
          <h1 className="font-montserrat text-[clamp(1.85rem,3.5vw,2.75rem)] font-black leading-tight text-white">
            {title} <em className="not-italic text-gold">{titleHighlight}</em>
          </h1>
          <p className="mx-auto mt-3 max-w-[52ch] text-[0.95rem] leading-relaxed text-white/60">
            {description}
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-xl border border-white/12 bg-black shadow-[0_28px_80px_-36px_rgba(0,0,0,0.65)] sm:mt-10">
          <div className="relative aspect-video w-full">
            <iframe
              src={embedUrl}
              title={video.title}
              className="absolute inset-0 h-full w-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
