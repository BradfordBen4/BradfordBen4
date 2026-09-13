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

## Database

`supabase/migrations/20250101000000_init_schema.sql` creates the full schema
(`profiles`, `products`, `purchases`, `memberships`, `stories`, `passports`,
`classrooms`) with Row Level Security enabled and a trigger that creates a
`profiles` row from signup metadata whenever a new `auth.users` row is
created. `supabase/seed.sql` seeds `products` and `stories` with the same
catalog the frontend currently ships as mock data, so the two stay in sync
once pages are wired to read from Supabase.

Apply it with the Supabase CLI:

```bash
supabase link --project-ref <your-project-ref>
supabase db push
supabase db execute -f supabase/seed.sql
```

or paste the SQL files into the Supabase Dashboard's SQL Editor. The
migration was verified end-to-end against a local Postgres 16 instance
(schema creation, RLS policies, the `handle_new_user` trigger, and the seed
data all applied cleanly) before being committed.

## Admin CMS

`/admin` (products/worksheets/coloring books and Bella stories, with a
Cloudinary upload field on every file/image input) is only reachable by a
`profiles.role = 'admin'` user — signup only offers "parent" or "teacher", so
promote the first admin manually after they sign up:

```sql
update public.profiles set role = 'admin' where email = 'you@example.com';
```

All writes go through Server Actions (`lib/admin/actions.ts`) that
re-verify the caller's admin role and then use the service-role client, so
`SUPABASE_SERVICE_ROLE_KEY` must be set for create/edit/delete to work (list
and detail reads use the signed-in user's own session).
