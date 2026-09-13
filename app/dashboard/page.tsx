import type { Metadata } from "next";
import { redirect } from "next/navigation";
import BellaMascot from "@/components/bella/BellaMascot";
import Button from "@/components/ui/Button";
import LogoutButton from "@/components/auth/LogoutButton";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function DashboardPage() {
  const supabase = await getSupabaseServerClient();

  if (!supabase) {
    return (
      <div className="mx-auto flex max-w-lg flex-col items-center gap-4 px-4 py-24 text-center">
        <BellaMascot pose="idle" size={140} />
        <h1 className="font-heading text-2xl font-semibold text-brand-navy">
          Supabase Isn&rsquo;t Connected Yet
        </h1>
        <p className="font-body text-brand-navy/70">
          Add <code className="rounded bg-brand-navy/5 px-1.5 py-0.5">NEXT_PUBLIC_SUPABASE_URL</code>{" "}
          and <code className="rounded bg-brand-navy/5 px-1.5 py-0.5">NEXT_PUBLIC_SUPABASE_ANON_KEY</code>{" "}
          to your environment to enable accounts and dashboards.
        </p>
        <Button href="/" variant="pink" size="md">
          Back Home
        </Button>
      </div>
    );
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const fullName = (user.user_metadata?.full_name as string | undefined) ?? "there";
  const role = (user.user_metadata?.role as string | undefined) ?? "parent";

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <div className="flex flex-col items-center gap-4 text-center">
        <BellaMascot pose="celebrate" size={140} />
        <h1 className="font-heading text-3xl font-semibold text-brand-navy">
          Welcome back, {fullName}!
        </h1>
        <p className="font-body text-brand-navy/70">{user.email}</p>
        <LogoutButton />
      </div>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <Button href="/dashboard/teacher" variant="blue" size="lg">
          Teacher Dashboard
        </Button>
        <Button href="/dashboard/parent" variant="pink" size="lg">
          Parent Dashboard
        </Button>
        <Button href="/dashboard/passport" variant="yellow" size="lg">
          Learning Passport
        </Button>
      </div>

      <p className="mt-6 text-center font-body text-sm text-brand-navy/50">
        Signed up as a {role}. Your personalized dashboard is coming soon.
      </p>
    </div>
  );
}
