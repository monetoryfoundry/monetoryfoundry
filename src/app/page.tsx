import { Button } from "@/components/site/Button";
import { PartnerLogos } from "@/components/site/PartnerLogos";
import { company, shapingNext, testimonials } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="container-page flex flex-col items-center py-24 text-center sm:py-32">
          <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-6xl animate-fade-up">
            {company.tagline}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg animate-fade-up animate-delay-1">
            {company.heroSupport}
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 animate-fade-up animate-delay-2">
            <Button href="/contact">Contact us</Button>
            <Button href="/about" variant="secondary">
              About the company
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-page section-pad">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            Working with
          </p>
          <h2 className="mt-3 text-center text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
            Backed by leaders reshaping finance
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-muted sm:text-base">
            Ecosystem, protocol, and capital partners we work alongside across digital
            finance.
          </p>
          <div className="mt-12">
            <PartnerLogos />
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="container-page section-pad">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
            What collaborators say
          </h2>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {testimonials.map((item) => (
              <blockquote key={item.name} className="soft-card flex h-full flex-col p-7">
                <p className="flex-1 text-base leading-relaxed text-muted-strong">
                  “{item.quote}”
                </p>
                <footer className="mt-8 border-t border-border pt-4">
                  <p className="font-semibold">{item.name}</p>
                  <p className="mt-1 text-sm text-muted">{item.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-page section-pad">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            Direction
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
            We’re shaping what comes next
          </h2>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {shapingNext.map((item, index) => (
              <article key={item.title}>
                <p className="text-xs font-semibold text-muted">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-lg font-semibold tracking-[-0.02em]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container-page section-pad">
          <div className="rounded-xl border border-border bg-surface px-8 py-14 text-center sm:px-12 sm:py-16">
            <h2 className="text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
              Let’s build together
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
              Whether you need protocol engineering, payment infrastructure, RWA
              systems, or a senior technical team - start a conversation with Monetary
              Foundry.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button href="/contact">Contact us</Button>
              <Button href="/careers" variant="secondary">
                Explore careers
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
