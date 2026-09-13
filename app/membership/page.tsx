import type { Metadata } from "next";
import BellaMascot from "@/components/bella/BellaMascot";
import SectionHeading from "@/components/ui/SectionHeading";
import PlanCard from "@/components/membership/PlanCard";
import { MEMBERSHIP_PLANS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Unlock the full Bella Learning Passport with weekly worksheets, lesson plans, stories, and Canva templates.",
};

export default function MembershipPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="flex flex-col items-center gap-4">
        <BellaMascot pose="celebrate" size={140} />
        <SectionHeading
          eyebrow="Membership"
          title="Unlock the Full Learning Passport"
          subtitle="Weekly worksheets, lesson plans, Bella stories, Canva templates, and the full curriculum library."
        />
      </div>

      <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
        {MEMBERSHIP_PLANS.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>

      <p className="mt-10 text-center font-body text-sm text-brand-navy-muted">
        Cancel anytime. Prices are billed monthly in USD.
      </p>
    </div>
  );
}
