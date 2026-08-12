import { blogPageContent } from "@/data/blog";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function BlogArticlesSection() {
  const { articles } = blogPageContent;

  return (
    <Section
      id="articles"
      background="paper"
      className="max-md:!bg-off-white max-md:!py-[34px]"
      containerClassName="max-md:!px-5"
    >
      <RevealOnScroll>
        <SectionLabel className="max-md:!mb-2 max-md:before:hidden max-md:!text-[0.62rem] max-md:!tracking-[0.14em] max-md:!text-emerald">
          {articles.label}
        </SectionLabel>
        <h2 className="font-montserrat text-[1.25rem] font-extrabold leading-[1.28] tracking-[-0.01em] text-navy md:text-[clamp(1.5rem,2.6vw,2rem)] md:leading-tight md:tracking-normal md:text-forest-deep">
          {articles.title}
        </h2>
      </RevealOnScroll>

      <div className="mt-5 grid items-start gap-7 md:mt-10 lg:grid-cols-[1fr_360px] lg:gap-10">
        <div>
          <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2 md:gap-6">
            {articles.posts.map((post, index) => (
              <RevealOnScroll key={post.href} delay={Math.min(index, 3) as 0 | 1 | 2 | 3}>
                <a
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col overflow-hidden rounded-[16px] border border-line bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-18px_rgba(15,61,56,0.18)] md:rounded-lg"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-forest-deep md:aspect-video">
                    <div className="absolute inset-0" style={{ background: post.gradient }} />
                    <ImageWithFallback
                      image={post.image}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-3.5 md:p-5">
                    <h3 className="text-[0.875rem] font-extrabold leading-snug text-navy md:text-[0.97rem] md:text-forest-deep">
                      {post.title}
                    </h3>
                    <p className="mt-1.5 flex-1 text-[0.75rem] leading-relaxed text-[#999] md:mt-2 md:text-[0.82rem] md:text-slate">
                      {post.description}
                    </p>
                    <div className="mt-2.5 flex items-center justify-between gap-3 md:mt-4">
                      <span className="text-[0.6875rem] text-[#999] md:text-[0.74rem] md:text-slate">
                        {post.readTime}
                      </span>
                      <span className="inline-flex shrink-0 items-center gap-1 font-montserrat text-[0.625rem] font-bold uppercase tracking-[0.1em] text-forest transition-all group-hover:gap-1.5 group-hover:text-emerald md:text-[0.68rem]">
                        Read
                        <Icon name="arrow" className="h-2.5 w-2.5" />
                      </span>
                    </div>
                  </div>
                </a>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {/* Sidebar: desktop only */}
        <aside className="hidden flex-col gap-6 md:flex lg:sticky lg:top-[calc(var(--site-nav-stack)+1.5rem)]">
          <RevealOnScroll>
            <div className="overflow-hidden rounded-lg border border-line bg-white">
              <div className="bg-forest-deep px-5 py-3.5 font-montserrat text-[0.72rem] font-extrabold uppercase tracking-[0.14em] text-gold">
                Popular Reads
              </div>
              <div className="px-5 py-2">
                {articles.popularPosts.map((post) => (
                  <div
                    key={post.number}
                    className="flex items-start gap-3 border-b border-paper py-3 last:border-b-0"
                  >
                    <div className="w-7 shrink-0 text-right font-montserrat text-[0.84rem] font-black leading-snug tabular-nums text-forest/15">
                      {post.number}
                    </div>
                    <div className="min-w-0">
                      <a
                        href={post.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-[0.84rem] font-bold leading-snug text-forest-deep hover:text-emerald"
                      >
                        {post.title}
                      </a>
                      <span className="mt-0.5 block text-[0.74rem] leading-snug text-slate">
                        {post.meta}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={1}>
            <div className="rounded-lg bg-forest-deep p-6">
              <div className="font-montserrat text-[0.72rem] font-extrabold uppercase tracking-[0.14em] text-gold">
                {articles.sidebarCta.label}
              </div>
              <p className="mt-2 text-[0.86rem] leading-relaxed text-white/70">
                {articles.sidebarCta.description}
              </p>
              <Button
                href={articles.sidebarCta.href}
                className="mt-4 justify-center px-5 py-2.5 text-[0.72rem]"
              >
                {articles.sidebarCta.buttonLabel}
                <Icon name="arrow" className="h-3.5 w-3.5" />
              </Button>
            </div>
          </RevealOnScroll>
        </aside>
      </div>
    </Section>
  );
}
