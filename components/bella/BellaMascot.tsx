"use client";

import { motion, type TargetAndTransition } from "framer-motion";
import { cn } from "@/lib/utils";

export type BellaPose = "idle" | "wave" | "bounce" | "celebrate";

type BellaMascotProps = {
  pose?: BellaPose;
  size?: number;
  className?: string;
};

const CREAM = "#FFF3DD";
const CREAM_SHADOW = "#F5E4C3";
const BLUE = "#6BCBFF";
const BLUE_DARK = "#4FB8F0";
const PINK = "#FF5D8F";
const PINK_LIGHT = "#FFD8E4";
const YELLOW = "#FFD84D";
const NAVY = "#25324B";

const bodyAnimation: Record<BellaPose, TargetAndTransition> = {
  idle: {
    y: [0, -4, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
  wave: {
    y: [0, -4, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
  bounce: {
    y: [0, -22, 0],
    transition: { duration: 0.9, repeat: Infinity, ease: "easeInOut" },
  },
  celebrate: {
    y: [0, -30, 0, -14, 0],
    scale: [1, 1.04, 1, 1.02, 1],
    transition: { duration: 1.1, repeat: Infinity, ease: "easeOut" },
  },
};

const rightArmAnimation: Record<BellaPose, TargetAndTransition> = {
  idle: { rotate: 0, transition: { duration: 0.3 } },
  wave: {
    rotate: [0, 150, 105, 150, 0],
    transition: { duration: 1.4, repeat: Infinity, ease: "easeInOut" },
  },
  bounce: {
    rotate: [0, 12, 0],
    transition: { duration: 0.9, repeat: Infinity, ease: "easeInOut" },
  },
  celebrate: {
    rotate: [140, 170, 140],
    transition: { duration: 0.6, repeat: Infinity, ease: "easeInOut" },
  },
};

const leftArmAnimation: Record<BellaPose, TargetAndTransition> = {
  idle: { rotate: 0, transition: { duration: 0.3 } },
  wave: { rotate: 0, transition: { duration: 0.3 } },
  bounce: {
    rotate: [0, -10, 0],
    transition: { duration: 0.9, repeat: Infinity, ease: "easeInOut" },
  },
  celebrate: {
    rotate: [-140, -170, -140],
    transition: { duration: 0.6, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function BellaMascot({
  pose = "idle",
  size = 220,
  className,
}: BellaMascotProps) {
  return (
    <motion.svg
      viewBox="0 0 220 260"
      width={size}
      height={(size * 260) / 220}
      className={cn("select-none", className)}
      animate={bodyAnimation[pose]}
      role="img"
      aria-label="Bella the Brave Bunny"
    >
      {/* Backpack */}
      <rect x={128} y={118} width={48} height={72} rx={20} fill={PINK} />

      {/* Feet */}
      <ellipse cx={85} cy={228} rx={22} ry={13} fill={CREAM_SHADOW} />
      <ellipse cx={135} cy={228} rx={22} ry={13} fill={CREAM_SHADOW} />
      <ellipse cx={85} cy={230} rx={8} ry={5} fill={PINK} opacity={0.5} />
      <ellipse cx={135} cy={230} rx={8} ry={5} fill={PINK} opacity={0.5} />

      {/* Body */}
      <ellipse cx={110} cy={172} rx={50} ry={56} fill={CREAM} />

      {/* Arms */}
      <motion.g
        style={{ originX: 0.5, originY: 0.05 }}
        animate={leftArmAnimation[pose]}
      >
        <rect x={54} y={148} width={24} height={66} rx={12} fill={CREAM} />
      </motion.g>
      <motion.g
        style={{ originX: 0.5, originY: 0.05 }}
        animate={rightArmAnimation[pose]}
      >
        <rect x={142} y={148} width={24} height={66} rx={12} fill={CREAM} />
      </motion.g>

      {/* Backpack strap over shoulder */}
      <path
        d="M148,128 L140,158"
        stroke="#E14A79"
        strokeWidth={11}
        strokeLinecap="round"
      />

      {/* Overalls */}
      <path
        d="M92,150 L82,108"
        stroke={BLUE_DARK}
        strokeWidth={12}
        strokeLinecap="round"
      />
      <path
        d="M128,150 L138,108"
        stroke={BLUE_DARK}
        strokeWidth={12}
        strokeLinecap="round"
      />
      <rect x={82} y={145} width={56} height={62} rx={16} fill={BLUE} />

      {/* Daisy on overalls */}
      <g>
        {[0, 72, 144, 216, 288].map((angle) => (
          <ellipse
            key={angle}
            cx={110}
            cy={162}
            rx={7}
            ry={3.5}
            fill="#FFFFFF"
            transform={`rotate(${angle} 110 172)`}
          />
        ))}
        <circle cx={110} cy={172} r={5} fill={YELLOW} />
      </g>

      {/* Ears */}
      <g transform="rotate(-18 85 70)">
        <ellipse cx={85} cy={40} rx={15} ry={40} fill={CREAM} />
        <ellipse cx={85} cy={44} rx={7} ry={26} fill={PINK_LIGHT} />
      </g>
      <g transform="rotate(18 135 70)">
        <ellipse cx={135} cy={40} rx={15} ry={40} fill={CREAM} />
        <ellipse cx={135} cy={44} rx={7} ry={26} fill={PINK_LIGHT} />
      </g>

      {/* Head */}
      <circle cx={110} cy={95} r={50} fill={CREAM} />

      {/* Cheeks */}
      <ellipse cx={80} cy={105} rx={12} ry={7} fill={PINK} opacity={0.45} />
      <ellipse cx={140} cy={105} rx={12} ry={7} fill={PINK} opacity={0.45} />

      {/* Eyes (auto-blinking) */}
      <motion.g
        style={{ originX: 0.5, originY: 0.5 }}
        animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          times: [0, 0.9, 0.94, 0.98, 1],
          ease: "easeInOut",
        }}
      >
        <circle cx={92} cy={90} r={7} fill={NAVY} />
        <circle cx={128} cy={90} r={7} fill={NAVY} />
      </motion.g>

      {/* Nose */}
      <ellipse cx={110} cy={100} rx={5} ry={3.5} fill={PINK} />

      {/* Mouth */}
      <path
        d="M100,108 Q110,115 120,108"
        stroke={NAVY}
        strokeWidth={2.5}
        fill="none"
        strokeLinecap="round"
      />
    </motion.svg>
  );
}
