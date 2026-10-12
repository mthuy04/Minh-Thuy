// src/data/portfolio.js
// Single source of truth for every verified fact shown on the site.
// Change a metric, date or link here — components only render this data.

export const profile = {
  name: "Nguyen Minh Thuy",
  nameVi: "Nguyễn Minh Thúy",
  positioning: "Business Analyst | SaaS • E-commerce • AI-enabled Products",
  location: "Hanoi, Vietnam",
  siteUrl: "https://minh-thuy-navy.vercel.app",
  wordmark: "Jade",
  // Current CV, served from public/cv/
  cvUrl: "/cv/NguyenMinhThuy_ITBA_CV.pdf",
  portrait: {
    src: "/images/minh-thuy-white-blazer.webp",
    width: 1122,
    height: 1402,
    alt: "Portrait of Nguyen Minh Thuy in a white blazer with arms crossed",
  },
};

export const contact = {
  email: "mthuy68.work@gmail.com",
  emailHref:
    "mailto:mthuy68.work@gmail.com?subject=Business%20Analyst%20opportunity%20%E2%80%93%20Nguyen%20Minh%20Thuy",
  phone: "+84 812 467 168",
  phoneHref: "tel:+84812467168",
  linkedin: {
    url: "https://www.linkedin.com/in/thuynguyen68",
    display: "linkedin.com/in/thuynguyen68",
  },
  github: {
    url: "https://github.com/mthuy04",
    display: "github.com/mthuy04",
  },
};

export const seo = {
  title: "Nguyen Minh Thuy | Business Analyst Portfolio",
  description:
    "Business Analyst portfolio of Nguyen Minh Thuy, featuring SaaS, e-commerce, enterprise systems, AI-enabled products, requirements engineering, process analysis, and UAT delivery.",
};

export const navLinks = [
  { name: "Home", id: "home" },
  { name: "Experience", id: "experience" },
  { name: "Case Studies", id: "case-studies" },
  { name: "Skills", id: "skills" },
  { name: "Education", id: "education" },
  { name: "About", id: "about" },
  { name: "Contact", id: "contact" },
];

export const hero = {
  eyebrow: "Business Analyst • SaaS • E-commerce • AI Product",
  headline: ["From Business Needs", "to Reliable Product Delivery."],
  body:
    "Final-year Management Information Systems student and Business Analyst with hands-on experience across SaaS/AI products, enterprise payment systems, ERP/CRM workflows, and e-commerce. I translate business needs into structured requirements, process/system models, acceptance criteria, and validated product releases.",
  capabilities: [
    "Requirements",
    "Process & System Analysis",
    "API / Data Flows",
    "UAT / Delivery",
  ],
  metrics: [
    { value: "181", label: "Requirements" },
    { value: "61", label: "Functional / UAT Cases" },
    { value: "90", label: "Issues Tracked" },
    { value: "~20%", label: "Process Improvement" },
  ],
};

/* ------------------------------------------------------------------ */
/* EXPERIENCE                                                          */
/* ------------------------------------------------------------------ */

export const experienceIntro =
  "Hands-on experience across SaaS products, enterprise systems, ERP/CRM workflows, and process improvement.";

export const experience = [
  {
    company: "Tinktalk Technology Joint Stock Company",
    role: "Business Analyst",
    dates: "Mar 2026 – Sep 2026",
    scopes: [
      {
        title: "Tinktalk AI Sales Training Platform",
        type: "Enterprise AI SaaS",
        caseStudy: "tinktalk-ai-sales-training-platform",
        metrics: ["2 Applications", "4 Role Types", "Enterprise Deployment"],
        bullets: [
          "Analyzed product requirements, AI scoring/workflow behaviour, business rules, permissions, UX flows, and edge cases across 2 applications and 4 role types for a multi-tenant enterprise AI sales-training platform using STT/LLM/TTS voice roleplay, presentation training, multi-agent scoring, and speech metrics.",
          "Translated expected behaviour into structured requirements and validation scenarios; supported functional/regression testing, deployment validation, defect resolution, and learner/admin documentation for external users.",
        ],
      },
      {
        title: "ULIS Tuition Management & Online Payment System",
        type: "Business Analyst / Product Owner Responsibilities",
        dates: "Jun 2026 – Sep 2026",
        caseStudy: "ulis-tuition-payment-system",
        metrics: [
          "~8,000 Students",
          "~1,600 Transactions/Day",
          "181 Requirements",
          "7 Modules",
          "61 UAT Cases",
          "90 Issues",
          "13 Admin Screens",
        ],
        bullets: [
          "Managed backlog, MVP scope, and acceptance criteria for a tuition/payment platform serving ~8,000 students; authored 181 requirements across 7 business modules covering user journeys, business rules, state/data models, and tuition calculation logic.",
          "Specified integration flows between OneVNU, the tuition platform, and BIDV, including payment states, idempotency, payment locking, duplicate-payment prevention, timeout/retry handling, and reconciliation.",
          "Built a 61-case functional/UAT plan and 90-item issue log; supported successful UAT with BIDV and the Digital University Administration Center and validated a 13-screen role-based admin interface.",
        ],
      },
    ],
  },
  {
    company: "S-Tech Technology Joint Stock Company",
    role: "Business Analyst Intern",
    dates: "Dec 2025 – Mar 2026",
    scopes: [
      {
        title: "RealERP / Booking Online System — Dat Xanh Mien Bac",
        type: "ERP / CRM",
        caseStudy: "realerp-booking-online-system",
        metrics: ["8 E2E Workflows", "19 Contract States", "~80 Test Cases"],
        bullets: [
          "Analyzed booking, reservation, payment, allocation, and contract workflows across RealERP/Back-office and CRM/Tavico, covering 8 end-to-end flows and 19 contract states.",
          "Executed ~80 functional and regression scenarios, documented workflow/payment defects, and verified fixes across core booking journeys.",
        ],
      },
    ],
  },
  {
    company: "Our Homestay and Studio",
    role: "Operations & Process Improvement Lead",
    dates: "Jan 2024 – Mar 2026",
    scopes: [
      {
        metrics: ["5 Locations", "40 Apartments", "~20% Wait-time Reduction"],
        bullets: [
          "Standardized operating workflows, SOPs, control checklists, and Excel/Google Sheets KPI tracking across 5 locations and 40 apartments.",
          "Reduced guest waiting time by ~20% through workflow redesign, clearer responsibilities, and standardized procedures.",
        ],
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* CASE STUDIES                                                        */
/* ------------------------------------------------------------------ */

export const caseStudiesIntro = {
  title: "Featured Case Studies",
  subtitle:
    "Selected work across SaaS products, enterprise systems, e-commerce, and applied AI.",
};

export const caseStudyFilters = [
  { id: "featured", label: "Featured" },
  { id: "product-ba", label: "Product / BA" },
  { id: "ecommerce-crm", label: "E-commerce & CRM" },
  { id: "ai-data", label: "AI & Data" },
  { id: "academic", label: "Academic" },
];

const CONFIDENTIAL_NOTE =
  "Client documents are confidential and are not published. Flows on this page are simplified, anonymized recreations.";

// tier: "flagship" | "supporting" | "secondary"
export const caseStudies = [
  /* 1 ─ TINKTALK ---------------------------------------------------- */
  {
    slug: "tinktalk-ai-sales-training-platform",
    tier: "flagship",
    featured: true,
    categories: ["product-ba", "ai-data"],
    title: "Tinktalk AI Sales Training Platform",
    roleLine: "Business Analyst • Enterprise AI SaaS • 2026",
    description:
      "Business analysis and validation for a multi-tenant AI sales-training product spanning STT/LLM/TTS voice roleplay, camera-based presentation training, multi-agent rubric scoring, and speech metrics.",
    metrics: [
      { value: "2", label: "Applications" },
      { value: "4", label: "Role Types" },
      { value: "Enterprise", label: "Deployment" },
    ],
    tags: ["Requirements", "AI Product", "UAT", "SaaS"],
    detail: {
      overview: {
        type: "Enterprise AI SaaS — multi-tenant AI sales-training platform",
        role: "Business Analyst",
        organization: "Tinktalk Technology Joint Stock Company",
        timeline: "Mar 2026 – Sep 2026",
        scope:
          "Learner and Admin applications, 4 role types, AI voice roleplay, presentation training, scoring and speech metrics",
      },
      context: [
        "Tinktalk is an enterprise AI sales-training platform. It is multi-tenant and consists of two applications — a Learner app and an Admin app — used by 4 role types.",
        "Learners practise sales conversations through STT/LLM/TTS voice roleplay and camera-based presentation training. Sessions are evaluated by multi-agent rubric scoring together with speech metrics such as WPM, pace, disfluency, and prosody.",
        "One deployment involved a major Vietnamese commercial bank.",
      ],
      problem: [
        "AI-driven behaviour (roleplay responses, rubric scores, speech metrics) is harder to specify and test than deterministic CRUD features: expected behaviour, edge cases, and acceptance boundaries must be made explicit before they can be validated.",
        "A multi-tenant product with 2 applications and 4 role types multiplies permission combinations and UX paths that need clear business rules.",
        "External enterprise deployments require validated releases and documentation that learners and admins outside the company can use.",
      ],
      role: {
        owned: [
          "Analysis of AI scoring and workflow behaviour, business rules, role permissions, UX flows, and edge cases",
          "Structured requirements and SRS / BRD documentation",
          "Validation scenarios derived from expected behaviour",
          "Learner and Admin user guides and product documentation",
        ],
        contributed: [
          "Functional and regression testing",
          "Deployment validation and external deployment support",
          "Issue tracking, defect resolution follow-up, and fix verification",
        ],
        others: [
          "The STT / LLM / TTS infrastructure, AI models, and scoring implementation were built by the engineering/AI team. My work was product analysis and validation.",
        ],
      },
      discovery: [
        "Mapped how each AI capability behaves from the user’s perspective: voice roleplay, presentation training, rubric scoring, and speech-metric feedback (WPM, pace, disfluency, prosody).",
        "Defined business rules and permissions across 4 role types and both applications in a multi-tenant setup.",
        "Identified edge cases in scoring and workflow behaviour that needed explicit expected outcomes before testing.",
      ],
      design: {
        flows: [
          {
            title: "Learner practice loop (simplified)",
            steps: [
              "Learner starts a session",
              "Voice roleplay (STT → LLM → TTS) or camera-based presentation",
              "Multi-agent rubric scoring",
              "Speech metrics: WPM • pace • disfluency • prosody",
              "Feedback & results",
            ],
          },
        ],
        bullets: [
          "Learner vs Admin application responsibilities and role-based permissions",
          "UX flows for training sessions, results, and administration",
        ],
      },
      requirements: [
        "SRS / BRD with structured functional requirements",
        "Business rules for scoring/workflow behaviour and permissions",
        "UX flow descriptions and edge-case definitions",
        "Validation scenarios that trace expected behaviour to test steps",
      ],
      validation: [
        "Functional and regression testing across Learner and Admin applications",
        "Deployment validation for external enterprise deployments",
        "Issue tracking, defect follow-up, and fix verification",
      ],
      outcome: [
        "Analysis and validation coverage across 2 applications and 4 role types",
        "Supported an enterprise deployment, including one with a major Vietnamese commercial bank",
        "Delivered learner/admin user guides and product documentation for external users",
      ],
      artifacts: [
        { title: "SRS / BRD", desc: "Structured requirements, business rules, and permissions." },
        { title: "Validation scenarios", desc: "Expected behaviour translated into test steps for AI and non-AI features." },
        { title: "Issue log", desc: "Defects tracked through resolution and fix verification." },
        { title: "User guides", desc: "Learner and Admin documentation for external users." },
      ],
      confidentialNote: CONFIDENTIAL_NOTE,
      takeaways: [
        "For AI features, acceptance criteria must define behaviour boundaries and edge cases — not only happy-path outputs.",
        "Role × application × tenant combinations are where permission defects hide; enumerating them early made testing systematic.",
        "Documentation for external users is part of the release, not an afterthought.",
      ],
    },
  },

  /* 2 ─ ULIS --------------------------------------------------------- */
  {
    slug: "ulis-tuition-payment-system",
    tier: "flagship",
    featured: true,
    categories: ["product-ba"],
    title: "ULIS Tuition Management & Online Payment System",
    roleLine: "Business Analyst / PO Responsibilities • Enterprise System • 2026",
    description:
      "Business analysis and product delivery for a university tuition/payment platform integrating OneVNU, the tuition platform, and BIDV. Defined 181 requirements across 7 modules and a 61-case UAT plan for a system serving ~8,000 students.",
    metrics: [
      { value: "~8,000", label: "Students" },
      { value: "181", label: "Requirements" },
      { value: "61", label: "UAT Cases" },
      { value: "90", label: "Issues" },
    ],
    tags: ["Requirements", "Payment Integration", "API", "UAT"],
    detail: {
      overview: {
        type: "Enterprise system — university tuition management & online payment",
        role: "Business Analyst with Product Owner responsibilities",
        organization: "Tinktalk Technology Joint Stock Company",
        timeline: "Jun 2026 – Sep 2026",
        scope:
          "7 business modules, OneVNU ↔ tuition platform ↔ BIDV integration, 13-screen role-based admin interface",
      },
      keyMetrics: [
        { value: "~8,000", label: "Students" },
        { value: "~1,600", label: "Projected peak transactions/day" },
        { value: "181", label: "Requirements" },
        { value: "7", label: "Business modules" },
        { value: "61", label: "Functional / UAT cases" },
        { value: "90", label: "Issue-log items" },
        { value: "13", label: "Admin screens" },
      ],
      context: [
        "The system manages tuition and online payment for ~8,000 students, with a projected peak of ~1,600 transactions per day.",
        "It connects three parties: the OneVNU portal used by students, the tuition platform, and BIDV for bill inquiry and payment. Stakeholders included BIDV and the Digital University Administration Center.",
      ],
      problem: [
        "Money moves across three systems. Without precise rules, a payment can be duplicated, lost to a timeout, or recorded differently on each side.",
        "Tuition amounts depend on calculation rules that must be specified unambiguously before they can be built and tested.",
        "The bank and the university both had to accept the system through UAT, so requirements had to be traceable to test cases.",
      ],
      role: {
        owned: [
          "Backlog management, MVP scope, and acceptance criteria (Jira)",
          "Versioned SRS aligned with ISO/IEC/IEEE 29148 — 181 requirements across 7 business modules",
          "User stories, use cases, business rules, data models, state models, and traceability",
          "Tuition calculation rules and integration flow specifications",
          "61-case functional/UAT plan and 90-item defect/issue log",
          "UI/UX acceptance review of the 13-screen role-based admin mockup",
        ],
        contributed: [
          "UAT with BIDV and the Digital University Administration Center",
          "Production-readiness preparation",
        ],
        others: [
          "Platform implementation was delivered by the development team; bank-side systems belong to BIDV.",
        ],
      },
      discovery: [
        "Stakeholder needs from the university administration, students (via OneVNU), and the bank partner",
        "Tuition calculation rules and the business rules that govern bills and payments",
        "Payment edge cases: timeouts, retries, repeated requests, concurrent attempts on the same bill, and end-of-day mismatches",
        "Admin workflows and role-based access across 13 admin screens",
      ],
      design: {
        flows: [
          {
            title: "Payment integration flow (simplified)",
            steps: [
              "Student opens tuition via OneVNU portal",
              "Bill inquiry: tuition platform ↔ BIDV",
              "Payment via QR / OTP",
              "Bill payment confirmation",
              "Idempotency check & payment lock",
              "Payment state updated",
              "End-of-day reconciliation",
            ],
          },
        ],
        bullets: [
          "Payment state model covering normal, timeout/retry, and exception paths",
          "Data models for students, bills, and payments supporting tuition calculation",
          "Role-based admin workflows across a 13-screen interface",
        ],
      },
      requirements: [
        "Versioned SRS aligned with ISO/IEC/IEEE 29148 (181 requirements, 7 modules)",
        "User stories with acceptance criteria, managed in Jira",
        "Use cases, business rules, and tuition calculation rules",
        "Data models and state models",
        "Requirement-to-test traceability",
      ],
      technical: [
        { title: "Bill inquiry / payment APIs", desc: "Specified request/response behaviour for bill inquiry and bill payment between the tuition platform and BIDV." },
        { title: "QR / OTP", desc: "Payment confirmation paths for QR and OTP." },
        { title: "Idempotency", desc: "Repeated requests for the same payment must not create a second transaction." },
        { title: "Payment locking", desc: "A bill being paid is locked so concurrent attempts cannot double-charge." },
        { title: "Timeout / retry", desc: "Defined how unanswered or failed calls are retried and how their final state is resolved." },
        { title: "Duplicate-payment prevention", desc: "Rules combining idempotency, locking, and state checks." },
        { title: "End-of-day reconciliation", desc: "Matching platform records with bank records and handling exceptions." },
      ],
      validation: [
        "61 functional/UAT cases traced to requirements",
        "90-item defect/issue log used for triage and retest",
        "UI/UX acceptance review of the 13-screen admin interface",
        "UAT with BIDV and with the Digital University Administration Center",
      ],
      outcome: [
        "Supported successful UAT with BIDV and the Digital University Administration Center and supported production-readiness preparation.",
        "181 requirements across 7 business modules, specified for a system serving ~8,000 students and a projected ~1,600 transactions/day.",
      ],
      artifacts: [
        { title: "Versioned SRS", desc: "ISO/IEC/IEEE 29148-aligned, 181 requirements across 7 modules." },
        { title: "Backlog & acceptance criteria", desc: "MVP scope and user stories in Jira." },
        { title: "State & data models", desc: "Payment states and the data supporting tuition calculation." },
        { title: "Integration specification", desc: "OneVNU ↔ tuition platform ↔ BIDV flows, idempotency, locking, retry, reconciliation." },
        { title: "Functional / UAT plan", desc: "61 cases with traceability." },
        { title: "Defect / issue log", desc: "90 items tracked to closure." },
        { title: "Admin mockup review", desc: "13-screen role-based admin interface." },
      ],
      confidentialNote: CONFIDENTIAL_NOTE,
      takeaways: [
        "In payment integrations, idempotency, locking, and retry rules are requirements — leaving them to implementation is where duplicate charges come from.",
        "Reconciliation needs to be designed together with the payment state model, not added after go-live planning.",
        "Tracing 181 requirements to 61 UAT cases gave the bank, the university, and the team one checkable scope for UAT.",
      ],
    },
  },

  /* 3 ─ SHOPEE ------------------------------------------------------- */
  {
    slug: "shopee-ecommerce-sales-management-system",
    tier: "flagship",
    featured: true,
    categories: ["ecommerce-crm", "academic"],
    title: "E-commerce Sales Management System for a Shopee Marketplace Seller",
    roleLine: "Team Leader • E-commerce / Enterprise Information Systems • 2025",
    description:
      "Designed an end-to-end e-commerce operating model covering order import, sales confirmation, inventory reservation, warehouse fulfillment, logistics, returns, payout reconciliation, and reporting.",
    metrics: [
      { value: "6", label: "Swimlanes" },
      { value: "6", label: "Database Triggers" },
    ],
    tags: ["E-commerce", "REA", "ERD", "MySQL", "Process Design"],
    links: [
      { label: "GitHub repository", href: "https://github.com/mthuy04/Sale-Management-System-for-Shopee-Seller" },
      { label: "Project report", href: "https://drive.google.com/file/d/1tqGUUYLmuTCLznEYKfGAVVayiNz6MDrJ/view" },
    ],
    detail: {
      overview: {
        type: "Academic project — Enterprise Information Systems",
        role: "Team Leader",
        timeline: "Nov 2025 – Dec 2025",
        scope:
          "Order-to-payout operating model for a Shopee marketplace seller: process, data model, and MySQL implementation",
      },
      context: [
        "A marketplace seller on Shopee runs orders through a chain of steps — from importing marketplace orders to reconciling payouts — that touch sales, warehouse, logistics, and finance.",
      ],
      problem: [
        "Orders, stock, and payouts move between the marketplace and the seller’s internal operations. Without controls, stock can be oversold, order states can drift, and payouts can be hard to reconcile against orders and returns.",
      ],
      role: {
        owned: [
          "Led the team as Team Leader and coordinated the end-to-end design across process, data, and database layers",
        ],
        contributed: [
          "Process model (6 swimlanes), REA model, ERD, and relational schema",
          "MySQL implementation: SQL queries, stored procedures, and 6 database triggers",
        ],
        others: ["Academic team project."],
      },
      discovery: [
        "Mapped the order lifecycle across sales, warehouse, logistics, returns, and finance",
        "Identified control points where inventory and order state must be enforced by the system",
      ],
      design: {
        flows: [
          {
            title: "Order-to-payout workflow",
            steps: [
              "Order Import",
              "Sales Confirmation",
              "Inventory Reservation",
              "Warehouse Fulfillment",
              "Logistics",
              "Returns",
              "Payout Reconciliation",
              "Reporting",
            ],
          },
        ],
        bullets: [
          "6-swimlane process model across the participating roles/systems",
          "REA (Resource–Event–Agent) model of the business events",
          "ERD and relational schema derived from the REA model",
        ],
      },
      requirements: [
        "REA model",
        "ERD and relational schema",
        "Process model with 6 swimlanes",
        "Inventory and order-state control rules",
      ],
      technical: [
        { title: "MySQL schema", desc: "Relational schema implementing the REA/ERD design." },
        { title: "SQL queries & stored procedures", desc: "Operational and reporting logic." },
        { title: "6 database triggers", desc: "Enforce inventory controls and order-state controls at the database level." },
      ],
      validation: [
        "Trigger logic used to enforce inventory and order-state rules automatically",
        "Reporting queries over the implemented schema",
      ],
      outcome: [
        "End-to-end operating model from order import to payout reconciliation and reporting",
        "6 swimlanes and 6 database triggers implementing the control logic",
      ],
      artifacts: [
        {
          title: "Seller admin dashboard",
          desc: "Order states, Shopee order sync, and operational queues in the implemented system.",
          image: { src: "/images/shopee-admin-dashboard.webp", width: 1600, height: 904, alt: "Seller admin dashboard showing pending and to-ship orders, daily revenue, returns, recent order state changes, and a Shopee sync panel" },
        },
        {
          title: "Sales performance report",
          desc: "Revenue trend, best-selling products, and order fulfillment status from the reporting layer.",
          image: { src: "/images/shopee-sales-dashboard.webp", width: 1600, height: 914, alt: "Sales performance report with monthly revenue trend, top 5 best-selling products, and order fulfillment status breakdown" },
        },
        { title: "REA model, ERD & relational schema", desc: "Documented in the project report and repository." },
        { title: "Stored procedures & triggers", desc: "MySQL source in the GitHub repository." },
      ],
      takeaways: [
        "Starting from REA made the ERD follow real business events (orders, shipments, returns, payouts) instead of screens.",
        "Putting inventory and order-state rules in triggers means the controls hold no matter which process step writes the data.",
        "Payout reconciliation only works if returns and order states are modelled cleanly upstream.",
      ],
    },
  },

  /* 4 ─ LIVLAB ------------------------------------------------------- */
  {
    slug: "livlab-ai-home-living-platform",
    tier: "flagship",
    featured: true,
    categories: ["product-ba", "ai-data"],
    title: "LivLab — AI-Powered Home & Living Solution Platform",
    roleLine: "Tech Lead • Applied GenAI / Product • 2026–Present",
    description:
      "B2B2C product that turns room dimensions, budget, style, and product needs into catalogue-backed bundles, budget-fit status, technical findings, quotation selections, and structured showroom leads.",
    metrics: [
      { value: "57", label: "Verified Products" },
      { value: "34", label: "Curated Concepts" },
      { value: "6", label: "Validation Areas" },
      { value: "46", label: "Unit Checks" },
    ],
    badges: ["VISI Incubated", "Top 6 iStartup VNU-IS 2026"],
    tags: ["GenAI", "Product", "Gemini", "Rule Engine"],
    detail: {
      overview: {
        type: "Startup product — B2B2C Home & Living platform, initially focused on bathroom solutions",
        role: "Tech Lead",
        team: "2-person startup team",
        timeline: "2026 – Present",
        scope: "5 core MVP workflows, catalogue-grounded AI suggestions, deterministic Technical Advisor",
      },
      keyMetrics: [
        { value: "5", label: "Core MVP workflows" },
        { value: "57", label: "Verified products" },
        { value: "34", label: "Curated bathroom concepts" },
        { value: "6", label: "Validation areas" },
        { value: "46", label: "Unit checks" },
      ],
      recognition: [
        "Incubated at VNU Innovation & Startup Incubator (VISI)",
        "Top 6 Finalist, iStartup VNU-IS 2026",
      ],
      context: [
        "LivLab is a B2B2C Home & Living platform, initially focused on bathroom solutions. It connects end customers with showrooms through curated concepts, product bundles, and quotations.",
        "The MVP has 5 core workflows: Concept Gallery with product hotspots, AI Combo Suggestion / AI Expert, Quotation Cart, Showroom Connect, and Showroom Lead Dashboard.",
      ],
      problem: [
        "A generative model on its own can suggest products that don’t exist, don’t fit the budget, or don’t physically fit the room. Suggestions must be grounded in a real catalogue and checked by rules before a customer or showroom relies on them.",
      ],
      role: {
        owned: [
          "Technical lead for the MVP architecture: candidate selection, AI integration, validation, and the Technical Advisor rule checks",
        ],
        contributed: [
          "Product workflows across the 5 core MVP flows within a 2-person startup team",
        ],
        others: [],
      },
      discovery: [
        "Practitioner-curated domain knowledge used to ground recommendations",
        "Catalogue of 57 verified products and 34 curated bathroom concepts",
        "Technical constraints that make a bathroom layout valid or invalid",
      ],
      design: {
        flows: [
          {
            title: "End-to-end recommendation flow",
            steps: [
              "Room dimensions + budget + style + product needs",
              "Deterministic candidate selection",
              "Gemini structured output",
              "Product-ID validation",
              "Rule checks",
              "Budget-fit status",
              "Technical findings",
              "Quotation cart",
              "Structured showroom lead",
            ],
          },
        ],
        bullets: [
          "Concept Gallery with product hotspots",
          "AI Combo Suggestion / AI Expert",
          "Quotation Cart → Showroom Connect → Showroom Lead Dashboard",
        ],
      },
      requirements: [
        "Catalogue grounding: AI may only choose from deterministic candidates drawn from verified products",
        "Schema-constrained AI output",
        "Deterministic budget calculations",
        "Technical verdicts are produced by rules; the LLM explanation cannot override them",
      ],
      technical: [
        { title: "Deterministic candidate selection", desc: "Candidates are selected from the catalogue before the model is called." },
        { title: "Gemini API, schema-constrained", desc: "Structured output that must match a defined schema." },
        { title: "Server-side product-ID re-validation", desc: "Every product ID returned by the model is re-checked on the server." },
        { title: "Rule-based fallback", desc: "If the AI output is unusable, rules still produce a result." },
        { title: "Deterministic budget calculation", desc: "Budget-fit status is computed, not generated." },
        { title: "Technical Advisor — 6 validation areas", desc: "Room bounds • collision • clearance • placement surface • plumbing • data completeness." },
      ],
      validation: [
        "46 unit checks covering the deterministic logic",
        "Technical Advisor validates 6 areas: room bounds, collision, clearance, placement surface, plumbing, and data completeness",
      ],
      outcome: [
        "5 core MVP workflows built around 57 verified products and 34 curated concepts",
        "Incubated at VISI; Top 6 Finalist, iStartup VNU-IS 2026",
      ],
      artifacts: [
        { title: "Recommendation architecture", desc: "Deterministic selection → structured AI output → validation → rule checks." },
        { title: "Technical Advisor rules", desc: "6 validation areas with deterministic verdicts." },
        { title: "Unit test suite", desc: "46 unit checks." },
      ],
      notice: "3D/AR visualisation is a future growth direction and is not part of the current MVP.",
      takeaways: [
        "Use the LLM for language and ranking; keep facts (product IDs, prices, technical verdicts) deterministic and validated.",
        "A rule-based fallback keeps the product usable when the model output fails validation.",
        "Structured showroom leads turn an AI conversation into something a business can act on.",
      ],
    },
  },

  /* 5 ─ S-TECH / REALERP --------------------------------------------- */
  {
    slug: "realerp-booking-online-system",
    tier: "supporting",
    featured: true,
    categories: ["product-ba", "ecommerce-crm"],
    title: "RealERP / Booking Online System",
    roleLine: "Business Analyst Intern • ERP / CRM • 2025–2026",
    description:
      "Analyzed cross-system booking, reservation, payment, and contract workflows between RealERP/Back-office and CRM/Tavico, including state transitions, role permissions, notifications, and payment synchronization.",
    metrics: [
      { value: "8", label: "E2E Workflows" },
      { value: "19", label: "Contract States" },
      { value: "~80", label: "Test Cases" },
    ],
    tags: ["ERP", "CRM", "State Flows", "Testing"],
    detail: {
      overview: {
        type: "ERP / CRM — real-estate booking online system",
        role: "Business Analyst Intern",
        organization: "S-Tech Technology Joint Stock Company",
        client: "Dat Xanh Mien Bac",
        timeline: "Dec 2025 – Mar 2026",
        scope: "8 end-to-end workflows and 19 contract states across RealERP/Back-office and CRM/Tavico",
      },
      context: [
        "The Booking Online System for Dat Xanh Mien Bac spans RealERP/Back-office and CRM/Tavico. Booking, payment, and contract data must stay consistent between the two.",
      ],
      problem: [
        "A booking passes through many states — reservation, deposit, allocation, extension, contract — and each transition can be triggered from a different system or role. Payment synchronization and notifications must follow the same states everywhere.",
      ],
      role: {
        owned: [
          "Workflow and state analysis for booking, reservation, payment, allocation, and contract flows",
          "Defect documentation for workflow and payment issues",
        ],
        contributed: [
          "Executed ~80 functional and regression scenarios and verified fixes",
        ],
        others: ["System implementation was delivered by the development team."],
      },
      discovery: [
        "Booking, payment, reservation/deposit, reservation-to-deposit, allocation, grouped booking, and extension scenarios",
        "Role permissions and notifications attached to each step",
        "Payment synchronization between RealERP/Back-office and CRM/Tavico",
      ],
      design: {
        flows: [
          {
            title: "Booking lifecycle (simplified)",
            steps: [
              "Booking",
              "Reservation / deposit",
              "Reservation → deposit",
              "Allocation",
              "Extension",
              "Contract states (19)",
            ],
          },
        ],
        bullets: [
          "8 end-to-end workflows including grouped booking",
          "19 contract states and their transitions",
          "Role permissions and notifications per transition",
        ],
      },
      requirements: [
        "End-to-end workflow descriptions (8 flows)",
        "Contract state model (19 states)",
        "Role/permission and notification rules",
      ],
      validation: [
        "~80 functional and regression test cases",
        "Workflow/payment defect documentation",
        "Regression verification of fixes across core booking journeys",
      ],
      outcome: [
        "8 end-to-end workflows and 19 contract states analyzed",
        "~80 functional/regression scenarios executed with fixes verified",
      ],
      artifacts: [
        { title: "Workflow & state analysis", desc: "8 E2E flows, 19 contract states." },
        { title: "Test scenarios", desc: "~80 functional and regression cases." },
        { title: "Defect reports", desc: "Workflow and payment defects with fix verification." },
      ],
      confidentialNote: CONFIDENTIAL_NOTE,
      takeaways: [
        "In cross-system ERP/CRM work, the state model is the contract between teams — defects cluster at transitions, not screens.",
        "Payment synchronization has to be tested on every state transition that moves money.",
      ],
    },
  },

  /* 6 ─ GAG ---------------------------------------------------------- */
  {
    slug: "gag-gender-age-group-classification",
    tier: "supporting",
    featured: true,
    categories: ["ai-data", "academic"],
    title: "GAG — Gender & Age Group Classification",
    roleLine: "Team Leader & Lead Developer • Deep Learning / Computer Vision • 2025",
    description:
      "Built the end-to-end computer-vision pipeline from dataset collection/curation and preprocessing to multi-task model training, evaluation, and live multi-face inference.",
    metrics: [
      { value: "8,240", label: "Images" },
      { value: "4", label: "CNN Backbones" },
      { value: "89.4%", label: "Gender Accuracy" },
      { value: "85.9%", label: "Age-group Accuracy" },
    ],
    secondaryMetric: "~170 ms / Face",
    tags: ["TensorFlow", "Computer Vision", "OpenCV", "MediaPipe"],
    links: [
      { label: "GitHub repository", href: "https://github.com/mthuy04/Gender-Classification---Age-Group-Prdection-from-Vietnamese-Portrait-Image" },
    ],
    detail: {
      overview: {
        type: "Deep learning / computer vision project",
        role: "Team Leader & Lead Developer",
        timeline: "Jun 2025",
        scope: "Dataset, preprocessing, multi-task model, benchmarking, evaluation, live webcam inference",
      },
      keyMetrics: [
        { value: "8,240", label: "Vietnamese facial images" },
        { value: "4", label: "CNN backbones benchmarked" },
        { value: "89.4%", label: "Gender accuracy (held-out test)" },
        { value: "85.9%", label: "Age-group accuracy (held-out test)" },
        { value: "~170 ms", label: "Per face on Apple M1" },
      ],
      context: [
        "A multi-task model that predicts gender and age group from Vietnamese facial images, running live on a webcam with multiple faces in frame.",
      ],
      problem: [
        "Live gender and age-group classification for several faces at once needs three things together: a curated dataset of Vietnamese faces, a model that learns both tasks, and inference fast enough for a webcam.",
      ],
      role: {
        owned: [
          "Personally collected and curated the 8,240-image dataset",
          "Personally built the technical pipeline: preprocessing, multi-task model training, benchmarking, evaluation, and live inference",
          "Led the team as Team Leader",
        ],
        contributed: [],
        others: [],
      },
      discovery: [
        "Dataset collection and curation of 8,240 Vietnamese facial images",
        "Preprocessing of face images for training",
      ],
      design: {
        flows: [
          {
            title: "Pipeline",
            steps: [
              "Dataset collection & curation",
              "Preprocessing",
              "Multi-task model (gender + age group)",
              "Benchmark 4 CNN backbones",
              "Held-out test evaluation",
              "Live webcam multi-face inference",
            ],
          },
        ],
        bullets: [],
      },
      requirements: [],
      technical: [
        { title: "Backbones benchmarked", desc: "ResNet50 • ResNet101 • EfficientNetB0 • InceptionV3" },
        { title: "Training", desc: "Python, TensorFlow/Keras multi-task model with gender and age-group heads." },
        { title: "Live inference", desc: "OpenCV + MediaPipe for live webcam input with multi-face detection." },
        { title: "Latency", desc: "~170 ms per face on Apple M1." },
      ],
      validation: [
        "Held-out test gender accuracy: 89.4%",
        "Held-out test age-group accuracy: 85.9%",
        "4 CNN backbones compared on the same data",
      ],
      outcome: [
        "Live multi-face webcam inference at ~170 ms per face on Apple M1",
        "89.4% gender and 85.9% age-group accuracy on the held-out test set",
      ],
      artifacts: [
        {
          title: "Live multi-face inference",
          desc: "Real-time webcam window labelling each detected face with gender and age group.",
          image: { src: "/images/gag-live-inference.webp", width: 1000, height: 988, alt: "Live webcam inference window with two detected faces labelled Female, Adult and Male, Adult" },
        },
        {
          title: "Training curves — ResNet50 (fine-tuned)",
          desc: "Loss and accuracy per epoch for the gender and age-group heads; one of the 4 benchmarked backbones.",
          image: { src: "/images/gag-resnet50-training-curves.webp", width: 1600, height: 793, alt: "Line charts of training and validation loss and accuracy over 10 epochs for the fine-tuned ResNet50 gender and age heads" },
        },
      ],
      takeaways: [
        "Benchmarking 4 backbones against the same held-out test set kept the model comparison fair.",
        "Live multi-face inference made latency (~170 ms per face on Apple M1) a requirement alongside accuracy.",
      ],
    },
  },

  /* 7 ─ HOUSING ------------------------------------------------------ */
  {
    slug: "housing-price-prediction",
    tier: "secondary",
    featured: true,
    categories: ["ai-data", "academic"],
    title: "Housing Price Prediction — Machine Learning Project",
    roleLine: "Team Leader • Machine Learning / Data Science • 2024",
    description:
      "Built and ran the end-to-end machine-learning pipeline across EDA, preprocessing, LightGBM regression, hyperparameter optimization, cross-validation, and held-out evaluation.",
    metrics: [
      { value: "50,000", label: "Records" },
      { value: "8", label: "Hyperparameters" },
      { value: "50", label: "Optuna Trials" },
      { value: "5-fold", label: "CV" },
    ],
    tags: ["Python", "Pandas", "LightGBM", "Optuna"],
    detail: {
      overview: {
        type: "Machine learning / data science project",
        role: "Team Leader",
        team: "4 members",
        timeline: "Dec 2024",
        scope: "End-to-end regression pipeline on 50,000 housing records",
      },
      context: ["Predicting housing prices from a dataset of 50,000 housing records."],
      problem: [
        "Raw housing data needs cleaning, outlier handling, and scaling before a regression model can be tuned and evaluated fairly.",
      ],
      role: {
        owned: ["Personally built and ran the entire end-to-end ML pipeline", "Led the 4-member team as Team Leader"],
        contributed: [],
        others: [],
      },
      discovery: ["Exploratory data analysis (EDA) of 50,000 records"],
      design: {
        flows: [
          {
            title: "Pipeline",
            steps: [
              "EDA",
              "Preprocessing & cleaning",
              "Outlier handling",
              "Feature scaling",
              "LightGBM regression",
              "Optuna tuning (8 hyperparameters, 50 trials)",
              "5-fold cross-validation",
              "Held-out test evaluation",
            ],
          },
        ],
        bullets: [],
      },
      requirements: [],
      technical: [
        { title: "Model", desc: "LightGBM regression." },
        { title: "Tuning", desc: "Optuna — 8 hyperparameters, 50 trials." },
        { title: "Validation", desc: "5-fold cross-validation and held-out test evaluation." },
        { title: "Tools", desc: "Python • Pandas • Scikit-learn • LightGBM • Optuna" },
      ],
      validation: ["5-fold cross-validation", "Held-out test evaluation"],
      outcome: ["A reproducible end-to-end pipeline from raw data to held-out evaluation"],
      artifacts: [
        {
          title: "Held-out predictions",
          desc: "Excerpt comparing actual price with the LightGBM prediction per record.",
          image: { src: "/images/housing-predictions.webp", width: 1400, height: 802, alt: "Table of housing records with square feet, bedrooms, bathrooms, neighborhood, year built, actual price, and LightGBM predicted price" },
        },
      ],
      takeaways: [
        "Separating cross-validation from a held-out test set kept tuning honest.",
        "Optuna made the search over 8 hyperparameters systematic instead of manual.",
      ],
    },
  },

  /* 8 ─ MED3DVLM ----------------------------------------------------- */
  {
    slug: "med3dvlm-adaptation",
    tier: "secondary",
    featured: true,
    categories: ["ai-data"],
    title: "Med3DVLM — 3D Medical Vision-Language Model Adaptation",
    roleLine: "Individual Project • Multimodal AI / VLM • 2026",
    description:
      "Adapted the open-source Med3DVLM codebase for single-machine experimentation using a DCFormer vision encoder, multimodal projector, and Qwen2.5-7B.",
    metrics: [
      { value: "10", label: "Cases" },
      { value: "2,520", label: "CT Slices" },
      { value: "51", label: "NIfTI Volumes" },
    ],
    notice: "Adapted from the open-source Med3DVLM implementation.",
    tags: ["PyTorch", "VLM", "Qwen2.5", "Medical AI"],
    links: [{ label: "Adapted repository (GitHub)", href: "https://github.com/mthuy04/DCFormer-3D-Medical-VLM" }],
    detail: {
      overview: {
        type: "Individual technical project — adaptation of an open-source codebase",
        role: "Individual project",
        timeline: "2026",
        scope: "Data preparation and single-machine adaptation of Med3DVLM workflows",
      },
      context: [
        "Med3DVLM is an open-source 3D medical vision-language model that combines a DCFormer vision encoder, a multimodal projector, and Qwen2.5-7B. This project adapts that existing codebase; the original architecture is the work of its authors.",
      ],
      problem: [
        "The original code assumes distributed training (DeepSpeed) and a specific environment, so it cannot run as-is on a single machine.",
      ],
      role: {
        owned: [
          "Prepared a 10-case data subset and converted 2,520 CT slices into 51 NIfTI volumes (target size 128 × 256 × 256)",
          "Adapted the codebase for single-machine execution",
          "Prepared projector pre-training, LoRA fine-tuning, and VQA evaluation workflows",
        ],
        contributed: [],
        others: ["Original Med3DVLM architecture and codebase: open-source authors."],
      },
      discovery: ["Data requirements of the original pipeline and its distributed-training assumptions"],
      design: {
        flows: [
          {
            title: "Adaptation workflow",
            steps: [
              "Select 10-case subset",
              "CT slices → NIfTI (2,520 → 51 volumes)",
              "Volume preparation (128 × 256 × 256)",
              "Single-machine code adaptation",
              "Projector pre-training workflow",
              "LoRA fine-tuning workflow",
              "VQA evaluation workflow",
            ],
          },
        ],
        bullets: [],
      },
      requirements: [],
      technical: [
        { title: "Stack", desc: "Python • PyTorch • Hugging Face Transformers • PEFT / LoRA • Qwen2.5-7B • DCFormer vision encoder • multimodal projector" },
        { title: "Single-machine changes", desc: "Removed/bypassed distributed and DeepSpeed handling; adjusted local paths, imports, device handling, and evaluation handling." },
        { title: "Data", desc: "10 cases, 2,520 CT slices, 51 NIfTI volumes, target volume 128 × 256 × 256." },
      ],
      validation: ["Workflows prepared for projector pre-training, LoRA fine-tuning, and VQA evaluation"],
      outcome: ["A single-machine-ready version of the Med3DVLM workflows with a prepared data subset"],
      artifacts: [{ title: "Adapted repository", desc: "Code changes and scripts on GitHub." }],
      notice: "Adapted from the open-source Med3DVLM implementation. No training performance is claimed.",
      takeaways: [
        "Running research code on one machine means finding every environment assumption — distributed setup, paths, imports, devices — and handling each explicitly.",
      ],
    },
  },

  /* 9 ─ COCOON ------------------------------------------------------- */
  {
    slug: "cocoon-crm-solution-design",
    tier: "secondary",
    featured: true,
    categories: ["ecommerce-crm", "academic"],
    title: "Cocoon Vietnam CRM Solution Design",
    roleLine: "Team Leader • CRM / Product Analysis • 2025–2026",
    description:
      "Designed a HubSpot-based CRM solution across Marketing, Sales, and Customer Service, including AS-IS/TO-BE workflows, customer segmentation, sales pipeline, service tickets, and CRM data structure.",
    metrics: [],
    tags: ["CRM", "HubSpot", "BRD", "AS-IS / TO-BE"],
    detail: {
      overview: {
        type: "CRM case study — HubSpot-based solution design",
        role: "Team Leader",
        timeline: "2025 – 2026",
        scope: "Marketing, Sales, and Customer Service",
      },
      context: ["A HubSpot-based CRM case study for Cocoon Vietnam covering Marketing, Sales, and Customer Service."],
      problem: [
        "Marketing, sales, and service activities need one customer record and consistent pipelines to be measurable.",
      ],
      role: {
        owned: ["Led the team as Team Leader"],
        contributed: ["AS-IS / TO-BE workflows, BRD, WBS, RACI, risk register, KPI framework, and functional test cases"],
        others: ["Academic team project."],
      },
      discovery: ["AS-IS workflows across Marketing, Sales, and Customer Service", "Customer segmentation"],
      design: {
        flows: [
          {
            title: "CRM data structure (HubSpot objects)",
            steps: ["Contacts", "Companies", "Deals", "Tickets", "Activities"],
          },
        ],
        bullets: ["TO-BE workflows", "Sales pipeline", "Service tickets"],
      },
      requirements: ["BRD", "WBS", "RACI", "Risk register", "KPI framework"],
      validation: ["Functional test cases"],
      outcome: ["A complete CRM solution design from AS-IS analysis to test cases"],
      artifacts: [
        { title: "BRD", desc: "Business requirements across the three functions." },
        { title: "WBS, RACI & risk register", desc: "Delivery planning artifacts." },
        { title: "KPI framework", desc: "Measures for marketing, sales, and service." },
        { title: "Functional test cases", desc: "Validation of the CRM configuration." },
      ],
      takeaways: [
        "Mapping Contacts, Companies, Deals, Tickets, and Activities first kept the three departments on one data model.",
      ],
    },
  },
];

export const otherAcademicProjects = [
  {
    title: "Healthcare CRM System",
    desc: "Healthcare CRM requirements pack: SRS, ERD, role-based access rules, and UAT scenarios.",
    tags: ["SRS", "ERD", "RBAC", "UAT"],
    links: [],
  },
  {
    title: "TeacherBee LMS Platform",
    desc: "LMS workflows and access logic: RBAC matrix, core user flows, edge cases, and a validation checklist.",
    tags: ["RBAC", "User Flow", "PHP/SQL"],
    links: [{ label: "GitHub", href: "https://github.com/PhuongVu51/FinalProject" }],
  },
  {
    title: "CampusTalk Social Network",
    desc: "Student micro-blogging system with JWT-based security, role-based interactions, and a 3-tier architecture.",
    tags: ["JWT", "React/Flask", "API"],
    links: [
      { label: "GitHub", href: "https://github.com/mthuy04/micro-blog" },
      { label: "Demo", href: "https://micro-blog-2-dmfc0lufq-mthuy04s-projects.vercel.app/" },
    ],
  },
  {
    title: "Blockchain Voting System",
    desc: "Academic exploration of decentralized voting: immutability, audit trails, and smart-contract logic in Solidity.",
    tags: ["Solidity", "Smart Contracts"],
    links: [{ label: "GitHub", href: "https://github.com/mthuy04/Blockchain-Decentralized-Voting-System" }],
  },
];

export function getCaseStudy(slug) {
  return caseStudies.find((c) => c.slug === slug);
}

/* ------------------------------------------------------------------ */
/* SKILLS                                                              */
/* ------------------------------------------------------------------ */

export const skills = {
  title: "Skills & Capabilities",
  groups: [
    {
      title: "Requirements & Product",
      items: [
        "Requirements Elicitation & Analysis",
        "SRS / BRD",
        "User Stories",
        "Use Cases",
        "Acceptance Criteria",
        "Business Rules",
        "Backlog / MVP Prioritization",
        "Requirement Traceability",
      ],
    },
    {
      title: "Process & System Analysis",
      items: [
        "BPMN",
        "AS-IS / TO-BE",
        "User Flows",
        "State Flows",
        "ERD / REA",
        "Relational Data Modelling",
        "Data Mapping",
        "Role / Permission Analysis",
        "REST API / Integration Analysis",
      ],
    },
    {
      title: "Testing & Delivery",
      items: [
        "Test Planning",
        "Functional Testing",
        "Regression Testing",
        "UAT",
        "Defect Tracking",
        "Deployment Validation",
        "Documentation",
        "User Guides",
        "Handover",
      ],
    },
    {
      title: "Technical & Tools",
      items: [
        "SQL / MySQL / PostgreSQL",
        "Python",
        "TypeScript",
        "REST APIs",
        "Jira",
        "Confluence",
        "Figma",
        "Excel / Google Sheets",
        "Git / GitHub",
      ],
    },
  ],
  exposure: {
    title: "AI / Product Exposure",
    items: [
      "STT / LLM / TTS Product Workflows",
      "Gemini API",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
    ],
  },
};

/* ------------------------------------------------------------------ */
/* EDUCATION & CERTIFICATIONS                                          */
/* ------------------------------------------------------------------ */

export const education = {
  institution: "VNU International School — Vietnam National University, Hanoi",
  degree: "B.Sc. Management Information Systems",
  meta: "2023–2027 • English-medium Program",
  status: "Final-year student • Coursework expected complete Dec 2026",
  gpa: { value: "3.59 / 4.00", label: "GPA" },
  scholarship: { value: "3 Semesters", label: "Academic Encouragement Scholarship" },
  // "Introduction to Data Science" is verified; the others were carried over from the previous site.
  coursework: [
    "Introduction to Data Science",
    "Enterprise Information Systems",
    "Database Systems",
    "Systems Analysis & Design",
    "Software Engineering",
  ],
};

export const certifications = [
  { title: "Microsoft Business Analyst Professional Certificate", year: "2026" },
  { title: "Aptis ESOL Certificate — CEFR B2", year: "2023" },
];

/* ------------------------------------------------------------------ */
/* ABOUT & HOW I DELIVER                                               */
/* ------------------------------------------------------------------ */

export const about = {
  title: "About Me",
  paragraphs: [
    "I’m a final-year Management Information Systems student with hands-on Business Analyst experience across SaaS/AI products, enterprise payment systems, ERP/CRM workflows, and e-commerce. I enjoy turning complex business rules and system behaviour into clear requirements, models, and testable product outcomes.",
    "My strength is working between business and technical teams: understanding user needs, structuring requirements, mapping system behaviour, and validating that the delivered product works as intended.",
  ],
  bringLabel: "What I Bring",
  bring: [
    { title: "System Thinking", copy: "Complex workflows, states, integrations, and data relationships." },
    { title: "Product Delivery", copy: "From requirements and analysis to validation, handover, and release support." },
    { title: "Technical Fluency", copy: "APIs, relational data, AI-enabled product workflows, and system testing." },
  ],
};

export const deliverySteps = [
  { num: "01", title: "Discover", copy: "Stakeholders, user needs, business rules, constraints, and edge cases." },
  { num: "02", title: "Define", copy: "SRS/BRD, user stories, use cases, acceptance criteria, and business rules." },
  { num: "03", title: "Model", copy: "BPMN, AS-IS/TO-BE, state/data flows, permissions, and integrations." },
  { num: "04", title: "Validate", copy: "Functional testing, regression testing, UAT, issue triage, and traceability." },
  { num: "05", title: "Deliver", copy: "Documentation, user guides, handover, deployment validation, and release support." },
];

/* ------------------------------------------------------------------ */
/* CONTACT & FOOTER                                                    */
/* ------------------------------------------------------------------ */

export const contactSection = {
  positioning: "Business Analyst | SaaS • E-commerce • Product Systems",
  intro:
    "Open to Business Analyst / Product Analyst opportunities where I can contribute to requirements analysis, product delivery, and user-focused system improvement.",
  badges: ["Hanoi, Vietnam", "Open to Full-time Opportunities", "English: CEFR B2"],
};

export const footer = {
  left: "© 2026 Nguyen Minh Thuy",
  right: "Business Analyst • Product • Systems",
};
