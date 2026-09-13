import type { Metadata } from "next";
import AdminNav from "@/components/admin/AdminNav";
import ProductForm from "@/components/admin/ProductForm";
import SupabaseNotConfiguredNotice from "@/components/auth/SupabaseNotConfiguredNotice";
import { requireAdmin } from "@/lib/adminAuth";
import { createProduct } from "@/lib/admin/actions";

export const metadata: Metadata = {
  title: "Admin · New Product",
};

export default async function NewProductPage() {
  const result = await requireAdmin();
  if (!result.configured) return <SupabaseNotConfiguredNotice />;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="font-heading text-2xl font-semibold text-brand-navy">Admin</h1>
      <div className="mt-6">
        <AdminNav />
      </div>

      <h2 className="mt-8 font-heading text-lg font-semibold text-brand-navy">New Product</h2>
      <div className="mt-4 rounded-2xl border-2 border-brand-navy/10 bg-white p-6">
        <ProductForm action={createProduct} submitLabel="Create Product" />
      </div>
    </div>
  );
}
