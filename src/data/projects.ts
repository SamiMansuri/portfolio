export interface ProjectItem {
  number: string;
  category: string;
  title: string;
  role: string;
  description: string;
  tags: string[];
  results: string[];
  link: string | null;
  linkLabel: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    number: "01",
    category: "Production System",
    title: "Retail POS & GST Billing Platform",
    role: "Sole developer · Design to deployment",
    description:
      "End-to-end retail POS system featuring GST-compliant billing, inventory management, customer credit, barcode scanning and thermal printing.",
    tags: ["Node.js", "React", "PostgreSQL", "Neon"],
    results: [
      "Built GST-compliant billing (inclusive and reverse, CGST/SGST) and a GST summary report for the store's accountant.",
      "Designed an append-only purchase payment ledger and batch-level stock tracking using PostgreSQL sequences.",
      "Managed schema changes with node-pg-migrate across separate stage and production Neon databases.",
      "Integrated thermal receipt (ESC/POS) and barcode label (TSPL) printing into the billing flow.",
    ],
    link: "[https://github.com/SamiMansuri/mart-pos]", // client system, no public repo
    linkLabel: "View source",
  },
  {
    number: "02",
    category: "Freelance",
    title: "Subscription Billing & Secure Auth (Brello)",
    role: "Backend developer",
    description:
      "Billing and authentication backend for a subscription product: Stripe-powered plans with webhook-driven status sync and Twilio TOTP login.",
    tags: ["Node.js", "Stripe", "Twilio", "Webhooks"],
    results: [
      "Integrated Stripe subscriptions with plan upgrades, downgrades, and recurring payments.",
      "Built secure webhook handlers that keep subscription and payment state in sync with the app database.",
      "Implemented Twilio-based TOTP authentication for login and identity verification.",
      "Zero missed payment events since launch.",
    ],
    link: null,
    linkLabel: "Client project · private repo",
  },
  {
    number: "03",
    category: "Applied AI",
    title: "AI Incident Investigator",
    role: "Sole developer · Python",
    description:
      "A Python agent that investigates production incidents using a ReAct loop with tools. It is built to run on any LLM provider and is tested with a deterministic evaluation harness.",
    tags: ["Python", "ReAct", "Tool Calling", "LLM Abstraction", "Eval Harness"],
    results: [
      "Built a ReAct loop from scratch, without an agent framework, with a ToolRegistry that auto-generates JSON schemas from tool definitions.",
      "Designed a provider-agnostic LLMProvider / LLMFactory layer so models can be swapped without touching agent logic.",
      "Tested against a deterministic eval harness of production incident scenarios.",
      "Integrated with the POS backend as its first real target, investigating server health and errors.",
    ],
    link: "[https://github.com/SamiMansuri/AI-Incident-Investigator]",
    linkLabel: "View source",
  },
];
