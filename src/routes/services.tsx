import { createFileRoute, Link, Navigate } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { ConsultationCTA } from "@/components/site/ConsultationCTA";
import { Reveal } from "@/components/site/Reveal";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services - Stephen Accounting & Tax Services" },
      { name: "description", content: "Bookkeeping, tax preparation, payroll, business advisory, tax planning, and audit support - delivered by licensed CPAs and EAs." },
      { property: "og:title", content: "Our Services" },
      { property: "og:description", content: "Full-service accounting and tax practice for growing businesses." },
    ],
  }),
  component: ServicesRedirect,
});

function ServicesRedirect() {
  return <Navigate to="/" hash="services" replace />;
}

export function ServicesSection() {
  return (
    <section className="container-x py-16 md:py-20">
      <Reveal from="fade">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <p className="eyebrow">What We Do</p>
          <h2 className="mt-4 font-serif text-3xl font-bold text-navy md:text-4xl">
            Full-service accounting, tax & advisory
          </h2>
          <p className="mt-3 text-muted-foreground">
            Six core practice areas, one integrated team   built to deliver.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <Reveal key={s.slug} delay={i * 60}>
              <article
                id={s.slug}
                className="scroll-mt-28 rounded-2xl border border-border bg-white p-7 transition hover:border-gold/40 hover:shadow-card h-full flex flex-col"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold text-navy">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground flex-1">{s.short}</p>
                <ul className="mt-4 space-y-2">
                  {s.bullets.slice(0, 3).map((b) => (
                    <li key={b} className="flex gap-2 text-xs text-navy/75">
                      <span className="mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                        <Check className="h-2.5 w-2.5" strokeWidth={3} />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold group/link self-start">
                  Get Started
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
