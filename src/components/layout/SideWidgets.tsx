"use client";

import { Fragment, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { SiteLink } from "@/components/layout/SiteLink";
import { GmailLogo } from "@/components/ui/GmailLogo";
import { InstagramLogo } from "@/components/ui/InstagramLogo";
import { WhatsAppLogo } from "@/components/ui/WhatsAppLogo";
import { Icon } from "@/components/ui/Icon";
import { getGmailComposeUrl } from "@/lib/email";
import { cn } from "@/lib/utils";

const sideTabClassName =
  "flex rotate-180 items-center bg-forest-deep px-2.5 py-3.5 font-montserrat text-[0.7rem] font-bold uppercase tracking-[0.14em] text-white transition-colors [text-orientation:mixed] [writing-mode:vertical-rl] hover:bg-emerald";

function SideTabDivider() {
  return <div className="h-px w-full shrink-0 bg-[#2D945C]" aria-hidden />;
}

const sideIconClassName =
  "grid h-12 w-12 place-items-center border-b border-white/10 text-white transition-colors last:border-b-0";

const sideBrandIconClassName = cn(sideIconClassName, "bg-forest-deep hover:bg-emerald");

const widgetStackClassName =
  "fixed top-1/2 z-[80] flex -translate-y-1/2 flex-col overflow-hidden shadow-lg transition-opacity duration-300 ease-out";

export function SideWidgets() {
  const pathname = usePathname();
  const [hiddenNearFooter, setHiddenNearFooter] = useState(false);
  const { utilityBar, contact, social } = siteConfig;
  const instagram = social.find((item) => item.icon === "instagram");

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

  if (pathname === "/contact") {
    return null;
  }

  return (
    <>
      {/* Left: vertical side tabs */}
      <div
        className={cn(
          widgetStackClassName,
          "left-0 hidden rounded-r-xl border border-white/25 xl:flex",
          fadeClass,
        )}
        aria-hidden={hiddenNearFooter}
      >
        {siteConfig.sideTabs.map((tab, index) => {
          const tabNode =
            "external" in tab && tab.external ? (
              <a
                href={tab.href}
                target="_blank"
                rel="noopener noreferrer"
                className={sideTabClassName}
              >
                {tab.label}
              </a>
            ) : "download" in tab && tab.download ? (
              <a href={tab.href} download={tab.download} className={sideTabClassName}>
                {tab.label}
              </a>
            ) : (
              <SiteLink href={tab.href} className={sideTabClassName}>
                {tab.label}
              </SiteLink>
            );

          return (
            <Fragment key={tab.label}>
              {index > 0 ? <SideTabDivider /> : null}
              {tabNode}
            </Fragment>
          );
        })}
      </div>

      {/* Right: stacked icon buttons */}
      <div
        className={cn(
          widgetStackClassName,
          "right-0 hidden rounded-l-xl xl:flex",
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
          className={sideBrandIconClassName}
        >
          <WhatsAppLogo className="h-7 w-7 shrink-0" />
        </a>
        {instagram ? (
          <a
            href={instagram.href}
            target="_blank"
            rel="noopener noreferrer"
            title={instagram.label}
            aria-label={instagram.label}
            className={sideBrandIconClassName}
          >
            <InstagramLogo className="h-6 w-6 shrink-0" />
          </a>
        ) : null}
        <a
          href={getGmailComposeUrl(utilityBar.email)}
          target="_blank"
          rel="noopener noreferrer"
          title={`Email ${utilityBar.email}`}
          aria-label={`Email ${utilityBar.email}`}
          className={sideBrandIconClassName}
        >
          <GmailLogo className="h-8 w-8 shrink-0" />
        </a>
        <SiteLink
          href="/#contact"
          title="Find us"
          aria-label="Find us"
          className={cn(sideIconClassName, "bg-forest-deep hover:bg-gold hover:text-forest-deep")}
        >
          <Icon name="pin" className="h-5 w-5" />
        </SiteLink>
      </div>
    </>
  );
}
