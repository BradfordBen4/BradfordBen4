"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function BuyNowButton({ slug }: { slug: string }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleClick() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) {
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <Button variant="pink" size="lg" onClick={handleClick} disabled={loading}>
        {loading ? "Redirecting..." : "Buy Now"}
      </Button>
      {error && <p className="font-body text-sm text-brand-pink-ink">{error}</p>}
    </div>
  );
}
