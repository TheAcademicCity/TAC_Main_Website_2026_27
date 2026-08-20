"use client";

import { useSearchParams } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import { enquiryContent } from "@/data/home";
import { siteConfig } from "@/config/site";
import { useEnquiryModal } from "@/components/layout/EnquiryModalProvider";
import { useThankYouModal } from "@/components/layout/ThankYouModalProvider";
import { triggerFileDownload } from "@/lib/downloads";
import { type EnquiryIntent } from "@/lib/enquiry";
import { getTrackingParams } from "@/lib/tracking";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type FormState = {
  fname: string;
  lname: string;
  mobile: string;
  selectclass: string;
  campus: string;
  email: string;
};

const initialState: FormState = {
  fname: "",
  lname: "",
  mobile: "",
  selectclass: "",
  campus: "",
  email: "",
};

const fieldClassName =
  "w-full rounded-lg border border-line bg-white px-4 py-3 text-[0.95rem] text-ink outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-slate/45 focus:border-emerald focus:ring-2 focus:ring-emerald/15";

const labelClassName =
  "mb-1.5 block font-montserrat text-[0.72rem] font-bold uppercase tracking-[0.12em] text-forest";

type EnquiryFormProps = {
  intent?: EnquiryIntent;
  formId?: string;
  className?: string;
  compact?: boolean;
  /** Extra-tight layout for the mobile enquiry popup; desktop matches compact. */
  dense?: boolean;
};

export function EnquiryForm({
  intent,
  formId = "enquiry-form",
  className,
  compact = false,
  dense = false,
}: EnquiryFormProps) {
  const searchParams = useSearchParams();
  const isBrochureIntent =
    intent === "brochure" || (!intent && searchParams.get("intent") === "brochure");

  const inputClassName = dense
    ? "w-full rounded-md border border-line bg-white px-2.5 py-2 text-[0.78rem] text-ink outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-slate/45 focus:border-emerald focus:ring-1 focus:ring-emerald/15 sm:rounded-lg sm:px-3.5 sm:py-2.5 sm:text-[0.9rem] sm:focus:ring-2"
    : compact
      ? "w-full rounded-md border border-line bg-white px-2.5 py-2 text-[0.8rem] text-ink outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-slate/45 focus:border-emerald focus:ring-2 focus:ring-emerald/15 sm:rounded-lg sm:px-3.5 sm:py-2.5 sm:text-[0.9rem]"
      : fieldClassName;

  const fieldLabelClassName = dense
    ? "mb-0.5 block font-montserrat text-[0.58rem] font-bold uppercase tracking-[0.1em] text-forest sm:mb-1 sm:text-[0.68rem]"
    : compact
      ? "mb-0.5 block font-montserrat text-[0.6rem] font-bold uppercase tracking-[0.12em] text-forest sm:mb-1 sm:text-[0.68rem]"
      : labelClassName;

  const fieldGapClassName = dense ? "mt-2 sm:mt-4" : compact ? "mt-2.5 sm:mt-4" : "mt-5";
  const gridGapClassName = dense ? "gap-2 sm:gap-4" : compact ? "gap-2.5 sm:gap-4" : "gap-5";
  const formPaddingClassName = dense ? "p-2.5 sm:p-5" : compact ? "p-2.5 sm:p-5" : "p-6 sm:p-8";

  const { closeEnquiryModal } = useEnquiryModal();
  const { showThankYouModal } = useThankYouModal();

  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [message, setMessage] = useState("");

  const submitLabel = useMemo(
    () => (isBrochureIntent ? "Submit & Download Brochure" : "Submit Enquiry"),
    [isBrochureIntent],
  );

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          intent: isBrochureIntent ? "brochure" : "general",
          sourcePath: window.location.pathname,
          page_url: window.location.href,
          ...getTrackingParams(searchParams),
        }),
      });

      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        setStatus("error");
        setMessage(result.message ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("idle");
      setForm(initialState);
      closeEnquiryModal();
      showThankYouModal();

      if (isBrochureIntent) {
        const { href, filename } = siteConfig.downloads.brochure;
        triggerFileDownload(href, filename);
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <form
      id={formId}
      onSubmit={handleSubmit}
      className={cn(
        "rounded-xl border border-line bg-white shadow-[0_24px_60px_-32px_rgba(15,61,56,0.28)]",
        formPaddingClassName,
        isBrochureIntent && "ring-2 ring-gold/35",
        className,
      )}
      noValidate
    >
      {isBrochureIntent ? (
        <p
          className={cn(
            "rounded-lg border-l-4 border-gold bg-paper leading-relaxed text-slate",
            dense
              ? "mb-2 px-2.5 py-1.5 text-[0.7rem] sm:mb-4 sm:px-4 sm:py-3 sm:text-[0.92rem]"
              : compact
                ? "mb-4 px-4 py-3 text-[0.92rem]"
                : "mb-6 px-4 py-3 text-[0.92rem]",
          )}
        >
          {enquiryContent.brochureSubtitle}
        </p>
      ) : null}

      <div className={cn("grid sm:grid-cols-2", gridGapClassName)}>
        <div>
          <label htmlFor={`${formId}-fname`} className={fieldLabelClassName}>
            Student First Name <span className="text-gold-dark">*</span>
          </label>
          <input
            id={`${formId}-fname`}
            name="fname"
            type="text"
            autoComplete="given-name"
            required
            value={form.fname}
            onChange={(event) => updateField("fname", event.target.value)}
            placeholder="Enter first name"
            className={inputClassName}
          />
        </div>

        <div>
          <label htmlFor={`${formId}-lname`} className={fieldLabelClassName}>
            Student Last Name <span className="text-gold-dark">*</span>
          </label>
          <input
            id={`${formId}-lname`}
            name="lname"
            type="text"
            autoComplete="family-name"
            required
            value={form.lname}
            onChange={(event) => updateField("lname", event.target.value)}
            placeholder="Enter last name"
            className={inputClassName}
          />
        </div>
      </div>

      <div className={fieldGapClassName}>
        <label htmlFor={`${formId}-mobile`} className={fieldLabelClassName}>
          Mobile Number <span className="text-gold-dark">*</span>
        </label>
        <input
          id={`${formId}-mobile`}
          name="mobile"
          type="tel"
          autoComplete="tel"
          required
          value={form.mobile}
          onChange={(event) => updateField("mobile", event.target.value)}
          placeholder="Enter your mobile number"
          className={inputClassName}
        />
      </div>

      <div className={cn("grid sm:grid-cols-2", fieldGapClassName, gridGapClassName)}>
        <div>
          <label htmlFor={`${formId}-class`} className={fieldLabelClassName}>
            Class Looking For <span className="text-gold-dark">*</span>
          </label>
          <select
            id={`${formId}-class`}
            name="selectclass"
            required
            value={form.selectclass}
            onChange={(event) => updateField("selectclass", event.target.value)}
            className={cn(inputClassName, "appearance-none")}
          >
            <option value="">Select class</option>
            {enquiryContent.fields.grades.map((grade) => (
              <option key={grade} value={grade}>
                {grade}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor={`${formId}-campus`} className={fieldLabelClassName}>
            Preferred Campus <span className="text-gold-dark">*</span>
          </label>
          <select
            id={`${formId}-campus`}
            name="campus"
            required
            value={form.campus}
            onChange={(event) => updateField("campus", event.target.value)}
            className={cn(inputClassName, "appearance-none")}
          >
            <option value="">Select campus</option>
            {enquiryContent.fields.campuses.map((campus) => (
              <option key={campus} value={campus}>
                {campus}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={fieldGapClassName}>
        <label htmlFor={`${formId}-email`} className={fieldLabelClassName}>
          Email Address <span className="text-gold-dark">*</span>
        </label>
        <input
          id={`${formId}-email`}
          name="email"
          type="email"
          autoComplete="email"
          required
          value={form.email}
          onChange={(event) => updateField("email", event.target.value)}
          placeholder="Enter email address"
          className={inputClassName}
        />
      </div>

      <div
        className={cn(
          "flex flex-col sm:flex-row sm:items-center sm:justify-between sm:gap-3",
          dense ? "mt-2.5 gap-1.5 sm:mt-5" : compact ? "mt-3.5 gap-2 sm:mt-5" : "mt-7 gap-3",
        )}
      >
        <Button
          type="submit"
          disabled={status === "submitting"}
          className={cn(
            "w-full justify-center sm:w-auto",
            dense
              ? "min-h-0 rounded-md px-3.5 py-2.5 text-[0.7rem] sm:min-w-[210px] sm:rounded-lg sm:px-5 sm:py-3 sm:text-[0.78rem]"
              : compact
                ? "min-h-0 px-4 py-2.5 text-[0.72rem] sm:min-w-[210px] sm:px-5 sm:py-3 sm:text-[0.78rem]"
                : "sm:min-w-[240px]",
          )}
        >
          {status === "submitting" ? "Submitting..." : submitLabel}
        </Button>

        {message ? (
          <p role="alert" className="text-[0.9rem] text-red-700">
            {message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
