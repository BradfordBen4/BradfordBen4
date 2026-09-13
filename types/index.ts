import type { ProductCategory } from "@/lib/constants";

export type UserRole = "parent" | "teacher" | "admin";

export type Profile = {
  id: string;
  email: string;
  full_name: string | null;
  role: UserRole;
  avatar_url: string | null;
  created_at: string;
};

export type Product = {
  id: string;
  slug: string;
  title: string;
  description: string;
  price: number;
  image_url: string;
  categories: ProductCategory[];
  file_url: string | null;
  is_membership_exclusive: boolean;
  created_at: string;
};

export type Story = {
  id: string;
  slug: string;
  title: string;
  episode_number: number;
  illustration_url: string;
  body: string;
  coloring_page_url: string | null;
  parent_activity_url: string | null;
  teacher_worksheet_url: string | null;
  next_episode_slug: string | null;
  created_at: string;
};

export type MembershipTier = "basic" | "plus" | "school";

export type Membership = {
  id: string;
  user_id: string;
  tier: MembershipTier;
  status: "active" | "canceled" | "past_due" | "trialing";
  stripe_customer_id: string | null;
  stripe_subscription_id: string | null;
  current_period_end: string | null;
};

export type Purchase = {
  id: string;
  user_id: string;
  product_id: string;
  stripe_session_id: string | null;
  amount: number;
  created_at: string;
};

export type Passport = {
  id: string;
  child_name: string;
  user_id: string;
  stars: number;
  badges: string[];
  stickers: string[];
  updated_at: string;
};

export type Classroom = {
  id: string;
  teacher_id: string;
  name: string;
  grade_level: string | null;
  student_count: number | null;
  created_at: string;
};
