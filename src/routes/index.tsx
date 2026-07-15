import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, Star } from "lucide-react";
  import heroImg from "@/assets/hero.jpg";
  import heroImg2 from "@/assets/hero2.jpg";
  import cityImg from "@/assets/city.jpg";
  import teamImg from "@/assets/team.jpg";
  import servicesImg from "@/assets/services.jpg";
  import advisorImg from "@/assets/advisor.jpg";
  import professionalImg from "@/assets/professional.jpg";
  import team2Img from "@/assets/team2.jpg";
  import img2 from "@/assets/2.jpg";
  import { services, articles } from "@/lib/site-data";
  import { ConsultationCTA } from "@/components/site/ConsultationCTA";
  import { Reveal } from "@/components/site/Reveal";
  import { AboutSection } from "./about";
  import { ServicesSection } from "./services";
import { ContactSection } from "./contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stephen Accounting & Tax Services - Trusted Financial Advisory" },
      { name: "description", content: "Premium accounting, tax preparation, payroll and business advisory for growing businesses. 20+ years experience, 1,200+ tax returns filed, 98% client retention." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <section id="about" className="scroll-mt-24 pt-6 md:pt-10">
        <AboutSection />
      </section>
      <section id="services" className="scroll-mt-24 bg-cream">
        <ServicesSection />
      </section>
      <WhyChooseUs />
      <QuoteBanner />
      <Achievements />
      <section id="reviews" className="scroll-mt-24 bg-cream">
        <Reviews />
      </section>
      <section id="contact" className="scroll-mt-24">
        <ContactSection />
      </section>
      <ConsultationCTA />
    </>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy text-white">
      {/* Background video - place your video at public/hero-video.mp4 */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={heroImg}
        className="absolute inset-0 h-full w-full object-cover opacity-35 animate-video-zoom"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        {/* Fallback: shows poster image if video is not found */}
      </video>

      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/65 via-navy/75 to-navy" />

      <div className="container-x relative pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="grid items-center gap-14 md:grid-cols-[minmax(0,1fr)_minmax(24rem,34rem)]">
          <div>
            <p
              className="eyebrow text-gold animate-hero"
              style={{ animationDelay: "100ms" }}
            >
              Accounting · Tax · Advisory
            </p>
            <h1
              className="mt-5 font-serif text-4xl font-bold leading-[1.05] md:text-6xl lg:text-7xl animate-hero"
              style={{ animationDelay: "250ms" }}
            >
              Accounting & Tax Solutions <span className="text-gold">You Can Trust</span>
            </h1>
            <p
              className="mt-6 max-w-xl text-lg leading-relaxed text-white/75 animate-hero"
              style={{ animationDelay: "420ms" }}
            >
              Licensed CPAs and tax advisors helping ambitious businesses and individuals keep more of
              what they earn - with clarity, precision, and year-round support.
            </p>
            <div
              className="mt-9 flex flex-wrap gap-3 animate-hero"
              style={{ animationDelay: "580ms" }}
            >
              <Link to="/" hash="contact" className="btn-gold">
                Book a Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/" hash="services" className="btn-outline-light">
                Explore Services
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/10 shadow-[0_45px_120px_rgba(0,0,0,0.18)] backdrop-blur-xl">
            <img
              src={heroImg2}
              alt="Trusted advisor working with clients"
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-navy/10 to-transparent" />
          </div>
        </div>

        <div
          className="mt-16 grid gap-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm sm:grid-cols-3 md:mt-20 md:p-8 animate-hero"
          style={{ animationDelay: "720ms" }}
        >
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

        <div
          className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 animate-hero"
          style={{ animationDelay: "880ms" }}
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">Trusted by</span>
          {["NORTHLINE LOGISTICS", "VERTEX MFG", "EMBER STUDIO"].map((name) => (
            <span key={name} className="font-serif text-lg font-semibold tracking-wide text-white/40">{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

const serviceCardImgs = [servicesImg, cityImg, team2Img, advisorImg, professionalImg, img2];

function ServicesOverview() {
  return (
    <section className="container-x py-20 md:py-28">
      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        <Reveal from="left">
          <div>
            <p className="eyebrow">Our Services</p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              A full-service accounting practice built for owners who want more than tax filing.
              We combine day-to-day bookkeeping with the strategic advice most firms leave for
              the last week of March.
            </p>
          </div>
        </Reveal>
        <Reveal from="right">
          <h2 className="font-serif text-3xl font-bold leading-tight text-navy md:text-5xl">
            Expert Financial Solutions for Your Business
          </h2>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ slug, title, icon: Icon, short }, i) => (
          <Reveal key={slug} delay={i * 80}>
            <article className="card-elevated group flex flex-col overflow-hidden h-full">
              <div className="relative h-40 overflow-hidden">
                <img
                  src={serviceCardImgs[i % serviceCardImgs.length]}
                  alt=""
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
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
                  hash={slug}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold group/link"
                >
                  Learn More
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </article>
          </Reveal>
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
        className="absolute inset-0 h-full w-full object-cover object-top opacity-25"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/70" />
      <div className="container-x relative">
        <Reveal from="left">
          <div className="max-w-4xl">
            <span className="font-serif text-6xl leading-none text-gold">"</span>
            <p className="mt-2 font-serif text-2xl leading-[1.35] text-white md:text-4xl lg:text-[2.75rem]">
              Trusted accounting is not paperwork. It's the quiet confidence of knowing every number
              in your business tells the truth - and works for you.
            </p>
            <p className="mt-8 text-sm uppercase tracking-[0.2em] text-gold">
              - Stephen Reeves, Founder & Managing Partner
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

function WhyChooseUs() {
  const points = [
    { title: "Experienced Professionals", text: "Licensed CPAs and EAs with 20+ years advising businesses across industries." },
    { title: "Accurate & Transparent Processes", text: "Documented workflows, fixed-fee pricing, and quarterly reviews - no surprises." },
    { title: "Tailored Solutions", text: "We build service plans around your entity structure, goals, and growth stage." },
    { title: "Timely Filing", text: "Deadlines tracked and communicated weeks in advance. We file early, not late." },
  ];
  return (
    <section className="bg-cream">
      <div className="container-x grid gap-14 py-20 md:grid-cols-2 md:gap-16 md:py-28">
        <Reveal from="left">
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
                src={advisorImg}
                alt="Jonathan Stephen MSc., CPA"
                className="h-72 w-full object-cover object-top md:h-96"
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>
        <div className="flex flex-col gap-6 md:pt-24">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={i * 90} from="right">
              <div className="flex gap-5 rounded-2xl bg-white p-6 shadow-card">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                  <Check className="h-5 w-5" strokeWidth={2.5} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-serif text-lg font-semibold text-navy">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </div>
            </Reveal>
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
        <Reveal from="fade">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-gold">Achievements</p>
            <h2 className="mt-4 font-serif text-3xl font-bold md:text-5xl">
              Our Results Speak for Themselves
            </h2>
            <p className="mt-4 text-white/70">
              Two decades of measurable outcomes - for our clients and for the firm.
            </p>
          </div>
        </Reveal>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([n, l], i) => (
            <Reveal key={l} delay={i * 100}>
              <div className="text-center">
                <div className="font-serif text-5xl font-bold text-gold md:text-6xl">{n}</div>
                <div className="mt-3 text-sm uppercase tracking-[0.15em] text-white/60">{l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const dummyReviews = [
  { name: "Marcus T.", role: "Owner, Northline Logistics", rating: 5, quote: "Stephen's team saved us over $40,000 in taxes last year through proactive planning we never knew was possible. They treat our business like their own.", platform: "Google" },
  { name: "Rachel Kim", role: "CEO, Ember Studio", rating: 5, quote: "After three accountants who always surprised me with April bills, I finally have a firm that communicates all year. The peace of mind is worth every dollar.", platform: "Google" },
  { name: "David Okonkwo", role: "CFO, Vertex Manufacturing", rating: 5, quote: "Bookkeeping is spotless, payroll runs without a hitch, and our year-end close went from 6 weeks to 10 days. Exceptional team.", platform: "Yelp" },
  { name: "Priya Sharma", role: "Founder, Bloom Wellness", rating: 5, quote: "I was drowning in receipts and terrified of the IRS. Stephen's team handled everything, filed an amended return, and got me a refund. I cannot recommend them enough.", platform: "Google" },
  { name: "James Caldwell", role: "Partner, Caldwell & Grey Law", rating: 5, quote: "We moved our firm's accounting here two years ago and haven't looked back. Their knowledge of professional services tax law is second to none.", platform: "BBB" },
  { name: "Sofia Mendes", role: "Director, ClearPath Realty", rating: 5, quote: "From quarterly estimated taxes to our multi-state filings, they handle everything on time with zero drama. I finally trust my books.", platform: "Google" },
];

function Reviews() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-x">
        <Reveal from="fade">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <p className="eyebrow">Client Reviews</p>
            <h2 className="mt-4 font-serif text-3xl font-bold text-navy md:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-3 text-muted-foreground">
              Trusted by 500+ businesses   here's what they're saying about us.
            </p>
            <div className="mt-5 flex items-center justify-center gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
              <span className="ml-2 font-serif text-lg font-bold text-navy">5.0</span>
              <span className="ml-1 text-sm text-muted-foreground">· 200+ reviews</span>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {dummyReviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 70}>
              <article className="card-elevated flex flex-col p-6 h-full">
                <div className="flex items-start justify-between gap-3">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-gold to-teal font-serif text-sm font-bold text-navy">
                    {r.name.charAt(0)}
                  </div>
                  <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">{r.platform}</span>
                </div>
                <div className="mt-3 flex gap-0.5 text-gold">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/80">"{r.quote}"</p>
                <div className="mt-5 border-t border-border pt-4">
                  <p className="font-serif text-base font-semibold text-navy">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.role}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Resources() {
  const coverImgs = [servicesImg, teamImg, cityImg];
  return (
    <section className="container-x py-20 md:py-28">
      <Reveal from="fade">
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
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {articles.map((a, i) => (
          <Reveal key={a.slug} delay={i * 80}>
            <article className="card-elevated group flex flex-col overflow-hidden h-full">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={coverImgs[i % coverImgs.length]}
                  alt=""
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-teal">
                  {a.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{a.date} · {a.readTime}</p>
                <h3 className="mt-2 font-serif text-xl font-semibold text-navy">{a.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{a.excerpt}</p>
                <Link
                  to="/article/$slug"
                  params={{ slug: a.slug }}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold group/link"
                >
                  Read Article
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
