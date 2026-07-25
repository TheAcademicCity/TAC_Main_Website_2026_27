"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const SPLASH_MS = 3400;

type SplashPhase = "play" | "gone";

export function BrandSplashScreen() {
  const [phase, setPhase] = useState<SplashPhase>("play");
  const [animateLogo, setAnimateLogo] = useState(false);
  const timersRef = useRef<number[]>([]);

  useLayoutEffect(() => {
    document.documentElement.dataset.splash = "pending";
    document.body.style.setProperty("overflow", "hidden");

    // Start CSS animation after hydration so it is not interrupted mid-run.
    const startFrame = requestAnimationFrame(() => {
      const runFrame = requestAnimationFrame(() => setAnimateLogo(true));
      timersRef.current.push(runFrame);
    });
    timersRef.current.push(startFrame);

    return () => {
      timersRef.current.forEach((id) => cancelAnimationFrame(id));
      timersRef.current = [];
    };
  }, []);

  useEffect(() => {
    if (!animateLogo) return;

    const clearScrollLock = () => {
      document.body.style.removeProperty("overflow");
      document.documentElement.removeAttribute("data-splash");
    };

    const goneTimer = window.setTimeout(() => {
      setPhase("gone");
      clearScrollLock();
    }, SPLASH_MS);

    return () => {
      window.clearTimeout(goneTimer);
      clearScrollLock();
    };
  }, [animateLogo]);

  if (phase === "gone") return null;

  return (
    <div
      aria-hidden
      className={cn(
        "brand-splash-overlay fixed inset-0 z-[9999] flex items-center justify-center bg-forest-deep",
        animateLogo && "brand-splash-overlay--play",
      )}
    >
      <div className={cn("brand-splash-logo px-6", animateLogo && "brand-splash-logo--play")}>
        <img
          src={siteConfig.brand.logo.src}
          alt=""
          width={siteConfig.brand.logo.width}
          height={siteConfig.brand.logo.height}
          decoding="sync"
          fetchPriority="high"
          className="h-auto w-[min(78vw,420px)]"
        />
      </div>
    </div>
  );
}
