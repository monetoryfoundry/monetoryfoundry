export const company = {
  name: "Monetary Foundry",
  tagline: "Infrastructure for programmable finance.",
  heroSupport:
    "We design and engineer DeFi protocols, stablecoin payment infrastructure, RWA systems, fintech products, and Layer 2 smart contract systems for modern financial markets.",
  mission:
    "Build the technical foundations that let capital, assets, and liquidity move through programmable financial systems with clarity and control.",
  vision:
    "Financial markets where digital assets, real-world value, and payment infrastructure operate as interoperable, engineering-grade systems.",
  whatWeAre:
    "Monetary Foundry is a New York-based financial technology company. We develop protocol software, payment infrastructure, and smart contract systems across DeFi, stablecoins, real-world assets, and Layer 2 networks.",
  howWeWork:
    "We work as an engineering-led product studio for financial infrastructure - owning architecture, contract design, systems integration, and delivery across the stack.",
  aboutLead:
    "We build the systems behind programmable finance - quietly, carefully, and with the discipline of infrastructure engineering.",
  aboutStory: [
    {
      title: "Why we exist",
      body: "Capital markets are becoming programmable. The teams that win will treat protocols, payments, and asset systems as durable infrastructure, not demos. Monetary Foundry was founded to do that work.",
    },
    {
      title: "How we approach it",
      body: "We own architecture, contract design, integration, and delivery. Risk surfaces stay explicit. Interfaces stay operable. Shipping means something a team can run after launch.",
    },
    {
      title: "Where we focus",
      body: "DeFi protocol systems, stablecoin payment rails, RWA infrastructure, fintech products, and Layer 2 smart contracts - connected by shared engineering standards.",
    },
  ],
  founded: "February 5, 2024",
  location: "New York City, New York, United States",
} as const;

export const contact = {
  email: "support@monetoryfoundry.com",
  linkedin: "https://www.linkedin.com/company/monetoryfoundry/",
  address: "New York City, New York, United States",
} as const;

export const navigation = [
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;

export const focusAreas = [
  {
    title: "DeFi protocols",
    description:
      "Lending, borrowing, vaults, collateral engines, liquidity mechanisms, and protocol architecture on EVM networks.",
  },
  {
    title: "Stablecoin payment infrastructure",
    description:
      "Settlement rails, payment orchestration, treasury movement, and operational workflows for programmable money.",
  },
  {
    title: "RWA systems",
    description:
      "Asset representation, valuation data pipelines, collateral eligibility, and credit workflows for real-world value.",
  },
  {
    title: "Fintech products",
    description:
      "Application-layer financial products that sit on top of protocol and payment infrastructure.",
  },
  {
    title: "Layer 2 smart contracts",
    description:
      "Contract development, deployment patterns, and protocol adaptations for L2 execution environments.",
  },
  {
    title: "Financial engineering",
    description:
      "Shared risk logic, oracle integrations, testing systems, security review readiness, and production tooling.",
  },
] as const;

export const partners = [
  { name: "Coinbase", logo: "/logos/coinbase.png" },
  { name: "Morpho", logo: "/logos/morpho.png" },
  { name: "Aave", logo: "/logos/aave.png" },
  { name: "Sky", logo: "/logos/sky.png" },
  { name: "Shima Capital", logo: "/logos/shima-capital.png" },
  { name: "BitAngels", logo: "/logos/bitangels.png" },
  { name: "Apollo", logo: "/logos/apollo.png" },
  { name: "Ribbit Capital", logo: "/logos/ribbit-capital.png" },
  { name: "Paradigm", logo: "/logos/paradigm.png" },
  { name: "Kraken Ventures", logo: "/logos/kraken-ventures.png" },
] as const;

export const testimonials = [
  {
    quote:
      "Monetary Foundry approaches protocol work like infrastructure engineering - clear ownership of risk surfaces, contract boundaries, and delivery discipline.",
    name: "Elena Vogt",
    role: "Partner, Digital Asset Strategy",
  },
  {
    quote:
      "They translated a complex payment and settlement requirement into a system we could operate, monitor, and extend without rewriting the core.",
    name: "Marcus Hale",
    role: "Head of Product, Fintech Platform",
  },
  {
    quote:
      "Rare combination of Solidity depth and financial-mechanism literacy. Architecture reviews were precise, and the team owned the hard decisions.",
    name: "Priya Nandakumar",
    role: "Protocol Lead, Onchain Credit",
  },
] as const;

export const shapingNext = [
  {
    title: "Protocol systems that institutions can actually run",
    body: "Configurable markets, operational clarity, and risk controls designed for teams that have to live with the system after launch.",
  },
  {
    title: "Payments infrastructure for programmable money",
    body: "Stablecoin rails that treat settlement, liquidity, and reconciliation as first-class engineering problems.",
  },
  {
    title: "RWA and L2 as production surfaces",
    body: "Connecting real-world value and Layer 2 execution into the same disciplined contract and systems practice.",
  },
] as const;

export const careersIntro = {
  heading: "Build financial infrastructure with us",
  copy: "We hire senior operators across protocol engineering, security, product, and data - people who have shipped production systems and can own hard technical decisions.",
  regions:
    "All roles are fully remote, full-time. We prioritize experienced talent across mainland China, Hong Kong, Taiwan, and Singapore, and review exceptional candidates globally.",
} as const;

const remoteLocation = "Fully remote / Full-time";

export const openPositions = [
  {
    slug: "senior-solidity-smart-contract-engineer",
    title: "Senior Solidity Smart Contract Engineer",
    team: "Protocol Engineering",
    type: "Full-time",
    locations: remoteLocation,
    summary:
      "Design and implement production Solidity systems across DeFi, payments, and L2 deployments.",
    responsibilities: [
      "Own core Solidity modules for protocol, vault, collateral, or settlement flows",
      "Write rigorous Foundry coverage for edge cases and failure modes",
      "Partner on architecture, gas-critical paths, and upgrade safety",
      "Document invariants, assumptions, and operational constraints",
    ],
    requirements: [
      "Production Solidity/EVM experience on shipped systems",
      "Strong Foundry, security habits, and upgradeability fluency",
      "Ability to defend protocol tradeoffs with clarity",
      "5+ years of software engineering preferred",
    ],
  },
  {
    slug: "lead-blockchain-protocol-architect",
    title: "Lead Blockchain Protocol Architect",
    team: "Protocol Architecture",
    type: "Full-time",
    locations: remoteLocation,
    summary:
      "Lead cross-product contract architecture and set technical standards for protocol delivery.",
    responsibilities: [
      "Define architecture across DeFi, RWA, payments, and L2 surfaces",
      "Lead design reviews for risk-sensitive modules",
      "Mentor senior engineers and raise engineering quality",
      "Align product, security, and release readiness",
    ],
    requirements: [
      "Track record owning critical contract architecture",
      "Deep EVM, oracle, liquidation, and operational-risk fluency",
      "Experience leading or strongly influencing protocol teams",
      "Excellent technical communication; Mandarin a plus",
    ],
  },
  {
    slug: "senior-smart-contract-auditor",
    title: "Senior Smart Contract Auditor",
    team: "Security",
    type: "Full-time",
    locations: remoteLocation,
    summary:
      "Lead deep contract review, invariant analysis, and remediation guidance before release.",
    responsibilities: [
      "Perform architecture-aware smart contract audits",
      "Identify economic and implementation vulnerabilities",
      "Partner with engineering on remediation quality",
      "Improve secure coding standards across teams",
    ],
    requirements: [
      "Proven smart-contract audit experience on DeFi or payments systems",
      "Ability to reason about incentives, not only syntax bugs",
      "Strong written findings and practical remediation guidance",
      "Comfortable working alongside protocol engineers",
    ],
  },
  {
    slug: "protocol-security-engineer",
    title: "Protocol Security Engineer",
    team: "Security",
    type: "Full-time",
    locations: remoteLocation,
    summary:
      "Build threat models, fuzzing programs, and release gates for protocol products.",
    responsibilities: [
      "Own invariant and fuzz testing programs",
      "Threat-model modules before implementation hardens",
      "Coordinate external review readiness",
      "Raise baseline security across protocol teams",
    ],
    requirements: [
      "Hands-on experience securing Solidity systems",
      "Foundry fuzzing and audit-workflow familiarity",
      "Bias toward practical risk reduction",
      "Clear collaboration with product and engineering leads",
    ],
  },
  {
    slug: "senior-defi-ecosystem-lead",
    title: "Senior DeFi Ecosystem Lead",
    team: "Ecosystem",
    type: "Full-time",
    locations: remoteLocation,
    summary:
      "Drive protocol partnerships, integrations, and ecosystem growth across DeFi networks.",
    responsibilities: [
      "Own priority ecosystem relationships and integration paths",
      "Translate partner needs into product and engineering requirements",
      "Coordinate launches, co-marketing, and technical enablement",
      "Maintain a clear map of opportunity across L1/L2 ecosystems",
    ],
    requirements: [
      "Deep DeFi ecosystem fluency and existing network",
      "Ability to work closely with protocol engineers",
      "Strong judgment on which partnerships create real value",
      "Excellent communication with technical and non-technical stakeholders",
    ],
  },
  {
    slug: "senior-data-engineer",
    title: "Senior Data Engineer",
    team: "Data",
    type: "Full-time",
    locations: remoteLocation,
    summary:
      "Build indexing, analytics, and operational data systems for protocol and payments products.",
    responsibilities: [
      "Design reliable pipelines for onchain and offchain data",
      "Support risk, product, and ops dashboards",
      "Improve data quality, freshness, and observability",
      "Partner with protocol teams on event schemas and indexing needs",
    ],
    requirements: [
      "Strong data engineering background in production environments",
      "Familiarity with blockchain data models preferred",
      "Experience with warehousing, streaming, and observability tools",
      "Ability to turn ambiguous product needs into durable data systems",
    ],
  },
  {
    slug: "senior-defi-product-lead",
    title: "Senior DeFi Product Lead",
    team: "Product",
    type: "Full-time",
    locations: remoteLocation,
    summary:
      "Lead product definition for DeFi and payments infrastructure with engineering-grade rigor.",
    responsibilities: [
      "Own product strategy for protocol and infrastructure workstreams",
      "Write precise requirements with risk and operational constraints",
      "Balance user needs, partner needs, and engineering reality",
      "Drive delivery milestones with CTO and protocol leads",
    ],
    requirements: [
      "Experience shipping DeFi or fintech infrastructure products",
      "Comfortable reading protocol designs and technical tradeoffs",
      "Strong prioritization and stakeholder management",
      "Clear written product thinking",
    ],
  },
] as const;

export const metadataContent = {
  title: "Monetary Foundry",
  description:
    "Monetary Foundry builds DeFi protocols, stablecoin payment infrastructure, RWA systems, and Layer 2 smart contract platforms.",
  aboutTitle: "About",
  aboutDescription: "What Monetary Foundry is, how we work, and where we focus.",
  careersTitle: "Careers",
  careersDescription:
    "Fully remote full-time roles across protocol, security, product, and data.",
  contactTitle: "Contact",
  contactDescription: "Reach Monetary Foundry for partnerships or hiring.",
} as const;
