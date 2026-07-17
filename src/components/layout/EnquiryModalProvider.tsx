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
import { enquiryContent } from "@/data/home";
import { EnquiryForm } from "@/components/sections/shared/EnquiryForm";
import { type EnquiryIntent } from "@/lib/enquiry";

type EnquiryModalContextValue = {
  openEnquiryModal: (intent?: EnquiryIntent) => void;
  closeEnquiryModal: () => void;
};

const EnquiryModalContext = createContext<EnquiryModalContextValue | null>(null);

export function useEnquiryModal() {
  const context = useContext(EnquiryModalContext);

  if (!context) {
    throw new Error("useEnquiryModal must be used within EnquiryModalProvider");
  }

  return context;
}

function clearEnquiryUrl() {
  const { pathname, search } = window.location;
  const params = new URLSearchParams(search);
  params.delete("intent");

  const nextSearch = params.toString();
  const nextUrl = nextSearch ? `${pathname}?${nextSearch}` : pathname;
  window.history.replaceState(null, "", nextUrl);
}

type EnquiryModalProviderProps = {
  children: ReactNode;
};

export function EnquiryModalProvider({ children }: EnquiryModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [intent, setIntent] = useState<EnquiryIntent>("general");
  const titleId = useId();

  const openEnquiryModal = useCallback((nextIntent: EnquiryIntent = "general") => {
    setIntent(nextIntent);
    setIsOpen(true);
    clearEnquiryUrl();
  }, []);

  const closeEnquiryModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (window.location.hash.slice(1) !== "enquiry") {
      return;
    }

    const params = new URLSearchParams(window.location.search);
    const nextIntent: EnquiryIntent = params.get("intent") === "brochure" ? "brochure" : "general";
    openEnquiryModal(nextIntent);
  }, [openEnquiryModal]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeEnquiryModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeEnquiryModal, isOpen]);

  return (
    <EnquiryModalContext.Provider value={{ openEnquiryModal, closeEnquiryModal }}>
      {children}

      {isOpen ? (
        <div
          className="fixed inset-0 z-[220] flex items-center justify-center p-4 sm:p-6"
          role="presentation"
          onClick={closeEnquiryModal}
        >
          <div className="enquiry-modal-backdrop absolute inset-0 bg-forest-deep/35 backdrop-blur-[3px]" />

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="enquiry-modal-panel relative z-[1] max-h-[min(88vh,820px)] w-full max-w-xl overflow-y-auto overflow-x-hidden rounded-2xl border border-line/80 bg-paper/98 shadow-[0_24px_64px_-28px_rgba(15,61,56,0.38)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="sticky top-0 z-[1] flex items-start justify-between gap-3 border-b border-line/80 bg-paper/98 px-4 py-3.5 sm:px-5">
              <div>
                <p className="font-montserrat text-[0.64rem] font-extrabold uppercase tracking-[0.14em] text-emerald">
                  {enquiryContent.label}
                </p>
                <h2
                  id={titleId}
                  className="mt-0.5 font-montserrat text-[clamp(1rem,2vw,1.25rem)] font-extrabold text-forest-deep"
                >
                  {enquiryContent.title}
                </h2>
              </div>

              <button
                type="button"
                onClick={closeEnquiryModal}
                className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-line bg-white/90 text-forest transition-colors hover:border-emerald hover:text-emerald"
                aria-label="Close enquiry form"
              >
                <span aria-hidden className="text-[1.25rem] leading-none">
                  ×
                </span>
              </button>
            </div>

            <div className="px-4 py-4 sm:px-5">
              <p className="mb-4 text-[0.88rem] leading-relaxed text-slate">{enquiryContent.subtitle}</p>
              <EnquiryForm
                key={intent}
                intent={intent}
                formId="enquiry-form-modal"
                compact
                className="border-line/80 bg-white shadow-none !rounded-xl"
              />
            </div>
          </div>
        </div>
      ) : null}
    </EnquiryModalContext.Provider>
  );
}
