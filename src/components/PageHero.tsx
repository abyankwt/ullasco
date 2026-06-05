import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, subtitle, children }: {
  eyebrow?: string; title: string; subtitle?: string; children?: ReactNode;
}) {
  return (
    <section className="relative bg-navy text-white overflow-hidden">
      <div className="absolute inset-0 pattern-diagonal opacity-40" aria-hidden />
      <div className="absolute -right-24 -top-24 size-96 rounded-full bg-primary/20 blur-3xl" aria-hidden />
      <div className="container-x py-20 md:py-28 relative">
        {eyebrow && <span className="eyebrow text-primary">{eyebrow}</span>}
        <h1 className="heading-xl text-white mt-4 max-w-3xl">{title}</h1>
        {subtitle && <p className="mt-5 max-w-2xl text-lg text-white/80 leading-relaxed">{subtitle}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
