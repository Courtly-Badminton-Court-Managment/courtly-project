import Image from "next/image";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="min-h-dvh grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
      {/* LEFT: Brand panel */}
      <aside className="relative hidden lg:block">
        {/* gradient bg + big rounded right edge */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#cfe3d7] via-[#efe7db] to-[#cfe3d7] rounded-r-[48px]" />
        <div className="relative z-10 flex h-full items-center justify-center px-10">
          <div className="max-w-[600px] w-full">
            <div className="relative mx-auto aspect-[4/3] w-full">
              {/* โลโก้หลัก */}
              <Image
                src="/brand/corutly-main-logo-tagline.png"
                alt="Courtly"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </aside>

      {/* RIGHT: Form panel */}
      <section className="flex items-center justify-center bg-white">
        <div className="w-full max-w-3xl px-6 py-10">
          {/* บนมือถือโชว์โลโก้เล็ก */}
          <div className="mb-6 flex items-center gap-3 lg:hidden">
            <Image src="/brand/courtly-logo-no-text.png" alt="Courtly" width={40} height={40} />
            <div>
              <p className="text-2xl font-extrabold tracking-wide text-[#5f574f]">COURTLY</p>
              <p className="text-xs text-[#5f574f]/70 -mt-1">Easy Court — Easy Life</p>
            </div>
          </div>

          <h1 className="text-4xl font-extrabold text-[#5f574f]">GET STARTED!</h1>
          <p className="mt-1 text-sm text-[#5f574f]/70">You’re all set in a minute.</p>

          <div className="mt-6 rounded-3xl border border-[#E2E2E2] bg-white p-10 shadow-[0_8px_30px_rgba(0,0,0,.06)]">
            <form className="space-y-4">
              {/* First / Last */}
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Firstname" placeholder="Firstname" />
                <Field label="Lastname" placeholder="Lastname" />
              </div>

              {/* Email */}
              <Field type="email" label="Email" placeholder="you@example.com" />

              {/* Username */}
              <Field label="Username" placeholder="Username" />

              {/* Password / Confirm */}
              <div className="grid gap-4 sm:grid-cols-2">
                <Field type="password" label="Password" placeholder="At least 6 characters" />
                <Field type="password" label="Confirm password" placeholder="Confirm password" />
              </div>

              {/* Terms */}
              <label className="mt-1 flex items-center gap-3 text-sm text-[#5f574f]">
                <input type="checkbox" className="h-4 w-4 rounded border-[#E2E2E2] text-[#2E8762] focus:ring-[#2E8762]" />
                <span>
                  I agree to the{" "}
                  <a href="#" className="font-semibold text-[#2E8762] underline underline-offset-2">
                    Terms &amp; Conditions
                  </a>
                </span>
              </label>

              {/* CTA */}
              <button
                type="submit"
                className="mt-2 w-full rounded-2xl bg-[#356D6C] py-3 text-lg font-bold text-white
                           shadow-[0_8px_0_0_rgba(0,0,0,.12)] hover:translate-y-[1px]
                           hover:shadow-[0_7px_0_0_rgba(0,0,0,.12)]
                           active:translate-y-[2px] active:shadow-[0_6px_0_0_rgba(0,0,0,.12)] transition"
              >
                Sign up
              </button>

              <p className="pt-2 text-center text-sm text-[#5f574f]/80">
                Already have an account?{" "}
                <Link href="/login" className="font-semibold text-[#2E8762] underline">
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

/** ---- small field component with soft bottom shadow ---- **/
function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: "text" | "email" | "password";
}) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-[#5f574f]">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-[#E2E2E2] px-3 py-2 outline-none
                   shadow-[0_5px_0_0_rgba(0,0,0,.12)] focus:shadow-none
                   focus:ring-2 focus:ring-[#75B2A0] placeholder:text-[#5f574f]/40"
      />
    </div>
  );
}
