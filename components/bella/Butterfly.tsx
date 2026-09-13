"use client";

import { useId } from "react";
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
  const uid = useId();
  const gradId = `bfly-grad-${uid}`;
  const glowId = `bfly-glow-${uid}`;

  return (
    <svg
      viewBox="0 0 44 40"
      width={size}
      height={(size * 40) / 44}
      className={cn("select-none", className)}
      aria-hidden
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.85} />
          <stop offset="45%" stopColor={color} stopOpacity={0.95} />
          <stop offset="100%" stopColor={color} stopOpacity={1} />
        </linearGradient>
        <filter id={glowId} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="1.1" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Left wings */}
      <motion.g
        style={{ originX: "22px", originY: "16px" }}
        animate={{ scaleX: [1, 0.55, 1] }}
        transition={{ duration: flapDuration, repeat: Infinity, ease: "easeInOut" }}
        filter={`url(#${glowId})`}
      >
        <path
          d="M22,14 C13,2 -3,3 2,14 C-2,20 2,26 12,24 C18,23 22,19 22,14 Z"
          fill={`url(#${gradId})`}
        />
        <path
          d="M22,18 C15,20 6,22 6,29 C6,35 16,34 20,26 C22,23 22,20 22,18 Z"
          fill={`url(#${gradId})`}
          opacity={0.85}
        />
        <circle cx={10} cy={13} r={1.4} fill="#ffffff" opacity={0.7} />
      </motion.g>

      {/* Right wings (mirrored) */}
      <motion.g
        style={{ originX: "22px", originY: "16px" }}
        animate={{ scaleX: [1, 0.55, 1] }}
        transition={{ duration: flapDuration, repeat: Infinity, ease: "easeInOut" }}
        filter={`url(#${glowId})`}
      >
        <path
          d="M22,14 C31,2 47,3 42,14 C46,20 42,26 32,24 C26,23 22,19 22,14 Z"
          fill={`url(#${gradId})`}
        />
        <path
          d="M22,18 C29,20 38,22 38,29 C38,35 28,34 24,26 C22,23 22,20 22,18 Z"
          fill={`url(#${gradId})`}
          opacity={0.85}
        />
        <circle cx={34} cy={13} r={1.4} fill="#ffffff" opacity={0.7} />
      </motion.g>

      {/* Body */}
      <ellipse cx={22} cy={20} rx={1.6} ry={11} fill="#25324B" />
      <circle cx={22} cy={9} r={2} fill="#25324B" />
      <path
        d="M22,8 C19,4 16,3 14,3.5"
        stroke="#25324B"
        strokeWidth={1}
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M22,8 C25,4 28,3 30,3.5"
        stroke="#25324B"
        strokeWidth={1}
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
