"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { MAIN_NAV, SITE_NAME } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-4 border-brand-navy/5 bg-brand-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="text-2xl" aria-hidden>
            🐰
          </span>
          <span className="font-heading text-lg font-semibold text-brand-navy sm:text-xl">
            {SITE_NAME}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {MAIN_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-button text-sm font-semibold text-brand-navy/80 transition-colors hover:text-brand-pink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button href="/login" variant="outline" size="sm">
            Log In
          </Button>
          <Button href="/membership" variant="pink" size="sm">
            Join the Adventure
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full text-brand-navy md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-brand-navy/10 bg-brand-cream px-4 pb-4 md:hidden">
          {MAIN_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 font-button text-base font-semibold text-brand-navy hover:bg-white"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-2 flex flex-col gap-2">
            <Button href="/login" variant="outline" size="sm">
              Log In
            </Button>
            <Button href="/membership" variant="pink" size="sm">
              Join the Adventure
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
