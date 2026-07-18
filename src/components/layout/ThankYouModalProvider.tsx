"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useState,
  type ReactNode,
} from "react";
import { HomeLink } from "@/components/layout/HomeLink";
import { cn } from "@/lib/utils";

type ThankYouModalContextValue = {
  showThankYouModal: () => void;
  closeThankYouModal: () => void;
};

const ThankYouModalContext = createContext<ThankYouModalContextValue | null>(null);

export function useThankYouModal() {
  const context = useContext(ThankYouModalContext);

  if (!context) {
    throw new Error("useThankYouModal must be used within ThankYouModalProvider");
  }

  return context;
}

type ThankYouModalProviderProps = {
  children: ReactNode;
};

export function ThankYouModalProvider({ children }: ThankYouModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const titleId = useId();

  const showThankYouModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeThankYouModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeThankYouModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeThankYouModal, isOpen]);

  return (
    <ThankYouModalContext.Provider value={{ showThankYouModal, closeThankYouModal }}>
      {children}

      {isOpen ? (
        <div
          className="fixed inset-0 z-[230] flex items-center justify-center p-4 sm:p-6"
          role="presentation"
          onClick={closeThankYouModal}
        >
          <div className="enquiry-modal-backdrop absolute inset-0 bg-forest-deep/40 backdrop-blur-[3px]" />

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="enquiry-modal-panel relative z-[1] w-full max-w-md rounded-2xl border border-line/80 bg-paper px-8 py-10 text-center shadow-[0_24px_64px_-28px_rgba(15,61,56,0.38)] sm:px-10 sm:py-12"
            onClick={(event) => event.stopPropagation()}
          >
            <h2
              id={titleId}
              className="font-montserrat text-[clamp(1.75rem,4vw,2.25rem)] font-black text-forest-deep"
            >
              Thank You
            </h2>

            <div className="mx-auto mt-6 grid h-[4.5rem] w-[4.5rem] place-items-center rounded-full bg-forest-deep text-white shadow-[0_12px_32px_-12px_rgba(15,61,56,0.45)]">
              <svg
                viewBox="0 0 24 24"
                className="h-9 w-9"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h3 className="mt-6 font-montserrat text-[1.15rem] font-extrabold text-forest-deep">
              You&apos;re All Set!
            </h3>

            <p className="mx-auto mt-3 max-w-[34ch] text-[0.95rem] leading-relaxed text-slate">
              We are glad to receive your interest. You will hear back from our team soon.
            </p>

            <HomeLink
              href="/"
              onClick={closeThankYouModal}
              className={cn(
                "mt-8 inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-3",
                "font-montserrat text-[0.78rem] font-extrabold uppercase tracking-[0.08em] text-forest-deep",
                "transition-all hover:-translate-y-0.5 hover:bg-[#e09d10]",
              )}
            >
              Go Back to Home
            </HomeLink>
          </div>
        </div>
      ) : null}
    </ThankYouModalContext.Provider>
  );
}
