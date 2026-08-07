"use client";

import { useEffect, useId, useState, type CSSProperties } from "react";
import { galleryContent } from "@/data/home";
import { CtaLink } from "@/components/sections/shared/CtaLink";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";
import { TabGroup } from "@/components/sections/shared/TabGroup";
import { Icon } from "@/components/ui/Icon";
import { InstagramLogo } from "@/components/ui/InstagramLogo";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";
import type { GalleryImageItem } from "@/types";

function GalleryItemVisual({
  item,
  className,
  style,
}: {
  item: GalleryImageItem;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={cn(
        "relative h-full min-h-[inherit] w-full overflow-hidden bg-gradient-to-br from-forest-deep to-forest",
        className,
      )}
      style={style}
    >
      {item.image ? (
        <ImageWithFallback
          image={item.image}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(111,220,239,0.15),transparent_60%)]" />
      )}
    </div>
  );
}

function GalleryLightbox({
  item,
  onClose,
}: {
  item: GalleryImageItem;
  onClose: () => void;
}) {
  const titleId = useId();

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8"
      role="presentation"
      onClick={onClose}
    >
      <div
        className="gallery-lightbox-backdrop absolute inset-0 bg-black/25 backdrop-blur-2xl backdrop-saturate-150"
        aria-hidden
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="gallery-lightbox-panel relative z-[1] w-full max-w-4xl overflow-hidden rounded-2xl border border-white/25 bg-white/90 shadow-[0_32px_80px_-24px_rgba(10,44,40,0.45)] backdrop-blur-xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/40 bg-black/35 text-white backdrop-blur-md transition-colors hover:bg-black/50"
          aria-label="Close image preview"
        >
          <span aria-hidden className="text-[1.35rem] leading-none">
            ×
          </span>
        </button>

        <div className="relative min-h-[min(52vh,420px)] max-h-[72vh] w-full">
          <GalleryItemVisual item={item} className="min-h-[min(52vh,420px)] max-h-[72vh]" />
        </div>

        <div className="border-t border-line/60 px-5 py-4">
          <p
            id={titleId}
            className="font-montserrat text-[0.78rem] font-bold uppercase tracking-wider text-forest-deep"
          >
            {item.label}
          </p>
        </div>
      </div>
    </div>
  );
}

export function GallerySection() {
  const [activeTab, setActiveTab] = useState(galleryContent.tabs[0]?.id ?? "campus");
  const [selectedItem, setSelectedItem] = useState<GalleryImageItem | null>(null);
  const activeItems = galleryContent.tabs.find((tab) => tab.id === activeTab)?.items ?? [];

  useEffect(() => {
    setSelectedItem(null);
  }, [activeTab]);

  return (
    <Section id="gallery" className="!pt-[clamp(28px,3.5vw,44px)]">
      <SectionHeader
        label={galleryContent.label}
        title={galleryContent.title}
        className="flex-col items-start gap-3 sm:flex-row sm:items-end sm:gap-4"
        action={
          <CtaLink href={galleryContent.instagram.href} external className="shrink-0">
            <InstagramLogo className="h-4 w-4 shrink-0" />
            {galleryContent.instagram.label}
          </CtaLink>
        }
      />

      <RevealOnScroll>
        <TabGroup
          tabs={galleryContent.tabs.map(({ id, label }) => ({ id, label }))}
          activeId={activeTab}
          onChange={setActiveTab}
          className="mt-8"
        />
      </RevealOnScroll>

      <RevealOnScroll delay={1}>
        <div
          className="mt-6 columns-2 gap-2 md:columns-3 xl:columns-4"
          role="tabpanel"
          aria-label={`${activeTab} gallery`}
        >
          {activeItems.map((item) => (
            <button
              key={`${activeTab}-${item.label}`}
              type="button"
              onClick={() => setSelectedItem(item)}
              className="group relative mb-2 w-full break-inside-avoid overflow-hidden text-left min-h-[min(var(--tile-h),min(48vw,220px))] md:min-h-[var(--tile-h)]"
              style={{ "--tile-h": `${item.height}px` } as CSSProperties}
              aria-label={`View ${item.label}`}
            >
              <GalleryItemVisual item={item} />
              <span className="pointer-events-none absolute bottom-0 left-0 z-[2] max-w-full truncate px-3 py-2.5 font-montserrat text-[0.68rem] font-bold uppercase tracking-wider text-white/70 sm:px-4 sm:py-3 sm:text-[0.72rem]">
                {item.label}
              </span>
              <span className="pointer-events-none absolute inset-0 z-[3] flex items-center justify-center bg-[rgba(10,44,40,0.6)] opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                <span className="grid h-11 w-11 place-items-center rounded-full border-2 border-white text-white">
                  <Icon name="zoom" className="h-5 w-5" />
                </span>
              </span>
            </button>
          ))}
        </div>
      </RevealOnScroll>

      {selectedItem ? (
        <GalleryLightbox item={selectedItem} onClose={() => setSelectedItem(null)} />
      ) : null}
    </Section>
  );
}
