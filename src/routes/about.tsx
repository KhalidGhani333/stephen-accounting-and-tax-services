import { createFileRoute } from "@tanstack/react-router";
import { Award, Compass, HeartHandshake, ShieldCheck, Sparkles, Target } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { ConsultationCTA } from "@/components/site/ConsultationCTA";
import founder from "@/assets/founder.jpg";
import professional from "@/assets/professional.jpg";
import team from "@/assets/team.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Stephen Accounting & Tax Services" },
      { name: "description", content: "Meet the licensed CPAs and advisors behind Stephen Accounting & Tax Services — 20+ years serving businesses with clarity and precision." },
      { property: "og:title", content: "About Stephen Accounting & Tax Services" },
      { property: "og:description", content: "Our story, team, and the values that drive our practice." },
    ],
  }),
  component: About,
});

const teamMembers = [
  { name: "Stephen Reeves, CPA", role: "Founder & Managing Partner", img: founder },
  { name: "Amelia Whitcombe, EA", role: "Director of Tax Strategy", img: professional },
  { name: "Marcus Doyle, CPA", role: "Partner, Business Advisory", img: team },
];

const values = [
  { Icon: ShieldCheck, title: "Integrity", text: "Straight answers, transparent fees, and advice we would give a family member." },
  { Icon: Target, title: "Precision", text: "Every number reviewed, every filing double-checked before it leaves our office." },
  { Icon: HeartHandshake, title: "Partnership", text: "We win when you win. Long-term relationships beat one-off transactions." },
  { Icon: Sparkles, title: "Excellence", text: "Continuing education, modern tools, and a standard that raises every year." },
  { Icon: Compass, title: "Clarity", text: "Financial data translated into plain language and clear next steps." },
  { Icon: Award, title: "Accountability", text: "Deadlines committed to, communication returned, promises kept." },
];

const credentials = ["AICPA Member", "NAEA Enrolled Agents", "IRS Authorized e-file Provider", "QuickBooks ProAdvisor", "Xero Certified Partner", "Peer Reviewed Firm"];

function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Firm"
        title="A financial partner built on trust and precision."
        subtitle="For more than two decades, Stephen Accounting & Tax Services has helped business owners and individuals navigate every stage of their financial life — with honest advice and meticulous execution."
        breadcrumb="About"
      />

      {/* Story + mission */}
      <section className="container-x py-20 md:py-28">
        <div className="grid gap-14 md:grid-cols-2 md:gap-20">
          <div>
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-navy md:text-4xl">
              From a single office to a firm serving 500+ clients nationwide.
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Stephen Reeves founded the firm in 2004 with a stubborn belief: small and mid-market
                businesses deserve the same caliber of advisory work that only Fortune 500 companies
                seemed to receive. What began as a one-person practice above a corner bookstore has
                grown into a team of licensed CPAs, EAs, and analysts serving hundreds of clients
                across the United States.
              </p>
              <p>
                We've built the firm slowly and deliberately. Every hire, every process, every piece
                of software has one purpose — to give clients answers they can trust and a partner
                who picks up the phone.
              </p>
            </div>
          </div>
          <div className="rounded-3xl bg-navy p-10 text-white md:p-12">
            <p className="eyebrow text-gold">Our Mission</p>
            <p className="mt-6 font-serif text-2xl leading-snug md:text-3xl">
              To bring calm confidence to every client's financial life — through precise numbers,
              proactive strategy, and relationships that outlast tax seasons.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              <Stat n="22" l="Years serving" />
              <Stat n="500+" l="Active clients" />
              <Stat n="14" l="Team members" />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Leadership</p>
            <h2 className="mt-4 font-serif text-3xl font-bold text-navy md:text-5xl">
              The people behind your numbers
            </h2>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((m) => (
              <article key={m.name} className="card-elevated overflow-hidden bg-white">
                <div className="aspect-[4/5] overflow-hidden bg-secondary">
                  <img src={m.img} alt={m.name} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-navy">{m.name}</h3>
                  <p className="mt-1 text-sm text-teal">{m.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container-x py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Core Values</p>
          <h2 className="mt-4 font-serif text-3xl font-bold text-navy md:text-5xl">
            What we stand for, in every engagement
          </h2>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map(({ Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-border bg-white p-7 transition hover:border-gold/40 hover:shadow-card">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold/15 text-gold">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold text-navy">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-navy py-14 text-white">
        <div className="container-x">
          <p className="eyebrow text-gold">Credentials & Certifications</p>
          <div className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
            {credentials.map((c) => (
              <span key={c} className="font-serif text-lg font-medium text-white/85">{c}</span>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-serif text-3xl font-bold text-gold">{n}</div>
      <div className="mt-1 text-xs uppercase tracking-wider text-white/60">{l}</div>
    </div>
  );
}
