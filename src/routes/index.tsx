import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, Star } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import cityImg from "@/assets/city.jpg";
import teamImg from "@/assets/team.jpg";
import servicesImg from "@/assets/services.jpg";
import { services, testimonials, articles } from "@/lib/site-data";
import { ConsultationCTA } from "@/components/site/ConsultationCTA";
import { HowItWorks } from "@/components/site/HowItWorks";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stephen Accounting & Tax Services — Trusted Financial Advisory" },
      { name: "description", content: "Premium accounting, tax preparation, payroll and business advisory for growing businesses. 20+ years experience, 1,200+ tax returns filed, 98% client retention." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <QuoteBanner />
      <WhyChooseUs />
      <HowItWorks />
      <Achievements />
      <Testimonials />
      <Resources />
      <ConsultationCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <img
        src={heroImg}
        alt="Financial advisors reviewing strategy in a boardroom"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
        width={1920}
        height={1200}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/80 to-navy" />
      <div className="container-x relative pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="max-w-3xl animate-fade-up">
          <p className="eyebrow text-gold">Accounting · Tax · Advisory</p>
          <h1 className="mt-5 font-serif text-4xl font-bold leading-[1.05] md:text-6xl lg:text-7xl">
            Accounting & Tax Solutions <span className="text-gold">You Can Trust</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            Licensed CPAs and tax advisors helping ambitious businesses and individuals keep more of
            what they earn — with clarity, precision, and year-round support.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-gold">
              Book a Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/services" className="btn-outline-light">
              Explore Services
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-16 grid gap-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm sm:grid-cols-3 md:mt-20 md:p-8">
          {[
            ["20+", "Years of Experience"],
            ["1,200+", "Tax Returns Filed"],
            ["98%", "Client Retention"],
          ].map(([n, l]) => (
            <div key={l} className="text-center sm:border-r sm:border-white/10 sm:last:border-r-0 sm:text-left">
              <div className="font-serif text-4xl font-bold text-gold md:text-5xl">{n}</div>
              <div className="mt-1 text-sm text-white/70">{l}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 text-white/40">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">Trusted by</span>
          {["NORTHLINE LOGISTICS", "VERTEX MFG", "EMBER STUDIO"].map((name) => (
            <span key={name} className="font-serif text-lg font-semibold tracking-wide">{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesOverview() {
  return (
    <section className="container-x py-20 md:py-28">
      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <p className="eyebrow">Our Services</p>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            A full-service accounting practice built for owners who want more than tax filing.
            We combine day-to-day bookkeeping with the strategic advice most firms leave for
            the last week of March.
          </p>
        </div>
        <div>
          <h2 className="font-serif text-3xl font-bold leading-tight text-navy md:text-5xl">
            Expert Financial Solutions for Your Business
          </h2>
        </div>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ slug, title, icon: Icon, short }, i) => (
          <article
            key={slug}
            className="card-elevated group flex flex-col overflow-hidden"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="relative h-40 overflow-hidden">
              <img
                src={servicesImg}
                alt=""
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-navy/10" />
              <div className="absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-xl bg-gold text-navy shadow-lg">
                <Icon className="h-5 w-5" />
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-serif text-xl font-semibold text-navy">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{short}</p>
              <Link
                to="/services"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition group/link"
              >
                Learn More
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function QuoteBanner() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-white md:py-32">
      <img
        src={cityImg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-25"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/70" />
      <div className="container-x relative">
        <div className="max-w-4xl">
          <span className="font-serif text-6xl leading-none text-gold">"</span>
          <p className="mt-2 font-serif text-2xl leading-[1.35] text-white md:text-4xl lg:text-[2.75rem]">
            Trusted accounting is not paperwork. It's the quiet confidence of knowing every number
            in your business tells the truth — and works for you.
          </p>
          <p className="mt-8 text-sm uppercase tracking-[0.2em] text-gold">
            — Stephen Reeves, Founder & Managing Partner
          </p>
        </div>

        <div className="mt-14 flex flex-col items-start gap-6 border-t border-white/10 pt-10 sm:flex-row sm:items-center">
          <div className="flex -space-x-3">
            {[0,1,2,3,4].map((i) => (
              <div
                key={i}
                className="grid h-11 w-11 place-items-center rounded-full border-2 border-navy bg-gradient-to-br from-gold to-teal font-serif text-sm font-bold text-navy"
              >
                {String.fromCharCode(65 + i)}
              </div>
            ))}
          </div>
          <div>
            <p className="font-serif text-2xl font-semibold text-white">Trusted by 250+ Businesses</p>
            <p className="text-sm text-white/60">From family-owned shops to $50M+ operators.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const points = [
    { title: "Experienced Professionals", text: "Licensed CPAs and EAs with 20+ years advising businesses across industries." },
    { title: "Accurate & Transparent Processes", text: "Documented workflows, fixed-fee pricing, and quarterly reviews — no surprises." },
    { title: "Tailored Solutions", text: "We build service plans around your entity structure, goals, and growth stage." },
    { title: "Timely Filing", text: "Deadlines tracked and communicated weeks in advance. We file early, not late." },
  ];
  return (
    <section className="bg-cream">
      <div className="container-x grid gap-14 py-20 md:grid-cols-2 md:gap-16 md:py-28">
        <div>
          <p className="eyebrow">Why Choose Us</p>
          <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-navy md:text-5xl">
            Why Businesses Trust Our Expertise
          </h2>
          <p className="mt-5 max-w-md text-muted-foreground">
            Two decades of building long-term partnerships with clients who need a firm that
            treats their business like it's our own.
          </p>
          <div className="mt-8 overflow-hidden rounded-3xl">
            <img
              src={teamImg}
              alt="Advisors collaborating in office"
              className="h-72 w-full object-cover md:h-96"
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 md:pt-24">
          {points.map((p) => (
            <div key={p.title} className="flex gap-5 rounded-2xl bg-white p-6 shadow-card">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                <Check className="h-5 w-5" strokeWidth={2.5} />
              </div>
              <div className="min-w-0">
                <h3 className="font-serif text-lg font-semibold text-navy">{p.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  const stats = [
    ["500+", "Businesses Served"],
    ["12M+", "Transactions Processed"],
    ["95%", "Client Satisfaction"],
    ["300+", "Tax Strategies Implemented"],
  ];
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white md:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />
      </div>
      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-gold">Achievements</p>
          <h2 className="mt-4 font-serif text-3xl font-bold md:text-5xl">
            Our Results Speak for Themselves
          </h2>
          <p className="mt-4 text-white/70">
            Two decades of measurable outcomes — for our clients and for the firm.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="font-serif text-5xl font-bold text-gold md:text-6xl">{n}</div>
              <div className="mt-3 text-sm uppercase tracking-[0.15em] text-white/60">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-cream py-20 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-8 select-none text-center">
        <span className="font-serif text-[20vw] font-bold leading-none tracking-tighter text-navy/[0.04]">
          TESTIMONIALS
        </span>
      </div>
      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Client Stories</p>
          <h2 className="mt-4 font-serif text-3xl font-bold text-navy md:text-5xl">
            What Our Clients Say
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 6).map((t) => (
            <article key={t.name} className="card-elevated flex flex-col p-7">
              <div className="flex gap-0.5 text-gold">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-navy/80">"{t.quote}"</p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="font-serif text-base font-semibold text-navy">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Resources() {
  return (
    <section className="container-x py-20 md:py-28">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-xl">
          <p className="eyebrow">Resources</p>
          <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-navy md:text-5xl">
            Explore Our Latest Tax Resources
          </h2>
        </div>
        <Link to="/resources" className="btn-outline-navy text-sm">
          View All Articles
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {articles.map((a, i) => (
          <article key={a.title} className="card-elevated group flex flex-col overflow-hidden">
            <div className="relative h-48 overflow-hidden">
              <img
                src={i === 0 ? servicesImg : i === 1 ? teamImg : cityImg}
                alt=""
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-teal">
                {a.category}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">{a.date}</p>
              <h3 className="mt-2 font-serif text-xl font-semibold text-navy">{a.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{a.excerpt}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
                Read Article
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
