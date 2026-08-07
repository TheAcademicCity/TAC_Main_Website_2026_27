import { contactPageContent } from "@/data/contact";

export function ContactPageHero() {
  const { label, title, titleHighlight } = contactPageContent;

  return (
    <div className="shrink-0 text-center lg:text-left">
      <span className="mb-1 inline-flex items-center justify-center gap-2 font-montserrat text-[0.68rem] font-extrabold uppercase tracking-[0.22em] text-gold before:h-0.5 before:w-5 before:bg-gold before:content-[''] lg:justify-start">
        {label}
      </span>
      <h1 className="mx-auto max-w-[18ch] font-montserrat text-[clamp(1.55rem,6.5vw,2.35rem)] font-black leading-tight text-white lg:mx-0 lg:max-w-none md:text-[clamp(1.65rem,2.8vw,2.35rem)]">
        {title} <em className="not-italic text-gold">{titleHighlight}</em>
      </h1>
    </div>
  );
}
