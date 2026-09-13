# Assets Required Before Launch — Little Learners Studio™

This project currently runs entirely on **code-drawn placeholders**: Bella is
a hand-coded inline SVG, every product/story "cover" is a flat color block
with an emoji, icons are the open-source `lucide-react` set, and there is no
logo file, favicon set, or social share image anywhere in the repo. None of
this blocks the app from running — everything below is a launch-readiness
gap, not a bug.

> **Heads up on wiring:** the database schema (`supabase/migrations/`)
> already has `image_url`, `file_url`, `illustration_url`,
> `coloring_page_url`, `parent_activity_url`, and `teacher_worksheet_url`
> columns ready to hold these files once uploaded via the Admin CMS
> (`/admin`) or Cloudinary. The current `ProductCard`, `StoryCard`, product
> detail, and `StoryReader` components render the emoji/color placeholder
> unconditionally — a small follow-up code change to prefer the real image
> when a URL is present will be needed alongside dropping in these assets.

All sizes below are minimums for a crisp Retina/2x display; export at 2x the
listed pixel dimensions where a file will be shown small (icons, favicons).

---

## 1. Bella Character Illustrations (all poses)

Bella is currently `components/bella/BellaMascot.tsx` — geometric shapes
(circles/ellipses/rects), not illustrated artwork. Replacing it with real
Pixar-style illustration is the single highest-impact asset for the brand.

| File name | Recommended size | Used in |
|---|---|---|
| `bella-idle.png` (+ `.svg` source) | 1600×1600, transparent bg | `/adventure` hub hero, homepage Teacher section, `SupabaseNotConfiguredNotice`, checkout cancel page |
| `bella-wave.png` (+ `.svg`) | 1600×1600, transparent bg | Homepage `Hero`, `AuthCard` (login/signup), every `/free/[slug]` SEO landing page, Craft Cottage adventure page |
| `bella-bounce.png` (+ `.svg`) | 1600×1600, transparent bg | Homepage Parent section, Rainbow River & Parent Corner adventure pages |
| `bella-celebrate.png` (+ `.svg`) | 1600×1600, transparent bg | Membership CTA banner (homepage), `/membership` page, checkout success page, dashboard welcome, Learning Passport (`PassportBook`), Star Meadow adventure page |
| `bella-blink-frame.png` *(optional)* | 1600×1600 | Only needed if blinking becomes a swapped static frame instead of an SVG animation; not required if Bella ships as a Lottie/animated asset |
| `bella-reading.png` | 1600×1600 | Story Hub covers, Reading Tree adventure page (not currently a distinct pose — new) |
| `bella-teaching.png` | 1600×1600 | Teacher Library adventure page, Teacher Dashboard header (new pose) |
| `bella-hero-full-body.png` | 3200×3200 or vector `.svg` | Large hero/marketing use where the current 4 poses are too small/simple (print, social) |
| Editable source file | Figma/Illustrator `.ai`/`.fig` | Design system source of truth for all poses above, so new poses can be produced consistently |

---

## 2. Logo

No logo file exists — Header and Footer currently render a plain 🐰 emoji
next to the text "Little Learners Studio."

| File name | Recommended size | Used in |
|---|---|---|
| `logo-horizontal.svg` (+ `.png`) | ~600×160 | `components/layout/Header.tsx`, `components/layout/Footer.tsx` |
| `logo-icon-only.svg` (+ `.png`) | 512×512, transparent bg | Favicon source, app icon, social profile picture, admin nav (optional) |
| `logo-horizontal-white.svg` (+ `.png`) | ~600×160 | Membership CTA navy banner (`MembershipCTA.tsx`), any future dark-background section |
| `logo-stacked.svg` | ~400×400 | Square placements (email signature, app icon) where the horizontal lockup doesn't fit |

---

## 3. Icons (custom branded set)

General UI icons (menu, search, chevrons, dashboard glyphs) use
`lucide-react` and don't need replacing. The **Adventure Map** locations and
**product categories** currently use raw emoji and would benefit from a
matching custom icon set for a premium feel.

| File name | Recommended size | Used in |
|---|---|---|
| `icon-reading-tree.svg` | 256×256 | `lib/constants.ts` `ADVENTURE_MAP` — replaces 🌳 in `LocationCard`, `/adventure/reading-tree` |
| `icon-rainbow-river.svg` | 256×256 | Replaces 🌈 — `/adventure/rainbow-river` |
| `icon-craft-cottage.svg` | 256×256 | Replaces ✂️ — `/adventure/craft-cottage` |
| `icon-teacher-library.svg` | 256×256 | Replaces 📚 — `/adventure/teacher-library` |
| `icon-parent-corner.svg` | 256×256 | Replaces 🏡 — `/adventure/parent-corner` |
| `icon-star-meadow.svg` | 256×256 | Replaces ⭐ — `/adventure/star-meadow` |
| `icon-category-{preschool,kindergarten,grade-1,grade-2,daycare,homeschool,fine-motor,phonics,math}.svg` (9 files) | 128×128 each | `PRODUCT_CATEGORIES` badges — `ShopBrowser` filter chips, `ProductCard` category tags |
| `icon-badge-{bookworm,mathlete,kind-helper,craft-star,map-explorer,curious-mind}.svg` (6 files) | 128×128 each | `lib/mock/passport.ts` badges — replaces 📚🔢💛🎨🗺️🔬 in `PassportBook` |

---

## 4. Product Mockups

`ProductCard.tsx` and every `/shop/[slug]` page render a flat color block +
single emoji in place of a real cover. All 8 current catalog items
(`lib/mock/products.ts`) need real artwork, plus the actual downloadable
files.

| File name | Recommended size | Used in |
|---|---|---|
| `alphabet-tracing-pack-cover.jpg` | 1000×750 (4:3) | `ProductCard`, `/shop/alphabet-tracing-pack`, homepage Featured Resources |
| `counting-with-bella-cover.jpg` | 1000×750 | Same components, `/shop/counting-with-bella` |
| `spring-fine-motor-cards-cover.jpg` | 1000×750 | `/shop/spring-fine-motor-cards` |
| `grade-2-word-problems-cover.jpg` | 1000×750 | `/shop/grade-2-word-problems` |
| `phonics-blending-bundle-cover.jpg` | 1000×750 | `/shop/phonics-blending-bundle` |
| `daycare-morning-circle-cards-cover.jpg` | 1000×750 | `/shop/daycare-morning-circle-cards` |
| `homeschool-weekly-planner-cover.jpg` | 1000×750 | `/shop/homeschool-weekly-planner` |
| `grade-1-sight-words-cover.jpg` | 1000×750 | `/shop/grade-1-sight-words` |
| `{slug}.pdf` (8 files, one per product above) | Print-ready PDF, letter size | The actual downloadable content for `products.file_url`, served after purchase |

---

## 5. Storybook Covers & Illustrations

`StoryCard.tsx` and the `StoryReader` currently show a flat color circle +
one emoji per episode. The 3 live episodes (`lib/mock/stories.ts`) each need
a cover plus one illustration per story page, and their three companion
printables are all `"#"` placeholder links today.

| File name | Recommended size | Used in |
|---|---|---|
| `bella-and-the-missing-acorns-cover.jpg` | 1200×900 | `/stories` grid (`StoryCard`), `/stories/bella-and-the-missing-acorns` header |
| `bella-and-the-missing-acorns-page-{1,2,3}.jpg` (3 files) | 1600×1200 | Per-page illustration inside `StoryReader`'s page-turn view (currently text-only) |
| `bella-and-the-rainbow-bridge-cover.jpg` + `-page-{1,2,3}.jpg` (4 files) | 1200×900 / 1600×1200 | Same, for episode 2 |
| `bella-and-the-star-meadow-picnic-cover.jpg` + `-page-{1,2,3}.jpg` (4 files) | 1200×900 / 1600×1200 | Same, for episode 3 |
| `{episode-slug}-coloring-page.pdf` (3 files) | Letter size, line art | `stories.coloring_page_url`, linked from the "Coloring Page" button on the last page of each story |
| `{episode-slug}-parent-activity.pdf` (3 files) | Letter size | `stories.parent_activity_url`, "Parent Activity" button |
| `{episode-slug}-teacher-worksheet.pdf` (3 files) | Letter size | `stories.teacher_worksheet_url`, "Teacher Worksheet" button |

---

## 6. Background Illustrations

Every section today uses a flat/gradient color wash (e.g. `bg-brand-blue/10`)
— no illustrated scenery exists yet, despite the "storybook world" brief.

| File name | Recommended size | Used in |
|---|---|---|
| `hero-background.svg` (or `.png`) | 1920×1080 | `components/home/Hero.tsx` — behind the headline/Bella |
| `adventure-map-background.svg` | 1600×1200 | `/adventure` hub and homepage `AdventureMapSection` — a literal illustrated map of Bella's world |
| `location-bg-reading-tree.jpg` | 1600×900 | `/adventure/reading-tree` hero banner |
| `location-bg-rainbow-river.jpg` | 1600×900 | `/adventure/rainbow-river` hero banner |
| `location-bg-craft-cottage.jpg` | 1600×900 | `/adventure/craft-cottage` hero banner |
| `location-bg-teacher-library.jpg` | 1600×900 | `/adventure/teacher-library` hero banner |
| `location-bg-parent-corner.jpg` | 1600×900 | `/adventure/parent-corner` hero banner |
| `location-bg-star-meadow.jpg` | 1600×900 | `/adventure/star-meadow` hero banner |
| `auth-background.svg` | 1200×1200 | `components/auth/AuthCard.tsx` — decorative pattern behind login/signup card |
| `footer-meadow-texture.svg` *(optional)* | 1920×400 | `components/layout/Footer.tsx` decorative top strip |

---

## 7. Favicons

Only the default, unbranded Next.js `favicon.ico` exists today
(`app/favicon.ico`, auto-generated by `create-next-app`).

| File name | Recommended size | Used in |
|---|---|---|
| `app/favicon.ico` | 48×48 multi-size `.ico` | Replaces the current default; browser tab icon site-wide |
| `app/icon.png` | 32×32 (Next.js App Router auto-favicon convention) | Browser tab icon (modern browsers) |
| `app/apple-icon.png` | 180×180 | iOS "Add to Home Screen" icon |
| `icon-192.png` | 192×192 | `site.webmanifest` (not yet created) — Android home screen |
| `icon-512.png` | 512×512 | `site.webmanifest` — Android splash/install icon, PWA support |

---

## 8. Social Media Graphics

`app/layout.tsx`'s `metadata` object has **no `openGraph` or `twitter`
block at all** — sharing any page today produces a link preview with no
image.

| File name | Recommended size | Used in |
|---|---|---|
| `og-image-default.jpg` | 1200×630 | `app/layout.tsx` → `metadata.openGraph.images` (site-wide fallback) |
| `twitter-card-default.jpg` | 1200×600 | `app/layout.tsx` → `metadata.twitter.images` |
| `og-image-shop.jpg` | 1200×630 | `app/shop/page.tsx` `generateMetadata` |
| `og-image-stories.jpg` | 1200×630 | `app/stories/page.tsx` `generateMetadata` |
| `og-image-membership.jpg` | 1200×630 | `app/membership/page.tsx` `generateMetadata` |
| `social-profile-icon.png` | 1000×1000 | Instagram/Facebook/TikTok profile picture |
| `social-post-square.png` (template) | 1080×1080 | Instagram feed post template |
| `social-post-story.png` (template) | 1080×1920 | Instagram/TikTok Story and Reel cover template (site brief emphasizes TikTok-first mobile users) |

---

## Summary Count

| Category | Files needed |
|---|---|
| Bella poses | 8 illustrations + 1 editable source file |
| Logo | 4 files |
| Icons | 21 files (6 locations + 9 categories + 6 badges) |
| Product mockups | 8 covers + 8 PDFs |
| Storybook assets | 3 covers + 9 page illustrations + 9 printable PDFs |
| Backgrounds | 9 files |
| Favicons | 5 files |
| Social graphics | 8 files |
| **Total** | **~90 files** |
