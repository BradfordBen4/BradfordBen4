import Link from "next/link";
import type { MockStory } from "@/lib/mock/stories";
import { COLOR_WASH_STRONG } from "@/lib/colorMaps";

export default function StoryCard({ story }: { story: MockStory }) {
  return (
    <Link
      href={`/stories/${story.slug}`}
      className="card-lift group flex flex-col overflow-hidden rounded-3xl border-2 border-brand-navy/10 bg-white"
    >
      <div
        className={`flex h-40 items-center justify-center text-6xl ${COLOR_WASH_STRONG[story.color]}`}
        aria-hidden
      >
        {story.emoji}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="font-button text-xs font-semibold uppercase tracking-wide text-brand-navy-muted">
          Episode {story.episodeNumber}
        </span>
        <h3 className="font-heading text-lg font-semibold text-brand-navy group-hover:text-brand-pink-ink">
          {story.title}
        </h3>
        <p className="font-body text-sm text-brand-navy/70">{story.summary}</p>
        <span className="mt-auto pt-2 font-button text-sm font-semibold text-brand-pink-ink">
          Read the Story &rarr;
        </span>
      </div>
    </Link>
  );
}
