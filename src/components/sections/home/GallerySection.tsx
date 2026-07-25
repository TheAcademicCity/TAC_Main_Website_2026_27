"use client";

import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
  type CSSProperties,
} from "react";
import { galleryContent } from "@/data/home";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";
import type { GalleryImageItem, GalleryItem, GalleryWordsItem } from "@/types";

const ROW_SIZE = 20;
const WORD_COLORS = ["text-emerald", "text-gold"] as const;

type OriginRect = {
  left: number;
  top: number;
  width: number;
  height: number;
};

type MagnifyState = {
  item: GalleryImageItem;
  origin: OriginRect;
};

function isWordsItem(item: GalleryItem): item is GalleryWordsItem {
  return item.kind === "words";
}

function withTerminalPeriod(lines: readonly string[]): string[] {
  if (lines.length === 0) return [];
  const next = [...lines];
  const last = next.length - 1;
  const trimmed = next[last].trimEnd();
  if (!trimmed.endsWith(".")) {
    next[last] = `${trimmed}.`;
  }
  return next;
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

function GalleryMagnify({
  item,
  origin,
  onClose,
}: {
  item: GalleryImageItem;
  origin: OriginRect;
  onClose: () => void;
}) {
  const [expanded, setExpanded] = useState(false);

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

  useLayoutEffect(() => {
    const frame = window.requestAnimationFrame(() => setExpanded(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const target = useMemo(() => {
    if (typeof window === "undefined") {
      return origin;
    }

    const maxWidth = Math.min(window.innerWidth * 0.52, 420);
    const maxHeight = window.innerHeight * 0.48;
    const aspect = origin.width / Math.max(origin.height, 1);
    let width = maxWidth;
    let height = width / aspect;

    if (height > maxHeight) {
      height = maxHeight;
      width = height * aspect;
    }

    return {
      left: (window.innerWidth - width) / 2,
      top: (window.innerHeight - height) / 2,
      width,
      height,
    };
  }, [origin]);

  const frame = expanded ? target : origin;

  return (
    <div
      className="fixed inset-0 z-[200]"
      role="presentation"
      onClick={onClose}
    >
      <div
        className={cn(
          "absolute inset-0 bg-black/45 transition-opacity duration-300",
          expanded ? "opacity-100" : "opacity-0",
        )}
        aria-hidden
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label={item.label}
        className="absolute z-[1] overflow-hidden rounded-2xl shadow-[0_28px_80px_-20px_rgba(0,0,0,0.55)] transition-[left,top,width,height] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          left: frame.left,
          top: frame.top,
          width: frame.width,
          height: frame.height,
        }}
        onClick={(event) => event.stopPropagation()}
      >
        <GalleryItemVisual item={item} className="h-full min-h-0" />
        {item.category ? (
          <span className="pointer-events-none absolute right-3 top-3 z-[2] rounded-full border border-white/35 bg-forest-deep/70 px-2.5 py-1 font-montserrat text-[0.58rem] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
            {item.category}
          </span>
        ) : null}
      </div>
    </div>
  );
}

function WordsTile({ item, seed }: { item: GalleryWordsItem; seed: number }) {
  const lines = withTerminalPeriod(item.lines);
  const color = WORD_COLORS[seed % WORD_COLORS.length];
  const lineCount = lines.length;

  return (
    <div className="@container flex h-full w-[min(72vw,260px)] shrink-0 items-center justify-center text-center [container-type:size] sm:w-[240px]">
      <p
        className={cn(
          "flex h-[70%] w-[70%] flex-col items-center justify-center font-playfair italic font-medium leading-[1.05] tracking-tight",
          color,
        )}
        style={{
          fontSize:
            lineCount > 1
              ? "clamp(1.15rem, min(12cqw, 22cqh), 2.35rem)"
              : "clamp(1.45rem, min(16cqw, 28cqh), 2.85rem)",
        }}
      >
        {lines.map((line, index) => (
          <span key={`${line}-${index}`} className="block">
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
  onSelect: (origin: OriginRect) => void;
}) {
  return (
    <button
      type="button"
      onClick={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        onSelect({
          left: rect.left,
          top: rect.top,
          width: rect.width,
          height: rect.height,
        });
      }}
      className="group relative h-full w-[min(72vw,260px)] shrink-0 overflow-hidden rounded-2xl text-left sm:w-[240px]"
      aria-label={`Magnify ${item.label}`}
    >
      <GalleryItemVisual item={item} className="absolute inset-0 min-h-0" />
      {item.category ? (
        <span className="pointer-events-none absolute right-2.5 top-2.5 z-[2] rounded-full border border-white/35 bg-forest-deep/70 px-2.5 py-1 font-montserrat text-[0.58rem] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
          {item.category}
        </span>
      ) : null}
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
  onSelectImage: (item: GalleryImageItem, origin: OriginRect) => void;
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
              onSelect={(origin) => onSelectImage(item, origin)}
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

    while (insertAt > 0 && isWordsItem(result[insertAt - 1]!)) {
      insertAt += 1;
    }
    while (insertAt < result.length && isWordsItem(result[insertAt]!)) {
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
  const [magnify, setMagnify] = useState<MagnifyState | null>(null);
  const items = galleryContent.items as readonly GalleryItem[];
  const [rowA, rowB, rowC] = useMemo(() => splitIntoRows(items), [items]);

  const handleSelectImage = (item: GalleryImageItem, origin: OriginRect) => {
    setMagnify({ item, origin });
  };

  return (
    <Section id="gallery" className="overflow-hidden">
      <SectionHeader
        label={galleryContent.label}
        title={galleryContent.title}
      />

      <RevealOnScroll delay={1}>
        <div className="relative left-1/2 mt-8 w-screen max-w-none -translate-x-1/2">
          <div
            className={cn(
              "flex flex-col gap-2 py-1",
              magnify && "[&_.gallery-marquee-track]:[animation-play-state:paused]",
            )}
          >
            <TrackRow
              items={rowA}
              phaseDelay="0s"
              onSelectImage={handleSelectImage}
            />
            <TrackRow
              items={rowB}
              offsetClassName="pl-12 sm:pl-20"
              phaseDelay="-40s"
              onSelectImage={handleSelectImage}
            />
            <TrackRow
              items={rowC}
              offsetClassName="pl-6 sm:pl-10"
              phaseDelay="-80s"
              onSelectImage={handleSelectImage}
            />
          </div>
        </div>
      </RevealOnScroll>

      {magnify ? (
        <GalleryMagnify
          item={magnify.item}
          origin={magnify.origin}
          onClose={() => setMagnify(null)}
        />
      ) : null}
    </Section>
  );
}
