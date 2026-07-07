"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { SiteLink } from "@/components/layout/SiteLink";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

export function SideWidgets() {
  const [hiddenNearFooter, setHiddenNearFooter] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const onScroll = () => {
      const hide = footer.getBoundingClientRect().top < window.innerHeight - 60;
      setHiddenNearFooter(hide);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        className={cn(
          "fixed left-0 top-1/2 z-[80] hidden -translate-y-1/2 flex-col transition-opacity xl:flex",
          hiddenNearFooter && "pointer-events-none opacity-0",
        )}
      >
        {siteConfig.sideTabs.map((tab) => {
          const className =
            "flex items-center border-b border-white/10 bg-forest-deep px-2.5 py-3.5 font-montserrat text-[0.7rem] font-bold uppercase tracking-[0.14em] text-white transition-colors [writing-mode:vertical-rl] hover:bg-emerald";

          if ("external" in tab && tab.external) {
            return (
              <a
                key={tab.label}
                href={tab.href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {tab.label}
              </a>
            );
          }

          if ("download" in tab && tab.download) {
            return (
              <a
                key={tab.label}
                href={tab.href}
                download={tab.download}
                className={className}
              >
                {tab.label}
              </a>
            );
          }

          return (
            <Link key={tab.label} href={tab.href} className={className}>
              {tab.label}
            </Link>
          );
        })}
      </div>

      <div
        className={cn(
          "fixed right-0 top-1/2 z-[80] hidden -translate-y-1/2 flex-col transition-opacity xl:flex",
          hiddenNearFooter && "pointer-events-none opacity-0",
        )}
      >
        <a
          href={`tel:${siteConfig.contact.phone}`}
          title="Call"
          className="grid h-12 w-12 place-items-center border-b border-white/10 bg-forest-deep text-white transition-colors hover:bg-gold hover:text-forest-deep"
        >
          <Icon name="phone" className="h-5 w-5" />
        </a>
        <a
          href={siteConfig.contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp"
          className="grid h-12 w-12 place-items-center border-b border-white/10 bg-emerald text-white transition-colors hover:bg-[#22c55e]"
        >
          <span className="text-xs font-bold">WA</span>
        </a>
        <a
          href={`mailto:${siteConfig.contact.email}`}
          title="Email"
          className="grid h-12 w-12 place-items-center border-b border-white/10 bg-forest-deep text-white transition-colors hover:bg-gold hover:text-forest-deep"
        >
          <Icon name="mail" className="h-5 w-5" />
        </a>
        <SiteLink
          href="/#contact"
          title="Find us"
          className="grid h-12 w-12 place-items-center bg-forest-deep text-white transition-colors hover:bg-gold hover:text-forest-deep"
        >
          <Icon name="pin" className="h-5 w-5" />
        </SiteLink>
      </div>
    </>
  );
}
