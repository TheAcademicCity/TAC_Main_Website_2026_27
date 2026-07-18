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
    <Section id="faq" background="paper">
      <RevealOnScroll>
        <SectionLabel>{faq.label}</SectionLabel>
        <h2 className="font-montserrat text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold text-forest-deep">
          {faq.title}
        </h2>
      </RevealOnScroll>

      <RevealOnScroll delay={1}>
        <div className="mt-8 flex flex-col gap-2.5">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={item.question}
                className={cn(
                  "group overflow-hidden rounded-lg border border-line bg-white transition-[transform,box-shadow,border-color] duration-300",
                  isOpen
                    ? "shadow-[0_8px_30px_-10px_rgba(15,61,56,0.12)]"
                    : "hover:-translate-y-0.5 hover:border-forest/20 hover:shadow-[0_10px_28px_-12px_rgba(15,61,56,0.14)]",
                )}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors duration-200 hover:bg-forest/[0.03]"
                  aria-expanded={isOpen}
                  onClick={() => toggleItem(index)}
                >
                  <span className="font-montserrat text-[0.9rem] font-bold leading-snug text-forest-deep transition-colors duration-200 group-hover:text-forest">
                    {item.question}
                  </span>
                  <span
                    className={cn(
                      "grid h-6 w-6 shrink-0 place-items-center rounded-full border-[1.5px] transition-[background,border-color,transform] duration-300",
                      isOpen
                        ? "border-forest-deep bg-forest-deep"
                        : "border-line bg-paper group-hover:scale-110 group-hover:border-emerald group-hover:bg-emerald/10",
                    )}
                  >
                    <Icon
                      name="plus"
                      className={cn(
                        "h-3.5 w-3.5 transition-[transform,color] duration-300",
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
                    <div className="border-t border-line px-5 pb-4 pt-1 text-[0.88rem] leading-relaxed text-slate">
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
