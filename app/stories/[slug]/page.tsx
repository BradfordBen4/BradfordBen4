import type { Metadata } from "next";
import { notFound } from "next/navigation";
import StoryReader from "@/components/story/StoryReader";
import { STORIES, getStoryBySlug } from "@/lib/mock/stories";

export function generateStaticParams() {
  return STORIES.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) return {};
  return { title: story.title, description: story.summary };
}

export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
      <span className="font-button text-sm font-semibold uppercase tracking-wide text-brand-navy/50">
        Episode {story.episodeNumber}
      </span>
      <h1 className="mt-2 font-heading text-3xl font-semibold text-brand-navy sm:text-4xl">
        {story.title}
      </h1>
      <div className="mt-10">
        <StoryReader story={story} />
      </div>
    </div>
  );
}
