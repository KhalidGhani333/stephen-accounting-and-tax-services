import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { ConsultationCTA } from "@/components/site/ConsultationCTA";
import { HowItWorks } from "@/components/site/HowItWorks";
import { services } from "@/lib/site-data";
import servicesImg from "@/assets/services.jpg";
import teamImg from "@/assets/team.jpg";
import cityImg from "@/assets/city.jpg";
import professional from "@/assets/professional.jpg";
import heroImg from "@/assets/hero.jpg";
import founder from "@/assets/founder.jpg";

const imgs = [servicesImg, teamImg, professional, cityImg, heroImg, founder];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Stephen Accounting & Tax Services" },
      { name: "description", content: "Bookkeeping, tax preparation, payroll, business advisory, tax planning, and audit support — delivered by licensed CPAs and EAs." },
      { property: "og:title", content: "Our Services" },
      { property: "og:description", content: "Full-service accounting and tax practice for growing businesses." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Full-service accounting, tax, and advisory."
        subtitle="Six core practice areas, one integrated team. Whether you need clean books, aggressive tax planning, or CFO-level guidance — we're built to deliver."
        breadcrumb="Services"
      />

      <section className="container-x py-16 md:py-24">
        <div className="space-y-24 md:space-y-32">
          {services.map((s, i) => {
            const flipped = i % 2 === 1;
            const Icon = s.icon;
            return (
              <article
                key={s.slug}
                className="grid items-center gap-10 md:grid-cols-2 md:gap-16"
              >
                <div className={`overflow-hidden rounded-3xl ${flipped ? "md:order-2" : ""}`}>
                  <img
                    src={imgs[i % imgs.length]}
                    alt={s.title}
                    className="h-80 w-full object-cover md:h-[28rem]"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold text-navy">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="eyebrow">0{i + 1}</span>
                  </div>
                  <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-navy md:text-4xl">
                    {s.title}
                  </h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{s.description}</p>
                  <ul className="mt-6 space-y-3">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-sm text-navy/85">
                        <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
                    Discuss this service
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <div className="bg-cream">
        <HowItWorks />
      </div>

      <ConsultationCTA />
    </>
  );
}
