import { createFileRoute, Navigate } from "@tanstack/react-router";
import { ShieldCheck, Target, HeartHandshake, Sparkles, Phone } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import founderImg from "@/assets/founder.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About - Stephen Accounting & Tax Services" },
      { name: "description", content: "Meet the licensed CPAs and advisors behind Stephen Accounting & Tax Services - 20+ years serving businesses with clarity and precision." },
      { property: "og:title", content: "About Stephen Accounting & Tax Services" },
      { property: "og:description", content: "Our story, team, and the values that drive our practice." },
    ],
  }),
  component: AboutRedirect,
});

function AboutRedirect() {
  return <Navigate to="/" hash="about" replace />;
}

const values = [
  { Icon: ShieldCheck, title: "Integrity", text: "Straight answers, transparent fees, and advice we would give a family member." },
  { Icon: Target, title: "Precision", text: "Every number reviewed, every filing double-checked before it leaves our office." },
  { Icon: HeartHandshake, title: "Partnership", text: "We win when you win. Long-term relationships beat one-off transactions." },
  { Icon: Sparkles, title: "Excellence", text: "Continuing education, modern tools, and a standard that raises every year." },
];

export function AboutSection() {
  return (
    <section className="container-x py-16 md:py-20">
      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        <Reveal from="left">
          <div>
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-navy md:text-4xl">
              From a single office to a firm serving 500+ clients nationwide.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
             Jonathan Stephen founded the firm with one belief: small and mid-market businesses
              deserve the same advisory work Fortune 500 companies receive. What began as a one-person
              practice has grown into a team of licensed CPAs, EAs, and analysts serving hundreds of
              clients across the United States.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-border pt-8">
              <Stat n="22" l="Years serving" />
              <Stat n="500+" l="Active clients" />
              <Stat n="14" l="Team members" />
            </div>
          </div>
        </Reveal>

        <Reveal from="right">
          <div className="space-y-4">
            <p className="eyebrow">Core Values</p>
            {values.map(({ Icon, title, text }) => (
              <div key={title} className="flex gap-4 rounded-2xl border border-border bg-white p-5">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold/15 text-gold">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-serif font-semibold text-navy">{title}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Founder profile */}
      <Reveal from="bottom" delay={100}>
        <div className="mt-14 overflow-hidden rounded-3xl bg-navy">
          <div className="grid md:grid-cols-[auto_1fr]">
            <div className="h-64 md:h-auto md:w-64 lg:w-80 shrink-0 overflow-hidden">
              <img
                src={founderImg}
                alt="Jonathan Stephen MSc., CPA"
                className="h-full w-full object-cover object-top"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <p className="eyebrow text-gold">Meet the Founder</p>
              <h3 className="mt-3 font-serif text-2xl font-bold text-white md:text-3xl">
                Jonathan Stephen <span className="text-gold">MSc., CPA</span>
              </h3>
              <p className="mt-2 text-sm font-medium tracking-wide text-white/60">
                Accountant&nbsp;•&nbsp;Entrepreneur&nbsp;•&nbsp;Investor&nbsp;•&nbsp;Business Strategist
              </p>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/70">
                With a Master's degree in Accounting and over two decades of hands-on experience,
                Jonathan built this firm around one principle   every client deserves clear numbers,
                honest advice, and a partner who is as invested in their success as they are.
              </p>
              <a
                href="tel:+14694077051"
                className="mt-7 inline-flex items-center gap-2 self-start rounded-full border border-gold/40 px-5 py-2.5 text-sm font-semibold text-gold transition hover:bg-gold/10"
              >
                <Phone className="h-4 w-4" />
                469-407-7051
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-serif text-2xl font-bold text-gold">{n}</div>
      <div className="mt-1 text-xs uppercase tracking-wider text-navy/50">{l}</div>
    </div>
  );
}
