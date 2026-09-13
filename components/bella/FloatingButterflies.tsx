"use client";

import { motion } from "framer-motion";
import Butterfly from "./Butterfly";
import { cn } from "@/lib/utils";

type ButterflySpec = {
  top: string;
  left: string;
  size: number;
  color: string;
  duration: number;
  delay: number;
  driftX: number;
};

const BUTTERFLIES: ButterflySpec[] = [
  { top: "10%", left: "8%", size: 34, color: "#FF5D8F", duration: 6, delay: 0, driftX: 16 },
  { top: "22%", left: "88%", size: 26, color: "#6BCBFF", duration: 7, delay: 0.6, driftX: -14 },
  { top: "68%", left: "4%", size: 28, color: "#FFD84D", duration: 5.5, delay: 1.1, driftX: 12 },
  { top: "78%", left: "92%", size: 32, color: "#A8D5BA", duration: 6.5, delay: 0.3, driftX: -18 },
  { top: "42%", left: "95%", size: 22, color: "#FF5D8F", duration: 5, delay: 1.6, driftX: -10 },
  { top: "5%", left: "45%", size: 24, color: "#6BCBFF", duration: 6.2, delay: 0.9, driftX: 10 },
];

export default function FloatingButterflies({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      {BUTTERFLIES.map((b, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ top: b.top, left: b.left }}
          animate={{ y: [0, -20, 0], x: [0, b.driftX, 0] }}
          transition={{
            duration: b.duration,
            delay: b.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Butterfly size={b.size} color={b.color} />
        </motion.div>
      ))}
    </div>
  );
}
