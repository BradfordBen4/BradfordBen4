-- Little Learners Studio - initial schema
-- Tables: profiles, products, purchases, memberships, stories, passports, classrooms
-- All tables have Row Level Security enabled.

create extension if not exists "pgcrypto";

-- ---------------------------------------------------------------------------
-- profiles
-- ---------------------------------------------------------------------------
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email text not null,
  full_name text,
  role text not null default 'parent' check (role in ('parent', 'teacher', 'admin')),
  avatar_url text,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "Profiles are viewable by their owner"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Profiles are editable by their owner"
  on public.profiles for update
  using (auth.uid() = id);

-- Automatically create a profile row whenever a new auth user signs up,
-- pulling full_name/role out of the signup metadata set by SignupForm.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name, role)
  values (
    new.id,
    new.email,
    new.raw_user_meta_data ->> 'full_name',
    coalesce(new.raw_user_meta_data ->> 'role', 'parent')
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ---------------------------------------------------------------------------
-- products
-- ---------------------------------------------------------------------------
create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  description text not null default '',
  price numeric(10, 2) not null default 0,
  image_url text,
  categories text[] not null default '{}',
  file_url text,
  is_membership_exclusive boolean not null default false,
  created_at timestamptz not null default now()
);

create index if not exists products_categories_idx on public.products using gin (categories);

alter table public.products enable row level security;

create policy "Products are publicly viewable"
  on public.products for select
  using (true);

-- ---------------------------------------------------------------------------
-- purchases
-- ---------------------------------------------------------------------------
create table if not exists public.purchases (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users (id) on delete set null,
  product_id uuid references public.products (id) on delete set null,
  stripe_session_id text,
  amount numeric(10, 2) not null default 0,
  created_at timestamptz not null default now()
);

create index if not exists purchases_user_id_idx on public.purchases (user_id);

alter table public.purchases enable row level security;

create policy "Purchases are viewable by their owner"
  on public.purchases for select
  using (auth.uid() = user_id);

-- ---------------------------------------------------------------------------
-- memberships
-- ---------------------------------------------------------------------------
create table if not exists public.memberships (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users (id) on delete cascade,
  tier text not null check (tier in ('basic', 'plus', 'school')),
  status text not null default 'active' check (status in ('active', 'canceled', 'past_due', 'trialing')),
  stripe_customer_id text,
  stripe_subscription_id text,
  current_period_end timestamptz,
  created_at timestamptz not null default now()
);

alter table public.memberships enable row level security;

create policy "Memberships are viewable by their owner"
  on public.memberships for select
  using (auth.uid() = user_id);

-- ---------------------------------------------------------------------------
-- stories
-- ---------------------------------------------------------------------------
create table if not exists public.stories (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  episode_number int not null,
  illustration_url text,
  body text not null default '',
  coloring_page_url text,
  parent_activity_url text,
  teacher_worksheet_url text,
  next_episode_slug text,
  created_at timestamptz not null default now()
);

alter table public.stories enable row level security;

create policy "Stories are publicly viewable"
  on public.stories for select
  using (true);

-- ---------------------------------------------------------------------------
-- passports (Bella Learning Passport)
-- ---------------------------------------------------------------------------
create table if not exists public.passports (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  child_name text not null default 'Little Learner',
  stars int not null default 0,
  badges text[] not null default '{}',
  stickers text[] not null default '{}',
  updated_at timestamptz not null default now()
);

create index if not exists passports_user_id_idx on public.passports (user_id);

alter table public.passports enable row level security;

create policy "Passports are viewable by their owner"
  on public.passports for select
  using (auth.uid() = user_id);

create policy "Passports are insertable by their owner"
  on public.passports for insert
  with check (auth.uid() = user_id);

create policy "Passports are editable by their owner"
  on public.passports for update
  using (auth.uid() = user_id);

-- ---------------------------------------------------------------------------
-- classrooms
-- ---------------------------------------------------------------------------
create table if not exists public.classrooms (
  id uuid primary key default gen_random_uuid(),
  teacher_id uuid not null references auth.users (id) on delete cascade,
  name text not null,
  grade_level text,
  student_count int,
  created_at timestamptz not null default now()
);

create index if not exists classrooms_teacher_id_idx on public.classrooms (teacher_id);

alter table public.classrooms enable row level security;

create policy "Classrooms are viewable by their teacher"
  on public.classrooms for select
  using (auth.uid() = teacher_id);

create policy "Classrooms are insertable by their teacher"
  on public.classrooms for insert
  with check (auth.uid() = teacher_id);

create policy "Classrooms are editable by their teacher"
  on public.classrooms for update
  using (auth.uid() = teacher_id);

create policy "Classrooms are deletable by their teacher"
  on public.classrooms for delete
  using (auth.uid() = teacher_id);
