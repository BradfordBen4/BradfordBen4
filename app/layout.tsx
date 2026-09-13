import type { Metadata } from "next";
import { Fredoka, Nunito, Quicksand } from "next/font/google";
import { MotionConfig } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const siteDescription =
  "Beautiful educational resources for parents, teachers, tutors, homeschoolers, and daycare owners — hosted by Bella the Brave Bunny.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Little Learners Studio | Bella the Brave Bunny's Learning Adventures",
    template: "%s | Little Learners Studio",
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    siteName: "Little Learners Studio",
    title: "Little Learners Studio | Bella the Brave Bunny's Learning Adventures",
    description: siteDescription,
    // TODO: add images once a real OG asset exists — see ASSETS_REQUIRED.md.
  },
  twitter: {
    card: "summary_large_image",
    title: "Little Learners Studio | Bella the Brave Bunny's Learning Adventures",
    description: siteDescription,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${nunito.variable} ${quicksand.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-cream text-brand-navy">
        {/* Framer Motion animations start from opacity:0 in the server-rendered
            HTML (see lib/animations.ts). If JavaScript never loads, that
            content would stay invisible forever, so force it visible when
            scripting is disabled. */}
        <noscript>
          <style>{`[style*="opacity:0"], [style*="opacity: 0"] { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
        <MotionConfig reducedMotion="user">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </MotionConfig>
      </body>
    </html>
  );
}
