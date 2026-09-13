// Shared category-color lookup tables. Consolidated here because the same
// { pink, yellow, blue, green, ... } shape was being redefined locally in
// half a dozen components at slightly different opacity tiers.

export const COLOR_WASH_SOFT: Record<string, string> = {
  pink: "bg-brand-pink/10",
  yellow: "bg-brand-yellow/15",
  blue: "bg-brand-blue/10",
  green: "bg-brand-green/15",
  navy: "bg-brand-navy/5",
  cream: "bg-brand-cream",
};

export const COLOR_WASH_MEDIUM: Record<string, string> = {
  pink: "bg-brand-pink/15",
  yellow: "bg-brand-yellow/20",
  blue: "bg-brand-blue/15",
  green: "bg-brand-green/20",
};

export const COLOR_WASH_STRONG: Record<string, string> = {
  pink: "bg-brand-pink/20",
  yellow: "bg-brand-yellow/25",
  blue: "bg-brand-blue/20",
  green: "bg-brand-green/25",
};

export const LOCATION_CARD_CLASSES: Record<string, string> = {
  pink: "bg-brand-pink/10 border-brand-pink/30 hover:border-brand-pink-ink",
  yellow: "bg-brand-yellow/15 border-brand-yellow/40 hover:border-brand-yellow",
  blue: "bg-brand-blue/10 border-brand-blue/30 hover:border-brand-blue",
  green: "bg-brand-green/15 border-brand-green/40 hover:border-brand-green",
  navy: "bg-brand-navy/5 border-brand-navy/20 hover:border-brand-navy",
  cream: "bg-brand-cream border-brand-navy/10 hover:border-brand-navy/30",
};

export const PLAN_CARD_CLASSES: Record<string, string> = {
  pink: "border-brand-pink/40 bg-brand-pink/5",
  yellow: "border-brand-yellow/50 bg-brand-yellow/10",
  blue: "border-brand-blue/40 bg-brand-blue/5",
  green: "border-brand-green/50 bg-brand-green/10",
  navy: "border-brand-navy/30 bg-brand-navy/5",
  cream: "border-brand-navy/10 bg-brand-cream",
};
