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
  driftY: number;
  rotate: number;
  flapDuration: number;
  opacity: number;
};

const BUTTERFLIES: ButterflySpec[] = [
  { top: "10%", left: "8%", size: 36, color: "#FF5D8F", duration: 7, delay: 0, driftX: 18, driftY: -26, rotate: 8, flapDuration: 0.55, opacity: 1 },
  { top: "22%", left: "88%", size: 24, color: "#6BCBFF", duration: 8, delay: 0.6, driftX: -16, driftY: -18, rotate: -10, flapDuration: 0.65, opacity: 0.85 },
  { top: "68%", left: "4%", size: 30, color: "#FFD84D", duration: 6.5, delay: 1.1, driftX: 14, driftY: -22, rotate: 6, flapDuration: 0.5, opacity: 1 },
  { top: "78%", left: "92%", size: 34, color: "#A8D5BA", duration: 7.5, delay: 0.3, driftX: -20, driftY: -24, rotate: -8, flapDuration: 0.6, opacity: 0.9 },
  { top: "42%", left: "95%", size: 20, color: "#FF5D8F", duration: 6, delay: 1.6, driftX: -12, driftY: -16, rotate: 12, flapDuration: 0.7, opacity: 0.7 },
  { top: "5%", left: "45%", size: 22, color: "#6BCBFF", duration: 7.2, delay: 0.9, driftX: 10, driftY: -20, rotate: -6, flapDuration: 0.6, opacity: 0.8 },
  { top: "55%", left: "50%", size: 18, color: "#FFD84D", duration: 6.8, delay: 1.9, driftX: 14, driftY: -14, rotate: 10, flapDuration: 0.65, opacity: 0.6 },
];

export default function FloatingButterflies({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      {BUTTERFLIES.map((b, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ top: b.top, left: b.left, opacity: b.opacity }}
          animate={{
            y: [0, b.driftY, 0],
            x: [0, b.driftX, 0],
            rotate: [0, b.rotate, 0],
          }}
          transition={{
            duration: b.duration,
            delay: b.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Butterfly size={b.size} color={b.color} flapDuration={b.flapDuration} />
        </motion.div>
      ))}
    </div>
  );
}
