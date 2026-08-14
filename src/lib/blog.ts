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
