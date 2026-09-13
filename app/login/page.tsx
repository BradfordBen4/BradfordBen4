import type { Metadata } from "next";
import AuthCard from "@/components/auth/AuthCard";
import LoginForm from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Log In",
};

export default function LoginPage() {
  return (
    <AuthCard title="Welcome Back!" subtitle="Log in to continue your adventure with Bella.">
      <LoginForm />
    </AuthCard>
  );
}
