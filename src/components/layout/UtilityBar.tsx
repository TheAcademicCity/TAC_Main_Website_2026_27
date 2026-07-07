import Link from "next/link";
import { siteConfig } from "@/config/site";

export function UtilityBar() {
  return (
    <div className="fixed inset-x-0 top-0 z-[101] bg-forest-dark text-[0.8rem] font-medium text-[#b8d4cc]">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-8 px-[4vw] py-[0.42rem]">
        <div className="flex items-center gap-5">
          <Link href={`tel:${siteConfig.contact.phone}`} className="transition-colors hover:text-gold">
            {siteConfig.contact.phoneDisplay}
          </Link>
          <span className="opacity-25">|</span>
          <Link
            href={`mailto:${siteConfig.contact.email}`}
            className="transition-colors hover:text-gold"
          >
            {siteConfig.contact.email}
          </Link>
        </div>
        <span className="text-[0.78rem] font-bold tracking-wide text-gold">
          {siteConfig.admissionsBadge}
        </span>
      </div>
    </div>
  );
}
