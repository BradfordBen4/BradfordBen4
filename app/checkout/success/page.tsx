import type { Metadata } from "next";
import BellaMascot from "@/components/bella/BellaMascot";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "You're All Set!",
  robots: { index: false, follow: false },
};

export default function CheckoutSuccessPage() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center gap-6 px-4 py-24 text-center">
      <BellaMascot pose="celebrate" size={200} />
      <h1 className="font-heading text-3xl font-semibold text-brand-navy sm:text-4xl">
        Yay! You&rsquo;re All Set
      </h1>
      <p className="font-body text-brand-navy/70">
        Thank you for your purchase! A confirmation and your downloads will
        be available in your dashboard shortly.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Button href="/shop" variant="pink" size="lg">
          Keep Shopping
        </Button>
        <Button href="/" variant="outline" size="lg">
          Back Home
        </Button>
      </div>
    </div>
  );
}
