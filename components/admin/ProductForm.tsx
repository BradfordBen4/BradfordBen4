import CloudinaryUploadField from "@/components/admin/CloudinaryUploadField";
import { PRODUCT_CATEGORIES } from "@/lib/constants";
import { inputClass } from "@/lib/formStyles";

export type ProductFormValues = {
  slug?: string;
  title?: string;
  description?: string;
  price?: number;
  categories?: string[];
  image_url?: string;
  file_url?: string;
  is_membership_exclusive?: boolean;
};

export default function ProductForm({
  action,
  initial,
  submitLabel,
}: {
  action: (formData: FormData) => void;
  initial?: ProductFormValues;
  submitLabel: string;
}) {
  return (
    <form action={action} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label className="font-body text-sm font-semibold text-brand-navy">Title</label>
          <input
            name="title"
            required
            defaultValue={initial?.title}
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="font-body text-sm font-semibold text-brand-navy">Slug</label>
          <input name="slug" required defaultValue={initial?.slug} className={inputClass} />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-body text-sm font-semibold text-brand-navy">Description</label>
        <textarea
          name="description"
          rows={3}
          defaultValue={initial?.description}
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label className="font-body text-sm font-semibold text-brand-navy">Price (USD)</label>
          <input
            type="number"
            step="0.01"
            min="0"
            name="price"
            required
            defaultValue={initial?.price}
            className={inputClass}
          />
        </div>
        <label className="mt-6 flex items-center gap-2 font-body text-sm text-brand-navy">
          <input
            type="checkbox"
            name="is_membership_exclusive"
            defaultChecked={initial?.is_membership_exclusive}
          />
          Membership exclusive
        </label>
      </div>

      <div>
        <span className="font-body text-sm font-semibold text-brand-navy">Categories</span>
        <div className="mt-2 flex flex-wrap gap-3">
          {PRODUCT_CATEGORIES.map((cat) => (
            <label
              key={cat}
              className="flex items-center gap-1.5 rounded-full border border-brand-navy/10 bg-white px-3 py-1.5 font-body text-xs text-brand-navy/80"
            >
              <input
                type="checkbox"
                name="categories"
                value={cat}
                defaultChecked={initial?.categories?.includes(cat)}
              />
              {cat}
            </label>
          ))}
        </div>
      </div>

      <CloudinaryUploadField name="image_url" label="Cover Image" defaultValue={initial?.image_url} />
      <CloudinaryUploadField
        name="file_url"
        label="Downloadable File (PDF)"
        defaultValue={initial?.file_url}
      />

      <button
        type="submit"
        className="btn-soft w-fit rounded-full bg-brand-pink-ink px-6 py-2.5 font-body text-sm font-semibold text-white"
      >
        {submitLabel}
      </button>
    </form>
  );
}
