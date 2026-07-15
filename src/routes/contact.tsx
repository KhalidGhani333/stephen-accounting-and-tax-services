import { createFileRoute, Navigate } from "@tanstack/react-router";
import { ArrowRight, Check, Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - Stephen Accounting & Tax Services" },
      { name: "description", content: "Book a free consultation with our team. Call, email, or visit our Chicago office. We respond within one business day." },
      { property: "og:title", content: "Contact Stephen Accounting & Tax Services" },
      { property: "og:description", content: "Book your free consultation. We respond within one business day." },
    ],
  }),
  component: ContactRedirect,
});

function ContactRedirect() {
  return <Navigate to="/" hash="contact" replace />;
}

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  message: string;
};

export function ContactSection() {
  return (
    <section className="container-x py-16 md:py-20">
      <Reveal from="fade">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <p className="eyebrow">Get In Touch</p>
          <h2 className="mt-4 font-serif text-3xl font-bold text-navy md:text-4xl">
            Let's talk about your numbers
          </h2>
          <p className="mt-3 text-muted-foreground">
            Book a free 30-minute consultation   no pressure, no obligation.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Reveal from="left">
          <ConsultationForm />
        </Reveal>
        <Reveal from="right" delay={80}>
          <ContactDetails />
        </Reveal>
      </div>
    </section>
  );
}

function ConsultationForm() {
  const [form, setForm] = useState<FormState>({
    name: "", email: "", phone: "", service: "", date: "", message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = <K extends keyof FormState>(k: K, v: FormState[K]) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const submit = () => {
    const e: typeof errors = {};
    if (!form.name.trim() || form.name.trim().length < 2) e.name = "Please enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Please enter a valid email.";
    if (!form.phone.trim() || form.phone.replace(/\D/g, "").length < 7) e.phone = "Please enter a valid phone number.";
    if (!form.service) e.service = "Please select a service.";
    if (!form.date) e.date = "Please choose a preferred date.";
    if (!form.message.trim() || form.message.trim().length < 10) e.message = "A short message helps us prepare.";
    setErrors(e);
    if (Object.keys(e).length === 0) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-border bg-white p-10 md:p-14">
        <div className="grid h-14 w-14 place-items-center rounded-full bg-gold text-navy">
          <Check className="h-6 w-6" strokeWidth={3} />
        </div>
        <h2 className="mt-6 font-serif text-3xl font-bold text-navy md:text-4xl">
          Thanks, {form.name.split(" ")[0]}. Your request is in.
        </h2>
        <p className="mt-4 max-w-lg text-muted-foreground leading-relaxed">
          One of our advisors will reach out within one business day to confirm your consultation.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-border bg-white p-8 md:p-10">
      <p className="eyebrow">Consultation Request</p>
      <h3 className="mt-3 font-serif text-2xl font-bold text-navy">Book your free consultation</h3>
      <p className="mt-2 text-sm text-muted-foreground">All fields required. Your information is confidential.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Full Name" error={errors.name}>
          <input className="input" value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Jane Doe" maxLength={100} />
        </Field>
        <Field label="Email" error={errors.email}>
          <input type="email" className="input" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="jane@company.com" maxLength={255} />
        </Field>
        <Field label="Phone" error={errors.phone}>
          <input type="tel" className="input" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="469-407-7051" maxLength={20} />
        </Field>
        <Field label="Service Interested In" error={errors.service}>
          <select className="input" value={form.service} onChange={(e) => update("service", e.target.value)}>
            <option value="">Select a service…</option>
            {services.map((s) => (<option key={s.slug} value={s.slug}>{s.title}</option>))}
            <option value="other">Not sure yet</option>
          </select>
        </Field>
        <Field label="Preferred Date" error={errors.date}>
          <input type="date" className="input" value={form.date} onChange={(e) => update("date", e.target.value)} />
        </Field>
        <div className="sm:col-span-2">
          <Field label="Message" error={errors.message}>
            <textarea className="input min-h-28 resize-y" value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="Tell us a bit about your business…" maxLength={1000} />
          </Field>
        </div>
      </div>

      <button onClick={submit} className="btn-gold mt-6">
        Submit Request
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-navy/70">{label}</span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-destructive">{error}</span>}
      <style>{`.input{width:100%;border:1px solid var(--border);background:#fff;border-radius:0.75rem;padding:0.75rem 1rem;font-size:0.95rem;color:var(--navy);outline:none;transition:border-color .15s, box-shadow .15s;}.input:focus{border-color:var(--gold);box-shadow:0 0 0 4px oklch(0.74 0.14 82 / 0.15);}`}</style>
    </label>
  );
}

function ContactDetails() {
  return (
    <aside className="space-y-5">
      <div className="rounded-3xl bg-navy p-7 text-white">
        <p className="eyebrow text-gold">Contact Details</p>
        <ul className="mt-5 space-y-4 text-sm">
          <li className="flex gap-4">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
            <div>
              <p className="font-semibold text-white">Office</p>
              <p className="text-white/70">420 Financial Plaza, Suite 1800<br />Chicago, IL 60601</p>
            </div>
          </li>
          <li className="flex gap-4">
            <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
            <div>
              <p className="font-semibold text-white">Phone</p>
              <a href="tel:+14694077051" className="text-white/70 hover:text-gold">469-407-7051</a>
            </div>
          </li>
          <li className="flex gap-4">
            <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
            <div>
              <p className="font-semibold text-white">Email</p>
              <a href="mailto:hello@stephenaccounting.com" className="text-white/70 hover:text-gold">hello@stephenaccounting.com</a>
            </div>
          </li>
        </ul>
      </div>

      <div className="rounded-3xl border border-border bg-white p-7">
        <p className="eyebrow">Business Hours</p>
        <ul className="mt-4 space-y-2 text-sm text-navy/85">
          <li className="flex justify-between"><span>Monday – Friday</span><span className="font-semibold">8:00 AM – 6:00 PM</span></li>
          <li className="flex justify-between"><span>Saturday</span><span className="font-semibold">9:00 AM – 1:00 PM</span></li>
          <li className="flex justify-between"><span>Sunday</span><span className="text-muted-foreground">Closed</span></li>
        </ul>
      </div>

      <div className="rounded-3xl border border-border bg-white p-7">
        <p className="eyebrow">Follow Us</p>
        <div className="mt-4 flex gap-3">
          {[Linkedin, Twitter, Facebook].map((Icon, i) => (
            <a key={i} href="#" aria-label="Social link" className="grid h-11 w-11 place-items-center rounded-full border border-border text-navy transition hover:border-gold hover:text-gold">
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
