import { socialLinks } from "@/lib/company";

const icons = {
  Facebook: (
    <path d="M13.5 6.2h1.9V3.1a24.6 24.6 0 0 0-2.78-.14c-2.76 0-4.64 1.7-4.64 4.82V10H4.9v3.46h3.08V22h3.72v-8.54h3.08L15.27 10H11.7V8.12c0-1 .28-1.92 1.8-1.92Z" />
  ),
  Instagram: (
    <>
      <path d="M12 7.34a4.66 4.66 0 1 0 0 9.32 4.66 4.66 0 0 0 0-9.32Zm0 7.68a3.02 3.02 0 1 1 0-6.04 3.02 3.02 0 0 1 0 6.04Z" />
      <path d="M16.84 2.8H7.16A4.36 4.36 0 0 0 2.8 7.16v9.68a4.36 4.36 0 0 0 4.36 4.36h9.68a4.36 4.36 0 0 0 4.36-4.36V7.16a4.36 4.36 0 0 0-4.36-4.36Zm2.54 14.04a2.54 2.54 0 0 1-2.54 2.54H7.16a2.54 2.54 0 0 1-2.54-2.54V7.16a2.54 2.54 0 0 1 2.54-2.54h9.68a2.54 2.54 0 0 1 2.54 2.54v9.68Z" />
      <circle cx="16.92" cy="7.1" r="1.08" />
    </>
  ),
  LinkedIn: (
    <path d="M6.94 8.98H3.56V20h3.38V8.98ZM5.24 7.48a1.96 1.96 0 1 0 0-3.92 1.96 1.96 0 0 0 0 3.92ZM20.44 20h-3.38v-5.36c0-1.28-.02-2.92-1.78-2.92-1.78 0-2.06 1.4-2.06 2.84V20H9.84V8.98h3.24v1.5h.04c.46-.86 1.56-1.76 3.2-1.76 3.42 0 4.04 2.24 4.04 5.16V20Z" />
  ),
  X: (
    <path d="M13.9 10.18 21.34 2h-1.76l-6.36 7.02L8.14 2H2.2l7.8 10.78L2.2 21.38h1.76l6.82-7.52 5.44 7.52h5.94l-8.26-11.2Zm-2.42 2.66-.8-1.1L4.4 3.34h2.88l5 6.68.8 1.1 6.62 8.86h-2.88l-5.34-7.14Z" />
  ),
} as const;

export function SocialLinks({ className = "" }: { className?: string }) {
  if (socialLinks.length === 0) return null;

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {socialLinks.map((item) => (
        <a
          key={item.label}
          href={item.href}
          aria-label={item.label}
          className={`inline-flex size-8 items-center justify-center rounded-full text-white shadow-sm ring-1 ring-white/20 transition hover:-translate-y-0.5 hover:shadow-md ${item.brandClass}`}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
            {icons[item.label]}
          </svg>
        </a>
      ))}
    </div>
  );
}
