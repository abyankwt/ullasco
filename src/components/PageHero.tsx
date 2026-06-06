import type { ReactNode } from "react";
import { OptimizedImage } from "@/components/OptimizedImage";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  imagePriority?: boolean;
  highlights?: string[];
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt = "",
  imagePriority = false,
  highlights,
  children,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 -z-10" aria-hidden>
        {image && (
          <OptimizedImage
            src={image}
            alt={imageAlt}
            width={1920}
            height={1080}
            sizes="100vw"
            priority={imagePriority}
            loading="eager"
            className="size-full object-cover opacity-60"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/92 to-navy/64" />
      </div>
      <div className="container-x relative py-20 md:py-28">
        <div className="max-w-4xl">
          {eyebrow && <span className="eyebrow text-primary">{eyebrow}</span>}
          <h1 className="heading-xl mt-4 text-white">{title}</h1>
          {subtitle && (
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/82 md:text-lg">
              {subtitle}
            </p>
          )}
          {highlights && (
            <ul className="mt-8 grid gap-3 text-sm text-white/86 sm:grid-cols-3">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="border-l-2 border-primary bg-white/[0.055] px-4 py-3 backdrop-blur"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}
