import type { Metadata } from "next";
import AdminNav from "@/components/admin/AdminNav";
import StoryForm from "@/components/admin/StoryForm";
import SupabaseNotConfiguredNotice from "@/components/auth/SupabaseNotConfiguredNotice";
import { requireAdmin } from "@/lib/adminAuth";
import { createStory } from "@/lib/admin/actions";

export const metadata: Metadata = {
  title: "Admin · New Story",
};

export default async function NewStoryPage() {
  const result = await requireAdmin();
  if (!result.configured) return <SupabaseNotConfiguredNotice />;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="font-heading text-2xl font-semibold text-brand-navy">Admin</h1>
      <div className="mt-6">
        <AdminNav />
      </div>

      <h2 className="mt-8 font-heading text-lg font-semibold text-brand-navy">New Story</h2>
      <div className="mt-4 rounded-2xl border-2 border-brand-navy/10 bg-white p-6">
        <StoryForm action={createStory} submitLabel="Create Story" />
      </div>
    </div>
  );
}
