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
    <div className="flex flex-col gap-4 rounded-3xl border-2 border-brand-navy/10 bg-white p-6">
      <div className="flex items-center gap-2">
        <Icon size={20} className="text-brand-pink" />
        <h2 className="font-heading text-lg font-semibold text-brand-navy">{title}</h2>
      </div>
      {children}
    </div>
  );
}
