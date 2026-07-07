import Link from "next/link";
import { siteConfig } from "@/config/site";

export function BrandLogo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="grid h-[52px] w-[52px] flex-none place-items-center rounded-full bg-gold shadow-[0_0_0_3px_rgba(246,171,22,0.25)]">
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-forest-deep" aria-hidden="true">
          <path d="M12 3 2 9l10 5 10-5-10-6Z" />
          <path d="M6 11.5v4.5c0 .8 2.7 2 6 2s6-1.2 6-2v-4.5" />
        </svg>
      </div>
      <div>
        <b className="block font-montserrat text-[1.08rem] font-extrabold leading-tight tracking-tight text-white">
          {siteConfig.name}
        </b>
        <span className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-gold">
          {siteConfig.tagline}
        </span>
      </div>
    </Link>
  );
}
