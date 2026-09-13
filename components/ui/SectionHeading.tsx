import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <span className="rounded-full bg-brand-pink/10 px-4 py-1 font-button text-sm font-semibold text-brand-pink-ink">
          {eyebrow}
        </span>
      )}
      <h2 className="font-heading text-3xl font-semibold text-brand-navy sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl font-body text-lg text-brand-navy/70">{subtitle}</p>
      )}
    </div>
  );
}
