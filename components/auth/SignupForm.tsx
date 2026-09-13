"use client";

import { useState } from "react";
import Link from "next/link";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { UserRole } from "@/types";

const inputClass =
  "w-full rounded-2xl border-2 border-brand-navy/10 bg-brand-cream px-4 py-3 font-body text-sm outline-none focus:border-brand-pink";

export default function SignupForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<Extract<UserRole, "parent" | "teacher">>("parent");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const supabase = getSupabaseBrowserClient();
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: fullName, role },
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      if (error) throw error;
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <p className="text-center font-body text-brand-navy/75">
        Check your inbox! We sent a confirmation link to <strong>{email}</strong>.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          required
          placeholder="Full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className={inputClass}
        />
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
          minLength={6}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={inputClass}
        />

        <div className="grid grid-cols-2 gap-2">
          {(["parent", "teacher"] as const).map((r) => (
            <button
              type="button"
              key={r}
              onClick={() => setRole(r)}
              className={cn(
                "btn-soft rounded-2xl border-2 px-4 py-3 text-sm font-semibold capitalize",
                role === r
                  ? "border-brand-pink bg-brand-pink/10 text-brand-pink"
                  : "border-brand-navy/10 bg-white text-brand-navy/60",
              )}
            >
              I&rsquo;m a {r}
            </button>
          ))}
        </div>

        {error && <p className="font-body text-sm text-brand-pink">{error}</p>}
        <Button type="submit" variant="pink" size="md" disabled={loading} className="w-full">
          {loading ? "Creating account..." : "Create Account"}
        </Button>
      </form>

      <p className="text-center font-body text-sm text-brand-navy/60">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-brand-pink">
          Log in
        </Link>
      </p>
    </div>
  );
}
