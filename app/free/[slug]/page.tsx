import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import BellaMascot from "@/components/bella/BellaMascot";
import ProductCard from "@/components/shop/ProductCard";
import Button from "@/components/ui/Button";
import EmailCaptureForm from "@/components/marketing/EmailCaptureForm";
import { SEO_PAGES, getSeoPageBySlug } from "@/lib/seo-pages";
import { PRODUCTS } from "@/lib/mock/products";

export function generateStaticParams() {
  return SEO_PAGES.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoPageBySlug(slug);
  if (!page) return {};
  return { title: page.title, description: page.metaDescription };
}

export default async function SeoLandingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getSeoPageBySlug(slug);
  if (!page) notFound();

  const relatedProducts = PRODUCTS.filter((product) =>
    product.categories.includes(page.category),
  ).slice(0, 4);

  return (
    <div>
      <section className="bg-brand-blue/10">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-16 text-center sm:px-6">
          <BellaMascot pose="wave" size={140} />
          <h1 className="font-heading text-3xl font-semibold text-brand-navy sm:text-4xl">
            {page.title}
          </h1>
          <p className="max-w-xl font-body text-lg text-brand-navy/70">{page.heroSubtitle}</p>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6">
        <div className="rounded-3xl border-2 border-brand-yellow bg-white p-8">
          <span className="text-5xl" aria-hidden>
            {page.freebieEmoji}
          </span>
          <h2 className="mt-3 font-heading text-2xl font-semibold text-brand-navy">
            {page.freebieTitle}
          </h2>
          <p className="mt-2 font-body text-brand-navy/70">
            Pop in your email and we&rsquo;ll send this free printable straight to your
            inbox.
          </p>
          <div className="mt-6">
            <EmailCaptureForm source={`seo-${page.slug}`} />
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-center font-heading text-2xl font-semibold text-brand-navy">
              Related Resources
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Button href="/shop" variant="navy" size="md">
                Shop All Resources
              </Button>
            </div>
          </div>
        </section>
      )}

      <p className="py-8 text-center font-body text-sm text-brand-navy-muted">
        Looking for more free printables? <Link href="/free" className="underline">Browse them all</Link>.
      </p>
    </div>
  );
}
