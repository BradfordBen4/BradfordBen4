import type { Product } from "@/types";

export const FEATURED_PRODUCTS: (Pick<
  Product,
  "id" | "slug" | "title" | "description" | "price" | "categories"
> & { emoji: string; color: "pink" | "yellow" | "blue" | "green" })[] = [
  {
    id: "p1",
    slug: "alphabet-tracing-pack",
    title: "Alphabet Tracing Pack",
    description: "26 letter tracing sheets with Bella cheering you on.",
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
    price: 9,
    categories: ["Grade 2", "Math"],
    emoji: "📐",
    color: "yellow",
  },
];
