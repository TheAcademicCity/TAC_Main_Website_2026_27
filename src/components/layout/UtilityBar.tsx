import { siteConfig } from "@/config/site";
import { Icon } from "@/components/ui/Icon";

export function UtilityBar() {
  const { phone, phoneDisplay, email } = siteConfig.utilityBar;

  return (
    <div className="fixed inset-x-0 top-0 z-[101] h-[var(--site-utility-height)] bg-[#2D945C] text-[0.72rem] font-medium text-white/90 sm:text-[0.8rem]">
      <div className="mx-auto flex h-full w-full max-w-[1200px] items-center justify-center gap-x-3 overflow-hidden px-4 text-center sm:gap-x-7 sm:px-[4vw]">
        <a
          href={`tel:${phone}`}
          className="inline-flex min-w-0 items-center gap-1.5 transition-colors hover:text-white"
        >
          <Icon name="phone" className="h-3.5 w-3.5 shrink-0" />
          <span className="truncate">{phoneDisplay}</span>
        </a>
        <span className="shrink-0 opacity-50" aria-hidden>
          |
        </span>
        <a
          href={`mailto:${email}`}
          className="inline-flex min-w-0 items-center gap-1.5 transition-colors hover:text-white"
        >
          <Icon name="mail" className="h-3.5 w-3.5 shrink-0" />
          <span className="truncate max-[380px]:hidden">{email}</span>
          <span className="truncate min-[381px]:hidden">Email</span>
        </a>
        <span className="hidden shrink-0 opacity-50 sm:inline" aria-hidden>
          |
        </span>
        <span className="hidden shrink-0 text-[0.78rem] font-bold tracking-wide text-white sm:inline">
          {siteConfig.admissionsBadge}
        </span>
      </div>
    </div>
  );
}
