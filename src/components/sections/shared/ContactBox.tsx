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
    <div className="rounded-lg border border-white/10 bg-white/5 px-6 py-5">
      <h5 className="mb-3 flex items-center gap-2 font-montserrat text-[0.74rem] font-bold uppercase tracking-widest text-gold">
        <Icon name="pin" className="h-4 w-4" />
        {title}
      </h5>
      <p className="text-[0.9rem] leading-relaxed text-white/68">{address}</p>
      {phone ? (
        <a
          href={phoneHref ?? "#"}
          className="mt-2 block text-[0.9rem] text-white/68 hover:text-cyan"
        >
          {phone}
        </a>
      ) : null}
      {email ? (
        <a href={`mailto:${email}`} className="block text-[0.9rem] text-white/68 hover:text-cyan">
          {email}
        </a>
      ) : null}
    </div>
  );
}
