import { Suspense } from "react";
import { enquiryContent } from "@/data/home";
import { EnquiryForm } from "@/components/sections/shared/EnquiryForm";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";

function EnquiryFormFallback() {
  return (
    <div className="border border-line bg-white p-8 shadow-[0_24px_60px_-32px_rgba(15,61,56,0.28)]">
      <div className="h-6 w-48 animate-pulse bg-line" />
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div className="h-12 animate-pulse bg-line" />
        <div className="h-12 animate-pulse bg-line" />
      </div>
      <div className="mt-5 h-12 animate-pulse bg-line" />
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div className="h-12 animate-pulse bg-line" />
        <div className="h-12 animate-pulse bg-line" />
      </div>
      <div className="mt-5 h-12 animate-pulse bg-line" />
    </div>
  );
}

export function EnquirySection() {
  return (
    <Section id="enquiry" background="paper" className="relative overflow-hidden">
      <RevealOnScroll>
        <SectionHeader
          label={enquiryContent.label}
          title={enquiryContent.title}
          description={enquiryContent.subtitle}
          className="mb-10 max-w-3xl [&_p]:text-[0.98rem] [&_p]:leading-relaxed"
        />
      </RevealOnScroll>

      <RevealOnScroll delay={1}>
        <Suspense fallback={<EnquiryFormFallback />}>
          <EnquiryForm />
        </Suspense>
      </RevealOnScroll>
    </Section>
  );
}
