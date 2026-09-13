import { CheckCircle2 } from "lucide-react";
import type { MembershipPlan } from "@/lib/constants";
import SubscribeButton from "@/components/membership/SubscribeButton";
import { cn } from "@/lib/utils";

const COLOR_CLASSES: Record<string, string> = {
  pink: "border-brand-pink/40 bg-brand-pink/5",
  yellow: "border-brand-yellow/50 bg-brand-yellow/10",
  blue: "border-brand-blue/40 bg-brand-blue/5",
  green: "border-brand-green/50 bg-brand-green/10",
  navy: "border-brand-navy/30 bg-brand-navy/5",
  cream: "border-brand-navy/10 bg-brand-cream",
};

export default function PlanCard({ plan }: { plan: MembershipPlan }) {
  return (
    <div
      className={cn(
        "relative flex flex-col gap-4 rounded-3xl border-2 p-8",
        COLOR_CLASSES[plan.color],
        plan.highlighted && "shadow-lg md:-translate-y-3",
      )}
    >
      {plan.highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand-navy px-4 py-1 font-button text-xs font-semibold text-white">
          Most Popular
        </span>
      )}
      <h3 className="font-heading text-2xl font-semibold text-brand-navy">{plan.name}</h3>
      <p className="font-body text-sm text-brand-navy/70">{plan.description}</p>
      <div className="flex items-baseline gap-1">
        <span className="font-heading text-4xl font-semibold text-brand-navy">
          ${plan.price}
        </span>
        <span className="font-body text-brand-navy/60">/{plan.interval}</span>
      </div>
      <ul className="flex flex-col gap-2">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-2 font-body text-sm text-brand-navy/75"
          >
            <CheckCircle2 size={16} className="shrink-0 text-brand-green" />
            {feature}
          </li>
        ))}
      </ul>
      <SubscribeButton planId={plan.id} highlighted={plan.highlighted} />
    </div>
  );
}
