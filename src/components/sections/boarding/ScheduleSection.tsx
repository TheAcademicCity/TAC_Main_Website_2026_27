"use client";

import { useState } from "react";
import { boardingPageContent } from "@/data/boarding";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

function ScheduleGrid({
  rows,
}: {
  rows: readonly { time: string; activity: string }[];
}) {
  const midpoint = Math.ceil(rows.length / 2);
  const leftRows = rows.slice(0, midpoint);
  const rightRows = rows.slice(midpoint);

  return (
    <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2 md:gap-5">
      <ScheduleColumn rows={leftRows} />
      <ScheduleColumn rows={rightRows} />
    </div>
  );
}

function ScheduleColumn({
  rows,
}: {
  rows: readonly { time: string; activity: string }[];
}) {
  return (
    <div className="w-full overflow-hidden rounded-lg border border-line">
      <ScheduleColumnHeader />
      {rows.map((row, index) => (
        <ScheduleRow key={`${row.time}-${row.activity}`} row={row} bordered={index > 0} />
      ))}
    </div>
  );
}

function ScheduleColumnHeader() {
  return (
    <div className="grid grid-cols-[minmax(0,7.25rem)_1fr] bg-forest-deep sm:grid-cols-[minmax(11.5rem,max-content)_1fr]">
      <div className="border-r border-white/15 px-2.5 py-2 font-montserrat text-[0.72rem] font-bold text-gold sm:whitespace-nowrap sm:px-4 sm:py-2.5 sm:text-[0.82rem]">
        Time
      </div>
      <div className="px-2.5 py-2 font-montserrat text-[0.78rem] font-semibold text-white/80 sm:px-4 sm:py-2.5 sm:text-[0.86rem]">
        Activity
      </div>
    </div>
  );
}

function ScheduleRow({
  row,
  bordered = false,
}: {
  row: { time: string; activity: string };
  bordered?: boolean;
}) {
  return (
    <div
      className={cn(
        "group relative grid grid-cols-[minmax(0,7.25rem)_1fr] bg-white transition-colors duration-200 hover:bg-forest/5 sm:grid-cols-[minmax(11.5rem,max-content)_1fr]",
        bordered && "border-t border-line",
      )}
    >
      <span
        aria-hidden
        className="absolute bottom-0 left-0 top-0 w-[3px] origin-left scale-x-0 bg-gold transition-transform duration-200 group-hover:scale-x-100"
      />
      <div className="border-r border-line px-2.5 py-2 font-montserrat text-[0.7rem] font-bold leading-snug text-forest whitespace-normal transition-colors duration-200 group-hover:text-forest-deep sm:whitespace-nowrap sm:px-4 sm:py-2.5 sm:text-[0.82rem]">
        {row.time}
      </div>
      <div className="min-w-0 px-2.5 py-2 text-[0.8rem] leading-snug text-slate transition-colors duration-200 group-hover:text-forest-deep sm:px-4 sm:py-2.5 sm:text-[0.86rem]">
        {row.activity}
      </div>
    </div>
  );
}

export function ScheduleSection() {
  const { schedule } = boardingPageContent;
  const [activeTab, setActiveTab] = useState(schedule.tabs[0]?.id ?? "weekday");
  const activeRows = schedule.tabs.find((tab) => tab.id === activeTab)?.rows ?? [];

  return (
    <Section
      id="schedule"
      background="paper"
      className="max-md:!bg-off-white max-md:!pt-4 max-md:!pb-7"
      containerClassName="max-md:!px-5"
    >
      {/* Mobile */}
      <div className="md:hidden">
        <RevealOnScroll>
          <SectionLabel className="!mb-2 before:hidden !text-[0.62rem] !tracking-[0.14em] !text-emerald">
            {schedule.label}
          </SectionLabel>
          <h2 className="font-montserrat text-[1.25rem] font-extrabold leading-[1.28] tracking-[-0.01em] text-navy">
            {schedule.title}
          </h2>
          <p className="mt-1.5 mb-4 text-[0.78125rem] leading-normal text-[#999]">
            {schedule.description}
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={1}>
          <div className="mb-4 flex gap-2">
            {schedule.tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex-1 rounded-[30px] px-3 py-2.5 font-outfit text-[0.8125rem] font-bold normal-case tracking-normal transition-colors",
                  activeTab === tab.id
                    ? "bg-navy text-white"
                    : "border border-off-white bg-white text-[#666]",
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div
            role="tabpanel"
            aria-label={`${activeTab} schedule`}
            className="overflow-hidden rounded-[16px] border border-off-white bg-white"
          >
            {activeRows.map((row, index) => (
              <div
                key={`${row.time}-${row.activity}`}
                className={cn(
                  "flex items-start gap-3 px-3.5 py-3",
                  index > 0 && "border-t border-off-white",
                )}
              >
                <span className="w-[5.75rem] shrink-0 font-montserrat text-[0.6875rem] font-bold leading-snug text-forest">
                  {row.time}
                </span>
                <span className="min-w-0 text-[0.75rem] leading-snug text-[#666]">
                  {row.activity}
                </span>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <RevealOnScroll>
          <SectionLabel>{schedule.label}</SectionLabel>
          <h2 className="font-montserrat text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold leading-tight text-forest-deep">
            {schedule.title}
          </h2>
          <p className="mt-2 max-w-[42ch] whitespace-normal text-[0.92rem] text-slate sm:max-w-none sm:text-[0.96rem] lg:whitespace-nowrap">
            {schedule.description}
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={1}>
          <div className="mt-5 flex w-full overflow-hidden rounded-lg border-[1.5px] border-line sm:mt-7 sm:inline-flex sm:w-auto">
            {schedule.tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex-1 px-3 py-2.5 font-montserrat text-[0.72rem] font-bold uppercase tracking-[0.1em] transition-colors sm:flex-none sm:px-6 sm:text-[0.78rem]",
                  activeTab === tab.id
                    ? "bg-forest-deep text-white"
                    : "bg-white text-slate hover:text-forest",
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div role="tabpanel" aria-label={`${activeTab} schedule`} className="mt-4">
            <ScheduleGrid rows={activeRows} />
          </div>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
