import { statsContent } from "@/data/home";
import { StatItem } from "@/components/sections/shared/StatItem";
import { Container } from "@/components/ui/Container";

export function StatsBar() {
  return (
    <div id="about" className="bg-forest-deep">
      <Container>
        <div className="grid grid-cols-6 items-stretch lg:grid-cols-5 lg:border-l lg:border-white/10">
          {statsContent.map((item, index) => (
            <StatItem
              key={`${item.value}-${item.label}`}
              item={item}
              className={
                index < 3
                  ? "col-span-2 lg:col-span-1"
                  : index === 3
                    ? "col-span-2 col-start-2 lg:col-span-1 lg:col-start-auto"
                    : "col-span-2 lg:col-span-1"
              }
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
