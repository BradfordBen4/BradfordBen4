import type { Metadata } from "next";
import BellaMascot from "@/components/bella/BellaMascot";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Checkout Canceled",
  robots: { index: false, follow: false },
};

export default function CheckoutCancelPage() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center gap-6 px-4 py-24 text-center">
      <BellaMascot pose="idle" size={200} />
      <h1 className="font-heading text-3xl font-semibold text-brand-navy sm:text-4xl">
        No Worries!
      </h1>
      <p className="font-body text-brand-navy/70">
        Your checkout was canceled and you have not been charged. Your cart
        is still waiting whenever you&rsquo;re ready.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Button href="/shop" variant="pink" size="lg">
          Return to Shop
        </Button>
        <Button href="/" variant="outline" size="lg">
          Back Home
        </Button>
      </div>
    </div>
  );
}
