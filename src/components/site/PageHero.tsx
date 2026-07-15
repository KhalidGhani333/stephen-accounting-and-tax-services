import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumb,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  breadcrumb: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy pt-20 pb-24 text-white md:pt-28 md:pb-32">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-teal/20 blur-3xl" />
      </div>
      <div className="container-x relative animate-fade-up">
        <div className="flex items-center gap-2 text-sm text-white/60">
          <Link to="/" className="hover:text-gold">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-gold">{breadcrumb}</span>
        </div>
        <p className="eyebrow mt-6 text-gold">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl font-bold leading-[1.05] md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
