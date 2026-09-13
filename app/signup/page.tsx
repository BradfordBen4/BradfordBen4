import type { Metadata } from "next";
import AuthCard from "@/components/auth/AuthCard";
import SignupForm from "@/components/auth/SignupForm";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function SignupPage() {
  return (
    <AuthCard title="Join the Adventure" subtitle="Create a free account to get started.">
      <SignupForm />
    </AuthCard>
  );
}
