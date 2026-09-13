import { CheckCircle2 } from "lucide-react";
import type { MembershipPlan } from "@/lib/constants";
import SubscribeButton from "@/components/membership/SubscribeButton";
import { cn } from "@/lib/utils";
import { PLAN_CARD_CLASSES } from "@/lib/colorMaps";

export default function PlanCard({ plan }: { plan: MembershipPlan }) {
  return (
    <div
      className={cn(
        "card-lift relative flex flex-col gap-4 rounded-[1.75rem] border-2 bg-white/40 p-8 shadow-[0_8px_24px_-10px_rgba(37,50,75,0.14)]",
        PLAN_CARD_CLASSES[plan.color],
        plan.highlighted && "shadow-[0_16px_40px_-12px_rgba(194,44,93,0.35)] md:-translate-y-3",
      )}
    >
      {plan.highlighted && (
        <>
          <span className="rainbow-divider absolute -top-[3px] left-1/2 h-1.5 w-16 -translate-x-1/2" />
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand-navy px-4 py-1 font-button text-xs font-semibold text-white shadow-md">
            Most Popular
          </span>
        </>
      )}
      <h3 className="font-heading text-2xl font-semibold text-brand-navy">{plan.name}</h3>
      <p className="font-body text-sm text-brand-navy/70">{plan.description}</p>
      <div className="flex items-baseline gap-1">
        <span className="font-heading text-4xl font-semibold text-brand-navy">
          ${plan.price}
        </span>
        <span className="font-body text-brand-navy-muted">/{plan.interval}</span>
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
