import { statsContent } from "@/data/home";
import { StatItem } from "@/components/sections/shared/StatItem";
import { Container } from "@/components/ui/Container";

export function StatsBar() {
  return (
    <div id="about" className="bg-forest-deep">
      <Container>
        <div className="grid grid-cols-2 border-l border-white/10 md:grid-cols-3 lg:grid-cols-5">
          {statsContent.map((item) => (
            <StatItem key={item.label} item={item} />
          ))}
        </div>
      </Container>
    </div>
  );
}
