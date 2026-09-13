import type { ProductCategory } from "@/lib/constants";

export type MockProduct = {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  price: number;
  categories: ProductCategory[];
  emoji: string;
  color: "pink" | "yellow" | "blue" | "green";
};

export const PRODUCTS: MockProduct[] = [
  {
    id: "p1",
    slug: "alphabet-tracing-pack",
    title: "Alphabet Tracing Pack",
    description: "26 letter tracing sheets with Bella cheering you on.",
    longDescription:
      "A complete set of uppercase and lowercase tracing sheets for every letter of the alphabet, each featuring Bella the Brave Bunny to keep little learners motivated.",
    features: ["26 printable pages", "Uppercase & lowercase", "Dry-erase friendly"],
    price: 6,
    categories: ["Preschool", "Phonics"],
    emoji: "🔤",
    color: "pink",
  },
  {
    id: "p2",
    slug: "counting-with-bella",
    title: "Counting with Bella",
    description: "A hands-on number sense workbook for ages 4-6.",
    longDescription:
      "Build number sense from 1 to 20 with counting mats, ten-frames, and Bella-themed number stories designed for kindergarten readiness.",
    features: ["24 pages", "Numbers 1-20", "Ten-frame practice"],
    price: 8,
    categories: ["Kindergarten", "Math"],
    emoji: "🔢",
    color: "blue",
  },
  {
    id: "p3",
    slug: "spring-fine-motor-cards",
    title: "Spring Fine Motor Cards",
    description: "Scissor practice and lacing cards for little hands.",
    longDescription:
      "Strengthen fine motor skills with spring-themed cutting strips, lacing cards, and pincer-grip activities perfect for preschool and daycare centers.",
    features: ["20 activity cards", "Scissor practice", "Lacing templates"],
    price: 5,
    categories: ["Fine Motor", "Daycare"],
    emoji: "✂️",
    color: "green",
  },
  {
    id: "p4",
    slug: "grade-2-word-problems",
    title: "Grade 2 Word Problems",
    description: "Story-based math word problems aligned to Grade 2.",
    longDescription:
      "30 story-based word problems covering addition, subtraction, and early multiplication, aligned to Grade 2 math standards.",
    features: ["30 word problems", "Answer key included", "Grade 2 aligned"],
    price: 9,
    categories: ["Grade 2", "Math"],
    emoji: "📐",
    color: "yellow",
  },
  {
    id: "p5",
    slug: "phonics-blending-bundle",
    title: "Phonics Blending Bundle",
    description: "CVC word blending practice with picture support.",
    longDescription:
      "A phonics-first bundle of CVC word blending mats, sound-sorting activities, and picture-supported readers for early readers.",
    features: ["18 pages", "CVC word focus", "Picture-supported"],
    price: 7,
    categories: ["Kindergarten", "Phonics", "Homeschool"],
    emoji: "📖",
    color: "pink",
  },
  {
    id: "p6",
    slug: "daycare-morning-circle-cards",
    title: "Daycare Morning Circle Cards",
    description: "Songs, greetings, and routines for circle time.",
    longDescription:
      "A full set of morning circle time cards with songs, greetings, weather charts, and calendar routines for daycare classrooms.",
    features: ["15 circle-time cards", "Weather chart", "Calendar routine"],
    price: 6,
    categories: ["Daycare", "Preschool"],
    emoji: "🌞",
    color: "yellow",
  },
  {
    id: "p7",
    slug: "homeschool-weekly-planner",
    title: "Homeschool Weekly Planner",
    description: "A printable planner to organize your homeschool week.",
    longDescription:
      "Plan every subject, field trip, and read-aloud with this Bella-themed weekly homeschool planner, designed for co-ops and solo families alike.",
    features: ["Editable PDF", "Weekly & monthly views", "Subject trackers"],
    price: 10,
    categories: ["Homeschool"],
    emoji: "🗓️",
    color: "blue",
  },
  {
    id: "p8",
    slug: "grade-1-sight-words",
    title: "Grade 1 Sight Words",
    description: "Practice pages for the 100 most common sight words.",
    longDescription:
      "Trace, read, and write your way through the 100 most common Grade 1 sight words with fun Bella-illustrated practice pages.",
    features: ["100 sight words", "Trace & write format", "Progress tracker"],
    price: 7,
    categories: ["Grade 1", "Phonics"],
    emoji: "📝",
    color: "green",
  },
];

export const FEATURED_PRODUCTS = PRODUCTS.slice(0, 4);

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((product) => product.slug === slug);
}
