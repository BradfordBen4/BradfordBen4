import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import StoryCard from "@/components/story/StoryCard";
import { STORIES } from "@/lib/mock/stories";

export const metadata: Metadata = {
  title: "Story Hub",
  description:
    "Read Bella the Brave Bunny's storybook episodes, complete with coloring pages, parent activities, and teacher worksheets.",
};

export default function StoriesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Bella Story Hub"
        title="Story Time with Bella"
        subtitle="Follow Bella's storybook adventures, one episode at a time."
      />
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {STORIES.map((story) => (
          <StoryCard key={story.slug} story={story} />
        ))}
      </div>
    </div>
  );
}
