import Link from "next/link";
import type { MockStory } from "@/lib/mock/stories";

const COLOR_BG: Record<string, string> = {
  pink: "bg-brand-pink/20",
  yellow: "bg-brand-yellow/25",
  blue: "bg-brand-blue/20",
  green: "bg-brand-green/25",
};

export default function StoryCard({ story }: { story: MockStory }) {
  return (
    <Link
      href={`/stories/${story.slug}`}
      className="card-lift group flex flex-col overflow-hidden rounded-3xl border-2 border-brand-navy/10 bg-white"
    >
      <div
        className={`flex h-40 items-center justify-center text-6xl ${COLOR_BG[story.color]}`}
        aria-hidden
      >
        {story.emoji}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="font-button text-xs font-semibold uppercase tracking-wide text-brand-navy/50">
          Episode {story.episodeNumber}
        </span>
        <h3 className="font-heading text-lg font-semibold text-brand-navy group-hover:text-brand-pink">
          {story.title}
        </h3>
        <p className="font-body text-sm text-brand-navy/70">{story.summary}</p>
        <span className="mt-auto pt-2 font-button text-sm font-semibold text-brand-pink">
          Read the Story &rarr;
        </span>
      </div>
    </Link>
  );
}
