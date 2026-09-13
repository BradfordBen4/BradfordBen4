import CloudinaryUploadField from "@/components/admin/CloudinaryUploadField";
import { inputClass } from "@/lib/formStyles";

export type StoryFormValues = {
  slug?: string;
  title?: string;
  episode_number?: number;
  body?: string;
  illustration_url?: string;
  coloring_page_url?: string;
  parent_activity_url?: string;
  teacher_worksheet_url?: string;
  next_episode_slug?: string;
};

export default function StoryForm({
  action,
  initial,
  submitLabel,
}: {
  action: (formData: FormData) => void;
  initial?: StoryFormValues;
  submitLabel: string;
}) {
  return (
    <form action={action} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label className="font-body text-sm font-semibold text-brand-navy">Title</label>
          <input name="title" required defaultValue={initial?.title} className={inputClass} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="font-body text-sm font-semibold text-brand-navy">Slug</label>
          <input name="slug" required defaultValue={initial?.slug} className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label className="font-body text-sm font-semibold text-brand-navy">
            Episode Number
          </label>
          <input
            type="number"
            min="1"
            name="episode_number"
            required
            defaultValue={initial?.episode_number}
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="font-body text-sm font-semibold text-brand-navy">
            Next Episode Slug (optional)
          </label>
          <input
            name="next_episode_slug"
            defaultValue={initial?.next_episode_slug}
            className={inputClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-body text-sm font-semibold text-brand-navy">
          Story Text (separate pages with a blank line)
        </label>
        <textarea name="body" rows={8} defaultValue={initial?.body} className={inputClass} />
      </div>

      <CloudinaryUploadField
        name="illustration_url"
        label="Illustration"
        defaultValue={initial?.illustration_url}
      />
      <CloudinaryUploadField
        name="coloring_page_url"
        label="Coloring Page"
        defaultValue={initial?.coloring_page_url}
      />
      <CloudinaryUploadField
        name="parent_activity_url"
        label="Parent Activity"
        defaultValue={initial?.parent_activity_url}
      />
      <CloudinaryUploadField
        name="teacher_worksheet_url"
        label="Teacher Worksheet"
        defaultValue={initial?.teacher_worksheet_url}
      />

      <button
        type="submit"
        className="btn-soft w-fit rounded-full bg-brand-navy px-6 py-2.5 font-body text-sm font-semibold text-white"
      >
        {submitLabel}
      </button>
    </form>
  );
}
