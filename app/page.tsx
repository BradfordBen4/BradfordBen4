"use client";

import { useState } from "react";
import BellaMascot, { type BellaPose } from "@/components/bella/BellaMascot";
import FloatingButterflies from "@/components/bella/FloatingButterflies";
import Button from "@/components/ui/Button";

const POSES: BellaPose[] = ["idle", "wave", "bounce", "celebrate"];

export default function Home() {
  const [pose, setPose] = useState<BellaPose>("wave");

  return (
    <div className="relative overflow-hidden">
      <FloatingButterflies />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 py-24 text-center">
        <BellaMascot pose={pose} size={220} />
        <h1 className="font-heading text-4xl font-semibold text-brand-navy sm:text-5xl">
          Little Learners Studio™
        </h1>
        <p className="font-body text-lg text-brand-navy/70">
          Bella the Brave Bunny&rsquo;s learning adventures are on their way.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {POSES.map((p) => (
            <Button
              key={p}
              size="sm"
              variant={p === pose ? "pink" : "outline"}
              onClick={() => setPose(p)}
            >
              {p}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
