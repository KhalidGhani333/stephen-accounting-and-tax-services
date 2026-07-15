import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Download, FileText, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { ConsultationCTA } from "@/components/site/ConsultationCTA";
import { Reveal } from "@/components/site/Reveal";
import { faqs, articles } from "@/lib/site-data";
import servicesImg from "@/assets/services.jpg";
import teamImg from "@/assets/team.jpg";
import cityImg from "@/assets/city.jpg";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Tax Resources & FAQ - Stephen Accounting & Tax Services" },
      { name: "description", content: "Answers to common tax and accounting questions, key deadlines, document checklists, and downloadable planning guides." },
      { property: "og:title", content: "Tax Resources & FAQ" },
      { property: "og:description", content: "Practical answers, deadlines, and downloads from our team." },
    ],
  }),
  component: Resources,
});

const helpful = [
  { Icon: CalendarDays, title: "2026 Tax Deadline Calendar", text: "Every federal filing and estimated-tax due date, sorted by entity type.", label: "View Calendar" },
  { Icon: FileText, title: "Document Checklist", text: "Everything to gather before your tax appointment - personal and business.", label: "Download Checklist" },
  { Icon: Download, title: "Year-End Planning Guide", text: "A 24-page PDF walking through year-end tax strategies for owners.", label: "Get the Guide" },
];

const coverImgs = [servicesImg, teamImg, cityImg];

function Resources() {
  return (
    <>
      <PageHero
        eyebrow="Knowledge Center"
        title="Tax resources and answers to your most common questions."
        subtitle="Straight answers from licensed professionals - plus the downloads, deadlines, and checklists our clients rely on."
        breadcrumb="Tax Resources"
      />

      {/* FAQ */}
      <section className="container-x py-20 md:py-28">
        <div className="grid gap-14 md:grid-cols-[1fr_2fr] md:gap-20">
          <Reveal from="left">
            <div>
              <p className="eyebrow">FAQ</p>
              <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-navy md:text-4xl">
                Answers to the questions we hear most often
              </h2>
              <p className="mt-4 text-muted-foreground">
                Can't find your question? Send us a note and we'll get back to you within one
                business day.
              </p>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gold group/link">
                Ask a question
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </Reveal>
          <Reveal from="right">
            <FaqList />
          </Reveal>
        </div>
      </section>

      {/* Articles */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-x">
          <Reveal from="fade">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-xl">
                <p className="eyebrow">Articles</p>
                <h2 className="mt-4 font-serif text-3xl font-bold text-navy md:text-5xl">
                  Expert Insights from Our Team
                </h2>
              </div>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {articles.map((a, i) => (
              <Reveal key={a.slug} delay={i * 80}>
                <article className="card-elevated group flex flex-col overflow-hidden bg-white h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={coverImgs[i % coverImgs.length]}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
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
        </div>
      </section>

      {/* Downloads */}
      <section className="container-x py-20 md:py-28">
        <Reveal from="fade">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Helpful Resources</p>
            <h2 className="mt-4 font-serif text-3xl font-bold text-navy md:text-5xl">
              Tools and guides to keep you on track
            </h2>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {helpful.map(({ Icon, title, text, label }, i) => (
            <Reveal key={title} delay={i * 90}>
              <article className="card-elevated flex flex-col bg-white p-8 h-full">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-navy text-gold">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-serif text-xl font-semibold text-navy">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
                <button className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-gold group/link">
                  {label}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                </button>
              </article>
            </Reveal>
          ))}
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
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold/15 text-gold transition-transform duration-300" style={{ transform: open ? "rotate(0deg)" : "rotate(0deg)" }}>
                {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-400 ease-out ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <div className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
