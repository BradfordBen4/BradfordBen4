import type { Metadata } from "next";
import AuthCard from "@/components/auth/AuthCard";
import LoginForm from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Log In",
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  const { next } = await searchParams;

  return (
    <AuthCard title="Welcome Back!" subtitle="Log in to continue your adventure with Bella.">
      <LoginForm redirectTo={next ?? "/dashboard"} />
    </AuthCard>
  );
}
