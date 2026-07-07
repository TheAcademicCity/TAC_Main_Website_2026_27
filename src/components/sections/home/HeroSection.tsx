"use client";

import { useEffect, useRef, useState } from "react";
import { heroContent } from "@/data/home";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { Container } from "@/components/ui/Container";

export function HeroSection() {
  const { video, eyebrow, title, titleHighlight, titleSuffix, subtitle } = heroContent;
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
    <section className="relative mt-[30px] flex h-[100svh] min-h-[600px] flex-col overflow-hidden">
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
            className="absolute inset-0 h-full w-full object-cover"
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
            className="absolute inset-0"
          />
        )}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,22,18,0.9)] via-[rgba(5,22,18,0.5)] to-[rgba(5,22,18,0.2)]" />

      <div className="relative z-[2] mt-auto pb-[clamp(3.5rem,8vh,6rem)] text-center text-white">
        <Container>
          <p className="mb-4 inline-flex items-center gap-2 text-[0.76rem] font-bold uppercase tracking-[0.24em] text-gold">
            {eyebrow}
          </p>
          <h1 className="mx-auto max-w-[16ch] font-montserrat text-[clamp(2.6rem,6.5vw,4.8rem)] font-black leading-[1.04] text-white [text-shadow:0_2px_40px_rgba(0,0,0,0.4)]">
            {title} <em className="not-italic text-gold">{titleHighlight}</em> {titleSuffix}
          </h1>
          <p className="mt-4 text-[clamp(1rem,1.8vw,1.18rem)] font-light text-white/78">{subtitle}</p>
        </Container>
      </div>

      <div className="absolute bottom-6 left-1/2 z-[2] flex -translate-x-1/2 flex-col items-center gap-2 text-[0.68rem] uppercase tracking-[0.14em] text-white/40">
        <div className="hero-scroll-line h-9 w-px bg-gradient-to-b from-white/50 to-transparent" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
