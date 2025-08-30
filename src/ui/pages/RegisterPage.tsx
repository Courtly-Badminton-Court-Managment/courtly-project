import Link from "next/link";
import AuthCard from "../components/AuthCard";

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-courtBg via-platinum to-cambridge">
      <AuthCard title="Create your account" subtitle="You’re all set in a minute.">
        <form className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-onyx">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-lg border border-platinum px-3 py-2 outline-none focus:ring-2 focus:ring-cambridge"
            />
          </div>
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
              placeholder="At least 6 characters"
              className="w-full rounded-lg border border-platinum px-3 py-2 outline-none focus:ring-2 focus:ring-cambridge"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-courtDeep px-4 py-2 text-white font-semibold shadow hover:bg-sea transition"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-walnut">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-sea hover:underline">
            Sign in
          </Link>
        </p>
      </AuthCard>
    </main>
  );
}
