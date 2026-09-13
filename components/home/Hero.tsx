"use client";

import { motion } from "framer-motion";
import BellaMascot from "@/components/bella/BellaMascot";
import FloatingButterflies from "@/components/bella/FloatingButterflies";
import Button from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-blue/15 via-brand-cream to-brand-cream">
      {/* Layered storybook backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="bg-blob absolute -left-16 -top-24 h-72 w-72 bg-brand-pink sm:h-96 sm:w-96" />
        <div className="bg-blob absolute -right-10 top-10 h-64 w-64 bg-brand-yellow sm:h-80 sm:w-80" />
        <div className="bg-blob absolute bottom-[-6rem] left-1/3 h-72 w-72 bg-brand-green sm:h-96 sm:w-96" />
      </div>

      <FloatingButterflies />

      <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-4 py-20 sm:px-6 md:flex-row md:gap-8 md:py-28 lg:py-32">
        <motion.div
          className="flex flex-1 flex-col items-center gap-7 text-center md:items-start md:text-left"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={fadeInUp}
            className="rounded-full bg-white px-4 py-1.5 font-button text-sm font-semibold text-brand-pink-ink shadow-md"
          >
            🐰 Meet Bella the Brave Bunny
          </motion.span>

          <div className="flex flex-col gap-4">
            <motion.h1
              variants={fadeInUp}
              className="font-heading text-5xl font-semibold leading-[1.05] tracking-tight text-brand-navy sm:text-6xl md:text-7xl"
            >
              Learning Adventures Worth Hopping Into
            </motion.h1>
            <motion.div
              variants={fadeInUp}
              className="rainbow-divider w-24 self-center md:self-start"
            />
          </div>

          <motion.p
            variants={fadeInUp}
            className="max-w-lg font-body text-lg leading-relaxed text-brand-navy/70 sm:text-xl"
          >
            Beautiful worksheets, storybooks, and lesson plans for parents,
            teachers, tutors, and daycare owners &mdash; all hosted by Bella
            and her storybook world.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 md:justify-start">
            <Button href="/shop" variant="pink" size="lg">
              Explore the Shop
            </Button>
            <Button href="/membership" variant="outline" size="lg">
              Join the Adventure
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative flex flex-1 justify-center"
        >
          <div
            aria-hidden
            className="grounding-shadow absolute bottom-2 left-1/2 h-8 w-40 -translate-x-1/2"
          />
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <BellaMascot pose="wave" size={300} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
