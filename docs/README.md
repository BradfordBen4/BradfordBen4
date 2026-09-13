# Little Learners Studio™ — Docs

Production SaaS education platform starring Bella the Brave Bunny.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion + Lucide React
- Supabase (auth, database, RLS)
- Stripe (one-time purchases + subscriptions)
- Cloudinary (media hosting)
- Vercel (deployment)

## Folder structure

```
app/            Routes (App Router)
components/     Reusable UI, layout, and feature components
lib/            Utilities, constants, Supabase/Stripe clients
hooks/          Shared React hooks
types/          Shared TypeScript types
public/         Static assets
supabase/       SQL migrations
docs/           Project documentation
```

## Brand

- Colors: Pink `#FF5D8F`, Yellow `#FFD84D`, Blue `#6BCBFF`, Green `#A8D5BA`, Cream `#FFF8EE`, Navy `#25324B`
- Fonts: Fredoka (headings), Nunito (body), Quicksand (buttons)
- Mascot: Bella the Brave Bunny — cream bunny, blue overalls with a daisy, pink backpack

## Milestones

See project task list for the milestone-by-milestone build plan (scaffold →
Bella assets → homepage → adventure map → shop → story hub → auth →
membership/Stripe → dashboards/passport → database/RLS → admin CMS → SEO
pages).

## Environment variables

Copy `.env.example` to `.env.local` and fill in Supabase, Stripe, and
Cloudinary credentials before running auth, checkout, or media upload flows.
