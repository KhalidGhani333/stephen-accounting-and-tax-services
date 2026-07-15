import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import professional from "@/assets/professional.jpg";

export function ConsultationCTA() {
  return (
    <section className="container-x py-20 md:py-28">
      <div className="relative overflow-hidden rounded-3xl bg-navy shadow-elegant">
        <div className="grid items-center gap-0 md:grid-cols-2">
          <div className="relative order-2 h-64 md:order-1 md:h-full md:min-h-[420px]">
            <img
              src={professional}
              alt="Senior accounting advisor"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/40 to-transparent md:from-transparent md:to-navy" />
          </div>
          <div className="order-1 p-8 md:order-2 md:p-14 lg:p-16">
            <p className="eyebrow text-gold">Free Consultation</p>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-white md:text-5xl">
              Book Your Free Accounting & Tax Consultation Today
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/75">
              A 30-minute call with a licensed advisor. We'll review your books, flag opportunities,
              and outline the fastest path to peace of mind — no obligation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-gold">
                Schedule Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="tel:+18005550142" className="btn-outline-light">
                Call (800) 555-0142
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
