import {
  Activity,
  BarChart3,
  Boxes,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Globe2,
  Handshake,
  Layers3,
  LineChart,
  Network,
  PackageCheck,
  ReceiptText,
  Route,
  ShieldCheck,
  Sparkles,
  Truck,
  WalletCards,
  Zap,
} from 'lucide-react'

export const navItems = [
  { label: 'Freight Audit + Payment', path: '/freight-audit-payment' },
  { label: 'Parcel Spend Management', path: '/parcel-spend-management' },
  { label: 'Honeybee TMS', path: '/honeybee-tms' },
  { label: 'Resources', path: '/#resources' },
]

export const homepageServices = [
  {
    title: 'Freight Audit + Payment',
    text: 'Audit, validate, allocate, and pay freight invoices with global controls, multimodal expertise, and actionable spend intelligence.',
    cta: 'Explore Freight Audit',
    path: '/freight-audit-payment',
    icon: ReceiptText,
  },
  {
    title: 'Parcel Spend Management',
    text: 'Turn parcel complexity into measurable savings with contract insight, carrier strategy, invoice intelligence, and expert-led optimization.',
    cta: 'Optimize Parcel Spend',
    path: '/parcel-spend-management',
    icon: PackageCheck,
  },
  {
    title: 'Honeybee TMS',
    text: "Plan, execute, track, and optimize shipments from order to payment with CTSI-Global's native transportation management system.",
    cta: 'See Honeybee TMS',
    path: '/honeybee-tms',
    icon: Route,
  },
]

export const problems = [
  {
    title: 'Freight Spend Leakage',
    text: 'Carrier errors, duplicate invoices, accessorial creep, and unmanaged exceptions quietly erode margins. CTSI-Global helps you identify, prevent, and recover unnecessary spend.',
    icon: WalletCards,
  },
  {
    title: 'Limited Supply Chain Visibility',
    text: 'Disconnected systems make it hard to see what is happening across locations, modes, carriers, and regions. CTSI-Global centralizes logistics data so teams can act faster.',
    icon: Network,
  },
  {
    title: 'Manual Transportation Workflows',
    text: 'Spreadsheets, emails, PDFs, and siloed portals slow teams down. Honeybee TMS automates shipment execution, routing, tracking, claims, and carrier workflows.',
    icon: ClipboardCheck,
  },
  {
    title: 'Parcel Cost Pressure',
    text: 'Parcel networks are complex, fast-moving, and expensive. CTSI-Global helps shippers understand true costs, negotiate smarter, and continuously improve performance.',
    icon: Boxes,
  },
]

export const differentiators = [
  {
    title: 'Built for Global Complexity',
    text: 'Support regional needs while maintaining enterprise-wide control across countries, carriers, currencies, modes, and business units.',
    icon: Globe2,
  },
  {
    title: 'Data You Can Act On',
    text: 'Transform freight and parcel data into dashboards, benchmarks, cost allocation, and recommendations that improve daily decisions.',
    icon: BarChart3,
  },
  {
    title: 'Flexible by Design',
    text: 'CTSI-Global builds around your operation, not the other way around, with configurable technology, integrations, workflows, and business rules.',
    icon: Layers3,
  },
  {
    title: 'A Partner, Not Just a Platform',
    text: 'Dedicated logistics specialists work with your team to improve performance, reduce workload, and uncover new savings opportunities.',
    icon: Handshake,
  },
]

export const metrics = [
  '20,000+ carrier network',
  '120+ countries supported',
  '17+ languages supported',
  '$15B+ in annual SOX-compliant payments',
  'Millions of transactions processed daily',
]

export const resources = [
  {
    title: 'TMS Platforms Are Evolving',
    text: 'Explore how transportation technology is changing and what shippers should expect from modern TMS platforms.',
    type: 'Insight',
  },
  {
    title: 'Conquer Parcel Management Challenges',
    text: 'Learn how parcel leaders reduce cost, improve visibility, and build more resilient carrier strategies.',
    type: 'Guide',
  },
  {
    title: 'Carbon-Neutral Logistics Starts With Better Data',
    text: 'See how managed transportation and reporting can support more sustainable logistics decisions.',
    type: 'Report',
  },
]

export const servicePages = {
  freight: {
    path: '/freight-audit-payment',
    eyebrow: 'Freight Audit + Payment',
    displayTitle: 'Freight control that scales.',
    title: 'Freight Audit + Payment built for global control.',
    subtitle:
      'Eliminate invoice errors, reduce manual work, improve carrier payment accuracy, and turn freight spend data into strategic intelligence.',
    primaryCta: 'Book a Freight Audit Demo',
    secondaryCta: 'Benchmark My Freight Spend',
    heroImage:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=82',
    statement: 'Pay what you should. Know what you spend. Improve what comes next.',
    body:
      "CTSI-Global's Freight Audit + Payment solution validates invoices against contracts, tariffs, shipment data, and your unique business rules, helping logistics and finance teams control spend with confidence.",
    capabilities: [
      ['Contract Management', 'Centralize carrier contracts, rate agreements, terms, and supporting documentation in a secure, accessible repository.', FileText],
      ['Data Capture', 'Collect and normalize invoice and shipment data through EDI, OCR, portal uploads, and other integration methods.', Activity],
      ['Invoice Validation', 'Apply business rules, rate checks, duplicate detection, and allocation logic before payment is approved.', CheckCircle2],
      ['45-Point Audit', 'Audit freight invoices across key rating, routing, service, accessorial, and compliance criteria.', ShieldCheck],
      ['Exception Management', 'Route billing exceptions for review, correction, short-pay, credit, or approval through a controlled workflow.', Zap],
      ['Cost Allocation', 'Allocate logistics costs by location, product, department, customer, order, origin, destination, carrier, or custom rules.', LineChart],
      ['Payment Processing', 'Support timely, controlled carrier payments with finance-ready reporting and SOX-conscious processes.', WalletCards],
    ],
    differentiatorTitle: 'More than audit. A logistics intelligence engine.',
    differentiatorText:
      'Freight audit is not just back-office processing. It is one of the richest sources of transportation intelligence inside your business. CTSI-Global helps you use that data to improve routing, carrier strategy, budgeting, accruals, compliance, and network performance.',
    proofTitle: 'Designed for enterprise complexity.',
    proof: ['120+ countries supported', '17+ languages supported', '28,000+ carriers supported', 'Multimodal invoice processing', 'Global and regional support teams'],
    closingPrimary: 'Schedule a Live Q&A',
    closingSecondary: 'Start With a Spend Benchmark',
  },
  parcel: {
    path: '/parcel-spend-management',
    eyebrow: 'Parcel Spend Management',
    displayTitle: 'Parcel spend, made visible.',
    title: 'Parcel Spend Management for shippers who need more than audit.',
    subtitle:
      'Reduce parcel costs, improve carrier strategy, and uncover savings opportunities across one of the most complex areas of logistics spend.',
    primaryCta: 'Optimize My Parcel Spend',
    secondaryCta: 'Request a Parcel Savings Review',
    heroImage:
      'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=1600&q=82',
    statement: 'Make parcel a measurable advantage.',
    body:
      'Parcel shipping is often one of the most visible and expensive parts of the customer experience. CTSI-Global helps shippers understand what they are paying, why they are paying it, and where they can improve.',
    capabilities: [
      ['Contract + Rate Intelligence', 'Evaluate parcel agreements, pricing structures, accessorials, surcharges, minimums, DIM factors, and service incentives with expert guidance.', FileText],
      ['Invoice + Spend Visibility', 'Audit, classify, and analyze parcel charges so your team can see true landed shipping cost by carrier, service, location, customer, and shipment profile.', ReceiptText],
      ['Carrier Strategy', 'Identify where carrier mix, service selection, zone strategy, package profile, or routing rules may be increasing cost unnecessarily.', Truck],
      ['Savings Opportunity Modeling', 'Use shipment history and parcel data to model savings scenarios, contract changes, service shifts, and operational improvements before you act.', BarChart3],
      ['Continuous Optimization', 'Monitor performance, flag exceptions, and refine strategy as rates, demand, and carrier networks evolve.', Sparkles],
    ],
    differentiatorTitle: 'Parcel costs hide in the details.',
    differentiatorText:
      'Residential fees, delivery area surcharges, address corrections, dimensional weight, fuel, peak charges, minimum reductions, and billing exceptions can quietly turn parcel into a margin drain. CTSI-Global gives you the visibility and expertise to manage those details at scale.',
    proofTitle: 'Led by parcel specialists. Powered by logistics data.',
    proof: ['Contract guidance', 'Carrier strategy', 'Invoice intelligence', 'Savings modeling', 'Continuous performance monitoring'],
    note:
      'CTSI-Global has publicly highlighted parcel leadership focused on helping shippers identify meaningful small-package savings opportunities, including reported average savings of 19% under recent parcel spend initiatives. Validate this claim internally before making it a primary hero metric.',
    closingPrimary: 'Request a Parcel Spend Review',
    closingSecondary: 'Talk to a Parcel Expert',
  },
  honeybee: {
    path: '/honeybee-tms',
    eyebrow: 'Honeybee TMS',
    displayTitle: 'Execution from order to payment.',
    title: 'Honeybee TMS: transportation execution from order to payment.',
    subtitle:
      'Plan, optimize, execute, track, and manage shipments in one connected transportation platform powered by CTSI-Global.',
    primaryCta: 'See Honeybee TMS',
    secondaryCta: 'Talk to a TMS Expert',
    heroImage:
      'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1600&q=82',
    statement: 'A TMS built inside a logistics ecosystem.',
    body:
      'Honeybee TMS connects transportation execution with freight audit, payment, parcel management, carrier data, and logistics intelligence, giving teams visibility and control across the full shipment lifecycle.',
    capabilities: [
      ['Order Management', 'Receive, revise, schedule, and manage orders with connected workflows and application integrations.', ClipboardCheck],
      ['Load Optimization', 'Consolidate shipments, build efficient loads, support multi-stop routing, and reduce unnecessary transportation cost.', Boxes],
      ['Carrier Selection', 'Choose carriers based on price, lane, performance, service requirements, availability, or custom business rules.', Truck],
      ['Shipment Execution', 'Automate tendering, confirmation, documentation, routing, and shipment workflows across locations and teams.', Route],
      ['Event Management', 'Track shipments before, during, and after transit with exception alerts and status visibility.', Activity],
      ['Claims Management', 'Manage overage, shortage, damage, and overcharge claims with structured workflows and carrier communication.', ShieldCheck],
    ],
    differentiatorTitle: 'The advantage of TMS + freight audit in one ecosystem.',
    differentiatorText:
      'When transportation execution and freight payment data work together, your team can move from simply knowing what happened to controlling what happens next. Honeybee TMS helps connect planning, shipment execution, audit, allocation, and payment in a single logistics flow.',
    proofTitle: 'Outcomes from dock to delivery.',
    proof: ['Lower transportation costs', 'Fewer manual tasks', 'Better routing and carrier decisions', 'More consistent workflows across locations', 'Real-time shipment visibility', 'Cleaner data for audit, accruals, and reporting', 'Greater control from dock to delivery'],
    note:
      'Honeybee TMS for Parcel helps teams validate addresses, rate shipments, print labels, manifest packages, track deliveries, and connect with hundreds of parcel carriers through one streamlined experience.',
    closingPrimary: 'Book a Honeybee TMS Demo',
    closingSecondary: 'Explore TMS + Freight Audit',
  },
}

export const footerColumns = [
  ['Services', ['Freight Audit + Payment', 'Parcel Spend Management', 'Honeybee TMS', 'Strategic Data']],
  ['About', ['About Us', 'Contact Us', 'Corporate Responsibility', 'News', 'Blogs']],
  ['Connect', ['LinkedIn', 'Sales', 'Support']],
]

export const homeHeroStats = [
  ['Audit', 'Financial control before spend becomes waste'],
  ['Execute', 'Connected transportation workflows'],
  ['Improve', 'Strategic logistics intelligence'],
]

export const homeHeroCards = [
  { label: 'Carrier network', value: '20K+', icon: Building2 },
  { label: 'Countries supported', value: '120+', icon: Globe2 },
  { label: 'Languages supported', value: '17+', icon: Handshake },
]
