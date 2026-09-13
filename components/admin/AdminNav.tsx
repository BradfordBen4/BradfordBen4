"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, ShoppingBag, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

const TABS = [
  { label: "Overview", href: "/admin", icon: LayoutDashboard },
  { label: "Products", href: "/admin/products", icon: ShoppingBag },
  { label: "Stories", href: "/admin/stories", icon: BookOpen },
];

export default function AdminNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap gap-2 border-b border-brand-navy/10 pb-4">
      {TABS.map((tab) => {
        const active = tab.href === "/admin" ? pathname === tab.href : pathname?.startsWith(tab.href);
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={cn(
              "flex items-center gap-2 rounded-full px-4 py-2 font-body text-sm font-semibold",
              active ? "bg-brand-navy text-white" : "bg-white text-brand-navy/70 border border-brand-navy/10",
            )}
          >
            <tab.icon size={16} />
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
