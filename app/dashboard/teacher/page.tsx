import type { Metadata } from "next";
import { CalendarDays, Bookmark, Download, Heart, Sparkles } from "lucide-react";
import DashboardTabs from "@/components/dashboard/DashboardTabs";
import DashboardCard from "@/components/dashboard/DashboardCard";
import SupabaseNotConfiguredNotice from "@/components/auth/SupabaseNotConfiguredNotice";
import { requireUser } from "@/lib/auth";
import { FEATURED_PRODUCTS } from "@/lib/mock/products";

export const metadata: Metadata = {
  title: "Teacher Dashboard",
};

const WEEK_PLAN = [
  { day: "Monday", focus: "Phonics: Letter B", resource: "Alphabet Tracing Pack" },
  { day: "Tuesday", focus: "Math: Counting to 20", resource: "Counting with Bella" },
  { day: "Wednesday", focus: "Fine Motor: Cutting Practice", resource: "Spring Fine Motor Cards" },
  { day: "Thursday", focus: "Story Time", resource: "Bella and the Missing Acorns" },
  { day: "Friday", focus: "Review & Show-and-Tell", resource: "Free choice" },
];

export default async function TeacherDashboardPage() {
  const result = await requireUser();
  if (!result.configured) return <SupabaseNotConfiguredNotice />;

  const savedResources = FEATURED_PRODUCTS.slice(0, 3);
  const newResources = FEATURED_PRODUCTS.slice(1, 4);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="font-heading text-3xl font-semibold text-brand-navy">
          Teacher Dashboard
        </h1>
        <p className="font-body text-brand-navy/70">
          Your classroom&rsquo;s planner, saved resources, and downloads &mdash; all in one place.
        </p>
        <DashboardTabs />
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <DashboardCard title="Weekly Planner" icon={CalendarDays}>
          <ul className="flex flex-col divide-y divide-brand-navy/5">
            {WEEK_PLAN.map((item) => (
              <li key={item.day} className="flex items-center justify-between py-3">
                <div>
                  <p className="font-button text-sm font-semibold text-brand-navy">{item.day}</p>
                  <p className="font-body text-sm text-brand-navy/60">{item.focus}</p>
                </div>
                <span className="rounded-full bg-brand-blue/10 px-3 py-1 font-body text-xs text-brand-navy/70">
                  {item.resource}
                </span>
              </li>
            ))}
          </ul>
        </DashboardCard>

        <DashboardCard title="Saved Resources" icon={Bookmark}>
          <ul className="flex flex-col gap-3">
            {savedResources.map((product) => (
              <li key={product.id} className="flex items-center gap-3">
                <span className="text-2xl" aria-hidden>
                  {product.emoji}
                </span>
                <span className="font-body text-sm text-brand-navy/80">{product.title}</span>
              </li>
            ))}
          </ul>
        </DashboardCard>

        <DashboardCard title="Downloads" icon={Download}>
          <ul className="flex flex-col gap-3">
            {savedResources.map((product) => (
              <li
                key={product.id}
                className="flex items-center justify-between font-body text-sm text-brand-navy/80"
              >
                {product.title}
                <span className="text-xs text-brand-navy/40">PDF</span>
              </li>
            ))}
          </ul>
        </DashboardCard>

        <DashboardCard title="Favorites" icon={Heart}>
          <ul className="flex flex-col gap-3">
            {newResources.map((product) => (
              <li key={product.id} className="flex items-center gap-3">
                <span className="text-2xl" aria-hidden>
                  {product.emoji}
                </span>
                <span className="font-body text-sm text-brand-navy/80">{product.title}</span>
              </li>
            ))}
          </ul>
        </DashboardCard>

        <DashboardCard title="New Resources" icon={Sparkles}>
          <ul className="flex flex-col gap-3">
            {newResources.map((product) => (
              <li
                key={product.id}
                className="flex items-center justify-between font-body text-sm text-brand-navy/80"
              >
                {product.title}
                <span className="text-xs text-brand-navy/40">${product.price}</span>
              </li>
            ))}
          </ul>
        </DashboardCard>
      </div>
    </div>
  );
}
