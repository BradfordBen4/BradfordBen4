import type { Metadata } from "next";
import ShopBrowser from "@/components/shop/ShopBrowser";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Browse worksheets, coloring pages, and lesson plans for preschool through Grade 2, daycare, and homeschool.",
};

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="The Studio Shop"
        title="Find Your Next Resource"
        subtitle="Search or filter by category to discover printables perfect for your little learner."
      />
      <div className="mt-10">
        <ShopBrowser />
      </div>
    </div>
  );
}
