"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { AdventureLocation } from "@/lib/constants";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { LOCATION_CARD_CLASSES } from "@/lib/colorMaps";

export default function LocationCard({ location }: { location: AdventureLocation }) {
  return (
    <motion.div variants={fadeInUp} className="h-full">
      <Link
        href={location.href}
        className={cn(
          "card-lift group flex h-full flex-col gap-3 rounded-3xl border-2 p-6",
          LOCATION_CARD_CLASSES[location.color],
        )}
      >
        <span className="text-4xl" aria-hidden>
          {location.emoji}
        </span>
        <h3 className="font-heading text-xl font-semibold text-brand-navy">
          {location.name}
        </h3>
        <p className="font-body text-sm text-brand-navy/70">{location.description}</p>
        <span className="mt-auto font-button text-sm font-semibold text-brand-navy-muted group-hover:text-brand-pink-ink">
          Visit &rarr;
        </span>
      </Link>
    </motion.div>
  );
}
