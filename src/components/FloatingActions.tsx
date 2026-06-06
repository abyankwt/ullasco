import { Phone } from "lucide-react";
import { companyPhoneHref, companyWhatsAppHref } from "@/lib/company";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="size-6 fill-current">
      <path d="M16.04 3.2c-7.08 0-12.84 5.72-12.84 12.76 0 2.26.6 4.46 1.74 6.4L3.1 29l6.82-1.78a12.94 12.94 0 0 0 6.12 1.54c7.08 0 12.84-5.72 12.84-12.76S23.12 3.2 16.04 3.2Zm0 23.4c-1.98 0-3.92-.54-5.6-1.58l-.4-.24-4.04 1.06 1.08-3.92-.26-.4a10.55 10.55 0 0 1-1.64-5.56c0-5.84 4.88-10.6 10.86-10.6 5.98 0 10.86 4.76 10.86 10.6 0 5.84-4.88 10.64-10.86 10.64Zm5.96-7.96c-.32-.16-1.92-.94-2.22-1.06-.3-.1-.52-.16-.74.16-.22.32-.84 1.06-1.04 1.28-.18.22-.38.24-.7.08-.32-.16-1.36-.5-2.58-1.6-.96-.84-1.6-1.88-1.78-2.2-.18-.32-.02-.5.14-.66.14-.14.32-.38.48-.56.16-.2.22-.32.32-.54.1-.22.06-.4-.02-.56-.08-.16-.74-1.78-1.02-2.44-.26-.64-.54-.56-.74-.56h-.62c-.22 0-.56.08-.86.4-.3.32-1.14 1.12-1.14 2.72s1.16 3.14 1.32 3.36c.16.22 2.28 3.48 5.52 4.88.78.34 1.38.54 1.86.68.78.24 1.48.2 2.04.12.62-.1 1.92-.78 2.2-1.54.28-.76.28-1.4.2-1.54-.08-.14-.3-.22-.62-.38Z" />
    </svg>
  );
}

export function FloatingActions() {
  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col gap-3">
      <a
        href={companyWhatsAppHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Ullasco"
        className="whatsapp-float inline-flex size-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105"
      >
        <WhatsAppIcon />
      </a>
      <a
        href={companyPhoneHref}
        aria-label="Call Ullasco"
        className="inline-flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-105 transition"
      >
        <Phone className="size-5" />
      </a>
    </div>
  );
}
