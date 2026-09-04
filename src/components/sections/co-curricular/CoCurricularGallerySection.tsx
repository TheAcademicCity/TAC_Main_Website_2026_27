"use client";

import { coCurricularPageContent } from "@/data/coCurricular";
import { CtaLink } from "@/components/sections/shared/CtaLink";
import { PhotoGallery } from "@/components/sections/shared/PhotoGallery";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";
import { InstagramLogo } from "@/components/ui/InstagramLogo";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import type { GalleryImageItem } from "@/types";

export function CoCurricularGallerySection() {
  const { gallery } = coCurricularPageContent;
  const items = gallery.items as readonly GalleryImageItem[];

  return (
    <Section
      id="gallery"
      background="paper"
      className="!pt-[clamp(28px,3.5vw,44px)] max-md:!bg-white max-md:!px-0"
    >
      <div className="px-5 md:px-0">
        <div className="md:hidden">
          <SectionHeader
            label={gallery.label}
            title={gallery.title}
            reveal={false}
            className="mb-3.5 max-md:[&_h2]:text-[1.25rem] max-md:[&_h2]:leading-[1.28] max-md:[&_h2]:tracking-[-0.01em] max-md:[&_span]:text-[0.62rem]"
            labelClassName="before:hidden !tracking-[0.14em] !text-emerald"
          />
        </div>

        <div className="hidden md:block">
          <SectionHeader
            label={gallery.label}
            title={gallery.title}
            titleClassName="text-[clamp(1.5rem,2.6vw,2rem)]"
            className="flex-col items-start gap-3 sm:flex-row sm:items-end sm:gap-4"
            action={
              <CtaLink href={gallery.instagram.href} external className="shrink-0">
                <InstagramLogo className="h-4 w-4 shrink-0" />
                {gallery.instagram.label}
              </CtaLink>
            }
          />
        </div>
      </div>

      <RevealOnScroll delay={1} className="max-md:!transform-none max-md:!opacity-100 max-md:!translate-y-0">
        <div className="mt-0 px-5 md:mt-6 md:px-0">
          <PhotoGallery items={items} galleryId="co-curricular" layout="masonry" />
        </div>
      </RevealOnScroll>

      <p className="mt-3 px-5 text-center font-outfit text-[0.72rem] font-bold text-forest md:hidden">
        <a href={gallery.instagram.href} target="_blank" rel="noopener noreferrer">
          View Full Gallery on Instagram →
        </a>
      </p>
    </Section>
  );
}
