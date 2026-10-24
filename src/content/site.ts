export const company = {
  name: "Monetary Foundry",
  title: "Monetary Foundry — Protocol engineering for cross-chain RWA lending",
  description:
    "Monetary Foundry is a protocol engineering company. We design and build cross-chain lending infrastructure for tokenized real-world assets — risk systems, vaults, and settlement — as distinct projects for the institutions that run them.",
  email: "support@monetoryfoundry.com",
  linkedin: "https://www.linkedin.com/company/monetoryfoundry/",
  year: 2026,
} as const;

export const navigation = [
  { label: "Thesis", href: "#thesis" },
  { label: "Work", href: "#work" },
  { label: "Team", href: "#founder" },
] as const;

export const stats = [
  {
    value: "$15T",
    description: "Global private credit market migrating to digital rails",
  },
  {
    value: "$12B+",
    description: "Tokenized RWAs on-chain today, growing 10x annually",
  },
  {
    value: "7+",
    description: "Chains with meaningful RWA activity and no unified lending layer",
  },
] as const;

export const steps = [
  {
    number: "01",
    title: "Collateral Onboarding",
    body: "Asset originators tokenize RWAs and register them as collateral types on the protocol’s risk engine — permissionlessly, with on-chain attestations.",
  },
  {
    number: "02",
    title: "Risk-Curated Vaults",
    body: "Independent risk curators create lending vaults with specific collateral parameters, LTV ratios, and liquidation logic — separating risk from execution.",
  },
  {
    number: "03",
    title: "Cross-Chain Settlement",
    body: "Lenders deposit from any supported chain. A message-passing layer settles borrow/repay flows across networks without bridging tokens.",
  },
] as const;

export const priorWork = [
  {
    org: "Rainbow Wallet",
    description:
      "Cross-chain and same-chain swap aggregation, staking, DEX routing, and token generation — powering one of Ethereum’s most beloved independent wallets.",
  },
  {
    org: "Borsa Network",
    description:
      "Chain-abstracted DeFi intents and account abstraction on ERC-4337 — enabling gasless, cross-chain execution.",
  },
  {
    org: "Zero Hash",
    description:
      "Crypto-as-a-service infrastructure at a stablecoin unicorn — powering embedded digital asset settlement for fintechs.",
  },
  {
    org: "Mara",
    description:
      "MPC wallet systems and layer-2 EVM blockchain development at a $23M-backed crypto brokerage expanding digital finance across Africa.",
  },
  {
    org: "e-Money",
    description:
      "Core contributions to a Cosmos SDK mainnet layer-1 — a European currency-backed stablecoin issuer.",
  },
  {
    org: "Tradeline",
    description:
      "Enterprise credit applications for maritime trade finance on Hyperledger — bridging traditional credit rails and distributed ledger technology.",
  },
] as const;
