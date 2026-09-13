import type { LucideIcon } from "lucide-react";

export default function DashboardCard({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
}) {
  return (
    <div className="card-lift flex flex-col gap-4 rounded-[1.75rem] border-2 border-brand-navy/10 bg-white p-6 shadow-[0_6px_20px_-10px_rgba(37,50,75,0.12)]">
      <div className="flex items-center gap-2.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-pink-ink/10">
          <Icon size={18} className="text-brand-pink-ink" />
        </span>
        <h2 className="font-heading text-lg font-semibold text-brand-navy">{title}</h2>
      </div>
      {children}
    </div>
  );
}
