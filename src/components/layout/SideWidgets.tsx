"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { SiteLink } from "@/components/layout/SiteLink";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

const sideTabClassName =
  "flex rotate-180 items-center border-b border-white/10 bg-forest-deep px-2.5 py-3.5 font-montserrat text-[0.7rem] font-bold uppercase tracking-[0.14em] text-white transition-colors [text-orientation:mixed] [writing-mode:vertical-rl] hover:bg-emerald";

const sideIconClassName =
  "grid h-12 w-12 place-items-center border-b border-white/10 text-white transition-colors";

const widgetStackClassName =
  "fixed top-1/2 z-[80] flex -translate-y-1/2 flex-col transition-opacity duration-300 ease-out";

export function SideWidgets() {
  const [hiddenNearFooter, setHiddenNearFooter] = useState(false);
  const { utilityBar, contact } = siteConfig;

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHiddenNearFooter(entry.isIntersecting);
      },
      { root: null, rootMargin: "0px 0px -60px 0px", threshold: 0 },
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const fadeClass = cn(hiddenNearFooter && "pointer-events-none opacity-0");

  return (
    <>
      {/* Left: vertical side tabs */}
      <div
        className={cn(
          widgetStackClassName,
          "left-0 hidden xl:flex",
          fadeClass,
        )}
        aria-hidden={hiddenNearFooter}
      >
        {siteConfig.sideTabs.map((tab) => {
          if ("external" in tab && tab.external) {
            return (
              <a
                key={tab.label}
                href={tab.href}
                target="_blank"
                rel="noopener noreferrer"
                className={sideTabClassName}
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
                className={sideTabClassName}
              >
                {tab.label}
              </a>
            );
          }

          return (
            <SiteLink key={tab.label} href={tab.href} className={sideTabClassName}>
              {tab.label}
            </SiteLink>
          );
        })}
      </div>

      {/* Right: stacked icon buttons */}
      <div
        className={cn(
          widgetStackClassName,
          "right-0 hidden xl:flex",
          fadeClass,
        )}
        aria-hidden={hiddenNearFooter}
      >
        <a
          href={`tel:${utilityBar.phone}`}
          title={`Call ${utilityBar.phoneDisplay}`}
          aria-label={`Call ${utilityBar.phoneDisplay}`}
          className={cn(sideIconClassName, "bg-forest-deep hover:bg-gold hover:text-forest-deep")}
        >
          <Icon name="phone" className="h-5 w-5" />
        </a>
        <a
          href={contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp"
          aria-label="WhatsApp"
          className={cn(sideIconClassName, "bg-emerald hover:bg-[#22c55e]")}
        >
          <Icon name="whatsapp" className="h-5 w-5" />
        </a>
        <a
          href={`mailto:${utilityBar.email}`}
          title={`Email ${utilityBar.email}`}
          aria-label={`Email ${utilityBar.email}`}
          className={cn(sideIconClassName, "bg-forest-deep hover:bg-gold hover:text-forest-deep")}
        >
          <Icon name="mail" className="h-5 w-5" />
        </a>
        <SiteLink
          href="/#contact"
          title="Find us"
          aria-label="Find us"
          className={cn(sideIconClassName, "border-b-0 bg-forest-deep hover:bg-gold hover:text-forest-deep")}
        >
          <Icon name="pin" className="h-5 w-5" />
        </SiteLink>
      </div>
    </>
  );
}
