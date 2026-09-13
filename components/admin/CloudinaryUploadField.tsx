"use client";

import { useState } from "react";
import { UploadCloud } from "lucide-react";

const inputClass =
  "w-full rounded-xl border-2 border-brand-navy/10 bg-white px-3 py-2 font-body text-sm outline-none focus:border-brand-pink";

export default function CloudinaryUploadField({
  name,
  label,
  defaultValue = "",
}: {
  name: string;
  label: string;
  defaultValue?: string;
}) {
  const [url, setUrl] = useState(defaultValue);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
  const canUpload = Boolean(cloudName && uploadPreset);

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file || !cloudName || !uploadPreset) return;

    setUploading(true);
    setError(null);
    try {
      const body = new FormData();
      body.append("file", file);
      body.append("upload_preset", uploadPreset);

      const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`, {
        method: "POST",
        body,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error?.message ?? "Upload failed");
      setUrl(data.secure_url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-body text-sm font-semibold text-brand-navy">{label}</label>
      <input
        type="text"
        name={name}
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="https://res.cloudinary.com/..."
        className={inputClass}
      />
      <label
        className={`flex w-fit items-center gap-2 rounded-full border border-dashed px-3 py-1.5 font-body text-xs ${
          canUpload
            ? "cursor-pointer border-brand-navy/20 text-brand-navy/60 hover:border-brand-pink"
            : "cursor-not-allowed border-brand-navy/10 text-brand-navy/30"
        }`}
      >
        <UploadCloud size={14} />
        {uploading ? "Uploading..." : "Upload to Cloudinary"}
        <input
          type="file"
          accept="image/*,application/pdf"
          onChange={handleFile}
          disabled={!canUpload || uploading}
          className="hidden"
        />
      </label>
      {!canUpload && (
        <p className="font-body text-xs text-brand-navy/40">
          Set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME and NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET to
          enable direct uploads, or paste a URL above.
        </p>
      )}
      {error && <p className="font-body text-xs text-brand-pink">{error}</p>}
    </div>
  );
}
