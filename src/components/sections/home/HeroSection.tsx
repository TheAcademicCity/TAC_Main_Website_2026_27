"use client";

import { useEffect, useRef, useState } from "react";
import { heroContent } from "@/data/home";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { Container } from "@/components/ui/Container";

export function HeroSection() {
  const { video, title, titleHighlight, titleSuffix, subtitle } = heroContent;
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
    <section className="relative mt-[30px] flex h-[100svh] min-h-[100svh] flex-col overflow-hidden md:min-h-[600px]">
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

      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,22,18,0.82)] via-[rgba(5,22,18,0.38)] to-[rgba(5,22,18,0.12)]" />

      <div className="relative z-[2] mt-auto pb-[clamp(6.75rem,19vh,10.5rem)] text-center text-white md:pb-[clamp(5.5rem,12vh,8rem)]">
        <Container>
          <h1 className="mx-auto max-w-[16ch] font-montserrat text-[clamp(2.1rem,9vw,4.8rem)] font-black leading-[1.04] text-white [text-shadow:0_2px_40px_rgba(0,0,0,0.4)] md:text-[clamp(2.6rem,6.5vw,4.8rem)]">
            <span className="block">{title}</span>
            <em className="block not-italic text-gold">{titleHighlight}</em>
            <span className="block">{titleSuffix}</span>
          </h1>
          <p className="mx-auto mt-3 max-w-[36ch] text-[clamp(0.95rem,2.8vw,1.18rem)] font-light text-white/78 md:mt-4 md:max-w-none">
            {subtitle}
          </p>
        </Container>
      </div>

      <div className="pointer-events-none absolute bottom-5 left-1/2 z-[2] -translate-x-1/2 text-[0.68rem] uppercase tracking-[0.14em] text-white/40 md:bottom-5">
        <span className="hero-scroll-label inline-block md:hidden">Swipe</span>
        <span className="hero-scroll-label hidden md:inline-block">Scroll</span>
      </div>
    </section>
  );
}
