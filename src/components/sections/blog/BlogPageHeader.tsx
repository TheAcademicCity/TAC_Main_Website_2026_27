import { blogPageContent } from "@/data/blog";
import { BlogFilterPills } from "@/components/sections/blog/BlogFilterPills";
import { SiteLink } from "@/components/layout/SiteLink";
import { Container } from "@/components/ui/Container";

export function BlogPageHeader() {
  const { header } = blogPageContent;

  return (
    <section className="relative overflow-hidden bg-forest-deep pt-[var(--site-nav-stack)]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_60%,rgba(45,148,92,0.18),transparent_55%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 -right-20 h-[320px] w-[320px] rounded-full border-[50px] border-white/4"
        />

        <Container className="relative z-[1] py-[clamp(3rem,6vw,5rem)] pb-[clamp(2.5rem,5vw,4rem)]">
          <nav
            aria-label="Breadcrumb"
            className="mb-4 flex items-center gap-2 font-montserrat text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-white/45"
          >
            <SiteLink href="/" className="text-white/45 transition-colors hover:text-gold">
              Home
            </SiteLink>
            <span aria-hidden>›</span>
            <span className="text-white/70">Blog & Insights</span>
          </nav>

          <h1 className="font-montserrat text-[clamp(2rem,5vw,3.5rem)] font-black leading-[1.06] text-white">
            {header.title} <em className="not-italic text-gold">{header.titleHighlight}</em>
          </h1>
          <p className="mt-3 max-w-[50ch] text-[clamp(0.93rem,1.4vw,1.05rem)] font-light leading-relaxed text-white/65">
            {header.description}
          </p>
          <BlogFilterPills />
        </Container>
      </section>
  );
}
