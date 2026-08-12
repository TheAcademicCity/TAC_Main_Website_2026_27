"use client";

import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
  type CSSProperties,
} from "react";
import { achievementsGalleryContent } from "@/data/home";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";
import type { GalleryImageItem, GalleryItem, GalleryWordsItem } from "@/types";

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
          sizes="(max-width: 640px) 72vw, 240px"
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

    const isNarrow = window.innerWidth < 640;
    const maxWidth = Math.min(window.innerWidth * (isNarrow ? 0.9 : 0.52), isNarrow ? 360 : 420);
    const maxHeight = window.innerHeight * (isNarrow ? 0.62 : 0.48);
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
          <span className="pointer-events-none absolute right-2.5 top-2.5 z-[2] rounded-full border border-white/35 bg-forest-deep/70 px-2 py-1 font-montserrat text-[0.55rem] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm sm:right-3 sm:top-3 sm:px-2.5 sm:text-[0.58rem]">
            {item.category}
          </span>
        ) : null}
        {item.caption || item.detail ? (
          <span className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] bg-gradient-to-t from-forest-deep/90 via-forest-deep/55 to-transparent px-3 pb-3 pt-8 sm:px-4 sm:pb-3.5 sm:pt-10">
            {item.caption ? (
              <span className="block font-montserrat text-[0.8rem] font-bold leading-snug text-white sm:text-[0.85rem]">
                {item.caption}
              </span>
            ) : null}
            {item.detail ? (
              <span className="mt-0.5 block text-[0.68rem] font-medium leading-snug text-gold sm:text-[0.72rem]">
                {item.detail}
              </span>
            ) : null}
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
    <div className="@container flex h-full w-[min(64vw,220px)] shrink-0 items-center justify-center text-center [container-type:size] md:w-[240px]">
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
      className="group relative h-full w-[min(64vw,220px)] shrink-0 overflow-hidden rounded-[14px] text-left md:w-[240px] md:rounded-2xl"
      aria-label={`View ${item.label}`}
    >
      <GalleryItemVisual item={item} className="absolute inset-0 min-h-0" />
      {item.category ? (
        <span className="pointer-events-none absolute right-2.5 top-2.5 z-[2] rounded-full border border-white/35 bg-forest-deep/70 px-2.5 py-1 font-montserrat text-[0.58rem] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
          {item.category}
        </span>
      ) : null}
      {item.caption || item.detail ? (
        <span className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] bg-gradient-to-t from-forest-deep/90 via-forest-deep/55 to-transparent px-3 pb-2.5 pt-8">
          {item.caption ? (
            <span className="block font-montserrat text-[0.72rem] font-bold leading-snug text-white">
              {item.caption}
            </span>
          ) : null}
          {item.detail ? (
            <span className="mt-0.5 block text-[0.62rem] font-medium leading-snug text-gold">
              {item.detail}
            </span>
          ) : null}
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
  phaseDelay: string;
  onSelectImage: (item: GalleryImageItem, origin: OriginRect) => void;
}) {
  const loopItems = useMemo(() => [...items, ...items], [items]);

  return (
    <div className={cn("overflow-hidden", offsetClassName)}>
      <div
        className="gallery-marquee-track flex h-[112px] w-max gap-1.5 md:h-[160px] md:gap-2"
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
  const spaced = separateWordCards(items);
  const rows: GalleryItem[][] = [[], [], []];

  // Round-robin once — never pad/repeat student cards (that caused
  // Radhna/Olivia appearing twice within the same track).
  spaced.forEach((item, index) => {
    rows[index % 3]!.push(item);
  });

  return rows.map((row) => separateWordCards(row));
}

export function AchievementsGallerySection() {
  const [magnify, setMagnify] = useState<MagnifyState | null>(null);
  const items = achievementsGalleryContent.items as readonly GalleryItem[];
  const [rowA, rowB, rowC] = useMemo(() => splitIntoRows(items), [items]);

  return (
    <Section
      id="gallery"
      className="overflow-hidden max-md:!bg-white max-md:!py-[34px] md:!pt-10"
      spacing="compact"
      containerClassName="max-md:!px-5"
    >
      <SectionHeader
        label={achievementsGalleryContent.label}
        title={achievementsGalleryContent.title}
        labelClassName="max-md:!mb-2 max-md:before:hidden max-md:!text-[0.62rem] max-md:!tracking-[0.14em] max-md:!text-emerald"
        titleClassName="max-md:!text-[1.25rem] max-md:!font-extrabold max-md:!leading-[1.28] max-md:!tracking-[-0.01em] max-md:!text-navy md:text-[clamp(1.35rem,2.4vw,1.85rem)]"
      />

      <RevealOnScroll delay={1}>
        <div className="relative left-1/2 mt-5 w-screen max-w-none -translate-x-1/2 md:mt-8">
          <div
            className={cn(
              "flex flex-col gap-1.5 py-1 md:gap-2",
              magnify && "[&_.gallery-marquee-track]:[animation-play-state:paused]",
            )}
          >
            <TrackRow
              items={rowA}
              phaseDelay="0s"
              onSelectImage={(item, origin) => setMagnify({ item, origin })}
            />
            <TrackRow
              items={rowB}
              offsetClassName="pl-6 md:pl-20"
              phaseDelay="-40s"
              onSelectImage={(item, origin) => setMagnify({ item, origin })}
            />
            <TrackRow
              items={rowC}
              offsetClassName="pl-3 md:pl-10"
              phaseDelay="-80s"
              onSelectImage={(item, origin) => setMagnify({ item, origin })}
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
