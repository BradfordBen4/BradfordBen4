import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import BuyNowButton from "@/components/shop/BuyNowButton";
import Button from "@/components/ui/Button";
import { PRODUCTS, getProductBySlug } from "@/lib/mock/products";
import { COLOR_WASH_MEDIUM } from "@/lib/colorMaps";

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return { title: product.title, description: product.description };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div
          className={`flex h-72 items-center justify-center rounded-3xl text-8xl ${COLOR_WASH_MEDIUM[product.color]}`}
          aria-hidden
        >
          {product.emoji}
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            {product.categories.map((cat) => (
              <span
                key={cat}
                className="rounded-full bg-brand-navy/5 px-3 py-1 font-button text-xs font-semibold text-brand-navy-muted"
              >
                {cat}
              </span>
            ))}
          </div>
          <h1 className="font-heading text-3xl font-semibold text-brand-navy sm:text-4xl">
            {product.title}
          </h1>
          <p className="font-body text-brand-navy/70">{product.longDescription}</p>

          <ul className="flex flex-col gap-2">
            {product.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 font-body text-sm text-brand-navy/75"
              >
                <CheckCircle2 size={16} className="shrink-0 text-brand-green" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-2 flex items-center gap-4">
            <span className="font-heading text-3xl font-semibold text-brand-navy">
              ${product.price}
            </span>
            <BuyNowButton slug={product.slug} />
          </div>
          <Button href="/shop" variant="outline" size="sm" className="w-fit">
            &larr; Back to Shop
          </Button>
        </div>
      </div>
    </div>
  );
}
