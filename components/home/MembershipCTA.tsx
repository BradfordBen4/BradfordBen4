"use client";

import { motion } from "framer-motion";
import { Star, Sparkles, BookOpen } from "lucide-react";
import BellaMascot from "@/components/bella/BellaMascot";
import Button from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const PERKS = [
  { icon: BookOpen, label: "Weekly worksheets & lesson plans" },
  { icon: Sparkles, label: "New Bella stories every month" },
  { icon: Star, label: "Learning Passport rewards for kids" },
];

export default function MembershipCTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <motion.div
        className="relative flex flex-col items-center gap-8 overflow-hidden rounded-[2.5rem] bg-brand-navy px-6 py-14 text-center shadow-[0_30px_60px_-20px_rgba(37,50,75,0.5)] sm:px-12 md:flex-row md:text-left"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Aurora-style glow accents */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="bg-blob absolute -left-12 -top-16 h-64 w-64 bg-brand-pink opacity-40" />
          <div className="bg-blob absolute -right-16 top-1/2 h-72 w-72 -translate-y-1/2 bg-brand-blue opacity-30" />
          <div className="bg-blob absolute bottom-[-4rem] left-1/2 h-56 w-56 bg-brand-yellow opacity-25" />
        </div>

        <motion.div variants={fadeInUp} className="relative hidden shrink-0 md:block">
          <BellaMascot pose="celebrate" size={160} />
          <div aria-hidden className="grounding-shadow absolute bottom-0 left-1/2 h-4 w-24 -translate-x-1/2 opacity-60" />
        </motion.div>

        <div className="relative flex flex-1 flex-col items-center gap-4 md:items-start">
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-3xl font-semibold text-white sm:text-4xl"
          >
            Unlock the Full Learning Passport
          </motion.h2>
          <motion.div variants={fadeInUp} className="rainbow-divider w-16" />
          <motion.ul
            variants={fadeInUp}
            className="flex flex-col gap-2.5 text-left"
          >
            {PERKS.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5 font-body text-white/85">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Icon size={15} className="text-brand-yellow" />
                </span>
                {label}
              </li>
            ))}
          </motion.ul>
          <motion.div variants={fadeInUp}>
            <Button href="/membership" variant="yellow" size="lg">
              View Membership Plans
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
