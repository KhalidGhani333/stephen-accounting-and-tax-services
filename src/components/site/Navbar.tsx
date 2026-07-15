import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/resources", label: "Tax Resources" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-[0_1px_0_0_var(--border)]" : "bg-background"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center shrink-0" aria-label="Home">
          <img
            src="/logo.png"
            alt="Stephen Accounting and Tax Service"
            className="h-12 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-navy/80 transition-colors hover:text-navy"
              activeProps={{ className: "text-navy" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+18005550142"
            className="hidden items-center gap-2 text-sm font-medium text-navy md:flex"
          >
            <Phone className="h-4 w-4 text-gold" />
            (800) 555-0142
          </a>
          <Link to="/contact" className="btn-gold hidden md:inline-flex text-sm">
            Book Consultation
          </Link>
          <button
            className="grid h-11 w-11 place-items-center rounded-full border border-border lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-navy hover:bg-secondary"
              >
                {l.label}
              </Link>
            ))}
            <a href="tel:+18005550142" className="rounded-lg px-3 py-3 text-sm text-navy">
              <Phone className="mr-2 inline h-4 w-4 text-gold" />
              (800) 555-0142
            </a>
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-gold mt-2 text-sm">
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
