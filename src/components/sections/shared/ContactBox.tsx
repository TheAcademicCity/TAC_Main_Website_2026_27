import { Icon } from "@/components/ui/Icon";

type ContactBoxProps = {
  title: string;
  address: string;
  phone?: string;
  phoneHref?: string;
  email?: string;
};

export function ContactBox({ title, address, phone, phoneHref, email }: ContactBoxProps) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-4 sm:px-6 sm:py-5">
      <h5 className="mb-3 flex items-center gap-2 font-montserrat text-[0.74rem] font-bold uppercase tracking-widest text-gold">
        <Icon name="pin" className="h-4 w-4 shrink-0" />
        {title}
      </h5>
      <p className="break-words text-[0.9rem] leading-relaxed text-white/68">{address}</p>
      {phone || email ? (
        <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.9rem] text-white/68">
          {phone ? (
            <a href={phoneHref ?? "#"} className="whitespace-nowrap hover:text-cyan">
              {phone}
            </a>
          ) : null}
          {phone && email ? <span className="select-none text-white/35">|</span> : null}
          {email ? (
            <a href={`mailto:${email}`} className="break-all hover:text-cyan">
              {email}
            </a>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
