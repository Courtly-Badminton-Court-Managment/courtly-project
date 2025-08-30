export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="grid min-h-[100dvh] grid-cols-1 place-items-center p-6">
      {/* Brand header */}
      <header className="absolute top-6 left-6">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-platinum ring-2 ring-walnut grid place-items-center">
            <span className="text-walnut text-lg">🏸</span>
          </div>
          <span className="text-2xl font-bold tracking-wide">COURTLY</span>
        </div>
        <p className="mt-1 text-sm text-walnut">Friendly • Energetic • Accessible</p>
      </header>

      {/* Card */}
      <section className="w-full max-w-md rounded-2xl bg-white p-6 shadow-soft border border-platinum">
        {children}
      </section>

      {/* Footer tone */}
      <footer className="absolute bottom-6 text-xs text-walnut">
        © {new Date().getFullYear()} Courtly
      </footer>
    </main>
  );
}
