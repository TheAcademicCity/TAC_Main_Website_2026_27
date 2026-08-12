import { siteConfig } from "@/config/site";

export function AdmissionsRibbon() {
  return (
    <div
      className="fixed inset-x-0 top-[var(--site-header-height)] z-[99] bg-gold px-2.5 py-1.5 text-center font-outfit text-[0.68rem] font-bold tracking-[0.04em] text-navy md:hidden"
      style={{ height: "var(--site-ribbon-height)" }}
    >
      <span className="inline-flex h-full items-center justify-center">
        {siteConfig.admissionsBadge.toUpperCase()} · GRADES 5–12
      </span>
    </div>
  );
}
