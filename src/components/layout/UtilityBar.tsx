import { siteConfig } from "@/config/site";
import { Icon } from "@/components/ui/Icon";

export function UtilityBar() {
  const { phone, phoneDisplay, email } = siteConfig.utilityBar;

  return (
    <div className="fixed inset-x-0 top-0 z-[101] bg-[#2D945C] text-[0.8rem] font-medium text-white/90">
      <div className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center justify-center gap-x-5 gap-y-1 px-[4vw] py-[0.42rem] text-center sm:gap-x-7">
        <a
          href={`tel:${phone}`}
          className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
        >
          <Icon name="phone" className="h-3.5 w-3.5 shrink-0" />
          {phoneDisplay}
        </a>
        <span className="opacity-50" aria-hidden>
          |
        </span>
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
        >
          <Icon name="mail" className="h-3.5 w-3.5 shrink-0" />
          {email}
        </a>
        <span className="opacity-50" aria-hidden>
          |
        </span>
        <span className="text-[0.78rem] font-bold tracking-wide text-white">
          {siteConfig.admissionsBadge}
        </span>
      </div>
    </div>
  );
}
