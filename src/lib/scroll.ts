/** Smoothly scroll to the top of the page, respecting reduced-motion preferences. */
export function smoothScrollToTop() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  window.scrollTo({
    top: 0,
    behavior: prefersReducedMotion ? "auto" : "smooth",
  });

  const topAnchor = document.getElementById("top");
  if (topAnchor) {
    topAnchor.focus({ preventScroll: true });
  }

  if (window.location.hash) {
    window.history.replaceState(null, "", window.location.pathname);
  }
}

/** Smoothly scroll to an in-page section by id. */
export function smoothScrollToSection(sectionId: string) {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const target = document.getElementById(sectionId);

  if (!target) return;

  target.scrollIntoView({
    behavior: prefersReducedMotion ? "auto" : "smooth",
    block: "start",
  });

  window.history.replaceState(null, "", `#${sectionId}`);
}

export function getSectionIdFromHref(href: string): string | null {
  const match = href.match(/^\/#([\w-]+)$/);
  return match?.[1] ?? null;
}

export function isHomeHref(href: string): boolean {
  return href === "/" || href === "/#top";
}
