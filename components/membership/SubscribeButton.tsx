"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import type { MembershipPlan } from "@/lib/constants";

export default function SubscribeButton({
  planId,
  highlighted,
}: {
  planId: MembershipPlan["id"];
  highlighted?: boolean;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleClick() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout/subscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planId }),
      });
      const data = await res.json();

      if (res.status === 401 && data.requiresAuth) {
        router.push(`/login?next=${encodeURIComponent("/membership")}`);
        return;
      }
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
      <Button
        variant={highlighted ? "pink" : "navy"}
        size="md"
        className="w-full"
        onClick={handleClick}
        disabled={loading}
      >
        {loading ? "Redirecting..." : "Choose Plan"}
      </Button>
      {error && <p className="font-body text-sm text-brand-pink">{error}</p>}
    </div>
  );
}
