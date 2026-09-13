"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ButterflyProps = {
  color?: string;
  size?: number;
  flapDuration?: number;
  className?: string;
};

export default function Butterfly({
  color = "#FF5D8F",
  size = 32,
  flapDuration = 0.6,
  className,
}: ButterflyProps) {
  return (
    <svg
      viewBox="0 0 40 30"
      width={size}
      height={(size * 30) / 40}
      className={cn("select-none", className)}
      aria-hidden
    >
      <motion.g
        style={{ originX: 0.5, originY: 0.5 }}
        animate={{ scaleX: [1, 0.7, 1] }}
        transition={{ duration: flapDuration, repeat: Infinity, ease: "easeInOut" }}
      >
        <ellipse cx={12} cy={10} rx={10} ry={7} fill={color} opacity={0.9} />
        <ellipse cx={12} cy={20} rx={8} ry={6} fill={color} opacity={0.65} />
        <ellipse cx={28} cy={10} rx={10} ry={7} fill={color} opacity={0.9} />
        <ellipse cx={28} cy={20} rx={8} ry={6} fill={color} opacity={0.65} />
      </motion.g>
      <line
        x1={20}
        y1={5}
        x2={20}
        y2={25}
        stroke="#25324B"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
}
