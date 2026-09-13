import type { Metadata } from "next";
import Link from "next/link";
import { Pencil, Trash2 } from "lucide-react";
import AdminNav from "@/components/admin/AdminNav";
import SupabaseNotConfiguredNotice from "@/components/auth/SupabaseNotConfiguredNotice";
import { requireAdmin } from "@/lib/adminAuth";
import { deleteProduct } from "@/lib/admin/actions";

export const metadata: Metadata = {
  title: "Admin · Products",
};

export default async function AdminProductsPage() {
  const result = await requireAdmin();
  if (!result.configured) return <SupabaseNotConfiguredNotice />;

  const { data: products } = await result.supabase
    .from("products")
    .select("id, slug, title, price, categories")
    .order("created_at", { ascending: false });

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="font-heading text-2xl font-semibold text-brand-navy">Admin</h1>
      <div className="mt-6">
        <AdminNav />
      </div>

      <div className="mt-8 flex items-center justify-between">
        <h2 className="font-heading text-lg font-semibold text-brand-navy">
          Products (worksheets, lesson plans, coloring books)
        </h2>
        <Link
          href="/admin/products/new"
          className="btn-soft rounded-full bg-brand-pink px-4 py-2 font-body text-sm font-semibold text-white"
        >
          + New Product
        </Link>
      </div>

      <div className="mt-4 overflow-x-auto rounded-2xl border-2 border-brand-navy/10 bg-white">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-brand-navy/10 font-body text-xs uppercase tracking-wide text-brand-navy/50">
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Categories</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody>
            {(products ?? []).map((product) => (
              <tr key={product.id} className="border-b border-brand-navy/5 last:border-0">
                <td className="px-4 py-3 font-body text-sm text-brand-navy">{product.title}</td>
                <td className="px-4 py-3 font-body text-xs text-brand-navy/60">
                  {(product.categories ?? []).join(", ")}
                </td>
                <td className="px-4 py-3 font-body text-sm text-brand-navy">${product.price}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-end gap-2">
                    <Link
                      href={`/admin/products/${product.id}/edit`}
                      className="rounded-full p-2 text-brand-navy/60 hover:bg-brand-navy/5"
                      aria-label="Edit"
                    >
                      <Pencil size={16} />
                    </Link>
                    <form action={deleteProduct.bind(null, product.id)}>
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
            {(!products || products.length === 0) && (
              <tr>
                <td colSpan={4} className="px-4 py-8 text-center font-body text-sm text-brand-navy/50">
                  No products yet. Create your first one!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
