import type { ProductCategory } from "@/lib/constants";

export type SeoPage = {
  slug: string;
  title: string;
  metaDescription: string;
  heroSubtitle: string;
  freebieTitle: string;
  freebieEmoji: string;
  category: ProductCategory;
};

export const SEO_PAGES: SeoPage[] = [
  {
    slug: "preschool-fine-motor-activities",
    title: "Preschool Fine Motor Activities",
    metaDescription:
      "Free preschool fine motor activities plus printable cutting, lacing, and pincer-grip practice from Little Learners Studio.",
    heroSubtitle:
      "Strengthen little hands with scissor practice, lacing cards, and pincer-grip games Bella-approved for preschoolers.",
    freebieTitle: "5 Free Fine Motor Cards",
    freebieEmoji: "✂️",
    category: "Fine Motor",
  },
  {
    slug: "daycare-activities",
    title: "Daycare Activities",
    metaDescription:
      "Free daycare activities and circle-time printables to keep your classroom engaged, from Little Learners Studio.",
    heroSubtitle:
      "Morning circle songs, sensory bins, and easy group activities that make daycare days brighter.",
    freebieTitle: "Free Circle Time Starter Pack",
    freebieEmoji: "🌞",
    category: "Daycare",
  },
  {
    slug: "name-tracing",
    title: "Name Tracing Printables",
    metaDescription:
      "Free name tracing printables to help preschoolers practice handwriting with Bella the Brave Bunny.",
    heroSubtitle:
      "Personalized-style tracing practice that builds letter recognition and pencil control.",
    freebieTitle: "Free Name Tracing Template",
    freebieEmoji: "✍️",
    category: "Preschool",
  },
  {
    slug: "grade-2-worksheets",
    title: "Grade 2 Worksheets",
    metaDescription:
      "Free Grade 2 worksheets covering math, reading, and word problems from Little Learners Studio.",
    heroSubtitle:
      "Standards-aligned practice pages for Grade 2 math, reading, and word problems.",
    freebieTitle: "Free Grade 2 Sampler Pack",
    freebieEmoji: "📐",
    category: "Grade 2",
  },
  {
    slug: "alphabet-coloring-pages",
    title: "Alphabet Coloring Pages",
    metaDescription:
      "Free alphabet coloring pages featuring Bella the Brave Bunny for letter recognition and creative fun.",
    heroSubtitle:
      "Letter recognition meets creative play with Bella-themed coloring pages for every letter.",
    freebieTitle: "Free A-B-C Coloring Set",
    freebieEmoji: "🎨",
    category: "Phonics",
  },
];

export function getSeoPageBySlug(slug: string) {
  return SEO_PAGES.find((page) => page.slug === slug);
}
