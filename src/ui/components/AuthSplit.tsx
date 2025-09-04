import { ReactNode } from "react";

export default function AuthSplit({
  left,
  right,
}: {
  left: ReactNode;
  right: ReactNode;
}) {
  return (
    <main className="min-h-dvh grid grid-cols-1 lg:grid-cols-2 overflow-hidden bg-white">
      {/* LEFT */}
      <aside className="relative hidden lg:block">
        {left}
      </aside>

      {/* RIGHT */}
      <section className="flex items-center justify-center">
        <div className="w-full max-w-3xl px-20 py-10">{right}</div>
      </section>
    </main>
  );
}
