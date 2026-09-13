"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import Button from "@/components/ui/Button";

const inputClass =
  "w-full rounded-2xl border-2 border-brand-navy/10 bg-brand-cream px-4 py-3 font-body text-sm outline-none focus:border-brand-pink";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const supabase = getSupabaseBrowserClient();
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      router.push("/dashboard");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setLoading(false);
    }
  }

  async function handleGoogle() {
    setError(null);
    try {
      const supabase = getSupabaseBrowserClient();
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: { redirectTo: `${window.location.origin}/auth/callback` },
      });
      if (error) throw error;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="email"
          required
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
        />
        <input
          type="password"
          required
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={inputClass}
        />
        {error && <p className="font-body text-sm text-brand-pink">{error}</p>}
        <Button type="submit" variant="pink" size="md" disabled={loading} className="w-full">
          {loading ? "Logging in..." : "Log In"}
        </Button>
      </form>

      <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-brand-navy/40">
        <span className="h-px flex-1 bg-brand-navy/10" /> or <span className="h-px flex-1 bg-brand-navy/10" />
      </div>

      <button
        onClick={handleGoogle}
        className="btn-soft rounded-full border-2 border-brand-navy/10 bg-white px-4 py-3 text-sm font-semibold text-brand-navy"
      >
        Continue with Google
      </button>

      <p className="text-center font-body text-sm text-brand-navy/60">
        New here?{" "}
        <Link href="/signup" className="font-semibold text-brand-pink">
          Create an account
        </Link>
      </p>
    </div>
  );
}
