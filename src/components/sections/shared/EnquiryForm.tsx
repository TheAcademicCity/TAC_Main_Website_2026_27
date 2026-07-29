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
};

export function EnquiryForm({
  intent,
  formId = "enquiry-form",
  className,
  compact = false,
}: EnquiryFormProps) {
  const searchParams = useSearchParams();
  const isBrochureIntent =
    intent === "brochure" || (!intent && searchParams.get("intent") === "brochure");

  const inputClassName = compact
    ? "w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-[0.9rem] text-ink outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-slate/45 focus:border-emerald focus:ring-2 focus:ring-emerald/15"
    : fieldClassName;

  const fieldLabelClassName = compact
    ? "mb-1 block font-montserrat text-[0.68rem] font-bold uppercase tracking-[0.12em] text-forest"
    : labelClassName;

  const fieldGapClassName = compact ? "mt-4" : "mt-5";
  const gridGapClassName = compact ? "gap-4" : "gap-5";
  const formPaddingClassName = compact ? "p-4 sm:p-5" : "p-6 sm:p-8";

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
            "rounded-lg border-l-4 border-gold bg-paper px-4 py-3 text-[0.92rem] leading-relaxed text-slate",
            compact ? "mb-4" : "mb-6",
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
          placeholder="+91 98765 43210"
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

      <div className={cn("flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between", compact ? "mt-5" : "mt-7")}>
        <Button
          type="submit"
          disabled={status === "submitting"}
          className={compact ? "sm:min-w-[210px]" : "sm:min-w-[240px]"}
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
