import Link from "next/link";
import { ADVENTURE_MAP, MAIN_NAV, SITE_NAME } from "@/lib/constants";
import EmailCaptureForm from "@/components/marketing/EmailCaptureForm";

export default function Footer() {
  return (
    <footer className="border-t-4 border-brand-navy/5 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl" aria-hidden>
              🐰
            </span>
            <span className="font-heading text-lg font-semibold text-brand-navy">
              {SITE_NAME}
            </span>
          </Link>
          <p className="mt-3 max-w-xs font-body text-sm text-brand-navy/70">
            Premium storybook-style learning resources for parents, teachers, and
            little adventurers everywhere.
          </p>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-brand-navy-muted">
            Explore
          </h3>
          <ul className="mt-3 space-y-2">
            {MAIN_NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-body text-sm text-brand-navy/80 hover:text-brand-pink-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/free"
                className="font-body text-sm text-brand-navy/80 hover:text-brand-pink-ink"
              >
                Free Printables
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-brand-navy-muted">
            Bella&rsquo;s World
          </h3>
          <ul className="mt-3 space-y-2">
            {ADVENTURE_MAP.slice(0, 4).map((loc) => (
              <li key={loc.slug}>
                <Link
                  href={loc.href}
                  className="font-body text-sm text-brand-navy/80 hover:text-brand-pink-ink"
                >
                  {loc.emoji} {loc.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-brand-navy-muted">
            Stay Curious
          </h3>
          <p className="mt-3 font-body text-sm text-brand-navy/70">
            Get free printables and Bella story updates in your inbox.
          </p>
          <div className="mt-3">
            <EmailCaptureForm source="footer" ctaLabel="Join" />
          </div>
        </div>
      </div>

      <div className="border-t border-brand-navy/10 py-4 text-center font-body text-xs text-brand-navy-muted">
        © {new Date().getFullYear()} {SITE_NAME}™. All rights reserved.
      </div>
    </footer>
  );
}
