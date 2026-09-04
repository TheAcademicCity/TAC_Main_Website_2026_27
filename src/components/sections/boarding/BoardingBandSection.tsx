import { boardingPageContent } from "@/data/boarding";
import { BoardingDividerSection } from "./BoardingDividerSection";

export function BoardingBandSection() {
  return <BoardingDividerSection band={boardingPageContent.scheduleBand} />;
}

export function GadgetFreeBandSection() {
  return <BoardingDividerSection band={boardingPageContent.gadgetFreeBand} />;
}
