"use client";

import { useState } from "react";
import { admissionsPageContent } from "@/data/admissions";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const { faq } = admissionsPageContent;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <Section
      id="faq"
      background="paper"
      className="max-md:!bg-off-white max-md:!pt-2 max-md:!pb-3"
      containerClassName="max-md:!px-5"
    >
      <RevealOnScroll>
        <SectionLabel className="max-md:!mb-2 max-md:before:hidden max-md:!text-[0.62rem] max-md:!tracking-[0.14em] max-md:!text-emerald">
          {faq.label}
        </SectionLabel>
        <h2 className="font-montserrat text-[1.25rem] font-extrabold leading-[1.28] tracking-[-0.01em] text-navy md:text-[clamp(1.5rem,2.6vw,2rem)] md:leading-tight md:tracking-normal md:text-forest-deep">
          {faq.title}
        </h2>
      </RevealOnScroll>

      <RevealOnScroll delay={1}>
        <div className="mt-4 flex flex-col gap-2 md:mt-8 md:gap-2.5">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={item.question}
                className={cn(
                  "group overflow-hidden rounded-xl border border-line bg-white transition-[transform,box-shadow,border-color] duration-300 md:rounded-lg",
                  isOpen
                    ? "shadow-[0_8px_30px_-10px_rgba(15,61,56,0.12)]"
                    : "hover:-translate-y-0.5 hover:border-forest/20 hover:shadow-[0_10px_28px_-12px_rgba(15,61,56,0.14)]",
                )}
              >
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-3 px-3.5 py-3 text-left transition-colors duration-200 hover:bg-forest/[0.03] md:items-center md:gap-4 md:px-5 md:py-4"
                  aria-expanded={isOpen}
                  onClick={() => toggleItem(index)}
                >
                  <span className="min-w-0 font-montserrat text-[0.8125rem] font-bold leading-snug text-navy transition-colors duration-200 group-hover:text-forest md:text-[0.9rem] md:text-forest-deep">
                    {item.question}
                  </span>
                  <span
                    className={cn(
                      "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border-[1.5px] transition-[background,border-color,transform] duration-300 md:mt-0 md:h-6 md:w-6",
                      isOpen
                        ? "border-forest-deep bg-forest-deep"
                        : "border-line bg-paper group-hover:scale-110 group-hover:border-emerald group-hover:bg-emerald/10",
                    )}
                  >
                    <Icon
                      name="plus"
                      className={cn(
                        "h-3 w-3 transition-[transform,color] duration-300 md:h-3.5 md:w-3.5",
                        isOpen ? "rotate-45 text-white" : "text-slate group-hover:text-emerald",
                      )}
                    />
                  </span>
                </button>

                <div
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-line px-3.5 pb-3 pt-1 text-[0.75rem] leading-relaxed text-[#999] md:px-5 md:pb-4 md:text-[0.88rem] md:text-slate">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </RevealOnScroll>
    </Section>
  );
}
