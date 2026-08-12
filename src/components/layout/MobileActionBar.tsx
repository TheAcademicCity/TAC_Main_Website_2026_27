"use client";

import { siteConfig } from "@/config/site";
import { useEnquiryModal } from "@/components/layout/EnquiryModalProvider";
import { Icon } from "@/components/ui/Icon";

export function MobileActionBar() {
  const { openEnquiryModal } = useEnquiryModal();
  const { phone } = siteConfig.utilityBar;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[120] flex gap-2 border-t border-off-white bg-white/92 px-3.5 pb-4 pt-2.5 backdrop-blur-md md:hidden">
      <a
        href={`tel:${phone}`}
        className="flex flex-1 flex-col items-center gap-0.5 rounded-xl py-1.5 font-outfit text-[0.62rem] font-bold text-charcoal"
      >
        <Icon name="phone" className="h-4 w-4 text-forest" />
        Call
      </a>
      <a
        href={siteConfig.contact.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 flex-col items-center gap-0.5 rounded-xl py-1.5 font-outfit text-[0.62rem] font-bold text-charcoal"
      >
        <Icon name="whatsapp" className="h-4 w-4 text-emerald" />
        WhatsApp
      </a>
      <button
        type="button"
        onClick={() => openEnquiryModal("general")}
        className="flex flex-1 flex-col items-center gap-0.5 rounded-[14px] bg-gold py-1.5 font-outfit text-[0.62rem] font-bold text-navy"
      >
        <Icon name="arrow" className="h-4 w-4" />
        Apply Now
      </button>
    </div>
  );
}
