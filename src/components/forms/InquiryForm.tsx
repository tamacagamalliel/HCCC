"use client";

import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/Button";

const inquirySchema = z.object({
  fullName: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(160),
  mobile: z.string().trim().min(7).max(30),
  inquiryType: z.string().min(1),
  programOrLevel: z.string().max(120).optional(),
  message: z.string().trim().min(10).max(2000),
  website: z.string().optional(),
});

const inquiryTypes = [
  "Admission",
  "Enrollment",
  "Academic Programs",
  "Requirements",
  "Tuition / Fees",
  "Scholarships",
  "Basic Education",
  "College",
  "General Inquiry",
  "Other",
];

const fieldClass =
  "field-input h-11 w-full rounded-lg border border-border bg-surface px-3 text-sm text-ink outline-none focus:ring-2 focus:ring-gold-500";

export function InquiryForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setStatus("loading");

    const form = new FormData(e.currentTarget);
    const payload = {
      fullName: String(form.get("fullName") ?? ""),
      email: String(form.get("email") ?? ""),
      mobile: String(form.get("mobile") ?? ""),
      inquiryType: String(form.get("inquiryType") ?? ""),
      programOrLevel: String(form.get("programOrLevel") ?? ""),
      message: String(form.get("message") ?? ""),
      website: String(form.get("website") ?? ""),
    };

    const parsed = inquirySchema.safeParse(payload);
    if (!parsed.success) {
      setStatus("error");
      setError("Please check the form fields and try again.");
      return;
    }

    try {
      const res = await fetch("/api/inquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Unable to send inquiry.");
      }
      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Unable to send inquiry.");
    }
  }

  if (status === "success") {
    return (
      <div
        className="rounded-2xl border border-forest-100 bg-forest-50 p-8"
        role="status"
        aria-live="polite"
      >
        <h2 className="font-display text-2xl text-ink">Inquiry received</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Thank you. Your inquiry has been received. The appropriate HCCC office will respond
          through the contact information you provided.
        </p>
        <button
          type="button"
          className="mt-6 text-sm font-semibold text-forest-800 underline"
          onClick={() => setStatus("idle")}
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-soft)]"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full Name" htmlFor="fullName" required>
          <input id="fullName" name="fullName" required className={fieldClass} autoComplete="name" />
        </Field>
        <Field label="Email" htmlFor="email" required>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={fieldClass}
            autoComplete="email"
          />
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Mobile Number" htmlFor="mobile" required>
          <input id="mobile" name="mobile" required className={fieldClass} autoComplete="tel" />
        </Field>
        <Field label="Inquiry Type" htmlFor="inquiryType" required>
          <select id="inquiryType" name="inquiryType" required className={fieldClass} defaultValue="">
            <option value="" disabled>
              Select type
            </option>
            {inquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <Field label="Program / Grade Level" htmlFor="programOrLevel">
        <input id="programOrLevel" name="programOrLevel" className={fieldClass} />
      </Field>
      <Field label="Message" htmlFor="message" required>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="field-input w-full rounded-lg border border-border bg-surface px-3 py-3 text-sm text-ink outline-none focus:ring-2 focus:ring-gold-500"
        />
      </Field>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {error ? (
        <p className="text-sm text-red-700 dark:text-red-300" role="alert">
          {error}
        </p>
      ) : null}

      <Button type="submit" size="lg" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Send Inquiry"}
      </Button>
      <p className="text-xs text-muted">
        This form is for public inquiries only. It is not a student portal or enrollment system.
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block text-sm" htmlFor={htmlFor}>
      <span className="mb-1.5 block font-semibold text-ink">
        {label}
        {required ? <span className="text-gold-700"> *</span> : null}
      </span>
      {children}
    </label>
  );
}
