import { CalendarCheck, LineChart, Handshake } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Schedule a Consultation",
    text: "Book a complimentary 30-minute call. We listen, review your situation, and outline where we can help.",
    Icon: CalendarCheck,
    tone: "navy" as const,
  },
  {
    num: "02",
    title: "Analyze & Strategize",
    text: "Our team audits your books and taxes, then delivers a tailored plan with clear priorities and expected ROI.",
    Icon: LineChart,
    tone: "gold" as const,
  },
  {
    num: "03",
    title: "Manage & Support",
    text: "We execute month over month — reporting, filings, planning calls — so you stay ahead year-round.",
    Icon: Handshake,
    tone: "navy" as const,
  },
];

export function HowItWorks() {
  return (
    <section className="container-x py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">How It Works</p>
        <h2 className="mt-4 font-serif text-3xl font-bold text-navy md:text-5xl">
          Our Simple & Transparent Process
        </h2>
        <p className="mt-4 text-muted-foreground">
          A straightforward path from first call to ongoing partnership — no jargon, no surprises.
        </p>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {steps.map(({ num, title, text, Icon, tone }) => {
          const isGold = tone === "gold";
          return (
            <div
              key={num}
              className={`group relative overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                isGold ? "bg-gold text-navy" : "bg-navy text-white"
              }`}
            >
              <div
                className={`grid h-12 w-12 place-items-center rounded-xl ${
                  isGold ? "bg-navy text-gold" : "bg-gold/15 text-gold"
                }`}
              >
                <Icon className="h-6 w-6" />
              </div>
              <div
                className={`mt-8 font-serif text-6xl font-bold leading-none ${
                  isGold ? "text-navy/15" : "text-white/10"
                }`}
              >
                {num}
              </div>
              <h3 className="mt-2 font-serif text-2xl font-semibold">{title}</h3>
              <p className={`mt-3 text-sm leading-relaxed ${isGold ? "text-navy/80" : "text-white/70"}`}>
                {text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
