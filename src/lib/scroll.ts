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
export function smoothScrollToSection(sectionId: string, search = "") {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const target = document.getElementById(sectionId);

  if (!target) return;

  target.scrollIntoView({
    behavior: prefersReducedMotion ? "auto" : "smooth",
    block: "start",
  });

  const nextUrl = search ? `/?${search}#${sectionId}` : `#${sectionId}`;
  window.history.replaceState(null, "", nextUrl);
}

export function getSectionIdFromHref(href: string): string | null {
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) return null;

  const sectionId = href.slice(hashIndex + 1).split("?")[0];
  return sectionId.length > 0 ? sectionId : null;
}

export function getSearchFromHref(href: string): string {
  const queryIndex = href.indexOf("?");
  if (queryIndex === -1) return "";

  const hashIndex = href.indexOf("#");
  const end = hashIndex === -1 ? href.length : hashIndex;
  return href.slice(queryIndex + 1, end);
}

export function isHomeHref(href: string): boolean {
  return href === "/" || href === "/#top";
}
