"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useEnquiryModal } from "@/components/layout/EnquiryModalProvider";
import { hasSeenAdmissionsPopup } from "@/lib/admissions-popup";

const POPUP_DELAY_MS = 60_000;

export function AdmissionsTimedPopup() {
  const pathname = usePathname();
  const { openEnquiryModal } = useEnquiryModal();

  useEffect(() => {
    if (pathname === "/contact" || hasSeenAdmissionsPopup()) {
      return;
    }

    const timer = window.setTimeout(() => {
      if (hasSeenAdmissionsPopup()) {
        return;
      }

      openEnquiryModal("general", "timed");
    }, POPUP_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, [openEnquiryModal, pathname]);

  return null;
}
