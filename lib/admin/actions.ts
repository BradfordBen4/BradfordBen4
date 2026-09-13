"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { requireUser } from "@/lib/auth";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";

async function verifiedAdminClient() {
  const result = await requireUser();
  if (!result.configured) {
    throw new Error("Supabase is not configured.");
  }

  const { user, supabase } = result;
  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .maybeSingle();

  if (profile?.role !== "admin") {
    redirect("/dashboard");
  }

  const admin = getSupabaseAdminClient();
  if (!admin) {
    throw new Error("SUPABASE_SERVICE_ROLE_KEY is not configured.");
  }
  return admin;
}

function parseCategories(formData: FormData) {
  return formData.getAll("categories").map(String);
}

function orNull(value: FormDataEntryValue | null) {
  const str = value ? String(value).trim() : "";
  return str.length > 0 ? str : null;
}

export async function createProduct(formData: FormData) {
  const admin = await verifiedAdminClient();
  const { error } = await admin.from("products").insert({
    slug: String(formData.get("slug")),
    title: String(formData.get("title")),
    description: String(formData.get("description") ?? ""),
    price: Number(formData.get("price") ?? 0),
    categories: parseCategories(formData),
    image_url: orNull(formData.get("image_url")),
    file_url: orNull(formData.get("file_url")),
    is_membership_exclusive: formData.get("is_membership_exclusive") === "on",
  });
  if (error) throw new Error(error.message);

  revalidatePath("/admin/products");
  redirect("/admin/products");
}

export async function updateProduct(id: string, formData: FormData) {
  const admin = await verifiedAdminClient();
  const { error } = await admin
    .from("products")
    .update({
      slug: String(formData.get("slug")),
      title: String(formData.get("title")),
      description: String(formData.get("description") ?? ""),
      price: Number(formData.get("price") ?? 0),
      categories: parseCategories(formData),
      image_url: orNull(formData.get("image_url")),
      file_url: orNull(formData.get("file_url")),
      is_membership_exclusive: formData.get("is_membership_exclusive") === "on",
    })
    .eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePath("/admin/products");
  redirect("/admin/products");
}

export async function deleteProduct(id: string) {
  const admin = await verifiedAdminClient();
  const { error } = await admin.from("products").delete().eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/admin/products");
}

export async function createStory(formData: FormData) {
  const admin = await verifiedAdminClient();
  const { error } = await admin.from("stories").insert({
    slug: String(formData.get("slug")),
    title: String(formData.get("title")),
    episode_number: Number(formData.get("episode_number") ?? 1),
    body: String(formData.get("body") ?? ""),
    illustration_url: orNull(formData.get("illustration_url")),
    coloring_page_url: orNull(formData.get("coloring_page_url")),
    parent_activity_url: orNull(formData.get("parent_activity_url")),
    teacher_worksheet_url: orNull(formData.get("teacher_worksheet_url")),
    next_episode_slug: orNull(formData.get("next_episode_slug")),
  });
  if (error) throw new Error(error.message);

  revalidatePath("/admin/stories");
  redirect("/admin/stories");
}

export async function updateStory(id: string, formData: FormData) {
  const admin = await verifiedAdminClient();
  const { error } = await admin
    .from("stories")
    .update({
      slug: String(formData.get("slug")),
      title: String(formData.get("title")),
      episode_number: Number(formData.get("episode_number") ?? 1),
      body: String(formData.get("body") ?? ""),
      illustration_url: orNull(formData.get("illustration_url")),
      coloring_page_url: orNull(formData.get("coloring_page_url")),
      parent_activity_url: orNull(formData.get("parent_activity_url")),
      teacher_worksheet_url: orNull(formData.get("teacher_worksheet_url")),
      next_episode_slug: orNull(formData.get("next_episode_slug")),
    })
    .eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePath("/admin/stories");
  redirect("/admin/stories");
}

export async function deleteStory(id: string) {
  const admin = await verifiedAdminClient();
  const { error } = await admin.from("stories").delete().eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/admin/stories");
}
