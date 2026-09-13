"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/shop/ProductCard";
import Button from "@/components/ui/Button";
import { FEATURED_PRODUCTS } from "@/lib/mock/products";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function FeaturedResources() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Fresh from the Studio"
          title="Featured Resources"
          subtitle="Hand-crafted printables and activities, ready to download in minutes."
        />

        <motion.div
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {FEATURED_PRODUCTS.map((product) => (
            <motion.div key={product.id} variants={fadeInUp}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 flex justify-center">
          <Button href="/shop" variant="navy" size="md">
            Shop All Resources
          </Button>
        </div>
      </div>
    </section>
  );
}
