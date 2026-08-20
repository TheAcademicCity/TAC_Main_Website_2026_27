import { boardingPageContent } from "@/data/boarding";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";
import type { SiteImage } from "@/types/images";

function MobileGalleryTile({
  item,
  className,
  sizes = "50vw",
}: {
  item: {
    label: string;
    image: SiteImage;
    imageObjectClassName?: string;
  };
  className?: string;
  sizes?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[14px] border border-line bg-gradient-to-br from-forest-deep to-forest",
        className,
      )}
    >
      <ImageWithFallback
        image={item.image}
        fill
        sizes={sizes}
        className={cn("object-cover", item.imageObjectClassName ?? "object-center")}
      />
    </div>
  );
}

export function GallerySection() {
  const { gallery } = boardingPageContent;
  const [featuredItem, ...supportingItems] = gallery.items;
  const mobileFooterItem = supportingItems.find((item) => item.wide);
  const mobileGridItems = supportingItems.filter((item) => !item.wide);
  const morningSport = mobileGridItems[0];
  const hostelLife = mobileGridItems[1];
  const farmNature = mobileGridItems[2];
  const eveningStudy = mobileGridItems[3];

  return (
    <Section
      id="gallery"
      className="max-md:!bg-white max-md:!pt-4 max-md:!pb-7"
      containerClassName="max-md:!px-5"
    >
      {/* Mobile */}
      <div className="md:hidden">
        <RevealOnScroll>
          <SectionLabel className="!mb-2 before:hidden !text-[0.62rem] !tracking-[0.14em] !text-emerald">
            {gallery.label}
          </SectionLabel>
          <h2 className="font-montserrat text-[1.25rem] font-extrabold leading-[1.28] tracking-[-0.01em] text-navy">
            {gallery.title}
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={1}>
          <div className="mt-4">
            {featuredItem ? (
              <MobileGalleryTile
                item={featuredItem}
                sizes="100vw"
                className="mb-2 aspect-[16/9]"
              />
            ) : null}
            <div className="grid grid-cols-2 grid-rows-[220px_200px_280px] gap-2">
              {morningSport ? (
                <MobileGalleryTile
                  item={morningSport}
                  className="col-start-1 row-start-1 min-h-0"
                />
              ) : null}
              {hostelLife ? (
                <MobileGalleryTile
                  item={hostelLife}
                  className="col-start-2 row-start-1 row-span-2 min-h-0"
                />
              ) : null}
              {farmNature ? (
                <MobileGalleryTile item={farmNature} className="col-start-1 row-start-2 min-h-0" />
              ) : null}
              {eveningStudy ? (
                <MobileGalleryTile
                  item={eveningStudy}
                  className="col-start-1 row-start-3 min-h-0"
                />
              ) : null}
            </div>
            {mobileFooterItem ? (
              <MobileGalleryTile
                item={mobileFooterItem}
                sizes="100vw"
                className="mt-2 aspect-[16/9] w-full"
              />
            ) : null}
          </div>
        </RevealOnScroll>
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <RevealOnScroll>
          <SectionLabel>{gallery.label}</SectionLabel>
          <h2 className="font-montserrat text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold leading-tight text-forest-deep">
            {gallery.title}
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={1}>
          <div className="mt-5 grid grid-cols-2 gap-1.5 sm:mt-7 md:grid-cols-4 md:grid-rows-[220px_180px]">
            {gallery.items.map((item) => (
              <div
                key={item.label}
                className={cn(
                  "group relative min-h-[150px] overflow-hidden rounded-lg bg-forest-deep sm:min-h-[180px] md:min-h-0",
                  item.wide && "md:col-span-2",
                )}
              >
                <div className="absolute inset-0">
                  <ImageWithFallback
                    image={item.image}
                    fill
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className={cn(
                      "object-cover transition duration-500 group-hover:scale-[1.06]",
                      item.imageObjectClassName ?? "object-center",
                    )}
                  />
                </div>
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(10,44,40,0.65)] via-transparent to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 z-[2] px-2.5 py-2.5 font-montserrat text-[0.65rem] font-bold uppercase tracking-[0.06em] text-white sm:inset-x-auto sm:bottom-3 sm:left-3.5 sm:px-0 sm:py-0 sm:text-[0.72rem] sm:tracking-[0.08em]">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
