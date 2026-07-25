"use client";

import { useEffect, useId, useMemo, useState, type CSSProperties } from "react";
import { galleryContent } from "@/data/home";
import { CtaLink } from "@/components/sections/shared/CtaLink";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";
import { Icon } from "@/components/ui/Icon";
import { InstagramLogo } from "@/components/ui/InstagramLogo";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";
import type { GalleryImageItem, GalleryItem, GalleryWordsItem } from "@/types";

const ROW_SIZE = 20;
const FONT_SIZES = [
  "clamp(0.85rem,1.2vw,1.05rem)",
  "clamp(1rem,1.5vw,1.25rem)",
  "clamp(1.15rem,1.9vw,1.55rem)",
  "clamp(1.35rem,2.3vw,1.85rem)",
  "clamp(0.95rem,1.35vw,1.15rem)",
  "clamp(1.5rem,2.6vw,2.05rem)",
] as const;

function isWordsItem(item: GalleryItem): item is GalleryWordsItem {
  return item.kind === "words";
}

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
          sizes="280px"
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

function WordsTile({ item, seed }: { item: GalleryWordsItem; seed: number }) {
  const fontSize = FONT_SIZES[seed % FONT_SIZES.length];

  return (
    <div className="flex h-full w-[min(72vw,260px)] shrink-0 items-center justify-center rounded-2xl bg-paper px-5 py-6 text-center sm:w-[240px]">
      <p
        className="font-montserrat font-black leading-[1.12] tracking-tight text-forest-deep"
        style={{ fontSize }}
      >
        {item.lines.map((line, index) => (
          <span
            key={`${line}-${index}`}
            className={cn("block", item.accentLine === index && "text-gold")}
          >
            {line}
          </span>
        ))}
      </p>
    </div>
  );
}

function ImageTile({
  item,
  onSelect,
}: {
  item: GalleryImageItem;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="group relative h-full w-[min(72vw,260px)] shrink-0 overflow-hidden rounded-2xl text-left sm:w-[240px]"
      aria-label={`View ${item.label}`}
    >
      <GalleryItemVisual item={item} className="absolute inset-0 min-h-0" />
      <span className="pointer-events-none absolute bottom-0 left-0 z-[2] px-3 py-2.5 font-montserrat text-[0.68rem] font-bold uppercase tracking-wider text-white/70">
        {item.label}
      </span>
      <span className="pointer-events-none absolute inset-0 z-[3] flex items-center justify-center bg-[rgba(10,44,40,0.6)] opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
        <span className="grid h-10 w-10 place-items-center rounded-full border-2 border-white text-white">
          <Icon name="zoom" className="h-4 w-4" />
        </span>
      </span>
    </button>
  );
}

function TrackRow({
  items,
  offsetClassName,
  phaseDelay,
  onSelectImage,
}: {
  items: readonly GalleryItem[];
  offsetClassName?: string;
  /** Negative delay creates a phase offset while keeping the same direction/speed. */
  phaseDelay: string;
  onSelectImage: (item: GalleryImageItem) => void;
}) {
  const loopItems = useMemo(() => [...items, ...items], [items]);

  return (
    <div className={cn("overflow-hidden", offsetClassName)}>
      <div
        className="gallery-marquee-track flex h-[140px] w-max gap-2 sm:h-[160px]"
        style={{ animationDelay: phaseDelay }}
      >
        {loopItems.map((item, index) => {
          const sourceIndex = index % items.length;
          return isWordsItem(item) ? (
            <WordsTile
              key={`words-${index}`}
              item={item}
              seed={sourceIndex * 7 + item.lines.join("").length}
            />
          ) : (
            <ImageTile
              key={`${item.label}-${index}`}
              item={item}
              onSelect={() => onSelectImage(item)}
            />
          );
        })}
      </div>
    </div>
  );
}

/** Spread word cards so none sit next to each other (including loop seams). */
function separateWordCards(items: readonly GalleryItem[]): GalleryItem[] {
  const images = items.filter((item): item is GalleryImageItem => !isWordsItem(item));
  const words = items.filter(isWordsItem);

  if (images.length === 0) return [...items];

  const result: GalleryItem[] = [...images];
  const stride = Math.max(2, Math.floor(images.length / (words.length + 1)));

  words.forEach((word, index) => {
    let insertAt = Math.min(result.length, (index + 1) * stride + index);

    while (
      insertAt > 0 &&
      isWordsItem(result[insertAt - 1]!)
    ) {
      insertAt += 1;
    }
    while (
      insertAt < result.length &&
      isWordsItem(result[insertAt]!)
    ) {
      insertAt += 1;
    }

    result.splice(insertAt, 0, word);
  });

  // Avoid first/last both being words (marquee loop would make them consecutive).
  if (result.length > 1 && isWordsItem(result[0]!) && isWordsItem(result[result.length - 1]!)) {
    const swapWith = result.findIndex((item, index) => index > 0 && !isWordsItem(item));
    if (swapWith > 0) {
      const [wordCard] = result.splice(result.length - 1, 1);
      result.splice(swapWith, 0, wordCard!);
    }
  }

  return result;
}

function splitIntoRows(items: readonly GalleryItem[]) {
  const rows: GalleryItem[][] = [[], [], []];
  const spaced = separateWordCards(items);
  const padded = [...spaced];

  while (padded.length < ROW_SIZE * 3) {
    const next = spaced[padded.length % spaced.length]!;
    const prev = padded[padded.length - 1];
    if (isWordsItem(next) && prev && isWordsItem(prev)) {
      const imageFallback = spaced.find((item) => !isWordsItem(item));
      padded.push(imageFallback ?? next);
    } else {
      padded.push(next);
    }
  }

  for (let index = 0; index < ROW_SIZE * 3; index += 1) {
    rows[index % 3]!.push(padded[index]!);
  }

  return rows.map((row) => separateWordCards(row).slice(0, ROW_SIZE));
}

type GallerySectionProps = {
  dense?: boolean;
};

export function GallerySection(_props: GallerySectionProps = {}) {
  const [selectedItem, setSelectedItem] = useState<GalleryImageItem | null>(null);
  const items = galleryContent.items as readonly GalleryItem[];
  const [rowA, rowB, rowC] = useMemo(() => splitIntoRows(items), [items]);

  return (
    <Section id="gallery" className="overflow-hidden">
      <SectionHeader
        label={galleryContent.label}
        title={galleryContent.title}
        action={
          <CtaLink href={galleryContent.instagram.href} external className="shrink-0">
            <InstagramLogo className="h-4 w-4 shrink-0" />
            {galleryContent.instagram.label}
          </CtaLink>
        }
      />

      <RevealOnScroll delay={1}>
        <div className="relative left-1/2 mt-8 w-screen max-w-none -translate-x-1/2">
          <div className="flex flex-col gap-2 py-1 [&:hover_.gallery-marquee-track]:[animation-play-state:paused]">
            <TrackRow
              items={rowA}
              phaseDelay="0s"
              onSelectImage={setSelectedItem}
            />
            <TrackRow
              items={rowB}
              offsetClassName="pl-12 sm:pl-20"
              phaseDelay="-40s"
              onSelectImage={setSelectedItem}
            />
            <TrackRow
              items={rowC}
              offsetClassName="pl-6 sm:pl-10"
              phaseDelay="-80s"
              onSelectImage={setSelectedItem}
            />
          </div>
        </div>
      </RevealOnScroll>

      {selectedItem ? (
        <GalleryLightbox item={selectedItem} onClose={() => setSelectedItem(null)} />
      ) : null}
    </Section>
  );
}
