import type { Metadata } from "next";
import Link from "next/link";
import { ShoppingBag, BookOpen, Receipt, Users } from "lucide-react";
import AdminNav from "@/components/admin/AdminNav";
import SupabaseNotConfiguredNotice from "@/components/auth/SupabaseNotConfiguredNotice";
import { requireAdmin } from "@/lib/adminAuth";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

async function countRows(table: string) {
  const admin = getSupabaseAdminClient();
  if (!admin) return null;
  const { count } = await admin.from(table).select("*", { count: "exact", head: true });
  return count ?? 0;
}

export default async function AdminPage() {
  const result = await requireAdmin();
  if (!result.configured) return <SupabaseNotConfiguredNotice />;

  const [products, stories, purchases, memberships] = await Promise.all([
    countRows("products"),
    countRows("stories"),
    countRows("purchases"),
    countRows("memberships"),
  ]);

  const stats = [
    { label: "Products", value: products, icon: ShoppingBag, href: "/admin/products" },
    { label: "Stories", value: stories, icon: BookOpen, href: "/admin/stories" },
    { label: "Purchases", value: purchases, icon: Receipt, href: null },
    { label: "Members", value: memberships, icon: Users, href: null },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="font-heading text-2xl font-semibold text-brand-navy">Admin</h1>
      <p className="mt-1 font-body text-sm text-brand-navy-muted">
        Manage worksheets, lesson plans, coloring books, and Bella stories &mdash; no
        code required.
      </p>

      <div className="mt-6">
        <AdminNav />
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((stat) => {
          const Card = (
            <div className="flex flex-col gap-2 rounded-2xl border-2 border-brand-navy/10 bg-white p-5">
              <stat.icon size={18} className="text-brand-pink-ink" />
              <span className="font-heading text-2xl font-semibold text-brand-navy">
                {stat.value ?? "—"}
              </span>
              <span className="font-body text-xs text-brand-navy-muted">{stat.label}</span>
            </div>
          );
          return stat.href ? (
            <Link key={stat.label} href={stat.href}>
              {Card}
            </Link>
          ) : (
            <div key={stat.label}>{Card}</div>
          );
        })}
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/admin/products/new"
          className="btn-soft rounded-full bg-brand-pink-ink px-5 py-2.5 font-body text-sm font-semibold text-white"
        >
          + New Product
        </Link>
        <Link
          href="/admin/stories/new"
          className="btn-soft rounded-full bg-brand-navy px-5 py-2.5 font-body text-sm font-semibold text-white"
        >
          + New Story
        </Link>
      </div>
    </div>
  );
}
