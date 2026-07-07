"use client";

import { useSearchParams } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import { enquiryContent } from "@/data/home";
import { siteConfig } from "@/config/site";
import { triggerFileDownload } from "@/lib/downloads";
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
  "w-full border border-line bg-white px-4 py-3 text-[0.95rem] text-ink outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-slate/45 focus:border-emerald focus:ring-2 focus:ring-emerald/15";

const labelClassName =
  "mb-1.5 block font-montserrat text-[0.72rem] font-bold uppercase tracking-[0.12em] text-forest";

export function EnquiryForm() {
  const searchParams = useSearchParams();
  const isBrochureIntent = searchParams.get("intent") === "brochure";

  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
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
        }),
      });

      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        setStatus("error");
        setMessage(result.message ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMessage("Thank you for your enquiry. We'll get back to you soon.");
      setForm(initialState);

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
      id="enquiry-form"
      onSubmit={handleSubmit}
      className={cn(
        "border border-line bg-white p-6 shadow-[0_24px_60px_-32px_rgba(15,61,56,0.28)] sm:p-8",
        isBrochureIntent && "ring-2 ring-gold/35",
      )}
      noValidate
    >
      {isBrochureIntent ? (
        <p className="mb-6 border-l-4 border-gold bg-paper px-4 py-3 text-[0.92rem] leading-relaxed text-slate">
          {enquiryContent.brochureSubtitle}
        </p>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="enquiry-fname" className={labelClassName}>
            Student First Name <span className="text-gold-dark">*</span>
          </label>
          <input
            id="enquiry-fname"
            name="fname"
            type="text"
            autoComplete="given-name"
            required
            value={form.fname}
            onChange={(event) => updateField("fname", event.target.value)}
            placeholder="Enter first name"
            className={fieldClassName}
          />
        </div>

        <div>
          <label htmlFor="enquiry-lname" className={labelClassName}>
            Student Last Name <span className="text-gold-dark">*</span>
          </label>
          <input
            id="enquiry-lname"
            name="lname"
            type="text"
            autoComplete="family-name"
            required
            value={form.lname}
            onChange={(event) => updateField("lname", event.target.value)}
            placeholder="Enter last name"
            className={fieldClassName}
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="enquiry-mobile" className={labelClassName}>
          Mobile Number <span className="text-gold-dark">*</span>
        </label>
        <input
          id="enquiry-mobile"
          name="mobile"
          type="tel"
          autoComplete="tel"
          required
          value={form.mobile}
          onChange={(event) => updateField("mobile", event.target.value)}
          placeholder="+91 98765 43210"
          className={fieldClassName}
        />
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="enquiry-class" className={labelClassName}>
            Class Looking For <span className="text-gold-dark">*</span>
          </label>
          <select
            id="enquiry-class"
            name="selectclass"
            required
            value={form.selectclass}
            onChange={(event) => updateField("selectclass", event.target.value)}
            className={cn(fieldClassName, "appearance-none")}
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
          <label htmlFor="enquiry-campus" className={labelClassName}>
            Preferred Campus <span className="text-gold-dark">*</span>
          </label>
          <select
            id="enquiry-campus"
            name="campus"
            required
            value={form.campus}
            onChange={(event) => updateField("campus", event.target.value)}
            className={cn(fieldClassName, "appearance-none")}
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

      <div className="mt-5">
        <label htmlFor="enquiry-email" className={labelClassName}>
          Email Address <span className="text-gold-dark">*</span>
        </label>
        <input
          id="enquiry-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={form.email}
          onChange={(event) => updateField("email", event.target.value)}
          placeholder="Enter email address"
          className={fieldClassName}
        />
      </div>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" disabled={status === "submitting"} className="sm:min-w-[240px]">
          {status === "submitting" ? "Submitting..." : submitLabel}
        </Button>

        {message ? (
          <p
            role="status"
            className={cn(
              "text-[0.9rem]",
              status === "success" ? "text-emerald" : "text-red-700",
            )}
          >
            {message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
