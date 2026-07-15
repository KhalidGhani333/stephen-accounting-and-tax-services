import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Download, FileText, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { ConsultationCTA } from "@/components/site/ConsultationCTA";
import { faqs } from "@/lib/site-data";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Tax Resources & FAQ — Stephen Accounting & Tax Services" },
      { name: "description", content: "Answers to common tax and accounting questions, key deadlines, document checklists, and downloadable planning guides." },
      { property: "og:title", content: "Tax Resources & FAQ" },
      { property: "og:description", content: "Practical answers, deadlines, and downloads from our team." },
    ],
  }),
  component: Resources,
});

const helpful = [
  { Icon: CalendarDays, title: "2026 Tax Deadline Calendar", text: "Every federal filing and estimated-tax due date, sorted by entity type.", label: "View Calendar" },
  { Icon: FileText, title: "Document Checklist", text: "Everything to gather before your tax appointment — personal and business.", label: "Download Checklist" },
  { Icon: Download, title: "Year-End Planning Guide", text: "A 24-page PDF walking through year-end tax strategies for owners.", label: "Get the Guide" },
];

function Resources() {
  return (
    <>
      <PageHero
        eyebrow="Knowledge Center"
        title="Tax resources and answers to your most common questions."
        subtitle="Straight answers from licensed professionals — plus the downloads, deadlines, and checklists our clients rely on."
        breadcrumb="Tax Resources"
      />

      <section className="container-x py-20 md:py-28">
        <div className="grid gap-14 md:grid-cols-[1fr_2fr] md:gap-20">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-navy md:text-4xl">
              Answers to the questions we hear most often
            </h2>
            <p className="mt-4 text-muted-foreground">
              Can't find your question? Send us a note and we'll get back to you within one
              business day.
            </p>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
              Ask a question
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <FaqList />
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Helpful Resources</p>
            <h2 className="mt-4 font-serif text-3xl font-bold text-navy md:text-5xl">
              Tools and guides to keep you on track
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {helpful.map(({ Icon, title, text, label }) => (
              <article key={title} className="card-elevated flex flex-col bg-white p-8">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-navy text-gold">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-serif text-xl font-semibold text-navy">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
                <button className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-gold">
                  {label}
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}

function FaqList() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <div className="divide-y divide-border rounded-3xl border border-border bg-white">
      {faqs.map((f, i) => {
        const open = openIdx === i;
        return (
          <div key={f.q}>
            <button
              className="flex w-full items-center gap-4 px-6 py-5 text-left"
              onClick={() => setOpenIdx(open ? null : i)}
              aria-expanded={open}
            >
              <span className="flex-1 font-serif text-base font-semibold text-navy md:text-lg">
                {f.q}
              </span>
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </span>
            </button>
            {open && (
              <div className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground animate-fade-up">
                {f.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
