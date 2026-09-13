import type { Metadata } from "next";
import BellaMascot from "@/components/bella/BellaMascot";
import LocationGrid from "@/components/adventure/LocationGrid";

export const metadata: Metadata = {
  title: "Adventure Map",
  description:
    "Explore Bella the Brave Bunny's world — Reading Tree, Rainbow River, Craft Cottage, Teacher Library, Parent Corner, and Star Meadow.",
};

export default function AdventurePage() {
  return (
    <div>
      <section className="bg-brand-blue/10">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-4 py-16 text-center sm:px-6">
          <BellaMascot pose="idle" size={160} />
          <h1 className="font-heading text-4xl font-semibold text-brand-navy sm:text-5xl">
            Bella&rsquo;s Adventure Map
          </h1>
          <p className="max-w-xl font-body text-lg text-brand-navy/70">
            Pick a spot on the map and start exploring. Every location has
            its own stories, activities, and printables.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <LocationGrid />
      </section>
    </div>
  );
}
