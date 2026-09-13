"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Palette, Home, GraduationCap } from "lucide-react";
import Link from "next/link";
import type { MockStory } from "@/lib/mock/stories";
import Button from "@/components/ui/Button";
import { COLOR_WASH_MEDIUM } from "@/lib/colorMaps";

export default function StoryReader({ story }: { story: MockStory }) {
  const [pageIndex, setPageIndex] = useState(0);
  const isLastPage = pageIndex === story.pages.length - 1;

  return (
    <div className="flex flex-col items-center gap-6">
      <div
        className={`flex h-40 w-40 items-center justify-center rounded-full text-7xl ${COLOR_WASH_MEDIUM[story.color]}`}
        aria-hidden
      >
        {story.emoji}
      </div>

      <div
        className="relative w-full max-w-2xl overflow-hidden rounded-3xl border-2 border-brand-navy/10 bg-white p-8 shadow-sm"
        style={{ perspective: 1200 }}
      >
        <AnimatePresence mode="wait" custom={pageIndex}>
          <motion.div
            key={pageIndex}
            initial={{ rotateY: 70, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: -70, opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            style={{ transformOrigin: "left center" }}
            className="min-h-[10rem] font-body text-lg leading-relaxed text-brand-navy/85"
          >
            {story.pages[pageIndex]}
          </motion.div>
        </AnimatePresence>

        <div className="mt-6 flex items-center justify-between">
          <button
            onClick={() => setPageIndex((p) => Math.max(0, p - 1))}
            disabled={pageIndex === 0}
            className="btn-soft flex h-10 w-10 items-center justify-center rounded-full bg-brand-cream text-brand-navy disabled:cursor-not-allowed disabled:opacity-30"
            aria-label="Previous page"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex gap-1.5">
            {story.pages.map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full ${
                  i === pageIndex ? "bg-brand-pink-ink" : "bg-brand-navy/15"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setPageIndex((p) => Math.min(story.pages.length - 1, p + 1))}
            disabled={isLastPage}
            className="btn-soft flex h-10 w-10 items-center justify-center rounded-full bg-brand-cream text-brand-navy disabled:cursor-not-allowed disabled:opacity-30"
            aria-label="Next page"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {isLastPage && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="flex w-full max-w-2xl flex-col items-center gap-4"
        >
          <div className="flex flex-wrap justify-center gap-3">
            <Button href={story.coloringPageUrl} variant="yellow" size="sm">
              <Palette size={16} /> Coloring Page
            </Button>
            <Button href={story.parentActivityUrl} variant="blue" size="sm">
              <Home size={16} /> Parent Activity
            </Button>
            <Button href={story.teacherWorksheetUrl} variant="navy" size="sm">
              <GraduationCap size={16} /> Teacher Worksheet
            </Button>
          </div>

          {story.nextEpisodeSlug ? (
            <Button href={`/stories/${story.nextEpisodeSlug}`} variant="pink" size="lg">
              Next Episode &rarr;
            </Button>
          ) : (
            <p className="font-body text-brand-navy-muted">
              More episodes are hopping their way soon!
            </p>
          )}

          <Link
            href="/stories"
            className="font-button text-sm font-semibold text-brand-navy-muted hover:text-brand-pink-ink"
          >
            &larr; Back to the Story Hub
          </Link>
        </motion.div>
      )}
    </div>
  );
}
