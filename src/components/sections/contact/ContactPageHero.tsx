import { contactPageContent } from "@/data/contact";

export function ContactPageHero() {
  const { label, title, titleHighlight } = contactPageContent;

  return (
    <div className="shrink-0 text-center lg:text-left">
      <span className="mb-1 inline-flex items-center gap-2 font-montserrat text-[0.68rem] font-extrabold uppercase tracking-[0.22em] text-gold before:h-0.5 before:w-5 before:bg-gold before:content-['']">
        {label}
      </span>
      <h1 className="font-montserrat text-[clamp(1.65rem,2.8vw,2.35rem)] font-black leading-tight text-white">
        {title} <em className="not-italic text-gold">{titleHighlight}</em>
      </h1>
    </div>
  );
}
