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
          className="fixed inset-0 z-[220] flex items-center justify-center p-3 sm:p-6"
          role="presentation"
          onClick={closeEnquiryModal}
        >
          <div className="enquiry-modal-backdrop absolute inset-0 bg-forest-deep/35 backdrop-blur-[3px]" />

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="enquiry-modal-panel relative z-[1] max-h-[min(94vh,820px)] w-full max-w-[min(calc(100vw-1.5rem),23rem)] overflow-y-auto overflow-x-hidden rounded-xl border border-line/80 bg-paper/98 shadow-[0_24px_64px_-28px_rgba(15,61,56,0.38)] sm:max-h-[min(88vh,820px)] sm:max-w-xl sm:rounded-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="sticky top-0 z-[1] flex items-start justify-between gap-2 border-b border-line/80 bg-paper/98 px-3.5 py-2.5 sm:gap-3 sm:px-5 sm:py-3.5">
              <div className="min-w-0">
                <p className="font-montserrat text-[0.56rem] font-extrabold uppercase tracking-[0.12em] text-emerald sm:text-[0.64rem]">
                  {enquiryContent.label}
                </p>
                <h2
                  id={titleId}
                  className="mt-0.5 whitespace-pre-line font-montserrat text-[0.88rem] font-extrabold leading-snug text-forest-deep sm:text-[clamp(1rem,2vw,1.25rem)] sm:leading-snug"
                >
                  {enquiryContent.title}
                </h2>
              </div>

              <button
                type="button"
                onClick={closeEnquiryModal}
                className="grid h-7 w-7 shrink-0 place-items-center rounded-md border border-line bg-white/90 text-forest transition-colors hover:border-emerald hover:text-emerald sm:h-8 sm:w-8 sm:rounded-lg"
                aria-label="Close enquiry form"
              >
                <span aria-hidden className="text-[1rem] leading-none sm:text-[1.25rem]">
                  ×
                </span>
              </button>
            </div>

            <div className="px-3.5 py-3 sm:px-5 sm:py-4">
              <p className="mb-4 hidden text-[0.88rem] leading-relaxed text-slate sm:mb-4 sm:block">
                {enquiryContent.subtitle}
              </p>
              <EnquiryForm
                key={intent}
                intent={intent}
                formId="enquiry-form-modal"
                compact
                dense
                className="border-line/80 bg-white shadow-none !rounded-lg !p-2.5 sm:!rounded-xl sm:!p-5"
              />
            </div>
          </div>
        </div>
      ) : null}
    </EnquiryModalContext.Provider>
  );
}
