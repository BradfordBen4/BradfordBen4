"use client";

import { motion } from "framer-motion";
import BellaMascot from "@/components/bella/BellaMascot";
import FloatingButterflies from "@/components/bella/FloatingButterflies";
import Button from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-blue/15 to-brand-cream">
      <FloatingButterflies />
      <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 px-4 py-16 sm:px-6 md:flex-row md:py-24">
        <motion.div
          className="flex flex-1 flex-col items-center gap-6 text-center md:items-start md:text-left"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={fadeInUp}
            className="rounded-full bg-white px-4 py-1 font-button text-sm font-semibold text-brand-pink-ink shadow-sm"
          >
            🐰 Meet Bella the Brave Bunny
          </motion.span>
          <motion.h1
            variants={fadeInUp}
            className="font-heading text-4xl font-semibold leading-tight text-brand-navy sm:text-5xl md:text-6xl"
          >
            Learning Adventures Worth Hopping Into
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="max-w-lg font-body text-lg text-brand-navy/70"
          >
            Beautiful worksheets, storybooks, and lesson plans for parents,
            teachers, tutors, and daycare owners &mdash; all hosted by Bella
            and her storybook world.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3 md:justify-start">
            <Button href="/shop" variant="pink" size="lg">
              Explore the Shop
            </Button>
            <Button href="/membership" variant="outline" size="lg">
              Join the Adventure
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-1 justify-center"
        >
          <BellaMascot pose="wave" size={280} />
        </motion.div>
      </div>
    </section>
  );
}
