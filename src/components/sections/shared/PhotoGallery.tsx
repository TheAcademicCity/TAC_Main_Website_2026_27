"use client";

import { useEffect, useId, useState, type CSSProperties } from "react";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";
import type { GalleryImageItem } from "@/types";

function GalleryItemVisual({
  item,
  className,
  style,
  sizes = "(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw",
}: {
  item: GalleryImageItem;
  className?: string;
  style?: CSSProperties;
  sizes?: string;
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
          sizes={sizes}
          className={cn("object-cover", item.imageObjectClassName ?? "object-center")}
        />
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(111,220,239,0.15),transparent_60%)]" />
      )}
    </div>
  );
}

function GalleryTileButton({
  item,
  onSelect,
  className,
  style,
  sizes,
  hero = false,
  fillCell = false,
}: {
  item: GalleryImageItem;
  onSelect: (item: GalleryImageItem) => void;
  className?: string;
  style?: CSSProperties;
  sizes?: string;
  hero?: boolean;
  fillCell?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(item)}
      className={cn(
        "group relative w-full overflow-hidden text-left",
        fillCell
          ? "h-full min-h-0"
          : hero
            ? "aspect-[16/9]"
            : "min-h-[min(var(--tile-h),min(48vw,220px))] md:min-h-[var(--tile-h)]",
        className,
      )}
      style={style}
      aria-label={`View ${item.label}`}
    >
      <GalleryItemVisual item={item} sizes={sizes} />
      <span className="pointer-events-none absolute inset-0 z-[3] flex items-center justify-center bg-[rgba(10,44,40,0.6)] opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
        <span className="grid h-11 w-11 place-items-center rounded-full border-2 border-white text-white">
          <Icon name="zoom" className="h-5 w-5" />
        </span>
      </span>
    </button>
  );
}

function GalleryLightboxImage({ item }: { item: GalleryImageItem }) {
  const image = item.image;
  const [src, setSrc] = useState(image?.src ?? "");

  useEffect(() => {
    setSrc(image?.src ?? "");
  }, [image?.src]);

  if (!image) {
    return (
      <div className="min-h-[min(52vh,420px)] min-w-[min(80vw,640px)] bg-gradient-to-br from-forest-deep to-forest" />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={image.alt}
      className="block h-auto max-h-[85vh] w-auto max-w-[min(calc(100vw-2rem),100%)] object-contain"
      onError={() => {
        if (image.fallbackSrc && src !== image.fallbackSrc) {
          setSrc(image.fallbackSrc);
        }
      }}
    />
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
        className="gallery-lightbox-panel relative z-[1] w-fit max-w-[min(calc(100vw-2rem),100%)] overflow-hidden rounded-2xl border border-white/25 bg-white/90 shadow-[0_32px_80px_-24px_rgba(10,44,40,0.45)] backdrop-blur-xl"
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

        <GalleryLightboxImage item={item} />
        <span id={titleId} className="sr-only">
          {item.label}
        </span>
      </div>
    </div>
  );
}

const bentoSpanClasses = [
  "col-start-1 row-span-2",
  "col-start-2 row-start-1",
  "col-start-2 row-start-2",
  "col-start-1 row-start-3",
  "col-start-2 row-start-3 row-span-2",
  "col-start-1 row-start-4",
] as const;

function BentoGrid({
  items,
  galleryId,
  onSelect,
}: {
  items: readonly GalleryImageItem[];
  galleryId: string;
  onSelect: (item: GalleryImageItem) => void;
}) {
  return (
    <div className="grid grid-cols-[1.3fr_1fr] grid-rows-[repeat(4,90px)] gap-2">
      {items.slice(0, 6).map((item, index) => (
        <button
          key={`bento-${galleryId}-${item.label}`}
          type="button"
          onClick={() => onSelect(item)}
          className={cn(
            "relative h-full w-full overflow-hidden rounded-[14px] border border-line text-left",
            bentoSpanClasses[index] ?? "col-span-1",
          )}
          aria-label={`View ${item.label}`}
        >
          <GalleryItemVisual item={item} className="absolute inset-0 h-full w-full" />
        </button>
      ))}
    </div>
  );
}

function MasonryGallery({
  items,
  galleryId,
  onSelect,
}: {
  items: readonly GalleryImageItem[];
  galleryId: string;
  onSelect: (item: GalleryImageItem) => void;
}) {
  return (
    <div
      className="columns-2 gap-2 md:columns-3 xl:columns-4"
      role="region"
      aria-label="Photo gallery"
    >
      {items.map((item) => (
        <GalleryTileButton
          key={`${galleryId}-${item.label}`}
          item={item}
          onSelect={onSelect}
          className="mb-2 break-inside-avoid"
          style={{ "--tile-h": `${item.height ?? 220}px` } as CSSProperties}
        />
      ))}
    </div>
  );
}

function MobileFeaturedGrid({
  items,
  galleryId,
  onSelect,
}: {
  items: readonly GalleryImageItem[];
  galleryId: string;
  onSelect: (item: GalleryImageItem) => void;
}) {
  const [featured, ...supporting] = items;

  return (
    <>
      {featured ? (
        <GalleryTileButton
          item={featured}
          onSelect={onSelect}
          hero
          className="mb-2 overflow-hidden rounded-[14px] border border-line"
          sizes="100vw"
        />
      ) : null}
      <div className="columns-2 gap-2">
        {supporting.map((item) => (
          <GalleryTileButton
            key={`${galleryId}-${item.label}`}
            item={item}
            onSelect={onSelect}
            className="mb-2 break-inside-avoid overflow-hidden rounded-[14px] border border-line"
            style={{ "--tile-h": `${item.height ?? 220}px` } as CSSProperties}
            sizes="50vw"
          />
        ))}
      </div>
    </>
  );
}

function FeaturedGridGallery({
  items,
  galleryId,
  onSelect,
}: {
  items: readonly GalleryImageItem[];
  galleryId: string;
  onSelect: (item: GalleryImageItem) => void;
}) {
  const [featured, ...supporting] = items;
  const besideHero = supporting.slice(0, 4);
  const masonryItems = supporting.slice(4);

  const besideHeroSlots = [
    "col-start-4 row-start-1",
    "col-start-5 row-start-1",
    "col-start-4 row-start-2",
    "col-start-5 row-start-2",
  ] as const;

  return (
    <div className="hidden md:flex md:flex-col md:gap-2" role="region" aria-label="Photo gallery">
      <div className="grid grid-cols-5 grid-rows-[clamp(188px,20vw,220px)_clamp(188px,20vw,220px)] gap-2">
        {featured ? (
          <GalleryTileButton
            item={featured}
            onSelect={onSelect}
            fillCell
            className="col-span-3 row-span-2 row-start-1 col-start-1"
            sizes="(min-width: 768px) 60vw, 100vw"
          />
        ) : null}
        {besideHero.map((item, index) => (
          <GalleryTileButton
            key={`${galleryId}-${item.label}`}
            item={item}
            onSelect={onSelect}
            fillCell
            className={besideHeroSlots[index]}
            sizes="(min-width: 768px) 20vw, 50vw"
          />
        ))}
      </div>
      {masonryItems.length ? (
        <div className="columns-2 gap-2 md:columns-3 xl:columns-4">
          {masonryItems.map((item) => (
            <GalleryTileButton
              key={`${galleryId}-${item.label}`}
              item={item}
              onSelect={onSelect}
              className="mb-2 break-inside-avoid"
              style={{ "--tile-h": `${item.height ?? 220}px` } as CSSProperties}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

type PhotoGalleryProps = {
  items: readonly GalleryImageItem[];
  galleryId?: string;
  layout?: "masonry" | "featured-grid";
};

export function PhotoGallery({
  items,
  galleryId = "gallery",
  layout = "featured-grid",
}: PhotoGalleryProps) {
  const [selectedItem, setSelectedItem] = useState<GalleryImageItem | null>(null);

  return (
    <>
      {layout === "masonry" ? (
        <>
          <div className="md:hidden">
            <BentoGrid items={items} galleryId={galleryId} onSelect={setSelectedItem} />
          </div>
          <div className="hidden md:block">
            <MasonryGallery items={items} galleryId={galleryId} onSelect={setSelectedItem} />
          </div>
        </>
      ) : (
        <>
          <div className="md:hidden">
            <MobileFeaturedGrid items={items} galleryId={galleryId} onSelect={setSelectedItem} />
          </div>
          <FeaturedGridGallery items={items} galleryId={galleryId} onSelect={setSelectedItem} />
        </>
      )}
      {selectedItem ? (
        <GalleryLightbox item={selectedItem} onClose={() => setSelectedItem(null)} />
      ) : null}
    </>
  );
}
