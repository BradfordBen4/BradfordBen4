"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { AdventureLocation } from "@/lib/constants";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

export const LOCATION_COLOR_CLASSES: Record<string, string> = {
  pink: "bg-brand-pink/10 border-brand-pink/30 hover:border-brand-pink",
  yellow: "bg-brand-yellow/15 border-brand-yellow/40 hover:border-brand-yellow",
  blue: "bg-brand-blue/10 border-brand-blue/30 hover:border-brand-blue",
  green: "bg-brand-green/15 border-brand-green/40 hover:border-brand-green",
  navy: "bg-brand-navy/5 border-brand-navy/20 hover:border-brand-navy",
  cream: "bg-brand-cream border-brand-navy/10 hover:border-brand-navy/30",
};

export default function LocationCard({ location }: { location: AdventureLocation }) {
  return (
    <motion.div variants={fadeInUp} className="h-full">
      <Link
        href={location.href}
        className={cn(
          "card-lift group flex h-full flex-col gap-3 rounded-3xl border-2 p-6",
          LOCATION_COLOR_CLASSES[location.color],
        )}
      >
        <span className="text-4xl" aria-hidden>
          {location.emoji}
        </span>
        <h3 className="font-heading text-xl font-semibold text-brand-navy">
          {location.name}
        </h3>
        <p className="font-body text-sm text-brand-navy/70">{location.description}</p>
        <span className="mt-auto font-button text-sm font-semibold text-brand-navy/60 group-hover:text-brand-pink">
          Visit &rarr;
        </span>
      </Link>
    </motion.div>
  );
}
