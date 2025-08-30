'use client'

import { ReactNode, useState } from "react";
import { AuthCard } from "../components/AuthCard";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
    // Handle login logic here
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-amber-50 via-gray-100 to-teal-100">
      <AuthCard title="Welcome back 👋" subtitle="Sign in to book your next game.">
        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full rounded-lg bg-teal-600 px-4 py-2 text-white font-semibold hover:bg-teal-700 transition-colors duration-200"
          >
            Sign In
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <button 
            className="font-semibold text-amber-700 hover:underline cursor-pointer"
            onClick={() => console.log("Navigate to register")}
          >
            Book Now → Create one
          </button>
        </p>
      </AuthCard>
    </div>
  );
}