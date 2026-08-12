"use client";

import { useEffect, useRef, useState } from "react";
import { heroContent } from "@/data/home";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { Container } from "@/components/ui/Container";

export function HeroSection() {
  const { video, title, titleHighlight, titleSuffix, subtitle, mobileChips } = heroContent;
  const [videoSrc, setVideoSrc] = useState(video.src);
  const [showPoster, setShowPoster] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (videoRef.current?.readyState === 0) {
        setShowPoster(true);
      }
    }, 3500);

    return () => window.clearTimeout(timer);
  }, []);

  const handleVideoError = () => {
    if (videoSrc === video.fallbackSrc) {
      setShowPoster(true);
      return;
    }

    setVideoSrc(video.fallbackSrc);
  };

  return (
    <section className="relative mt-0 flex min-h-[85svh] flex-col overflow-hidden md:mt-[30px] md:h-[100svh] md:min-h-[600px]">
      <div className="absolute inset-0 bg-forest-deep">
        {!showPoster ? (
          <video
            key={videoSrc}
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            poster={video.poster.fallbackSrc}
            className="absolute inset-0 h-full w-full object-cover brightness-[1.18] contrast-[0.92]"
            data-placeholder={video.isPlaceholder ? "true" : undefined}
            onError={handleVideoError}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <ImageWithFallback
            image={video.poster}
            fill
            priority
            sizes="100vw"
            className="absolute inset-0 brightness-[1.18] contrast-[0.92]"
          />
        )}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(14,57,52,0.35)] via-[rgba(14,57,52,0.55)] to-[rgba(9,38,35,0.92)] md:bg-gradient-to-t md:from-[rgba(5,22,18,0.82)] md:via-[rgba(5,22,18,0.38)] md:to-[rgba(5,22,18,0.12)]" />

      {/* Mobile mock hero */}
      <div className="relative z-[2] flex flex-1 flex-col px-5 pt-[var(--site-nav-stack)] text-white md:hidden">
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <h1 className="font-montserrat text-[1.875rem] font-extrabold leading-[1.18] tracking-[-0.01em]">
            <span className="block">{title}</span>
            <span className="block text-gold">{titleHighlight}</span>
            <span className="block">{titleSuffix}</span>
          </h1>
          <h2 className="mt-3 whitespace-nowrap font-outfit text-[0.8rem] font-medium leading-snug text-mist sm:text-[0.875rem]">
            Instilling 21st Century Skills | Nelamangala, Bengaluru
          </h2>
        </div>
        <div className="flex justify-center gap-2.5 pb-5">
          {mobileChips.map((chip) => (
            <div
              key={chip.label}
              className="min-w-0 flex-1 rounded-[14px] border border-white/20 bg-white/10 px-3 py-2.5 text-center backdrop-blur-sm"
            >
              <b className="block font-montserrat text-[1.05rem] font-bold text-white">{chip.value}</b>
              <span className="text-[0.62rem] uppercase tracking-[0.04em] text-mist">{chip.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop hero */}
      <div className="relative z-[2] mt-auto hidden pb-[clamp(5.5rem,12vh,8rem)] text-center text-white md:block">
        <Container>
          <h1 className="mx-auto max-w-[16ch] font-montserrat text-[clamp(2.6rem,6.5vw,4.8rem)] font-black leading-[1.04] text-white [text-shadow:0_2px_40px_rgba(0,0,0,0.4)]">
            <span className="block">{title}</span>
            <em className="block not-italic text-gold">{titleHighlight}</em>
            <span className="block">{titleSuffix}</span>
          </h1>
          <p className="mx-auto mt-4 max-w-none text-[clamp(0.95rem,2.8vw,1.18rem)] font-light text-white/78">
            {subtitle}
          </p>
        </Container>
      </div>

      <div className="pointer-events-none absolute bottom-5 left-1/2 z-[2] hidden -translate-x-1/2 text-[0.68rem] uppercase tracking-[0.14em] text-white/40 md:block">
        <span className="hero-scroll-label inline-block">Scroll</span>
      </div>
    </section>
  );
}
