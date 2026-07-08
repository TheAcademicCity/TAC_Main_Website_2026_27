"use client";

import { useMemo, useState } from "react";
import { academicsPageContent } from "@/data/academics";
import type { GradeCurriculum } from "@/types/academics";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";
import { TabGroup } from "@/components/sections/shared/TabGroup";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

export function CurriculumSection() {
  const { offerings } = academicsPageContent;
  const [activeBoardId, setActiveBoardId] = useState(offerings.boards[0].id);
  const [activeGradeId, setActiveGradeId] = useState(offerings.boards[0].grades[0].id);

  const activeBoard = useMemo(
    () => offerings.boards.find((board) => board.id === activeBoardId) ?? offerings.boards[0],
    [activeBoardId, offerings.boards],
  );

  const activeGrade = useMemo((): GradeCurriculum => {
    return (
      activeBoard.grades.find((grade) => grade.id === activeGradeId) ?? activeBoard.grades[0]
    );
  }, [activeBoard.grades, activeGradeId]);

  const handleBoardChange = (boardId: string) => {
    setActiveBoardId(boardId);
    const board = offerings.boards.find((item) => item.id === boardId);
    if (board) setActiveGradeId(board.grades[0].id);
  };

  return (
    <Section background="white" id="curriculum">
      <RevealOnScroll>
        <SectionHeader
          label={offerings.label}
          title={offerings.title}
          description={offerings.description}
          reveal={false}
        />
      </RevealOnScroll>

      <RevealOnScroll delay={1}>
        <div className="mt-10 overflow-hidden border border-line bg-white shadow-[0_24px_60px_-36px_rgba(15,61,56,0.22)]">
          <TabGroup
            tabs={offerings.boards.map((board) => ({ id: board.id, label: board.label }))}
            activeId={activeBoardId}
            onChange={handleBoardChange}
            className="bg-paper"
          />

          <div className="border-b border-line bg-paper px-4 py-4">
            <div className="flex flex-wrap gap-2">
              {activeBoard.grades.map((grade) => {
                const isActive = grade.id === activeGradeId;

                return (
                  <button
                    key={grade.id}
                    type="button"
                    onClick={() => setActiveGradeId(grade.id)}
                    className={cn(
                      "rounded-full border px-3.5 py-1.5 font-montserrat text-[0.68rem] font-bold uppercase tracking-wider transition-colors",
                      isActive
                        ? "border-forest bg-forest text-white"
                        : "border-line bg-white text-slate hover:border-emerald/30 hover:text-forest",
                    )}
                  >
                    {grade.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[1fr_auto]">
            <div>
              <h3 className="font-montserrat text-[1.05rem] font-extrabold text-forest-deep">
                {activeGrade.intro}
              </h3>
              <p className="mt-3 max-w-[68ch] text-[0.92rem] leading-relaxed text-slate">
                {activeGrade.description}
              </p>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {activeGrade.groups.map((group) => (
                  <div key={group.title}>
                    <h4 className="font-montserrat text-[0.72rem] font-extrabold uppercase tracking-[0.14em] text-emerald">
                      {group.title}
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 text-[0.88rem] leading-relaxed text-forest-deep/88 before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-gold"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {activeGrade.footnote ? (
                <p className="mt-6 text-[0.82rem] italic text-slate">{activeGrade.footnote}</p>
              ) : null}
            </div>

            <div className="flex items-start lg:justify-end">
              <Button href={offerings.scholarshipCta.href} className="whitespace-nowrap px-6 py-3">
                {offerings.scholarshipCta.label}
              </Button>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </Section>
  );
}
