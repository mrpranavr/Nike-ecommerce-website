"use client";

import { useState } from "react";
import Link from "next/link";
import SocialProviders from "./SocialProviders";

interface AuthFormProps {
  mode: "sign-in" | "sign-up";
}

export default function AuthForm({ mode }: AuthFormProps) {
  const isSignUp = mode === "sign-up";

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      {/* Toggle link */}
      <p className="text-center text-caption text-dark-700">
        {isSignUp ? (
          <>
            Already have an account?{" "}
            <Link
              href="/sign-in"
              className="font-medium text-dark-900 underline underline-offset-2"
            >
              Sign In
            </Link>
          </>
        ) : (
          <>
            Don&apos;t have an account?{" "}
            <Link
              href="/sign-up"
              className="font-medium text-dark-900 underline underline-offset-2"
            >
              Sign Up
            </Link>
          </>
        )}
      </p>

      {/* Heading */}
      <div className="text-center">
        <h1 className="text-heading-3 text-dark-900">
          {isSignUp ? "Join Nike Today!" : "Welcome Back!"}
        </h1>
        <p className="mt-1 text-body text-dark-700">
          {isSignUp
            ? "Create your account to start your fitness journey"
            : "Sign in to continue your fitness journey"}
        </p>
      </div>

      {/* Social providers */}
      <SocialProviders />

      {/* Divider */}
      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-light-300" />
        <span className="text-caption text-dark-700">
          Or {isSignUp ? "sign up" : "sign in"} with
        </span>
        <div className="h-px flex-1 bg-light-300" />
      </div>

      {/* Form */}
      <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
        {/* Full Name – sign-up only */}
        {isSignUp && (
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="fullName"
              className="text-caption text-dark-900"
            >
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              autoComplete="name"
              className="w-full rounded-lg border border-light-300 bg-light-100 px-4 py-3 text-body text-dark-900 placeholder:text-dark-500 outline-none transition-colors focus:border-dark-900"
            />
          </div>
        )}

        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-caption text-dark-900">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="johndoe@gmail.com"
            autoComplete="email"
            className="w-full rounded-lg border border-light-300 bg-light-100 px-4 py-3 text-body text-dark-900 placeholder:text-dark-500 outline-none transition-colors focus:border-dark-900"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="password"
            className="text-caption text-dark-900"
          >
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="minimum 8 characters"
              autoComplete={isSignUp ? "new-password" : "current-password"}
              className="w-full rounded-lg border border-light-300 bg-light-100 px-4 py-3 pr-12 text-body text-dark-900 placeholder:text-dark-500 outline-none transition-colors focus:border-dark-900"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-dark-500 hover:text-dark-900 transition-colors"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                /* Eye-off icon */
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                  <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                  <line x1="1" y1="1" x2="23" y2="23" />
                  <path d="M14.12 14.12a3 3 0 1 1-4.24-4.24" />
                </svg>
              ) : (
                /* Eye icon */
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Forgot password – sign-in only */}
        {!isSignUp && (
          <div className="flex justify-end">
            <Link
              href="/forgot-password"
              className="text-caption text-dark-700 hover:text-dark-900 transition-colors underline underline-offset-2"
            >
              Forgot password?
            </Link>
          </div>
        )}

        {/* Submit button */}
        <button
          type="submit"
          className="w-full rounded-full bg-dark-900 px-6 py-3.5 text-body-medium text-light-100 transition-colors hover:bg-dark-700"
        >
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
      </form>

      {/* Terms – sign-up only */}
      {isSignUp && (
        <p className="text-center text-footnote text-dark-700">
          By signing up, you agree to our{" "}
          <Link
            href="/terms-of-use"
            className="underline underline-offset-2 hover:text-dark-900 transition-colors"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy-policy"
            className="underline underline-offset-2 hover:text-dark-900 transition-colors"
          >
            Privacy Policy
          </Link>
        </p>
      )}
    </div>
  );
}
