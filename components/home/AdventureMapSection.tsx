import SectionHeading from "@/components/ui/SectionHeading";
import LocationGrid from "@/components/adventure/LocationGrid";

export default function AdventureMapSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Bella's Adventure Map"
        title="Explore Bella's World"
        subtitle="Every location is packed with activities, stories, and printables waiting to be discovered."
      />
      <div className="mt-10">
        <LocationGrid />
      </div>
    </section>
  );
}
