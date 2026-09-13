import { redirect } from "next/navigation";
import { requireUser } from "@/lib/auth";

export async function requireAdmin() {
  const result = await requireUser();
  if (!result.configured) return result;

  const { user, supabase } = result;
  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .maybeSingle();

  if (profile?.role !== "admin") {
    redirect("/dashboard");
  }

  return result;
}
