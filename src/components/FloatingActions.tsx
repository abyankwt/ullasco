import { MessageCircle, Phone } from "lucide-react";

export function FloatingActions() {
  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/96500000000"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Ullasco"
        className="inline-flex size-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition"
      >
        <MessageCircle className="size-5" />
      </a>
      <a
        href="tel:+96500000000"
        aria-label="Call Ullasco"
        className="inline-flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-105 transition"
      >
        <Phone className="size-5" />
      </a>
    </div>
  );
}
