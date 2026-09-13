"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const TABS = [
  { label: "Overview", href: "/dashboard" },
  { label: "Teacher", href: "/dashboard/teacher" },
  { label: "Parent", href: "/dashboard/parent" },
  { label: "Passport", href: "/dashboard/passport" },
];

export default function DashboardTabs() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap justify-center gap-2">
      {TABS.map((tab) => (
        <Link
          key={tab.href}
          href={tab.href}
          aria-current={pathname === tab.href ? "page" : undefined}
          className={cn(
            "btn-soft rounded-full px-4 py-2 text-sm font-semibold",
            pathname === tab.href
              ? "bg-brand-navy text-white"
              : "bg-white text-brand-navy/70 border border-brand-navy/10",
          )}
        >
          {tab.label}
        </Link>
      ))}
    </nav>
  );
}
