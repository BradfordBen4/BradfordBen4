"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import ProductCard from "@/components/shop/ProductCard";
import { PRODUCT_CATEGORIES } from "@/lib/constants";
import { PRODUCTS } from "@/lib/mock/products";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

export default function ShopBrowser() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesQuery = product.title
        .toLowerCase()
        .includes(query.trim().toLowerCase());
      const matchesCategory = category
        ? product.categories.includes(category as (typeof PRODUCT_CATEGORIES)[number])
        : true;
      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="relative w-full sm:max-w-sm">
          <label htmlFor="shop-search" className="sr-only">
            Search resources
          </label>
          <Search
            size={18}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-brand-navy-muted"
          />
          <input
            id="shop-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search resources..."
            className="w-full rounded-full border-2 border-brand-navy/10 bg-white py-3 pl-11 pr-4 font-body text-sm outline-none focus:border-brand-pink-ink"
          />
        </div>

        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          <button
            type="button"
            onClick={() => setCategory(null)}
            aria-pressed={category === null}
            className={cn(
              "btn-soft rounded-full px-4 py-2 text-sm font-semibold",
              category === null
                ? "bg-brand-navy text-white"
                : "bg-white text-brand-navy/70 border border-brand-navy/10",
            )}
          >
            All
          </button>
          {PRODUCT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              aria-pressed={category === cat}
              className={cn(
                "btn-soft rounded-full px-4 py-2 text-sm font-semibold",
                category === cat
                  ? "bg-brand-pink-ink text-white"
                  : "bg-white text-brand-navy/70 border border-brand-navy/10",
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-12 text-center font-body text-brand-navy-muted">
          No resources match your search yet. Try a different keyword or category.
        </p>
      ) : (
        <motion.div
          key={`${query}-${category}`}
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {filtered.map((product) => (
            <motion.div key={product.id} variants={fadeInUp}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
