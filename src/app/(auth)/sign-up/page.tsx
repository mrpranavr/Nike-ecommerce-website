import type { Metadata } from "next";
import AuthForm from "@/components/AuthForm";

export const metadata: Metadata = {
  title: "Sign Up | Nike Store",
  description: "Create your Nike account to start your fitness journey",
};

export default function SignUpPage() {
  return <AuthForm mode="sign-up" />;
}
