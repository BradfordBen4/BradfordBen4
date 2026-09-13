import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Sparkles } from "lucide-react";
import BellaMascot, { type BellaPose } from "@/components/bella/BellaMascot";
import Button from "@/components/ui/Button";
import { ADVENTURE_MAP } from "@/lib/constants";

const LOCATION_DETAILS: Record<
  string,
  { bullets: string[]; cta: { label: string; href: string }; pose: BellaPose }
> = {
  "reading-tree": {
    bullets: [
      "Story time with Bella every week",
      "New chapter episodes added monthly",
      "Cozy read-aloud printables",
    ],
    cta: { label: "Browse the Story Hub", href: "/stories" },
    pose: "idle",
  },
  "rainbow-river": {
    bullets: [
      "Math games and number lines",
      "Phonics and letter sounds practice",
      "Colorful printable worksheets",
    ],
    cta: { label: "Shop Math & Phonics", href: "/shop" },
    pose: "bounce",
  },
  "craft-cottage": {
    bullets: [
      "Scissor practice and lacing cards",
      "Coloring pages to print at home",
      "Fine motor strengthening crafts",
    ],
    cta: { label: "Shop Fine Motor Activities", href: "/shop" },
    pose: "wave",
  },
  "teacher-library": {
    bullets: [
      "Lesson plans organized by grade level",
      "Classroom management printables",
      "Curriculum-aligned worksheets",
    ],
    cta: { label: "Go to Teacher Dashboard", href: "/dashboard/teacher" },
    pose: "idle",
  },
  "parent-corner": {
    bullets: [
      "Weekend activity ideas for families",
      "A reading tracker to celebrate books",
      "Bella rewards for great learning habits",
    ],
    cta: { label: "Go to Parent Dashboard", href: "/dashboard/parent" },
    pose: "bounce",
  },
  "star-meadow": {
    bullets: [
      "Track stars and badges as you learn",
      "Collect Bella stickers along the way",
      "Celebrate every milestone",
    ],
    cta: { label: "View Learning Passport", href: "/dashboard/passport" },
    pose: "celebrate",
  },
};

const COLOR_BG: Record<string, string> = {
  pink: "bg-brand-pink/10",
  yellow: "bg-brand-yellow/15",
  blue: "bg-brand-blue/10",
  green: "bg-brand-green/15",
  navy: "bg-brand-navy/5",
  cream: "bg-brand-cream",
};

function getLocation(slug: string) {
  return ADVENTURE_MAP.find((l) => l.slug === slug);
}

export function generateStaticParams() {
  return ADVENTURE_MAP.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return {};
  return {
    title: location.name,
    description: location.description,
  };
}

export default async function AdventureLocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();

  const details = LOCATION_DETAILS[location.slug];

  return (
    <div>
      <section className={COLOR_BG[location.color]}>
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-4 py-16 text-center sm:px-6">
          <span className="text-6xl" aria-hidden>
            {location.emoji}
          </span>
          <h1 className="font-heading text-4xl font-semibold text-brand-navy sm:text-5xl">
            {location.name}
          </h1>
          <p className="max-w-xl font-body text-lg text-brand-navy/70">
            {location.description}
          </p>
        </div>
      </section>

      <section className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-4 py-16 text-center sm:px-6">
        <BellaMascot pose={details.pose} size={180} />
        <ul className="flex flex-col gap-3">
          {details.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex items-center gap-2 font-body text-brand-navy/80"
            >
              <Sparkles size={18} className="shrink-0 text-brand-pink" />
              {bullet}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap justify-center gap-3">
          <Button href={details.cta.href} variant="pink" size="lg">
            {details.cta.label}
          </Button>
          <Button href="/adventure" variant="outline" size="lg">
            Back to the Map
          </Button>
        </div>
      </section>
    </div>
  );
}
