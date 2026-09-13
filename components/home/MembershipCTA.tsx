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
        className="relative flex flex-col items-center gap-8 overflow-hidden rounded-[2.5rem] bg-brand-navy px-6 py-12 text-center sm:px-12 md:flex-row md:text-left"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={fadeInUp} className="hidden shrink-0 md:block">
          <BellaMascot pose="celebrate" size={160} />
        </motion.div>

        <div className="flex flex-1 flex-col items-center gap-4 md:items-start">
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-3xl font-semibold text-white sm:text-4xl"
          >
            Unlock the Full Learning Passport
          </motion.h2>
          <motion.ul
            variants={fadeInUp}
            className="flex flex-col gap-2 text-left"
          >
            {PERKS.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 font-body text-white/85">
                <Icon size={18} className="text-brand-yellow" />
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
