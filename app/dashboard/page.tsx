import type { Metadata } from "next";
import BellaMascot from "@/components/bella/BellaMascot";
import Button from "@/components/ui/Button";
import LogoutButton from "@/components/auth/LogoutButton";
import SupabaseNotConfiguredNotice from "@/components/auth/SupabaseNotConfiguredNotice";
import DashboardTabs from "@/components/dashboard/DashboardTabs";
import { requireUser } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Dashboard",
  robots: { index: false, follow: false },
};

export default async function DashboardPage() {
  const result = await requireUser();
  if (!result.configured) return <SupabaseNotConfiguredNotice />;

  const { user } = result;
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

      <div className="mt-10">
        <DashboardTabs />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
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

      <p className="mt-6 text-center font-body text-sm text-brand-navy-muted">
        Signed up as a {role}. Explore your personalized dashboards above.
      </p>
    </div>
  );
}
