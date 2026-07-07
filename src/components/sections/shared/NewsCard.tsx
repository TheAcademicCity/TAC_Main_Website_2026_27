import Link from "next/link";
import type { NewsArticle } from "@/types";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

type NewsCardProps = {
  article: NewsArticle;
  delay?: 0 | 1 | 2 | 3 | 4;
};

function NewsCardContent({ article }: { article: NewsArticle }) {
  return (
    <>
      <div className="relative aspect-[16/10] overflow-hidden bg-forest-deep">
        <ImageWithFallback
          image={article.image}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute left-3.5 top-3.5 bg-gold px-2.5 py-1 text-center font-montserrat text-[0.72rem] font-extrabold leading-tight text-forest-deep">
          <b className="block text-xl">{article.day}</b>
          {article.month}
        </div>
      </div>
      <div className="px-5 py-6">
        <h4 className="mb-2 text-[1.02rem] font-bold leading-snug text-forest-deep">{article.title}</h4>
        <p className="text-[0.87rem] leading-relaxed text-slate">{article.excerpt}</p>
      </div>
    </>
  );
}

export function NewsCard({ article, delay = 0 }: NewsCardProps) {
  return (
    <RevealOnScroll delay={delay}>
      {article.href ? (
        <Link
          href={article.href}
          className="group block overflow-hidden bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-18px_rgba(15,61,56,0.22)]"
        >
          <NewsCardContent article={article} />
        </Link>
      ) : (
        <article className="group overflow-hidden bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-18px_rgba(15,61,56,0.22)]">
          <NewsCardContent article={article} />
        </article>
      )}
    </RevealOnScroll>
  );
}
