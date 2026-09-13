import Link from "next/link";
import type { MockStory } from "@/lib/mock/stories";
import { COLOR_WASH_GRADIENT } from "@/lib/colorMaps";

export default function StoryCard({ story }: { story: MockStory }) {
  return (
    <Link
      href={`/stories/${story.slug}`}
      className="card-lift group flex flex-col overflow-hidden rounded-[1.75rem] border-2 border-brand-navy/10 bg-white shadow-[0_6px_20px_-8px_rgba(37,50,75,0.12)]"
    >
      <div
        className={`flex h-40 items-center justify-center text-6xl transition-transform duration-300 group-hover:scale-105 ${COLOR_WASH_GRADIENT[story.color]}`}
        aria-hidden
      >
        <span className="inline-block transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
          {story.emoji}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="font-button text-xs font-semibold uppercase tracking-wide text-brand-navy-muted">
          Episode {story.episodeNumber}
        </span>
        <h3 className="font-heading text-lg font-semibold text-brand-navy transition-colors group-hover:text-brand-pink-ink">
          {story.title}
        </h3>
        <p className="font-body text-sm text-brand-navy/70">{story.summary}</p>
        <span className="mt-auto flex items-center gap-1 pt-2 font-button text-sm font-semibold text-brand-pink-ink transition-transform group-hover:translate-x-1">
          Read the Story &rarr;
        </span>
      </div>
    </Link>
  );
}
