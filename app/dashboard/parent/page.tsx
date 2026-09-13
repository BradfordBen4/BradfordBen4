import type { Metadata } from "next";
import Link from "next/link";
import { Tent, BookOpenCheck, Printer, Star } from "lucide-react";
import DashboardTabs from "@/components/dashboard/DashboardTabs";
import DashboardCard from "@/components/dashboard/DashboardCard";
import SupabaseNotConfiguredNotice from "@/components/auth/SupabaseNotConfiguredNotice";
import { requireUser } from "@/lib/auth";
import { STORIES } from "@/lib/mock/stories";

export const metadata: Metadata = {
  title: "Parent Dashboard",
  robots: { index: false, follow: false },
};

const WEEKEND_ACTIVITIES = [
  { title: "Backyard Scavenger Hunt", emoji: "🔍" },
  { title: "Bake Bella's Berry Muffins", emoji: "🧁" },
  { title: "Family Read-Aloud Night", emoji: "📖" },
];

const READING_TRACKER = [
  { title: "Bella and the Missing Acorns", done: true },
  { title: "Bella and the Rainbow Bridge", done: true },
  { title: "Bella and the Star Meadow Picnic", done: false },
];

const PRINTABLE_QUEUE = [
  "Alphabet Tracing Pack",
  "Spring Fine Motor Cards",
  "Bella and the Missing Acorns - Coloring Page",
];

export default async function ParentDashboardPage() {
  const result = await requireUser();
  if (!result.configured) return <SupabaseNotConfiguredNotice />;

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="font-heading text-3xl font-semibold text-brand-navy">
          Parent Dashboard
        </h1>
        <p className="font-body text-brand-navy/70">
          Weekend ideas, reading progress, and printables ready to go.
        </p>
        <DashboardTabs />
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <DashboardCard title="Weekend Activities" icon={Tent}>
          <ul className="flex flex-col gap-3">
            {WEEKEND_ACTIVITIES.map((activity) => (
              <li key={activity.title} className="flex items-center gap-3">
                <span className="text-2xl" aria-hidden>
                  {activity.emoji}
                </span>
                <span className="font-body text-sm text-brand-navy/80">{activity.title}</span>
              </li>
            ))}
          </ul>
        </DashboardCard>

        <DashboardCard title="Reading Tracker" icon={BookOpenCheck}>
          <ul className="flex flex-col gap-3">
            {READING_TRACKER.map((book) => (
              <li key={book.title} className="flex items-center justify-between">
                <span className="font-body text-sm text-brand-navy/80">{book.title}</span>
                <span
                  className={`rounded-full px-3 py-1 font-body text-xs ${
                    book.done
                      ? "bg-brand-green/20 text-brand-navy"
                      : "bg-brand-navy/5 text-brand-navy-muted"
                  }`}
                >
                  {book.done ? "Read" : "Up next"}
                </span>
              </li>
            ))}
          </ul>
          <p className="font-body text-xs text-brand-navy-muted">
            {STORIES.length} episodes available in the Story Hub.
          </p>
        </DashboardCard>

        <DashboardCard title="Printable Queue" icon={Printer}>
          <ul className="flex flex-col gap-3">
            {PRINTABLE_QUEUE.map((item) => (
              <li key={item} className="font-body text-sm text-brand-navy/80">
                {item}
              </li>
            ))}
          </ul>
        </DashboardCard>

        <DashboardCard title="Bella Rewards" icon={Star}>
          <p className="font-body text-sm text-brand-navy/70">
            Your little learner has earned stars and badges for great learning
            habits this month.
          </p>
          <Link
            href="/dashboard/passport"
            className="font-button text-sm font-semibold text-brand-pink-ink"
          >
            View the Learning Passport &rarr;
          </Link>
        </DashboardCard>
      </div>
    </div>
  );
}
