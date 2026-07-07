"use client";

import { useState } from "react";
import { galleryContent } from "@/data/home";
import { CtaLink } from "@/components/sections/shared/CtaLink";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";
import { TabGroup } from "@/components/sections/shared/TabGroup";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";

export function GallerySection() {
  const [activeTab, setActiveTab] = useState(galleryContent.tabs[0]?.id ?? "campus");
  const activeItems = galleryContent.tabs.find((tab) => tab.id === activeTab)?.items ?? [];

  return (
    <Section id="gallery">
      <SectionHeader
        label={galleryContent.label}
        title={galleryContent.title}
        action={
          <CtaLink href={galleryContent.instagram.href} external className="shrink-0">
            {galleryContent.instagram.label}
          </CtaLink>
        }
      />

      <RevealOnScroll>
        <TabGroup
          tabs={galleryContent.tabs.map(({ id, label }) => ({ id, label }))}
          activeId={activeTab}
          onChange={setActiveTab}
          className="mt-8"
        />
      </RevealOnScroll>

      <RevealOnScroll delay={1}>
        <div
          className="mt-6 columns-2 gap-2 md:columns-3 xl:columns-4"
          role="tabpanel"
          aria-label={`${activeTab} gallery`}
        >
          {activeItems.map((item) => (
            <figure
              key={item.label}
              className="group relative mb-2 break-inside-avoid overflow-hidden"
              style={{ minHeight: item.height }}
            >
              <div className="relative h-full min-h-[inherit] w-full bg-gradient-to-br from-forest-deep to-forest">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(111,220,239,0.15),transparent_60%)]" />
                <figcaption className="absolute bottom-0 left-0 z-[2] px-4 py-3 font-montserrat text-[0.72rem] font-bold uppercase tracking-wider text-white/70">
                  {item.label}
                </figcaption>
                <div className="absolute inset-0 z-[3] flex items-center justify-center bg-[rgba(10,44,40,0.6)] opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="grid h-11 w-11 place-items-center rounded-full border-2 border-white text-white">
                    <Icon name="zoom" className="h-5 w-5" />
                  </span>
                </div>
              </div>
            </figure>
          ))}
        </div>
      </RevealOnScroll>
    </Section>
  );
}
