import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SideWidgets } from "@/components/layout/SideWidgets";
import { UtilityBar } from "@/components/layout/UtilityBar";

type SiteLayoutProps = {
  children: ReactNode;
};

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <>
      <UtilityBar />
      <Header />
      {children}
      <Footer />
      <SideWidgets />
    </>
  );
}
