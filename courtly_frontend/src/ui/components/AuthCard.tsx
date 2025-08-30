import { ReactNode } from "react";

export default function AuthCard({ title, subtitle, children }: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <div className="w-full max-w-md rounded-2xl bg-white/90 p-8 shadow-xl backdrop-blur-sm border border-platinum">
      <h1 className="mb-1 text-3xl font-bold text-sea">{title}</h1>
      {subtitle && <p className="mb-6 text-sm text-walnut">{subtitle}</p>}
      {children}
    </div>
  );
}
