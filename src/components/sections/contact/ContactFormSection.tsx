"use client";

import { FormEvent, useState } from "react";
import { contactPageContent } from "@/data/contact";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  phone: string;
  email: string;
  childName: string;
  grade: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  childName: "",
  grade: "",
  message: "",
};

const fieldClassName =
  "w-full rounded-md border border-line bg-white px-3 py-2 font-outfit text-[0.86rem] text-ink outline-none transition-[border-color] duration-200 placeholder:text-[#bdc8c4] focus:border-emerald focus:ring-2 focus:ring-emerald/15";

const labelClassName =
  "font-montserrat text-[0.62rem] font-bold uppercase tracking-[0.12em] text-slate";

function splitName(fullName: string) {
  const parts = fullName.trim().split(/\s+/);
  return {
    fname: parts[0] ?? "",
    lname: parts.slice(1).join(" ") || "-",
  };
}

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

    const { fname, lname } = splitName(formState.name);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fname,
          lname,
          mobile: formState.phone,
          email: formState.email,
          selectclass: formState.grade || "Not specified",
          campus: "Bangalore",
          childName: formState.childName,
          message: formState.message,
          intent: "contact",
          sourcePath: "/contact",
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
      <div className="flex h-full items-center justify-center rounded-xl bg-white p-6 shadow-[0_24px_60px_-32px_rgba(0,0,0,0.45)] sm:p-8">
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
    <div className="h-full rounded-xl bg-white p-5 shadow-[0_24px_60px_-32px_rgba(0,0,0,0.45)] sm:p-6">
      <div>
        <h2 className="font-montserrat text-[clamp(1.2rem,1.9vw,1.5rem)] font-extrabold text-forest-deep">
          {form.title}
        </h2>
        <p className="mt-0.5 text-[0.84rem] leading-snug text-slate">{form.description}</p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="mt-4 flex flex-col">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="flex flex-col gap-1">
            <label htmlFor="contact-name" className={labelClassName}>
              Your Name *
            </label>
            <input
              id="contact-name"
              type="text"
              required
              value={formState.name}
              onChange={(event) => updateField("name", event.target.value)}
              placeholder="Full name"
              className={fieldClassName}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="contact-phone" className={labelClassName}>
              Phone *
            </label>
            <input
              id="contact-phone"
              type="tel"
              required
              value={formState.phone}
              onChange={(event) => updateField("phone", event.target.value)}
              placeholder="+91"
              className={fieldClassName}
            />
          </div>
        </div>

        <div className="mt-3 flex flex-col gap-1">
          <label htmlFor="contact-email" className={labelClassName}>
            Email *
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={formState.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="you@email.com"
            className={fieldClassName}
          />
        </div>

        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <div className="flex flex-col gap-1">
            <label htmlFor="contact-child" className={labelClassName}>
              Child&apos;s Name
            </label>
            <input
              id="contact-child"
              type="text"
              value={formState.childName}
              onChange={(event) => updateField("childName", event.target.value)}
              placeholder="Student name"
              className={fieldClassName}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="contact-grade" className={labelClassName}>
              Grade Applying For
            </label>
            <select
              id="contact-grade"
              value={formState.grade}
              onChange={(event) => updateField("grade", event.target.value)}
              className={cn(
                fieldClassName,
                "cursor-pointer appearance-none bg-[length:10px_6px] bg-[right_0.9rem_center] bg-no-repeat",
                "bg-[url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%235a6a72' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\")]",
              )}
            >
              <option value="">Select</option>
              {form.grades.map((grade) => (
                <option key={grade} value={grade}>
                  {grade}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-3 flex flex-col gap-1">
          <label htmlFor="contact-message" className={labelClassName}>
            Message
          </label>
          <textarea
            id="contact-message"
            value={formState.message}
            onChange={(event) => updateField("message", event.target.value)}
            placeholder="Any questions or details you'd like to share..."
            rows={2}
            className={cn(fieldClassName, "h-14 resize-none")}
          />
        </div>

        <div className="mt-4">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="flex w-full items-center justify-center gap-2 rounded-md bg-forest-deep px-4 py-2.5 font-montserrat text-[0.78rem] font-extrabold uppercase tracking-[0.1em] text-white transition-colors hover:bg-forest disabled:opacity-70"
          >
            {status === "submitting" ? "Sending..." : form.submitLabel}
            <Icon name="arrow" className="h-3.5 w-3.5" />
          </button>

          {errorMessage ? (
            <p role="alert" className="mt-2 text-center text-[0.82rem] text-red-700">
              {errorMessage}
            </p>
          ) : null}

          <p className="mt-2 text-center text-[0.72rem] text-slate">{form.note}</p>
        </div>
      </form>
    </div>
  );
}
