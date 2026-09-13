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
          "card-lift group flex h-full flex-col gap-3 rounded-[1.75rem] border-2 p-6 shadow-[0_6px_20px_-8px_rgba(37,50,75,0.1)]",
          LOCATION_CARD_CLASSES[location.color],
        )}
      >
        <span
          className="inline-block w-fit text-4xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110"
          aria-hidden
        >
          {location.emoji}
        </span>
        <h3 className="font-heading text-xl font-semibold text-brand-navy">
          {location.name}
        </h3>
        <p className="font-body text-sm text-brand-navy/70">{location.description}</p>
        <span className="mt-auto flex items-center gap-1 font-button text-sm font-semibold text-brand-navy-muted transition-all group-hover:translate-x-1 group-hover:text-brand-pink-ink">
          Visit &rarr;
        </span>
      </Link>
    </motion.div>
  );
}
