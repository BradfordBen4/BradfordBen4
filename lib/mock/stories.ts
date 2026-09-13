export type MockStory = {
  slug: string;
  title: string;
  episodeNumber: number;
  emoji: string;
  color: "pink" | "yellow" | "blue" | "green";
  summary: string;
  pages: string[];
  coloringPageUrl: string;
  parentActivityUrl: string;
  teacherWorksheetUrl: string;
  nextEpisodeSlug: string | null;
};

export const STORIES: MockStory[] = [
  {
    slug: "bella-and-the-missing-acorns",
    title: "Bella and the Missing Acorns",
    episodeNumber: 1,
    emoji: "🌰",
    color: "green",
    summary: "Bella searches the Reading Tree for a squirrel's missing acorns.",
    pages: [
      "One crisp morning, Bella hopped up to the Reading Tree and found her friend Sammy Squirrel in a terrible tizzy. “My acorns! My winter acorns are all gone!” he cried.",
      "Bella tucked her ears back and thought hard. “Don’t worry, Sammy. Every good story has clues — and every good problem has a solution. Let’s look together!”",
      "They followed a trail of tiny paw prints past the berry bushes and found the acorns tucked safely in a hollow log, gathered by a family of baby chipmunks getting ready for winter too. Everyone shared the harvest and Bella hopped home with a happy heart.",
    ],
    coloringPageUrl: "#",
    parentActivityUrl: "#",
    teacherWorksheetUrl: "#",
    nextEpisodeSlug: "bella-and-the-rainbow-bridge",
  },
  {
    slug: "bella-and-the-rainbow-bridge",
    title: "Bella and the Rainbow Bridge",
    episodeNumber: 2,
    emoji: "🌈",
    color: "blue",
    summary: "A washed-out bridge sends Bella on a counting adventure.",
    pages: [
      "After a summer rainstorm, Bella arrived at Rainbow River to find the little wooden bridge washed away! On the other side, her friends were waiting for story time.",
      "“We need stepping stones,” said Bella, “but we’ll need exactly the right number, or someone might get their paws wet!” She counted the gap, one hop at a time: one, two, three, four, five stones.",
      "With five stones carefully placed, Bella crossed the river without a single splash. “Math helps us build brave new paths,” she said with a grin, and everyone hopped across together.",
    ],
    coloringPageUrl: "#",
    parentActivityUrl: "#",
    teacherWorksheetUrl: "#",
    nextEpisodeSlug: "bella-and-the-star-meadow-picnic",
  },
  {
    slug: "bella-and-the-star-meadow-picnic",
    title: "Bella and the Star Meadow Picnic",
    episodeNumber: 3,
    emoji: "⭐",
    color: "yellow",
    summary: "Bella plans a picnic and learns that sharing makes every star shine brighter.",
    pages: [
      "It was almost time for the Star Meadow Picnic, and Bella had one job: make sure every friend had a fair share of Sunflower Sandwiches.",
      "She laid out a blanket and counted her friends, then counted the sandwiches. There were exactly enough — as long as everyone remembered to share the blueberries too!",
      "Under the twinkling evening stars, Bella and her friends toasted their cups of berry juice. “The best adventures,” Bella said, “are always better shared.”",
    ],
    coloringPageUrl: "#",
    parentActivityUrl: "#",
    teacherWorksheetUrl: "#",
    nextEpisodeSlug: null,
  },
];

export function getStoryBySlug(slug: string) {
  return STORIES.find((story) => story.slug === slug);
}
