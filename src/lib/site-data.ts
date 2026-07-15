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
      "We keep your ledgers clean, your reconciliations timely, and your reports investor-ready - so you always know where your business stands.",
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
    short: "Federal, state, and local returns prepared by licensed professionals - filed on time.",
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
    short: "CFO-level insight without the overhead - budgets, forecasts, and growth strategy.",
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
      "Licensed representation, document assembly, and communication management - you never face an audit alone.",
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

export type ArticleSection = {
  h?: string;
  p?: string;
  items?: string[];
};

export type Article = {
  slug: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  author: string;
  sections: ArticleSection[];
};

export const articles: Article[] = [
  {
    slug: "year-end-tax-moves",
    date: "March 12, 2026",
    category: "Tax Planning",
    title: "Seven Year-End Moves That Reduce Your 2026 Tax Bill",
    excerpt: "Simple, legal strategies most small business owners overlook - from Section 179 to retirement contributions and charitable bunching.",
    readTime: "6 min read",
    author: ", CPA",
    sections: [
      { p: "As December approaches, the window for reducing your 2026 tax bill is closing fast. Unlike April, year-end moves require action before midnight on December 31. Here are seven strategies our CPAs implement for clients every year." },
      { h: "1. Accelerate Section 179 and Bonus Depreciation", p: "If your business is profitable, purchasing equipment, vehicles, or software before December 31 lets you deduct the full cost in 2026. Section 179 allows up to $1,220,000 in deductions for 2026, with bonus depreciation at 40% on qualifying assets placed in service this year. Businesses near the phase-out range should prioritize smaller-ticket items first." },
      { h: "2. Maximize Retirement Plan Contributions", p: "Self-employed owners with a Solo 401(k) can contribute up to $69,000 ($76,500 if age 50 or older). S-corp and C-corp owners should confirm their contribution elections are in place before December 31. SEP-IRA contributions can technically be made up to the filing deadline, but funding earlier removes any procrastination risk." },
      { h: "3. Review Your QBI Deduction Eligibility", p: "Pass-through business owners may deduct up to 20% of qualified business income. If your income is near the W-2 wage limitation threshold ($383,900 for joint filers in 2026), paying additional year-end wages to owner-employees can unlock more of this deduction - one of the most underutilized planning tools for S-corp owners." },
      { h: "4. Bunch Charitable Contributions", p: "If your itemized deductions hover near the standard deduction, consider bunching two years of charitable giving into 2026. Alternatively, fund a Donor-Advised Fund before December 31 - you get the deduction immediately, then recommend distributions to charities over multiple years at your pace." },
      { h: "5. Defer Income Where Possible", p: "If December invoicing allows flexibility, pushing billings into January delays taxable income by a full year. This works best for cash-basis taxpayers and must be done carefully to avoid constructive receipt issues - income is taxable when you have an unqualified right to it, regardless of whether you have collected it." },
      { h: "6. Review Your Entity Structure", p: "If your net profit consistently exceeds $70,000–$80,000 and you are still operating as a sole proprietor or single-member LLC, the self-employment tax savings of an S-corp election may be significant. Decisions made in Q4 can take effect for the following year - do not wait until March when it is too late for prospective planning." },
      { h: "7. Fund Health Savings Accounts (HSA)", p: "If you have a qualifying high-deductible health plan, contributions to your HSA are above-the-line deductions that reduce adjusted gross income. The 2026 limits are $4,300 for individuals and $8,550 for families. Contributions can be made through the tax deadline, but funding early keeps the money invested longer." },
    ],
  },
  {
    slug: "monthly-close-checklist",
    date: "February 24, 2026",
    category: "Bookkeeping",
    title: "The Monthly Close: A Checklist Every Growing Business Needs",
    excerpt: "The 12-step process our team uses to close books cleanly in the first week of every month, without missing accruals or reconciliations.",
    readTime: "5 min read",
    author: "Amelia Whitcombe, EA",
    sections: [
      { p: "The businesses that grow fastest are the ones whose owners know their numbers by the 7th of every month. A clean monthly close is how that happens. Our team uses this 12-step process to close books within the first week of every month, consistently." },
      { h: "Step 1 - Reconcile All Bank Accounts", p: "Match every bank and credit card statement to your accounting records. Any unreconciled items need to be investigated - not cleared with a plug entry. Unexplained differences are where fraud and errors hide." },
      { h: "Step 2 - Reconcile Merchant and Payment Accounts", p: "Stripe, Square, PayPal, and similar platforms carry their own transaction feeds. These must be reconciled separately, including fee deductions and any reserve adjustments held by the platform." },
      { h: "Step 3 - Post All Accounts Receivable", p: "All invoices sent during the month must be posted. Outstanding invoices older than 30 days should be flagged for follow-up and aged AR reviewed for collectibility concerns." },
      { h: "Step 4 - Post All Accounts Payable", p: "Vendor bills received but not yet paid should be recorded as AP. Accruing them accurately gives you a real picture of your cash obligations and prevents surprise shortfalls." },
      { h: "Step 5 - Record All Payroll Entries", p: "Payroll journal entries - including gross wages, employer taxes, benefits, and net pay - should match your payroll reports exactly. Differences signal a recording error that must be corrected before the close." },
      { h: "Step 6 - Record Accrued Expenses", p: "Expenses that have been incurred but not yet billed (utilities, professional services, subscription renewals) should be accrued to the period they belong to, not the period when the invoice arrives." },
      { h: "Step 7 - Amortize Prepaid Expenses", p: "Prepaid insurance premiums, software subscriptions, and retainers paid in lump sums need to be expensed ratably each month rather than in full when paid." },
      { h: "Step 8 - Record Depreciation", p: "Fixed asset depreciation must be recorded monthly using your depreciation schedule, not just at year-end. Running annual depreciation as a single December entry distorts every monthly P&L before it." },
      { h: "Step 9 - Review the P&L Against Budget", p: "Compare actual revenue and expenses to budget line by line. Variances of more than 10% should be explained in your monthly memo. No explanation means no accountability." },
      { h: "Step 10 - Review the Balance Sheet for Anomalies", p: "Look for accounts with unexpected balances: credit balances in AP, debit balances in AR write-offs, or unreconciled clearing accounts. Balance sheet problems compound - find them monthly, not annually." },
      { h: "Step 11 - Review Inventory (if applicable)", p: "Physical or system inventory counts should be reconciled to your general ledger. Shrinkage, waste, and adjustments need to be documented and approved by management." },
      { h: "Step 12 - Produce and Distribute Reports", p: "Generate the P&L, Balance Sheet, and Cash Flow Statement. Distribute to owners and leadership by the 7th of every month. Annotate key drivers so readers understand the why behind the numbers." },
    ],
  },
  {
    slug: "scorp-vs-llc",
    date: "January 30, 2026",
    category: "Business Advisory",
    title: "S-Corp vs LLC: Which Structure Really Saves You More?",
    excerpt: "A break-even analysis showing where the crossover point actually sits, and the compensation trap that undermines most S-corp elections.",
    readTime: "7 min read",
    author: "Marcus Doyle, CPA",
    sections: [
      { p: "\"Should I be an S-corp?\" is one of the most common questions we hear from profitable solo operators. The short answer depends on your net income - but the calculation is more nuanced than most online resources suggest." },
      { h: "The Tax Difference", p: "Single-member LLCs pay self-employment (SE) tax at 15.3% on net earnings up to the Social Security wage base, and 2.9% above it. S-corps avoid SE tax on the portion of profit distributed as dividends - but the IRS requires owners to pay themselves a \"reasonable salary\" first, which is subject to full payroll taxes. The savings come only on the distribution portion." },
      { h: "The Math", p: "If your S-corp pays you a $70,000 salary and distributes $50,000 in dividends, you avoid payroll tax (15.3% combined) on that $50,000 distribution - roughly $7,650 in annual savings. This is the gross benefit before overhead costs." },
      { h: "The Crossover Point", p: "S-corps carry real overhead: quarterly payroll runs, payroll tax filings, W-2 preparation, separate business bank accounts, bookkeeping that separates salary from distributions, and a corporate tax return (Form 1120-S) on top of your personal return. Budget $3,000–$5,000 per year in additional accounting and payroll processing costs. The math typically favors an S-corp election only when net profit consistently exceeds $70,000–$80,000 per year." },
      { h: "The Reasonable Compensation Trap", p: "The IRS actively scrutinizes S-corps that pay owner-operators unreasonably low salaries. Setting your salary at $25,000 when comparable positions earn $100,000 is an audit flag. Reasonable compensation must be defensible - based on your industry, specific role, hours worked, and what the business would pay to replace you. An unreasonably low salary is one of the fastest paths to an IRS examination." },
      { h: "When the LLC Wins", p: "If your business generates significant W-2 wages and qualified property (common in manufacturing, construction, and larger service operations), you may already qualify for the full 20% QBI deduction without restructuring. Multi-member LLCs also offer more flexibility in profit and loss allocations than S-corps allow. In these scenarios, converting to an S-corp adds cost without meaningful tax benefit." },
      { h: "Our Recommendation", p: "Schedule a break-even analysis with your advisor before converting. Bring three years of tax returns and a current P&L. The decision must be based on your specific compensation level, industry classification, projected profitability, and state tax treatment - not a general rule of thumb from an online article." },
    ],
  },
];
