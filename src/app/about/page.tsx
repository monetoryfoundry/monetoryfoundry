import type { Metadata } from "next";
import { Button } from "@/components/site/Button";
import { Mark } from "@/components/site/Wordmark";
import { company, focusAreas, metadataContent } from "@/content/site";

export const metadata: Metadata = {
  title: metadataContent.aboutTitle,
  description: metadataContent.aboutDescription,
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="container-page grid gap-12 py-20 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              About
            </p>
            <h1 className="mt-5 max-w-2xl text-4xl font-bold tracking-[-0.04em] sm:text-5xl lg:text-[3.25rem] animate-fade-up">
              {company.aboutLead}
            </h1>
          </div>
          <p className="max-w-md text-base leading-relaxed text-muted lg:justify-self-end animate-fade-up animate-delay-1">
            {company.whatWeAre}
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-page section-pad">
          <div className="grid gap-14 lg:grid-cols-3">
            {company.aboutStory.map((block) => (
              <article key={block.title}>
                <h2 className="text-xl font-semibold tracking-[-0.02em]">{block.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted sm:text-[15px]">
                  {block.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="container-page grid gap-10 py-16 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="flex aspect-[4/3] items-center justify-center rounded-xl border border-border bg-white">
            <div className="text-center">
              <Mark className="mx-auto h-28 w-28" />
              <p className="mt-5 text-sm font-semibold tracking-[-0.01em]">
                Monetary Foundry
              </p>
              <p className="mt-1 text-xs text-muted">Founded {company.founded}</p>
            </div>
          </div>
          <div className="lg:pl-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              Mission & vision
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em]">
              Engineering-grade finance infrastructure
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-strong">
              {company.mission}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">{company.vision}</p>
            <p className="mt-6 text-sm text-muted">{company.location}</p>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-page section-pad">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              Focus
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em]">
              Where our engineering concentrates
            </h2>
            <p className="mt-4 text-muted">
              The infrastructure layers of modern finance - not a single app or token
              narrative.
            </p>
          </div>
          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area) => (
              <article key={area.title}>
                <h3 className="text-lg font-semibold tracking-[-0.02em]">{area.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container-page section-pad">
          <div className="rounded-xl border border-border bg-surface px-8 py-12 sm:px-10">
            <h2 className="text-2xl font-bold tracking-[-0.02em]">How we work</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              {company.howWeWork}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact">Talk with us</Button>
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
