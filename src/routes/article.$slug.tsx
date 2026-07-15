import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CalendarDays, Clock, User } from "lucide-react";
import { articles } from "@/lib/site-data";
import { ConsultationCTA } from "@/components/site/ConsultationCTA";
import { Reveal } from "@/components/site/Reveal";
import servicesImg from "@/assets/services.jpg";
import teamImg from "@/assets/team.jpg";
import cityImg from "@/assets/city.jpg";

const coverImages = [servicesImg, teamImg, cityImg];

export const Route = createFileRoute("/article/$slug")({
  loader: ({ params }) => {
    const article = articles.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.article.title} - Stephen Accounting & Tax Services` },
      { name: "description", content: loaderData?.article.excerpt },
    ],
  }),
  component: ArticleDetail,
  notFoundComponent: () => (
    <div className="flex min-h-[50vh] items-center justify-center text-center">
      <div>
        <p className="eyebrow">404</p>
        <h1 className="mt-3 font-serif text-4xl font-bold text-navy">Article not found</h1>
        <Link to="/" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>
      </div>
    </div>
  ),
});

function ArticleDetail() {
  const { article } = Route.useLoaderData();
  const articleIndex = articles.findIndex((a) => a.slug === article.slug);
  const related = articles.filter((_, i) => i !== articleIndex).slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy pt-20 pb-0 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-gold/25 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-teal/20 blur-3xl" />
        </div>
        <div className="container-x relative animate-fade-up pb-16">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-gold transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
          <span className="mt-6 inline-block rounded-full bg-teal/20 px-3 py-1 text-xs font-semibold text-teal">
            {article.category}
          </span>
          <h1 className="mt-4 max-w-3xl font-serif text-3xl font-bold leading-tight md:text-5xl">
            {article.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-white/60">
            <span className="flex items-center gap-2">
              <User className="h-4 w-4 text-gold" /> {article.author}
            </span>
            <span className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-gold" /> {article.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gold" /> {article.readTime}
            </span>
          </div>
        </div>
        <div className="relative h-72 md:h-96">
          <img
            src={coverImages[articleIndex % coverImages.length]}
            alt={article.title}
            className="h-full w-full object-cover object-top opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-navy/30" />
        </div>
      </section>

      {/* Body */}
      <section className="container-x py-16 md:py-24">
        <div className="grid gap-14 lg:grid-cols-[1fr_320px]">
          {/* Article content */}
          <article className="prose-article">
            {article.sections.map((s, i) => (
              <Reveal key={i} delay={i * 40}>
                <div className="mb-8">
                  {s.h && (
                    <h2 className="mb-3 font-serif text-2xl font-bold text-navy md:text-3xl">
                      {s.h}
                    </h2>
                  )}
                  {s.p && (
                    <p className="leading-relaxed text-navy/75">{s.p}</p>
                  )}
                  {s.items && (
                    <ul className="mt-3 space-y-2">
                      {s.items.map((item, j) => (
                        <li key={j} className="flex gap-3 text-navy/75">
                          <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gold" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            <Reveal from="right">
              <div className="rounded-2xl bg-navy p-7 text-white">
                <p className="eyebrow text-gold">Need Advice?</p>
                <p className="mt-3 font-serif text-lg font-semibold">
                  Talk to a licensed CPA about your specific situation.
                </p>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">
                  Every business is different. Our advisors can apply these strategies to your exact numbers.
                </p>
                <Link to="/contact" className="btn-gold mt-6 w-full justify-center">
                  Book Free Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            {related.length > 0 && (
              <Reveal from="right" delay={100}>
                <div className="rounded-2xl border border-border bg-white p-7">
                  <p className="eyebrow">Related Articles</p>
                  <div className="mt-5 space-y-5">
                    {related.map((r) => (
                      <Link key={r.slug} to="/article/$slug" params={{ slug: r.slug }} className="group block">
                        <span className="text-xs font-semibold uppercase tracking-wider text-teal">{r.category}</span>
                        <p className="mt-1 font-serif text-base font-semibold text-navy group-hover:text-gold transition-colors leading-snug">
                          {r.title}
                        </p>
                        <span className="mt-1 text-xs text-muted-foreground">{r.readTime}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}

            <Reveal from="right" delay={150}>
              <div className="rounded-2xl border border-border bg-cream p-7">
                <p className="eyebrow">About the Author</p>
                <p className="mt-3 font-serif text-lg font-semibold text-navy">{article.author}</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  A licensed professional at Stephen Accounting & Tax Services with over a decade of experience advising businesses on tax strategy and financial planning.
                </p>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
