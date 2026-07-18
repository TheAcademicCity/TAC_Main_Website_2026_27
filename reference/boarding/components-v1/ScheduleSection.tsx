"use client";

import { useState } from "react";
import { boardingPageContent } from "@/data/boarding";
import { TabGroup } from "@/components/sections/shared/TabGroup";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

export function ScheduleSection() {
  const { schedule } = boardingPageContent;
  const [activeTab, setActiveTab] = useState(schedule.tabs[0]?.id ?? "weekday");
  const activeRows = schedule.tabs.find((tab) => tab.id === activeTab)?.rows ?? [];

  return (
    <Section id="schedule" background="paper">
      <RevealOnScroll className="mx-auto max-w-3xl text-center">
        <SectionLabel centered>{schedule.label}</SectionLabel>
        <h2 className="font-montserrat text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold text-forest-deep">
          {schedule.title}
        </h2>
        <p className="mx-auto mt-2 whitespace-nowrap text-[0.96rem] text-slate">{schedule.description}</p>
      </RevealOnScroll>

      <RevealOnScroll delay={1}>
        <div className="mx-auto mt-8 flex max-w-md justify-center">
          <TabGroup
            tabs={schedule.tabs.map(({ id, label }) => ({ id, label }))}
            activeId={activeTab}
            onChange={setActiveTab}
            className="w-full"
          />
        </div>

        <div
          role="tabpanel"
          aria-label={`${activeTab} schedule`}
          className="mt-6 overflow-hidden border border-line bg-white"
        >
          <div className="grid grid-cols-[minmax(9rem,1fr)_2fr] border-b border-line bg-forest-deep px-5 py-3 font-montserrat text-[0.68rem] font-bold uppercase tracking-[0.12em] text-white/70">
            <span>Time</span>
            <span>Activity</span>
          </div>
          {activeRows.map((row) => (
            <div
              key={`${row.time}-${row.activity}`}
              className={cn(
                "grid grid-cols-[minmax(9rem,1fr)_2fr] border-b border-line px-5 py-3.5 text-[0.86rem] last:border-b-0",
                "highlight" in row && row.highlight && "bg-gold/10",
              )}
            >
              <span className="font-montserrat text-[0.78rem] font-bold text-forest-deep">{row.time}</span>
              <span className={cn("text-slate", "highlight" in row && row.highlight && "font-semibold text-forest-deep")}>
                {row.activity}
              </span>
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </Section>
  );
}
