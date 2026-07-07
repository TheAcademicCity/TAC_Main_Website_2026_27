import type { ReactNode } from "react";
import { SiteLayout } from "@/components/layout/SiteLayout";

export default function SiteRouteLayout({ children }: { children: ReactNode }) {
  return <SiteLayout>{children}</SiteLayout>;
}
