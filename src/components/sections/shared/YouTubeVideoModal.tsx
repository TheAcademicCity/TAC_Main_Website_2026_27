"use client";

import { useEffect, useId, useMemo } from "react";
import { createPortal } from "react-dom";

type YouTubeVideoModalProps = {
  videoId: string;
  title: string;
  onClose: () => void;
};

function buildEmbedUrl(videoId: string) {
  const params = new URLSearchParams({
    autoplay: "1",
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
    enablejsapi: "1",
  });

  if (typeof window !== "undefined") {
    params.set("origin", window.location.origin);
  }

  return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
}

export function YouTubeVideoModal({ videoId, title, onClose }: YouTubeVideoModalProps) {
  const titleId = useId();
  const embedUrl = useMemo(() => buildEmbedUrl(videoId), [videoId]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8"
      role="presentation"
      onClick={onClose}
    >
      <div
        className="gallery-lightbox-backdrop absolute inset-0 bg-black/25 backdrop-blur-2xl backdrop-saturate-150"
        aria-hidden
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="gallery-lightbox-panel relative z-[1] w-full max-w-5xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative overflow-hidden rounded-2xl border border-white/25 bg-black shadow-[0_32px_80px_-24px_rgba(10,44,40,0.45)]">
          <div className="relative aspect-video w-full">
            <iframe
              key={videoId}
              src={embedUrl}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />

            <button
              type="button"
              onClick={onClose}
              className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/40 bg-black/45 text-white shadow-[0_4px_20px_rgba(0,0,0,0.35)] backdrop-blur-md transition-colors hover:border-white/60 hover:bg-black/60"
              aria-label="Close video"
            >
              <span aria-hidden className="text-[1.35rem] leading-none">
                ×
              </span>
            </button>
          </div>
        </div>

        <p id={titleId} className="sr-only">
          {title}
        </p>
      </div>
    </div>,
    document.body,
  );
}
