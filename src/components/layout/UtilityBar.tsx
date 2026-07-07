import { siteConfig } from "@/config/site";

export function UtilityBar() {
  const { phone, phoneDisplay, email } = siteConfig.utilityBar;

  return (
    <div className="fixed inset-x-0 top-0 z-[101] bg-forest-dark text-[0.8rem] font-medium text-[#b8d4cc]">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-8 px-[4vw] py-[0.42rem]">
        <div className="flex items-center gap-5">
          <a href={`tel:${phone}`} className="transition-colors hover:text-gold">
            {phoneDisplay}
          </a>
          <span className="opacity-25">|</span>
          <a href={`mailto:${email}`} className="transition-colors hover:text-gold">
            {email}
          </a>
        </div>
        <span className="text-[0.78rem] font-bold tracking-wide text-gold">
          {siteConfig.admissionsBadge}
        </span>
      </div>
    </div>
  );
}
