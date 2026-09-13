"use client";

import { useState } from "react";
import Link from "next/link";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { UserRole } from "@/types";
import { authInputClass as inputClass } from "@/lib/formStyles";

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
        <label htmlFor="signup-name" className="sr-only">
          Full name
        </label>
        <input
          id="signup-name"
          type="text"
          required
          autoComplete="name"
          placeholder="Full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className={inputClass}
        />
        <label htmlFor="signup-email" className="sr-only">
          Email address
        </label>
        <input
          id="signup-email"
          type="email"
          required
          autoComplete="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
        />
        <label htmlFor="signup-password" className="sr-only">
          Password
        </label>
        <input
          id="signup-password"
          type="password"
          required
          minLength={6}
          autoComplete="new-password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={inputClass}
        />

        <div className="grid grid-cols-2 gap-2" role="radiogroup" aria-label="I am a...">
          {(["parent", "teacher"] as const).map((r) => (
            <button
              type="button"
              key={r}
              role="radio"
              aria-checked={role === r}
              onClick={() => setRole(r)}
              className={cn(
                "btn-soft rounded-2xl border-2 px-4 py-3 text-sm font-semibold capitalize",
                role === r
                  ? "border-brand-pink-ink bg-brand-pink/10 text-brand-pink-ink"
                  : "border-brand-navy/10 bg-white text-brand-navy-muted",
              )}
            >
              I&rsquo;m a {r}
            </button>
          ))}
        </div>

        {error && <p className="font-body text-sm text-brand-pink-ink">{error}</p>}
        <Button type="submit" variant="pink" size="md" disabled={loading} className="w-full">
          {loading ? "Creating account..." : "Create Account"}
        </Button>
      </form>

      <p className="text-center font-body text-sm text-brand-navy-muted">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-brand-pink-ink">
          Log in
        </Link>
      </p>
    </div>
  );
}
