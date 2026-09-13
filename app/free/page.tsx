import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { SEO_PAGES } from "@/lib/seo-pages";

export const metadata: Metadata = {
  title: "Free Printables",
  description:
    "Free printable activities for preschool, daycare, and elementary learners from Little Learners Studio.",
};

export default function FreeResourcesIndexPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="No Strings Attached"
        title="Free Printables"
        subtitle="Grab a free activity and see why families and classrooms love Bella's resources."
      />
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {SEO_PAGES.map((page) => (
          <Link
            key={page.slug}
            href={`/free/${page.slug}`}
            className="card-lift flex items-center gap-4 rounded-3xl border-2 border-brand-navy/10 bg-white p-6"
          >
            <span className="text-4xl" aria-hidden>
              {page.freebieEmoji}
            </span>
            <div>
              <h2 className="font-heading text-lg font-semibold text-brand-navy">
                {page.title}
              </h2>
              <p className="font-body text-sm text-brand-navy-muted">{page.freebieTitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
