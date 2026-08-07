"use client";

import { FormEvent, useState } from "react";
import { contactPageContent } from "@/data/contact";
import { enquiryContent } from "@/data/home";
import { Icon } from "@/components/ui/Icon";
import { getTrackingParams } from "@/lib/tracking";
import { cn } from "@/lib/utils";

type FormState = {
  fname: string;
  lname: string;
  mobile: string;
  selectclass: string;
  campus: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  fname: "",
  lname: "",
  mobile: "",
  selectclass: "",
  campus: "",
  email: "",
  message: "",
};

const fieldClassName =
  "w-full rounded-md border border-line bg-white px-2.5 py-1.5 font-outfit text-[0.82rem] text-ink outline-none transition-[border-color] duration-200 placeholder:text-[#bdc8c4] focus:border-emerald focus:ring-2 focus:ring-emerald/15";

const labelClassName =
  "font-montserrat text-[0.58rem] font-bold uppercase tracking-[0.12em] text-slate";

export function ContactFormSection() {
  const { form } = contactPageContent;
  const [formState, setFormState] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "error" | "success">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const updateField = (field: keyof FormState, value: string) => {
    setFormState((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fname: formState.fname,
          lname: formState.lname,
          mobile: formState.mobile,
          email: formState.email,
          selectclass: formState.selectclass,
          campus: formState.campus,
          message: formState.message,
          intent: "contact",
          sourcePath: "/contact",
          page_url: window.location.href,
          ...getTrackingParams(new URLSearchParams(window.location.search)),
        }),
      });

      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        setStatus("error");
        setErrorMessage(result.message ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setFormState(initialState);
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex h-auto items-center justify-center rounded-xl bg-white p-5 shadow-[0_24px_60px_-32px_rgba(0,0,0,0.45)] sm:p-6 lg:h-full">
        <div className="text-center">
          <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-emerald/10">
            <Icon name="checkCircle" className="h-5 w-5 text-emerald" strokeWidth={2} />
          </div>
          <h2 className="font-montserrat text-[1.05rem] font-extrabold text-forest-deep">
            {form.successTitle}
          </h2>
          <p className="mx-auto mt-2 max-w-md text-[0.84rem] leading-relaxed text-slate">
            {form.successDescription}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-auto flex-col rounded-xl bg-white p-3.5 shadow-[0_24px_60px_-32px_rgba(0,0,0,0.45)] sm:p-4 lg:h-full">
      <div>
        <h2 className="font-montserrat text-[clamp(1.1rem,4.5vw,1.25rem)] font-extrabold text-forest-deep md:text-[clamp(1.05rem,1.6vw,1.25rem)]">
          {form.title}
        </h2>
        <p className="mt-0.5 text-[0.78rem] leading-snug text-slate">{form.description}</p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="mt-2.5 flex flex-1 flex-col gap-2.5 sm:gap-2">
        <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-2">
          <div className="flex flex-col gap-0.5">
            <label htmlFor="contact-fname" className={labelClassName}>
              Child&apos;s First Name *
            </label>
            <input
              id="contact-fname"
              name="fname"
              type="text"
              autoComplete="given-name"
              required
              value={formState.fname}
              onChange={(event) => updateField("fname", event.target.value)}
              placeholder="Enter first name"
              className={fieldClassName}
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <label htmlFor="contact-lname" className={labelClassName}>
              Child&apos;s Last Name *
            </label>
            <input
              id="contact-lname"
              name="lname"
              type="text"
              autoComplete="family-name"
              required
              value={formState.lname}
              onChange={(event) => updateField("lname", event.target.value)}
              placeholder="Enter last name"
              className={fieldClassName}
            />
          </div>
        </div>

        <div className="flex flex-col gap-0.5">
          <label htmlFor="contact-mobile" className={labelClassName}>
            Mobile Number *
          </label>
          <input
            id="contact-mobile"
            name="mobile"
            type="tel"
            autoComplete="tel"
            required
            value={formState.mobile}
            onChange={(event) => updateField("mobile", event.target.value)}
            placeholder="+91 98765 43210"
            className={fieldClassName}
          />
        </div>

        <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-2">
          <div className="flex flex-col gap-0.5">
            <label htmlFor="contact-class" className={labelClassName}>
              Class Looking For *
            </label>
            <select
              id="contact-class"
              name="selectclass"
              required
              value={formState.selectclass}
              onChange={(event) => updateField("selectclass", event.target.value)}
              className={cn(
                fieldClassName,
                "cursor-pointer appearance-none bg-[length:10px_6px] bg-[right_0.9rem_center] bg-no-repeat",
                "bg-[url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%235a6a72' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\")]",
              )}
            >
              <option value="">Select class</option>
              {enquiryContent.fields.grades.map((grade) => (
                <option key={grade} value={grade}>
                  {grade}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-0.5">
            <label htmlFor="contact-campus" className={labelClassName}>
              Preferred Campus *
            </label>
            <select
              id="contact-campus"
              name="campus"
              required
              value={formState.campus}
              onChange={(event) => updateField("campus", event.target.value)}
              className={cn(
                fieldClassName,
                "cursor-pointer appearance-none bg-[length:10px_6px] bg-[right_0.9rem_center] bg-no-repeat",
                "bg-[url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%235a6a72' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\")]",
              )}
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

        <div className="flex flex-col gap-0.5">
          <label htmlFor="contact-email" className={labelClassName}>
            Email Address *
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={formState.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="Enter email address"
            className={fieldClassName}
          />
        </div>

        <div className="flex min-h-0 flex-1 flex-col gap-0.5">
          <label htmlFor="contact-message" className={labelClassName}>
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            value={formState.message}
            onChange={(event) => updateField("message", event.target.value)}
            placeholder="Any questions or details you'd like to share..."
            rows={2}
            className={cn(
              fieldClassName,
              "min-h-[3.25rem] resize-none sm:min-h-[2.75rem] lg:flex-1",
            )}
          />
        </div>

        <div className="mt-auto pt-1.5 sm:pt-1">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="flex w-full items-center justify-center gap-2 rounded-md bg-forest-deep px-4 py-2.5 font-montserrat text-[0.72rem] font-extrabold uppercase tracking-[0.1em] text-white transition-colors hover:bg-forest disabled:opacity-70 sm:py-2"
          >
            {status === "submitting" ? "Sending..." : form.submitLabel}
            <Icon name="arrow" className="h-3.5 w-3.5" />
          </button>

          {errorMessage ? (
            <p role="alert" className="mt-1.5 text-center text-[0.78rem] text-red-700">
              {errorMessage}
            </p>
          ) : null}

          <p className="mt-1.5 text-center text-[0.68rem] text-slate">{form.note}</p>
        </div>
      </form>
    </div>
  );
}
