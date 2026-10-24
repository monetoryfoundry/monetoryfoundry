export function Diagram() {
  return (
    <div className="diagram-container fade-in">
      <svg
        viewBox="0 0 880 400"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        role="img"
        aria-labelledby="arch-diagram-title"
      >
        <title id="arch-diagram-title">
          A lending protocol connects tokenized RWA collateral to markets
          across chains
        </title>
        <defs>
          <marker
            id="foundry-arrow"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#B0B0B0" />
          </marker>
        </defs>

        <text
          x="110"
          y="40"
          textAnchor="middle"
          fontSize="10"
          fontWeight="500"
          letterSpacing="1.5"
          fill="#8A8A8A"
        >
          RWA COLLATERAL
        </text>
        <rect x="20" y="60" width="180" height="48" rx="8" fill="#F7F8F7" stroke="#D0D0D0" />
        <text x="110" y="88" textAnchor="middle" fontSize="12" fontWeight="500" fill="#0A0A0A">
          Tokenized Treasuries
        </text>
        <rect x="20" y="130" width="180" height="48" rx="8" fill="#F7F8F7" stroke="#D0D0D0" />
        <text x="110" y="158" textAnchor="middle" fontSize="12" fontWeight="500" fill="#0A0A0A">
          Private Credit
        </text>
        <rect x="20" y="200" width="180" height="48" rx="8" fill="#F7F8F7" stroke="#D0D0D0" />
        <text x="110" y="228" textAnchor="middle" fontSize="12" fontWeight="500" fill="#0A0A0A">
          Real Estate / Commodities
        </text>

        <line x1="200" y1="84" x2="310" y2="178" stroke="#D0D0D0" markerEnd="url(#foundry-arrow)" />
        <line x1="200" y1="154" x2="310" y2="178" stroke="#D0D0D0" markerEnd="url(#foundry-arrow)" />
        <line x1="200" y1="224" x2="310" y2="198" stroke="#D0D0D0" markerEnd="url(#foundry-arrow)" />

        <rect x="310" y="110" width="260" height="160" rx="12" fill="#1A3A2A" />
        <text x="440" y="150" textAnchor="middle" fontSize="13" fontWeight="600" fill="#FFFFFF">
          LENDING PROTOCOL
        </text>
        <rect
          x="330"
          y="168"
          width="100"
          height="34"
          rx="6"
          fill="rgba(255,255,255,0.12)"
          stroke="rgba(255,255,255,0.2)"
        />
        <text
          x="380"
          y="190"
          textAnchor="middle"
          fontSize="10"
          fill="rgba(255,255,255,0.85)"
        >
          Risk Engine
        </text>
        <rect
          x="450"
          y="168"
          width="100"
          height="34"
          rx="6"
          fill="rgba(255,255,255,0.12)"
          stroke="rgba(255,255,255,0.2)"
        />
        <text
          x="500"
          y="190"
          textAnchor="middle"
          fontSize="10"
          fill="rgba(255,255,255,0.85)"
        >
          Vault Layer
        </text>
        <rect
          x="330"
          y="216"
          width="220"
          height="34"
          rx="6"
          fill="rgba(255,255,255,0.08)"
          stroke="rgba(255,255,255,0.15)"
        />
        <text
          x="440"
          y="238"
          textAnchor="middle"
          fontSize="10"
          fill="rgba(255,255,255,0.7)"
        >
          Cross-Chain Settlement (Message Passing)
        </text>

        <line x1="570" y1="178" x2="660" y2="84" stroke="#D0D0D0" markerEnd="url(#foundry-arrow)" />
        <line x1="570" y1="190" x2="660" y2="154" stroke="#D0D0D0" markerEnd="url(#foundry-arrow)" />
        <line x1="570" y1="200" x2="660" y2="224" stroke="#D0D0D0" markerEnd="url(#foundry-arrow)" />
        <line x1="570" y1="210" x2="660" y2="294" stroke="#D0D0D0" markerEnd="url(#foundry-arrow)" />

        <text
          x="760"
          y="40"
          textAnchor="middle"
          fontSize="10"
          fontWeight="500"
          letterSpacing="1.5"
          fill="#8A8A8A"
        >
          LENDING MARKETS
        </text>
        <rect x="660" y="60" width="200" height="48" rx="8" fill="#F7F8F7" stroke="#D0D0D0" />
        <text x="760" y="88" textAnchor="middle" fontSize="12" fontWeight="500" fill="#0A0A0A">
          Ethereum Mainnet
        </text>
        <rect x="660" y="130" width="200" height="48" rx="8" fill="#F7F8F7" stroke="#D0D0D0" />
        <text x="760" y="158" textAnchor="middle" fontSize="12" fontWeight="500" fill="#0A0A0A">
          Arbitrum / Base
        </text>
        <rect x="660" y="200" width="200" height="48" rx="8" fill="#F7F8F7" stroke="#D0D0D0" />
        <text x="760" y="228" textAnchor="middle" fontSize="12" fontWeight="500" fill="#0A0A0A">
          Optimism / Polygon
        </text>
        <rect x="660" y="270" width="200" height="48" rx="8" fill="#F7F8F7" stroke="#D0D0D0" />
        <text x="760" y="298" textAnchor="middle" fontSize="12" fontWeight="500" fill="#0A0A0A">
          Non-EVM (Solana, etc.)
        </text>

        <text
          x="440"
          y="380"
          textAnchor="middle"
          fontSize="11"
          fontWeight="300"
          fontStyle="italic"
          fill="#8A8A8A"
        >
          Lenders deposit → the protocol matches risk-assessed RWA collateral → yield flows cross-chain
        </text>
      </svg>
    </div>
  );
}
