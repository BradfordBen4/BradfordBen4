"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import BellaMascot from "@/components/bella/BellaMascot";
import { staggerContainer, popIn } from "@/lib/animations";
import { cn } from "@/lib/utils";
import type { MOCK_PASSPORT } from "@/lib/mock/passport";

export default function PassportBook({ passport }: { passport: typeof MOCK_PASSPORT }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="mx-auto flex max-w-2xl flex-col items-center gap-8 rounded-[2.5rem] border-4 border-brand-yellow bg-white p-8 text-center shadow-sm"
    >
      <motion.div variants={popIn} className="flex flex-col items-center gap-2">
        <BellaMascot pose="celebrate" size={140} />
        <h1 className="font-heading text-2xl font-semibold text-brand-navy">
          {passport.childName}&rsquo;s Learning Passport
        </h1>
      </motion.div>

      <motion.div variants={popIn} className="flex items-center gap-2">
        <Star className="fill-brand-yellow text-brand-yellow" size={28} />
        <span className="font-heading text-3xl font-semibold text-brand-navy">
          {passport.stars}
        </span>
        <span className="font-body text-brand-navy/60">stars earned</span>
      </motion.div>

      <div className="w-full">
        <h2 className="mb-4 font-heading text-lg font-semibold text-brand-navy">Badges</h2>
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-3 gap-4 sm:grid-cols-6"
        >
          {passport.badges.map((badge) => (
            <motion.div
              key={badge.id}
              variants={popIn}
              className={cn(
                "flex flex-col items-center gap-1 rounded-2xl p-3",
                badge.earned ? "bg-brand-yellow/15" : "bg-brand-navy/5 opacity-40",
              )}
            >
              <span className="text-3xl" aria-hidden>
                {badge.emoji}
              </span>
              <span className="font-body text-xs text-brand-navy/70">{badge.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="w-full">
        <h2 className="mb-4 font-heading text-lg font-semibold text-brand-navy">
          Sticker Collection
        </h2>
        <motion.div variants={staggerContainer} className="flex justify-center gap-3">
          {passport.stickers.map((sticker, i) => (
            <motion.span key={i} variants={popIn} className="text-3xl" aria-hidden>
              {sticker}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
