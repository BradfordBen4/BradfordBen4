export type Badge = {
  id: string;
  label: string;
  emoji: string;
  earned: boolean;
};

export const MOCK_PASSPORT = {
  childName: "Little Learner",
  stars: 42,
  badges: [
    { id: "reader", label: "Bookworm", emoji: "📚", earned: true },
    { id: "mathlete", label: "Mathlete", emoji: "🔢", earned: true },
    { id: "helper", label: "Kind Helper", emoji: "💛", earned: true },
    { id: "artist", label: "Craft Star", emoji: "🎨", earned: false },
    { id: "explorer", label: "Map Explorer", emoji: "🗺️", earned: false },
    { id: "scientist", label: "Curious Mind", emoji: "🔬", earned: false },
  ] satisfies Badge[],
  stickers: ["🌟", "🦋", "🌈", "🌻", "🐰"],
};
