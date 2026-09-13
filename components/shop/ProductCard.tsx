import Link from "next/link";
import { cn } from "@/lib/utils";
import { COLOR_WASH_GRADIENT } from "@/lib/colorMaps";

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
      className="card-lift group flex flex-col overflow-hidden rounded-[1.75rem] border-2 border-brand-navy/10 bg-white shadow-[0_6px_20px_-8px_rgba(37,50,75,0.12)]"
    >
      <div
        className={cn(
          "flex h-36 items-center justify-center text-5xl transition-transform duration-300 group-hover:scale-105",
          COLOR_WASH_GRADIENT[product.color],
        )}
        aria-hidden
      >
        <span className="inline-block transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
          {product.emoji}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex flex-wrap gap-1">
          {product.categories.slice(0, 2).map((cat) => (
            <span
              key={cat}
              className="rounded-full bg-brand-navy/5 px-2 py-0.5 font-button text-xs font-semibold text-brand-navy-muted"
            >
              {cat}
            </span>
          ))}
        </div>
        <h3 className="font-heading text-lg font-semibold text-brand-navy transition-colors group-hover:text-brand-pink-ink">
          {product.title}
        </h3>
        <p className="font-body text-sm text-brand-navy/70">{product.description}</p>
        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="font-heading text-lg font-semibold text-brand-navy">
            ${product.price}
          </span>
          <span className="btn-soft rounded-full bg-brand-pink-ink px-4 py-1.5 text-sm font-semibold text-white">
            View
          </span>
        </div>
      </div>
    </Link>
  );
}
