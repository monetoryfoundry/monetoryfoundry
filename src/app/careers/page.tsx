import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/site/Button";
import { PageHeader } from "@/components/site/PageHeader";
import { careersIntro, contact, metadataContent, openPositions } from "@/content/site";

export const metadata: Metadata = {
  title: metadataContent.careersTitle,
  description: metadataContent.careersDescription,
};

export default function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title={careersIntro.heading}
        description={careersIntro.copy}
        actions={
          <Button href={`mailto:${contact.email}?subject=Careers%20inquiry`}>
            Email hiring
          </Button>
        }
      />

      <section className="border-b border-border bg-surface">
        <div className="container-page py-8">
          <p className="max-w-3xl text-sm leading-relaxed text-muted">
            {careersIntro.regions}
          </p>
        </div>
      </section>

      <section>
        <div className="container-page py-14">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-bold tracking-[-0.02em]">Open positions</h2>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              {openPositions.length} roles
            </p>
          </div>
          <ul className="mt-8 soft-card divide-y divide-border overflow-hidden">
            {openPositions.map((role) => (
              <li key={role.slug}>
                <Link
                  href={`/careers/${role.slug}`}
                  className="block px-5 py-6 transition-colors duration-200 hover:bg-surface sm:px-7"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold tracking-[-0.01em]">
                        {role.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-strong">{role.summary}</p>
                      <p className="mt-3 text-sm text-muted">
                        {role.team} · {role.locations}
                      </p>
                    </div>
                    <span className="shrink-0 rounded-md bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-ink">
                      {role.type}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
