import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, ArrowRight } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <footer className="relative overflow-hidden bg-navy text-navy-foreground">
      <div className="pointer-events-none absolute -top-24 left-0 right-0 select-none text-center">
        <span className="font-serif text-[18vw] font-bold leading-none text-white/[0.04] md:text-[14vw]">
          Let's Connect
        </span>
      </div>

      <div className="container-x relative pt-24 pb-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link to="/" aria-label="Home" className="inline-block rounded-2xl bg-white px-5 py-3 shadow-lg shadow-black/30">
              <img
                src="/logo.png"
                alt="Stephen Accounting and Tax Service"
                className="h-16 w-auto"
              />
            </Link>
            {/* <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-gold" />
              <span className="text-xs font-semibold tracking-wide text-gold">Trusted by 100+ Clients</span>
            </div> */}
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Accounting, tax, and advisory services for growing businesses and the individuals
              who run them. Trusted by 100+ clients across the country.
            </p>
            <div className="mt-6 flex gap-3">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition hover:border-gold hover:text-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Quick Links</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              <li><Link to="/" hash="home" className="hover:text-gold">Home</Link></li>
              <li><Link to="/" hash="about" className="hover:text-gold">About</Link></li>
              <li><Link to="/" hash="services" className="hover:text-gold">Services</Link></li>
              <li><Link to="/" hash="reviews" className="hover:text-gold">Reviews</Link></li>
              <li><Link to="/" hash="contact" className="hover:text-gold">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Contact</h3>
            <ul className="mt-5 space-y-4 text-sm text-white/80">
              <li className="flex gap-3">
                {/* <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> */}
                {/* <span>420 Financial Plaza, Suite 1800<br />Chicago, IL 60601</span> */}
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href="tel:+14694077051">469-407-7051</a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href="mailto:info@stephenaccounting.com">info@stephenaccounting.com</a>
              </li>
            </ul>
            <div className="mt-5 text-sm text-white/60">
              <p className="font-medium text-white/85">Business Hours</p>
              <p>Mon–Fri: 8:00 AM – 6:00 PM</p>
              <p>Sat: 9:00 AM – 1:00 PM</p>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Newsletter</h3>
            <p className="mt-5 text-sm text-white/70">
              Quarterly tax tips and planning reminders - no spam, unsubscribe anytime.
            </p>
            {sent ? (
              <p className="mt-4 rounded-lg border border-gold/40 bg-gold/10 px-4 py-3 text-sm text-gold">
                Thanks - you're on the list.
              </p>
            ) : (
              <div className="mt-4 flex overflow-hidden rounded-full border border-white/15 bg-white/5">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="flex-1 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none"
                  aria-label="Email address"
                />
                <button
                  onClick={() => { if (email.includes("@")) { setSent(true); setEmail(""); } }}
                  className="grid w-12 place-items-center bg-gold text-navy transition hover:bg-gold/90"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Stephen Accounting & Tax Services. All rights reserved.</p>
          <a
            href="https://axistechgroup.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors"
          >
            Powered by AxisTechGroup
          </a>
        </div>
      </div>
    </footer>
  );
}
