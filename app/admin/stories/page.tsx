import type { Metadata } from "next";
import Link from "next/link";
import { Pencil, Trash2 } from "lucide-react";
import AdminNav from "@/components/admin/AdminNav";
import SupabaseNotConfiguredNotice from "@/components/auth/SupabaseNotConfiguredNotice";
import { requireAdmin } from "@/lib/adminAuth";
import { deleteStory } from "@/lib/admin/actions";

export const metadata: Metadata = {
  title: "Admin · Stories",
};

export default async function AdminStoriesPage() {
  const result = await requireAdmin();
  if (!result.configured) return <SupabaseNotConfiguredNotice />;

  const { data: stories } = await result.supabase
    .from("stories")
    .select("id, slug, title, episode_number")
    .order("episode_number", { ascending: true });

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="font-heading text-2xl font-semibold text-brand-navy">Admin</h1>
      <div className="mt-6">
        <AdminNav />
      </div>

      <div className="mt-8 flex items-center justify-between">
        <h2 className="font-heading text-lg font-semibold text-brand-navy">Bella Stories</h2>
        <Link
          href="/admin/stories/new"
          className="btn-soft rounded-full bg-brand-navy px-4 py-2 font-body text-sm font-semibold text-white"
        >
          + New Story
        </Link>
      </div>

      <div className="mt-4 overflow-x-auto rounded-2xl border-2 border-brand-navy/10 bg-white">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-brand-navy/10 font-body text-xs uppercase tracking-wide text-brand-navy/50">
              <th className="px-4 py-3">Episode</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody>
            {(stories ?? []).map((story) => (
              <tr key={story.id} className="border-b border-brand-navy/5 last:border-0">
                <td className="px-4 py-3 font-body text-sm text-brand-navy">
                  {story.episode_number}
                </td>
                <td className="px-4 py-3 font-body text-sm text-brand-navy">{story.title}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-end gap-2">
                    <Link
                      href={`/admin/stories/${story.id}/edit`}
                      className="rounded-full p-2 text-brand-navy/60 hover:bg-brand-navy/5"
                      aria-label="Edit"
                    >
                      <Pencil size={16} />
                    </Link>
                    <form action={deleteStory.bind(null, story.id)}>
                      <button
                        type="submit"
                        className="rounded-full p-2 text-brand-pink hover:bg-brand-pink/10"
                        aria-label="Delete"
                      >
                        <Trash2 size={16} />
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
            {(!stories || stories.length === 0) && (
              <tr>
                <td colSpan={3} className="px-4 py-8 text-center font-body text-sm text-brand-navy/50">
                  No stories yet. Write Bella&rsquo;s next episode!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
