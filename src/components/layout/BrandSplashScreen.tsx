"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const SPLASH_STORAGE_KEY = "tacs-brand-splash-seen";
const LOGO_ZOOM_MS = 2800;
const FADE_START_MS = LOGO_ZOOM_MS - 500;
const OVERLAY_FADE_MS = 3400;

type SplashPhase = "boot" | "skip" | "zoom" | "fade" | "gone";

export function BrandSplashScreen() {
  const [phase, setPhase] = useState<SplashPhase>("boot");

  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem(SPLASH_STORAGE_KEY) === "1";

    if (hasSeenSplash) {
      setPhase("skip");
      return;
    }

    setPhase("zoom");
    document.body.style.overflow = "hidden";

    const fadeTimer = window.setTimeout(() => setPhase("fade"), FADE_START_MS);
    const goneTimer = window.setTimeout(() => {
      sessionStorage.setItem(SPLASH_STORAGE_KEY, "1");
      setPhase("gone");
      document.body.style.overflow = "";
    }, FADE_START_MS + OVERLAY_FADE_MS);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(goneTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "skip" || phase === "gone") return null;

  return (
    <div
      aria-hidden={phase === "fade"}
      className={cn(
        "brand-splash-overlay fixed inset-0 z-[9999] flex items-center justify-center bg-forest-deep",
        phase === "fade" && "brand-splash-overlay--fade",
      )}
    >
      <div
        className={cn(
          "brand-splash-logo px-6",
          phase === "zoom" && "brand-splash-logo--zoom",
          phase === "fade" && "brand-splash-logo--hold brand-splash-logo--exit",
        )}
      >
        <Image
          src={siteConfig.brand.logo.src}
          alt=""
          width={siteConfig.brand.logo.width}
          height={siteConfig.brand.logo.height}
          priority
          unoptimized
          className="h-auto w-[min(78vw,420px)]"
        />
      </div>
    </div>
  );
}
