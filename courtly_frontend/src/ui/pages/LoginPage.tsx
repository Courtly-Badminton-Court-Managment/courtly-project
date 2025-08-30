import Link from "next/link";
import AuthCard from "../components/AuthCard";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-courtBg via-platinum to-cambridge">
      <AuthCard title="Welcome back 👋" subtitle="Sign in to book your next game.">
        <form className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-onyx">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-platinum px-3 py-2 outline-none focus:ring-2 focus:ring-cambridge"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-onyx">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-lg border border-platinum px-3 py-2 outline-none focus:ring-2 focus:ring-cambridge"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-sea px-4 py-2 text-white font-semibold shadow hover:bg-pine transition"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-walnut">
          Don’t have an account?{" "}
          <Link href="/register" className="font-semibold text-brownSugar hover:underline">
            Book Now → Create one
          </Link>
        </p>
      </AuthCard>
    </main>
  );
}
