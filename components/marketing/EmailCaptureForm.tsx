"use client";

import { useId, useState } from "react";
import { motion } from "framer-motion";

export default function EmailCaptureForm({
  source,
  ctaLabel = "Send My Free Printable",
}: {
  source: string;
  ctaLabel?: string;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const inputId = useId();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError(null);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
      setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-body text-brand-navy/80"
      >
        🎉 Sent! Check <strong>{email}</strong> for your free printable.
      </motion.p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row sm:items-start">
      <div className="flex-1">
        <label htmlFor={inputId} className="sr-only">
          Email address
        </label>
        <input
          id={inputId}
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full rounded-full border-2 border-brand-navy/10 bg-white px-4 py-3 font-body text-sm outline-none focus:border-brand-pink-ink"
        />
        {error && <p className="mt-1 font-body text-sm text-brand-pink-ink">{error}</p>}
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-soft shrink-0 rounded-full bg-brand-pink-ink px-6 py-3 font-body text-sm font-semibold text-white"
      >
        {status === "loading" ? "Sending..." : ctaLabel}
      </button>
    </form>
  );
}
