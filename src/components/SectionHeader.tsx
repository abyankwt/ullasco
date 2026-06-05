export function SectionHeader({ eyebrow, title, subtitle, center = false }: {
  eyebrow?: string; title: string; subtitle?: string; center?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="heading-lg mt-3">{title}</h2>
      {subtitle && <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">{subtitle}</p>}
    </div>
  );
}
