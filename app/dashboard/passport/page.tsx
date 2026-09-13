import type { Metadata } from "next";
import DashboardTabs from "@/components/dashboard/DashboardTabs";
import PassportBook from "@/components/passport/PassportBook";
import SupabaseNotConfiguredNotice from "@/components/auth/SupabaseNotConfiguredNotice";
import { requireUser } from "@/lib/auth";
import { MOCK_PASSPORT } from "@/lib/mock/passport";

export const metadata: Metadata = {
  title: "Learning Passport",
  robots: { index: false, follow: false },
};

export default async function PassportPage() {
  const result = await requireUser();
  if (!result.configured) return <SupabaseNotConfiguredNotice />;

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="font-heading text-3xl font-semibold text-brand-navy">
          Bella Learning Passport&trade;
        </h1>
        <p className="font-body text-brand-navy/70">
          Earn stars, unlock badges, and collect Bella stickers as you learn.
        </p>
        <DashboardTabs />
      </div>

      <div className="mt-10">
        <PassportBook passport={MOCK_PASSPORT} />
      </div>
    </div>
  );
}
