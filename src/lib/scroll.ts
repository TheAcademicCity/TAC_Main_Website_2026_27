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
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
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

export function getPathFromHref(href: string): string {
  const path = href.split("#")[0]?.split("?")[0] ?? "/";
  return path.length > 0 ? path : "/";
}

export function isSamePageHref(href: string, pathname: string): boolean {
  return getPathFromHref(href) === pathname;
}

/** True when a header nav link matches the current route (ignores hash-only links). */
export function isNavLinkActive(href: string, pathname: string): boolean {
  if (getSectionIdFromHref(href)) {
    return false;
  }

  if (isHomeHref(href)) {
    return pathname === "/";
  }

  return getPathFromHref(href) === pathname;
}

/** True when a dropdown parent or any of its children matches the current route. */
export function isNavDropdownActive(
  item: { href: string; children?: ReadonlyArray<{ href: string }> },
  pathname: string,
): boolean {
  if (item.children?.some((child) => isNavLinkActive(child.href, pathname))) {
    return true;
  }

  return isNavLinkActive(item.href, pathname);
}

/** Dropdown trigger href: current child page when active, otherwise the default parent href. */
export function getNavDropdownTriggerHref(
  item: { href: string; children?: ReadonlyArray<{ href: string }> },
  pathname: string,
): string {
  const activeChild = item.children?.find((child) => isNavLinkActive(child.href, pathname));
  return activeChild?.href ?? item.href;
}
