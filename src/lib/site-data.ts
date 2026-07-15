import {
  BookOpen,
  Calculator,
  Users,
  TrendingUp,
  ClipboardCheck,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  short: string;
  description: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: "bookkeeping",
    title: "Bookkeeping & Accounting",
    icon: BookOpen,
    short: "Accurate books, reconciled monthly, ready for tax season and growth decisions.",
    description:
      "We keep your ledgers clean, your reconciliations timely, and your reports investor-ready — so you always know where your business stands.",
    bullets: [
      "Monthly reconciliation of bank, credit card, and merchant accounts",
      "Accrual and cash-basis financial statements",
      "Chart of accounts design tailored to your industry",
      "QuickBooks, Xero, and NetSuite implementation",
    ],
  },
  {
    slug: "tax-preparation",
    title: "Tax Preparation & Filing",
    icon: Calculator,
    short: "Federal, state, and local returns prepared by licensed professionals — filed on time.",
    description:
      "Individual, corporate, partnership, and non-profit filings handled with meticulous review and audit-ready documentation.",
    bullets: [
      "Form 1040, 1120, 1120-S, 1065, and 990 preparation",
      "Multi-state and international filings",
      "E-filing with confirmation and digital records",
      "Amended returns and prior-year cleanup",
    ],
  },
  {
    slug: "payroll",
    title: "Payroll Management",
    icon: Users,
    short: "Full-service payroll with tax filings, direct deposit, and compliance reporting.",
    description:
      "From two employees to two hundred, we run reliable payroll cycles, remit taxes on time, and keep you compliant across every jurisdiction.",
    bullets: [
      "Weekly, bi-weekly, and semi-monthly payroll runs",
      "941, 940, W-2, and 1099 preparation and filing",
      "Direct deposit and pay stub portals",
      "Workers' compensation and benefits reporting",
    ],
  },
  {
    slug: "advisory",
    title: "Business Advisory",
    icon: TrendingUp,
    short: "CFO-level insight without the overhead — budgets, forecasts, and growth strategy.",
    description:
      "We become an extension of your leadership team, translating numbers into decisions that improve margins and unlock capital.",
    bullets: [
      "Cash flow forecasting and scenario modeling",
      "KPI dashboards and monthly business reviews",
      "M&A due diligence and valuation support",
      "Entity structuring and succession planning",
    ],
  },
  {
    slug: "tax-planning",
    title: "Tax Planning",
    icon: ClipboardCheck,
    short: "Year-round strategy that legally minimizes your liability, not last-minute scrambling.",
    description:
      "We identify deductions, credits, and structural moves months in advance so April is a formality, not a crisis.",
    bullets: [
      "Quarterly estimated tax review",
      "R&D, Section 179, and QBI deduction planning",
      "Retirement plan and equity compensation strategy",
      "State residency and nexus optimization",
    ],
  },
  {
    slug: "audit-support",
    title: "Audit Support",
    icon: ShieldCheck,
    short: "Representation and preparation when the IRS, state, or an external auditor comes calling.",
    description:
      "Licensed representation, document assembly, and communication management — you never face an audit alone.",
    bullets: [
      "IRS and state examination representation",
      "Financial statement audit readiness",
      "Response drafting for CP notices and letters",
      "Internal control review and remediation",
    ],
  },
];

export const faqs = [
  {
    q: "When are federal tax returns due for individuals and businesses?",
    a: "Individual 1040 returns are due April 15 (or the next business day). C-corporation returns are due April 15, and S-corp and partnership returns are due March 15. Extensions push those dates to October 15 and September 15 respectively, but any tax owed is still due on the original date.",
  },
  {
    q: "What documents should I gather before my tax appointment?",
    a: "For individuals: W-2s, 1099s, mortgage interest (1098), property tax records, charitable receipts, and last year's return. For businesses: year-end financials, bank statements, payroll reports, asset purchases, and prior returns. We provide a detailed checklist after your first consultation.",
  },
  {
    q: "Which deductions are most commonly missed by small businesses?",
    a: "Home office (with the safe-harbor method), vehicle mileage, professional development, business meals at the 50% rate, health insurance premiums for self-employed owners, retirement contributions, and Section 179 equipment expensing. A quarterly review typically surfaces $3,000–$15,000 in overlooked deductions.",
  },
  {
    q: "How is filing taxes for a small business different from personal taxes?",
    a: "Business filings involve entity-specific forms (1120, 1120-S, 1065, or Schedule C), quarterly estimated payments, payroll tax reconciliations, and depreciation schedules. Choosing the right entity structure and accounting method has a meaningful effect on your effective tax rate.",
  },
  {
    q: "How often should I have my books reconciled?",
    a: "We recommend monthly reconciliation for any business with more than a handful of transactions. Monthly close catches errors while they're still fresh, produces timely reports for decision-making, and prevents the year-end scramble that inflates fees and audit risk.",
  },
  {
    q: "What do I need to stay compliant with payroll?",
    a: "Accurate employee classification (W-2 vs 1099), on-time federal and state withholding deposits, quarterly 941 filings, annual 940 and W-2/1099 filings, and state-specific requirements like SUI and workers' comp. Missed deposits carry penalties that compound quickly.",
  },
  {
    q: "When do I need to pay quarterly estimated taxes?",
    a: "If you expect to owe $1,000 or more (or $500 for corporations) when you file, the IRS requires quarterly estimates on April 15, June 15, September 15, and January 15. Underpayment triggers penalties even if you pay in full by April.",
  },
  {
    q: "How do I choose the right accountant for my business?",
    a: "Look for a licensed CPA or EA with experience in your industry, transparent fixed-fee pricing, proactive year-round communication (not just at tax time), and demonstrable use of modern accounting software. Ask for references from clients of comparable size.",
  },
];

export const testimonials = [
  { name: "Marcus Chen", role: "CEO, Northline Logistics", quote: "Stephen's team caught a payroll classification issue our previous CPA missed for three years. They saved us over $80,000 in back taxes and set up systems so it will never happen again.", rating: 5 },
  { name: "Priya Ramanathan", role: "Founder, Ember Studio", quote: "I finally have a real financial partner. Monthly calls, forward-looking planning, and my quarterly estimates arrive without me asking. This is what having a CFO should feel like.", rating: 5 },
  { name: "David Whitfield", role: "Managing Partner, Whitfield & Row", quote: "We moved our entire firm's books over during peak season and their team made the transition invisible to our staff. Six months in and reporting is faster and cleaner than ever.", rating: 5 },
  { name: "Sofia Alvarez", role: "Owner, Alvarez Family Dental", quote: "They restructured my S-corp compensation and set up a solo 401(k) that saved me $23,400 in the first year alone. Worth every penny of their fee, many times over.", rating: 5 },
  { name: "James O'Connor", role: "CFO, Vertex Manufacturing", quote: "Sharp, responsive, and genuinely proactive. When the state opened a sales tax audit, their team handled every communication. No stress on our end.", rating: 5 },
  { name: "Ada Nguyen", role: "Executive Director, Bright Futures Nonprofit", quote: "Our 990 filings and grant reporting are always on time and audit-ready. Board members regularly compliment the clarity of the financials.", rating: 5 },
];

export const articles = [
  { date: "March 12, 2026", category: "Tax Planning", title: "Seven Year-End Moves That Reduce Your 2026 Tax Bill", excerpt: "Simple, legal strategies most small business owners overlook — from Section 179 to retirement contributions and charitable bunching." },
  { date: "February 24, 2026", category: "Bookkeeping", title: "The Monthly Close: A Checklist Every Growing Business Needs", excerpt: "The 12-step process our team uses to close books cleanly in the first week of every month, without missing accruals or reconciliations." },
  { date: "January 30, 2026", category: "Business Advisory", title: "S-Corp vs LLC: Which Structure Really Saves You More?", excerpt: "A break-even analysis showing where the crossover point actually sits, and the compensation trap that undermines most S-corp elections." },
];
