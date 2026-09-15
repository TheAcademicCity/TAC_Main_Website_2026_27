/** Monday of the week this reads feature shipped — counts grow from here. */
const BLOG_READS_EPOCH = Date.UTC(2026, 7, 10); // 2026-08-10
const MS_PER_WEEK = 7 * 24 * 60 * 60 * 1000;

export function getBlogReadCount(baseReads: number, weeklyIncrease: number, now = Date.now()): number {
  const weeks = Math.max(0, Math.floor((now - BLOG_READS_EPOCH) / MS_PER_WEEK));
  // Keep each post's odd/even parity as weekly bumps apply.
  const bump =
    (baseReads & 1) === (weeklyIncrease & 1)
      ? weeklyIncrease
      : weeklyIncrease + ((weeklyIncrease & 1) === 0 ? 1 : -1);

  let count = baseReads + weeks * bump;
  // Never show a trailing zero in the ones place (preserve parity with ±2).
  if (count % 10 === 0) {
    count += 2;
  }
  return count;
}

export function formatBlogReads(baseReads: number, weeklyIncrease: number): string {
  return `${getBlogReadCount(baseReads, weeklyIncrease).toLocaleString("en-IN")} reads`;
}

/** Deterministic base reads (10k-25k) and weekly bump (50-70) derived from a CMS post id. */
export function seedReadsFromId(id: number): { baseReads: number; weeklyIncrease: number } {
  const baseReads = 10_000 + ((id * 2654435761) % 15_000 >>> 0);
  const weeklyIncrease = 50 + ((id * 40503) % 21 >>> 0);
  return { baseReads, weeklyIncrease };
}

/** Strip HTML tags and collapse whitespace for use as a card excerpt or meta description. */
export function stripHtmlToExcerpt(html: string, maxLength = 150): string {
  const text = html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength).trimEnd()}…`;
}

/** Rough reading time estimate at ~200 words per minute. */
export function estimateReadMinutes(html: string): number {
  const wordCount = html.replace(/<[^>]+>/g, " ").trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(wordCount / 200));
}

/**
 * Some CMS posts embed the featured image again inside the body. Drop the first
 * inline <img> (and its now-empty wrapping <p>, if any) when its src matches the
 * hero image already rendered above the article, to avoid showing it twice.
 */
export function stripDuplicateHeroImage(html: string, heroImageUrl: string): string {
  const escaped = heroImageUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const imgPattern = new RegExp(`<img[^>]*src=["']${escaped}["'][^>]*>`, "i");
  const withImgRemoved = html.replace(imgPattern, "");

  if (withImgRemoved === html) {
    return html;
  }

  return withImgRemoved.replace(/<p>(\s|&nbsp;)*<\/p>/i, "");
}

const CATEGORY_PRESETS = [
  {
    category: "life",
    categoryLabel: "Student Life",
    gradient: "linear-gradient(135deg,#0f3d38,#185850)",
    badgeClass: "bg-forest text-white",
  },
  {
    category: "boarding",
    categoryLabel: "Boarding Life",
    gradient: "linear-gradient(135deg,#0a3028,#2d945c)",
    badgeClass: "bg-emerald text-white",
  },
  {
    category: "academics",
    categoryLabel: "Academics",
    gradient: "linear-gradient(135deg,#3d0d63,#6816a4)",
    badgeClass: "bg-violet text-white",
  },
  {
    category: "career",
    categoryLabel: "Career & LEAP",
    gradient: "linear-gradient(135deg,#7a4b00,#c4880e)",
    badgeClass: "bg-gold text-forest-deep",
  },
] as const;

export function categoryPresetForId(id: number) {
  return CATEGORY_PRESETS[id % CATEGORY_PRESETS.length];
}
