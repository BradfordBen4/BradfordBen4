export const SITE_NAME = "Little Learners Studio";
export const SITE_TAGLINE = "Adventures in learning with Bella the Brave Bunny";

export const BRAND_COLORS = {
  pink: "#FF5D8F",
  yellow: "#FFD84D",
  blue: "#6BCBFF",
  green: "#A8D5BA",
  cream: "#FFF8EE",
  navy: "#25324B",
} as const;

export type AdventureLocation = {
  slug: string;
  name: string;
  description: string;
  href: string;
  color: keyof typeof BRAND_COLORS;
  emoji: string;
};

export const ADVENTURE_MAP: AdventureLocation[] = [
  {
    slug: "reading-tree",
    name: "Reading Tree",
    description: "Cozy up in the branches with Bella's favorite storybooks.",
    href: "/adventure/reading-tree",
    color: "green",
    emoji: "🌳",
  },
  {
    slug: "rainbow-river",
    name: "Rainbow River",
    description: "Splash through math, phonics, and colorful learning games.",
    href: "/adventure/rainbow-river",
    color: "blue",
    emoji: "🌈",
  },
  {
    slug: "craft-cottage",
    name: "Craft Cottage",
    description: "Fine motor fun with crafts, coloring pages, and cutting practice.",
    href: "/adventure/craft-cottage",
    color: "pink",
    emoji: "✂️",
  },
  {
    slug: "teacher-library",
    name: "Teacher Library",
    description: "Lesson plans, printables, and classroom-ready resources.",
    href: "/adventure/teacher-library",
    color: "navy",
    emoji: "📚",
  },
  {
    slug: "parent-corner",
    name: "Parent Corner",
    description: "Weekend activities and tools to support learning at home.",
    href: "/adventure/parent-corner",
    color: "yellow",
    emoji: "🏡",
  },
  {
    slug: "star-meadow",
    name: "Star Meadow",
    description: "Track progress and collect stars on the Learning Passport.",
    href: "/adventure/star-meadow",
    color: "pink",
    emoji: "⭐",
  },
];

export const PRODUCT_CATEGORIES = [
  "Preschool",
  "Kindergarten",
  "Grade 1",
  "Grade 2",
  "Daycare",
  "Homeschool",
  "Fine Motor",
  "Phonics",
  "Math",
] as const;

export type ProductCategory = (typeof PRODUCT_CATEGORIES)[number];

export type MembershipPlan = {
  id: "basic" | "plus" | "school";
  name: string;
  price: number;
  interval: "month";
  description: string;
  features: string[];
  color: keyof typeof BRAND_COLORS;
  highlighted?: boolean;
};

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: "basic",
    name: "Basic",
    price: 15,
    interval: "month",
    description: "Perfect for families just starting their learning adventure.",
    features: [
      "Weekly worksheets",
      "Bella story episodes",
      "Printable coloring pages",
      "Reading tracker",
    ],
    color: "blue",
  },
  {
    id: "plus",
    name: "Plus",
    price: 29,
    interval: "month",
    description: "For parents and tutors who want the full learning toolkit.",
    features: [
      "Everything in Basic",
      "Full curriculum library",
      "Canva-editable templates",
      "Bella Learning Passport rewards",
    ],
    color: "pink",
    highlighted: true,
  },
  {
    id: "school",
    name: "School",
    price: 99,
    interval: "month",
    description: "Built for classrooms, daycares, and homeschool co-ops.",
    features: [
      "Everything in Plus",
      "Multi-classroom management",
      "Lesson plan library",
      "Priority support",
    ],
    color: "navy",
  },
];

export const MAIN_NAV = [
  { label: "Adventure Map", href: "/adventure" },
  { label: "Shop", href: "/shop" },
  { label: "Story Hub", href: "/stories" },
  { label: "Membership", href: "/membership" },
] as const;
