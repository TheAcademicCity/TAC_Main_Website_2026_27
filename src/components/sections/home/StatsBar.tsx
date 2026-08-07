import { statsContent } from "@/data/home";
import { StatItem } from "@/components/sections/shared/StatItem";
import { Container } from "@/components/ui/Container";

export function StatsBar() {
  return (
    <div id="about" className="bg-forest-deep">
      <Container>
        <div className="grid grid-cols-2 items-stretch border-l border-white/10 min-[601px]:grid-cols-3 lg:grid-cols-5">
          {statsContent.map((item, index) => (
            <StatItem
              key={`${item.value}-${item.label}`}
              item={item}
              className={
                index === statsContent.length - 1
                  ? "max-[600px]:col-span-2 max-[600px]:border-r-0"
                  : undefined
              }
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
