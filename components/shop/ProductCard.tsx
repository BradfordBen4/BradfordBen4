import Link from "next/link";
import { cn } from "@/lib/utils";

const COLOR_BG: Record<string, string> = {
  pink: "bg-brand-pink/20",
  yellow: "bg-brand-yellow/25",
  blue: "bg-brand-blue/20",
  green: "bg-brand-green/25",
};

export type ProductCardData = {
  slug: string;
  title: string;
  description: string;
  price: number;
  categories: readonly string[];
  emoji: string;
  color: "pink" | "yellow" | "blue" | "green";
};

export default function ProductCard({ product }: { product: ProductCardData }) {
  return (
    <Link
      href={`/shop/${product.slug}`}
      className="card-lift group flex flex-col overflow-hidden rounded-3xl border-2 border-brand-navy/10 bg-white"
    >
      <div
        className={cn(
          "flex h-36 items-center justify-center text-5xl",
          COLOR_BG[product.color],
        )}
        aria-hidden
      >
        {product.emoji}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex flex-wrap gap-1">
          {product.categories.slice(0, 2).map((cat) => (
            <span
              key={cat}
              className="rounded-full bg-brand-navy/5 px-2 py-0.5 font-button text-xs font-semibold text-brand-navy/60"
            >
              {cat}
            </span>
          ))}
        </div>
        <h3 className="font-heading text-lg font-semibold text-brand-navy group-hover:text-brand-pink">
          {product.title}
        </h3>
        <p className="font-body text-sm text-brand-navy/70">{product.description}</p>
        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="font-heading text-lg font-semibold text-brand-navy">
            ${product.price}
          </span>
          <span className="btn-soft rounded-full bg-brand-pink px-4 py-1.5 text-sm font-semibold text-white">
            View
          </span>
        </div>
      </div>
    </Link>
  );
}
