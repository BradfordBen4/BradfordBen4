"use client";

import { motion } from "framer-motion";
import { ADVENTURE_MAP } from "@/lib/constants";
import LocationCard from "@/components/adventure/LocationCard";
import { staggerContainer } from "@/lib/animations";

export default function LocationGrid() {
  return (
    <motion.div
      className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {ADVENTURE_MAP.map((location) => (
        <LocationCard key={location.slug} location={location} />
      ))}
    </motion.div>
  );
}
