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
    <Section id="articles" background="paper">
      <RevealOnScroll>
        <SectionLabel>{articles.label}</SectionLabel>
        <h2 className="font-montserrat text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold text-forest-deep">
          {articles.title}
        </h2>
      </RevealOnScroll>

      <div className="mt-10 grid items-start gap-10 lg:grid-cols-[1fr_360px]">
        <div>
          <div className="grid gap-6 sm:grid-cols-2">
            {articles.posts.map((post, index) => (
              <RevealOnScroll key={post.href} delay={Math.min(index, 3) as 0 | 1 | 2 | 3}>
                <a
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-18px_rgba(15,61,56,0.18)]"
                >
                  <div className="relative aspect-video overflow-hidden bg-forest-deep">
                    <div className="absolute inset-0" style={{ background: post.gradient }} />
                    <ImageWithFallback
                      image={post.image}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-[0.97rem] font-extrabold leading-snug text-forest-deep">
                      {post.title}
                    </h3>
                    <p className="mt-2 flex-1 text-[0.82rem] leading-relaxed text-slate">
                      {post.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-[0.74rem] text-slate">{post.readTime}</span>
                      <span className="inline-flex items-center gap-1 font-montserrat text-[0.68rem] font-bold uppercase tracking-[0.1em] text-forest transition-all group-hover:gap-1.5 group-hover:text-emerald">
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

        <aside className="flex flex-col gap-6 lg:sticky lg:top-[calc(var(--site-nav-stack)+1.5rem)]">
          <RevealOnScroll>
            <div className="overflow-hidden rounded-lg border border-line bg-white">
              <div className="bg-forest-deep px-5 py-3.5 font-montserrat text-[0.72rem] font-extrabold uppercase tracking-[0.14em] text-gold">
                Popular Reads
              </div>
              <div className="px-5 py-2">
                {articles.popularPosts.map((post) => (
                  <div
                    key={post.number}
                    className="flex gap-3 border-b border-paper py-3 last:border-b-0"
                  >
                    <div className="w-7 shrink-0 text-center font-montserrat text-[1.3rem] font-black leading-none text-forest/15">
                      {post.number}
                    </div>
                    <div>
                      <a
                        href={post.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[0.84rem] font-bold leading-snug text-forest-deep hover:text-emerald"
                      >
                        {post.title}
                      </a>
                      <span className="mt-0.5 block text-[0.74rem] text-slate">{post.meta}</span>
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
              <Button href={articles.sidebarCta.href} className="mt-4 px-5 py-2.5 text-[0.72rem]">
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
