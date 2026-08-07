import type { AdmissionStep } from "@/types";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

type StepCardProps = {
  step: AdmissionStep;
  delay?: 0 | 1 | 2 | 3 | 4;
};

export function StepCard({ step, delay = 0 }: StepCardProps) {
  return (
    <RevealOnScroll delay={delay}>
      <article className="relative z-[1] px-1 pb-6 sm:px-4 sm:pb-8">
        <div className="mb-4 grid h-11 w-11 place-items-center rounded-full bg-gold font-montserrat text-[0.95rem] font-black text-forest-deep sm:mb-5">
          {step.number}
        </div>
        <h4 className="mb-2 text-[0.98rem] font-bold text-white">{step.title}</h4>
        <p className="text-[0.84rem] leading-relaxed text-white/58">{step.description}</p>
      </article>
    </RevealOnScroll>
  );
}
