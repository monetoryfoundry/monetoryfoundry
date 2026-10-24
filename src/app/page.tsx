import { Diagram } from "@/components/site/Diagram";
import { Reveal } from "@/components/site/Reveal";
import { company, priorWork, stats, steps } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <Reveal />
      <section className="hero" id="top">
        <div className="hero-content fade-in visible">
          <div className="hero-tag">Protocol engineering company</div>
          <h1>
            Real-world assets deserve <em>real</em> lending markets
          </h1>
          <p className="hero-sub">{company.description}</p>
        </div>
      </section>

      <section className="thesis" id="thesis">
        <div className="container">
          <div className="section-label fade-in">Thesis</div>
          <div className="thesis-grid">
            <div className="thesis-statement fade-in">
              $15T in private credit is moving on-chain. The lending
              infrastructure isn&apos;t ready.
            </div>
            <div className="thesis-body fade-in">
              <p>
                BlackRock&apos;s BUIDL, Apollo&apos;s tokenized credit funds, and
                the explosion of on-chain treasuries prove the thesis:{" "}
                <strong>institutional capital wants programmable yield.</strong>
              </p>
              <p>
                But today&apos;s RWA lending is fragmented — siloed on single
                chains, locked into proprietary pools, and missing the
                composability that makes DeFi work. Morpho proved that modular
                lending wins. We carry that logic{" "}
                <strong>cross-chain and into real-world collateral.</strong>
              </p>
              <p>
                Monetary Foundry builds the settlement layers where tokenized
                RWAs meet on-chain capital markets — across Ethereum, L2s, and
                beyond. Each one is its own protocol, shaped for the assets and
                institutions behind it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="numbers">
        <div className="container">
          <div className="numbers-grid">
            {stats.map((stat) => (
              <div className="number-card fade-in" key={stat.value}>
                <div className="number-val">{stat.value}</div>
                <p className="number-desc">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="architecture" id="work">
        <div className="container">
          <div className="section-label fade-in">What we build</div>
          <div className="arch-intro fade-in">
            <h2>Modular. Cross-chain. Non-custodial.</h2>
            <p>
              The protocols we build separate risk curation from execution —
              so asset originators, risk managers, and liquidity providers can
              compose lending markets permissionlessly.
            </p>
          </div>
          <Diagram />
        </div>
      </section>

      <section className="how">
        <div className="container">
          <div className="section-label fade-in">How it works</div>
          <p className="how-lead fade-in">
            This is the shape of the systems we build. Collateral, risk, and
            settlement are designed again for each set of assets, curators, and
            chains.
          </p>
          <div className="how-grid">
            {steps.map((step) => (
              <article className="how-card fade-in" key={step.number}>
                <div className="how-num">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="founder" id="founder">
        <div className="container">
          <div className="section-label fade-in">Team</div>
          <div className="founder-content fade-in">
            <div className="founder-name">Built by Practitioners</div>
            <div className="founder-title">
              Protocol Engineering · Cross-Chain Infrastructure · DeFi Systems
            </div>
            <p className="founder-bio">
              Monetary Foundry is a protocol engineering company. We ship
              production systems across the full stack — from L1 consensus to
              cross-chain swaps to smart contract wallets — and we bring that
              practice to every lending system we take on.
            </p>
            <p className="founder-bio">
              Prior work spans some of the most recognized names in crypto
              infrastructure:
            </p>
            <div className="resume-grid">
              {priorWork.map((item) => (
                <article className="resume-item" key={item.org}>
                  <div className="resume-org">{item.org}</div>
                  <p className="resume-desc">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2 className="fade-in">Building with us?</h2>
          <p className="fade-in">
            We partner with asset originators, risk curators, and protocol
            teams to design and build lending infrastructure around real-world
            collateral.
          </p>
          <div className="cta-buttons fade-in">
            <a className="btn-primary" href={`mailto:${company.email}`}>
              Contact Us
            </a>
            <a className="btn-secondary" href="#work">
              See the work
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
